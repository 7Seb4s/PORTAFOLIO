import { useState } from 'react'
import { categories, projects } from '../data'
import { ArrowIcon } from './Icons'
import './Portfolio.css'

export default function Portfolio() {
  const [active, setActive] = useState('Todos')

  const filtered =
    active === 'Todos'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section className="portfolio" id="portafolio">
      <div className="container">
        <div className="portfolio__head reveal">
          <div>
            <span className="eyebrow">Portafolio</span>
            <h2 className="section-title">
              Proyectos que <span className="accent">generan impacto</span>
            </h2>
          </div>
          <p className="section-lead">
            Una muestra de lo que construimos para empresas y startups que
            necesitaban digitalizar y crecer.
          </p>
        </div>

        <div className="portfolio__filters reveal">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter ${active === c ? 'is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p) => (
            <article className="project reveal" key={p.title}>
              <div className="project__media">
                {p.image ? (
                  <img src={p.image} alt={p.title} />
                ) : (
                  <div className="img-placeholder">
                    <span>Imagen del proyecto</span>
                  </div>
                )}
                <span className="project__cat">{p.category}</span>
              </div>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.type}</p>
                <a href={p.url || '#contacto'}
                  className="project__link"
                  aria-label={`Ver ${p.title}`}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noreferrer' : undefined}>
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
