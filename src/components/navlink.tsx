import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

const navLinkVariants = cva('text-md min-w-full justify-start gap-2', {
  variants: {
    variant: {
      default: 'hover:bg-foreground hover:text-background',
      destructive: 'hover:text-destructive-foreground hover:bg-destructive/90',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type NavLinkProps = LinkProps &
  VariantProps<typeof navLinkVariants> & {
    children: ReactNode
  }

export const NavLink = ({ children, variant, ...props }: NavLinkProps) => {
  return (
    <Button variant={'clear'} className={cn(navLinkVariants({ variant }))} asChild>
      <Link {...props}>{children}</Link>
    </Button>
  )
}
