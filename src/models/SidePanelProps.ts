import type { Chapter } from '../models/Chapter'
import type { Comment } from '../models/Comment'

export interface SidePanelProps {
    chapters: Chapter[]
    comments: Comment[]
  }