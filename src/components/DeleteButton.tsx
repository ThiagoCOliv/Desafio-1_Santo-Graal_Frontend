import * as delIcon from '@fortawesome/free-solid-svg-icons/faTrash'
import type { DeleteButtonProps } from '../models/DeleteButtonProps'
import type { CSSProperties } from 'react'

export function DeleteButton({
  title = 'Deletar',
  iconSize = 30,
  color = '#ef4444',
  className = '',
  ...props
}: DeleteButtonProps) {
  return (
    <button
      type="button"
      title={title}
      style={{ '--icon-color': color } as CSSProperties}
      className={`text-[var(--icon-color)] hover:text-red-500 focus:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-300 ${className}`}
      {...props}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 512 512" aria-hidden="true">
        <path fill="currentColor" d={delIcon.svgPathData} />
      </svg>
    </button>
  )
}
