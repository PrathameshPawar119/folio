import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '@/components/About'

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


        <div className='sticky top-0'>
          <Header/>
        </div>

        <section id='hero' className='snap-start'> 
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>
      </main>
  )
}
