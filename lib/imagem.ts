/** Resolve o caminho de uma imagem pública, adicionando o basePath quando necessário. */
export function srcImagem(caminho: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!base) return caminho;
  // Evita duplicar se já tiver o prefixo
  if (caminho.startsWith(base)) return caminho;
  return `${base}${caminho}`;
}