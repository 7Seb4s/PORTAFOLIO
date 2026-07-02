import { useState } from 'react'
import { brand } from '../data'
import { ArrowIcon, CheckIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: conecta aquí tu backend, Formspree, o servicio de email.
    setSent(true)
  }

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__card reveal">
          <div className="contact__info">
            <span className="eyebrow eyebrow--light">Contacto</span>
            <h2 className="section-title">
              Hagamos algo <span className="accent">grande</span>
            </h2>
            <p className="contact__lead">
              Cuéntanos tu idea y te ayudamos a aterrizarla. Definimos alcance,
              tiempos y presupuesto sin compromiso.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__ico"><MailIcon /></span>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li className="contact__phones">
                <span className="contact__ico"><PhoneIcon /></span>
                <span className="contact__phones-list">
                  {brand.phones.map((p) => (
                    <a href={`tel:${p.replace(/\s/g, '')}`} key={p}>{p}</a>
                  ))}
                </span>
              </li>
              <li>
                <span className="contact__ico"><PinIcon /></span>
                {brand.location}
              </li>
            </ul>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-ico"><CheckIcon /></div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirnos. Te contactaremos muy pronto.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="field">
                  <label>Nombre</label>
                  <input type="text" name="name" placeholder="Tu nombre" required />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="tu@correo.com" required />
                  </div>
                  <div className="field">
                    <label>Teléfono</label>
                    <input type="tel" name="phone" placeholder="+51 ..." />
                  </div>
                </div>
                <div className="field">
                  <label>¿Qué necesitas?</label>
                  <select name="service" defaultValue="">
                    <option value="" disabled>Selecciona un servicio</option>
                    <option>Landing page</option>
                    <option>Web corporativa</option>
                    <option>App web</option>
                    <option>Sistema ERP</option>
                    <option>Plataforma SaaS</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="field">
                  <label>Cuéntanos tu proyecto</label>
                  <textarea name="message" rows="3" placeholder="Describe tu idea u objetivo..." />
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Enviar mensaje <ArrowIcon />
                </button>
                <p className="contact__note">
                  Al enviar aceptas ser contactado por {brand.name}.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
