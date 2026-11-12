import Image from "next/image";
import Link from "next/link";
import ProjetoCard from "@/components/ProjetoCard";
import { projetos } from "@/data/projetos";

export default function Home() {
  const destaques = projetos.slice(0, 3);

  return (
    <main>
      {/* 1. Apresentação */}
      <section className="bg-gelo">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-sm font-bold text-azul">Olá, eu sou</p>
            <h1 className="mt-2 text-4xl font-extrabold text-marinho md:text-5xl">
              Alann Oliveira
            </h1>
            <p className="mt-4 text-lg text-grafite">
              Desenvolvedor de sites e sistemas sob medida. Transformo a sua
              ideia em um projeto que funciona, do planejamento à entrega.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="rounded-lg bg-azul px-6 py-3 font-bold text-white hover:opacity-90"
              >
                Pedir orçamento
              </Link>
              <Link
                href="/projetos"
                className="rounded-lg border-2 border-marinho px-6 py-3 font-bold text-marinho hover:bg-marinho hover:text-white"
              >
                Ver projetos
              </Link>
            </div>
          </div>

          <Image
            src="/logo.svg"
            alt="Logo AO Dev"
            width={220}
            height={162}
            priority
            className="shrink-0"
          />
        </div>
      </section>

      {/* 2. Projetos em destaque */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-marinho">
            Projetos em destaque
          </h2>
          <Link
            href="/projetos"
            className="text-sm font-bold text-azul hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        {destaques.length === 0 ? (
          <p className="mt-8 text-grafite">Novos projetos em breve.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {destaques.map((projeto) => (
              <ProjetoCard key={projeto.slug} projeto={projeto} />
            ))}
          </div>
        )}
      </section>

      {/* 3. Chamada final */}
      <section className="bg-marinho">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-white">
            Tem um projeto em mente?
          </h2>
          <p className="mt-2 text-white/80">
            Me conte a ideia e eu respondo com os próximos passos.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-block rounded-lg bg-menta px-6 py-3 font-bold text-marinho hover:opacity-90"
          >
            Falar comigo
          </Link>
        </div>
      </section>
    </main>
  );
}
