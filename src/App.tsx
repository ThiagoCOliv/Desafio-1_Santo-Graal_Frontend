import { useMemo, useState } from 'react'
import type { Document } from './models/Document'
import { documents as initialDocuments } from './data/documents'
import { Header } from './components/Header'
import { DocumentList } from './components/DocumentList'
import { EditorView } from './components/EditorView'
import { SidePanel } from './components/SidePanel'
import { Footer } from './components/Footer'

export default function App() 
{
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [activeId, setActiveId] = useState<string>('doc-1')
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0)

  const activeDocument = useMemo(
    () => documents.find((document) => document.id === activeId) ?? null,
    [documents, activeId],
  )

  const handleCreateDocument = () => {
    const nextIndex = documents.length + 1
    const newDoc: Document = {
      id: `doc-${nextIndex}`,
      title: `Novo documento ${nextIndex}`,
      content: [
        {
          title: 'Capítulo 1',
          content: 'Comece escrevendo seu novo documento aqui...',
          finished: false,
          comments: [
            {
              author: 'Sistema',
              text: 'conteúdo precisa ser colocado',
              time: 'agora',
            },
          ],
        },
      ],
      createdAt: 'Agora',
    }

    setDocuments((prev) => [newDoc, ...prev])
    setActiveId(newDoc.id)
  }

  const handleSelectDocument = (id: string) => {
    setActiveId(id)
    setActiveChapterIndex(0) // Reset to first chapter when switching documents
  }

  const handleDeleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((document) => document.id !== id))
    if (id === activeId) {
      const nextDocument = documents.find((document) => document.id !== id)
      setActiveId(nextDocument?.id ?? '')
      setActiveChapterIndex(0)
    }
  }

  const handleUpdateDocumentTitle = (value: string) => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id ? { ...document, title: value } : document,
      ),
    )
  }

  const handleUpdateChapter = (
    chapterIndex: number,
    field: 'title' | 'content' | 'finished',
    value: string | boolean,
  ) => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id
          ? {
              ...document,
              content: document.content.map((chapter, index) =>
                index === chapterIndex ? { ...chapter, [field]: value } : chapter,
              ),
            }
          : document,
      ),
    )
  }

  const handleRemoveChapter = (chapterIndex: number) => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id
          ? {
              ...document,
              content: document.content.filter((_, index) => index !== chapterIndex),
            }
          : document,
      ),
    )
    
    // Adjust active chapter index if necessary
    if (chapterIndex === activeChapterIndex) {
      setActiveChapterIndex(Math.max(0, activeChapterIndex - 1))
    } else if (chapterIndex < activeChapterIndex) {
      setActiveChapterIndex(activeChapterIndex - 1)
    }
  }

  const handleToggleChapterFinished = (chapterIndex: number) => {
    if (!activeDocument) return
    const chapter = activeDocument.content[chapterIndex]
    if (!chapter) return

    if (!chapter.finished && chapter.comments.length > 0) {
      return
    }

    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id
          ? {
              ...document,
              content: document.content.map((chapter, index) =>
                index === chapterIndex ? { ...chapter, finished: !chapter.finished } : chapter,
              ),
            }
          : document,
      ),
    )
  }

  const handleSelectChapter = (chapterIndex: number) => {
    setActiveChapterIndex(chapterIndex)
  }

  const handleAddComment = (commentText: string) => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id
          ? {
              ...document,
              content: document.content.map((chapter, index) =>
                index === activeChapterIndex
                  ? {
                      ...chapter,
                      finished: false,
                      comments: [
                        ...chapter.comments,
                        {
                          author: 'Sistema',
                          text: commentText,
                          time: 'agora',
                        },
                      ],
                    }
                  : chapter,
              ),
            }
          : document,
      ),
    )
  }

  const handleRemoveComment = (commentIndex: number) => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id
          ? {
              ...document,
              content: document.content.map((chapter, index) =>
                index === activeChapterIndex
                  ? {
                      ...chapter,
                      comments: chapter.comments.filter((_, commentIdx) => commentIdx !== commentIndex),
                    }
                  : chapter,
              ),
            }
          : document,
      ),
    )
  }

  const handleAddChapter = () => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id
          ? {
              ...document,
              content: [
                ...document.content,
                {
                  title: `Capítulo ${document.content.length + 1}`,
                  content: '',
                  finished: false,
                  comments: [
                    {
                      author: 'Sistema',
                      text: 'conteúdo precisa ser colocado',
                      time: 'agora',
                    },
                  ],
                },
              ],
            }
          : document,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center">
      <Header documentsCount={documents.length} onCreateDocument={handleCreateDocument} />
      <div className="flex-1 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 flex">
        <div className="grid gap-4 w-full lg:grid-cols-[280px_minmax(0,1fr)_280px] h-full auto-rows-[1fr]">
          <DocumentList
            documents={documents}
            activeId={activeId}
            onSelectDocument={handleSelectDocument}
            onCreateDocument={handleCreateDocument}
            onDeleteDocument={handleDeleteDocument}
          />

          <EditorView
            activeDocument={activeDocument}
            activeChapterIndex={activeChapterIndex}
            onCreateDocument={handleCreateDocument}
            onUpdateDocumentTitle={handleUpdateDocumentTitle}
            onUpdateChapter={handleUpdateChapter}
          />

          <SidePanel 
            chapters={activeDocument?.content ?? []} 
            activeChapterIndex={activeChapterIndex}
            onSelectChapter={handleSelectChapter}
            onToggleChapterFinished={handleToggleChapterFinished}
            onRemoveChapter={handleRemoveChapter}
            onAddChapter={handleAddChapter}
            onAddComment={handleAddComment}
            onRemoveComment={handleRemoveComment}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}