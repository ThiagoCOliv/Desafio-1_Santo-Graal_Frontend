import type { HeaderProps } from '../models/HeaderProps'

export function Header({ documentsCount, onCreateDocument }: HeaderProps) 
{
  return (
    <header className="w-full bg-slate-900/80 px-10 py-4 shadow-xl shadow-slate-950/20 backdrop-blur-sm sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">Produtividade</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-50">Santo Graal Workspace</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-400">
          Uma interface de produtividade com documentos, editor e painel de capítulos.
        </p>
      </div>
      <div className="mt-4 flex gap-3 sm:mt-0">
        <button
          type="button"
          onClick={onCreateDocument}
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Novo documento
        </button>
        <div className="hidden rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-400 sm:block">
          {documentsCount} documentos
        </div>
      </div>
    </header>
  )
}