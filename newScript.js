//to do:
// make glossary to find sections easier

let cube = [
    "Crush of Tentacles",
    "Fall of the Titans",
    "Overwhelming Denial",
    "Tyrant of Valakut",
    "Nimbus Champion",
    "Rushblade Commander",
    "Thrasher Brute",
    "Buzzing Whack-a-Doodle",
    "Crow Storm",
    "Etali, Primal Storm",
    "Hunting Pack",
    "Everythingamajig",
    "Giant Fan",
    "Pointy Finger of Doom",
    "Sword of Dungeons & Dragons",
    "Urza, Academy Headmaster",
    "X",
    "Archfiend of Despair",
    "Archon of Valor's Reach",
    "Beast Within",
    "Blood Feud",
    "Boldwyr Intimidator",
    "Bonus Round",
    "Bramble Sovereign",
    "Bring Down",
    "Chain Lightning",
    "Hot Soup",
    "Key to the City",
    "Open into Wonder",
    "Whirler Rogue",
    "Wings of Hubris",
    "Altar of Dementia",
    "Feral Hydra",
    "Fog Bank",
    "Fumble",
    "Game Plan",
    "Gang Up",
    "Generous Patron",
    "Genesis Chamber",
    "Tezzeret's Gambit",
    "Grothama, All-Devouring",
    "Hunted Wumpus",
    "Lava-Field Overlord",
    "Magus of the Candelabra",
    "Mystic Confluence",
    "Noosegraf Mob",
    "Oracle's Insight",
    "Pir's Whim",
    "Play of the Game",
    "Regna's Sanction",
    "Sentinel Tower",
    "Stolen Strategy",
    "Stunning Reversal",
    "Take Up Arms",
    "The Crowd Goes Wild",
    "Thrilling Encore",
    "Together Forever",
    "Vampire Charmseeker",
    "Spectral Searchlight",
    "Virtus's Maneuver",
    "Zndrsplt's Judgment",
    "Gladehart Cavalry",
    "Immolating Glare",
    "Archmage's Charm",
    "Birthing Boughs",
    "Generous Gift",
    "Watcher for Tomorrow",
    "Wing Shards",
    "Acidic Slime",
    "Unicycle",
    "Bag of Holding",
    "Mardu Shadowspear",
    "Davriel, Rogue Shadowmage",
    "Jace Beleren",
    "Managorger Hydra",
    "Rishkar, Peema Renegade",
    "Jiang Yanggu, Wildcrafter",
    "Akroan Horse",
    "Fractured Identity",
    "Sepulchral Primordial",
    "Mistmeadow Witch",
    "Samut, Tyrant Smasher",
    "Tattermunge Witch",
    "Apocalypse Hydra",
    "Joraga Auxiliary",
    "Huatli's Raptor",
    "Bloodfell Caves",
    "Blossoming Sands",
    "Rugged Highlands",
    "Tranquil Cove",
    "Dismal Backwater",
    "Temple of Enlightenment",
    "Temple of Deceit",
    "Sulfurous Springs",
    "Temple of Plenty",
    "Bountiful Promenade",
    "Luxury Suite",
    "Morphic Pool",
    "Sea of Clouds",
    "Spire Garden",
    "Geier Reach Sanitarium",
    "Gutterbones",
    "Narnam Renegade",
    "Zurgo Bellstriker",
    "Decorated Champion",
    "Glory-Bound Initiate",
    "Goblin Cratermaker",
    "Mindblade Render",
    "Reassembling Skeleton",
    "Mardu Strike Leader",
    "Najeela, the Blade-Blossom",
    "Frontier Warmonger",
    "Flamerush Rider",
    "Secure the Wastes",
    "Faerie Guidemother",
    "Aurora Champion",
    "Sandsteppe Outcast",
    "Long Road Home",
    "Trapped in the Tower",
    "Light of Hope",
    "Spellweaver Duo",
    "Negate",
    "Containment Membrane",
    "Huddle Up",
    "Soaring Show-Off",
    "Disowned Ancestor",
    "Fan Favorite",
    "Bloodborn Scoundrels",
    "Mind Rake",
    "Painful Lesson",
    "Bloodlust Inciter",
    "Azra Bladeseeker",
    "Stadium Vendors",
    "Goblin Freerunner",
    "Magma Hellion",
    "Firebolt",
    "Boulder Salvo",
    "Reckless Charge",
    "Jungle Delver",
    "Jungle Wayfinder",
    "Fertilid",
    "Orchard Elemental",
    "Elvish Fury",
    "Combo Attack",
    "Charging Binox",
    "Liliana's Specter",
    "Grave Scrabbler",
    "Mardu Skullhunter",
    "Lieutenants of the Guard",
    "Release to the Wind",
    "Pondering Mage",
    "Arcane Denial",
    "Call to Heel",
    "Scrounging Bandar",
    "Selvala's Enforcer",
    "Selvala, Explorer Returned",
    "Banshee of the Dread Choir",
    "Blade of Selves",
    "Caller of the Pack",
    "Warchief Giant",
    "Eager Construct",
    "Tyrant's Machine",
    "Victory Chimes",
    "Night Market Guard",
    "Skittering Surveyor",
    "Spear Spewer",
    "Relief Captain",
    "Charming Prince",
    "Dragonlair Spider",
    "Cloudblazer",
    "Angel of Condemnation",
    "Ajani, Adversary of Tyrants",
    "Mardu Woe-Reaper",
    "Dragon Hunter",
    "Meadowboon",
    "Otherworldly Journey",
    "Galepowder Mage",
    "Sightless Brawler",
    "Condescend",
    "Deep Analysis",
    "Hangman",
    "Avenging Huntbonder",
    "Orzhov Enforcer",
    "Delirium Skeins",
    "Dreadhorde Butcher",
    "Discovery // Dispersal",
    "Regal Bloodlord",
    "Karlov of the Ghost Council",
    "Thundering Djinn",
    "Fevered Visions",
    "Merfolk Skydiver",
    "Lorescale Coatl",
    "Experiment Kraj",
    "Honored Crop-Captain",
    "Skyknight Vanguard",
    "Firemane Avenger",
    "Deathreap Ritual",
    "Forgotten Ancient",
    "Eye of Doom",
    "Ghirapur Orrery",
    "Howling Golem",
    "Runed Servitor",
    "Rousing of Souls",
    "Tragic Arrogance",
    "Dakra Mystic",
    "Dictate of Kruphix",
    "Folio of Fancies",
    "Messenger Jays",
    "Minds Aglow",
    "Psychic Corrosion",
    "Vision Skeins",
    "Innocent Blood",
    "Barter in Blood",
    "Capital Punishment",
    "Triskaidekaphobia",
    "Rankle, Master of Pranks",
    "Burning Inquiry",
    "Dragon Mage",
    "Incendiary Command",
    "Magus of the Wheel",
    "Borderland Explorer",
    "Magus of the Vineyard",
    "Rites of Flourishing",
    "Selvala's Charge",
    "Selvala's Stampede",
    "Passwall Adept",
    "Flux Channeler",
    "Reckless Scholar",
    "Oneirophage",
    "Saltwater Stalwart",
    "Broodbirth Viper",
    "Jwar Isle Avenger",
    "Cairn Wanderer",
    "Cheering Fanatic",
    "Rimrock Knight",
    "Taurean Mauler",
    "Goblin Razerunners",
    "Hero of Oxid Ridge",
    "Three-Headed Goblin",
    "Goblin Wardriver",
    "Thrill of Possibility",
    "Strategy, Schmategy",
    "Khorvath's Fury",
    "Chainweb Aracnir",
    "Evolution Sage",
    "Maulfist Revolutionary",
    "Signal Pest",
    "Flameblade Adept",
    "Goblin Motivator",
    "Grim Initiate",
    "Seeker of the Way",
    "Accorder Paladin",
    "Daring Skyjek",
    "Lone Rider",
    "Diamond Knight",
    "Raging Redcap",
    "Hero of Bladehold",
    "Avaricious Dragon",
    "Backdraft Hellkite",
    "Mirrorwing Dragon",
    "Hellkite Charger",
    "Steel Hellkite",
    "Basilisk Collar",
    "Fountain of Renewal",
    "Gingerbrute",
    "Haazda Marshal",
    "Hopeful Eidolon",
    "Shadowspear",
    "Swords to Plowshares",
    "Ajani's Pridemate",
    "Vizkopa Guildmage",
    "Angel of Vitality",
    "Consuming Vapors",
    "Bond of Discipline",
    "Ob Nixilis of the Black Oath",
    "Blade of the Bloodchief",
    "Deathgreeter",
    "Hunger of the Howlpack",
    "Tragic Slip",
    "Veteran Explorer",
    "Epochrasite",
    "Shadows of the Past",
    "Fecundity",
    "Filigree Familiar",
    "Falkenrath Noble",
    "Poison-Tip Archer",
    "Screeching Buzzard",
    "Solemn Simulacrum",
    "Vindictive Lich",
    "Mitotic Slime",
    "Harvester of Souls",
    "Reaper from the Abyss",
    "Scuttling Doom Engine",
    "Lore Broker",
    "Mind's Eye",
    "Psychosis Crawler",
    "Chasm Skulker",
    "Niv-Mizzet, the Firemind",
    "Humble Defector",
    "Windfall",
    "Stuffy Doll",
    "Scoured Barrens",
    "Swiftwater Cliffs",
    "Thornwood Falls",
    "Jungle Hollow",
    "Wind-Scarred Crag",
    "Temple of Epiphany",
    "Temple of Malady",
    "Temple of Mystery",
    "Temple of Silence",
    "Roalesk, Apex Hybrid",
    "Outlaws' Merriment",
    "Righteous Confluence",
    "Victory's Herald",
    "Pianna, Nomad Captain",
    "Cultivator of Blades",
    "Rabble-Rouser",
    "Thunderstaff",
    "Trumpet Blast",
    "Rhox Veteran",
    "Battlefield Promotion",
    "Makeshift Battalion",
    "Sunscorch Regent",
    "Do-It-Yourself Seraph",
    "Herald of the Host",
    "Kenrith, the Returned King",
    "Dwarven Lightsmith",
    "Giant Killer",
    "Disenchant",
    "Benthic Biomancer",
    "Faerie Vandal",
    "Nadir Kraken",
    "Vigean Graftmage",
    "Helium Squirter",
    "Jace's Erasure",
    "Ominous Seas",
    "Grip of the Roil",
    "Out of Bounds",
    "Diminishing Returns",
    "Comparative Analysis",
    "Corpse Augur",
    "Herald of the Dreadhorde",
    "Exhume",
    "Quest for the Gravelord",
    "Contentious Plan",
    "Pollenbright Druid",
    "Thrummingbird",
    "Courage in Crisis",
    "Volt Charge",
    "Bloom Hulk",
    "Spread the Sickness",
    "Planewide Celebration",
    "Collective Defiance",
    "Cathartic Reunion",
    "Fire Prophecy",
    "Fists of Flame",
    "Anje's Ravager",
    "Lightning Strike",
    "Cavalier of Thorns",
    "Pulse of Murasa",
    "Regrowth",
    "Caustic Caterpillar",
    "Thrashing Brontodon",
    "Nest Invader",
    "Awakening Zone",
    "Endless One",
    "Mindless Automaton",
    "Weapon Rack",
    "Karn's Bastion",
    "Winding Way",
    "Satyr Wayfinder",
    "Predator's Howl",
    "Status // Statue",
    "Opt",
    "Brainstorm",
    "Alirios, Enraptured",
    "Creepy Doll",
    "Duplicant",
    "Breaker of Armies",
    "Blinkmoth Urn",
    "Coveted Jewel",
    "Howling Mine",
    "Deadeye Navigator",
    "Druid's Familiar",
    "Elgaud Shieldmate",
    "Lightning Mauler",
    "Nearheath Pilgrim",
    "Silverblade Paladin",
    "Tandem Lookout",
    "Wingcrafter",
    "Wolfir Silverheart",
    "Opportunity",
    "Incubation Druid",
    "Merfolk Branchwalker",
    "Voyaging Satyr",
    "Garruk Wildspeaker",
    "Avatar of Growth",
    "Slippery Bogbonder",
    "Wilt",
    "Farfinder",
    "Evolving Wilds",
    "Terramorphic Expanse",
    "Roon of the Hidden Realm",
    "Vaevictis Asmadi, the Dire",
    "Gahiji, Honored One",
    "Tayam, Luminous Enigma",
    "Volrath, the Shapestealer",
    "Mathas, Fiend Seeker",
    "Whirlwind of Thought",
    "Sydri, Galvanic Genius",
    "Kalamax, the Stormsire",
    "City of Brass",
    "Hangarback Walker",
    "Whispering Madness",
    "Stormfist Crusader",
    "Kambal, Consul of Allocation",
    "Chevill, Bane of Monsters",
    "Edric, Spymaster of Trest",
    "The Royal Scions",
    "Expansion // Explosion",
    "Waves of Aggression",
    "Adarkar Wastes",
    "Karplusan Forest",
    "Underground River",
    "Battlefield Forge",
    "Caves of Koilos",
    "Llanowar Wastes",
    "Yavimaya Coast",
    "Shivan Reef",
    "Brushland",
    "Chain of Vapor",
    "Phantom Warrior",
    "Shoulder to Shoulder",
    "Wanderer's Strike",
    "Expedite",
    "Rancor",
    "Syr Konrad, the Grim",
    "Supernatural Stamina",
    "Seer's Lantern",
    "Temple of Malice",
    "Temple of Abandon",
    "Malicious Affliction",
    "Skirsdag High Priest",
    "Lumberknot",
    "Yavimaya Elder",
    "Basri Ket",
    "Angelic Ascension",
    "Heartfire Immolator",
    "Llanowar Visionary",
    "Mazemind Tome",
    "Ghostly Pilferer",
    "Silversmote Ghoul",
    "Liliana, Waker of the Dead",
    "Inspiring Vantage",
    "Twinblade Assassins",
    "Mad Ratter",
    "Irencrag Pyromancer",
    "Gonti, Lord of Luxury",
    "Ardenvale Tactician",
    "Heirloom Blade",
    "Luminate Primordial",
    "Debt to the Deathless",
    "Glint-Horn Buccaneer",
    "God-Pharaoh's Statue",
    "Nicol Bolas, God-Pharaoh",
    "Lightning Reaver",
    "Soul Warden",
    "Sage of Hours",
    "Sarkhan's Unsealing",
    "Skull Rend",
    "The Eldest Reborn",
    "Throne of the God-Pharaoh",
    "Vicious Rumors",
    "Witch of the Moors",
    "Zhur-Taa Druid",
    "Angel of Destiny",
    "Attended Healer",
    "Archpriest of Iona",
    "Journey to Oblivion",
    "Luminarch Aspirant",
    "Squad Commander",
    "Acquisitions Expert",
    "Coveted Prize",
    "Deadly Alliance",
    "Demon's Disciple",
    "Malakir Blood-Priest",
    "Marauding Blight-Priest",
    "Nighthawk Scavenger",
    "Nullpriest of Oblivion",
    "Fireblade Charger",
    "Kargan Intimidator",
    "Roiling Vortex",
    "Shatterskull Charger",
    "Valakut Exploration",
    "Oran-Rief Ooze",
    "Grasp of Fate",
    "Approach of the Second Sun",
    "Deadly Designs",
    "Chain of Smog",
    "Liliana's Caress",
    "Reflector Mage",
    "Vault of Champions",
    "Training Center",
    "Undergrowth Stadium",
    "Spectator Seating",
    "Rejuvenating Springs",
];

