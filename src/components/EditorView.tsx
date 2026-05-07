import type { EditorViewProps } from '../models/EditorViewProps'

export function EditorView({
  activeDocument,
  activeChapterIndex,
  onCreateDocument,
  onUpdateDocumentTitle,
  onUpdateChapter,
}: EditorViewProps) {

  return (
    <main className="order-1 border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 lg:order-2 h-full flex flex-col overflow-hidden">
      {activeDocument ? (
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Editor</p>
              <h2
                contentEditable
                suppressContentEditableWarning
                onBlur={(event) => onUpdateDocumentTitle(event.currentTarget.textContent || '')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    event.currentTarget.blur()
                  }
                }}
                className="mt-2 text-2xl font-semibold text-slate-50 outline-none focus:bg-slate-800 focus:px-2 focus:py-1 focus:rounded focus:ring-2 focus:ring-sky-500/20"
              >
                {activeDocument.title}
              </h2>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              {activeDocument.createdAt}
            </span>
          </div>

          <div className="space-y-6 pt-4">
            <div className="mt-6 space-y-4">
                {activeDocument.content.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-center text-sm text-slate-400">
                    Nenhum capítulo criado ainda. Clique em adicionar capítulo para começar.
                  </div>
                ) : (
                  (() => {
                    const chapter = activeDocument.content[activeChapterIndex]
                    if (!chapter) return null
                    return (
                      <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0 flex-1 space-y-4 flex flex-col gap-4">
                            <label className="block flex flex-col gap-2">
                              <span className="text-sm font-semibold text-slate-200">Título do capítulo</span>
                              <input
                                value={chapter.title}
                                onChange={(event) => onUpdateChapter(activeChapterIndex, 'title', event.target.value)}
                                className="w-full border-t-1 border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                              />
                            </label>
                            <label className="block flex flex-col gap-2">
                              <span className="text-sm font-semibold text-slate-200">Conteúdo do capítulo</span>
                              <textarea
                                value={chapter.content}
                                onChange={(event) => onUpdateChapter(activeChapterIndex, 'content', event.target.value)}
                                rows={4}
                                className="h-[500px] w-full resize-none border-t-1 border-slate-700 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    )
                  })()
                )}
              </div>
            </div>
          </div>
      ) : (
        <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
          <div className="rounded-3xl bg-slate-900/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Bem-vindo</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50">Comece um novo documento</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Selecione ou crie um documento para visualizar e editar seu conteúdo de forma rápida e intuitiva.
            </p>
          </div>
          <button
            type="button"
            onClick={onCreateDocument}
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Criar documento
          </button>
        </div>
      )}
    </main>
  )
}