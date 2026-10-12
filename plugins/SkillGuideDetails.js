// src/ImprovedSkillGuides.ts
import { Plugin, SettingsTypes, UIManager } from "@ryelite/core";
import { PanelManager } from "@ryelite/core";

// src/lookupTable.json
var lookupTable_default = {
  "Brew Potion of Accuracy": {
    recipe: "Aruba Root + Carrot + Vial",
    xp: "25 XP",
    facility: "Witch's Cauldron",
    itemID: 261
  },
  "Brew Potion of Forestry": {
    recipe: "Fiji Root + Leaf + Vial",
    xp: "30 XP",
    facility: "Witch's Cauldron",
    itemID: 275
  },
  "Brew Potion of Fishing": {
    recipe: "Sardinian Root + Starfish + Vial",
    xp: "35 XP",
    facility: "Witch's Cauldron",
    itemID: 267
  },
  "Brew Potion of Mining": {
    recipe: "Maui Root + Palladium Ore + Vial",
    xp: "50 XP",
    facility: "Witch's Cauldron",
    itemID: 271
  },
  "Brew Potion of Defense": {
    recipe: "Grenada Root + Bone Meal + Vial ",
    xp: "40 XP",
    facility: "Witch's Cauldron",
    itemID: 263
  },
  "Brew Potion of Smithing": {
    recipe: "Tonga Root + Palladium Bar + Vial",
    xp: "45 XP",
    facility: "Witch's Cauldron",
    itemID: 269
  },
  "Brew Potion of Restoration": {
    recipe: "Nauru Root + Strawberry + Vial",
    xp: "45 XP",
    facility: "Witch's Cauldron",
    itemID: 273
  },
  "Brew Potion of Strength": {
    recipe: "Samoan Root + Grapes + Vial",
    xp: "65 XP",
    facility: "Witch's Cauldron",
    itemID: 265
  },
  "Brew Potion of Mischief": {
    recipe: "Vanua Root + Rat Tail + Vial",
    xp: "80 XP",
    facility: "Witch's Cauldron",
    itemID: 285
  },
  "Brew Potion of Magic": {
    recipe: "Mariana Root + Elf Ears + Vial",
    xp: "125 XP",
    facility: "Witch's Cauldron",
    itemID: 291
  },
  "Brew Potion of Stamina": {
    recipe: "Golden Koi + Aruba Root + Vial",
    xp: "50 XP",
    facility: "Witch's Cauldron",
    itemID: 511
  },
  "Smelt Bronze Bars": {
    recipe: "Copper Ore + Tin Ore",
    xp: "25 XP",
    facility: "Furnace",
    itemID: 70
  },
  "Smelt Iron Bars": {
    recipe: "Iron Ore",
    xp: "35 XP",
    facility: "Furnace",
    itemEffects: "50% chance to create Pig Iron Bars",
    itemID: 148
  },
  "Smelt Steel Bars": {
    recipe: "Iron Ore + Coal",
    xp: "50 XP",
    facility: "Furnace",
    itemID: 143
  },
  "Smelt Silver Bars": {
    recipe: "4x Silver Nugget",
    xp: "60 XP",
    facility: "Furnace",
    itemID: 71
  },
  "Smelt Palladium Bars": {
    recipe: "1x Palladium Ore + 2x Coal",
    xp: "75  XP",
    facility: "Furnace",
    itemID: 144
  },
  "Smelt Gold Bars": {
    recipe: "4x Gold Nugget",
    xp: "100 XP",
    facility: "Furnace",
    itemID: 72
  },
  "Smelt Coronium Bars": {
    recipe: "1x Coronium Ore + 4x Coal",
    xp: "150 XP",
    facility: "Furnace",
    itemID: 145
  },
  "Smelt Celadium Bars": {
    recipe: "1x Celadium Ore + 8x Coal",
    xp: "300 XP",
    facility: "Furnace",
    itemID: 253
  },
  "Smith Bronze Gloves": {
    recipe: "1x Bronze Bar",
    xp: "25 XP",
    facility: "Anvil",
    itemID: 92
  },
  "Smith Bronze Arrowheads": {
    recipe: "1x Bronze Bar",
    xp: "25 XP",
    facility: "Anvil",
    itemEffects: "Produces 5x Arrowheads",
    itemID: 328
  },
  "Smith Bronze Pickaxes": {
    recipe: "1x Bronze Bar",
    xp: "25 XP",
    facility: "Anvil",
    itemID: 73
  },
  "Smith Bronze Hatchets": {
    recipe: "1x Bronze Bar",
    xp: "25 XP",
    facility: "Anvil",
    itemID: 314
  },
  "Smith Bronze Helms": {
    recipe: "1x Bronze Bar",
    xp: "25 XP",
    facility: "Anvil",
    itemID: 52
  },
  "Smith Bronze Scimitars": {
    recipe: "2x Bronze Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 364
  },
  "Smith Bronze Longswords": {
    recipe: "2x Bronze Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 58
  },
  "Smith Bronze Full Helms": {
    recipe: "2x Bronze Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 122
  },
  "Smith Bronze Battleaxes": {
    recipe: "3x Bronze Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 56
  },
  "Smith Bronze Platelegs": {
    recipe: "3x Bronze Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 41
  },
  "Smith Bronze Shields": {
    recipe: "3x Bronze Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 185
  },
  "Smith Bronze Chainmail": {
    recipe: "3x Bronze Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 370
  },
  "Smith Bronze Greatswords": {
    recipe: "4x Bronze Bar",
    xp: "100 XP",
    facility: "Anvil",
    itemID: 97
  },
  "Smith Bronze Chestplates": {
    recipe: "5x Bronze Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 40
  },
  "Smith Iron Gloves": {
    recipe: "1x Iron Bar",
    xp: "35 XP",
    facility: "Anvil",
    itemID: 121
  },
  "Smith Iron Arrowheads": {
    recipe: "1x Iron Bar",
    xp: "35 XP",
    facility: "Anvil",
    itemEffects: "Produces 5x Arrowheads",
    itemID: 329
  },
  "Smith Iron Pickaxes": {
    recipe: "1x Iron Bar",
    xp: "35 XP",
    facility: "Anvil",
    itemID: 74
  },
  "Smith Iron Hatchets": {
    recipe: "1x Iron Bar",
    xp: "35 XP",
    facility: "Anvil",
    itemID: 315
  },
  "Smith Iron Helms": {
    recipe: "1x Iron Bar",
    xp: "35 XP",
    facility: "Anvil",
    itemID: 120
  },
  "Smith Iron Scimitars": {
    recipe: "2x Iron Bar",
    xp: "70 XP",
    facility: "Anvil",
    itemID: 365
  },
  "Smith Iron Longswords": {
    recipe: "2x Iron Bar",
    xp: "70 XP",
    facility: "Anvil",
    itemID: 59
  },
  "Smith Iron Full Helms": {
    recipe: "2x Iron Bar",
    xp: "70 XP",
    facility: "Anvil",
    itemID: 128
  },
  "Smith Iron Battleaxes": {
    recipe: "3x Iron Bar",
    xp: "105 XP",
    facility: "Anvil",
    itemID: 57
  },
  "Smith Iron Platelegs": {
    recipe: "3x Iron Bar",
    xp: "105 XP",
    facility: "Anvil",
    itemID: 119
  },
  "Smith Iron Shields": {
    recipe: "3x Iron Bar",
    xp: "105 XP",
    facility: "Anvil",
    itemID: 191
  },
  "Smith Iron Chainmail": {
    recipe: "3x Iron Bar",
    xp: "105 XP",
    facility: "Anvil",
    itemID: 371
  },
  "Smith Iron Greatswords": {
    recipe: "4x Iron Bar",
    xp: "140 XP",
    facility: "Anvil",
    itemID: 126
  },
  "Smith Iron Chestplates": {
    recipe: "5x Iron Bar",
    xp: "175 XP",
    facility: "Anvil",
    itemID: 118
  },
  "Smith Steel Gloves": {
    recipe: "1x Steel Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 93
  },
  "Smith Steel Arrowheads": {
    recipe: "1x Steel Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemEffects: "Produces 5x Arrowheads",
    itemID: 330
  },
  "Smith Steel Pickaxes": {
    recipe: "1x Steel Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 75
  },
  "Smith Steel Hatchets": {
    recipe: "1x Steel Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 316
  },
  "Smith Steel Helms": {
    recipe: "1x Steel Bar",
    xp: "50 XP",
    facility: "Anvil",
    itemID: 53
  },
  "Smith Steel Scimitars": {
    recipe: "2x Steel Bar",
    xp: "100 XP",
    facility: "Anvil",
    itemID: 366
  },
  "Smith Steel Longswords": {
    recipe: "2x Steel Bar",
    xp: "100 XP",
    facility: "Anvil",
    itemID: 60
  },
  "Smith Steel Full Helms": {
    recipe: "2x Steel Bar",
    xp: "100 XP",
    facility: "Anvil",
    itemID: 123
  },
  "Smith Steel Battleaxes": {
    recipe: "3x Steel Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 63
  },
  "Smith Steel Platelegs": {
    recipe: "3x Steel Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 43
  },
  "Smith Steel Shields": {
    recipe: "3x Steel Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 186
  },
  "Smith Steel Chainmail": {
    recipe: "3x Steel Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 372
  },
  "Smith Steel Greatswords": {
    recipe: "4x Steel Bar",
    xp: "200 XP",
    facility: "Anvil",
    itemID: 127
  },
  "Smith Steel Chestplates": {
    recipe: "5x Steel Bar",
    xp: "250 XP",
    facility: "Anvil",
    itemID: 42
  },
  "Smith Palladium Gloves": {
    recipe: "1x Palladium Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 94
  },
  "Smith Palladium Arrowheads": {
    recipe: "1x Palladium Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemEffects: "Produces 5x Arrowheads",
    itemID: 331
  },
  "Smith Palladium Pickaxes": {
    recipe: "1x Palladium Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 76
  },
  "Smith Palladium Hatchets": {
    recipe: "1x Palladium Bar",
    xp: "75 XP",
    facility: "Anvil",
    itemID: 317
  },
  "Smith Palladium Helms": {
    recipe: "1x Palladium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 54
  },
  "Smith Palladium Scimitars": {
    recipe: "2x Palladium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 367
  },
  "Smith Palladium Longswords": {
    recipe: "2x Palladium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 61
  },
  "Smith Palladium Full Helms": {
    recipe: "2x Palladium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 124
  },
  "Smith Palladium Battleaxes": {
    recipe: "3x Palladium Bar",
    xp: "225 XP",
    facility: "Anvil",
    itemID: 78
  },
  "Smith Palladium Platelegs": {
    recipe: "3x Palladium Bar",
    xp: "225 XP",
    facility: "Anvil",
    itemID: 45
  },
  "Smith Palladium Shields": {
    recipe: "3x Palladium Bar",
    xp: "225 XP",
    facility: "Anvil",
    itemID: 187
  },
  "Smith Palladium Chainmail": {
    recipe: "3x Palladium Bar",
    xp: "225 XP",
    facility: "Anvil",
    itemID: 373
  },
  "Smith Palladium Greatswords": {
    recipe: "4x Palladium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 146
  },
  "Smith Palladium Chestplates": {
    recipe: "5x Palladium Bar",
    xp: "375 XP",
    facility: "Anvil",
    itemID: 44
  },
  "Smith Coronium Gloves": {
    recipe: "1x Coronium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 95
  },
  "Smith Coronium Arrowheads": {
    recipe: "1x Coronium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemEffects: "Produces 5x Arrowheads",
    itemID: 332
  },
  "Smith Coronium Pickaxes": {
    recipe: "1x Coronium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 77
  },
  "Smith Coronium Hatchets": {
    recipe: "1x Coronium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 318
  },
  "Smith Coronium Helms": {
    recipe: "1x Coronium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 55
  },
  "Smith Coronium Scimitars": {
    recipe: "2x Coronium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 368
  },
  "Smith Coronium Longswords": {
    recipe: "2x Coronium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 62
  },
  "Smith Coronium Full Helms": {
    recipe: "2x Coronium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 125
  },
  "Smith Coronium Battleaxes": {
    recipe: "3x Coronium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 96
  },
  "Smith Coronium Platelegs": {
    recipe: "3x Coronium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 47
  },
  "Smith Coronium Shields": {
    recipe: "3x Coronium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 188
  },
  "Smith Coronium Chainmail": {
    recipe: "3x Coronium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 374
  },
  "Smith Coronium Greatswords": {
    recipe: "4x Coronium Bar",
    xp: "600 XP",
    facility: "Anvil",
    itemID: 147
  },
  "Smith Coronium Chestplates": {
    recipe: "5x Coronium Bar",
    xp: "750 XP",
    facility: "Anvil",
    itemID: 46
  },
  "Smith Celadon Gloves": {
    recipe: "1x Celadium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 246
  },
  "Smith Celadon Arrowheads": {
    recipe: "1x Celadium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemEffects: "Produces 5x Arrowheads",
    itemID: 333
  },
  "Smith Celadon Pickaxes": {
    recipe: "1x Celadium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 245
  },
  "Smith Celadon Hatchets": {
    recipe: "1x Celadium Bar",
    xp: "150 XP",
    facility: "Anvil",
    itemID: 319
  },
  "Smith Celadon Helms": {
    recipe: "1x Celadium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 258
  },
  "Smith Celadon Scimitars": {
    recipe: "2x Celadium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 369
  },
  "Smith Celadon Longswords": {
    recipe: "2x Celadium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 249
  },
  "Smith Celadon Full Helms": {
    recipe: "2x Celadium Bar",
    xp: "300 XP",
    facility: "Anvil",
    itemID: 247
  },
  "Smith Celadon Battleaxes": {
    recipe: "3x Celadium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 250
  },
  "Smith Celadon Platelegs": {
    recipe: "3x Celadium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 244
  },
  "Smith Celadon Shields": {
    recipe: "3x Celadium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 248
  },
  "Smith Celadon Chainmail": {
    recipe: "3x Celadium Bar",
    xp: "450 XP",
    facility: "Anvil",
    itemID: 377
  },
  "Smith Celadon Greatswords": {
    recipe: "4x Celadium Bar",
    xp: "600 XP",
    facility: "Anvil",
    itemID: 251
  },
  "Smith Celadon Chestplates": {
    recipe: "5x Celadium Bar",
    xp: "750 XP",
    facility: "Anvil",
    itemID: 243
  },
  "Smith Gold Warrior Helms": {
    recipe: "2x Gold Bar",
    xp: "200 XP",
    facility: "Anvil",
    itemID: 254
  },
  "Smith Silver Warrior Helms": {
    recipe: "2x Silver Bar",
    xp: "120 XP",
    facility: "Anvil",
    itemID: 255
  },
  "Enchant Water Scrolls": {
    recipe: "Scroll",
    xp: "5 XP per Scroll",
    facility: "Water Obelisk",
    itemID: 176
  },
  "Enchant Nature Scrolls": {
    recipe: "Scroll",
    xp: "6 XP per Scroll",
    facility: "Nature Obelisk",
    itemID: 177
  },
  "Enchant Fire Scrolls": {
    recipe: "Scroll",
    xp: "8 XP per Scroll",
    facility: "Fire Obelisk",
    itemID: 175
  },
  "Enchant Fury Scrolls": {
    recipe: "Pine Scroll",
    xp: "9 XP per Pine Scroll",
    facility: "Fury Obelisk",
    itemID: 178
  },
  "Enchant Energy Scrolls": {
    recipe: "Palm Scroll",
    xp: "10 XP per Palm Scroll",
    facility: "Energy Obelisk",
    itemID: 180
  },
  "Enchant Rage Scrolls": {
    recipe: "Oak Scroll",
    xp: "11 XP per Oak Scroll",
    facility: "Rage Obelisk",
    itemID: 179
  },
  "Enchant Alchemy Scrolls": {
    recipe: "Lucky Scroll",
    xp: "12 XP per Lucky Scroll",
    facility: "Golden Obelisk",
    itemID: 184
  },
  "Enchant Warp Scrolls": {
    recipe: "Sakura Scroll",
    xp: "14 XP per Sakura Scroll",
    facility: "Portal Obelisk",
    itemID: 181
  },
  "Enchant Magic Scrolls": {
    recipe: "Wizard Scroll",
    xp: "15 XP per Wizard Scroll",
    facility: "Wizard's Obelisk",
    itemID: 355
  },
  "Enchant Blood Scrolls": {
    recipe: "Deadwood Scroll",
    xp: "17 XP per Deadwood Scroll",
    facility: "Blood Obelisk",
    itemID: 358
  },
  "Cook Bass": {
    recipe: "Raw Bass",
    facility: "Stove or Fire",
    xp: "20 XP",
    itemID: 3
  },
  "Cook Bluegill": {
    recipe: "Raw Bluegill",
    facility: "Stove or Fire",
    xp: "25 XP",
    itemID: 5
  },
  "Cook Salmon": {
    recipe: "Raw Salmon",
    facility: "Stove or Fire",
    xp: "35 XP",
    itemID: 26
  },
  "Cook Carp": {
    recipe: "Raw Carp",
    facility: "Stove or Fire",
    xp: "40 XP",
    itemID: 34
  },
  "Cook Stingray": {
    recipe: "Raw Stingray",
    facility: "Stove or Fire",
    xp: "50 XP",
    itemID: 12
  },
  "Cook Piranha": {
    recipe: "Raw Piranha",
    facility: "Stove or Fire",
    xp: "65 XP",
    itemID: 28
  },
  "Cook Walleye": {
    recipe: "Raw Walleye",
    facility: "Stove or Fire",
    xp: "85 XP",
    itemID: 36
  },
  "Cook Crab": {
    recipe: "Raw Crab",
    facility: "Stove or Fire",
    xp: "100 XP",
    itemID: 14
  },
  "Cook Koi": {
    recipe: "Raw Koi",
    facility: "Stove or Fire",
    xp: "110 XP",
    itemID: 30
  },
  "Cook Tuna": {
    recipe: "Raw Tuna",
    facility: "Stove or Fire",
    xp: "110 XP",
    itemID: 22
  },
  "Cook Marlin": {
    recipe: "Raw Marlin",
    facility: "Stove or Fire",
    xp: "120 XP",
    itemID: 18
  },
  "Cook Frog": {
    recipe: "Raw Frog",
    facility: "Stove or Fire",
    xp: "125 XP",
    itemID: 38
  },
  "Cook Turtle": {
    recipe: "Raw Turtle",
    facility: "Stove or Fire",
    xp: "150 XP",
    itemID: 32
  },
  "Cook Clownfish": {
    recipe: "Raw Clownfish",
    facility: "Stove or Fire",
    xp: "20 XP",
    itemID: 16
  },
  "Cook Whaleshark": {
    recipe: "Raw Whaleshark",
    facility: "Stove or Fire",
    xp: "175 XP",
    itemID: 20
  },
  "Cook Octopus": {
    recipe: "Raw Octopus",
    facility: "Stove or Fire",
    xp: "190 XP",
    itemID: 24
  },
  "Cook Rodent Meat": {
    recipe: "Raw Rodent Meat",
    facility: "Stove or Fire",
    xp: "10 XP",
    itemID: 240
  },
  "Cook Chicken": {
    recipe: "Raw Chicken",
    facility: "Stove or Fire",
    xp: "15 XP",
    itemID: 238
  },
  "Cook Steak": {
    recipe: "Raw Beef",
    facility: "Stove or Fire",
    xp: "15 XP",
    itemID: 234
  },
  "Cook Game Meat": {
    recipe: "Raw Game Meat",
    facility: "Stove or Fire",
    xp: "20 XP",
    itemID: 322
  },
  "Cook Baked Potatoes": {
    recipe: "Potato",
    facility: "Stove or Fire",
    xp: "5 XP",
    itemID: 289
  },
  "Cook Grilled Corn": {
    recipe: "Corn",
    facility: "Stove or Fire",
    xp: "10 XP",
    itemID: 290
  },
  "Pickpocket Men": {
    xp: "10 XP"
  },
  "Pickpocket Fishermen": {
    xp: "12 XP"
  },
  "Pickpocket Lumberjacks": {
    xp: "14 XP"
  },
  "Pickpocket Farmers": {
    xp: "16 XP"
  },
  "Pickpocket Guards (Lv 10)": {
    xp: "20 XP"
  },
  "Pickpocket Guards (Lv 18)": {
    xp: "30 XP"
  },
  "Pickpocket Dwarves": {
    xp: "40 XP"
  },
  "Pickpocket Squires": {
    xp: "45 XP"
  },
  "Pickpocket Knights (Lv 45)": {
    xp: "65 XP"
  },
  "Pickpocket Wizards (Lv 16)": {
    xp: "80 XP"
  },
  "Pickpocket Knights (Lv 60)": {
    xp: "125 XP"
  },
  "Pickpocket Gnomes": {
    xp: "150 XP"
  },
  "Pickpocket Wizards (Lv 40)": {
    xp: "200 XP"
  },
  "Pickpocket Elves": {
    xp: "225 XP"
  },
  "Pickpocket Elder Knights": {
    xp: "270 XP"
  },
  "Picklock Coin Chests": {
    xp: "15 XP"
  },
  "Picklock Goblin Chests": {
    xp: "40 XP"
  },
  "Picklock Deluxe Coin Chests": {
    xp: "150 XP"
  },
  "Picklock the Goblin Hut Chest": {
    xp: "0 XP",
    itemEffects: "Goblin Hut Chest is not currently accessible in game."
  },
  "Picklock Dwarven Chests": {
    xp: "200 XP"
  },
  "Picklock Precious Metals Chests": {
    xp: "250 XP"
  },
  "Picklock Gem Chests": {
    xp: "300 XP"
  },
  "Picklock the Portal Obelisk Chest": {
    xp: "400 XP"
  },
  "Picklock Sage's Chests": {
    xp: "300 XP"
  },
  "Picklock Wasteland Chests": {
    xp: "450 XP"
  },
  "Mine Copper Rocks": {
    xp: "20 XP",
    itemID: 49
  },
  "Mine Tin Rocks": {
    xp: "20 XP",
    itemID: 50
  },
  "Mine Iron Rocks": {
    xp: "30 XP",
    itemID: 79
  },
  "Mine Coal Rocks": {
    xp: "60 XP",
    itemID: 142
  },
  "Mine Silver Rocks": {
    xp: "75 XP",
    itemID: 89
  },
  "Mine Palladium Rocks": {
    xp: "150 XP",
    itemID: 48
  },
  "Mine Gold Rocks": {
    xp: "150 XP",
    itemID: 90
  },
  "Mine Coronium Rocks": {
    xp: "300 XP",
    itemID: 51
  },
  "Mine Celadium Rocks": {
    xp: "600 XP",
    itemID: 252
  },
  "Chop Trees": {
    xp: "20 XP",
    itemID: 64
  },
  "Chop Pine Trees": {
    xp: "50 XP",
    itemID: 65
  },
  "Chop Oak Trees": {
    xp: "100 XP",
    itemID: 66
  },
  "Chop Palm Trees": {
    xp: "150 XP",
    itemID: 67
  },
  "Chop Cherry Blossoms": {
    xp: "225 XP",
    itemID: 68
  },
  "Chop Money Trees": {
    xp: "80 XP",
    itemID: 182,
    itemEffects: "Requires casting Golden Obelisk Teleport"
  },
  "Chop Wizard's Trees": {
    xp: "265 XP",
    itemID: 353
  },
  "Chop Deadwood Trees": {
    xp: "300 XP",
    itemID: 356
  },
  "Harvest Flax": {
    xp: "10 XP",
    itemID: 378
  },
  "Harvest Potatoes": {
    xp: "10 XP",
    itemID: 98
  },
  "Harvest Wheat": {
    xp: "15 XP",
    itemID: 99
  },
  "Harvest Carrots": {
    xp: "20 XP",
    itemID: 287
  },
  "Harvest Corn": {
    xp: "25 XP",
    itemID: 100
  },
  "Harvest Aruba Plants": {
    xp: "60 XP",
    itemID: 283
  },
  "Harvest Tomatoes": {
    xp: "40 XP",
    itemID: 101,
    itemEffects: "Currently, no harvestable Tomato plant exists in-game."
  },
  "Harvest Fiji Plants": {
    xp: "80 XP",
    itemID: 277
  },
  "Harvest Onions": {
    xp: "60 XP",
    itemID: 102
  },
  "Harvest Sardinian Plants": {
    xp: "100 XP",
    itemID: 288
  },
  "Harvest Mushrooms": {
    xp: "80 XP",
    itemID: 294
  },
  "Harvest Strawberries": {
    xp: "80 XP",
    itemID: 103
  },
  "Harvest Maui Plants": {
    xp: "120 XP",
    itemID: 280
  },
  "Harvest Watermelons": {
    xp: "110 XP",
    itemID: 104
  },
  "Harvest Grenada Plants": {
    xp: "140 XP",
    itemID: 284
  },
  "Harvest Tonga Plants": {
    xp: "160 XP",
    itemID: 278
  },
  "Harvest Pumpkins": {
    xp: "150 XP",
    itemID: 105
  },
  "Harvest Nauru Plants": {
    xp: "180 XP",
    itemID: 279
  },
  "Harvest Samoan Plants": {
    xp: "200 XP",
    itemID: 282
  },
  "Harvest Grapes": {
    xp: "180 XP",
    itemID: 106,
    itemEffects: "Currently, no harvestable Grape plant exists in-game."
  },
  "Harvest Vanua Plants": {
    xp: "220 XP",
    itemID: 281
  },
  "Harvest Roses": {
    xp: "200 XP",
    itemID: 107,
    itemEffects: "Currently, no harvestable Rose plant exists in-game."
  },
  "Harvest Mariana Plants": {
    xp: "240 XP",
    itemID: 293
  },
  "Catch Bass (beachside fishing)": {
    xp: "15 XP",
    itemID: 2
  },
  "Catch Bluegill (lake fishing)": {
    xp: "20 XP",
    itemID: 4
  },
  "Catch Salmon (river fishing)": {
    xp: "30 XP",
    itemID: 25
  },
  "Catch Tuna (ocean fishing)": {
    xp: "110 XP",
    itemID: 21
  },
  "Catch Carp (lake fishing)": {
    xp: "40 XP",
    itemID: 33
  },
  "Catch Stingray (beachside fishing)": {
    xp: "50 XP",
    itemID: 11
  },
  "Catch Piranha (river fishing)": {
    xp: "60 XP",
    itemID: 27
  },
  "Catch Marlin (ocean fishing)": {
    xp: "115 XP",
    itemID: 17
  },
  "Catch Walleye (lake fishing)": {
    xp: "75 XP",
    itemID: 35
  },
  "Catch Crab (beachside fishing)": {
    xp: "105 XP",
    itemID: 13
  },
  "Catch Koi (river fishing)": {
    xp: "110 XP",
    itemID: 29
  },
  "Catch Whaleshark (ocean fishing)": {
    xp: "150 XP",
    itemID: 19
  },
  "Catch Frog (lake fishing)": {
    xp: "111 XP",
    itemID: 37
  },
  "Catch Turtle (river fishing)": {
    xp: "130 XP",
    itemID: 31
  },
  "Catch Clownfish (beachside fishing)": {
    xp: "225 XP",
    itemID: 15
  },
  "Catch Octopus (ocean fishing)": {
    xp: "175 XP",
    itemID: 23
  },
  "Craft Leather Gloves": {
    recipe: "1x Leather",
    xp: "15 XP",
    facility: "Crafting Table",
    itemID: 503
  },
  "Craft Leather Bracers": {
    recipe: "1x Leather",
    xp: "15 XP",
    facility: "Crafting Table",
    itemID: 493
  },
  "Craft Leather Boots": {
    recipe: "1x Leather",
    xp: "20 XP",
    facility: "Crafting Table",
    itemID: 498
  },
  "Craft Leather Chaps": {
    recipe: "2x Leather",
    xp: "30 XP",
    facility: "Crafting Table",
    itemID: 507
  },
  "Craft Leather Body Armour": {
    recipe: "3x Leather",
    xp: "45 XP",
    facility: "Crafting Table",
    itemID: 492
  },
  "Craft Plains Dragonleather Bracers": {
    recipe: "1x Plains Dragonleather",
    xp: "60 XP",
    facility: "Crafting Table",
    itemID: 494
  },
  "Craft Plains Dragonleather Chaps": {
    recipe: "2x Plains Dragonleather",
    xp: "120 XP",
    facility: "Crafting Table",
    itemID: 504
  },
  "Craft Water Dragonleather Bracers": {
    recipe: "1x Water Dragonleather",
    xp: "75 XP",
    facility: "Crafting Table",
    itemID: 495
  },
  "Craft Water Dragonleather Chaps": {
    recipe: "2x Water Dragonleather",
    xp: "150 XP",
    facility: "Crafting Table",
    itemID: 505
  },
  "Craft Fire Dragonleather Bracers": {
    recipe: "1x Fire Dragonleather",
    xp: "90 XP",
    facility: "Crafting Table",
    itemID: 496
  },
  "Craft Fire Dragonleather Chaps": {
    recipe: "2x Fire Dragonleather",
    xp: "180 XP",
    facility: "Crafting Table",
    itemID: 506
  },
  "Craft Arrow Shafts": {
    recipe: "Logs",
    xp: "5 XP",
    tool: "Knife",
    itemID: 326,
    itemEffects: "Produces 5x Arrow Shafts"
  },
  "Craft Headless Arrows": {
    recipe: "5x Feathers + 5x Arrow Shafts",
    xp: "5 XP",
    itemID: 327,
    itemEffects: "Can produce up to 5x Headless Arrows at a time"
  },
  "Craft Bronze Arrows": {
    recipe: "5x Headless Arrows + 5x Bronze Arrowheads",
    xp: "25 XP",
    itemID: 334,
    itemEffects: "Can produce up to 5x Bronze Arrows at a time"
  },
  "Craft Iron Arrows": {
    recipe: "5x Headless Arrows + 5x Iron Arrowheads",
    xp: "50 XP",
    itemID: 335,
    itemEffects: "Can produce up to 5x Iron Arrows at a time"
  },
  "Craft Steel Arrows": {
    recipe: "5x Headless Arrows + 5x Steel Arrowheads",
    xp: "75 XP",
    itemID: 336,
    itemEffects: "Can produce up to 5x Steel Arrows at a time"
  },
  "Craft Palladium Arrows": {
    recipe: "5x Headless Arrows + 5x Palladium Arrowheads",
    xp: "100 XP",
    itemID: 337,
    itemEffects: "Can produce up to 5x Palladium Arrows at a time"
  },
  "Craft Coronium Arrows": {
    recipe: "5x Headless Arrows + 5x Coronium Arrowheads",
    xp: "125 XP",
    itemID: 338,
    itemEffects: "Can produce up to 5x Coronium Arrows at a time"
  },
  "Craft Celadon Arrows": {
    recipe: "5x Headless Arrows + 5x Celadon Arrowheads",
    xp: "150 XP",
    itemID: 339,
    itemEffects: "Can produce up to 5x Celadon Arrows at a time"
  },
  "Craft Unstrung Bows": {
    recipe: "Logs",
    xp: "10 XP",
    tool: "Knife",
    itemID: 347
  },
  "Craft Unstrung Pine Bows": {
    recipe: "Pine Logs",
    xp: "20 XP",
    tool: "Knife",
    itemID: 348
  },
  "Craft Unstrung Oak Bows": {
    recipe: "Oak Logs",
    xp: "35 XP",
    tool: "Knife",
    itemID: 349
  },
  "Craft Unstrung Palm Bows": {
    recipe: "Palm Logs",
    xp: "50 XP",
    tool: "Knife",
    itemID: 350
  },
  "Craft Unstrung Cherry Bows": {
    recipe: "Cherry Logs",
    xp: "75 XP",
    tool: "Knife",
    itemID: 351
  },
  "Craft Unstrung Wizard's Bows": {
    recipe: "Wizard Logs",
    xp: "90 XP",
    tool: "Knife",
    itemID: 359
  },
  "Craft Unstrung Deadwood Bows": {
    recipe: "Deadwood Logs",
    xp: "120 XP",
    tool: "Knife",
    itemID: 361
  },
  "Craft Wooden Bows": {
    recipe: "String + Unstrung Bow",
    xp: "10 XP",
    itemID: 341
  },
  "Craft Pine Bows": {
    recipe: "String + Unstrung Pine Bow",
    xp: "20 XP",
    itemID: 342
  },
  "Craft Oak Bows": {
    recipe: "String + Unstrung Oak Bow",
    xp: "35 XP",
    itemID: 343
  },
  "Craft Palm Bows": {
    recipe: "String + Unstrung Palm Bow",
    xp: "50 XP",
    itemID: 344
  },
  "Craft Cherry Bows": {
    recipe: "String + Unstrung Cherry Bow",
    xp: "75 XP",
    itemID: 345
  },
  "Craft Wizard's Bows": {
    recipe: "String + Unstrung Wizard's Bow",
    xp: "90 XP",
    itemID: 360
  },
  "Craft Deadwood Bows": {
    recipe: "String + Unstrung Deadwood Bow",
    xp: "120 XP",
    itemID: 362
  },
  "Cut Amethyst Gems": {
    recipe: "Rough Amethyst",
    xp: "40 XP",
    tool: "Chisel",
    itemID: 80
  },
  "Cut Sapphire Gems": {
    recipe: "Rough Sapphire",
    xp: "50 XP",
    tool: "Chisel",
    itemID: 81
  },
  "Cut Emerald Gems": {
    recipe: "Rough Emerald",
    xp: "75 XP",
    tool: "Chisel",
    itemID: 82
  },
  "Cut Topaz Gems": {
    recipe: "Rough Topaz",
    xp: "125 XP",
    tool: "Chisel",
    itemID: 83
  },
  "Cut Citrine Gems": {
    recipe: "Rough Citrine",
    xp: "175 XP",
    tool: "Chisel",
    itemID: 84
  },
  "Cut Ruby Gems": {
    recipe: "Rough Ruby",
    xp: "250 XP",
    tool: "Chisel",
    itemID: 85
  },
  "Cut Diamond Gems": {
    recipe: "Rough Diamond",
    xp: "350 XP",
    tool: "Chisel",
    itemID: 86
  },
  "Cut Carbonado Gems": {
    recipe: "Rough Carbonado",
    xp: "500 XP",
    tool: "Chisel",
    itemID: 87
  },
  "Craft Monk's Necklaces": {
    recipe: "Silver Bar + Monk's Necklace Mould",
    xp: "40 XP",
    facility: "Kiln",
    itemID: 380,
    tool: "Monk's Necklace Mould"
  },
  "Craft Amethyst Necklaces": {
    recipe: "Silver Bar + Amethyst Gem + Necklace Mould",
    xp: "25 XP",
    facility: "Kiln",
    itemID: 194,
    tool: "Necklace Mould"
  },
  "Craft Sapphire Necklaces": {
    recipe: "Silver Bar + Sapphire Gem + Necklace Mould",
    xp: "50 XP",
    facility: "Kiln",
    itemID: 195,
    tool: "Necklace Mould"
  },
  "Craft Emerald Necklaces": {
    recipe: "Silver Bar + Emerald Gem + Necklace Mould",
    xp: "75 XP",
    facility: "Kiln",
    itemID: 196,
    tool: "Necklace Mould"
  },
  "Craft Topaz Necklaces": {
    recipe: "Silver Bar + Topaz Gem + Necklace Mould",
    xp: "125 XP",
    facility: "Kiln",
    itemID: 197,
    tool: "Necklace Mould"
  },
  "Craft Citrine Necklaces": {
    recipe: "Silver Bar + Citrine Gem + Necklace Mould",
    xp: "175 XP",
    facility: "Kiln",
    itemID: 198,
    tool: "Necklace Mould"
  },
  "Craft Ruby Necklaces": {
    recipe: "Silver Bar + Ruby Gem + Necklace Mould",
    xp: "250 XP",
    facility: "Kiln",
    itemID: 199,
    tool: "Necklace Mould"
  },
  "Craft Diamond Necklaces": {
    recipe: "Silver Bar + Diamond Gem + Necklace Mould",
    xp: "350 XP",
    facility: "Kiln",
    itemID: 200,
    tool: "Necklace Mould"
  },
  "Craft Carbonado Necklaces": {
    recipe: "Silver Bar + Carbonado Gem + Necklace Mould",
    xp: "500 XP",
    facility: "Kiln",
    itemID: 426,
    tool: "Necklace Mould"
  },
  "Craft Gold Amethyst Necklaces": {
    recipe: "Gold Bar + Amethyst Gem + Necklace Mould",
    xp: "250 XP",
    facility: "Kiln",
    itemID: 427,
    tool: "Necklace Mould"
  },
  "Craft Gold Sapphire Necklaces": {
    recipe: "Gold Bar + Sapphire Gem + Necklace Mould",
    xp: "300 XP",
    facility: "Kiln",
    itemID: 428,
    tool: "Necklace Mould"
  },
  "Craft Gold Emerald Necklaces": {
    recipe: "Gold Bar + Emerald Gem + Necklace Mould",
    xp: "350 XP",
    facility: "Kiln",
    itemID: 429,
    tool: "Necklace Mould"
  },
  "Craft Gold Topaz Necklaces": {
    recipe: "Gold Bar + Topaz Gem + Necklace Mould",
    xp: "400 XP",
    facility: "Kiln",
    itemID: 430,
    tool: "Necklace Mould"
  },
  "Craft Gold Citrine Necklaces": {
    recipe: "Gold Bar + Citrine Gem + Necklace Mould",
    xp: "450 XP",
    facility: "Kiln",
    itemID: 431,
    tool: "Necklace Mould"
  },
  "Craft Gold Ruby Necklaces": {
    recipe: "Gold Bar + Ruby Gem + Necklace Mould",
    xp: "500 XP",
    facility: "Kiln",
    itemID: 432,
    tool: "Necklace Mould"
  },
  "Craft Gold Diamond Necklaces": {
    recipe: "Gold Bar + Diamond Gem + Necklace Mould",
    xp: "550 XP",
    facility: "Kiln",
    itemID: 433,
    tool: "Necklace Mould"
  },
  "Craft Gold Carbonado Necklaces": {
    recipe: "Gold Bar + Carbonado Gem + Necklace Mould",
    xp: "600 XP",
    facility: "Kiln",
    itemID: 434,
    tool: "Necklace Mould"
  },
  "Spin String": {
    recipe: "Flax",
    xp: "8 XP",
    facility: "Spinning Wheel",
    itemID: 352
  },
  "Carve Scrolls": {
    recipe: "Logs",
    xp: "15 XP",
    tool: "Chisel",
    itemID: 149
  },
  "Carve Pine Scrolls": {
    recipe: "Pine Logs",
    xp: "25 XP",
    tool: "Chisel",
    itemID: 150
  },
  "Carve Oak Scrolls": {
    recipe: "Oak Logs",
    xp: "40 XP",
    tool: "Chisel",
    itemID: 151
  },
  "Carve Palm Scrolls": {
    recipe: "Palm Logs",
    xp: "65 XP",
    tool: "Chisel",
    itemID: 152
  },
  "Carve Sakura Scrolls": {
    recipe: "Sakura Logs",
    xp: "90 XP",
    tool: "Chisel",
    itemID: 153
  },
  "Carve Wizard Scrolls": {
    recipe: "Wizard Logs",
    xp: "120 XP",
    tool: "Chisel",
    itemID: 354
  },
  "Carve Lucky Scrolls": {
    recipe: "Lucky Logs",
    xp: "80 XP",
    tool: "Chisel",
    itemID: 183
  },
  "Carve Deadwood Scrolls": {
    recipe: "Deadwood Logs",
    xp: "135 XP",
    tool: "Chisel",
    itemID: 357
  },
  "Shake Trees": {
    xp: "0 XP",
    itemID: 112,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'. Small chance to drop Golden Leaf."
  },
  "Shake Pine Trees": {
    xp: "0 XP",
    itemID: 108,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'. Small chance to drop Golden Pinecone"
  },
  "Shake Oak Trees": {
    xp: "0 XP",
    itemID: 110,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'. Small chance to drop Golden Acorn"
  },
  "Shake Palm Trees": {
    xp: "0 XP",
    itemID: 114,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'. Small chance to drop Golden Coconut"
  },
  "Shake Cherry Blossoms": {
    xp: "0 XP",
    itemID: 116,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'. Small chance to drop Golden Cherry Blossom"
  },
  "Shake Money Trees": {
    xp: "0 XP",
    itemID: 6,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'."
  },
  "Shake Wizard's Trees": {
    xp: "0 XP",
    itemID: 207,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'."
  },
  "Shake Deadwood Trees": {
    xp: "0 XP",
    itemID: 219,
    itemEffects: "Trees must be cut down to refresh their shaking 'inventory'."
  },
  "Equip Champion's Cape (with 50 Strength and 50 Defense)": {
    itemID: 441
  },
  "Equip Champion's Cape (with 50 Accuracy and 50 Strength)": {
    itemID: 441
  },
  "Equip Champion's Cape (with 50 Accuracy and 50 Defense)": {
    itemID: 441
  },
  "Equip Barbarian Armour (with 10 Strength)": {
    itemID: 242
  },
  "Equip Barbarian Armour (with 10 Defense)": {
    itemID: 242
  },
  "Equip Black Leather Gloves": {
    itemID: 137
  },
  "Equip Knight's Cape": {
    itemID: 438
  },
  "Equip Blue Wizard's Bottoms": {
    itemID: 212
  },
  "Equip Blue Wizard's Tops": {
    itemID: 211
  },
  "Equip Blue Wizard's Hats": {
    itemID: 213
  },
  "Equip Blue Wizard's Gloves": {
    itemID: 478
  },
  "Equip Blue Wizard's Boots": {
    itemID: 500
  },
  "Equip Staff of Fire": {
    itemID: 435,
    itemEffects: "AKA Ember Staff. Provides unlimited Fire Scrolls when equipped."
  },
  "Equip Staff of Water": {
    itemID: 436,
    itemEffects: "AKA Hydro Staff. Provides unlimited Water Scrolls when equipped."
  },
  "Equip Staff of Nature": {
    itemID: 437,
    itemEffects: "AKA Forest Staff. Provides unlimited Nature Scrolls when equipped."
  },
  "Equip Blood Robe Bottoms": {
    itemID: 217
  },
  "Equip Blood Robe Tops": {
    itemID: 217
  },
  "Equip Blood Hats": {
    itemID: 219
  },
  "Equip Blood Gloves": {
    itemID: 479
  },
  "Equip Blood Hoods": {
    itemID: 307
  },
  "Equip Magician's Cape": {
    itemID: 439
  },
  "Equip Damogui's Staff": {
    itemID: 487,
    itemEffects: "Required to cast the Outburst spell"
  },
  "Equip Archer's Gloves": {
    itemID: 480
  },
  "Equip Archer's Boots": {
    itemID: 501
  },
  "Equip Archer's Cape": {
    itemID: 440
  },
  "Equip Helmet of Melee": {
    itemID: 241
  },
  "Equip Helmet of Ranging": {
    itemID: 311
  },
  "Equip Helmet of Magic": {
    itemID: 312
  },
  "Equip Black Leather Gloves (with 10 Strength)": {
    itemID: 137
  },
  "Equip Silver-Plated Coronium Gloves": {
    itemID: 256
  },
  "Equip Gold-Plated Coronium Gloves": {
    itemID: 257
  },
  "Equip Silver-Plated Celadon Gloves": {
    itemID: 465
  },
  "Equip Gold-Plated Celadon Gloves": {
    itemID: 474
  },
  "Equip Legendary Gloves": {
    itemID: 510
  },
  "Giant's Milk (Heals 5 HP)": {
    itemID: 165
  },
  "Calcium Brew (Heals 5 HP)": {
    itemID: 169
  },
  "Rodent Meat (Heals 2 HP)": { itemID: 240 },
  "Baked Potato (Heals 2 HP)": { itemID: 289 },
  "Carrot (Heals 2 HP)": { itemID: 287 },
  "Clownfish (Heals 2 HP)": { itemID: 16 },
  "Chicken (Heals 3 HP)": { itemID: 238 },
  "Bass (Heals 3 HP)": { itemID: 3 },
  "Bluegill (Heals 3 HP)": { itemID: 5 },
  "Grilled Corn (Heals 3 HP)": { itemID: 290 },
  "Steak (Heals 4 HP)": { itemID: 234 },
  "Game Meat (Heals 5 HP)": { itemID: 322 },
  "Salmon (Heals 5 HP)": { itemID: 26 },
  "Carp (Heals 6 HP)": { itemID: 34 },
  "Stingray (Heals 6 HP)": { itemID: 12 },
  "Piranha (Heals 6 HP)": { itemID: 28 },
  "Koi (Heals 8 HP)": { itemID: 30 },
  "Walleye (Heals 9 HP)": { itemID: 36 },
  "Crab (Heals 10 HP)": { itemID: 14 },
  "Frog (Heals 11 HP)": { itemID: 38 },
  "Tuna (Heals 12 HP)": { itemID: 22 },
  "Marlin (Heals 14 HP)": { itemID: 18 },
  "Turtle (Heals 15 HP)": {
    itemID: 32,
    itemEffects: "Leaves behind an Empty Turtle Shell"
  },
  "Whaleshark (Heals 20 HP)": { itemID: 20 },
  "Octopus (Heals 22 HP)": { itemID: 24 },
  "Equip Bronze Gloves": {
    itemID: 92
  },
  "Equip Bronze Arrows": {
    itemID: 334,
    maxHit: "Max hit: 8"
  },
  "Equip Bronze Pickaxes": {
    itemID: 73
  },
  "Equip Bronze Hatchets": {
    itemID: 314
  },
  "Equip Bronze Helms": {
    itemID: 52
  },
  "Equip Bronze Scimitars": {
    itemID: 364
  },
  "Equip Bronze Longswords": {
    itemID: 58
  },
  "Equip Bronze Full Helms": {
    itemID: 122
  },
  "Equip Bronze Battleaxes": {
    itemID: 56
  },
  "Equip Bronze Platelegs": {
    itemID: 41
  },
  "Equip Bronze Shields": {
    itemID: 185
  },
  "Equip Bronze Chainmail": {
    itemID: 370
  },
  "Equip Bronze Greatswords": {
    itemID: 97
  },
  "Equip Bronze Chestplates": {
    itemID: 40
  },
  "Equip Iron Gloves": {
    itemID: 121
  },
  "Equip Iron Arrows": {
    itemID: 335,
    maxHit: "Max hit: 10"
  },
  "Equip Iron Pickaxes": {
    itemID: 74
  },
  "Equip Iron Hatchets": {
    itemID: 315
  },
  "Equip Iron Helms": {
    itemID: 120
  },
  "Equip Iron Scimitars": {
    itemID: 365
  },
  "Equip Iron Longswords": {
    itemID: 59
  },
  "Equip Iron Full Helms": {
    itemID: 128
  },
  "Equip Iron Battleaxes": {
    itemID: 57
  },
  "Equip Iron Platelegs": {
    itemID: 119
  },
  "Equip Iron Shields": {
    itemID: 191
  },
  "Equip Iron Chainmail": {
    itemID: 371
  },
  "Equip Iron Greatswords": {
    itemID: 126
  },
  "Equip Iron Chestplates": {
    itemID: 118
  },
  "Equip Steel Gloves": {
    itemID: 93
  },
  "Equip Steel Arrows": {
    itemID: 336,
    maxHit: "Max hit: 13"
  },
  "Equip Steel Pickaxes": {
    itemID: 75
  },
  "Equip Steel Hatchets": {
    itemID: 316
  },
  "Equip Steel Helms": {
    itemID: 53
  },
  "Equip Steel Scimitars": {
    itemID: 366
  },
  "Equip Steel Longswords": {
    itemID: 60
  },
  "Equip Steel Full Helms": {
    itemID: 123
  },
  "Equip Steel Battleaxes": {
    itemID: 63
  },
  "Equip Steel Platelegs": {
    itemID: 43
  },
  "Equip Steel Shields": {
    itemID: 186
  },
  "Equip Steel Chainmail": {
    itemID: 372
  },
  "Equip Steel Greatswords": {
    itemID: 127
  },
  "Equip Steel Chestplates": {
    itemID: 42
  },
  "Equip Palladium Gloves": {
    itemID: 94
  },
  "Equip Palladium Arrows": {
    itemID: 337,
    maxHit: "Max hit: 16"
  },
  "Equip Palladium Pickaxes": {
    itemID: 76
  },
  "Equip Palladium Hatchets": {
    itemID: 317
  },
  "Equip Palladium Helms": {
    itemID: 54
  },
  "Equip Palladium Scimitars": {
    itemID: 367
  },
  "Equip Palladium Longswords": {
    itemID: 61
  },
  "Equip Palladium Full Helms": {
    itemID: 124
  },
  "Equip Palladium Battleaxes": {
    itemID: 78
  },
  "Equip Palladium Platelegs": {
    itemID: 45
  },
  "Equip Palladium Shields": {
    itemID: 187
  },
  "Equip Palladium Chainmail": {
    itemID: 373
  },
  "Equip Palladium Greatswords": {
    itemID: 146
  },
  "Equip Palladium Chestplates": {
    itemID: 44
  },
  "Equip Coronium Gloves": {
    itemID: 95
  },
  "Equip Coronium Arrows": {
    itemID: 338,
    maxHit: "Max hit: 20"
  },
  "Equip Coronium Pickaxes": {
    itemID: 77
  },
  "Equip Coronium Hatchets": {
    itemID: 318
  },
  "Equip Coronium Helms": {
    itemID: 55
  },
  "Equip Coronium Scimitars": {
    itemID: 368
  },
  "Equip Coronium Longswords": {
    itemID: 62
  },
  "Equip Coronium Full Helms": {
    itemID: 125
  },
  "Equip Coronium Battleaxes": {
    itemID: 96
  },
  "Equip Coronium Platelegs": {
    itemID: 47
  },
  "Equip Coronium Shields": {
    itemID: 188
  },
  "Equip Coronium Chainmail": {
    itemID: 374
  },
  "Equip Coronium Greatswords": {
    itemID: 147
  },
  "Equip Coronium Chestplates": {
    itemID: 46
  },
  "Equip Celadon Gloves": {
    itemID: 246
  },
  "Equip Celadon Arrows": {
    itemID: 339,
    maxHit: "Max hit: 24"
  },
  "Equip Celadon Pickaxes": {
    itemID: 245
  },
  "Equip Celadon Hatchets": {
    itemID: 319
  },
  "Equip Celadon Helms": {
    itemID: 258
  },
  "Equip Celadon Scimitars": {
    itemID: 369
  },
  "Equip Celadon Longswords": {
    itemID: 249
  },
  "Equip Celadon Full Helms": {
    itemID: 247
  },
  "Equip Celadon Battleaxes": {
    itemID: 250
  },
  "Equip Celadon Platelegs": {
    itemID: 244
  },
  "Equip Celadon Shields": {
    itemID: 248
  },
  "Equip Celadon Chainmail": {
    itemID: 377
  },
  "Equip Celadon Greatswords": {
    itemID: 251
  },
  "Equip Celadon Chestplates": {
    itemID: 243
  },
  "Equip Gold Warrior Helmet": {
    itemID: 254
  },
  "Equip Silver Warrior Helmet": {
    itemID: 255
  },
  "Equip Wooden Bows": {
    itemID: 341
  },
  "Equip Pine Bows": {
    itemID: 342
  },
  "Equip Oak Bows": {
    itemID: 343
  },
  "Equip Palm Bows": {
    itemID: 344
  },
  "Equip Cherry Bows": {
    itemID: 345
  },
  "Equip Wizard's Bows": {
    itemID: 360
  },
  "Equip Deadwood Bows": {
    itemID: 362
  },
  "Equip Black Leather Gloves (with 10 Strength) (+1 Crime)": {
    itemID: 137
  },
  "Equip Bandit Masks (+1 Crime)": {
    itemID: 136
  },
  "Cast Water's Fury": {
    spellRecipe: "1X Fury Scroll, 1X Water Scroll",
    xp: "4 XP + 1 XP per damage",
    maxHit: "Max hit: 2"
  },
  "Cast Nature's Fury": {
    spellRecipe: "1X Fury Scroll, 1X Nature Scroll",
    xp: "8 XP + 1 XP per damage",
    maxHit: "Max hit: 4"
  },
  "Cast Fire's Fury": {
    spellRecipe: "1X Fury Scroll, 1X Fire Scroll",
    xp: "12 XP + 1 XP per damage",
    maxHit: "Max hit: 6"
  },
  "Cast Water's Rage": {
    spellRecipe: "1X Rage Scroll, 3X Water Scroll",
    xp: "15 XP + 1 XP per damage",
    maxHit: "Max hit: 8"
  },
  "Cast Nature's Rage": {
    spellRecipe: "1X Rage Scroll, 3X Nature Scroll",
    xp: "18 XP + 1 XP per damage",
    maxHit: "Max hit: 10"
  },
  "Cast Fire's Rage": {
    spellRecipe: "1X Rage Scroll, 3X Fire Scroll",
    xp: "21 XP + 1 XP per damage",
    maxHit: "Max hit: 12"
  },
  "Cast Water's Blood": {
    spellRecipe: "1X Blood Scroll, 5X Water Scroll",
    xp: "30 XP + 1 XP per damage",
    maxHit: "Max hit: 14"
  },
  "Cast Nature's Blood": {
    spellRecipe: "1X Blood Scroll, 5X Nature Scroll",
    xp: "33 XP + 1 XP per damage",
    maxHit: "Max hit: 16"
  },
  "Cast Fire's Blood": {
    spellRecipe: "1X Blood Scroll, 5X Fire Scroll",
    xp: "37 XP + 1 XP per damage",
    maxHit: "Max hit: 18"
  },
  "Cast Outburst": {
    spellRecipe: "2X Blood Scroll, 3X Rage Scroll, 4X Fury Scroll, 10X Fire Scroll",
    xp: "50 XP + 1 XP per damage",
    maxHit: "Max hit: 30",
    itemEffects: "Must have Damogui's Staff equipped. Deals damage to creatures in an area around main target"
  },
  "Cast Musculor Reduction": {
    spellRecipe: "1X Energy Scroll, 2X Fire Scroll",
    xp: "15 XP"
  },
  "Cast Oculus Reduction": {
    spellRecipe: "1X Energy Scroll, 2X Nature Scroll",
    xp: "15 XP"
  },
  "Cast Armada Reduction": {
    spellRecipe: "1X Energy Scroll, 2X Water Scroll",
    xp: "15 XP"
  },
  "Cast Aurum Minor": {
    spellRecipe: "1X Alchemy Scroll, 2X Fire Scroll",
    xp: "30 XP"
  },
  "Cast Aurum Majora": {
    spellRecipe: "1X Alchemy Scroll, 4X Fire Scroll",
    xp: "70 XP"
  },
  "Cast Hedgecastle Teleport": {
    spellRecipe: "1X Warp Scroll, 1X Water Scroll",
    xp: "25 XP"
  },
  "Cast Celadon Teleport": {
    spellRecipe: "1X Warp Scroll, 2X Energy Scroll",
    xp: "30 XP"
  },
  "Cast Dragonsmoke Teleport": {
    spellRecipe: "1X Warp Scroll, 5X Fire Scroll",
    xp: "30 XP"
  },
  "Cast Ictirine Teleport": {
    spellRecipe: "1X Warp Scroll, 1X Nature Scroll",
    xp: "35 XP"
  },
  "Cast Water Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Water Scroll",
    xp: "40 XP"
  },
  "Cast Nature Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Nature Scroll",
    xp: "40 XP"
  },
  "Cast Fire Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Fire Scroll",
    xp: "40 XP"
  },
  "Cast Fury Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Fury Scroll",
    xp: "40 XP"
  },
  "Cast Energy Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Energy Scroll",
    xp: "40 XP"
  },
  "Cast Rage Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Rage Scroll",
    xp: "40 XP"
  },
  "Cast Wizard's Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Magic Scroll",
    xp: "40 XP"
  },
  "Cast Highcove Teleport": {
    spellRecipe: "1X Warp Scroll, 2X Water Scroll",
    xp: "40 XP"
  },
  "Cast Anglham Teleport": {
    spellRecipe: "1X Warp Scroll, 5X Nature Scroll",
    xp: "45 XP"
  },
  "Cast Portal Obelisk Teleport": {
    spellRecipe: "10X Warp Scroll",
    xp: "55 XP"
  },
  "Cast Golden Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Alchemy Scroll",
    xp: "55 XP"
  },
  "Cast Blood Obelisk Teleport": {
    spellRecipe: "1X Warp Scroll, 10X Blood Scroll",
    xp: "55 XP"
  },
  "Cast Cairn Teleport": {
    spellRecipe: "2X Warp Scroll, 2X Water Scroll",
    xp: "60 XP"
  },
  "Equip Basic Rods": {
    itemID: 7
  },
  "Equip Great Rods": {
    itemID: 8
  },
  "Equip Ultra Rods": {
    itemID: 9
  },
  "Equip Master Rods": {
    itemID: 10
  }
};

