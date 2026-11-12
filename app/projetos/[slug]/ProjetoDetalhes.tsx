import { notFound } from "next/navigation";
import { projetos } from "@/data/projetos";

export default async function ProjetoDetalhes({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) notFound();

  return (
    <>
      <h1 className="mt-6 text-3xl font-extrabold text-marinho">
        {projeto.titulo}
      </h1>
      <p className="mt-2 text-grafite">{projeto.resumo}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {projeto.tecnologias.map((tec) => (
          <li
            key={tec}
            className="rounded-lg bg-gelo px-2.5 py-1 font-mono text-xs text-marinho"
          >
            {tec}
          </li>
        ))}
      </ul>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-extrabold text-marinho">O problema</h2>
          <p className="mt-2 text-grafite">{projeto.problema}</p>
        </div>
        <div>
          <h2 className="text-lg font-extrabold text-marinho">A solução</h2>
          <p className="mt-2 text-grafite">{projeto.solucao}</p>
        </div>
        <div>
          <h2 className="text-lg font-extrabold text-marinho">O resultado</h2>
          <p className="mt-2 text-grafite">{projeto.resultado}</p>
        </div>
      </section>

      <div className="mt-10 flex gap-4 text-sm font-bold">
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
    </>
  );
}
