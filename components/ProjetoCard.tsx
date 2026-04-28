'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Projeto } from '@/data/projetos';

const easing = [0.22, 1, 0.36, 1] as const;

type Props = {
  projeto: Projeto;
  indice: number;
};

export default function ProjetoCard({ projeto, indice }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (indice % 3) * 0.08, ease: easing }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-creme/8 bg-fundo-2/50 backdrop-blur-sm transition-colors hover:border-laranja/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {projeto.imagem ? (
          <Image
            src={projeto.imagem}
            alt={projeto.titulo}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${projeto.gradiente} transition-transform duration-700 group-hover:scale-110`}
          />
        )}
        <div
          className="absolute inset-0 opacity-50 mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 50%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fundo/80 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-creme/80">
          {String(indice + 1).padStart(2, '0')} / projeto
        </div>

        {projeto.destaque && (
          <div className="absolute right-5 top-5 rounded-full border border-creme/30 bg-fundo/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-creme backdrop-blur">
            destaque
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <h3 className="font-serif text-2xl text-creme md:text-3xl">
          {projeto.titulo}
        </h3>
        <p className="text-sm leading-relaxed text-texto-suave">
          {projeto.descricao}
        </p>

        <ul className="mt-1 flex flex-wrap gap-1.5">
          {projeto.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-creme/10 px-2.5 py-0.5 font-mono text-[10px] text-texto-suave"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center gap-4 border-t border-creme/8 pt-4">
          {projeto.links.demo && (
            <a
              href={projeto.links.demo}
              className="inline-flex items-center gap-1.5 text-sm text-creme transition-colors hover:text-laranja"
            >
              demo <span aria-hidden>↗</span>
            </a>
          )}
          {projeto.links.repo && (
            <a
              href={projeto.links.repo}
              className="inline-flex items-center gap-1.5 text-sm text-texto-suave transition-colors hover:text-laranja"
            >
              repositório <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-8 -bottom-10 h-20 rounded-full bg-laranja/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
