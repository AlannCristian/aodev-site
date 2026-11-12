import FormularioOrcamento from "@/components/FormularioOrcamento";
import { contato } from "@/data/contato";

export default function Contato() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-marinho">Contato</h1>
      <p className="mt-2 max-w-2xl text-grafite">
        Quer um site, um sistema ou só tirar uma dúvida? Me chame pelo canal que
        for mais confortável para você.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <a
            href={`https://wa.me/${contato.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-md"
          >
            <p className="font-mono text-xs text-grafite">WHATSAPP</p>
            <p className="mt-1 font-bold text-marinho">Conversar agora</p>
          </a>

          <a
            href={`mailto:${contato.email}`}
            className="block rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-md"
          >
            <p className="font-mono text-xs text-grafite">E-MAIL</p>
            <p className="mt-1 break-all font-bold text-marinho">
              {contato.email}
            </p>
          </a>

          <a
            href={contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-md"
          >
            <p className="font-mono text-xs text-grafite">LINKEDIN</p>
            <p className="mt-1 font-bold text-marinho">Ver meu perfil</p>
          </a>
        </div>

        <div className="md:col-span-3">
          <h2 className="mb-4 text-xl font-extrabold text-marinho">
            Pedir orçamento
          </h2>
          <FormularioOrcamento />
        </div>
      </div>
    </main>
  );
}
