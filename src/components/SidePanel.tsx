import { useState } from 'react'
import type { SidePanelProps } from '../models/SidePanelProps'

export function SidePanel({ 
  chapters, 
  activeChapterIndex, 
  onSelectChapter,
  onToggleChapterFinished,
  onRemoveChapter,
  onAddChapter,
  onAddComment,
  onRemoveComment,
}: SidePanelProps) {
  const [commentDraft, setCommentDraft] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const activeChapter = chapters[activeChapterIndex]
  const activeComments = activeChapter?.comments ?? []

  const handleOpenModal = () => {
    setCommentDraft('')
    setIsModalOpen(true)
  }

  const handleSubmitComment = () => {
    if (!commentDraft.trim()) return
    onAddComment(commentDraft.trim())
    setIsModalOpen(false)
    setCommentDraft('')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <aside className="order-3 border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10 h-auto lg:h-full flex flex-col overflow-hidden">
      <section className="mb-6 flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Capítulos</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-100">Progresso do conteúdo</h2>
          </div>
          <button
            type="button"
            onClick={onAddChapter}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            +
          </button>
        </div>
        <div className="py-2 space-y-3 flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
          {chapters.map((chapter, index) => {
            const canFinish = chapter.finished || chapter.comments.length === 0

            return (
              <div 
                key={index} 
                className={`rounded-3xl border p-4 cursor-pointer transition ${
                  index === activeChapterIndex 
                    ? 'border-sky-500 bg-sky-500/10' 
                    : 'border-slate-800 bg-slate-950/60 hover:bg-slate-950/80'
                }`}
                onClick={() => onSelectChapter(index)}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-medium text-slate-100">{chapter.title}</p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={!canFinish}
                      title={!canFinish ? 'Remova os comentários deste capítulo antes de concluir.' : ''}
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleChapterFinished(index)
                      }}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        chapter.finished
                          ? 'border border-green-700 bg-green-900 text-green-200 hover:bg-green-800'
                          : !canFinish
                          ? 'border border-slate-700 bg-slate-700/50 text-slate-500 cursor-not-allowed'
                          : 'border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {chapter.finished ? 'Concluído' : 'Pendente'}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onRemoveChapter(index)
                      }}
                      className="rounded-full border border-red-700 bg-red-900 px-3 py-1 text-xs font-semibold text-red-200 transition hover:bg-red-800"
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Comentários</p>
          </div>
          <button
            type="button"
            onClick={handleOpenModal}
            disabled={!activeChapter}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            +
          </button>
        </div>
        <div className="mt-4 space-y-3 flex-1 overflow-y-auto pr-1">
          {activeComments.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-center text-sm text-slate-400">
              Nenhum comentário neste capítulo.
            </div>
          ) : (
            activeComments.map((comment, index) => (
              <article key={`${comment.author}-${comment.time}-${index}`} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-100">{comment.author}</p>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{comment.time}</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemoveComment(index)
                    }}
                    className="rounded-full border border-red-700 bg-red-900 px-3 py-1 text-xs font-semibold text-red-200 transition hover:bg-red-800"
                  >
                    Deletar
                  </button>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{comment.text}</p>
              </article>
            ))
          )}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 sm:px-6">
          <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-slate-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Novo comentário</h3>
                <p className="mt-1 text-sm text-slate-400">Adicione uma observação para o capítulo selecionado.</p>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-700"
              >
                Fechar
              </button>
            </div>

            <textarea
              value={commentDraft}
              onChange={(event) => setCommentDraft(event.target.value)}
              rows={5}
              className="mt-5 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              placeholder="Digite o comentário aqui..."
            />

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-700"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSubmitComment}
                className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}