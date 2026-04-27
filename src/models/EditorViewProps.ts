import type { Document } from './Document'

export interface EditorViewProps {
    activeDocument: Document | null
    onCreateDocument: () => void
    onUpdateDocument: (field: 'title' | 'content', value: string) => void
  }