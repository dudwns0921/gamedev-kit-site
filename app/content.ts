// Every word on the page, in each language. Commands, paths and code stay as they are in both.
// `backticks` in a string are drawn as code.

export type Lang = "en" | "ko";

export const REPO = "https://github.com/dudwns0921/claude-gamedev-kit";
export const BOARD_REPO = "https://github.com/dudwns0921/gamedev-kit-board";

export const INSTALL = `claude plugin marketplace add dudwns0921/claude-gamedev-kit
claude plugin install gamedev-kit@claude-gamedev-kit --scope project`;

export const UPDATE = `claude plugin marketplace update claude-gamedev-kit
claude plugin update gamedev-kit@claude-gamedev-kit`;

export const SERVE = "python3 <kit>/skills/board/scripts/board.py serve";

const en = {
  meta: {
    title: "claude-gamedev-kit — make games with Claude Code, cycle by cycle",
    description: "A repeatable way to make a game with Claude Code — one that gets better with every game you make. For Godot, Unity and web games.",
  },
  nav: { why: "Why", start: "Get started", use: "How you use it", board: "Board", commands: "Commands" },
  hero: {
    eyebrow: "A Claude Code plugin · Godot · Unity · Web",
    title: "Make your game with Claude Code,",
    accent: "one cycle at a time.",
    lead: "You say what the next version should do. Agents write the spec, the design and the code, and stop to ask you whatever is yours to decide. You play it and say what is wrong. Then again — and the kit gets better at your games with every one you make.",
    start: "Get started",
    github: "View on GitHub",
    stages: ["Goal", "Spec", "Design", "Plan", "Build", "Play"],
    loop: "↺ play, fix, play",
    stagesLabel: "The stages of a cycle",
  },
  chat: {
    label: "One cycle, roughly",
    you: "you",
    kit: "kit",
    ask: "add a shop between runs where the player spends coins",
    written: "Spec, design and plan are written. Three things are yours to decide:",
    d: [
      ["D1", "Do unspent coins carry over to the next run?", "① yes ② no · recommended ②"],
      ["D2", "Is the shop a separate screen or an overlay?", "① screen ② overlay · recommended ①"],
      ["D3", "Make the shopkeeper sprite now, or use a placeholder?", ""],
    ],
    waves: "7 tasks in 3 waves, once you answer.",
    answer: "D1 ②. D2 overlay — I want to see the run behind it. D3 placeholder.",
    built: "Built. Your turn to play.",
    problems: "prices are unreadable on a small screen · I can buy with zero coins",
    fixed: "Two causes found, two tasks written, both fixed. Play again.",
  },
  why: {
    eyebrow: "Why use it",
    title: "Claude Code can already write the game. What goes wrong over weeks is everything around the writing.",
    lead: "The design and the code drift apart, nobody can say how finished the game is, and what you learned in the last game is gone by the next. The kit is one workflow — the same in every cycle and every game — built around three things.",
    pillars: [
      { img: "/sync.svg", alt: "A GDD sync table beside code: one row synced, one mismatched, one not built yet",
        title: "The design and the code stay one thing",
        text: "Every number and rule in the GDD has an ID; the code that implements it carries a `GDD: <ID>` marker. The kit reports what is synced, what disagrees and what is not built — and aligns whichever side you name." },
      { img: "/board.png", alt: "The status board: stage cards in play order, each with a completion ring and meters",
        title: "You always see where the game stands",
        text: "A board draws the game as the player meets it — done, placeholder, not made, problem — and what is still undecided. A script reads it from your documents; a hook keeps it current." },
      { img: "/compounds.svg", alt: "Three games in a row; your voice and your rules grow under each one",
        title: "It gets better at your games",
        text: "Your voice — how you decide when it could go either way — and your rules — the traps you hit — pile up in a private repository and load into every game you make next." },
    ],
    note: "You stay the designer throughout: rules, numbers and looks are asked, not assumed. The GDD, the cycle documents and the code are plain files in your repository. It is built for a game you make over weeks — for a small game out of one prompt, a prompt-to-game platform is faster.",
  },
  start: {
    eyebrow: "Get started",
    title: "Two lines to install, three commands to your first build.",
    s1: "Install the plugin in your game's folder",
    s1note: "An empty folder is fine.",
    s2: "Then, inside Claude Code",
    first: `/gamedev-kit:init      pick an engine; the kit finds the editor, creates the project and installs its files
                       — and offers the dashboard of all your games
/gamedev-kit:start     write the GDD together, agree on the look, set the first goal
/gamedev-kit:cycle     build that goal — and every goal after it`,
    s3: "What you need",
    needs: [
      "Claude Code and Python 3.9 or later.",
      "For Godot or Unity, that engine's editor — `init` finds it and tells you what is missing. Web games need no editor.",
      "Optional: Node.js for the dashboard — `init` offers it at the end; API keys only if you let the kit make assets.",
    ],
    terminal: "terminal",
    claude: "claude code",
  },
  use: {
    eyebrow: "How you use it",
    title: "Start once. Cycle again and again. Ship when you decide.",
    cards: [
      { tag: "Once", title: "Start a game",
        text: "`init` picks the engine, finds the editor, creates the project and installs the kit's files. `start` interviews you one question at a time, agrees on the look with concept images, and proposes a first goal — one lap of the innermost loop." },
      { tag: "Every version", title: "Run a cycle",
        text: "One document in `docs/cycle/` moves through goal, spec, design, plan and build. After the plan it stops and asks the open decisions, each with options and a recommendation. You answer; tasks that touch different files build in parallel." },
      { tag: "Until it is good", title: "Play it, say what is wrong",
        text: "A cycle rests at play. Hand over your list with `playtest`: an analyst finds the causes in the code and the GDD, and a developer builds each fix. State the next goal and the cycle closes." },
      { tag: "When you decide", title: "Ship it",
        text: "`deploy` builds, shows the platform, target, version and size, and uploads only on your approval — itch.io for Godot and web builds, an App Bundle for Google Play with Unity." },
    ],
    autoTitle: "Away from the keyboard?",
    auto: "Runs from the goal to the end of the build without asking. Your voice decides, and each decision made for you is marked until you accept or overturn it. Money, anything that leaves your machine, and anything that discards your work stay yours. It always stops before play.",
  },
  board: {
    eyebrow: "The board and the dashboard",
    title: "See every game at a glance — and what waits on you.",
    items: [
      ["Status board", "in each game, stage by stage in play order: function, art, sound and verification, and what is undecided. Redrawn by a hook; no model involved."],
      ["Review", "open decisions with their comparison pictures, images to approve, checks by playing, and assets drawn in an older art style: one card each, a button per answer."],
      ["Dashboard", "every game on your machine on one page, in the theme you like, redrawn as the games change. It runs locally; reach it from your phone through Tailscale or an SSH forward."],
    ],
    ask: "or just ask: “start the dashboard”",
    how: "Cloned from gamedev-kit-board, built once per version, started on `http://localhost:3100`. Needs git and Node.js.",
    shot: "The status board of a sample game",
  },
  commands: {
    eyebrow: "Commands",
    title: "Everything is a slash command away.",
    groups: [
      { group: "Set up", rows: [
        ["init", "Sets up a game repo, from an empty folder if need be. `init rules` realigns the kit's rule block after the kit updates."],
        ["start", "GDD → concept → first goal, then hands over to cycle. Stages can be skipped."],
      ] },
      { group: "Make", rows: [
        ["cycle", "One cycle through a single document: `<goal>` · `next` · `status` · `auto <goal>`. `next` is also how a new session picks up."],
        ["playtest", "Problem list → analysis document → one agent per task. `plan` analyses only, `implement` builds only."],
      ] },
      { group: "See where you are", rows: [
        ["board", "The status board and the review page, kept current — and the dashboard of every game on your machine (`serve`)."],
        ["gdd-sync", "Compares the GDD's sync table with `GDD: <ID>` markers in code; aligns whichever side you name."],
        ["balance-table", "The game's balance numbers on one Excel sheet that follows the code — change a number there and bake it back."],
      ] },
      { group: "Assets and footage", rows: [
        ["asset", "Optional. 3D models, 2D sprites and sounds from a description — or where to put a file you made. You approve the picture first."],
        ["video", "Trailers and clips as mp4, cutscenes in the format the engine reads. Description → you approve → generated → placed."],
      ] },
      { group: "Ship and give back", rows: [
        ["deploy", "Check, build, show what goes where, upload on your approval — itch.io or Google Play."],
        ["feedback", "Sends the lessons that hold for anyone's game to the kit as issues — only the lines you approve."],
        ["voice", "Shows how you decide and the rules you have gathered, and lets you correct them."],
      ] },
    ] as { group: string; rows: [string, string][] }[],
  },
  voice: {
    eyebrow: "Your voice and your rules",
    title: "A lesson learned once is not learned again.",
    tiers: [
      ["This game only", "→ that game's CLAUDE.md, at once"],
      ["Your next game too", "→ your own rules, in your private repository — every game you make"],
      ["Anyone's game", "→ sent to the kit as an issue you approve, and becomes a rule for everybody"],
    ],
    setup: "Set it up once: create an empty private repository, then `/gamedev-kit:voice setup <its address>`. Without one, everything still works on that machine.",
  },
  assets: {
    eyebrow: "Assets — optional",
    title: "A cycle runs on placeholders. Fill the slots however you like.",
    cards: [
      ["Bring your own", "`asset` tells you the path, the format and the size. A file in the slot counts, whoever made it."],
      ["A tool over MCP", "Connect a service's MCP server to Claude Code; the kit attaches your art style and asks you before the costly step."],
      ["The kit's scripts", "3D models (OpenAI · Meshy · Blender), sprites (Ludo), sound (ElevenLabs), footage (Higgsfield) — keys kept outside the repository."],
    ],
  },
  update: {
    eyebrow: "Updating",
    title: "Each game updates on its own.",
    label: "in the game's folder",
    note: "The kit's rule block in your CLAUDE.md is refreshed at the next session start; anything you wrote outside it is left alone.",
  },
  final: { title: "Make the next version.", install: "Install the kit", readme: "Read the README" },
  foot: { plugin: "Plugin", dashboard: "Dashboard", issues: "Issues" },
  copy: { copy: "Copy", copied: "Copied" },
};

