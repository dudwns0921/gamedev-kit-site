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
    title: "Agents make your game one cycle at a time.",
    accent: "You decide, from a dashboard.",
    lead: "Spec, design, build — agents do it, cycle by cycle. Everything that is yours to decide waits for you on a dashboard that shows where every game stands.",
    shot: "The dashboard of a sample game: stage cards in play order, beside the current cycle, what is undecided and the cycles so far",
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
    title: "Making a game with AI is easy. The trouble starts when making it takes weeks.",
    lead: "You lose track of where it stands and what waits on you, the design and the code drift apart, and what you learned in the last game is gone by the next.",
    pillars: [
      { img: "/review.png", alt: "The review tab: a decision the session is working on, and a decision with pictures to compare above its options",
        title: "See where every game stands — and decide there",
        text: "Each game as the player meets it, stage by stage. Every question the agents have is a decision there, with the pictures or a clip to judge it by; your answer goes to the game's Claude session." },
      { img: "/sync.svg", alt: "A GDD sync table beside code: one row synced, one mismatched, one not built yet",
        title: "The design and the code stay one thing",
        text: "Every number and rule in the GDD has an ID, and the code carries the same ID. The kit finds what disagrees and what is not built, and aligns the side you name." },
      { img: "/compounds.svg", alt: "Three games in a row; your rules grow under each one",
        title: "Every game leaves the next one better",
        text: "What tripped you becomes one of your rules, loaded into every game you make next. Once you say so, rules go to the kit, and the ones that hold for anyone become rules for everybody." },
    ],
    note: "You stay the designer throughout: rules, numbers and looks are asked, not assumed. The GDD, the cycle documents and the code are plain files in your repository. It is built for a game you make over weeks — for a small game out of one prompt, a prompt-to-game platform is faster.",
  },
  start: {
    eyebrow: "Get started",
    title: "Two lines to install. Then just say what you want.",
    s1: "Install the plugin in your game's folder",
    s1note: "An empty folder is fine.",
    s2: "Then talk to Claude Code, in that folder",
    first: `let's make a game — a Godot one        → sets up the project, then writes the GDD with you
this time, let's add a shop            → one cycle; your decisions wait on the dashboard
I played it — the prices are unreadable → finds the causes and fixes them`,
    s3: "What you need",
    needs: [
      "Claude Code and Python 3.9 or later.",
      "For Godot or Unity, that engine's editor — `init` finds it and tells you what is missing. Web games need no editor.",
      "Optional: Node.js for the dashboard — `init` offers it at the end; API keys only if you let the kit make assets.",
      "Every step also has a slash command (`/gamedev-kit:cycle` …), if you would rather type one.",
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
    auto: "Every question comes to you as a decision, with the pictures to look at. Answer on the dashboard — from your phone too: the game's open Claude session is woken for your answers, or the next one you open picks them up. The dashboard only signals; the session does the work. When the conversation has grown long, the dashboard says so at a break: type `/clear` then `cycle next`, and it starts over light in the same window.",
  },
  board: {
    eyebrow: "The board and the dashboard",
    title: "See every game at a glance — and what waits on you.",
    items: [
      ["Every game, stage by stage", "in play order: function, art, sound and verification, and what is undecided — read from your documents, no model involved, sent fresh by a hook as they change."],
      ["Review", "every question the session has for you is a decision with the pictures to look at, a button per option; images to approve; checks by playing."],
      ["Send to the session", "your answers wake the game's open Claude session. The dashboard only signals — a card shows where your answer stands until the session is done with it."],
      ["Yours, locally", "it runs on your machine; reach it from your phone through Tailscale. No sign-in, nothing hosted."],
    ],
    ask: "or just ask: “start the dashboard”",
    how: "Cloned from gamedev-kit-board, built once per version, started on `http://127.0.0.1:3100`. Needs git and Node.js.",
    shot: "The dashboard of a sample game",
    shot2: "The review tab: a decision the session is working on, and a decision with pictures to compare",
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
        ["cycle", "One cycle through a single document: `<goal>` · `next` · `status`. `next` is also how a new session picks up."],
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
        ["feedback", "Your own rules from every game — shows them, and sends them to the kit as issues, as you said they should go."],
      ] },
    ] as { group: string; rows: [string, string][] }[],
  },
  voice: {
    eyebrow: "Your rules",
    title: "A lesson learned once is not learned again.",
    tiers: [
      ["This game only", "→ that game's CLAUDE.md, at once"],
      ["Your next game too", "→ your own rules, on your machine — every game you make, from the next session"],
      ["Anyone's game", "→ sent to the kit as an issue, and becomes a rule for everybody once games agree"],
    ],
    setup: "You are asked once whether your rules may go to the kit as public issues. Anything naming your game or a date is held back for you to reword; whether a rule holds for everyone, the kit sorts out.",
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
    title: "에이전트가 한 사이클씩 만들고,",
    accent: "결정은 대시보드에서.",
    lead: "기획·디자인·구현은 에이전트가 사이클마다 합니다. 당신이 정할 것은 모두, 모든 게임이 어디까지 왔는지 보이는 대시보드에서 당신을 기다립니다.",
    shot: "예시 게임의 대시보드: 플레이 순서대로 놓인 단계 카드, 옆에 지금 사이클과 아직 정하지 않은 것, 지금까지의 사이클",
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
    title: "AI로 게임을 만드는 건 쉽습니다. 문제가 되는 건 게임을 만드는 기간이 길어질 때입니다.",
    lead: "어디까지 왔는지, 무엇이 나를 기다리는지 놓치고, 기획과 코드가 어긋나고, 지난 게임에서 배운 것은 다음 게임에서 사라집니다.",
    pillars: [
      { img: "/review.png", alt: "리뷰 탭: 세션이 처리 중인 결정, 비교 그림이 붙은 결정과 그 선택지",
        title: "어디까지 왔는지 보고, 거기서 정합니다",
        text: "모든 게임을 플레이어가 만나는 순서대로, 단계마다 보여 줍니다. 에이전트가 묻는 건 전부 볼 그림이나 영상이 붙은 결정으로 오고, 답하면 게임의 Claude 세션이 받아 갑니다." },
      { img: "/sync.svg", alt: "기획서 동기화 표와 코드: 한 줄은 일치, 한 줄은 불일치, 한 줄은 아직 구현 안 됨",
        title: "기획과 코드가 하나로 유지됩니다",
        text: "기획서(GDD)의 모든 숫자와 규칙에 ID가 있고, 코드에도 같은 ID가 붙습니다. 어긋난 곳과 아직 없는 곳을 찾아, 지정한 쪽으로 맞춥니다." },
      { img: "/compounds.svg", alt: "이어지는 게임 세 개; 게임마다 규칙이 쌓여 감",
        title: "만드는 게임마다 다음 게임이 나아집니다",
        text: "걸려 넘어진 것은 내 규칙이 되어 다음에 만드는 모든 게임에 들어갑니다. 허락하면 키트로 보내져, 누구에게나 통하는 것은 모두의 규칙이 됩니다." },
    ],
    note: "끝까지 기획자는 당신입니다. 규칙·숫자·모습은 짐작하지 않고 묻습니다. 기획서, 사이클 문서, 코드는 모두 당신 저장소의 평범한 파일입니다. 몇 주에 걸쳐 만드는 게임을 위한 키트입니다 — 프롬프트 하나로 작은 게임을 바로 원한다면 프롬프트-투-게임 서비스가 더 빠릅니다.",
  },
  start: {
    eyebrow: "시작하기",
    title: "설치는 두 줄. 그다음은 하고 싶은 걸 말하세요.",
    s1: "게임 폴더에서 플러그인 설치",
    s1note: "빈 폴더여도 됩니다.",
    s2: "그 폴더의 Claude Code에 말하세요",
    first: `게임 하나 만들자, Godot로       → 프로젝트를 세팅하고, 기획서를 함께 씁니다
이번엔 상점을 넣자               → 한 사이클을 돌고, 정할 것은 대시보드에서 기다립니다
플레이해 봤는데 가격이 안 읽혀   → 원인을 찾아 고칩니다`,
    s3: "필요한 것",
    needs: [
      "Claude Code, Python 3.9 이상.",
      "Godot나 Unity라면 그 엔진의 에디터 — `init`이 찾아 주고 빠진 게 있으면 알려 줍니다. 웹 게임은 에디터가 필요 없습니다.",
      "선택: 대시보드를 쓰려면 Node.js — `init` 마지막에 권합니다. 키트가 에셋을 만들게 하려면 API 키.",
      "단계마다 슬래시 명령(`/gamedev-kit:cycle` …)도 있습니다. 직접 치고 싶다면요.",
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
    auto: "모든 질문은 볼 그림과 함께 결정으로 당신에게 옵니다. 대시보드에서 답하세요 — 폰에서도. 열린 Claude 세션이 깨어나 답을 받고, 열린 세션이 없으면 다음에 여는 세션이 받습니다. 대시보드는 신호만 보내고, 일은 세션이 합니다. 대화가 길어지면 쉼표에서 대시보드가 알려 줍니다 — `/clear` 후 `cycle next`를 입력하면 같은 창에서 가볍게 다시 시작합니다.",
  },
  board: {
    eyebrow: "현황판과 대시보드",
    title: "모든 게임을 한눈에 — 그리고 당신을 기다리는 것까지.",
    items: [
      ["모든 게임을 단계별로", "플레이 순서대로: 기능·아트·사운드·검증, 그리고 아직 정하지 않은 것 — 문서에서 읽고, 모델은 쓰지 않으며, 문서가 바뀌면 hook이 새로 보냅니다."],
      ["리뷰", "세션이 묻는 것은 전부 볼 그림이 붙은 결정이 되고, 선택지마다 버튼이 있습니다. 승인할 이미지, 플레이로 확인할 것도 여기에."],
      ["세션으로 보내기", "답을 보내면 게임의 열린 Claude 세션이 깨어납니다. 대시보드는 신호만 보내고, 세션이 처리를 끝낼 때까지 카드가 진행 상태를 보여 줍니다."],
      ["내 컴퓨터에서", "로컬에서 돌고, 폰에서는 Tailscale로 봅니다. 로그인도, 호스팅도 없습니다."],
    ],
    ask: "또는 그냥 “대시보드 띄워줘”라고 말하세요",
    how: "gamedev-kit-board를 클론해 버전마다 한 번 빌드하고 `http://127.0.0.1:3100`에서 띄웁니다. git과 Node.js가 필요합니다.",
    shot: "예시 게임의 대시보드",
    shot2: "리뷰 탭: 세션이 처리 중인 결정과, 비교 그림이 붙은 결정",
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
        ["cycle", "문서 하나로 한 사이클: `<목표>` · `next` · `status`. 새 세션에서 이어 갈 때도 `next`."],
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
        ["feedback", "모든 게임에서 모은 내 규칙 — 보여 주고, 정한 대로 키트에 이슈로 보냅니다."],
      ] },
    ],
  },
  voice: {
    eyebrow: "내 규칙",
    title: "한 번 배운 것은 다시 배우지 않습니다.",
    tiers: [
      ["이 게임에서만", "→ 그 게임의 CLAUDE.md에, 즉시"],
      ["다음 게임에서도", "→ 내 컴퓨터의 내 규칙에 — 다음 세션부터 모든 게임에"],
      ["누구의 게임에서나", "→ 이슈로 키트에 보내져, 여러 게임이 같으면 모두의 규칙이 됩니다"],
    ],
    setup: "규칙을 공개 이슈로 키트에 보내도 될지 처음 한 번만 묻습니다. 게임 이름이나 날짜가 들어간 것은 고쳐 쓸 때까지 보내지 않고, 모두에게 통하는지는 키트가 가려냅니다.",
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
