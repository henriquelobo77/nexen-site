import { type ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  dark?: boolean
}

export function Section({ children, id, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? 'bg-navy text-white' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
