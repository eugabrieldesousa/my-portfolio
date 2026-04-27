'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent, useEffect, useState } from 'react';
import FundoVisual from './FundoVisual';
import Particulas from './efeitos/Particulas';
import TextoBrilhante from './efeitos/TextoBrilhante';
import Orbita3D from './efeitos/Orbita3D';
import { fotosOrbitaInterna, fotosOrbitaExterna } from '@/data/fotos';

const easing = [0.22, 1, 0.36, 1] as const;

const palavrasMarquee = [
  'design system',
  'motion design',
  'tipografia',
  'next.js',
  'react',
  'framer motion',
  'tailwind',
  'produto',
  'identidade',
  'detalhe'
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 120,
    damping: 22
  });
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 120,
    damping: 22
  });

  const [hora, setHora] = useState('');
  const [larguraJanela, setLarguraJanela] = useState(1280);

  useEffect(() => {
    const onResize = () => setLarguraJanela(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const escala = Math.min(1, larguraJanela / 1280);

  useEffect(() => {
    const tick = () => {
      setHora(
        new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'America/Sao_Paulo'
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="topo"
      onMouseMove={onMouseMove}
      className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden"
    >
      <FundoVisual />
      <div className="absolute inset-0 -z-[5]">
        <Particulas />
      </div>

      <div
        className="absolute inset-x-0 top-0 -z-[6] h-full opacity-50"
        style={{
          backgroundImage:
            'conic-gradient(from 90deg at 50% 100%, rgba(255,122,26,0.18), transparent 30%, rgba(255,107,91,0.18) 60%, transparent 80%, rgba(244,168,176,0.18))',
          maskImage:
            'radial-gradient(ellipse at 50% 90%, black 10%, transparent 70%)'
        }}
      />

      <div
        className="relative z-10 flex flex-1 items-center justify-center px-5 pt-24 pb-4 sm:px-6 sm:pt-28"
        style={{ perspective: 1400 }}
      >
        <div className="absolute inset-0 z-0">
          <Orbita3D
            itens={fotosOrbitaExterna}
            raioX={520 * escala}
            raioY={180 * escala}
            duracao={32}
            inclinacao={68}
            tamanho={Math.max(44, 58 * escala)}
          />
          <Orbita3D
            itens={fotosOrbitaInterna}
            raioX={360 * escala}
            raioY={130 * escala}
            duracao={22}
            inclinacao={70}
            reverso
            tamanho={Math.max(54, 72 * escala)}
            delay={0.4}
          />
          {larguraJanela >= 1024 && (
            <Orbita3D
              itens={fotosOrbitaExterna.slice(0, 4)}
              raioX={680 * escala}
              raioY={230 * escala}
              duracao={45}
              inclinacao={66}
              tamanho={Math.max(38, 46 * escala)}
              delay={1}
            />
          )}
        </div>

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,122,26,0.4) 0%, rgba(255,107,91,0.12) 45%, transparent 70%)'
          }}
        />

        <motion.div
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
          className="relative z-20 mx-auto flex w-full max-w-[min(92vw,720px)] flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="mb-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-texto-suave sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-creme/10 bg-fundo/70 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-laranja opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-laranja" />
              </span>
              disponível
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-creme/10 bg-fundo/70 px-3 py-1.5 backdrop-blur">
              <span className="text-laranja">▣</span> são paulo
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-creme/10 bg-fundo/70 px-3 py-1.5 tabular-nums backdrop-blur">
              <span className="text-laranja">◴</span> {hora || '--:--'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easing }}
            className="font-serif tracking-tight text-creme"
            style={{
              fontSize: 'clamp(2.2rem, 7.5vw, 5.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em'
            }}
          >
            interfaces que{' '}
            <span className="italic">
              <TextoBrilhante texto="respiram," />
            </span>
            <br />
            experiências que{' '}
            <span className="italic">
              <TextoBrilhante texto="ficam." />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: easing }}
            className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-texto-suave sm:mt-6 sm:text-base"
          >
            Sou Gabriel — desenho e construo produtos digitais com identidade
            forte, movimento sutil e atenção obsessiva ao detalhe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easing }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row"
          >
            <a
              href="#projetos"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradiente-quente px-7 py-3.5 text-sm font-medium text-fundo shadow-[0_10px_40px_-10px_rgba(255,122,26,0.7)] transition-shadow hover:shadow-[0_14px_50px_-10px_rgba(255,122,26,0.9)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <span className="relative">ver projetos</span>
              <span className="relative transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-creme/15 bg-fundo/50 px-7 py-3.5 text-sm font-medium text-creme backdrop-blur transition-all hover:border-laranja/40 hover:bg-creme/[0.05]"
            >
              entrar em contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: easing }}
            className="mt-7 grid w-full max-w-md grid-cols-3 gap-2 sm:mt-9 sm:gap-3"
          >
            {[
              { num: '5+', rotulo: 'anos' },
              { num: '40+', rotulo: 'projetos' },
              { num: '12', rotulo: 'clientes' }
            ].map((s) => (
              <div
                key={s.rotulo}
                className="rounded-xl border border-creme/8 bg-fundo/60 px-2 py-2.5 text-center backdrop-blur sm:rounded-2xl sm:py-3"
              >
                <div className="font-serif text-2xl text-creme sm:text-3xl">
                  {s.num}
                </div>
                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-texto-suave sm:text-[10px]">
                  {s.rotulo}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full overflow-hidden border-y border-creme/8 bg-fundo/60 py-2.5 backdrop-blur sm:py-3">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="flex w-max gap-10 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-texto-suave sm:text-xs"
        >
          {[...palavrasMarquee, ...palavrasMarquee].map((p, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-laranja">✦</span>
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
