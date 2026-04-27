import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Retrato from '@/components/Retrato';
import Fe from '@/components/secoes/Fe';
import Musica from '@/components/secoes/Musica';
import Games from '@/components/secoes/Games';
import Esportes from '@/components/secoes/Esportes';
import Amor from '@/components/secoes/Amor';
import Skills from '@/components/Skills';
import Projetos from '@/components/Projetos';
import ProjetosEmConstrucao from '@/components/ProjetosEmConstrucao';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import CursorCustom from '@/components/efeitos/CursorCustom';
import ScrollSuave from '@/components/ScrollSuave';

export default function Pagina() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollSuave />
      <CursorCustom />
      <Navbar />
      <Hero />
      <Sobre />
      <Retrato />
      <Fe />
      <Musica />
      <Games />
      <Esportes />
      <Amor />
      <Skills />
      <Projetos />
      <ProjetosEmConstrucao />
      <Contato />
      <Footer />
    </main>
  );
}
