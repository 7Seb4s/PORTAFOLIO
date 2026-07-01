import { useEffect } from 'react'

/* Añade la clase .is-visible a los elementos .reveal al entrar en viewport.
   Además calcula el índice de cada elemento entre sus hermanos .reveal
   para crear un efecto escalonado (stagger) al aparecer. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))

    // Asignar índice de aparición escalonada dentro de cada grupo
    els.forEach((el) => {
      const parent = el.parentElement
      if (!parent) return
      const siblings = Array.from(parent.children).filter((c) =>
        c.classList.contains('reveal')
      )
      const i = siblings.indexOf(el)
      el.style.setProperty('--reveal-i', i < 0 ? 0 : i)
    })

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
