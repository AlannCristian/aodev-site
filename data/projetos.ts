export type Projeto = {
  slug: string;
  titulo: string;
  resumo: string;
  tecnologias: string[];
  status: "Em andamento" | "Concluído";
  repositorio?: string;
  demo?: string;
};

export const projetos: Projeto[] = [
  {
    slug: "aodev-site",
    titulo: "AO Dev: este site",
    resumo:
      "Portfólio pessoal criado do zero, com identidade visual própria, menu, rodapé e página de projetos.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Em andamento",
    repositorio: "https://github.com/AlannCristian/aodev-site",
  },
];
