import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className={`bg-[rgb(36, 36, 36)] text-white h-screen overflow-auto snap-y snap-mandatory ${inter.className}`}
    >
      <Head>
        <title>
          Prathamesh Pawar
        </title>
      </Head>


        <div className='sticky top-0 mb-100' style={{zIndex:26}}>
          <Header/>
        </div>

        <section id='hero' className='snap-start' style={{zIndex:1}}> 
          <Hero />
        </section>

        <section id='about' className='snap-center' style={{zIndex:1}}>
          <About />
        </section>

        <section id='experience' className='snap-center' style={{zIndex:1}}>
          <Experience />
        </section>

        <section id='skills' className='snap-center' style={{zIndex:1}}>
          <Skills/>
        </section>

        <section id='projects' className='snap-center' style={{zIndex:1}}>
          <Projects />
        </section>

        
        <section id='contactme' className='snap-end' style={{zIndex:1}}>
          <ContactMe />
        </section>
      </main>
  )
}
