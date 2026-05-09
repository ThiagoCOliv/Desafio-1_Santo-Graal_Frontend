import type { ButtonHTMLAttributes } from 'react'

export interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    iconSize?: number
    color?: string
}