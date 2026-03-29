import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'light'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles =
    variant === 'light'
      ? 'bg-white/10 text-white/90 border-white/10'
      : 'bg-blue/10 text-blue border-blue/20'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${styles}`}
    >
      {children}
    </span>
  )
}