let partners = [
    ["Proud Mentor", "Impetuous Protege"],
    ["Sylvia Brightspear", "Khorvath Brightflame"],
    ["Blaring Recruiter", "Blaring Captain"],
    ["Regna, the Redeemer", "Krav, the Unredeemed"],
    ["Lore Weaver", "Ley Weaver"],
    ["Toothy, Imaginary Friend", "Pir, Imaginative Rascal"],
    ["Chakram Retriever", "Chakram Slinger"],
    ["Zndrsplt, Eye of Wisdom", "Okaun, Eye of Chaos"],
    ["Will Kenrith", "Rowan Kenrith"],
    ["Nikara, Lair Scavenger", "Yannik, Scavenging Sentinel"],
    ["Virtus the Veiled", "Gorm the Great"],
    ["Soulblade Corrupter", "Soulblade Renewer"],
    ["Brallin, Skyshark Rider", "Shabraz, the Skyshark"],
    ["Cazur, Ruthless Stalker", "Ukkima, Stalking Shadow"],
];

let reset = document.getElementById("reset");
let generate = document.getElementById("generate");
// let team1header = document.getElementById("team1");
// let team2header = document.getElementById("team2");
// let team3header = document.getElementById("team3");
// let team4header = document.getElementById("team4");
let body = document.querySelector("body");
let team1 = document.querySelector(".team1");
let team2 = document.querySelector(".team2");
let team3 = document.querySelector(".team3");
let team4 = document.querySelector(".team4");
let container = document.querySelector(".container");
let wrap = document.querySelector(".wrap");
let wrapWrap = document.querySelector(".wrap-wrap");
let defaultTeams = document.getElementById("revealTeam");
let checkTeam3 = document.getElementById("revealTeam3");
let checkTeam4 = document.getElementById("revealTeam4");
let currentCount = document.getElementById("cardCount");
let totalCards = document.getElementById("totalCards");
let label2 = document.querySelector(".label2");
let label3 = document.querySelector(".label3");
let label4 = document.querySelector(".label4");
let copyButton = document.getElementById("copyButton");

