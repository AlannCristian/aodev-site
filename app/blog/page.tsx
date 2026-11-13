import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Trabalhos e estudos de desenvolvimento do Alann Oliveira.",
};

export default function Blog() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-marinho">Blog</h1>{" "}
      {<p className="mt-4 text-grafite">Blog</p>}
    </main>
  );
}
