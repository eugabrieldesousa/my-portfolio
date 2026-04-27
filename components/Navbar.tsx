'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '#sobre', label: 'sobre' },
  { href: '#fe', label: 'vida' },
  { href: '#projetos', label: 'projetos' },
  { href: '#construcao', label: 'lab' },
  { href: '#contato', label: 'contato' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
      >
        <div
          className={`flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'border-creme/15 bg-fundo/75 shadow-[0_8px_40px_-12px_rgba(255,122,26,0.35)]'
              : 'border-creme/10 bg-fundo/40'
          }`}
        >
          <a
            href="#topo"
            className="font-serif text-base italic tracking-tight text-creme sm:text-lg"
          >
            gabriel<span className="text-laranja">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-texto-suave transition-colors hover:text-creme"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="hidden rounded-full bg-creme/95 px-4 py-1.5 text-xs font-medium text-fundo transition-transform hover:scale-[1.04] md:inline-block"
          >
            falar comigo
          </a>

          <button
            type="button"
            aria-label="abrir menu"
            onClick={() => setAberto((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-creme/10 text-creme md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-creme transition-all ${
                  aberto ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-creme transition-opacity ${
                  aberto ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-creme transition-all ${
                  aberto ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{
          opacity: aberto ? 1 : 0,
          pointerEvents: aberto ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-4 top-20 z-40 md:hidden"
      >
        <div className="rounded-3xl border border-creme/10 bg-fundo/90 p-3 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-creme transition-colors hover:bg-creme/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setAberto(false)}
                className="mt-2 block rounded-2xl bg-gradiente-quente px-4 py-3 text-center text-sm font-medium text-fundo"
              >
                falar comigo
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
