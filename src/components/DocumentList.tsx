import type { DocumentListProps } from '../models/DocumentListProps'

export function DocumentList({
  documents,
  activeId,
  onSelectDocument,
  onCreateDocument,
  onDeleteDocument,
}: DocumentListProps) {
  return (
    <aside className="order-2 border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10 lg:order-1">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Documentos</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Minha biblioteca</h2>
        </div>
        <button
          type="button"
          onClick={onCreateDocument}
          className="rounded-full bg-slate-700 w-8 h-8 text-center pl-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:bg-slate-600"
        >
          +
        </button>
      </div>

      <div className="py-3 space-y-3 max-h-[520px] overflow-y-auto pr-1 flex flex-col items-stretch gap-2">
        {documents.map((document) => (
          <button
            key={document.id}
            type="button"
            onClick={() => onSelectDocument(document.id)}
            className={`group flex w-full my-3 items-start justify-between gap-3 border px-4 py-4 text-left transition ${
              document.id === activeId
                ? 'border-sky-500/80 bg-slate-800'
                : 'border-slate-800 bg-slate-950/60 hover:border-slate-600 hover:bg-slate-900'
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-slate-100">{document.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">{document.createdAt}</p>
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onDeleteDocument(document.id)
              }}
              className="rounded-full border border-slate-700 bg-slate-950/90 px-3 py-1 text-xs text-slate-400 transition hover:border-rose-400 hover:text-rose-300"
            >
              Deletar
            </button>
          </button>
        ))}

        {documents.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-slate-700 px-4 py-8 text-center text-sm text-slate-500">
            Nenhum documento encontrado. Crie um novo documento para começar.
          </p>
        ) : null}
      </div>
    </aside>
  )
}