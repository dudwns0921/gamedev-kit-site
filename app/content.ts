// Every word on the page, in each language. Commands, paths and code stay as they are in both.
// `backticks` in a string are drawn as code.

export type Lang = "en" | "ko";

export const REPO = "https://github.com/dudwns0921/claude-gamedev-kit";
export const BOARD_REPO = "https://github.com/dudwns0921/gamedev-kit-board";

// The quick start follows the kit's README — change these with it.
export const INSTALL = `claude plugin marketplace add dudwns0921/claude-gamedev-kit
claude plugin install gamedev-kit@claude-gamedev-kit --scope project`;

export const LINKS = {
  claude: "https://code.claude.com",
  python: "https://www.python.org/downloads/",
  node: "https://nodejs.org",
  godot: "https://godotengine.org/download",
  unity: "https://unity.com/download",
};

type Scene = { img: string; title: string; text: string; alt: string };

const en = {
  meta: {
    title: "claude-gamedev-kit — make games with Claude Code, cycle by cycle",
    description: "A Claude Code plugin for making games: agents make the game one cycle at a time, and a dashboard shows where every game stands and what waits on you. For Godot, Unity and web games.",
  },
  nav: { why: "Why", start: "Quick start" },
  hero: {
    eyebrow: "A Claude Code plugin for making games · Godot · Unity · Web",
    title: "Making a game with AI is easy.",
    accent: "The hard part is the weeks.",
    lead: "Weeks in, you lose track of where it stands and what waits on you, the design and the code drift apart, and what you learned in the last game is gone by the next. gamedev-kit keeps all of it in view.",
    start: "Quick start",
    github: "View on GitHub",
    indexLabel: "Three reasons to use it",
  },
  reasons: [
    { id: "dashboard", problem: "You lose track of where it stands",
      title: "See where every game stands — and decide there",
      text: "A dashboard on your machine shows each game as the player meets it, stage by stage — what is done, a placeholder, not made, or a problem. Every question the agents have for you is a decision there, with the pictures to judge it by. Pick an answer and the game's Claude session picks it up." },
    { id: "sync", problem: "The design and the code drift apart",
      title: "The design and the code stay one thing",
      text: "Every number and rule in the GDD has an ID, and the code that implements it carries the same ID. The kit finds what disagrees and what is not built, and aligns the side you name. The balance numbers are one Excel sheet that follows the code." },
    { id: "rules", problem: "What you learned is gone by the next game",
      title: "Every game leaves the next one better",
      text: "What tripped you becomes one of your rules, loaded into every game you make next. Once you say so, rules go to the kit as issues, and the ones that hold for anyone become rules for everybody." },
  ],
  reasonLabel: "Reason",
  scenes: {
    label: "What the dashboard shows",
    prev: "Previous",
    next: "Next",
    list: [
      { img: "/board-games.png", title: "Every game on one page",
        text: "What waits on you in each game, and how far each has come.",
        alt: "The dashboard home: three games, what waits on you in each, and how far each has come" },
      { img: "/dashboard.png", title: "Where a game stands",
        text: "Each stage as the player meets it — function, art, sound, verification — beside the cycle in hand and what is undecided.",
        alt: "One game's overview: stage cards in play order, beside the current cycle and what is still undecided" },
      { img: "/board-stage.png", title: "Inside a stage",
        text: "The GDD rows the stage is built from, which are already in the code, and the tasks that touched it.",
        alt: "The Delivering stage: its GDD rows, all in the code, with art and sound not read yet" },
      { img: "/review.png", title: "Decide with pictures",
        text: "A question from the agents with the pictures to compare and a recommended answer. Your pick goes to the game's session.",
        alt: "The review tab: a decision with three concept pictures to compare above its options, and a decision with a recommended answer" },
      { img: "/board-checks.png", title: "Check by playing",
        text: "What only playing can tell, as checks. Mark OK or Problem and say what you saw.",
        alt: "Checks by playing: each with OK and Problem buttons and a note for what you saw" },
    ] as Scene[],
  },
  sync: {
    label: "A GDD sync table beside the code: one row synced, one mismatched, one not built yet",
    gdd: "GDD · sync table",
    code: "Code",
    none: "no marker yet",
    foot: "`gdd-sync` finds where they differ and aligns the side you name.",
  },
  rules: {
    label: "Three games in a row; your rules grow under each one",
    games: ["Game 1", "Game 2", "Game 3"],
    list: [
      "Test touch on a real phone",
      "Balance numbers live in one file",
      "HUD text at 32 px or more",
      "Sound starts after the first input",
      "Save before the scene changes",
      "Check the build size before upload",
    ],
    fresh: "Learned in this game",
    carried: "Carried over",
  },
  start: {
    eyebrow: "Quick start",
    title: "Install it in your game's folder. Then say what you want.",
    s1: "What you need",
    needs: [
      { name: "Claude Code", href: LINKS.claude, note: "" },
      { name: "Python", href: LINKS.python, note: "3.9 or later" },
      { name: "Node.js", href: LINKS.node, note: "for the dashboard" },
      { name: "The engine's editor", href: "", note: "Godot or Unity — a plain web game needs none" },
    ],
    s2: "Install the kit in your game's folder",
    s2sub: "An empty folder is fine.",
    terminal: "terminal",
    s2note: "Installed for the project, the kit stays with the game: anyone who opens the game's folder in Claude Code gets the same kit.",
    s3: "Start Claude Code there and say what you want",
    s3sub: "There is nothing to learn.",
    you: "you say",
    say: [
      ["I want to make a cozy farming game", "asks where it will be played, picks the engine, sets it up, then writes the GDD with you"],
      ["this time, let's add a shop", "one cycle: spec, design, build — what is yours to decide waits on the dashboard"],
      ["I played it — the prices are unreadable", "finds the causes and fixes them"],
    ] as [string, string][],
    s3note: "Every step also has a slash command — `/gamedev-kit:init`, `start`, `cycle`, `playtest`, `board`, … — if you would rather type one.",
    engines: "Engines games have been made with",
    web: "Web — plain HTML and JavaScript, no editor",
  },
  final: {
    title: "See it, and you finish it.",
    lead: "Where your game stands and what waits on you, always in view — from the first idea to a finished game.",
    install: "Quick start",
    readme: "Read the README",
  },
  foot: { plugin: "Plugin", dashboard: "Dashboard", issues: "Issues" },
  copy: { copy: "Copy", copied: "Copied" },
};

