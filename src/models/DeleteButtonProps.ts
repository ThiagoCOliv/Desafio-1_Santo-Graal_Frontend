import type { ButtonHTMLAttributes } from 'react'

export interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    iconSize?: number
    color?: string
}