'use client';

import { motion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1] as const;

const sociais = [
  { label: 'Email', href: 'mailto:eugabrieldesousa@gmail.com', valor: 'eugabrieldesousa@gmail.com' },
  { label: 'GitHub', href: 'https://github.com', valor: '@gabriel' },
  { label: 'LinkedIn', href: 'https://linkedin.com', valor: 'in/gabriel' },
  { label: 'Twitter', href: 'https://twitter.com', valor: '@gabriel' }
];

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-40"
    >
      <div
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,122,26,0.25) 0%, rgba(255,107,91,0.08) 35%, transparent 70%)'
        }}
      />

      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80"
        >
          próximo capítulo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: easing }}
          className="mt-6 font-serif text-creme tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1 }}
        >
          vamos criar
          <br />
          algo <span className="italic bg-gradiente-quente bg-clip-text text-transparent">memorável</span>.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: easing }}
          href="mailto:eugabrieldesousa@gmail.com"
          className="mt-12 inline-block font-serif text-2xl text-creme underline decoration-laranja/40 decoration-2 underline-offset-8 transition-all hover:decoration-laranja md:text-4xl"
        >
          eugabrieldesousa@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {sociais.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-creme/10 bg-creme/[0.02] px-5 py-2.5 text-sm text-texto-suave backdrop-blur transition-all hover:border-laranja/40 hover:text-creme"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-laranja/80">
                {s.label}
              </span>
              <span className="text-creme/80 group-hover:text-creme">
                {s.valor}
              </span>
              <span className="opacity-50 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
