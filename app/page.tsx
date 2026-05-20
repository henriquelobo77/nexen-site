import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Differentials } from '@/components/sections/Differentials'
import { Clients } from '@/components/sections/Clients'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Differentials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
