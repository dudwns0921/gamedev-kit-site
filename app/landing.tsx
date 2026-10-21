import { BOARD_REPO, COPY, INSTALL, REPO, type Lang } from "./content";
import CopyBlock from "./copy";
import LangSwitch from "./lang-switch";
import Scenes from "./scenes";
import { CeoVisual, RulesVisual, SyncVisual } from "./visuals";

export default function Landing({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const [r0, r1, r2, r3] = t.reasons;
  const head = (i: number, r: (typeof t.reasons)[number]) => (
    <header className="reason-head">
      <span className="reason-n">{String(i + 1).padStart(2, "0")} · {r.problem}</span>
      <h2>{r.title}</h2>
      <p className="lead">{r.text}</p>
    </header>
  );
  return (
    <>
      <header className="nav">
        <div className="in">
          <a className="brand" href="#top"><span className="mark">◆</span> gamedev-kit</a>
          <nav>
            <a href="#why">{t.nav.why}</a>
            <a href="#start">{t.nav.start}</a>
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
            <h1>{t.hero.title}<br /><span className="grad">{t.hero.accent}</span></h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="ctas">
              <a className="btn primary" href="#start">{t.hero.start}</a>
              <a className="btn" href={REPO}>{t.hero.github}</a>
            </div>
          </div>
        </section>

        <section id="why" className="in why">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2>{t.why.title}</h2>
          <ol className="index">
            {t.reasons.map((r, i) => (
              <li key={r.id}>
                <a href={`#${r.id}`}>
                  <span className="index-n">{String(i + 1).padStart(2, "0")}</span>
                  <s>{r.problem}</s>
                  <b>{r.title}</b>
                  <span className="index-go" aria-hidden>↓</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id={r0.id} className="in reason split">
          {head(0, r0)}
          <CeoVisual t={t.ceo} />
        </section>

        <section id={r1.id} className="reason">
          <div className="in">{head(1, r1)}</div>
          <Scenes scenes={t.scenes.list} label={t.scenes.label} />
        </section>

        <section id={r2.id} className="in reason split flip">
          {head(2, r2)}
          <SyncVisual t={t.sync} />
        </section>

        <section id={r3.id} className="in reason split">
          {head(3, r3)}
          <RulesVisual t={t.rules} />
        </section>

        <section id="start" className="in reason">
          <header className="reason-head">
            <span className="eyebrow">{t.start.eyebrow}</span>
            <h2>{t.start.title}</h2>
          </header>
          <div className="qs">
            <div className="qs-step">
              <span className="n">1</span>
              <h3>{t.start.s1}</h3>
              <ul className="needs">
                {t.start.needs.map((n) => (
                  <li key={n.name}>
                    {n.href ? <a href={n.href}>{n.name}</a> : <b>{n.name}</b>}
                    <span> — {n.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="qs-step">
              <span className="n">2</span>
              <h3>{t.start.s2}</h3>
              <p className="dim small">{t.start.s2sub}</p>
              <CopyBlock text={INSTALL} label={t.start.terminal} words={t.copy} />
            </div>
            <div className="qs-step wide">
              <span className="n">3</span>
              <h3>{t.start.s3}</h3>
              <p className="dim small">{t.start.s3sub}</p>
              <ul className="say">
                {t.start.say.map(([say, does]) => (
                  <li key={say}>
                    <span className="bubble"><em>{t.start.you}</em>“{say}”</span>
                    <span className="does">→ {does}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="in">
            <h2>{t.final.title}</h2>
            <p className="lead">{t.final.lead}</p>
            <div className="ctas">
              <a className="btn primary" href="#start">{t.final.install}</a>
              <a className="btn" href={REPO}>{t.final.readme}</a>
            </div>
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
