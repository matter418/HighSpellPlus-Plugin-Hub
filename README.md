# Highspell+ Plugin Hub

The plugin list for the [Highspell+](https://github.com/matter418/HighSpellPlus) client.
The client reads `manifest.json` from this repository and downloads each plugin bundle from
`plugins/` (both over `raw.githubusercontent.com`), verifying the bundle against the
`asset_sha` recorded in the manifest.

## Layout

| Path | What it is |
|---|---|
| `manifest.json` | The list the client's Plugin Hub shows. One entry per plugin. |
| `plugins/<RepositoryName>.js` | The built, single-file plugin bundle the client installs. |
| `update-manifest.mjs` | Recomputes every `asset_sha` from the files in `plugins/`. |

Each manifest entry:

```json
{
  "repository_owner": "matter418",
  "repository_name": "QuickDrop",
  "asset_sha": "sha256:…",
  "display_name": "Quick Drop",
  "display_author": "matter",
  "display_description": "One line shown in the hub."
}
```

`repository_owner` / `repository_name` point at the plugin's source repository (the hub's
"View on GitHub" link). The bundle is expected at `plugins/<repository_name>.js`; set an
optional `"asset"` field to a different path inside this repo to override that.

## Adding or updating a plugin

1. Build the plugin (`yarn build` in its repo) and copy `dist/<Name>.js` to `plugins/`.
2. Add or edit its entry in `manifest.json` (leave `asset_sha` as is).
3. Run `node update-manifest.mjs` — it fills in every `asset_sha` and reports what changed.
4. Commit and push. Clients pick up the new list within a few minutes.

## Plugins

| Plugin | Source |
|---|---|
| Quick Deposit | https://github.com/matter418/QuickDeposit |
| Quick Drop | https://github.com/matter418/QuickDrop |
| Tile Markers | https://github.com/matter418/TileMarkers |
| Chat+ | https://github.com/matter418/ChatPlus |
| HighSpell TCG | https://github.com/matter418/HighspellTCG |

## License

The bundles in `plugins/` are built from GPL-3.0 sources and are redistributed under the
same license; see each plugin's repository for its source. See [LICENSE](./LICENSE).