let one = document.getElementById("pack1");
let two = document.getElementById("pack2");
let three = document.getElementById("pack3");
let four = document.getElementById("pack4");
let five = document.getElementById("pack5");
let six = document.getElementById("pack6");
let seven = document.getElementById("pack7");
let eight = document.getElementById("pack8");
let nine = document.getElementById("pack9");
let ten = document.getElementById("pack10");
let eleven = document.getElementById("pack11");
let twelve = document.getElementById("pack12");
let thirteen = document.getElementById("pack13");
let fourteen = document.getElementById("pack14");
let fifteen = document.getElementById("pack15");
let sixteen = document.getElementById("pack16");

// these are the arrays for the packs that get created when the cube and partner arrays and shuffled with the makepacks(pack,arr1,arr2) function
let pack1 = [];
let pack2 = [];
let pack3 = [];
let pack4 = [];
let pack5 = [];
let pack6 = [];
let pack7 = [];
let pack8 = [];
let pack9 = [];
let pack10 = [];
let pack11 = [];
let pack12 = [];
let pack13 = [];
let pack14 = [];
let pack15 = [];
let pack16 = [];
let pack17 = [];
let pack18 = [];
let pack19 = [];
let pack20 = [];
let pack21 = [];
let pack22 = [];
let pack23 = [];
let pack24 = [];
let pack25 = [];
let pack26 = [];
let pack27 = [];
let pack28 = [];
let pack29 = [];
let pack30 = [];
let pack31 = [];
let pack32 = [];
let pack33 = [];
let pack34 = [];

