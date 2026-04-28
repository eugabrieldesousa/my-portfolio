'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const easing = [0.22, 1, 0.36, 1] as const;

const teclas = [
  { nota: 'C', freq: 261.63, preta: false },
  { nota: 'C#', freq: 277.18, preta: true },
  { nota: 'D', freq: 293.66, preta: false },
  { nota: 'D#', freq: 311.13, preta: true },
  { nota: 'E', freq: 329.63, preta: false },
  { nota: 'F', freq: 349.23, preta: false },
  { nota: 'F#', freq: 369.99, preta: true },
  { nota: 'G', freq: 392.0, preta: false },
  { nota: 'G#', freq: 415.3, preta: true },
  { nota: 'A', freq: 440.0, preta: false },
  { nota: 'A#', freq: 466.16, preta: true },
  { nota: 'B', freq: 493.88, preta: false },
  { nota: 'C2', freq: 523.25, preta: false }
];

export default function Musica() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [tocando, setTocando] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      ctxRef.current?.close();
    };
  }, []);

  const tocar = (freq: number, indice: number) => {
    if (typeof window === 'undefined') return;
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctxRef.current = new Ctor();
    }
    const ctx = ctxRef.current!;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;

    const agora = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, agora);
    gain.gain.exponentialRampToValueAtTime(0.18, agora + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, agora + 1.4);

    osc.connect(gain).connect(ctx.destination);
    osc.start(agora);
    osc.stop(agora + 1.5);

    setTocando(indice);
    setTimeout(() => setTocando((v) => (v === indice ? null : v)), 200);
  };

  const teclasBrancas = teclas.filter((t) => !t.preta);

  return (
    <section
      id="musica"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easing }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-laranja/80">
            música · piano
          </span>
          <h2
            className="mt-5 font-serif text-creme tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
          >
            também sou{' '}
            <span className="italic text-laranja">músico</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-texto-suave md:text-lg">
            Toco piano, escrevo arranjos e gravo teclado e synth para músicas.
            Dou aulas particulares ensino do absoluto iniciante ao
            intermediário avançado.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {[
              'piano clássico',
              'arranjo',
              'gravação',
              'synth',
              'teoria',
              'aulas 1-1'
            ].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-creme/10 bg-creme/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-texto-suave"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-md font-mono text-[11px] uppercase tracking-[0.2em] text-texto-suave">
            ↓ toque o teclado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: easing }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradiente-quente opacity-30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-creme/10 bg-fundo-2/80 p-5 backdrop-blur sm:p-7">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-coral" />
                <span className="h-2 w-2 rounded-full bg-ambar" />
                <span className="h-2 w-2 rounded-full bg-laranja" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-texto-suave">
                gabriel · piano
              </span>
            </div>

            <div className="relative h-44 sm:h-52">
              <div className="absolute inset-0 flex">
                {teclasBrancas.map((t) => {
                  const i = teclas.indexOf(t);
                  const ativa = tocando === i;
                  return (
                    <button
                      key={t.nota}
                      onClick={() => tocar(t.freq, i)}
                      onMouseEnter={(e) => {
                        if (e.buttons === 1) tocar(t.freq, i);
                      }}
                      className="group relative flex flex-1 items-end justify-center rounded-b-xl border-r border-fundo/40 bg-creme pb-2 transition-colors last:border-r-0"
                      style={{
                        background: ativa
                          ? 'linear-gradient(180deg, #FFD9B8, #FF7A1A)'
                          : undefined
                      }}
                    >
                      <span className="font-mono text-[9px] uppercase tracking-wider text-fundo/40 transition-opacity group-hover:opacity-100 sm:text-[10px]">
                        {t.nota}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-0 flex">
                {teclasBrancas.map((tb, idx) => {
                  const i = teclas.indexOf(tb);
                  const proxima = teclas[i + 1];
                  if (!proxima || !proxima.preta) {
                    return <div key={idx} className="flex-1" />;
                  }
                  const indicePreta = i + 1;
                  const ativa = tocando === indicePreta;
                  return (
                    <div
                      key={idx}
                      className="relative flex-1"
                    >
                      <button
                        onClick={() => tocar(proxima.freq, indicePreta)}
                        onMouseEnter={(e) => {
                          if (e.buttons === 1)
                            tocar(proxima.freq, indicePreta);
                        }}
                        className="pointer-events-auto absolute -right-[18%] top-0 z-10 h-[60%] w-[36%] rounded-b-lg border border-fundo bg-fundo shadow-lg transition-colors"
                        style={{
                          background: ativa
                            ? 'linear-gradient(180deg, #FF7A1A, #2A1610)'
                            : undefined
                        }}
                      >
                        <span className="sr-only">{proxima.nota}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-creme/8 pt-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-texto-suave">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full bg-laranja ${
                      tocando !== null ? 'animate-ping' : ''
                    }`}
                  />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-laranja" />
                </span>
                {tocando !== null
                  ? `tocando · ${teclas[tocando].nota}`
                  : 'pronto'}
              </div>
              <span className="font-serif text-xs italic text-texto-suave">
                C maior · 13 teclas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
