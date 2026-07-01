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
  }
  return icons[name] || null
}