// these are the wallpapers that get randomly selected on each page refresh
let wallpapers = [
    // [
    //     "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/hydra.jpg)  no-repeat fixed center",
    //     "cover",
    // ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/plains1.jpg) no-repeat fixed center",
        "cover",
    ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/forrest1.jpg) no-repeat fixed top",
        "cover",
    ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/simeanGruntsCard.jpg) repeat",
        "auto",
    ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/forrest2.jpg) no-repeat fixed top",
        "cover",
    ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/swamp1.jpg) no-repeat fixed top",
        "cover",
    ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/mountain1.jpg) no-repeat fixed top",
        "cover",
    ],
    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/mountain2.jpg) no-repeat fixed top",
        "cover",
    ],

    // [
    //     "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/island1.jpg) no-repeat fixed top",
    //     "cover",
    // ],

    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/swamp2.jpg) no-repeat fixed top",
        "cover",
    ],

    [
        "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/truffleSnout.jpg) no-repeat fixed top",
        "cover",
    ],

    // [
    //     "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(images/goldat3.gif) repeat fixed center",
    //     "auto",
    // ],
];
// ----------------------------------------------------------------------
// THIS CODE RUNS ON PAGE LOAD
// ----------------------------------------------------------------------
// this sets the default team selection to 2 on page load
defaultTeams.checked = true;
// this sets the label color for default team selection to be highlighted
label2.style.color = "var(--clr-highlight)";
let shuffledWallpapers = shuffle(wallpapers);
body.style.background = shuffledWallpapers[0][0]; // this accesses the [linear gradient / url / no-repeat fixed top] value of the wallpapers array
body.style.backgroundSize = shuffledWallpapers[0][1]; // this accesses the value in the array to set the size of the image
//------------------------------------
// EVENT LISTENERS
//------------------------------------
// this chooses a random wallpaper to load

// this is the event listener for the generate button that runs the shuffleCube function
generate.addEventListener("click", outputPacks);

