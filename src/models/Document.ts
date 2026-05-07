import type { Chapter } from "./Chapter"

export type Document = {
    id: string
    title: string
    content: Chapter[]
    createdAt: string
}