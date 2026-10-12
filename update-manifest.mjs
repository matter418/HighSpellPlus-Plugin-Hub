// Recomputes every entry's asset_sha from the bundle in plugins/ and rewrites manifest.json.
// Run after dropping a new or updated <RepositoryName>.js into plugins/:
//   node update-manifest.mjs
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(root, 'manifest.json');
const entries = JSON.parse(readFileSync(manifestPath, 'utf8'));

let changed = 0;
for (const e of entries) {
    const rel = e.asset ?? `plugins/${e.repository_name}.js`;
    const file = join(root, rel);
    if (!existsSync(file)) {
        console.error(`MISSING ${rel} (for "${e.display_name ?? e.repository_name}")`);
        process.exitCode = 1;
        continue;
    }
    const sha = 'sha256:' + createHash('sha256').update(readFileSync(file)).digest('hex');
    if (e.asset_sha !== sha) changed++;
    e.asset_sha = sha;
    console.log(`${(e.display_name ?? e.repository_name).padEnd(16)} ${rel.padEnd(32)} ${sha}`);
}
writeFileSync(manifestPath, JSON.stringify(entries, null, 2) + '\n');
console.log(`\n${entries.length} entries, ${changed} sha${changed === 1 ? '' : 's'} updated.`);