// this code runs when the reset button is click - it resets the cube and partner arrays then runs the output
// packs function again
reset.addEventListener("click", () => {
    cube = [
        "Crush of Tentacles",
        "Fall of the Titans",
        "Overwhelming Denial",
        "Tyrant of Valakut",
        "Nimbus Champion",
        "Rushblade Commander",
        "Thrasher Brute",
        "Buzzing Whack-a-Doodle",
        "Crow Storm",
        "Etali, Primal Storm",
        "Hunting Pack",
        "Everythingamajig",
        "Giant Fan",
        "Pointy Finger of Doom",
        "Sword of Dungeons & Dragons",
        "Urza, Academy Headmaster",
        "X",
        "Archfiend of Despair",
        "Archon of Valor's Reach",
        "Beast Within",
        "Blood Feud",
        "Boldwyr Intimidator",
        "Bonus Round",
        "Bramble Sovereign",
        "Bring Down",
        "Chain Lightning",
        "Hot Soup",
        "Key to the City",
        "Open into Wonder",
        "Whirler Rogue",
        "Wings of Hubris",
        "Altar of Dementia",
        "Feral Hydra",
        "Fog Bank",
        "Fumble",
        "Game Plan",
        "Gang Up",
        "Generous Patron",
        "Genesis Chamber",
        "Tezzeret's Gambit",
        "Grothama, All-Devouring",
        "Hunted Wumpus",
        "Lava-Field Overlord",
        "Magus of the Candelabra",
        "Mystic Confluence",
        "Noosegraf Mob",
        "Oracle's Insight",
        "Pir's Whim",
        "Play of the Game",
        "Regna's Sanction",
        "Sentinel Tower",
        "Stolen Strategy",
        "Stunning Reversal",
        "Take Up Arms",
        "The Crowd Goes Wild",
        "Thrilling Encore",
        "Together Forever",
        "Vampire Charmseeker",
        "Spectral Searchlight",
        "Virtus's Maneuver",
        "Zndrsplt's Judgment",
        "Gladehart Cavalry",
        "Immolating Glare",
        "Archmage's Charm",
        "Birthing Boughs",
        "Generous Gift",
        "Watcher for Tomorrow",
        "Wing Shards",
        "Acidic Slime",
        "Unicycle",
        "Bag of Holding",
        "Mardu Shadowspear",
        "Davriel, Rogue Shadowmage",
        "Jace Beleren",
        "Managorger Hydra",
        "Rishkar, Peema Renegade",
        "Jiang Yanggu, Wildcrafter",
        "Akroan Horse",
        "Fractured Identity",
        "Sepulchral Primordial",
        "Mistmeadow Witch",
        "Samut, Tyrant Smasher",
        "Tattermunge Witch",
        "Apocalypse Hydra",
        "Joraga Auxiliary",
        "Huatli's Raptor",
        "Bloodfell Caves",
        "Blossoming Sands",
        "Rugged Highlands",
        "Tranquil Cove",
        "Dismal Backwater",
        "Temple of Enlightenment",
        "Temple of Deceit",
        "Sulfurous Springs",
        "Temple of Plenty",
        "Bountiful Promenade",
        "Luxury Suite",
        "Morphic Pool",
        "Sea of Clouds",
        "Spire Garden",
        "Geier Reach Sanitarium",
        "Gutterbones",
        "Narnam Renegade",
        "Zurgo Bellstriker",
        "Decorated Champion",
        "Glory-Bound Initiate",
        "Goblin Cratermaker",
        "Mindblade Render",
        "Reassembling Skeleton",
        "Mardu Strike Leader",
        "Najeela, the Blade-Blossom",
        "Frontier Warmonger",
        "Flamerush Rider",
        "Secure the Wastes",
        "Faerie Guidemother",
        "Aurora Champion",
        "Sandsteppe Outcast",
        "Long Road Home",
        "Trapped in the Tower",
        "Light of Hope",
        "Spellweaver Duo",
        "Negate",
        "Containment Membrane",
        "Huddle Up",
        "Soaring Show-Off",
        "Disowned Ancestor",
        "Fan Favorite",
        "Bloodborn Scoundrels",
        "Mind Rake",
        "Painful Lesson",
        "Bloodlust Inciter",
        "Azra Bladeseeker",
        "Stadium Vendors",
        "Goblin Freerunner",
        "Magma Hellion",
        "Firebolt",
        "Boulder Salvo",
        "Reckless Charge",
        "Jungle Delver",
        "Jungle Wayfinder",
        "Fertilid",
        "Orchard Elemental",
        "Elvish Fury",
        "Combo Attack",
        "Charging Binox",
        "Liliana's Specter",
        "Grave Scrabbler",
        "Mardu Skullhunter",
        "Lieutenants of the Guard",
        "Release to the Wind",
        "Pondering Mage",
        "Arcane Denial",
        "Call to Heel",
        "Scrounging Bandar",
        "Selvala's Enforcer",
        "Selvala, Explorer Returned",
        "Banshee of the Dread Choir",
        "Blade of Selves",
        "Caller of the Pack",
        "Warchief Giant",
        "Eager Construct",
        "Tyrant's Machine",
        "Victory Chimes",
        "Night Market Guard",
        "Skittering Surveyor",
        "Spear Spewer",
        "Relief Captain",
        "Charming Prince",
        "Dragonlair Spider",
        "Cloudblazer",
        "Angel of Condemnation",
        "Ajani, Adversary of Tyrants",
        "Mardu Woe-Reaper",
        "Dragon Hunter",
        "Meadowboon",
        "Otherworldly Journey",
        "Galepowder Mage",
        "Sightless Brawler",
        "Condescend",
        "Deep Analysis",
        "Hangman",
        "Avenging Huntbonder",
        "Orzhov Enforcer",
        "Delirium Skeins",
        "Dreadhorde Butcher",
        "Discovery // Dispersal",
        "Regal Bloodlord",
        "Karlov of the Ghost Council",
        "Thundering Djinn",
        "Fevered Visions",
        "Merfolk Skydiver",
        "Lorescale Coatl",
        "Experiment Kraj",
        "Honored Crop-Captain",
        "Skyknight Vanguard",
        "Firemane Avenger",
        "Deathreap Ritual",
        "Forgotten Ancient",
        "Eye of Doom",
        "Ghirapur Orrery",
        "Howling Golem",
        "Runed Servitor",
        "Rousing of Souls",
        "Tragic Arrogance",
        "Dakra Mystic",
        "Dictate of Kruphix",
        "Folio of Fancies",
        "Messenger Jays",
        "Minds Aglow",
        "Psychic Corrosion",
        "Vision Skeins",
        "Innocent Blood",
        "Barter in Blood",
        "Capital Punishment",
        "Triskaidekaphobia",
        "Rankle, Master of Pranks",
        "Burning Inquiry",
        "Dragon Mage",
        "Incendiary Command",
        "Magus of the Wheel",
        "Borderland Explorer",
        "Magus of the Vineyard",
        "Rites of Flourishing",
        "Selvala's Charge",
        "Selvala's Stampede",
        "Passwall Adept",
        "Flux Channeler",
        "Reckless Scholar",
        "Oneirophage",
        "Saltwater Stalwart",
        "Broodbirth Viper",
        "Jwar Isle Avenger",
        "Cairn Wanderer",
        "Cheering Fanatic",
        "Rimrock Knight",
        "Taurean Mauler",
        "Goblin Razerunners",
        "Hero of Oxid Ridge",
        "Three-Headed Goblin",
        "Goblin Wardriver",
        "Thrill of Possibility",
        "Strategy, Schmategy",
        "Khorvath's Fury",
        "Chainweb Aracnir",
        "Evolution Sage",
        "Maulfist Revolutionary",
        "Signal Pest",
        "Flameblade Adept",
        "Goblin Motivator",
        "Grim Initiate",
        "Seeker of the Way",
        "Accorder Paladin",
        "Daring Skyjek",
        "Lone Rider",
        "Diamond Knight",
        "Raging Redcap",
        "Hero of Bladehold",
        "Avaricious Dragon",
        "Backdraft Hellkite",
        "Mirrorwing Dragon",
        "Hellkite Charger",
        "Steel Hellkite",
        "Basilisk Collar",
        "Fountain of Renewal",
        "Gingerbrute",
        "Haazda Marshal",
        "Hopeful Eidolon",
        "Shadowspear",
        "Swords to Plowshares",
        "Ajani's Pridemate",
        "Vizkopa Guildmage",
        "Angel of Vitality",
        "Consuming Vapors",
        "Bond of Discipline",
        "Ob Nixilis of the Black Oath",
        "Blade of the Bloodchief",
        "Deathgreeter",
        "Hunger of the Howlpack",
        "Tragic Slip",
        "Veteran Explorer",
        "Epochrasite",
        "Shadows of the Past",
        "Fecundity",
        "Filigree Familiar",
        "Falkenrath Noble",
        "Poison-Tip Archer",
        "Screeching Buzzard",
        "Solemn Simulacrum",
        "Vindictive Lich",
        "Mitotic Slime",
        "Harvester of Souls",
        "Reaper from the Abyss",
        "Scuttling Doom Engine",
        "Lore Broker",
        "Mind's Eye",
        "Psychosis Crawler",
        "Chasm Skulker",
        "Niv-Mizzet, the Firemind",
        "Humble Defector",
        "Windfall",
        "Stuffy Doll",
        "Scoured Barrens",
        "Swiftwater Cliffs",
        "Thornwood Falls",
        "Jungle Hollow",
        "Wind-Scarred Crag",
        "Temple of Epiphany",
        "Temple of Malady",
        "Temple of Mystery",
        "Temple of Silence",
        "Roalesk, Apex Hybrid",
        "Outlaws' Merriment",
        "Righteous Confluence",
        "Victory's Herald",
        "Pianna, Nomad Captain",
        "Cultivator of Blades",
        "Rabble-Rouser",
        "Thunderstaff",
        "Trumpet Blast",
        "Rhox Veteran",
        "Battlefield Promotion",
        "Makeshift Battalion",
        "Sunscorch Regent",
        "Do-It-Yourself Seraph",
        "Herald of the Host",
        "Kenrith, the Returned King",
        "Dwarven Lightsmith",
        "Giant Killer",
        "Disenchant",
        "Benthic Biomancer",
        "Faerie Vandal",
        "Nadir Kraken",
        "Vigean Graftmage",
        "Helium Squirter",
        "Jace's Erasure",
        "Ominous Seas",
        "Grip of the Roil",
        "Out of Bounds",
        "Diminishing Returns",
        "Comparative Analysis",
        "Corpse Augur",
        "Herald of the Dreadhorde",
        "Exhume",
        "Quest for the Gravelord",
        "Contentious Plan",
        "Pollenbright Druid",
        "Thrummingbird",
        "Courage in Crisis",
        "Volt Charge",
        "Bloom Hulk",
        "Spread the Sickness",
        "Planewide Celebration",
        "Collective Defiance",
        "Cathartic Reunion",
        "Fire Prophecy",
        "Fists of Flame",
        "Anje's Ravager",
        "Lightning Strike",
        "Cavalier of Thorns",
        "Pulse of Murasa",
        "Regrowth",
        "Caustic Caterpillar",
        "Thrashing Brontodon",
        "Nest Invader",
        "Awakening Zone",
        "Endless One",
        "Mindless Automaton",
        "Weapon Rack",
        "Karn's Bastion",
        "Winding Way",
        "Satyr Wayfinder",
        "Predator's Howl",
        "Status // Statue",
        "Opt",
        "Brainstorm",
        "Alirios, Enraptured",
        "Creepy Doll",
        "Duplicant",
        "Breaker of Armies",
        "Blinkmoth Urn",
        "Coveted Jewel",
        "Howling Mine",
        "Deadeye Navigator",
        "Druid's Familiar",
        "Elgaud Shieldmate",
        "Lightning Mauler",
        "Nearheath Pilgrim",
        "Silverblade Paladin",
        "Tandem Lookout",
        "Wingcrafter",
        "Wolfir Silverheart",
        "Opportunity",
        "Incubation Druid",
        "Merfolk Branchwalker",
        "Voyaging Satyr",
        "Garruk Wildspeaker",
        "Avatar of Growth",
        "Slippery Bogbonder",
        "Wilt",
        "Farfinder",
        "Evolving Wilds",
        "Terramorphic Expanse",
        "Roon of the Hidden Realm",
        "Vaevictis Asmadi, the Dire",
        "Gahiji, Honored One",
        "Tayam, Luminous Enigma",
        "Volrath, the Shapestealer",
        "Mathas, Fiend Seeker",
        "Whirlwind of Thought",
        "Sydri, Galvanic Genius",
        "Kalamax, the Stormsire",
        "City of Brass",
        "Hangarback Walker",
        "Whispering Madness",
        "Stormfist Crusader",
        "Kambal, Consul of Allocation",
        "Chevill, Bane of Monsters",
        "Edric, Spymaster of Trest",
        "The Royal Scions",
        "Expansion // Explosion",
        "Waves of Aggression",
        "Adarkar Wastes",
        "Karplusan Forest",
        "Underground River",
        "Battlefield Forge",
        "Caves of Koilos",
        "Llanowar Wastes",
        "Yavimaya Coast",
        "Shivan Reef",
        "Brushland",
        "Chain of Vapor",
        "Phantom Warrior",
        "Shoulder to Shoulder",
        "Wanderer's Strike",
        "Expedite",
        "Rancor",
        "Syr Konrad, the Grim",
        "Supernatural Stamina",
        "Seer's Lantern",
        "Temple of Malice",
        "Temple of Abandon",
        "Malicious Affliction",
        "Skirsdag High Priest",
        "Lumberknot",
        "Yavimaya Elder",
        "Basri Ket",
        "Angelic Ascension",
        "Heartfire Immolator",
        "Llanowar Visionary",
        "Mazemind Tome",
        "Ghostly Pilferer",
        "Silversmote Ghoul",
        "Liliana, Waker of the Dead",
        "Inspiring Vantage",
        "Twinblade Assassins",
        "Mad Ratter",
        "Irencrag Pyromancer",
        "Gonti, Lord of Luxury",
        "Ardenvale Tactician",
        "Heirloom Blade",
        "Luminate Primordial",
        "Debt to the Deathless",
        "Glint-Horn Buccaneer",
        "God-Pharaoh's Statue",
        "Nicol Bolas, God-Pharaoh",
        "Lightning Reaver",
        "Soul Warden",
        "Sage of Hours",
        "Sarkhan's Unsealing",
        "Skull Rend",
        "The Eldest Reborn",
        "Throne of the God-Pharaoh",
        "Vicious Rumors",
        "Witch of the Moors",
        "Zhur-Taa Druid",
        "Angel of Destiny",
        "Attended Healer",
        "Archpriest of Iona",
        "Journey to Oblivion",
        "Luminarch Aspirant",
        "Squad Commander",
        "Acquisitions Expert",
        "Coveted Prize",
        "Deadly Alliance",
        "Demon's Disciple",
        "Malakir Blood-Priest",
        "Marauding Blight-Priest",
        "Nighthawk Scavenger",
        "Nullpriest of Oblivion",
        "Fireblade Charger",
        "Kargan Intimidator",
        "Roiling Vortex",
        "Shatterskull Charger",
        "Valakut Exploration",
        "Oran-Rief Ooze",
        "Grasp of Fate",
        "Approach of the Second Sun",
        "Deadly Designs",
        "Chain of Smog",
        "Liliana's Caress",
        "Reflector Mage",
        "Vault of Champions",
        "Training Center",
        "Undergrowth Stadium",
        "Spectator Seating",
        "Rejuvenating Springs",
    ];

    partners = [
        ["Proud Mentor", "Impetuous Protege"],
        ["Sylvia Brightspear", "Khorvath Brightflame"],
        ["Blaring Recruiter", "Blaring Captain"],
        ["Regna, the Redeemer", "Krav, the Unredeemed"],
        ["Lore Weaver", "Ley Weaver"],
        ["Toothy, Imaginary Friend", "Pir, Imaginative Rascal"],
        ["Chakram Retriever", "Chakram Slinger"],
        ["Zndrsplt, Eye of Wisdom", "Okaun, Eye of Chaos"],
        ["Will Kenrith", "Rowan Kenrith"],
        ["Nikara, Lair Scavenger", "Yannik, Scavenging Sentinel"],
        ["Virtus the Veiled", "Gorm the Great"],
        ["Soulblade Corrupter", "Soulblade Renewer"],
        ["Brallin, Skyshark Rider", "Shabraz, the Skyshark"],
        ["Cazur, Ruthless Stalker", "Ukkima, Stalking Shadow"],
    ];

    outputPacks();
});

