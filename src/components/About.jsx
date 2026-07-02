import { CheckIcon, ArrowIcon, SocialIcon } from './Icons'
import { team } from '../data'
import './About.css'

const points = [
  'Equipo propio de diseño y desarrollo',
  'Metodología ágil con entregas continuas',
  'Código propio, sin plantillas genéricas',
  'Acompañamiento después del lanzamiento',
]

/* Tarjeta de un miembro del equipo */
function TeamCard({ member }) {
  return (
    <a
      className="team-card"
      href={`https://github.com/${member.github}`}
      target="_blank"
      rel="noreferrer"
    >
      <img className="team-card__avatar" src={member.avatar} alt={member.name} />
      <span className="team-card__name">{member.name}</span>
      <span className="team-card__role">{member.role}</span>
      <span className="team-card__github">
        <SocialIcon name="github" /> {member.github}
      </span>
    </a>
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
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard member={member} key={member.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}