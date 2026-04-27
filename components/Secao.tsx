'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow?: string;
  titulo: ReactNode;
  descricao?: ReactNode;
  children: ReactNode;
  alinhamento?: 'esquerda' | 'centro';
};

const easing = [0.22, 1, 0.36, 1] as const;

export default function Secao({
  id,
  eyebrow,
  titulo,
  descricao,
  children,
  alinhamento = 'esquerda'
}: Props) {
  const align =
    alinhamento === 'centro' ? 'text-center items-center' : 'text-left items-start';

  return (
    <section id={id} className="relative px-5 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className={`flex flex-col gap-4 ${align}`}
        >
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-laranja/80">
              {eyebrow}
            </span>
          )}
          <h2
            className="font-serif text-creme tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}
          >
            {titulo}
          </h2>
          {descricao && (
            <p className="max-w-2xl text-base leading-relaxed text-texto-suave md:text-lg">
              {descricao}
            </p>
          )}
        </motion.div>

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
