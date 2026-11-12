import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-6 bg-gelo p-8 py-24">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="Logo AO Dev"
          width={120}
          height={88}
          priority
        />
        <span className="font-mono text-5xl font-bold text-azul">Dev_</span>
      </div>
      <h1 className="text-3xl font-extrabold text-marinho">
        Olá, eu sou o Alann
      </h1>
      <p className="text-grafite">Desenvolvedor. Portfólio em construção.</p>
      <a
        href="#"
        className="rounded-lg bg-azul px-6 py-3 font-bold text-white hover:opacity-90"
      >
        Pedir orçamento
      </a>
    </main>
  );
}
