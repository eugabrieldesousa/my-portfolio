'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SELETOR = 'a, button, [role="button"], input, textarea, select, label';

export default function CursorCustom() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 1100, damping: 55, mass: 0.18 });
  const sy = useSpring(y, { stiffness: 1100, damping: 55, mass: 0.18 });

  const ax = useSpring(x, { stiffness: 180, damping: 20, mass: 0.55 });
  const ay = useSpring(y, { stiffness: 180, damping: 20, mass: 0.55 });

  const [ativo, setAtivo] = useState(false);
  const [emLink, setEmLink] = useState(false);
  const refTimeoutSaida = useRef<number | null>(null);

  const tamanhoPonto = emLink ? 0 : 6;
  const tamanhoAnel = emLink ? 44 : 32;

  const pontoX = useTransform(sx, (v) => v - tamanhoPonto / 2);
  const pontoY = useTransform(sy, (v) => v - tamanhoPonto / 2);
  const anelX = useTransform(ax, (v) => v - tamanhoAnel / 2);
  const anelY = useTransform(ay, (v) => v - tamanhoAnel / 2);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setAtivo(true);
    document.documentElement.classList.add('cursor-custom');

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: Event) => {
      const alvo = e.target as HTMLElement | null;
      if (!alvo) return;
      const interativo = alvo.closest && alvo.closest(SELETOR);
      if (interativo) {
        if (refTimeoutSaida.current) {
          clearTimeout(refTimeoutSaida.current);
          refTimeoutSaida.current = null;
        }
        setEmLink(true);
      }
    };

    const onOut = (e: Event) => {
      const evt = e as PointerEvent;
      const alvo = e.target as HTMLElement | null;
      if (!alvo) return;
      const saiuPara = evt.relatedTarget as HTMLElement | null;
      const interativoOrigem = alvo.closest && alvo.closest(SELETOR);
      if (!interativoOrigem) return;
      const aindaInterativo =
        saiuPara && saiuPara.closest && saiuPara.closest(SELETOR);
      if (aindaInterativo) return;
      if (refTimeoutSaida.current) clearTimeout(refTimeoutSaida.current);
      refTimeoutSaida.current = window.setTimeout(() => {
        setEmLink(false);
      }, 60);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });

    return () => {
      document.documentElement.classList.remove('cursor-custom');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      if (refTimeoutSaida.current) clearTimeout(refTimeoutSaida.current);
    };
  }, [x, y]);

  if (!ativo) return null;

  return (
    <>
      <motion.div
        style={{ x: pontoX, y: pontoY }}
        animate={{
          width: tamanhoPonto,
          height: tamanhoPonto,
          opacity: emLink ? 0 : 1
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full bg-laranja shadow-[0_0_14px_rgba(255,122,26,0.8)] md:block"
        aria-hidden
      />
      <motion.div
        style={{ x: anelX, y: anelY }}
        animate={{
          width: tamanhoAnel,
          height: tamanhoAnel,
          borderColor: emLink
            ? 'rgba(255,122,26,0.85)'
            : 'rgba(248,230,208,0.4)',
          backgroundColor: emLink
            ? 'rgba(255,122,26,0.12)'
            : 'rgba(255,122,26,0)'
        }}
        transition={{
          width: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          borderColor: { duration: 0.25 },
          backgroundColor: { duration: 0.25 }
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden rounded-full border backdrop-blur-[2px] md:block"
        aria-hidden
      />
    </>
  );
}
