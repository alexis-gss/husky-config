// List of valid types (based of https://www.conventionalcommits.org/).
export const validTypes = [
  "build", "chore", "ci",
  "docs", "feat", "fix",
  "perf", "refactor", "revert",
  "style", "test",
];

// List of valid gitmoji (based of https://gitmoji.dev/).
export const validEmojis = [
  {
    code: "adhesive_bandage",
    icon: "🩹",
    description: "Simple fix for a non-critical issue",
  },
  {
    code: "alembic",
    icon: "⚗️",
    description: "Perform experiments",
},
  {
    code: "alien",
    icon: "👽",
    description: "Update code due to external API changes",
  },
  {
    code: "ambulance",
    icon: "🚑",
    description: "Critical hotfix",
  },
  {
    code: "arrow_down",
    icon: "⬇️",
    description: "Downgrade dependencies",
  },
  {
    code: "arrow_up",
    icon: "⬆️",
    description: "Upgrade dependencies",
  },
  {
    code: "art",
    icon: "🎨",
    description: "Improve structure / format of the code",
  },
  {
    code: "beers",
    icon: "🍻",
    description: "Write code drunkenly",
  },
  {
    code: "bento",
    icon: "🍱",
    description: "Add or update assets",
  },
  {
    code: "bookmark",
    icon: "🔖",
    description: "Release / Version tags",
  },
  {
    code: "boom",
    icon: "💥",
    description: "Introduce breaking changes",
  },
  {
    code: "brick",
    icon: "🧱",
    description: "Infrastructure related changes",
  },
  {
    code: "bug",
    icon: "🐛",
    description: "Fix a bug",
  },
  {
    code: "building_construction",
    icon: "🏗️",
    description: "Make architectural changes",
  },
  {
    code: "bulb",
    icon: "💡",
    description: "Add or update comments in source code",
  },
  {
    code: "busts_in_silhouette",
    icon: "👥",
    description: "Add or update contributor(s)",
  },
  {
    code: "camera_with_flash",
    icon: "📸",
    description: "Add or update snapshots",
  },
  {
    code: "card_file_box",
    icon: "🗃️",
    description: "Perform database related changes",
  },
  {
    code: "chart_with_upwards_trend",
    icon: "📈",
    description: "Add or update analytics or track code",
  },
  {
    code: "children_crossing",
    icon: "🚸",
    description: "Improve user experience / usability",
  },
  {
    code: "closed_lock_with_key",
    icon: "🔐",
    description: "Add or update secrets",
  },
  {
    code: "clown_face",
    icon: "🤡",
    description: "Mock things",
  },
  {
    code: "coffin",
    icon: "⚰️",
    description: "Remove dead code",
  },
  {
    code: "construction_worker",
    icon: "👷",
    description: "Add or update CI build system",
  },
  {
    code: "construction",
    icon: "🚧",
    description: "Work in progress",
  },
  {
    code: "dizzy",
    icon: "💫",
    description: "Add or update animations and transitions",
  },
  {
    code: "egg",
    icon: "🥚",
    description: "Add or update an easter egg",
  },
  {
    code: "face_with_monocle",
    icon: "🧐",
    description: "Data exploration / inspection",
  },
  {
    code: "fire",
    icon: "🔥",
    description: "Remove code or files",
  },
  {
    code: "globe_with_meridians",
    icon: "🌐",
    description: "Internationalization and localization",
  },
  {
    code: "goal_net",
    icon: "🥅",
    description: "Catch errors",
  },
  {
    code: "green_heart",
    icon: "💚",
    description: "Fix CI Build",
  },
  {
    code: "hammer",
    icon: "🔨",
    description: "Add or update development scripts",
  },
  {
    code: "heavy_minus_sign",
    icon: "➖",
    description: "Remove a dependency",
  },
  {
    code: "heavy_plus_sign",
    icon: "➕",
    description: "Add a dependency",
  },
  {
    code: "iphone",
    icon: "📱",
    description: "Work on responsive design",
  },
  {
    code: "label",
    icon: "🏷️",
    description: "Add or update types",
  },
  {
    code: "lipstick",
    icon: "💄",
    description: "Add or update the UI and style files",
  },
  {
    code: "lock",
    icon: "🔒",
    description: "Fix security or privacy issues",
  },
  {
    code: "loud_sound",
    icon: "🔊",
    description: "Add or update logs",
  },
  {
    code: "mag",
    icon: "🔍",
    description: "Improve SEO",
  },
  {
    code: "memo",
    icon: "📝",
    description: "Add or update documentation",
  },
  {
    code: "money_with_wings",
    icon: "💸",
    description: "Add sponsorships or money related infrastructure",
  },
  {
    code: "mute",
    icon: "🔇",
    description: "Remove logs",
  },
  {
    code: "necktie",
    icon: "👔",
    description: "Add or update business logic",
  },
  {
    code: "package",
    icon: "📦",
    description: "Add or update compiled files or packages",
  },
  {
    code: "page_facing_up",
    icon: "📄",
    description: "Add or update license",
  },
  {
    code: "passport_control",
    icon: "🛂",
    description: "Work on authorization, roles and permissions",
  },
  {
    code: "pencil2",
    icon: "✏️",
    description: "Fix typos",
  },
  {
    code: "poop",
    icon: "💩",
    description: "Write bad code that needs to be improved",
  },
  {
    code: "pushpin",
    icon: "📌",
    description: "Pin dependencies to specific versions",
  },
  {
    code: "recycle",
    icon: "♻️",
    description: "Refactor code",
  },
  {
    code: "rewind",
    icon: "⏪",
    description: "Revert changes",
  },
  {
    code: "rocket",
    icon: "🚀",
    description: "Deploy stuff",
  },
  {
    code: "rotating_light",
    icon: "🚨",
    description: "Fix compiler / linter warnings",
  },
  {
    code: "safety_vest",
    icon: "🦺",
    description: "Add or update code related to validation",
  },
  {
    code: "see_no_evil",
    icon: "🙈",
    description: "Add or update a .gitignore file",
  },
  {
    code: "seedling",
    icon: "🌱",
    description: "Add or update seed files",
  },
  {
    code: "sparkles",
    icon: "✨",
    description: "Introduce new features",
  },
  {
    code: "speech_balloon",
    icon: "💬",
    description: "Add or update text and literals",
  },
  {
    code: "stethoscope",
    icon: "🩺",
    description: "Add or update healthcheck",
  },
  {
    code: "tada",
    icon: "🎉",
    description: "Begin a project",
  },
  {
    code: "technologist",
    icon: "🧑‍💻",
    description: "Improve developer experience",
  },
  {
    code: "test_tube",
    icon: "🧪",
    description: "Add a failing test",
  },
  {
    code: "thread",
    icon: "🧵",
    description: "Add or update code related to multithreading or concurrency",
  },
  {
    code: "triangular_flag_on_post",
    icon: "🚩",
    description: "Add, update, or remove feature flags",
  },
  {
    code: "truck",
    icon: "🚚",
    description: "Move or recode resources",
  },
  {
    code: "twisted_rightwards_arrows",
    icon: "🔀",
    description: "Merge branches",
  },
  {
    code: "wastebasket",
    icon: "🗑️",
    description: "Deprecate code that needs to be cleaned up",
  },
  {
    code: "wheelchair",
    icon: "♿",
    description: "Improve accessibility",
  },
  {
    code: "white_check_mark",
    icon: "✅",
    description: "Add, update, or pass tests",
  },
  {
    code: "wrench",
    icon: "🔧",
    description: "Add or update configuration files",
  },
  {
    code: "zap",
    icon: "⚡",
    description: "Improve performance",
  },
];

export const validMessage = {
  min: 3,
  max: 100,
};

export const colors = {
  bgBlue:  '\x1b[44;97m',
  bgRed:   '\x1b[41;97m',
  bold:    '\x1b[1m',
  cyan:    '\x1b[36m',
  dim:     '\x1b[2m',
  gray:    '\x1b[90m',
  magenta: '\x1b[35m',
  red:     '\x1b[31m',
  reset:   '\x1b[0m',
  white:   '\x1b[97m',
  yellow:  '\x1b[33m',
};