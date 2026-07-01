import { CheckIcon, ArrowIcon } from './Icons'
import './About.css'

const points = [
  'Equipo propio de diseño y desarrollo',
  'Metodología ágil con entregas continuas',
  'Código propio, sin plantillas genéricas',
  'Acompañamiento después del lanzamiento',
]

/* Una tarjeta = un "screenshot" de sitio (mini navegador) */
function Card({ accent }) {
  return (
    <div className={`deck__card deck__card--${accent}`}>
      <div className="deck__bar"><i /><i /><i /><span className="deck__url" /></div>
      <div className="deck__body">
        <div className="deck__hero" />
        <div className="deck__row">
          <span className="deck__ln" />
          <span className="deck__ln deck__ln--short" />
        </div>
        <div className="deck__grid">
          <span /><span /><span />
        </div>
        <div className="deck__row">
          <span className="deck__ln deck__ln--mid" />
          <span className="deck__chip" />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about__inner">
        <div className="about__copy reveal">
          <span className="eyebrow">Nosotros</span>
          <h2 className="section-title">
            Convertimos ideas en <span className="accent">productos digitales</span>
          </h2>
          <p className="section-lead">
            Somos un estudio de diseño y desarrollo. Combinamos estrategia,
            diseño y tecnología para crear webs, apps y sistemas que se ven bien
            y, sobre todo, funcionan y generan resultados.
          </p>

          <ul className="about__points">
            {points.map((p) => (
              <li key={p}>
                <span className="about__check"><CheckIcon /></span>
                {p}
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn-primary about__btn">
            Trabajemos juntos <ArrowIcon />
          </a>
        </div>

        <div className="about__visual reveal">
          <div className="deck">
            <Card accent="sage" />
            <Card accent="navy" />
            <Card accent="terra" />
            <Card accent="light" />
            <Card accent="sage2" />
          </div>
        </div>
      </div>
    </section>
  )
}
