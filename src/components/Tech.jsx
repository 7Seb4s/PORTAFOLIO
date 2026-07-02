import { tech, faqs } from '../data'
import { PlusIcon } from './Icons'
import { useState } from 'react'
import './Tech.css'

export default function Tech() {
  const [open, setOpen] = useState(0)
  const [hovered, setHovered] = useState(null)

  return (
    <section className="tech" id="tecnologia">
      <div className="container tech__inner">
        <div className="tech__left reveal">
          <span className="eyebrow">Tecnología</span>
          <h2 className="section-title">
            Herramientas <span className="accent">modernas y probadas</span>
          </h2>
          <p className="section-lead">
            Elegimos el stack más adecuado para cada proyecto, priorizando
            rendimiento, seguridad y escalabilidad.
          </p>
          <div className="tech__stack">
            {tech.map((t) => (
              <button
                key={t.name}
                type="button"
                className={`tech__pill ${hovered === t.name ? 'is-active' : ''}`}
                onMouseEnter={() => setHovered(t.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(hovered === t.name ? null : t.name)}
              >
                {t.name}

              <span className="tech__holo" aria-hidden="true">
                  <span className="tech__holo-beam" style={{ '--tc': t.color }} />
                  {/* Busca esta sección en tu mapeo y reemplázala por esto: */}
                  <span className="tech__holo-icon" style={{ '--tc': t.color }}>
                   <img 
                    src={t.image} 
                    alt={`Logo de ${t.name}`} 
                    className="tech__icon-img"
                    loading="lazy"
                  />
                </span>
              </span>
              </button>
            ))}
          </div>
        </div>

        <div className="tech__right reveal">
          <h3 className="tech__faq-title">Preguntas frecuentes</h3>
          <div className="faq">
            {faqs.map((f, i) => (
              <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={f.q}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <PlusIcon className="faq__icon" />
                </button>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}