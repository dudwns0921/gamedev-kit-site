import type { Copy } from "./content";

function Inline({ text }: { text: string }) {
  return <>{text.split(/(`[^`]+`)/).map((p, i) => (p.startsWith("`") ? <code key={i}>{p.slice(1, -1)}</code> : p))}</>;
}

// The CEO and its workers: each cycle in hand carries on in the background and stops where the user is needed — drawn in HTML, like the sync table.
export function CeoVisual({ t }: { t: Copy["ceo"] }) {
  return (
    <figure className="vis ceo" aria-label={t.label}>
      <div className="ceo-grid">
        <div className="ceo-node"><b>{t.ceo}</b><small>{t.ceoSub}</small></div>
        <div className="ceo-lanes">
          <span className="panel-lab">{t.workers}</span>
          {t.lanes.map((l) => (
            <div key={l.cycle} className="ceo-lane">
              <b className="ceo-c">{l.cycle}</b>
              <ol className="ceo-stages">
                {t.stages.map((s, i) => <li key={s} className={i < l.at ? "done" : i === l.at ? `now ${l.kind}` : ""}>{s}</li>)}
              </ol>
              <span className={`ceo-stop ${l.kind}`}>{l.stop}</span>
            </div>
          ))}
        </div>
        <div className="ceo-node you"><b>{t.you}</b><small>{t.youSub}</small></div>
      </div>
      <figcaption>{t.foot}</figcaption>
    </figure>
  );
}

// The GDD's sync table beside the code it names — drawn in HTML so it reads in either language at any width.
const ROWS = [
  { id: "BAL.BAG.CAPACITY", gdd: "3~5", state: "synced", code: "BAG_CAPACITY = 4" },
  { id: "BAL.FALL.PENALTY", gdd: "4", state: "mismatch", code: "FALL_PENALTY = 6" },
  { id: "RULE.CLIFF", gdd: "—", state: "missing", code: "" },
] as const;

export function SyncVisual({ t }: { t: Copy["sync"] }) {
  return (
    <figure className="vis sync" aria-label={t.label}>
      <div className="sync-grid">
        <div className="panel">
          <span className="panel-lab">{t.gdd}</span>
          {ROWS.map((r) => (
            <div key={r.id} className="sync-row">
              <code className="sid">{r.id}</code>
              <b className={`sval ${r.state}`}>{r.gdd}</b>
              <span className={`pill ${r.state}`}>{r.state}</span>
            </div>
          ))}
        </div>
        <div className="links" aria-hidden>
          {ROWS.map((r) => <i key={r.id} className={r.state}>{r.state === "synced" ? "⟷" : r.state === "mismatch" ? "≠" : ""}</i>)}
        </div>
        <div className="panel">
          <span className="panel-lab">{t.code}</span>
          {ROWS.map((r) => (
            <div key={r.id} className={`code-row ${r.state}`}>
              {r.code ? <><code>{r.code}</code><small>{`// GDD: ${r.id}`}</small></> : <small>{t.none}</small>}
            </div>
          ))}
        </div>
      </div>
      <figcaption><Inline text={t.foot} /></figcaption>
    </figure>
  );
}

// Your rules, stacked under each game: what one game taught is there when the next one starts.
export function RulesVisual({ t }: { t: Copy["rules"] }) {
  return (
    <figure className="vis rules" aria-label={t.label}>
      <div className="rule-games">
        {t.games.map((g, gi) => (
          <div key={g} className="rule-col">
            <ol className="stack">
              {t.list.slice(0, (gi + 1) * 2).map((r, ri) => (
                <li key={r} className={ri >= gi * 2 ? "fresh" : "carried"}>{r}</li>
              ))}
            </ol>
            <span className="game">{g}</span>
          </div>
        ))}
      </div>
      <figcaption className="legend">
        <span><i className="fresh" />{t.fresh}</span>
        <span><i className="carried" />{t.carried}</span>
      </figcaption>
    </figure>
  );
}
