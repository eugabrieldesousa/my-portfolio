'use client';

import { useEffect, useRef } from 'react';

export type ItemOrbita3D = {
  src?: string;
  iniciais?: string;
  rotulo?: string;
  cor?: string;
};

type Props = {
  itens: ItemOrbita3D[];
  raioX: number;
  raioY: number;
  duracao: number;
  inclinacao?: number;
  reverso?: boolean;
  tamanho?: number;
  delay?: number;
};

export default function Orbita3D({
  itens,
  raioX,
  raioY,
  duracao,
  inclinacao = 65,
  reverso = false,
  tamanho = 70,
  delay = 0
}: Props) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const inicio = performance.now() - delay * 1000;
    const direcao = reverso ? -1 : 1;
    const passo = (Math.PI * 2) / itens.length;
    const omega = (Math.PI * 2) / duracao;
    let raf = 0;

    const tick = (t: number) => {
      const tempo = (t - inicio) / 1000;
      for (let i = 0; i < itens.length; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const angulo = direcao * (tempo * omega) + passo * i;
        const cos = Math.cos(angulo);
        const sin = Math.sin(angulo);
        const x = cos * raioX;
        const y = sin * raioY;
        const profundidade = sin;
        const atras = profundidade < 0;
        const escala = 0.65 + (profundidade + 1) * 0.27;
        const opacidade = atras
          ? 0.18 + (profundidade + 1) * 0.22
          : 0.7 + profundidade * 0.3;

        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(-${inclinacao}deg) scale(${escala})`;
        el.style.opacity = String(opacidade);
        el.style.zIndex = String(Math.round(profundidade * 100));
        el.style.filter = atras
          ? `blur(${Math.abs(profundidade) * 2.5}px) saturate(0.7)`
          : '';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [itens, raioX, raioY, duracao, inclinacao, reverso, delay]);

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: 0,
        height: 0,
        transform: `translate(-50%, -50%) rotateX(${inclinacao}deg)`,
        transformStyle: 'preserve-3d'
      }}
      aria-hidden
    >
      <div
        className="absolute rounded-full border border-dashed border-creme/10"
        style={{
          width: raioX * 2,
          height: raioY * 2,
          left: -raioX,
          top: -raioY
        }}
      />

      {itens.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="absolute will-change-transform"
          style={{
            width: tamanho,
            height: tamanho,
            left: -tamanho / 2,
            top: -tamanho / 2
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-full border border-creme/15 bg-fundo-2"
            style={{
              boxShadow: '0 10px 25px -6px rgba(255,122,26,0.4)'
            }}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.rotulo || ''}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center font-serif italic text-fundo"
                style={{
                  background:
                    item.cor ||
                    'linear-gradient(135deg, #FF7A1A, #FF6B5B, #F4A8B0)',
                  fontSize: tamanho * 0.42
                }}
              >
                {item.iniciais || '·'}
              </div>
            )}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-creme/25" />
          </div>
        </div>
      ))}
    </div>
  );
}
