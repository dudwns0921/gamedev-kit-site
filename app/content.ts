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
};

type Scene = { img: string; title: string; text: string; alt: string };

const en = {
  meta: {
    title: "claude-gamedev-kit — see your game all the way to done",
    description: "A Claude Code plugin for making games. Agents build it cycle by cycle; a dashboard shows where every game stands and what's waiting on you. For Godot, Unity and web games.",
  },
  nav: { why: "Why", start: "Quick start" },
  hero: {
    eyebrow: "A Claude Code plugin for making games · Godot · Unity · Web",
    title: "Starting a game with AI is easy.",
    accent: "Finishing it is the hard part.",
    lead: "A few weeks in, you lose sight of where things stand, the design doc and the code stop matching, and you repeat the mistakes from your last game. gamedev-kit lets you build while seeing all of it.",
    start: "Quick start",
    github: "View on GitHub",
  },
  why: {
    eyebrow: "Why gamedev-kit",
    title: "Three things that get a game finished",
  },
  reasons: [
    { id: "dashboard", problem: "You lose sight of where it stands",
      title: "See it all, decide on the spot",
      text: "Every game's progress lands on one dashboard. Each stage shows how far its function, art, sound and testing have come, and every question from the agents arrives as a card with pictures to compare. Pick an answer and Claude carries on." },
    { id: "sync", problem: "The design doc and the code drift apart",
      title: "The doc and the code always match",
      text: "Every number and rule in the design doc gets an ID, and the code carries the same ID. When the two disagree or something isn't built yet, the kit catches it — say which side is right and it fixes the other. Balance numbers live on one spreadsheet you can read and edit." },
    { id: "rules", problem: "You repeat last game's mistakes",
      title: "What one game teaches, the next one remembers",
      text: "The problems you ran into while making a game, and how you solved them, are kept as short rules of your own and applied automatically from your next game on. Send them to the kit if you like — problems many people ran into the same way become everyone's defaults." },
  ],
  scenes: {
    label: "What the dashboard shows",
    list: [
      { img: "/board-games.png", title: "All your games, one screen",
        text: "Pending decisions and progress for every game at once.",
        alt: "The dashboard home: three games, what waits on you in each, and how far each has come" },
      { img: "/dashboard.png", title: "Progress, stage by stage",
        text: "In the order the player meets them — how far each stage's function, art, sound and testing have come.",
        alt: "One game's overview: stage cards in play order with art thumbnails, beside the current cycle and what is still undecided" },
      { img: "/board-stage.png", title: "Open a stage",
        text: "The design items, art and sound in it — look and listen right there.",
        alt: "The Pressure and time stage: its design rows, three pictures and a sound you can play" },
      { img: "/board-assets.png", title: "Every asset side by side",
        text: "All the art and sound together, so you can tell whether they match.",
        alt: "The assets tab: four paper-cut pictures and three sounds" },
      { img: "/review.png", title: "Answer the agents' questions",
        text: "Each question from the agents comes with pictures to compare and shows the direction they recommend.",
        alt: "The review tab: a decision with three concept pictures to compare above its options, and a decision with a recommended answer" },
      { img: "/board-checks.png", title: "Play, then check",
        text: "What only playing can tell comes as a checklist.",
        alt: "Checks by playing: each with OK and Problem buttons and a note for what you saw" },
    ] as Scene[],
  },
  sync: {
    label: "A design-doc sync table beside the code: one row matching, one mismatched, one not built yet",
    gdd: "Design doc · sync table",
    code: "Code",
    none: "not built yet",
    foot: "`gdd-sync` finds the gaps and closes them.",
  },
  rules: {
    label: "Three games in a row; your rules grow under each one",
    games: ["Game 1", "Game 2", "Game 3"],
    list: [
      "Test touch on a real phone",
      "Keep balance numbers in one file",
      "HUD text at 32 px or more",
      "Start sound after the first tap",
      "Save before the scene changes",
      "Check build size before upload",
    ],
    fresh: "Learned in this game",
    carried: "Carried over from before",
  },
  start: {
    eyebrow: "Quick start",
    title: "Two lines to install. The rest is just talking.",
    s1: "What you need",
    needs: [
      { name: "Claude Code", href: LINKS.claude, note: "where the kit runs" },
      { name: "Python", href: LINKS.python, note: "3.9 or later" },
      { name: "Node.js", href: LINKS.node, note: "to run the dashboard" },
      { name: "Engine editor", href: "", note: "for the engine you want to make your game with" },
    ],
    s2: "Install in your game's folder",
    s2sub: "An empty folder works.",
    terminal: "terminal",
    s3: "Open Claude Code and just ask",
    s3sub: "No commands to memorize.",
    you: "you say",
    say: [
      ["I want to make a cozy farming game", "Asks where it'll be played, picks the engine, sets up the project, then writes the design doc with you"],
      ["Let's add a shop this time", "Runs one cycle from spec to build and sends your decisions to the dashboard"],
      ["I played it — the prices are hard to read", "Finds the cause and fixes it"],
    ] as [string, string][],
  },
  final: {
    title: "See it, and you finish it.",
    lead: "Where you are and what to decide next are always in front of you — from the first idea to release.",
    install: "Get started",
    readme: "Read the README",
  },
  foot: { plugin: "Plugin", dashboard: "Dashboard", issues: "Issues" },
  copy: { copy: "Copy", copied: "Copied" },
};

