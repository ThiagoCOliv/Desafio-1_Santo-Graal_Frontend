import * as addIcon from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import type { AddButtonProps } from '../models/AddButtonProps'
import type { CSSProperties } from 'react'

export function AddButton({
  title = 'Adicionar',
  iconSize = 40,
  color = '#0ea5e9',
  className = '',
  ...props
}: AddButtonProps) {
  return (
    <button
      type="button"
      title={title}
      style={{ '--icon-color': color } as CSSProperties}
      className={`text-[var(--icon-color)] hover:text-sky-400 focus:text-sky-400 transition focus:outline-none focus:ring-2 focus:ring-sky-300 ${className}`}
      {...props}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 512 512" aria-hidden="true">
        <path fill="currentColor" d={addIcon.svgPathData} />
      </svg>
    </button>
  )
}
