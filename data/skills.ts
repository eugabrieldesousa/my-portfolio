export type GrupoSkills = {
  categoria: string;
  itens: string[];
};

export const skills: GrupoSkills[] = [
  {
    categoria: 'Frontend',
    itens: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']
  },
  {
    categoria: 'Backend',
    itens: ['Node.js', 'Python', 'PostgreSQL', 'Prisma', 'REST & GraphQL']
  },
  {
    categoria: 'Design',
    itens: ['Figma', 'Design Systems', 'Tipografia', 'Motion', 'Branding']
  },
  {
    categoria: 'Ferramentas',
    itens: ['Git', 'Vercel', 'Docker', 'Linear', 'Vitest']
  }
];
