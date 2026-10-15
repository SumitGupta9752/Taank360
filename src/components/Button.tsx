import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Props = { children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost'; to?: string; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ children, variant = 'primary', to, className = '', ...props }: Props) {
  const classes = `button button--${variant} ${className}`
  return to ? <Link className={classes} to={to}>{children}{variant === 'primary' && <ArrowUpRight size={16} aria-hidden="true" />}</Link> : <button className={classes} {...props}>{children}{variant === 'primary' && <ArrowUpRight size={16} aria-hidden="true" />}</button>
}
