'use client';

import { motion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1] as const;

export default function Sobre() {
  return (
    <section id="sobre" className="relative px-5 py-20 sm:px-6 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex md:flex-col md:gap-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80">
            sobre
          </span>
          <div className="ml-6 h-px w-24 self-center bg-gradient-to-r from-laranja/60 to-transparent md:ml-0 md:mt-2 md:h-24 md:w-px md:bg-gradient-to-b" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easing }}
          className="space-y-6"
        >
          <p
            className="font-serif text-creme"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.25 }}
          >
            Trabalho na fronteira entre{' '}
            <span className="italic text-laranja">design</span> e{' '}
            <span className="italic text-coral">engenharia</span>, criando
            produtos onde forma e função se reforçam.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-texto-suave md:text-lg">
            Tenho cinco anos construindo interfaces para startups, estúdios e
            marcas que se importam com cada detalhe — da grade tipográfica ao
            ritmo de uma transição.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
