import { type ReactNode, type AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
  href: string
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-blue text-white hover:bg-blue/90 shadow-lg shadow-blue/25',
  secondary:
    'bg-cyan text-navy font-semibold hover:bg-cyan/90',
  outline:
    'bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-navy',
}

export function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
