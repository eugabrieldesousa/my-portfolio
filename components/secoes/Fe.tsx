'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { versiculos } from '@/data/versiculos';

const easing = [0.22, 1, 0.36, 1] as const;

export default function Fe() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % versiculos.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const v = versiculos[i];

  return (
    <section
      id="fe"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,122,26,0.18) 0%, transparent 60%)'
        }}
      />

      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80"
        >
          fé · cristão
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easing }}
          className="mt-5 font-serif text-creme tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
        >
          antes de tudo, <span className="italic text-laranja">fé</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: easing }}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-texto-suave md:text-base"
        >
          Sou cristão evangélico. É de onde vem o meu propósito e a calma pra
          construir as coisas com cuidado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: easing }}
          className="relative mx-auto mt-12 max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-creme/10 bg-fundo-2/60 p-8 backdrop-blur-md sm:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,122,26,0.7), transparent 70%)'
              }}
            />

            <div className="absolute left-6 top-6 font-serif text-7xl leading-none text-laranja/30">
              “
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: easing }}
                className="relative pt-6 text-center"
              >
                <p
                  className="font-serif italic text-creme"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                    lineHeight: 1.4
                  }}
                >
                  {v.texto}
                </p>
                <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-laranja">
                  — {v.ref}
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-1.5">
              {versiculos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`versículo ${idx + 1}`}
                  className="group h-1 rounded-full transition-all"
                  style={{
                    width: idx === i ? 24 : 6,
                    background:
                      idx === i
                        ? 'linear-gradient(90deg, #FF7A1A, #FF6B5B)'
                        : 'rgba(248,230,208,0.2)'
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
