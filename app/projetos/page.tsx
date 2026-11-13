import ProjetoCard from "@/components/ProjetoCard";
import { projetos } from "@/data/projetos";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Trabalhos e estudos de desenvolvimento do Alann Oliveira.",
};

export default function Projetos() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-marinho">Projetos</h1>
      <p className="mt-2 text-grafite">
        Trabalhos e estudos que desenvolvi. Novos projetos entram aqui conforme
        ficam prontos.
      </p>

      {projetos.length === 0 ? (
        <p className="mt-10 text-grafite">Novos projetos em breve.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projetos.map((projeto) => (
            <ProjetoCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      )}
    </main>
  );
}
