'use client';

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="relative border-t border-creme/8 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-texto-suave md:flex-row">
        <span className="font-mono">
          © {ano} Gabriel de Sousa. Feito com cuidado.
        </span>
        <span className="font-mono">
          desenhado e codado em <span className="text-laranja">são paulo</span>
        </span>
      </div>
    </footer>
  );
}