export type Copy = typeof en;

const ko: Copy = {
  meta: {
    title: "claude-gamedev-kit — Claude Code로 게임을 사이클 단위로 만들기",
    description: "게임을 만드는 Claude Code 플러그인: 에이전트가 한 사이클씩 만들고, 대시보드가 모든 게임이 어디까지 왔는지와 나를 기다리는 것을 보여 줍니다. Godot · Unity · 웹 게임.",
  },
  nav: { why: "왜 쓰나", start: "빠른 시작" },
  hero: {
    eyebrow: "게임을 만드는 Claude Code 플러그인 · Godot · Unity · Web",
    title: "AI로 게임을 만드는 건 쉽습니다.",
    accent: "어려운 건, 길어질 때입니다.",
    lead: "길어지면 어디까지 왔는지, 무엇이 나를 기다리는지 놓치고, 기획과 코드가 어긋나고, 지난 게임에서 배운 것은 다음 게임에서 사라집니다. gamedev-kit은 그 전부를 눈에 보이게 둡니다.",
    start: "빠른 시작",
    github: "GitHub에서 보기",
    indexLabel: "쓰는 이유 세 가지",
  },
  reasons: [
    { id: "dashboard", problem: "어디까지 왔는지 놓칩니다",
      title: "어디까지 왔는지 보고, 거기서 정합니다",
      text: "내 컴퓨터의 대시보드가 모든 게임을 플레이어가 만나는 순서대로, 단계마다 보여 줍니다 — 완성인지, 임시인지, 아직 없는지, 문제인지. 에이전트가 묻는 건 전부 판단할 그림이 붙은 결정으로 오고, 답을 고르면 게임의 Claude 세션이 받아 갑니다." },
    { id: "sync", problem: "기획과 코드가 어긋납니다",
      title: "기획과 코드가 하나로 유지됩니다",
      text: "기획서(GDD)의 모든 숫자와 규칙에는 ID가 있고, 그것을 구현한 코드에도 같은 ID가 붙습니다. 키트가 어긋난 곳과 아직 없는 곳을 찾아, 지정한 쪽으로 맞춥니다. 밸런스 숫자는 코드를 따라가는 엑셀 시트 한 장으로 봅니다." },
    { id: "rules", problem: "배운 것이 다음 게임에서 사라집니다",
      title: "게임마다 다음 게임이 나아집니다",
      text: "한 번 걸려 넘어진 것은 내 규칙이 되어, 다음에 만드는 모든 게임에 들어갑니다. 허락하면 규칙은 키트에 이슈로 올라가고, 누구에게나 통하는 것은 모두의 규칙이 됩니다." },
  ],
  reasonLabel: "이유",
  scenes: {
    label: "대시보드에서 보이는 것",
    prev: "이전",
    next: "다음",
    list: [
      { img: "/board-games.png", title: "모든 게임을 한 페이지에서",
        text: "게임마다 나를 기다리는 것과 어디까지 왔는지를 한눈에 봅니다.",
        alt: "대시보드 첫 화면: 게임 세 개, 게임마다 나를 기다리는 것과 진행 정도" },
      { img: "/dashboard.png", title: "게임이 어디까지 왔는지",
        text: "플레이어가 만나는 순서대로 단계마다 기능·아트·사운드·검증을, 옆에 지금 사이클과 아직 정하지 않은 것을 보여 줍니다.",
        alt: "한 게임의 개요: 플레이 순서대로 놓인 단계 카드, 옆에 지금 사이클과 아직 정하지 않은 것" },
      { img: "/board-stage.png", title: "단계 안쪽",
        text: "그 단계를 이루는 기획서 항목, 그중 코드에 들어간 것, 그 단계를 건드린 작업까지.",
        alt: "배달 단계: 기획서 항목이 모두 코드에 들어가 있고, 아트와 사운드는 아직 없음" },
      { img: "/review.png", title: "그림을 보고 결정",
        text: "에이전트가 묻는 것이 비교할 그림과 추천 답을 달고 옵니다. 고르면 게임의 세션이 받아 갑니다.",
        alt: "리뷰 탭: 컨셉 그림 세 장을 비교하며 고르는 결정, 추천 답이 붙은 결정" },
      { img: "/board-checks.png", title: "플레이해서 확인",
        text: "플레이해 봐야 알 수 있는 것을 확인 항목으로 줍니다. OK 또는 문제를 누르고 본 것을 적으면 됩니다.",
        alt: "플레이해서 확인할 항목: 항목마다 OK·문제 버튼과 본 것을 적는 칸" },
    ],
  },
  sync: {
    label: "기획서 동기화 표와 코드: 한 줄은 일치, 한 줄은 불일치, 한 줄은 아직 구현 안 됨",
    gdd: "GDD · 동기화 표",
    code: "코드",
    none: "아직 마커 없음",
    foot: "`gdd-sync`가 어긋난 곳을 찾아, 지정한 쪽으로 맞춥니다.",
  },
  rules: {
    label: "이어지는 게임 세 개; 게임마다 내 규칙이 쌓여 감",
    games: ["첫 게임", "두 번째 게임", "세 번째 게임"],
    list: [
      "터치는 실기기에서 확인",
      "밸런스 숫자는 파일 하나에",
      "HUD 글자는 32px 이상",
      "소리는 첫 입력 뒤에",
      "씬이 바뀌기 전에 저장",
      "올리기 전에 빌드 크기 확인",
    ],
    fresh: "이 게임에서 생긴 규칙",
    carried: "이어받은 규칙",
  },
  start: {
    eyebrow: "빠른 시작",
    title: "게임 폴더에 설치하고, 원하는 걸 말하세요.",
    s1: "필요한 것",
    needs: [
      { name: "Claude Code", href: LINKS.claude, note: "" },
      { name: "Python", href: LINKS.python, note: "3.9 이상" },
      { name: "Node.js", href: LINKS.node, note: "대시보드용" },
      { name: "엔진 에디터", href: "", note: "Godot 또는 Unity — 웹 게임은 필요 없습니다" },
    ],
    s2: "게임 폴더에서 키트 설치",
    s2sub: "빈 폴더도 괜찮습니다.",
    terminal: "터미널",
    s2note: "프로젝트에 설치하므로 키트는 게임과 함께 다닙니다. 누가 그 폴더를 Claude Code로 열어도 같은 키트가 있습니다.",
    s3: "그 폴더에서 Claude Code를 열고 원하는 걸 말하세요",
    s3sub: "따로 배울 건 없습니다.",
    you: "이렇게 말하면",
    say: [
      ["아늑한 농장 게임을 만들고 싶어", "어디서 플레이할지 묻고, 엔진을 고르고, 프로젝트를 만든 뒤 기획서를 함께 씁니다"],
      ["이번엔 상점을 넣자", "한 사이클: 기획·디자인·구현 — 내가 정할 것은 대시보드에서 기다립니다"],
      ["해 봤는데 가격이 안 읽혀", "원인을 찾아 고칩니다"],
    ],
    s3note: "단계마다 슬래시 명령도 있습니다 — `/gamedev-kit:init`, `start`, `cycle`, `playtest`, `board`, … — 직접 치고 싶다면.",
    engines: "지금까지 게임을 만든 엔진",
    web: "Web — HTML과 JavaScript, 에디터 없이",
  },
  final: {
    title: "보이면, 끝까지 만듭니다.",
    lead: "어디까지 왔는지, 무엇이 나를 기다리는지 늘 눈앞에 — 첫 아이디어부터 완성된 게임까지.",
    install: "빠른 시작",
    readme: "README 읽기",
  },
  foot: { plugin: "플러그인", dashboard: "대시보드", issues: "이슈" },
  copy: { copy: "복사", copied: "복사됨" },
};

export const COPY: Record<Lang, Copy> = { en, ko };
