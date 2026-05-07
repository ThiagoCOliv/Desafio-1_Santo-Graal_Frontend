import type { Chapter } from '../models/Chapter'

export interface SidePanelProps {
  chapters: Chapter[]
  activeChapterIndex: number
  onSelectChapter: (chapterIndex: number) => void
  onToggleChapterFinished: (chapterIndex: number) => void
  onRemoveChapter: (chapterIndex: number) => void
  onAddChapter: () => void
  onAddComment: (commentText: string) => void
  onRemoveComment: (commentIndex: number) => void
}