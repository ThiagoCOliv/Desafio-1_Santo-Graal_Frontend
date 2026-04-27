import type { SidePanelProps } from '../models/SidePanelProps'

export function SidePanel({ chapters, comments }: SidePanelProps) {
  return (
    <aside className="order-3 rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/10">
      <section className="mb-6">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Capítulos</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-100">Progresso do conteúdo</h2>
        <div className="mt-4 space-y-3">
          {chapters.map((chapter) => (
            <div key={chapter.title} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-slate-100">{chapter.title}</p>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{chapter.progress}</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-sky-500" style={{ width: chapter.progress }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Comentários</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-100">Discussões recentes</h2>
        <div className="mt-4 space-y-3">
          {comments.map((comment) => (
            <article key={`${comment.author}-${comment.time}`} className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-slate-100">{comment.author}</p>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{comment.time}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{comment.text}</p>
            </article>
          ))}
        </div>
      </section>
    </aside>
  )
}