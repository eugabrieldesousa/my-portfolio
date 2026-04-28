'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const easing = [0.22, 1, 0.36, 1] as const;

const conquistas = [
  { titulo: 'primeiro console', valor: 'PS2', ano: '2010/11' },
  { titulo: 'gênero favorito', valor: 'rogue-like', ano: '∞' },
  { titulo: 'plataforma atual', valor: 'Switch', ano: 'agora' },
  { titulo: 'horas jogadas', valor: '∞', ano: 'lifetime' }
];

export default function Games() {
  return (
    <section
      id="games"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80">
            games · desde 2010
          </span>
          <h2
            className="mt-5 font-serif text-creme tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
          >
            cresci com um <span className="italic text-laranja">teclado/controle</span>{' '}
            na mão.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-suave md:text-lg">
            Jogo desde criança. É de onde vem boa parte do meu repertório
            visual narrativa, ritmo, design de interface, atenção aos
            detalhes mínimos.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: easing }}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-creme/10 bg-fundo-2"
          >
            <Image
              src="/crianca-1.jpeg"
              alt="Gabriel criança jogando"
              fill
              className="object-cover"
              priority
            />
            <div className="grao" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-[clamp(4rem,10vw,7rem)] italic leading-none text-fundo/70 mix-blend-overlay">
                  insert
                </div>
                <div className="font-serif text-[clamp(2.5rem,6vw,4rem)] italic leading-none text-fundo/70 mix-blend-overlay">
                  coin
                </div>
              </div>
            </div>



            <div className="absolute bottom-0 left-0 right-0 border-t border-fundo/20 bg-fundo/60 px-5 py-3 backdrop-blur">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-creme">
                <span>player 1</span>
                <span className="text-laranja animate-pulso-suave">●</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {conquistas.map((c, i) => (
              <motion.div
                key={c.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: easing
                }}
                className="rounded-2xl border border-creme/10 bg-fundo-2/60 p-5 backdrop-blur"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-laranja/70">
                  {c.titulo}
                </div>
                <div className="mt-3 font-serif text-2xl text-creme sm:text-3xl">
                  {c.valor}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-texto-suave">
                  {c.ano}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
