import { useReveal } from './hooks/useReveal'
import { brand } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Portfolio />
        <Tech />
        <Contact />
      </main>
      <Footer />

      <a
        className="whatsapp-fab"
        href={`https://wa.me/${brand.phones[0].replace(/\D/g, '')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2" />
        </svg>
      </a>
    </>
  )
}
