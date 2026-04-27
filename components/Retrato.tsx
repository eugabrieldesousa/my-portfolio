'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

const easing = [0.22, 1, 0.36, 1] as const;

export default function Retrato() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 22
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 180,
    damping: 22
  });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="retrato" className="relative px-5 py-20 sm:px-6 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easing }}
          className="order-2 md:order-1"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80">
            quem está por trás
          </span>
          <h2
            className="mt-5 font-serif text-creme tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
          >
            olá, sou o <span className="italic text-laranja">Gabriel</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-texto-suave md:text-lg">
            Trabalho com produto desde 2019. Acredito que software bom é como
            tipografia boa: invisível quando funciona, inesquecível quando
            encanta.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            {[
              { rotulo: 'baseado em', valor: 'são paulo' },
              { rotulo: 'foco atual', valor: 'frontend & motion' },
              { rotulo: 'falo', valor: 'pt · en · es' },
              { rotulo: 'idade', valor: '24 anos' }
            ].map((info) => (
              <li
                key={info.rotulo}
                className="rounded-2xl border border-creme/8 bg-creme/[0.02] p-4 backdrop-blur"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-laranja/70">
                  {info.rotulo}
                </div>
                <div className="mt-1 text-sm text-creme">{info.valor}</div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: easing }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ perspective: 1000 }}
          className="order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md"
        >
          <motion.div
            style={{
              rotateX: rx,
              rotateY: ry,
              transformStyle: 'preserve-3d'
            }}
            className="relative aspect-[4/5] w-full"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradiente-quente opacity-40 blur-3xl" />
            <div className="absolute -inset-1 -z-[5] rounded-[2rem] bg-gradiente-quente opacity-80" />

            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-creme/10 bg-fundo-2">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, #FF7A1A 0%, #FF6B5B 35%, #F4A8B0 70%, #F5A24B 100%)'
                }}
              />
              <div
                className="absolute inset-0 mix-blend-overlay"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 50%), radial-gradient(circle at 75% 80%, rgba(0,0,0,0.5), transparent 55%)'
                }}
              />

              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="font-serif text-[clamp(5rem,18vw,9rem)] italic leading-none text-fundo/80 mix-blend-overlay">
                  G.
                </div>
              </div>

              <div className="absolute left-4 top-4 rounded-full border border-fundo/20 bg-fundo/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-creme backdrop-blur">
                gabriel · 2026
              </div>
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-fundo/20 bg-fundo/30 backdrop-blur">
                <span className="h-2 w-2 animate-pulso-suave rounded-full bg-creme" />
              </div>

              <div className="grao" />

              <div className="absolute bottom-0 left-0 right-0 border-t border-fundo/15 bg-fundo/40 px-5 py-3 backdrop-blur">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-creme">
                  <span>retrato</span>
                  <span>—</span>
                  <span>real soon</span>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 rounded-[2rem] gira-suave opacity-50"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 70%, rgba(255,122,26,0.6) 85%, transparent 100%)',
                mask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: 1
              }}
            />
          </motion.div>

          <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-texto-suave">
            <span>↳ substitua por sua foto em /public</span>
            <span className="text-laranja">●</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
