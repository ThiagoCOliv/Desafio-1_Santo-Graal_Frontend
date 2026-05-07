import type { Comment } from './Comment'

export type Chapter = {
  title: string
  content: string
  finished: boolean
  comments: Comment[]
}