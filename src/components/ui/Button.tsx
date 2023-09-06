import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    // general styling
    'flex gap-2 rounded-lg items-center justify-center shadow-lg   ',
    //focus states
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted/50 focus-visible:ring-offset-2 ring-offset-background',
    //disabled states
    'disabled:opacity-50 disabled:pointer-events-none',
    //animations
    'transition-all duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'bg-foreground text-background hover:bg-foreground-hover',
        subtle: 'bg-foreground/10 hover:bg-foreground-hover border-foreground/10 border-2',
        subtle2: 'bg-background/10 hover:bg-background/20 border-background/10 border-2',
        outline: 'bg-background hover:bg-input border-input border-2',
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
        link: 'bg-transparent text-foreground hover:text-primary',
        ghost: 'text-foreground hover:bg-foreground/5',
        ghost2: 'text-background hover:bg-background/5',
      },
      size: {
        large: 'py-4 px-8',
        medium: 'py-3 px-6',
        small: 'px-4 text-xs h-10',
      },
      animation: {
        none: '',
        bounce: 'hover:animate-bounce',
        scale: 'hover:scale-105',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      animation: 'none',
    },
  }
)
export type ButtonVariant = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
