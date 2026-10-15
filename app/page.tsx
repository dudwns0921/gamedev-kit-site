import Copy from "./copy";

const REPO = "https://github.com/dudwns0921/claude-gamedev-kit";
const BOARD_REPO = "https://github.com/dudwns0921/gamedev-kit-board";

const INSTALL = `claude plugin marketplace add dudwns0921/claude-gamedev-kit
claude plugin install gamedev-kit@claude-gamedev-kit --scope project`;

const FIRST = `/gamedev-kit:init      pick an engine; the kit finds the editor, creates the project and installs its files
/gamedev-kit:start     write the GDD together, agree on the look, set the first goal
/gamedev-kit:cycle     build that goal — and every goal after it`;

const UPDATE = `claude plugin marketplace update claude-gamedev-kit
claude plugin update gamedev-kit@claude-gamedev-kit`;

const STAGES = ["Goal", "Spec", "Design", "Plan", "Build", "Play"];

const COMMANDS: { group: string; rows: [string, string][] }[] = [
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
];

function Inline({ text }: { text: string }) {
  return <>{text.split(/(`[^`]+`)/).map((p, i) => (p.startsWith("`") ? <code key={i}>{p.slice(1, -1)}</code> : p))}</>;
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="in">
          <a className="brand" href="#top"><span className="mark">◆</span> gamedev-kit</a>
          <nav>
            <a href="#why">Why</a>
            <a href="#start">Get started</a>
            <a href="#use">How you use it</a>
            <a href="#board">Board</a>
            <a href="#commands">Commands</a>
          </nav>
          <a className="btn small" href={REPO}>GitHub ↗</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="in">
            <span className="eyebrow">A Claude Code plugin · Godot · Unity · Web</span>
            <h1>Make your game with Claude Code, <span className="grad">one cycle at a time.</span></h1>
            <p className="lead">
              You say what the next version should do. Agents write the spec, the design and the code, and stop to ask you whatever is yours to decide.
              You play it and say what is wrong. Then again — and the kit gets better at your games with every one you make.
            </p>
            <div className="ctas">
              <a className="btn primary" href="#start">Get started</a>
              <a className="btn" href={REPO}>View on GitHub</a>
            </div>
            <ol className="stages" aria-label="The stages of a cycle">
              {STAGES.map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, "0")}</b>{s}</li>)}
              <li className="loop">↺ play, fix, play</li>
            </ol>
          </div>
        </section>

        <section className="in sec">
          <div className="chat" aria-label="One cycle, roughly">
            <div className="msg you"><span>you</span><p><code>/gamedev-kit:cycle</code> add a shop between runs where the player spends coins</p></div>
            <div className="msg kit"><span>kit</span>
              <div>
                <p>Spec, design and plan are written. Three things are yours to decide:</p>
                <ul className="decide">
                  <li><b>D1</b> Do unspent coins carry over to the next run? <em>① yes ② no · recommended ②</em></li>
                  <li><b>D2</b> Is the shop a separate screen or an overlay? <em>① screen ② overlay · recommended ①</em></li>
                  <li><b>D3</b> Make the shopkeeper sprite now, or use a placeholder?</li>
                </ul>
                <p className="dim">7 tasks in 3 waves, once you answer.</p>
              </div>
            </div>
            <div className="msg you"><span>you</span><p>D1 ②. D2 overlay — I want to see the run behind it. D3 placeholder.</p></div>
            <div className="msg kit"><span>kit</span><p>Built. Your turn to play.</p></div>
            <div className="msg you"><span>you</span><p><code>/gamedev-kit:playtest</code> — prices are unreadable on a small screen · I can buy with zero coins</p></div>
            <div className="msg kit"><span>kit</span><p>Two causes found, two tasks written, both fixed. Play again.</p></div>
          </div>
        </section>

        <section id="why" className="in sec">
          <span className="eyebrow">Why use it</span>
          <h2>Claude Code can already write the game. What goes wrong over weeks is everything around the writing.</h2>
          <p className="lead narrow">The design and the code drift apart, nobody can say how finished the game is, and what you learned in the last game is gone by the next. The kit is one workflow — the same in every cycle and every game — built around three things.</p>
          <div className="pillars">
            <article className="pillar">
              <img src="/sync.svg" alt="A GDD sync table beside code: one row synced, one mismatched, one not built yet" />
              <h3>The design and the code stay one thing</h3>
              <p>Every number and rule in the GDD has an ID; the code that implements it carries a <code>GDD: &lt;ID&gt;</code> marker. The kit reports what is synced, what disagrees and what is not built — and aligns whichever side you name.</p>
            </article>
            <article className="pillar">
              <img src="/board.png" alt="The status board: stage cards in play order, each with a completion ring and meters for function, art, sound and verification" />
              <h3>You always see where the game stands</h3>
              <p>A board draws the game as the player meets it — done, placeholder, not made, problem — and what is still undecided. A script reads it from your documents; a hook keeps it current.</p>
            </article>
            <article className="pillar">
              <img src="/compounds.svg" alt="Three games in a row; your voice and your rules grow under each one" />
              <h3>It gets better at your games</h3>
              <p>Your <b>voice</b> — how you decide when it could go either way — and your <b>rules</b> — the traps you hit — pile up in a private repository and load into every game you make next.</p>
            </article>
          </div>
          <p className="note">You stay the designer throughout: rules, numbers and looks are asked, not assumed. The GDD, the cycle documents and the code are plain files in your repository. It is built for a game you make over weeks — for a small game out of one prompt, a prompt-to-game platform is faster.</p>
        </section>

        <section id="start" className="in sec">
          <span className="eyebrow">Get started</span>
          <h2>Two lines to install, three commands to your first build.</h2>
          <div className="steps">
            <div className="step">
              <span className="n">1</span>
              <div>
                <h3>Install the plugin in your game&apos;s folder</h3>
                <p className="dim">An empty folder is fine.</p>
                <Copy text={INSTALL} label="terminal" />
              </div>
            </div>
            <div className="step">
              <span className="n">2</span>
              <div>
                <h3>Then, inside Claude Code</h3>
                <Copy text={FIRST} label="claude code" />
              </div>
            </div>
            <div className="step">
              <span className="n">3</span>
              <div>
                <h3>What you need</h3>
                <ul className="plain">
                  <li><a href="https://code.claude.com">Claude Code</a> and Python 3.9 or later.</li>
                  <li>For Godot or Unity, that engine&apos;s editor — <code>init</code> finds it and tells you what is missing. Web games need no editor.</li>
                  <li>Optional: Node.js for the dashboard; API keys only if you let the kit make assets.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="use" className="in sec">
          <span className="eyebrow">How you use it</span>
          <h2>Start once. Cycle again and again. Ship when you decide.</h2>
          <div className="flowgrid">
            <article className="card">
              <span className="tag">Once</span>
              <h3>Start a game</h3>
              <p><code>init</code> picks the engine, finds the editor, creates the project and installs the kit&apos;s files. <code>start</code> interviews you one question at a time, agrees on the look with concept images, and proposes a first goal — one lap of the innermost loop.</p>
            </article>
            <article className="card">
              <span className="tag">Every version</span>
              <h3>Run a cycle</h3>
              <p>One document in <code>docs/cycle/</code> moves through goal, spec, design, plan and build. After the plan it stops and asks the open decisions, each with options and a recommendation. You answer; tasks that touch different files build in parallel.</p>
            </article>
            <article className="card">
              <span className="tag">Until it is good</span>
              <h3>Play it, say what is wrong</h3>
              <p>A cycle rests at play. Hand over your list with <code>playtest</code>: an analyst finds the causes in the code and the GDD, and a developer builds each fix. State the next goal and the cycle closes.</p>
            </article>
            <article className="card">
              <span className="tag">When you decide</span>
              <h3>Ship it</h3>
              <p><code>deploy</code> builds, shows the platform, target, version and size, and uploads only on your approval — itch.io for Godot and web builds, an App Bundle for Google Play with Unity.</p>
            </article>
          </div>
          <div className="auto">
            <h3>Away from the keyboard? <code>/gamedev-kit:cycle auto &lt;goal&gt;</code></h3>
            <p>Runs from the goal to the end of the build without asking. Your voice decides, and each decision made for you is marked until you accept or overturn it. Money, anything that leaves your machine, and anything that discards your work stay yours. It always stops before play.</p>
          </div>
        </section>

        <section id="board" className="in sec">
          <span className="eyebrow">The board and the dashboard</span>
          <h2>See every game at a glance — and what waits on you.</h2>
          <div className="split">
            <div>
              <ul className="checks">
                <li><b>Status board</b> — in each game, stage by stage in play order: function, art, sound and verification, and what is undecided. Redrawn by a hook; no model involved.</li>
                <li><b>Review</b> — open decisions with their comparison pictures, images to approve, checks by playing, and assets drawn in an older art style: one card each, a button per answer.</li>
                <li><b>Dashboard</b> — every game on your machine on one page, in the theme you like, redrawn as the games change. It runs locally; reach it from your phone through Tailscale or an SSH forward.</li>
              </ul>
              <Copy text={"python3 <kit>/skills/board/scripts/board.py serve"} label="or just ask: “start the dashboard”" />
              <p className="dim small">Cloned from <a href={BOARD_REPO}>gamedev-kit-board</a>, built once per version, started on <code>http://localhost:3100</code>. Needs git and Node.js.</p>
            </div>
            <img className="shot" src="/board.png" alt="The status board of a sample game" />
          </div>
        </section>

        <section id="commands" className="in sec">
          <span className="eyebrow">Commands</span>
          <h2>Everything is a slash command away.</h2>
          <div className="cmds">
            {COMMANDS.map((g) => (
              <div key={g.group} className="cmdgroup">
                <h3>{g.group}</h3>
                <dl>
                  {g.rows.map(([c, d]) => (
                    <div key={c}>
                      <dt><code>/gamedev-kit:{c}</code></dt>
                      <dd><Inline text={d} /></dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="in sec">
          <span className="eyebrow">Your voice and your rules</span>
          <h2>A lesson learned once is not learned again.</h2>
          <div className="tiers">
            <div><b>This game only</b><span>→ that game&apos;s CLAUDE.md, at once</span></div>
            <div><b>Your next game too</b><span>→ your own rules, in your private repository — every game you make</span></div>
            <div><b>Anyone&apos;s game</b><span>→ sent to the kit as an issue you approve, and becomes a rule for everybody</span></div>
          </div>
          <p className="dim">Set it up once: create an empty private repository, then <code>/gamedev-kit:voice setup &lt;its address&gt;</code>. Without one, everything still works on that machine.</p>
        </section>

        <section className="in sec">
          <span className="eyebrow">Assets — optional</span>
          <h2>A cycle runs on placeholders. Fill the slots however you like.</h2>
          <div className="flowgrid three">
            <article className="card"><h3>Bring your own</h3><p><code>asset</code> tells you the path, the format and the size. A file in the slot counts, whoever made it.</p></article>
            <article className="card"><h3>A tool over MCP</h3><p>Connect a service&apos;s MCP server to Claude Code; the kit attaches your art style and asks you before the costly step.</p></article>
            <article className="card"><h3>The kit&apos;s scripts</h3><p>3D models (OpenAI · Meshy · Blender), sprites (Ludo), sound (ElevenLabs), footage (Higgsfield) — keys kept outside the repository.</p></article>
          </div>
        </section>

        <section className="in sec">
          <span className="eyebrow">Updating</span>
          <h2>Each game updates on its own.</h2>
          <Copy text={UPDATE} label="in the game's folder" />
          <p className="dim small">The kit&apos;s rule block in your CLAUDE.md is refreshed at the next session start; anything you wrote outside it is left alone.</p>
        </section>

        <section className="in final">
          <h2>Make the next version.</h2>
          <div className="ctas">
            <a className="btn primary" href="#start">Install the kit</a>
            <a className="btn" href={REPO}>Read the README</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="in">
          <span>claude-gamedev-kit · MIT</span>
          <span><a href={REPO}>Plugin</a> · <a href={BOARD_REPO}>Dashboard</a> · <a href={`${REPO}/issues`}>Issues</a></span>
        </div>
      </footer>
    </>
  );
}
