# claude.md — Portfólio Pessoal Premium

## 1. Objetivo do Projeto

Construir um portfólio pessoal cinematográfico, premium e altamente visual, com identidade própria inspirada em experiências como reactbits.dev. O site deve transmitir sofisticação, modernidade e capacidade técnica logo no primeiro contato, servindo como vitrine principal de projetos e habilidades.

Hospedagem: **GitHub Pages** (build estático via `next export`).

---

## 2. Direção Visual

Estética **quente e cinematográfica**, com forte sensação de profundidade e luz de estúdio. A paleta combina tons de laranja, âmbar, coral e rosa com pretos profundos e marrons escuros, gerando contraste dramático e atmosfera artística.

Princípios:
- Iluminação suave com glows e blurs radiais
- Gradientes refinados (sem bandas, sem cores estridentes)
- Tipografia generosa, com pesos contrastantes
- Espaçamento amplo, respiração entre elementos
- Microtexturas sutis (grain, noise) para evitar plástico digital
- Movimento contido — elegante, nunca exagerado

---

## 3. Paleta de Cores

| Token            | Hex       | Uso                                  |
|------------------|-----------|--------------------------------------|
| `fundo`          | `#0B0606` | Background principal                 |
| `fundo-2`        | `#150B08` | Superfícies elevadas                 |
| `marrom`         | `#2A1610` | Cards, bordas suaves                 |
| `laranja`        | `#FF7A1A` | Acento principal                     |
| `ambar`          | `#F5A24B` | Secundário quente                    |
| `coral`          | `#FF6B5B` | Destaques, CTAs                      |
| `rosa`           | `#F4A8B0` | Acentos suaves                       |
| `creme`          | `#F8E6D0` | Texto principal sobre fundo escuro   |
| `texto-suave`    | `#C9B5A0` | Texto secundário                     |

Gradientes-chave:
- `from-laranja via-coral to-rosa` (glow principal)
- `from-ambar/30 via-transparent to-transparent` (luz lateral)
- `from-fundo via-marrom to-fundo` (planos de fundo)

---

## 4. Tipografia

- **Display / Títulos**: `Instrument Serif` (italic em destaques) — elegância editorial
- **UI / Texto**: `Geist Sans` — moderna, geométrica, neutra
- **Mono (tags / labels)**: `Geist Mono`

Hierarquia:
- Hero: `clamp(3rem, 9vw, 8rem)`
- Section title: `clamp(2rem, 5vw, 4rem)`
- Body: `1rem` / `1.125rem`
- Caption: `0.8125rem`

---

## 5. Estrutura da Landing Page

1. **Navbar** (fixa, translúcida com blur)
2. **Hero** — título massivo + subtítulo + CTA + glow animado
3. **Sobre** — bloco editorial curto e direto
4. **Skills** — grid visual de habilidades
5. **Projetos** — vitrine com 6+ cards
6. **Projetos em Construção** — seção separada, status visual
7. **Contato** — CTA final + redes sociais
8. **Footer** — minimalista

---

## 6. Descrição de Cada Seção

### Hero
Título serif italic, palavra-chave em laranja. Subtítulo neutro abaixo. CTA primário (preenchido) + secundário (ghost). Fundo: gradiente radial laranja→preto + orbe animado com blur. Grain sutil sobreposto.

### Sobre
Texto curto (3–4 linhas), tipografia generosa. Lateral com pequena marca decorativa (linha + label vertical).

### Skills
Grid responsivo de chips/cards com leve borda ambar e hover com glow. Categorias agrupadas (Frontend, Backend, Design, Ferramentas).

### Projetos
Grid 2 colunas (1 no mobile). Cada card tem imagem (ou placeholder gradiente), título serif, descrição curta, tags mono e dois links (demo/repo). Hover eleva e revela glow inferior.

