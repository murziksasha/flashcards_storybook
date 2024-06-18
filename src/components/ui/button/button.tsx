import s from './button.module.scss'
import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ButtonProps<T extends ElementType='button'> = {
  as?: T,
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = ({
  as: Component = 'button', 
  className, 
  fullWidth, 
  variant = 'primary', 
  ...rest 
}: ButtonProps) => {
  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
