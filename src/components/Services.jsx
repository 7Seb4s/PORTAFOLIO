import { services } from '../data'
import { ServiceIcon, ArrowIcon } from './Icons'
import './Services.css'

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services__head reveal">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="section-title">
            Soluciones digitales <span className="accent">de punta a punta</span>
          </h2>
          <p className="section-lead">
            Desde una landing hasta un sistema completo. Cubrimos todo el ciclo:
            estrategia, diseño, desarrollo y soporte.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article className="service-card reveal" key={s.title}>
              <div className="service-card__icon">
                <ServiceIcon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="service-card__tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href="#contacto" className="service-card__link">
                Solicitar <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