### Projetos em Construção
Mesmo formato dos cards, mas com selo "em construção" animado (pulse suave) e overlay diagonal sutil. Tom: antecipação, não incompletude.

### Contato
Título grande convidativo. Email destacado como link grande clicável. Linha de redes sociais abaixo.

### Footer
Nome + ano + crédito discreto.

---

## 7. Regras de Design

- Contraste alto entre fundo e texto principal
- Nunca usar puro `#000` ou `#fff` — sempre tons quentes
- Bordas sempre `rgba(creme, 0.08–0.15)`
- Sombras coloridas (laranja com baixa opacidade) em elementos elevados
- Raio padrão: `1rem` (cards), `9999px` (chips/CTA)
- Espaçamento entre seções: `py-24 md:py-32`

---

## 8. Regras de Código

- **Idioma**: nomes em português (componentes, props, variáveis)
- **Sem comentários** — código autoexplicativo
- **TypeScript estrito**
- Componentes pequenos e reutilizáveis em `components/`
- Dados em `data/` (TS puro, exportando arrays tipados)
- Estilos exclusivamente via Tailwind + tokens custom
- Nada de bibliotecas UI prontas (Radix etc.) — tudo artesanal
- Imports absolutos via `@/`

---

## 9. Padrões de Componentes

- `Navbar` — fixa, blur, links âncora
- `Hero` — título, subtítulo, CTA, fundo
- `Sobre` — bloco editorial
- `Skills` — grid de chips
- `Projetos` — wrapper + grid
- `ProjetoCard` — item individual
- `ProjetosEmConstrucao` — variante com selo
- `Contato` — CTA + sociais
- `Footer` — minimal
- `FundoVisual` — orbes + grain (background absoluto reutilizável)
- `Secao` — wrapper padrão com title + eyebrow

---

## 10. Diretrizes de Animação (Framer Motion)

- Entrada: `opacity 0→1` + `y 24→0`, `duration 0.7`, `ease [0.22, 1, 0.36, 1]`
- Stagger filhos: `0.08s`
- Scroll reveal via `whileInView` com `once: true, margin: -80px`
- Hover cards: `scale 1.01` + `y -4` + glow opacity
- Hero glow: animação infinita de `scale` e `opacity` (lenta, 8–12s)
- Nada acima de `0.8s` exceto background

---

## 11. Diretrizes de UX

- Navegação por âncoras com `scroll-smooth`
- Foco visível (ring laranja translúcido)
- Toques no mobile com áreas ≥ 44px
- Reduzir movimento se `prefers-reduced-motion`
- Imagens com `loading="lazy"` e `alt` descritivo

---

## 12. Tom de Conteúdo

- Direto, confiante, não arrogante
- Frases curtas, ritmo editorial
- Português brasileiro
- Verbos no presente
- Sem clichês ("apaixonado por tecnologia", "movido a café")

---

## 13. Estrutura de Dados — Projetos

```ts
type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  tags: string[];
  imagem: string;
  links: { demo?: string; repo?: string };
  destaque?: boolean;
  emConstrucao?: boolean;
};
```

---

## 14. Exemplos de Conteúdo

- **Aurora Commerce** — Plataforma de e-commerce headless com checkout customizado.
- **Studio Lumen** — Site institucional para estúdio de fotografia premium.
- **Pulse Analytics** — Dashboard de métricas em tempo real para times de produto.
- **Halo Finance** — App de gestão financeira pessoal com IA.
- **Verse Editorial** — CMS editorial com foco em tipografia.
- **Atlas Travel** — Marketplace de experiências de viagem curadas.

Em construção:
- **Nimbus AI** — Assistente generativo com memória contextual.
- **Forma Studio** — Ferramenta visual para criação de design systems.

---

## 15. Build & Deploy

- `next.config.js` com `output: 'export'`, `images.unoptimized: true`, `basePath` configurável
- Workflow GitHub Actions em `.github/workflows/deploy.yml` para Pages
- Output em `out/`
