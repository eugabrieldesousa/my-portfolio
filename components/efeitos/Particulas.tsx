'use client';

import { useEffect, useRef } from 'react';

type Particula = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  raio: number;
  cor: string;
  vida: number;
};

const cores = ['#FF7A1A', '#FF6B5B', '#F4A8B0', '#F5A24B', '#F8E6D0'];

export default function Particulas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let largura = 0;
    let altura = 0;

    const redimensionar = () => {
      largura = canvas.offsetWidth;
      altura = canvas.offsetHeight;
      canvas.width = Math.floor(largura * dpr);
      canvas.height = Math.floor(altura * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    redimensionar();
    window.addEventListener('resize', redimensionar);

    const mobile = window.innerWidth < 768;
    const quantidade = mobile ? 18 : 38;
    const raioConexao = mobile ? 0 : 100;
    const raioConexao2 = raioConexao * raioConexao;

    const particulas: Particula[] = Array.from({ length: quantidade }, () => ({
      x: Math.random() * largura,
      y: Math.random() * altura,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      raio: Math.random() * 1.4 + 0.5,
      cor: cores[Math.floor(Math.random() * cores.length)],
      vida: Math.random() * Math.PI * 2
    }));

    let mouseX = -9999;
    let mouseY = -9999;
    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    let visivel = true;
    const obs = new IntersectionObserver(
      (entradas) => {
        visivel = entradas[0].isIntersecting;
      },
      { threshold: 0 }
    );
    obs.observe(canvas);

    let raf = 0;
    let ultimoT = 0;
    const intervalo = 1000 / 50;

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visivel) return;
      if (t - ultimoT < intervalo) return;
      ultimoT = t;

      ctx.clearRect(0, 0, largura, altura);

      for (let i = 0; i < particulas.length; i++) {
        const p = particulas[i];
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 19600) {
          const dist = Math.sqrt(dist2);
          p.vx -= (dx / dist) * 0.035;
          p.vy -= (dy / dist) * 0.035;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        p.vida += 0.005;

        if (p.x < 0) p.x = largura;
        else if (p.x > largura) p.x = 0;
        if (p.y < 0) p.y = altura;
        else if (p.y > altura) p.y = 0;

        const alpha = 0.45 + Math.sin(p.vida) * 0.35;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.cor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
        ctx.fill();
      }

      if (raioConexao > 0) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particulas.length; i++) {
          const a = particulas[i];
          for (let j = i + 1; j < particulas.length; j++) {
            const b = particulas[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < raioConexao2) {
              const alpha = (1 - Math.sqrt(d2) / raioConexao) * 0.18;
              ctx.globalAlpha = alpha;
              ctx.strokeStyle = '#FF7A1A';
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', redimensionar);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onLeave);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />
  );
}
