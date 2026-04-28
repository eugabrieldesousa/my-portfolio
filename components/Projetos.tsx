'use client';

import { projetos } from '@/data/projetos';
import ProjetoCard from './ProjetoCard';
import Secao from './Secao';

export default function Projetos() {
  return (
    <Secao
      id="projetos"
      eyebrow="trabalho selecionado"
      titulo={
        <>
          Projetos onde a <span className="italic text-laranja">forma</span>
          <br />
          encontra a <span className="italic text-coral">função</span>.
        </>
      }
      descricao="Uma seleção de produtos digitais que desenhei e construí de marcas íntimas a plataformas em escala."
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {projetos.map((p, i) => (
          <ProjetoCard key={p.id} projeto={p} indice={i} />
        ))}
      </div>
    </Secao>
  );
}