export type Copy = typeof en;

const ko: Copy = {
  meta: {
    title: "claude-gamedev-kit — Claude Code로 게임을 사이클 단위로 만들기",
    description: "Claude Code로 게임을 만드는 반복 가능한 방법 — 게임을 하나 만들 때마다 더 나아집니다. Godot · Unity · 웹 게임.",
  },
  nav: { why: "왜 쓰나", start: "시작하기", use: "쓰는 법", board: "현황판", commands: "명령어" },
  hero: {
    eyebrow: "Claude Code 플러그인 · Godot · Unity · Web",
    title: "Claude Code로 게임을 만드세요,",
    accent: "한 사이클씩.",
    lead: "다음 버전에서 무엇을 할지 말하면, 에이전트가 기획·디자인·코드를 쓰고 당신이 정할 것만 멈춰서 묻습니다. 플레이해 보고 무엇이 문제인지 말하면 다시 고칩니다. 그리고 게임을 하나 만들 때마다 키트는 당신의 게임에 더 익숙해집니다.",
    start: "시작하기",
    github: "GitHub에서 보기",
    stages: ["목표", "기획", "디자인", "계획", "구현", "플레이"],
    loop: "↺ 플레이, 수정, 플레이",
    stagesLabel: "한 사이클의 단계",
  },
  chat: {
    label: "한 사이클은 대략 이렇습니다",
    you: "나",
    kit: "키트",
    ask: "판과 판 사이에 코인을 쓰는 상점을 넣자",
    written: "기획·디자인·계획을 썼습니다. 정하실 것이 세 가지 있습니다:",
    d: [
      ["D1", "안 쓴 코인을 다음 판으로 넘길까요?", "① 넘긴다 ② 안 넘긴다 · 권함 ②"],
      ["D2", "상점은 별도 화면인가요, 겹쳐 띄우나요?", "① 화면 ② 오버레이 · 권함 ①"],
      ["D3", "상점 주인 스프라이트를 지금 만들까요, 임시로 둘까요?", ""],
    ],
    waves: "답해 주시면 작업 7개를 3번에 나눠 진행합니다.",
    answer: "D1 ②. D2 오버레이 — 뒤에 판이 보였으면 해. D3 임시로.",
    built: "구현했습니다. 플레이해 보세요.",
    problems: "작은 화면에서 가격이 안 읽혀 · 코인이 0인데 살 수 있어",
    fixed: "원인 두 개를 찾아 작업 두 개로 쓰고, 둘 다 고쳤습니다. 다시 플레이해 보세요.",
  },
  why: {
    eyebrow: "왜 쓰나",
    title: "게임을 짜는 건 Claude Code도 합니다. 몇 주에 걸쳐 어긋나는 건 그 주변의 모든 것입니다.",
    lead: "기획서와 코드는 서로 멀어지고, 게임이 얼마나 완성됐는지 아무도 말하지 못하고, 지난 게임에서 배운 것은 다음 게임에서 사라집니다. 키트는 모든 사이클, 모든 게임에서 같은 하나의 작업 방식이고, 세 가지를 중심으로 만들어졌습니다.",
    pillars: [
      { img: "/sync.svg", alt: "기획서 동기화 표와 코드: 한 줄은 일치, 한 줄은 불일치, 한 줄은 아직 구현 안 됨",
        title: "기획과 코드가 하나로 유지됩니다",
        text: "기획서(GDD)의 모든 숫자와 규칙에는 ID가 있고, 그것을 구현한 코드에는 `GDD: <ID>` 표시가 붙습니다. 무엇이 일치하고, 무엇이 다르고, 무엇이 아직 없는지 알려 주고, 지정한 쪽으로 맞춥니다." },
      { img: "/board.png", alt: "현황판: 플레이 순서대로 놓인 단계 카드, 각각 완성도 링과 막대",
        title: "게임이 어디까지 왔는지 늘 보입니다",
        text: "현황판은 플레이어가 만나는 순서대로 게임을 그립니다 — 완료, 임시, 미제작, 문제, 그리고 아직 정하지 않은 것까지. 스크립트가 문서에서 읽어 그리고, hook이 늘 최신으로 유지합니다." },
      { img: "/compounds.svg", alt: "이어지는 게임 세 개; 게임마다 보이스와 규칙이 쌓여 감",
        title: "당신의 게임에 점점 익숙해집니다",
        text: "갈림길에서 당신이 어떻게 고르는지(보이스)와 당신이 빠졌던 함정(규칙)이 비공개 저장소에 쌓이고, 다음에 만드는 모든 게임에 함께 들어갑니다." },
    ],
    note: "끝까지 기획자는 당신입니다. 규칙·숫자·모습은 짐작하지 않고 묻습니다. 기획서, 사이클 문서, 코드는 모두 당신 저장소의 평범한 파일입니다. 몇 주에 걸쳐 만드는 게임을 위한 키트입니다 — 프롬프트 하나로 작은 게임을 바로 원한다면 프롬프트-투-게임 서비스가 더 빠릅니다.",
  },
  start: {
    eyebrow: "시작하기",
    title: "설치는 두 줄, 첫 빌드까지 명령 세 개.",
    s1: "게임 폴더에서 플러그인 설치",
    s1note: "빈 폴더여도 됩니다.",
    s2: "그다음 Claude Code 안에서",
    first: `/gamedev-kit:init      엔진을 고르면 에디터를 찾고, 프로젝트를 만들고, 키트 파일을 설치
                       — 모든 게임을 보는 대시보드도 권합니다
/gamedev-kit:start     기획서를 함께 쓰고, 모습을 정하고, 첫 목표를 세움
/gamedev-kit:cycle     그 목표를 만들고 — 이후 모든 목표도`,
    s3: "필요한 것",
    needs: [
      "Claude Code, Python 3.9 이상.",
      "Godot나 Unity라면 그 엔진의 에디터 — `init`이 찾아 주고 빠진 게 있으면 알려 줍니다. 웹 게임은 에디터가 필요 없습니다.",
      "선택: 대시보드를 쓰려면 Node.js — `init` 마지막에 권합니다. 키트가 에셋을 만들게 하려면 API 키.",
    ],
    terminal: "터미널",
    claude: "claude code",
  },
  use: {
    eyebrow: "쓰는 법",
    title: "시작은 한 번. 사이클은 몇 번이고. 배포는 당신이 정할 때.",
    cards: [
      { tag: "한 번", title: "게임 시작",
        text: "`init`이 엔진을 고르고, 에디터를 찾고, 프로젝트를 만들고, 키트 파일을 설치합니다. `start`는 한 번에 하나씩 묻는 인터뷰로 기획서를 쓰고, 컨셉 이미지로 모습을 맞추고, 첫 목표를 제안합니다 — 가장 안쪽 루프 한 바퀴." },
      { tag: "버전마다", title: "사이클 돌리기",
        text: "`docs/cycle/`의 문서 하나가 목표·기획·디자인·계획·구현을 거쳐 갑니다. 계획이 끝나면 멈춰서 정할 것을 묻습니다 — 각각 선택지와 권하는 답이 붙어서. 답하면 서로 다른 파일을 건드리는 작업은 동시에 진행됩니다." },
      { tag: "좋아질 때까지", title: "플레이하고, 문제를 말하기",
        text: "사이클은 플레이에서 머뭅니다. `playtest`로 목록을 넘기면 분석 에이전트가 코드와 기획서에서 원인을 찾고, 개발 에이전트가 하나씩 고칩니다. 다음 목표를 말하면 사이클이 닫힙니다." },
      { tag: "정했을 때", title: "배포",
        text: "`deploy`가 빌드하고, 플랫폼·대상·버전·크기를 보여 주고, 승인할 때만 올립니다 — Godot와 웹은 itch.io로, Unity는 Google Play용 App Bundle로." },
    ],
    autoTitle: "자리를 비우신다면?",
    auto: "목표부터 구현 끝까지 묻지 않고 진행합니다. 당신의 보이스가 대신 정하고, 대신 정한 결정은 당신이 받아들이거나 뒤집을 때까지 표시해 둡니다. 돈이 드는 것, 당신의 컴퓨터 밖으로 나가는 것, 만든 것을 버리는 것은 여전히 당신이 정합니다. 언제나 플레이 직전에 멈춥니다.",
  },
  board: {
    eyebrow: "현황판과 대시보드",
    title: "모든 게임을 한눈에 — 그리고 당신을 기다리는 것까지.",
    items: [
      ["현황판", "게임마다, 플레이 순서대로 단계별로: 기능·아트·사운드·검증, 그리고 아직 정하지 않은 것. hook이 다시 그리고, 모델은 쓰지 않습니다."],
      ["리뷰", "비교 그림이 붙은 결정, 승인할 이미지, 플레이로 확인할 것, 예전 아트 스타일로 그려진 에셋 — 카드 하나에 답마다 버튼 하나."],
      ["대시보드", "내 컴퓨터의 모든 게임을 한 페이지에, 원하는 테마로, 게임이 바뀔 때마다 다시 그립니다. 로컬에서 돌고, 폰에서는 Tailscale이나 SSH 포워드로 봅니다."],
    ],
    ask: "또는 그냥 “대시보드 띄워줘”라고 말하세요",
    how: "gamedev-kit-board를 클론해 버전마다 한 번 빌드하고 `http://localhost:3100`에서 띄웁니다. git과 Node.js가 필요합니다.",
    shot: "예시 게임의 현황판",
  },
  commands: {
    eyebrow: "명령어",
    title: "모든 것이 슬래시 명령 하나로.",
    groups: [
      { group: "준비", rows: [
        ["init", "게임 저장소를 준비합니다. 빈 폴더부터 가능. 키트가 업데이트되면 `init rules`로 규칙 블록을 맞춥니다."],
        ["start", "기획서 → 컨셉 → 첫 목표, 그리고 cycle로 넘깁니다. 단계는 건너뛸 수 있습니다."],
      ] },
      { group: "만들기", rows: [
        ["cycle", "문서 하나로 한 사이클: `<목표>` · `next` · `status` · `auto <목표>`. 새 세션에서 이어 갈 때도 `next`."],
        ["playtest", "문제 목록 → 분석 문서 → 작업마다 에이전트 하나. `plan`은 분석만, `implement`는 구현만."],
      ] },
      { group: "어디까지 왔나", rows: [
        ["board", "현황판과 리뷰 페이지를 늘 최신으로 — 그리고 내 컴퓨터 모든 게임의 대시보드(`serve`)."],
        ["gdd-sync", "기획서의 동기화 표와 코드의 `GDD: <ID>` 표시를 비교하고, 지정한 쪽으로 맞춥니다."],
        ["balance-table", "게임의 밸런스 숫자를 코드와 연동되는 엑셀 한 장에 — 표에서 숫자를 고치면 코드로 되돌려 넣습니다."],
      ] },
      { group: "에셋과 영상", rows: [
        ["asset", "선택. 설명에서 3D 모델·2D 스프라이트·사운드를 — 또는 직접 만든 파일을 어디에 둘지. 그림을 먼저 승인합니다."],
        ["video", "트레일러·클립은 mp4로, 컷씬은 엔진이 읽는 형식으로. 설명 → 승인 → 생성 → 배치."],
      ] },
      { group: "배포와 환원", rows: [
        ["deploy", "확인, 빌드, 무엇이 어디로 가는지 보여 주고, 승인하면 올립니다 — itch.io 또는 Google Play."],
        ["feedback", "누구의 게임에나 통하는 교훈을 키트에 이슈로 보냅니다 — 승인한 줄만."],
        ["voice", "당신이 어떻게 정하는지와 모아 온 규칙을 보여 주고, 고칠 수 있게 합니다."],
      ] },
    ],
  },
  voice: {
    eyebrow: "보이스와 규칙",
    title: "한 번 배운 것은 다시 배우지 않습니다.",
    tiers: [
      ["이 게임에서만", "→ 그 게임의 CLAUDE.md에, 즉시"],
      ["다음 게임에서도", "→ 비공개 저장소의 내 규칙에 — 앞으로 만드는 모든 게임에"],
      ["누구의 게임에서나", "→ 승인한 이슈로 키트에 보내져, 모두의 규칙이 됩니다"],
    ],
    setup: "한 번만 설정하세요: 빈 비공개 저장소를 만들고 `/gamedev-kit:voice setup <저장소 주소>`. 없어도 그 컴퓨터 안에서는 전부 동작합니다.",
  },
  assets: {
    eyebrow: "에셋 — 선택",
    title: "사이클은 임시 에셋으로도 돕니다. 자리는 원하는 방법으로 채우세요.",
    cards: [
      ["직접 만들기", "`asset`이 경로·형식·크기를 알려 줍니다. 그 자리에 놓인 파일은 누가 만들었든 인정됩니다."],
      ["MCP로 연결한 도구", "서비스의 MCP 서버를 Claude Code에 연결하면, 키트가 아트 스타일을 붙이고 비용이 드는 단계 전에 묻습니다."],
      ["키트의 스크립트", "3D 모델(OpenAI · Meshy · Blender), 스프라이트(Ludo), 사운드(ElevenLabs), 영상(Higgsfield) — 키는 저장소 밖에 둡니다."],
    ],
  },
  update: {
    eyebrow: "업데이트",
    title: "게임마다 따로 업데이트합니다.",
    label: "게임 폴더에서",
    note: "CLAUDE.md 안의 키트 규칙 블록은 다음 세션 시작 때 새로 바뀌고, 그 밖에 직접 쓴 내용은 그대로 둡니다.",
  },
  final: { title: "다음 버전을 만드세요.", install: "키트 설치하기", readme: "README 읽기" },
  foot: { plugin: "플러그인", dashboard: "대시보드", issues: "이슈" },
  copy: { copy: "복사", copied: "복사됨" },
};

export const COPY: Record<Lang, Copy> = { en, ko };
