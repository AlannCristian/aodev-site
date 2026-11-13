import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Trabalhos e estudos de desenvolvimento do Alann Oliveira.",
};

const servicos = [
  {
    titulo: "Sites institucionais e portfólios",
    texto: "Páginas rápidas, bonitas e fáceis de encontrar no Google.",
  },
  {
    titulo: "Sistemas e aplicativos web",
    texto: "Ferramentas sob medida para organizar e automatizar o seu negócio.",
  },
  {
    titulo: "Lojas virtuais",
    texto: "Catálogo, carrinho e pagamento, pensados para vender.",
  },
];

const tecnologias = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "Git",
];

export default function Sobre() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-marinho">Sobre mim</h1>

      <div className="mt-6 space-y-4 text-grafite">
        <p>
          Sou o Alann Oliveira, desenvolvedor. [Conte aqui, em 2 ou 3 frases,
          quem você é e como começou na tecnologia.]
        </p>
        <p>
          [Conte o que te move: o tipo de projeto que você mais gosta de fazer e
          como você trabalha com seus clientes.]
        </p>
      </div>

      <h2 className="mt-12 text-xl font-extrabold text-marinho">
        O que eu faço
      </h2>
      <ul className="mt-4 space-y-4">
        {servicos.map((s) => (
          <li
            key={s.titulo}
            className="rounded-2xl border border-black/10 bg-white p-5"
          >
            <h3 className="font-bold text-marinho">{s.titulo}</h3>
            <p className="mt-1 text-grafite">{s.texto}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-xl font-extrabold text-marinho">Tecnologias</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tecnologias.map((t) => (
          <li
            key={t}
            className="rounded-lg bg-gelo px-3 py-1.5 font-mono text-sm text-marinho"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Link
          href="/contato"
          className="inline-block rounded-lg bg-azul px-6 py-3 font-bold text-white hover:opacity-90"
        >
          Vamos conversar?
        </Link>
      </div>
    </main>
  );
}
