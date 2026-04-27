'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import Secao from './Secao';

const easing = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <Secao
      id="skills"
      eyebrow="caixa de ferramentas"
      titulo={
        <>
          O que uso para <span className="italic text-laranja">construir</span>.
        </>
      }
      descricao="Stack moderna, escolhida com critério. Cada ferramenta resolve um problema real."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((grupo, i) => (
          <motion.div
            key={grupo.categoria}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: easing }}
            className="group relative overflow-hidden rounded-2xl border border-creme/8 bg-fundo-2/60 p-6 backdrop-blur-sm transition-all hover:border-laranja/30"
          >
            <div className="absolute inset-x-0 -bottom-20 h-20 bg-gradient-to-t from-laranja/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-laranja/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-serif text-2xl text-creme">
                {grupo.categoria}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-creme/10 bg-creme/[0.02] px-3 py-1 text-xs text-texto-suave transition-colors group-hover:border-creme/20 group-hover:text-creme"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Secao>
  );
}
