'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const easing = [0.22, 1, 0.36, 1] as const;

export default function Amor() {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas[0].isIntersecting) {
          setTimeout(() => setProgresso(43), 300);
        }
      },
      { threshold: 0.4 }
    );
    const el = document.getElementById('amor');
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="amor"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(244,168,176,0.2) 0%, transparent 60%)'
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-rosa"
        >
          amor · vida real
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easing }}
          className="mt-5 font-serif text-creme tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
        >
          e na companhia, a melhor{' '}
          <span className="italic text-coral">co-autora</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: easing }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-suave md:text-lg"
        >
          Amo minha namorada futura esposa. Tudo que faço aqui, faço melhor por
          causa dela.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: easing }}
          className="mx-auto mt-12 max-w-xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-creme/10 bg-fundo-2/70 p-6 backdrop-blur sm:p-8">
            <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em]">
              <div className="flex items-center gap-2 text-laranja">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-laranja opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-laranja" />
                </span>
                atualizando…
              </div>
              <span className="text-texto-suave">v.2.0 em breve</span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex flex-1 items-baseline gap-2">
                <span
                  className="font-serif italic line-through decoration-creme/30"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                >
                  namorada
                </span>
                <span className="font-mono text-laranja">→</span>
                <span
                  className="font-serif italic bg-gradiente-quente bg-clip-text text-transparent"
                  style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
                >
                  esposa
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-texto-suave">
                <span>progresso</span>
                <span className="text-creme">{progresso}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-creme/8">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progresso}%` }}
                  transition={{ duration: 1.6, ease: easing }}
                  className="h-full rounded-full bg-gradiente-quente"
                  style={{
                    boxShadow: '0 0 20px rgba(255,122,26,0.6)'
                  }}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider">
              {[
                { rotulo: 'pedido', estado: 'a fazer', ok: true },
                { rotulo: 'casamento', estado: 'a fazer', ok: true },
                { rotulo: 'eternidade', estado: 'para toda', ok: false }
              ].map((item) => (
                <div
                  key={item.rotulo}
                  className="rounded-xl border border-creme/8 bg-creme/[0.02] p-3"
                >
                  <div className="text-laranja/70">{item.rotulo}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-creme">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.ok ? 'bg-laranja' : 'bg-rosa animate-pulso-suave'
                      }`}
                    />
                    {item.estado}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
