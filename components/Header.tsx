import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="AO Dev" width={44} height={32} />
          <span className="font-mono font-bold text-marinho">Dev_</span>
        </Link>

        <ul className="flex gap-6 text-sm font-medium text-grafite">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-azul">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
