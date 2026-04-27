import type { Document } from '../models/Document'

export interface DocumentListProps {
    documents: Document[]
    activeId: string
    onSelectDocument: (id: string) => void
    onCreateDocument: () => void
    onDeleteDocument: (id: string) => void
  }