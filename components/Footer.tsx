import { cacheLife } from "next/cache";

async function getAnoAtual() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const ano = await getAnoAtual();

  return (
    <footer className="bg-marinho text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
        <p>© {ano} Alann Oliveira · AO Dev</p>
        <div className="flex gap-6 font-mono">
          <a
            href="https://github.com/AlannCristian"
            className="hover:text-menta"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alann-oliveira"
            className="hover:text-menta"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