//------------------------------------------------------------------
// Fisher-Yates shuffle function -- used to shuffle arrays
//------------------------------------------------------------------
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}
//----------------------------------------------------------------------------------------------------------
// this function takes parameters -- it shuffles the cube array and partner array then takes 14 cards from the
// cube and 1 pair of partner cards and outputs them to the new pack array (pack1, pack2, pack3....etc)
//----------------------------------------------------------------------------------------------------------
function makePacks(pack, arr1, arr2) {
    const shuffledCube = shuffle(arr1);
    const shuffledPairs = shuffle(arr2);

    pack = shuffledCube.splice(0, 14); //this takes the top 14 cards from the shuffled cube array and puts it into the pack array

    let partners = shuffledPairs.shift([0]); // this takes the first pair of partner cards from the partner array and stores it in a variable

    let partner1 = partners[0]; // this stores the first partner card from the partners array in its own variable
    let partner2 = partners[1]; // this stores the second partner card from the partners array in its own variable

    // this pushes the partner pair cards into the pack array
    pack.push(partner1);
    pack.push(partner2);

    return pack;
}

// ----------------------------------------------------------------------------------------------------------
// COPY TEXT -- copies the text of the displayed packs and changes the text / style of the copy to clipboard
// button
// -----------------------------------------------------------------------------------------------------------

