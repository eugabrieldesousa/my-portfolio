export type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  tags: string[];
  gradiente: string;
  links: { demo?: string; repo?: string };
  imagem?: string;
  destaque?: boolean;
  emConstrucao?: boolean;
};

export const projetos: Projeto[] = [
  {
    id: 'le-parc',
    titulo: 'Le Parc - Axia Vectra',
    descricao:
      'Landing page do empreendimento Le Parc construtora de um prédio - trabalho já realizado trabalhado pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-coral via-rosa to-ambar',
    links: {},
    imagem: '/le-parc.jpeg'
  },
  {
    id: 'cingo',
    titulo: 'Cingo Codes 4/5',
    descricao:
      'Sistema na qual fiz features, manutenção e etc - trabalho já realizado trabalhado pela Cingo.',
    tags: ['Java', 'Angular'],
    gradiente: 'from-rosa via-coral to-laranja',
    links: {},
    imagem: '/cingo.jpeg'
  },
  {
    id: 'dr-aromas',
    titulo: 'DR Aromas e Ingredientes',
    descricao:
      'Manutenção e realização de novas features de sites e produtos da Duas Rodas - trabalho já realizado trabalhado pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-laranja via-ambar to-creme',
    links: {},
    imagem: '/DR.jpeg'
  },
  {
    id: 'prismabox',
    titulo: 'PrismaBox',
    descricao:
      'Manutenção do sistema para selfstorages - trabalho já realizado trabalhado pela PrismaBox.',
    tags: [],
    gradiente: 'from-coral via-laranja to-ambar',
    links: {},
    imagem: '/prisma.jpeg'
  },
  {
    id: 'jhashop',
    titulo: 'JHASHOP',
    descricao:
      'Manutenção e features realizadas - trabalho já realizado trabalhando pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-laranja via-coral to-rosa',
    links: {},
    imagem: '/JHA.jpeg'
  },
  {
    id: 'transligue',
    titulo: 'Transligue',
    descricao:
      'Manutenção e features realizadas - trabalho já realizado trabalhando pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-ambar via-laranja to-coral',
    links: {},
    imagem: '/transligue.jpeg'
  },
  {
    id: 'nacional-brindes',
    titulo: 'Nacional Brindes',
    descricao:
      'Manutenção e features realizadas - trabalho já realizado trabalhando pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-coral via-rosa to-ambar',
    links: {},
    imagem: '/nacional-brindes.jpeg'
  },
  {
    id: 'asia-import',
    titulo: 'Asia Import',
    descricao:
      'Manutenção e features realizadas - trabalho já realizado trabalhando pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-rosa via-coral to-laranja',
    links: {},
    imagem: '/asia.jpeg'
  },
  {
    id: 'doce-beijo',
    titulo: 'Doce Beijo',
    descricao:
      'Manutenção e features realizadas - trabalho já realizado trabalhando pela Hangar Digital.',
    tags: ['Sass', 'PHP'],
    gradiente: 'from-laranja via-ambar to-creme',
    links: {},
    imagem: '/doce-beijo.jpeg'
  },
  {
    id: 'gofind',
    titulo: 'Gofind',
    descricao:
      'Manutenção e features realizadas - trabalho já realizado trabalhando pela Hangar Digital.',
    tags: ['Sass', 'PHP', 'React'],
    gradiente: 'from-coral via-laranja to-ambar',
    links: {},
    imagem: '/gofind.jpeg'
  }
];

export const projetosEmConstrucao: Projeto[] = [
  {
    id: 'Novo Prime Front-end - UNIMED',
    titulo: 'Novo Prime Front-end - UNIMED',
    descricao:
      'Redesign e reconstrução do sistema de gestão da UNIMED, focado em experiência personalizada e performance - Trabalho sendo realizado trabalhando pela HBTEC',
    tags: ['Angular 20', 'Java', 'LLM', 'Harness'],
    gradiente: 'from-laranja/70 via-coral/60 to-rosa/50',
    links: {},
    imagem: '/prime.png',
    emConstrucao: true
  },
  {
    id: 'instrutor-autonomo',
    titulo: 'Instrutor Autônomo',
    descricao:
      'Landing page + sistema de acesso + sistema de questões do DETRAN.',
    tags: ['Astro', 'Supabase', 'Vercel'],
    gradiente: 'from-ambar/70 via-laranja/60 to-coral/50',
    links: {},
    imagem: '/instrutor-autonomo.png',
    emConstrucao: true
  }
];
