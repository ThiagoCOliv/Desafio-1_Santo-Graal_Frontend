import type { EditorViewProps } from '../models/EditorViewProps'

export function EditorView({ activeDocument, onCreateDocument, onUpdateDocument }: EditorViewProps) {
  return (
    <main className="order-1 border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 lg:order-2">
      {activeDocument ? (
        <div className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Editor</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50">{activeDocument.title}</h2>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              {activeDocument.createdAt}
            </span>
          </div>

          <div className="space-y-4 py-4 flex flex-col gap-6">
            <label className="block flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-200 pl-2">Título</span>
              <input
                value={activeDocument.title}
                onChange={(event) => onUpdateDocument('title', event.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                placeholder="Título do documento"
              />
            </label>

            <label className="block flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-200 pl-2">Conteúdo</span>
              <textarea
                value={activeDocument.content}
                onChange={(event) => onUpdateDocument('content', event.target.value)}
                rows={14}
                className="mt-2 min-h-[320px] w-full resize-none rounded-3xl border border-slate-700 bg-slate-950 px-4 py-4 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
            </label>
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