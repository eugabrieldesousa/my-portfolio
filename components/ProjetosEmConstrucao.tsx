'use client';

import { motion } from 'framer-motion';
import { projetosEmConstrucao } from '@/data/projetos';
import Secao from './Secao';

const easing = [0.22, 1, 0.36, 1] as const;

export default function ProjetosEmConstrucao() {
  return (
    <Secao
      id="construcao"
      eyebrow="laboratório"
      titulo={
        <>
          Em <span className="italic text-laranja">construção</span> agora.
        </>
      }
      descricao="Experimentos e produtos em desenvolvimento ativo. Espreite por trás da cortina."
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {projetosEmConstrucao.map((projeto, i) => (
          <motion.article
            key={projeto.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: easing }}
            className="group relative overflow-hidden rounded-2xl border border-creme/8 bg-fundo-2/50 p-6 backdrop-blur-sm md:p-8"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,122,26,0.06) 0 12px, transparent 12px 28px)'
              }}
            />

            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${projeto.gradiente} opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-50`}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-laranja opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-laranja" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-laranja">
                  em construção
                </span>
              </div>

              <h3 className="mt-5 font-serif text-3xl text-creme md:text-4xl">
                {projeto.titulo}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-texto-suave">
                {projeto.descricao}
              </p>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {projeto.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-creme/10 px-2.5 py-0.5 font-mono text-[10px] text-texto-suave"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-creme/5">
                <motion.div
                  initial={{ width: '10%' }}
                  whileInView={{ width: `${30 + i * 25}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: easing }}
                  className="h-full rounded-full bg-gradiente-quente"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Secao>
  );
}
