"use client";

import { useState } from "react";
import { contato } from "@/data/contato";

const tipos = [
  "Site institucional",
  "Loja virtual",
  "Sistema ou aplicativo",
  "Outro",
];

const campo =
  "mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-marinho focus:border-azul focus:outline-none focus:ring-2 focus:ring-azul/30";

export default function FormularioOrcamento() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(tipos[0]);
  const [mensagem, setMensagem] = useState("");

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const texto = `Olá, Alann! Meu nome é ${nome}.\nTenho interesse em: ${tipo}.\n\n${mensagem}`;
    const url = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={enviar}
      className="space-y-5 rounded-2xl border border-black/10 bg-white p-6"
    >
      <div>
        <label htmlFor="nome" className="text-sm font-bold text-marinho">
          Seu nome
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="tipo" className="text-sm font-bold text-marinho">
          O que você precisa?
        </label>
        <select
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={campo}
        >
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="text-sm font-bold text-marinho">
          Conte um pouco sobre o projeto
        </label>
        <textarea
          id="mensagem"
          required
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className={campo}
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-azul px-6 py-3 font-bold text-white hover:opacity-90"
      >
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
