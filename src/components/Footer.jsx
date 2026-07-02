import { brand, nav } from '../data'
import { SocialIcon, ArrowIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta reveal">
          <div>
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>Conversemos y hagámoslo realidad.</p>
          </div>
          <a href="#contacto" className="btn btn-primary">
            Empezar ahora <ArrowIcon />
          </a>
        </div>

        <div className="footer__inner">
          <div className="footer__brand reveal">
            <a href="#top" className="brand">
              <span className="brand__mark">S</span>
              <span className="brand__name">{brand.name}</span>
            </a>
            <p>
              {brand.tagline}. Desarrollo web y software a medida para empresas
              en crecimiento.
            </p>
            <div className="footer__social">
              {Object.keys(brand.social).map((s) => (
                <a
                  key={s}
                  href={brand.social[s]}
                  aria-label={s}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col reveal">
              <h4>Navegación</h4>
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col reveal">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Landing pages</a></li>
                <li><a href="#servicios">Webs corporativas</a></li>
                <li><a href="#servicios">Apps web</a></li>
                <li><a href="#servicios">Sistemas ERP</a></li>
                <li><a href="#servicios">Plataformas SaaS</a></li>
              </ul>
            </div>

            <div className="footer__col reveal">
              <h4>Contacto</h4>
              <ul>
                <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
                {brand.phones.map((p) => (
                  <li key={p}><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></li>
                ))}
                <li>{brand.location}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {year} {brand.name}. Todos los derechos reservados.</span>
          <span>Hecho con dedicación en Perú 🇵🇪</span>
        </div>
      </div>
    </footer>
  )
}
