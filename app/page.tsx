import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Differentials } from '@/components/sections/Differentials';
import { CNPJCard } from '@/components/sections/CNPJCard';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Differentials />
        <CNPJCard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
