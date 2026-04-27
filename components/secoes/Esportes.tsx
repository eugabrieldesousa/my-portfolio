'use client';

import { motion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1] as const;

const esportes = [
  { nome: 'futebol', icone: '⚽', cor: '#FF7A1A', destaque: true },
  { nome: 'tênis de mesa', icone: '🏓', cor: '#FF6B5B', destaque: true },
  { nome: 'basquete', icone: '🏀', cor: '#F5A24B' },
  { nome: 'corrida', icone: '🏃', cor: '#F4A8B0' },
  { nome: 'natação', icone: '🏊', cor: '#FF7A1A' },
  { nome: 'vôlei', icone: '🏐', cor: '#F5A24B' }
];

export default function Esportes() {
  return (
    <section
      id="esportes"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80">
            movimento
          </span>
          <h2
            className="mt-5 font-serif text-creme tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
          >
            e quando saio da tela:{' '}
            <span className="italic text-laranja">esporte</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-suave md:text-lg">
            Futebol e tênis de mesa são paixão antiga. O resto entra na rotina
            quando dá — corpo em movimento, cabeça leve.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {esportes.map((e, i) => (
            <motion.div
              key={e.nome}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: easing
              }}
              className={`group relative flex items-center gap-3 rounded-full border bg-fundo-2/60 px-5 py-3 backdrop-blur transition-colors ${
                e.destaque
                  ? 'border-laranja/30'
                  : 'border-creme/10 hover:border-creme/20'
              }`}
            >
              {e.destaque && (
                <div
                  className="absolute -inset-px rounded-full opacity-0 blur transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, #FF7A1A, #FF6B5B, #F4A8B0)'
                  }}
                />
              )}
              <span className="relative text-2xl">{e.icone}</span>
              <span className="relative font-mono text-xs uppercase tracking-wider text-creme">
                {e.nome}
              </span>
              {e.destaque && (
                <span className="relative rounded-full bg-laranja/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-laranja">
                  favorito
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