// src/ImprovedSkillGuides.ts
var ImprovedSkillGuides = class extends Plugin {
  constructor() {
    super();
    this.panelManager = new PanelManager();
    this.pluginName = "ImprovedSkillGuides";
    this.author = "0rangeYouGlad";
    this.uiManager = new UIManager();
    this.currentTooltip = null;
    this.currentTooltipAnchor = null;
    this.pluginName = "Improved Skill Guides";
    this.author = "0rangeYouGlad";
    this.settings.showRecipe = {
      text: "Show Recipes",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.showXp = {
      text: "Show XP",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.showTool = {
      text: "Show Tool",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
    this.settings.showFacility = {
      text: "Show Facility",
      type: SettingsTypes.checkbox,
      value: false,
      callback: () => {
      }
    };
    this.settings.showMaxHit = {
      text: "Show Max Hit",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.showSpellCosts = {
      text: "Show Spell Costs",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.showItemEffects = {
      text: "Show Misc Notes",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
    this.settings.showItemTooltips = {
      text: "Show Output Item Tooltips",
      type: SettingsTypes.checkbox,
      value: true,
      callback: () => {
      }
    };
  }
  init() {
  }
  start() {
    this.log("ImprovedSkillGuides started");
  }
  stop() {
    this.log("ImprovedSkillGuides stopped");
    this.hideTooltip();
  }
  hideTooltip() {
    if (this.currentTooltip) {
      this.currentTooltip.hide();
      this.currentTooltip = null;
    }
  }
  showTooltip(anchor, id) {
    if (this.currentTooltip) {
      this.currentTooltip.hide();
    }
    if (isNaN(id)) return;
    this.currentTooltipAnchor = anchor;
    let x = 0;
    let y = 0;
    const rect = anchor?.getBoundingClientRect();
    x = rect.right;
    y = rect.top;
    try {
      this.currentTooltip = this.uiManager.drawItemTooltip(id, x, y);
    } catch (error) {
      this.log(`Error showing tooltip: ${error}`);
    }
  }
  // TODO - move this into a manager like https://github.com/Highl1te/Core/commit/a9011e05b0a4a410e4f8a9a3dbd9873e92a0d4c1
  GameLoop_update() {
    let skillMenu = document.getElementById("hs-skill-guide-menu");
    if (!skillMenu) {
      this.hideTooltip();
      return;
    }
    ;
    let childSkillEntries = Array.from(skillMenu.getElementsByClassName("hs-unlockable-skill-panel"));
    if (!childSkillEntries.length || !this.currentTooltipAnchor || !this.currentTooltipAnchor.checkVisibility()) {
      this.hideTooltip();
    }
    childSkillEntries.forEach((child) => {
      let subject = child.childNodes[1].childNodes[0].textContent || "";
      if (lookupTable_default[subject] && !child.getAttribute("data-skill-guide-processed")) {
        child.setAttribute("data-skill-guide-processed", "true");
        Object.entries(lookupTable_default[subject]).forEach((line) => {
          let textContent = "";
          if (line[0] === "itemID") {
            if (!this.settings.showItemTooltips.value) {
            } else {
              child.addEventListener(
                "mouseenter",
                (e) => this.showTooltip(child, line[1])
              );
              child.addEventListener("mouseleave", () => this.hideTooltip());
            }
          } else if (line[0] === "recipe") {
            if (!this.settings.showRecipe.value) {
            } else {
              const itemDef = this.gameHooks.ItemDefinitionManager._itemDefMap.get(
                lookupTable_default[subject]["itemID"]
              );
              if (!itemDef) {
                this.error(`Unable to find item def for subject ${subject} at ID ${lookupTable_default[subject]["itemID"]}`);
              }
              if (itemDef && itemDef._recipe && itemDef._recipe._ingredients && itemDef._recipe._ingredients.length > 0) {
                itemDef._recipe._ingredients.forEach((ingredient) => {
                  const ingredientDiv = document.createElement("div");
                  ingredientDiv.className = "hs-ui-item-tooltip-effect";
                  if (textContent) {
                    textContent += " ";
                  }
                  try {
                    const ingredientDef = this.gameHooks.ItemDefinitionManager._itemDefMap.get(ingredient._itemId);
                    const ingredientName = ingredientDef?._nameCapitalized || ingredientDef?._name || `Item ${ingredient._itemId}`;
                    textContent += `${ingredient._amount}x ${ingredientName}`;
                  } catch {
                    textContent += `${ingredient._amount}x Item ${ingredient._itemId}`;
                  }
                });
              }
              if (!textContent) {
                textContent = `${line[1]}`;
              }
            }
          } else if (line[0] === "maxHit" && !this.settings.showMaxHit.value) {
          } else if (line[0] === "spellRecipe" && !this.settings.showSpellCosts.value) {
          } else if (line[0] === "xp" && !this.settings.showXp.value) {
          } else if (line[0] === "facility" && !this.settings.showFacility.value) {
          } else if (line[0] === "tool" && !this.settings.showTool.value) {
          } else if (line[0] === "itemEffects" && !this.settings.showItemEffects.value) {
          } else {
            textContent = `${line[1]}`;
          }
          let newText = document.createElement("span");
          newText.className = "hs-text--yellow";
          newText.style = "color: rgb(240, 230, 140) !important;";
          newText.innerText = `${textContent}`;
          child.childNodes[1].appendChild(newText);
        });
      }
    });
  }
};
export {
  ImprovedSkillGuides as default
};
