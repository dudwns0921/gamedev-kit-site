import { BOARD_REPO, COPY, INSTALL, REPO, SERVE, UPDATE, type Lang } from "./content";
import CopyBlock from "./copy";
import LangSwitch from "./lang-switch";

function Inline({ text }: { text: string }) {
  return <>{text.split(/(`[^`]+`)/).map((p, i) => (p.startsWith("`") ? <code key={i}>{p.slice(1, -1)}</code> : p))}</>;
}

export default function Landing({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const c = t.copy;
  return (
    <>
      <header className="nav">
        <div className="in">
          <a className="brand" href="#top"><span className="mark">◆</span> gamedev-kit</a>
          <nav>
            <a href="#why">{t.nav.why}</a>
            <a href="#start">{t.nav.start}</a>
            <a href="#use">{t.nav.use}</a>
            <a href="#board">{t.nav.board}</a>
            <a href="#commands">{t.nav.commands}</a>
          </nav>
          <div className="nav-right">
            <LangSwitch lang={lang} />
            <a className="btn small" href={REPO}>GitHub ↗</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="in">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title} <span className="grad">{t.hero.accent}</span></h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="ctas">
              <a className="btn primary" href="#start">{t.hero.start}</a>
              <a className="btn" href={REPO}>{t.hero.github}</a>
            </div>
            <ol className="stages" aria-label={t.hero.stagesLabel}>
              {t.hero.stages.map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, "0")}</b>{s}</li>)}
              <li className="loop">{t.hero.loop}</li>
            </ol>
          </div>
        </section>

        <section className="in sec">
          <div className="chat" aria-label={t.chat.label}>
            <div className="msg you"><span>{t.chat.you}</span><p><code>/gamedev-kit:cycle</code> {t.chat.ask}</p></div>
            <div className="msg kit"><span>{t.chat.kit}</span>
              <div>
                <p>{t.chat.written}</p>
                <ul className="decide">
                  {t.chat.d.map(([id, q, o]) => <li key={id}><b>{id}</b> {q}{o ? <em>{o}</em> : null}</li>)}
                </ul>
                <p className="dim">{t.chat.waves}</p>
              </div>
            </div>
            <div className="msg you"><span>{t.chat.you}</span><p>{t.chat.answer}</p></div>
            <div className="msg kit"><span>{t.chat.kit}</span><p>{t.chat.built}</p></div>
            <div className="msg you"><span>{t.chat.you}</span><p><code>/gamedev-kit:playtest</code> — {t.chat.problems}</p></div>
            <div className="msg kit"><span>{t.chat.kit}</span><p>{t.chat.fixed}</p></div>
          </div>
        </section>

        <section id="why" className="in sec">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2>{t.why.title}</h2>
          <p className="lead narrow">{t.why.lead}</p>
          <div className="pillars">
            {t.why.pillars.map((p) => (
              <article key={p.img} className="pillar">
                <img src={p.img} alt={p.alt} />
                <h3>{p.title}</h3>
                <p><Inline text={p.text} /></p>
              </article>
            ))}
          </div>
          <p className="note">{t.why.note}</p>
        </section>

        <section id="start" className="in sec">
          <span className="eyebrow">{t.start.eyebrow}</span>
          <h2>{t.start.title}</h2>
          <div className="steps">
            <div className="step">
              <span className="n">1</span>
              <div>
                <h3>{t.start.s1}</h3>
                <p className="dim">{t.start.s1note}</p>
                <CopyBlock text={INSTALL} label={t.start.terminal} words={c} />
              </div>
            </div>
            <div className="step">
              <span className="n">2</span>
              <div>
                <h3>{t.start.s2}</h3>
                <CopyBlock text={t.start.first} label={t.start.claude} words={c} />
              </div>
            </div>
            <div className="step">
              <span className="n">3</span>
              <div>
                <h3>{t.start.s3}</h3>
                <ul className="plain">{t.start.needs.map((n) => <li key={n}><Inline text={n} /></li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section id="use" className="in sec">
          <span className="eyebrow">{t.use.eyebrow}</span>
          <h2>{t.use.title}</h2>
          <div className="flowgrid">
            {t.use.cards.map((k) => (
              <article key={k.title} className="card">
                <span className="tag">{k.tag}</span>
                <h3>{k.title}</h3>
                <p><Inline text={k.text} /></p>
              </article>
            ))}
          </div>
          <div className="auto">
            <h3>{t.use.autoTitle}</h3>
            <p>{t.use.auto}</p>
          </div>
        </section>

        <section id="board" className="in sec">
          <span className="eyebrow">{t.board.eyebrow}</span>
          <h2>{t.board.title}</h2>
          <div className="split">
            <div>
              <ul className="checks">{t.board.items.map(([b, s]) => <li key={b}><b>{b}</b> — {s}</li>)}</ul>
              <CopyBlock text={SERVE} label={t.board.ask} words={c} />
              <p className="dim small"><Inline text={t.board.how} /> <a href={BOARD_REPO}>gamedev-kit-board ↗</a></p>
            </div>
            <img className="shot" src="/board.png" alt={t.board.shot} />
          </div>
        </section>

        <section id="commands" className="in sec">
          <span className="eyebrow">{t.commands.eyebrow}</span>
          <h2>{t.commands.title}</h2>
          <div className="cmds">
            {t.commands.groups.map((g) => (
              <div key={g.group} className="cmdgroup">
                <h3>{g.group}</h3>
                <dl>
                  {g.rows.map(([cmd, d]) => (
                    <div key={cmd}>
                      <dt><code>/gamedev-kit:{cmd}</code></dt>
                      <dd><Inline text={d} /></dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="in sec">
          <span className="eyebrow">{t.voice.eyebrow}</span>
          <h2>{t.voice.title}</h2>
          <div className="tiers">{t.voice.tiers.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>
          <p className="dim"><Inline text={t.voice.setup} /></p>
        </section>

        <section className="in sec">
          <span className="eyebrow">{t.assets.eyebrow}</span>
          <h2>{t.assets.title}</h2>
          <div className="flowgrid three">
            {t.assets.cards.map(([h, p]) => <article key={h} className="card"><h3>{h}</h3><p><Inline text={p} /></p></article>)}
          </div>
        </section>

        <section className="in sec">
          <span className="eyebrow">{t.update.eyebrow}</span>
          <h2>{t.update.title}</h2>
          <CopyBlock text={UPDATE} label={t.update.label} words={c} />
          <p className="dim small">{t.update.note}</p>
        </section>

        <section className="in final">
          <h2>{t.final.title}</h2>
          <div className="ctas">
            <a className="btn primary" href="#start">{t.final.install}</a>
            <a className="btn" href={REPO}>{t.final.readme}</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="in">
          <span>claude-gamedev-kit · MIT</span>
          <span><a href={REPO}>{t.foot.plugin}</a> · <a href={BOARD_REPO}>{t.foot.dashboard}</a> · <a href={`${REPO}/issues`}>{t.foot.issues}</a></span>
        </div>
      </footer>
    </>
  );
}
