'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  texto: string;
  className?: string;
  delay?: number;
  duracao?: number;
  como?: 'span' | 'h1' | 'h2';
  destaque?: (palavra: string, indice: number) => ReactNode;
};

export default function TextoRevelado({
  texto,
  className = '',
  delay = 0,
  duracao = 0.8,
  como = 'span',
  destaque
}: Props) {
  const palavras = texto.split(' ');
  const Tag = motion[como];

  return (
    <Tag
      initial="oculto"
      animate="visivel"
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      className={className}
    >
      {palavras.map((palavra, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] pr-[0.25em] align-bottom">
          <motion.span
            variants={{
              oculto: { y: '110%', opacity: 0, rotate: 4 },
              visivel: { y: '0%', opacity: 1, rotate: 0 }
            }}
            transition={{ duration: duracao, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {destaque ? destaque(palavra, i) : palavra}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
