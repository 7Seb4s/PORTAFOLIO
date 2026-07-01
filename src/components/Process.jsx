import { steps, stats } from '../data'
import './Process.css'

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="container">
        <div className="process__head reveal">
          <span className="eyebrow eyebrow--light">Cómo trabajamos</span>
          <h2 className="section-title">
            De la idea a <span className="accent">buenos resultados</span>
          </h2>
          <p className="section-lead process__lead">
            Un proceso claro y ordenado, con seguimiento en cada etapa para que
            siempre sepas dónde está tu proyecto.
          </p>
        </div>

        <div className="process__grid">
          {steps.map((s) => (
            <article className="step reveal" key={s.n}>
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="process__stats reveal">
          {stats.map((st) => (
            <div className="stat" key={st.label}>
              <span className="stat__value">{st.value}</span>
              <span className="stat__label">{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
