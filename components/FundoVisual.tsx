'use client';

export default function FundoVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-fundo" />
      <div
        className="absolute -top-32 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full opacity-70 blur-3xl animate-brilho will-change-[opacity,transform]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,122,26,0.55) 0%, rgba(255,107,91,0.25) 40%, rgba(244,168,176,0.05) 70%, transparent 100%)'
        }}
      />
      <div
        className="absolute right-[-15%] top-[40%] h-[55vh] w-[55vh] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(245,162,75,0.5) 0%, rgba(255,107,91,0.15) 50%, transparent 80%)'
        }}
      />
      <div
        className="absolute left-[-10%] bottom-[10%] h-[45vh] w-[45vh] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(244,168,176,0.4) 0%, rgba(255,122,26,0.15) 50%, transparent 80%)'
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,230,208,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(248,230,208,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)'
        }}
      />
      <div className="grao" />
    </div>
  );
}
