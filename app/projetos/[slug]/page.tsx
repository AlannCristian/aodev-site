import { Suspense } from "react";
import Link from "next/link";
import { projetos } from "@/data/projetos";
import ProjetoDetalhes from "./ProjetoDetalhes";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) return { title: "Projeto não encontrado" };

  return { title: projeto.titulo, description: projeto.resumo };
}

function ProjetoSkeleton() {
  return (
    <div className="mt-6 animate-pulse space-y-4">
      <div className="h-9 w-2/3 rounded bg-black/5" />
      <div className="h-5 w-full rounded bg-black/5" />
      <div className="h-5 w-5/6 rounded bg-black/5" />
    </div>
  );
}

export default function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projetos"
        className="text-sm font-bold text-azul hover:underline"
      >
        ← Voltar aos projetos
      </Link>

      <Suspense fallback={<ProjetoSkeleton />}>
        <ProjetoDetalhes params={params} />
      </Suspense>
    </main>
  );
}