// this is the copy text function used when the copyButton is clicked
function copyText(htmlElementArray) {
    let combinedText = "";
    let inputElement = document.createElement("textarea");

    // this loop goes through the array of the html elements that hold the packs from the outputPacks
    // function. it copies the inner text of each element and adds it to the combinedText variable then prints
    // the total of all the visible packs to the text area so they can be copied to clipboard
    for (let i = 0; i < htmlElementArray.length; i++) {
        combinedText += htmlElementArray[i].innerText;
    }

    inputElement.value = combinedText;
    document.body.appendChild(inputElement);
    // inputElement.style.opacity = "0";
    inputElement.style.position = "absolute";

    // this selects the text and copies it
    inputElement.select();
    document.execCommand("copy");
}
// ---------------------------------------------------------------------------
// COPY TO CLIPBOARD ONCLICK FUNCTION
// ---------------------------------------------------------------------------
// this code gets executed when the copyButton is clicked
copyButton.onclick = function () {
    if (defaultTeams.checked == true) {
        this.innerHTML = "Copied!";
        this.style.background = "var(--clr-highlight)";
        this.style.color = "black";

        // this is an array of the HTML elements that hold the text for the packs after they have been
        // randomized and dealt out
        let coppiedPacks = [one, two, three, four, five, six, seven, eight];

        copyText(coppiedPacks);
    } else if (checkTeam3.checked == true) {
        this.innerHTML = "Copied!";
        this.style.background = "var(--clr-highlight)";
        this.style.color = "black";

        // this is an array of the HTML elements that hold the text for the packs after they have been
        // randomized and dealt out
        let coppiedPacks = [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
        ];
        copyText(coppiedPacks);
    } else if (checkTeam4.checked == true) {
        this.innerHTML = "Copied!";
        this.style.background = "var(--clr-highlight)";
        this.style.color = "black";

        // this is an array of the HTML elements that hold the text for the packs after they have been
        // randomized and dealt out
        let coppiedPacks = [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
            fourteen,
            fifteen,
            sixteen,
        ];
        copyText(coppiedPacks);
    }
};

// ----------------------------------------------------------------------------------------
// CARD COUNT - this displays the current total number of cards in all the displayed packs
// ----------------------------------------------------------------------------------------

function cardCount() {
    currentCount.innerHTML = " 128";

    if (checkTeam3.checked == true) {
        currentCount.innerHTML = " 192";
    } else {
        currentCount.innerHTML = " 128";
    }

    if (checkTeam4.checked == true) {
        currentCount.innerHTML = " 256";
    } else {
        currentCount.InnerHTML = " 128";
    }
}

//-------------------------------------------------------------------------------------------
// ADD TEAM FUNCTION - detects what checkbox is selected and runs the appropriate code
//-------------------------------------------------------------------------------------------
function addTeam() {
    // If the checkbox is checked, display the output text
    if (defaultTeams.checked == true) {
        // this changes the style of the "copy to clipboard" button when a new team option is clicked
        copyButton.innerHTML = "Copy to clipboard";
        copyButton.style.background = "var(--clr-primary)";
        copyButton.style.color = "white";
        // this hides the scroll bar for only 2 teams
        wrapWrap.style.overflowY = "hidden";

        // this changes the label color of the selected number of teams checkbox
        label2.style.color = "var(--clr-highlight)";
        label3.style.color = "white";
        label4.style.color = "white";
    }

    if (checkTeam3.checked == true) {
        // this changes the style of the "copy to clipboard" button when a new team option is clicked
        copyButton.innerHTML = "Copy to clipboard";
        copyButton.style.background = "var(--clr-primary)";
        copyButton.style.color = "white";

        team3.style.display = "block"; // this reveals team 3
        wrapWrap.style.overflow = "scroll";
        wrapWrap.style.overflowY = "scroll";
        wrapWrap.style.overflowX = "hidden";

        // this changes the label color of the selected number of teams
        label2.style.color = "white";
        label3.style.color = "var(--clr-highlight)";
        label4.style.color = "white";
        cardCount();
    } else {
        team3.style.display = "none"; //this hides team 3
        cardCount();
    }

    if (checkTeam4.checked == true) {
        // this changes the style of the "copy to clipboard" button when a new team option is clicked
        copyButton.innerHTML = "Copy to clipboard";
        copyButton.style.background = "var(--clr-primary)";
        copyButton.style.color = "white";
        team3.style.display = "block"; // this reveals team 3
        team4.style.display = "block"; // this reveals team 4
        wrapWrap.style.overflow = "scroll";
        wrapWrap.style.overflowY = "scroll";
        wrapWrap.style.overflowX = "hidden";

        // this changes the label color of the selected number of teams
        label2.style.color = "white";
        label3.style.color = "white";
        label4.style.color = "var(--clr-highlight)";
        cardCount();
    } else {
        team4.style.display = "none"; //this hides team 4
        cardCount();
    }
}

