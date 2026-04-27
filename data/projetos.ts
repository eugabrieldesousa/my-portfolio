export type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  tags: string[];
  gradiente: string;
  links: { demo?: string; repo?: string };
  destaque?: boolean;
  emConstrucao?: boolean;
};

export const projetos: Projeto[] = [
  {
    id: 'aurora',
    titulo: 'Aurora Commerce',
    descricao:
      'Plataforma de e-commerce headless com checkout customizado e foco em performance.',
    tags: ['Next.js', 'Stripe', 'Edge'],
    gradiente: 'from-laranja via-coral to-rosa',
    links: { demo: '#', repo: '#' },
    destaque: true
  },
  {
    id: 'lumen',
    titulo: 'Studio Lumen',
    descricao:
      'Site institucional para estúdio de fotografia premium, com galeria cinematográfica.',
    tags: ['React', 'GSAP', 'CMS'],
    gradiente: 'from-ambar via-laranja to-coral',
    links: { demo: '#', repo: '#' }
  },
  {
    id: 'pulse',
    titulo: 'Pulse Analytics',
    descricao:
      'Dashboard de métricas em tempo real para times de produto orientados a dados.',
    tags: ['TypeScript', 'D3', 'WebSocket'],
    gradiente: 'from-coral via-rosa to-ambar',
    links: { demo: '#', repo: '#' }
  },
  {
    id: 'halo',
    titulo: 'Halo Finance',
    descricao:
      'App de gestão financeira pessoal com categorização inteligente e previsões.',
    tags: ['React Native', 'IA', 'Fintech'],
    gradiente: 'from-rosa via-coral to-laranja',
    links: { demo: '#', repo: '#' },
    destaque: true
  },
  {
    id: 'verse',
    titulo: 'Verse Editorial',
    descricao:
      'CMS editorial com foco em tipografia, ritmo de leitura e experiência de autor.',
    tags: ['Next.js', 'MDX', 'Editor'],
    gradiente: 'from-laranja via-ambar to-creme',
    links: { demo: '#', repo: '#' }
  },
  {
    id: 'atlas',
    titulo: 'Atlas Travel',
    descricao:
      'Marketplace de experiências de viagem curadas com mapas interativos.',
    tags: ['Mapbox', 'Stripe', 'i18n'],
    gradiente: 'from-coral via-laranja to-ambar',
    links: { demo: '#', repo: '#' }
  }
];

export const projetosEmConstrucao: Projeto[] = [
  {
    id: 'nimbus',
    titulo: 'Nimbus AI',
    descricao:
      'Assistente generativo com memória contextual de longo prazo e tom configurável.',
    tags: ['LLM', 'Vector DB', 'RAG'],
    gradiente: 'from-laranja/70 via-coral/60 to-rosa/50',
    links: {},
    emConstrucao: true
  },
  {
    id: 'forma',
    titulo: 'Forma Studio',
    descricao:
      'Ferramenta visual para criação e versionamento de design systems modulares.',
    tags: ['Design', 'Tokens', 'Editor'],
    gradiente: 'from-ambar/70 via-laranja/60 to-coral/50',
    links: {},
    emConstrucao: true
  }
];
