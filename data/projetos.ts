export type Projeto = {
  slug: string;
  titulo: string;
  resumo: string;
  problema: string;
  solucao: string;
  resultado: string;
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
    problema:
      "Eu precisava de um lugar para mostrar meus projetos e receber pedidos de orçamento, sem depender de redes sociais.",
    solucao:
      "Criei o site do zero com Next.js, Tailwind e uma identidade visual própria. Os projetos ficam em um arquivo de dados, então publicar um novo é só adicionar um item.",
    resultado:
      "Site no ar, com marca definida, páginas organizadas e código versionado no GitHub.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Em andamento",
    repositorio: "https://github.com/AlannCristian/aodev-site",
  },
];
