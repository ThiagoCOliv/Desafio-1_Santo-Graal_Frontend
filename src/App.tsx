import { useMemo, useState } from 'react'
import type { Document } from './models/Document'
import { documents as initialDocuments } from './data/documents'
import { chapters as sampleChapters } from './data/chapters'
import { sampleComments } from './data/coments'
import { Header } from './components/Header'
import { DocumentList } from './components/DocumentList'
import { EditorView } from './components/EditorView'
import { SidePanel } from './components/SidePanel'
import { Footer } from './components/Footer'

export default function App() 
{
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [activeId, setActiveId] = useState<string>('doc-1')

  const activeDocument = useMemo(
    () => documents.find((document) => document.id === activeId) ?? null,
    [documents, activeId],
  )

  const handleCreateDocument = () => {
    const nextIndex = documents.length + 1
    const newDoc: Document = {
      id: `doc-${nextIndex}`,
      title: `Novo documento ${nextIndex}`,
      content: 'Comece escrevendo seu novo documento aqui...',
      createdAt: 'Agora',
    }

    setDocuments((prev) => [newDoc, ...prev])
    setActiveId(newDoc.id)
  }

  const handleDeleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((document) => document.id !== id))
    if (id === activeId) {
      const nextDocument = documents.find((document) => document.id !== id)
      setActiveId(nextDocument?.id ?? '')
    }
  }

  const handleUpdateDocument = (field: 'title' | 'content', value: string) => {
    if (!activeDocument) return
    setDocuments((prev) =>
      prev.map((document) =>
        document.id === activeDocument.id ? { ...document, [field]: value } : document,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center">
      <Header documentsCount={documents.length} onCreateDocument={handleCreateDocument} />
      <div className="w-full mx-8 max-w-7xl sm:px-6 lg:px-8 py-6">
        <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)_280px]">
          <DocumentList
            documents={documents}
            activeId={activeId}
            onSelectDocument={setActiveId}
            onCreateDocument={handleCreateDocument}
            onDeleteDocument={handleDeleteDocument}
          />

          <EditorView
            activeDocument={activeDocument}
            onCreateDocument={handleCreateDocument}
            onUpdateDocument={handleUpdateDocument}
          />

          <SidePanel chapters={sampleChapters} comments={sampleComments} />
        </div>
      </div>
      <Footer />
    </div>
  )
}