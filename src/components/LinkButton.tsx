import { Link, LinkProps, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LinkButtonProps extends LinkProps {
  icon?: LucideIcon
  text: string
  color?: string
}

export function LinkButton({
  icon: Icon,
  text,
  to,
  color = 'text-inherit',
  className,
}: LinkButtonProps) {
  const { pathname } = useLocation()

  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'font-chubbo w-full border border-black lg:hover:shadow-[3px_3px_0px_#000] transition-all justify-start text-sm md:text-lg',
        className,
      )}
    >
      <Link className="font-chubbo" to={to} data-active={pathname === to}>
        {Icon && <Icon className={`${color} mr-1 md:mr-3`} size={18} />}
        {text}
      </Link>
    </Button>
  )
}
