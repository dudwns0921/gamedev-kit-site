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
          <img className="shot wide" src="/dashboard.png" alt={t.hero.shot} />
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
        </section>

        <section id="start" className="in sec">
          <span className="eyebrow">{t.start.eyebrow}</span>
          <h2>{t.start.title}</h2>
          <div className="steps">
            <div className="step">
              <span className="n">1</span>
              <div>
                <h3>{t.start.s1}</h3>
                <CopyBlock text={t.start.ask} label={t.start.claude} words={c} />
                <p className="dim small"><Inline text={t.start.s1note} /></p>
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