//---------------------------------------------------------------------------------------------------------------
// SHUFFLE AND OUTPUT PACKS - this shuffles the cube array and outputs the new random array of cards to variables
// pack1,  pack2, pack3 ...etc then it creates an array of the newly created packs and shuffles those then
// outputs the new pack order to html through targeting the P element variables one, two, three,...etc
//---------------------------------------------------------------------------------------------------------------

function outputPacks() {
    // this resets the "copy to clipboard" style to initial values
    copyButton.innerHTML = "Copy to clipboard";
    copyButton.style.background = "var(--clr-primary)";
    copyButton.style.color = "white";
    totalCards.style.display = "block";
    cardCount();
    // this hides the generate button and reveals the reset button
    reset.classList.add("display");
    generate.classList.add("hide");
    //   team1header.classList.add("display");
    //   team2header.classList.add("display");
    //   team3header.classList.add("display");
    //   team4header.classList.add("display");
    wrap.style.opacity = "1"; // this reveals the wrap that makes the background darker
    wrap.style.transition = ".5s";
    // container.style.opacity = "1";

    // generate the packs
    pack1 = makePacks(pack1, cube, partners);
    pack2 = makePacks(pack2, cube, partners);
    pack3 = makePacks(pack3, cube, partners);
    pack4 = makePacks(pack4, cube, partners);
    pack5 = makePacks(pack5, cube, partners);
    pack6 = makePacks(pack6, cube, partners);
    pack7 = makePacks(pack7, cube, partners);
    pack8 = makePacks(pack8, cube, partners);
    pack9 = makePacks(pack9, cube, partners);
    pack10 = makePacks(pack10, cube, partners);
    pack11 = makePacks(pack11, cube, partners);
    pack12 = makePacks(pack12, cube, partners);
    pack13 = makePacks(pack13, cube, partners);
    pack14 = makePacks(pack14, cube, partners);
    pack15 = cube.splice(0, 16);
    pack16 = cube.splice(0, 16);
    pack17 = cube.splice(0, 16);
    pack18 = cube.splice(0, 16);
    pack19 = cube.splice(0, 16);
    pack20 = cube.splice(0, 16);
    pack21 = cube.splice(0, 16);
    pack22 = cube.splice(0, 16);
    pack23 = cube.splice(0, 16);
    pack24 = cube.splice(0, 16);
    pack25 = cube.splice(0, 16);
    pack26 = cube.splice(0, 16);
    pack27 = cube.splice(0, 16);
    pack28 = cube.splice(0, 16);
    pack29 = cube.splice(0, 16);
    pack30 = cube.splice(0, 16);
    pack31 = cube.splice(0, 16);
    pack32 = cube.splice(0, 16);
    pack33 = cube.splice(0, 16);

    // pack array to be shuffled
    let packArray = [
        pack1,
        pack2,
        pack3,
        pack4,
        pack5,
        pack6,
        pack7,
        pack8,
        pack9,
        pack10,
        pack11,
        pack12,
        pack13,
        pack14,
        pack15,
        pack16,
        pack17,
        pack18,
        pack19,
        pack20,
        pack21,
        pack22,
        pack23,
        pack24,
        pack25,
        pack26,
        pack27,
        pack28,
        pack29,
        pack30,
        pack31,
        pack32,
        pack33,
    ];

    let shuffledPacks = shuffle(packArray);
    //------------------------------------------------------------------------------------------------------
    // output the results to HTML -- the p element is targeted and innerHTML is the randomly chosen pack from
    // the shuffled packArray. using join( "<br />") to add a break after each array item so they are
    // output with each card being on its own line.
    //
    // each pack array is pushed an extra <br /> element so the packs will be seperated by a space when the
    // copyText function is called and outputs the packs to the text area
    //

    shuffledPacks[0].push(" <br /> ");
    one.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    two.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    three.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    four.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    five.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    six.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    seven.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    eight.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    nine.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    ten.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    eleven.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    twelve.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    thirteen.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    fourteen.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    fifteen.innerHTML = shuffledPacks.shift().join(" <br /> ");
    shuffledPacks[0].push(" <br /> ");
    sixteen.innerHTML = shuffledPacks.shift().join(" <br /> ");
    // seventeen.innerHTML = pack17.join(' <br /> ')
    // eighteen.innerHTML = pack18.join(' <br /> ')
    // nineteen.innerHTML = pack19.join(' <br /> ')
    // twenty.innerHTML = pack20.join(' <br /> ')
    // twentyOne.innerHTML = pack21.join(' <br /> ')
    // twentyTwo.innerHTML = pack22.join(' <br /> ')
    // twentyThree.innerHTML = pack23.join(' <br /> ')
    // twentyFour.innerHTML = pack24.join(' <br /> ')
    // twentyFive.innerHTML = pack25.join(' <br /> ')
    // twentySix.innerHTML = pack26.join(' <br /> ')
    // twentySeven.innerHTML = pack27.join(' <br /> ')
    // twentyEight.innerHTML = pack28.join(' <br /> ')
    // twentyNine.innerHTML = pack29.join(' <br /> ')
    // thirty.innerHTML = pack30.join(' <br /> ')
    // thirtyOne.innerHTML = pack31.join(' <br /> ')
    // thirtyTwo.innerHTML = pack32.join(' <br /> ')
    // thirtyThree.innerHTML = pack33.join(' <br /> ')
    // thirtyFour.innerHTML = pack34.join(' <br /> ')
}
