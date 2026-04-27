'use client';

import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

export type ItemOrbita = {
  src?: string;
  iniciais?: string;
  rotulo?: string;
  cor?: string;
};

type Props = {
  itens: ItemOrbita[];
  raio: number;
  duracao: number;
  reverso?: boolean;
  tamanho?: number;
  delay?: number;
  className?: string;
};

export default function OrbitaFotos({
  itens,
  raio,
  duracao,
  reverso = false,
  tamanho = 64,
  delay = 0,
  className = ''
}: Props) {
  const passo = 360 / itens.length;

  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 ${className}`}
      style={{
        width: raio * 2,
        height: raio * 2,
        marginLeft: -raio,
        marginTop: -raio
      }}
      animate={{ rotate: reverso ? -360 : 360 }}
      transition={{ duration: duracao, ease: 'linear', repeat: Infinity, delay }}
    >
      <div
        className="absolute inset-0 rounded-full border border-dashed border-creme/8"
        aria-hidden
      />

      {itens.map((item, i) => {
        const estilo: CSSProperties = {
          width: tamanho,
          height: tamanho,
          left: '50%',
          top: '50%',
          transform: `rotate(${passo * i}deg) translate(${raio}px) rotate(-${
            passo * i
          }deg) translate(-50%, -50%)`
        };
        return (
          <motion.div
            key={i}
            className="absolute"
            style={estilo}
            animate={{ rotate: reverso ? 360 : -360 }}
            transition={{
              duration: duracao,
              ease: 'linear',
              repeat: Infinity,
              delay
            }}
          >
            <div
              className="group relative h-full w-full overflow-hidden rounded-full border border-creme/15 bg-fundo-2 shadow-[0_8px_30px_-6px_rgba(255,122,26,0.4)] transition-transform hover:scale-110"
              style={
                item.cor
                  ? { boxShadow: `0 8px 30px -6px ${item.cor}88` }
                  : undefined
              }
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.rotulo || ''}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center font-serif italic text-fundo"
                  style={{
                    background:
                      item.cor ||
                      'linear-gradient(135deg, #FF7A1A, #FF6B5B, #F4A8B0)',
                    fontSize: tamanho * 0.4
                  }}
                >
                  {item.iniciais || '·'}
                </div>
              )}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-creme/20" />
            </div>
            {item.rotulo && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-creme/10 bg-fundo/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-texto-suave opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {item.rotulo}
              </span>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