export type Copy = typeof en;

const ko: Copy = {
  meta: {
    title: "claude-gamedev-kit — 눈으로 보며 게임을 끝까지",
    description: "게임을 만드는 Claude Code 플러그인. 에이전트가 사이클 단위로 만들고, 대시보드가 모든 게임의 진행 상황과 내가 정할 것을 보여 줍니다. Godot · Unity · 웹 게임.",
  },
  nav: { why: "쓰는 이유", start: "빠른 시작" },
  hero: {
    eyebrow: "게임을 만드는 Claude Code 플러그인 · Godot · Unity · Web",
    title: "AI로 게임 만들기, 시작은 쉽습니다.",
    accent: "끝까지 가는 게 어렵죠.",
    lead: "몇 주째 만들다 보면 어디까지 했는지 흐려지고, 기획서와 코드는 따로 놀고, 지난 게임에서 겪은 실수를 또 반복합니다. gamedev-kit은 이 모든 걸 눈으로 확인하면서 만들게 해 줍니다.",
    start: "빠른 시작",
    github: "GitHub에서 보기",
  },
  why: {
    eyebrow: "쓰는 이유",
    title: "게임을 끝까지 만들게 하는 세 가지",
  },
  reasons: [
    { id: "dashboard", problem: "어디까지 했는지 흐려진다",
      title: "한눈에 보고, 그 자리에서 결정합니다",
      text: "모든 게임의 진행 상황이 대시보드 한 화면에 모입니다. 단계마다 기능·아트·사운드·검증이 어디까지 됐는지 보이고, 에이전트의 질문은 비교할 그림과 함께 카드로 도착합니다. 고르기만 하면 Claude가 이어서 작업합니다." },
    { id: "sync", problem: "기획서와 코드가 따로 논다",
      title: "기획서와 코드가 늘 일치합니다",
      text: "기획서의 숫자와 규칙마다 ID가 붙고, 코드에도 같은 ID가 남습니다. 둘이 달라지거나 아직 구현되지 않은 항목이 생기면 키트가 바로 찾아내고, 어느 쪽이 맞는지만 정하면 나머지를 맞춰 줍니다. 밸런스 수치는 엑셀 한 장으로 보고 고칠 수 있습니다." },
    { id: "rules", problem: "같은 실수를 또 한다",
      title: "한 번 겪은 건 다음 게임이 기억합니다",
      text: "게임을 만들며 겪은 문제와 그 해결법이 짧은 규칙으로 정리되어, 다음 게임부터 자동으로 적용됩니다. 원하면 그 규칙을 키트로 보낼 수 있고, 많은 사람들이 동일하게 겪은 문제는 모든 사용자의 기본값이 됩니다." },
  ],
  scenes: {
    label: "대시보드에서 보이는 것",
    list: [
      { img: "/board-games.png", title: "모든 게임을 한 화면에",
        text: "게임마다 남은 결정과 진행률을 한 번에 봅니다.",
        alt: "대시보드 첫 화면: 게임 세 개, 게임마다 나를 기다리는 것과 진행 정도" },
      { img: "/dashboard.png", title: "단계별 진행 현황",
        text: "플레이어가 만나는 순서대로, 단계마다 기능·아트·사운드·검증이 얼마나 됐는지 봅니다.",
        alt: "한 게임의 개요: 아트 썸네일이 붙은 단계 카드가 플레이 순서대로 놓이고, 옆에 지금 사이클과 아직 정하지 않은 것" },
      { img: "/board-stage.png", title: "단계를 열면",
        text: "그 단계에 들어간 기획 항목과 그림, 사운드를 바로 보고 들어 봅니다.",
        alt: "'압박과 시간' 단계: 기획 항목, 그림 세 장, 재생할 수 있는 사운드 하나" },
      { img: "/board-assets.png", title: "에셋을 나란히",
        text: "만든 그림과 소리를 한데 놓고 톤이 맞는지 봅니다.",
        alt: "에셋 탭: 종이 공예 스타일 그림 네 장과 사운드 세 개" },
      { img: "/review.png", title: "에이전트의 질문에 답하기",
        text: "에이전트의 질문에 비교할 그림을 붙이고, 추천하는 방향을 보여줍니다.",
        alt: "리뷰 탭: 컨셉 그림 세 장을 비교하며 고르는 결정, 추천 답이 붙은 결정" },
      { img: "/board-checks.png", title: "플레이해 보고 체크",
        text: "직접 해 봐야 아는 것은 체크 항목으로 옵니다.",
        alt: "플레이해서 확인할 항목: 항목마다 OK·문제 버튼과 본 것을 적는 칸" },
    ],
  },
  sync: {
    label: "기획서 동기화 표와 코드: 한 줄은 일치, 한 줄은 불일치, 한 줄은 아직 구현 안 됨",
    gdd: "기획서 · 동기화 표",
    code: "코드",
    none: "아직 구현 안 됨",
    foot: "`gdd-sync`가 어긋난 곳을 찾아 맞춥니다.",
  },
  rules: {
    label: "이어지는 게임 세 개; 게임마다 내 규칙이 쌓여 감",
    games: ["첫 게임", "두 번째", "세 번째"],
    list: [
      "터치는 실기기에서 확인",
      "밸런스 수치는 파일 하나에",
      "HUD 글자는 32px 이상",
      "소리는 첫 터치 뒤에",
      "씬 전환 전에 저장",
      "올리기 전에 빌드 용량 확인",
    ],
    fresh: "이번 게임에서 배운 것",
    carried: "이전 게임에서 이어받은 것",
  },
  start: {
    eyebrow: "빠른 시작",
    title: "설치는 두 줄, 나머지는 말로.",
    s1: "준비물",
    needs: [
      { name: "Claude Code", href: LINKS.claude, note: "키트가 돌아가는 곳" },
      { name: "Python", href: LINKS.python, note: "3.9 이상" },
      { name: "Node.js", href: LINKS.node, note: "대시보드를 띄울 때" },
      { name: "엔진 에디터", href: "", note: "만들고 싶은 게임의 에디터" },
    ],
    s2: "게임 폴더에서 설치",
    s2sub: "빈 폴더여도 됩니다.",
    terminal: "터미널",
    s3: "Claude Code를 열고 말하세요",
    s3sub: "명령어를 외울 필요 없습니다.",
    you: "이렇게 말하면",
    say: [
      ["아늑한 농장 게임 만들고 싶어", "어디서 플레이할지 묻고, 엔진을 정하고, 프로젝트를 세팅한 뒤 기획서를 같이 씁니다"],
      ["이번엔 상점 넣어 보자", "기획부터 구현까지 한 사이클을 돌고, 정할 것은 대시보드로 보냅니다"],
      ["해 봤는데 가격이 잘 안 보여", "원인을 찾아서 고칩니다"],
    ],
  },
  final: {
    title: "보이면, 끝까지 만듭니다.",
    lead: "지금 어디쯤인지, 다음에 무엇을 정할지가 늘 눈앞에 있으니까요. 첫 아이디어부터 출시까지.",
    install: "지금 시작하기",
    readme: "README 보기",
  },
  foot: { plugin: "플러그인", dashboard: "대시보드", issues: "이슈" },
  copy: { copy: "복사", copied: "복사됨" },
};

export const COPY: Record<Lang, Copy> = { en, ko };
