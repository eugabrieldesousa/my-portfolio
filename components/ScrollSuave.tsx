'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function ScrollSuave() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      lerp: 0.1
    });

    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onAnchor = (e: MouseEvent) => {
      const alvo = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!alvo) return;
      const id = alvo.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -20, duration: 1.6 });
    };
    document.addEventListener('click', onAnchor);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onAnchor);
      lenis.destroy();
    };
  }, []);

  return null;
}
