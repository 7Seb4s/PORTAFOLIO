import { useEffect, useState } from 'react'
import { brand } from '../data'
import { ArrowIcon, CheckIcon } from './Icons'
import './Hero.css'

const words = ['a medida', 'que venden', 'que escalan', 'que convierten']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    let delay = deleting ? 55 : 110

    if (!deleting && text === current) {
      delay = 1600
      const t = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      )
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index])

  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <div className="hero__copy reveal">
          <span className="hero__badge">
            <span className="dot" /> Estudio de desarrollo · {brand.location}
          </span>

          <h1 className="hero__title">
            Creamos software y webs{' '}
            <span className="hero__typed">
              <span className="accent">{text}</span>
              <span className="hero__cursor" />
            </span>
          </h1>

          <p className="hero__lead">
            Diseñamos y desarrollamos <strong>landing pages, webs corporativas,
            apps web, ERPs y plataformas SaaS</strong> a medida — pensadas para
            automatizar procesos, vender más y crecer sin fricción.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn-primary">
              Cotizar mi proyecto <ArrowIcon />
            </a>
            <a href="#portafolio" className="btn btn-ghost">
              Ver portafolio
            </a>
          </div>

          <ul className="hero__points">
            <li><CheckIcon className="accent-sage" /> Desarrollo 100% a medida</li>
            <li><CheckIcon className="accent-sage" /> Diseño enfocado en resultados</li>
            <li><CheckIcon className="accent-sage" /> Soporte y evolución continua</li>
          </ul>
        </div>

        <div className="hero__visual reveal">
          <div className="stage">
            {/* Ventanas de sitios flotando (como imagen 1) */}
            <div className="winf winf--left">
              <div className="winf__bar"><i /><i /><i /></div>
              <div className="winf__body">
                <div className="winf__hero winf__hero--navy" />
                <div className="winf__ln" />
                <div className="winf__ln winf__ln--short" />
                <div className="winf__imgs"><span /><span /></div>
              </div>
            </div>

            <div className="winf winf--top">
              <div className="winf__bar"><i /><i /><i /></div>
              <div className="winf__body">
                <div className="winf__split">
                  <span className="winf__ph" />
                  <div className="winf__col">
                    <span className="winf__ln" />
                    <span className="winf__ln winf__ln--short" />
                    <span className="winf__btn" />
                  </div>
                </div>
              </div>
            </div>

            {/* iMac con dashboard */}
            <div className="imac">
              <div className="imac__monitor">
                <div className="imac__screen">
                  <div className="ui">
                    <aside className="ui__side">
                      <div className="ui__brand">
                        <span className="ui__logo" />
                        <span className="ui__brandtxt" />
                      </div>
                      <span className="ui__nav ui__nav--active"><i /> <b /></span>
                      <span className="ui__nav"><i /> <b /></span>
                      <span className="ui__nav"><i /> <b /></span>
                      <span className="ui__nav"><i /> <b /></span>
                      <div className="ui__side-foot">
                        <span className="ui__avatar" />
                        <span className="ui__brandtxt" />
                      </div>
                    </aside>

                    <div className="ui__main">
                      <div className="ui__topbar">
                        <div className="ui__title" />
                        <div className="ui__pill">+ Nuevo</div>
                      </div>

                      <div className="ui__cards">
                        <div className="ui__card">
                          <span className="ui__cardico ui__cardico--terra" />
                          <span className="ui__num">S/ 1,284</span>
                          <span className="ui__lbl" />
                        </div>
                        <div className="ui__card">
                          <span className="ui__cardico ui__cardico--sage" />
                          <span className="ui__num ui__num--sage">98%</span>
                          <span className="ui__lbl" />
                        </div>
                        <div className="ui__card">
                          <span className="ui__cardico ui__cardico--navy" />
                          <span className="ui__num ui__num--terra">+128</span>
                          <span className="ui__lbl" />
                        </div>
                      </div>

                      <div className="ui__chart">
                        <div className="ui__chart-head">
                          <span className="ui__chart-title" />
                          <span className="ui__legend"><i /><i /></span>
                        </div>
                        <div className="ui__bars">
                          <span style={{ '--h': '42%' }} />
                          <span style={{ '--h': '68%' }} />
                          <span style={{ '--h': '36%' }} />
                          <span style={{ '--h': '84%' }} />
                          <span style={{ '--h': '58%' }} />
                          <span style={{ '--h': '96%' }} />
                          <span style={{ '--h': '50%' }} />
                          <span style={{ '--h': '74%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imac__chin"><span className="imac__logo" /></div>
              </div>
              <div className="imac__neck" />
              <div className="imac__foot" />
            </div>

            {/* Celular flotando */}
            <div className="phone">
              <div className="phone__notch" />
              <div className="phone__screen">
                <div className="app__status">
                  <span className="app__time">9:41</span>
                  <span className="app__sig" />
                </div>
                <div className="app__top">
                  <div className="app__avatar" />
                  <div className="app__lines"><span /><span /></div>
                  <span className="app__bell" />
                </div>
                <div className="app__hero">
                  <span className="app__hero-lbl" />
                  <span className="app__hero-num">S/ 12,480</span>
                  <span className="app__hero-bar" />
                </div>
                <div className="app__actions"><span /><span /><span /><span /></div>
                <div className="app__list">
                  <div className="app__item"><span className="app__item-ico" /><span className="app__item-txt" /><span className="app__item-amt" /></div>
                  <div className="app__item"><span className="app__item-ico" /><span className="app__item-txt" /><span className="app__item-amt" /></div>
                  <div className="app__item"><span className="app__item-ico" /><span className="app__item-txt" /><span className="app__item-amt" /></div>
                </div>
                <div className="app__tabbar">
                  <span className="app__tab app__tab--active" />
                  <span className="app__tab" /><span className="app__tab" /><span className="app__tab" />
                </div>
              </div>
            </div>

            {/* Confeti decorativo */}
            <span className="confetti confetti--1" />
            <span className="confetti confetti--2" />
            <span className="confetti confetti--3" />
            <span className="confetti confetti--4" />
          </div>
        </div>
      </div>
    </section>
  )
}
