import type { Projeto } from "@/data/projetos";

export default function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const concluido = projeto.status === "Concluído";

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-extrabold text-marinho">
          {projeto.titulo}
        </h2>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold text-marinho ${
            concluido ? "bg-menta/20" : "bg-ambar/30"
          }`}
        >
          {projeto.status}
        </span>
      </div>

      <p className="text-grafite">{projeto.resumo}</p>

      <ul className="flex flex-wrap gap-2">
        {projeto.tecnologias.map((tec) => (
          <li
            key={tec}
            className="rounded-lg bg-gelo px-2.5 py-1 font-mono text-xs text-marinho"
          >
            {tec}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-4 text-sm font-bold">
        {projeto.demo && (
          <a
            href={projeto.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-azul hover:underline"
          >
            Ver demonstração
          </a>
        )}
        {projeto.repositorio && (
          <a
            href={projeto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-azul hover:underline"
          >
            Código no GitHub
          </a>
        )}
      </div>
    </article>
  );
}
