import type { Document } from './Document'

export interface EditorViewProps {
  activeDocument: Document | null
  activeChapterIndex: number
  onCreateDocument: () => void
  onUpdateDocumentTitle: (value: string) => void
  onUpdateChapter: (
    chapterIndex: number,
    field: 'title' | 'content' | 'finished',
    value: string | boolean,
  ) => void
}
