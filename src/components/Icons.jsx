/* Íconos de línea (stroke) — heredan el color con currentColor */

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ServiceIcon({ name, ...props }) {
  const icons = {
    landing: (
      <svg {...base} {...props}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 13h5" />
        <path d="M8 16h8" />
      </svg>
    ),
    corp: (
      <svg {...base} {...props}>
        <path d="M3 21h18" />
        <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
        <path d="M15 9h3a1 1 0 0 1 1 1v11" />
        <path d="M8 8h3M8 12h3M8 16h3" />
      </svg>
    ),
    app: (
      <svg {...base} {...props}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 9h20" />
        <circle cx="5" cy="7" r="0.6" fill="currentColor" />
        <path d="M7 14l2 2-2 2M17 14h-4" />
      </svg>
    ),
    erp: (
      <svg {...base} {...props}>
        <path d="M12 3v18" />
        <path d="M3 8l9-5 9 5-9 5-9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </svg>
    ),
    saas: (
      <svg {...base} {...props}>
        <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9a4 4 0 0 1 0 8H7z" />
        <path d="M12 12v5M9.5 14.5l2.5-2.5 2.5 2.5" />
      </svg>
    ),
    support: (
      <svg {...base} {...props}>
        <path d="M12 2a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h1v-6H7V9a5 5 0 0 1 10 0v1h-2v6h1a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7z" />
        <path d="M12 21h3a2 2 0 0 0 2-2" />
      </svg>
    ),
  }
  return icons[name] || icons.app
}

export function ArrowIcon(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
export function MailIcon(props) {
  return (
    <svg {...base} width="19" height="19" {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} width="19" height="19" {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} width="19" height="19" {...props}>
      <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function SocialIcon({ name, ...props }) {
  const icons = {
    instagram: (
      <svg {...base} width="20" height="20" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" />
      </svg>
    ),
    linkedin: (
      <svg {...base} width="20" height="20" {...props}>
        <path d="M4 9v11M4 5.5a1.5 1.5 0 1 0 0-.01" />
        <path d="M9 20v-6a3 3 0 0 1 6 0v6M9 9v11" />
      </svg>
    ),
    behance: (
      <svg {...base} width="20" height="20" {...props}>
        <path d="M2 7h6a2.5 2.5 0 0 1 0 5H2zM2 12h6.5a2.5 2.5 0 0 1 0 5H2zM15 7h5" />
        <path d="M14 14a3 3 0 1 0 6 0c0-1.7-1.3-3-3-3s-3 1.3-3 3z" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    ),
  }
  return icons[name] || null
}
