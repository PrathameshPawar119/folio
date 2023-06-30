import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/Experience'
import SkillsComp from '@/components/Skills'
import ProjectsComp from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Experience, PageInfo, Projects, Skills, Social } from '@/typing'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperience } from '@/utils/fetchExperience'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Projects[];
  skills: Skills[];
  socials: Social[];
}

export default function Home({pageInfo, experience, projects, skills, socials}: Props) {

 // footer btn display & hide logic 
  // const footerBtn = document.getElementById("footerBtn");
  // footerBtn?.addEventListener("scroll", ()=>{
  //   if(document.body.scrollTop >60 || document.documentElement.scrollTop > 60)
  //   {
  //     footerBtn.style.display = 'block';
  //   }
  //   else{
  //     footerBtn.style.display = 'none';
  //   }
  // })

  return (
    <main
    className={`bg-[rgb(36, 36, 36)] text-white h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth ${inter.className}`}
    >
      <Head>
        <title>
          Prathamesh Pawar
        </title>
      </Head>


        <div className='sticky top-0 mb-100' style={{zIndex:26}}>
          <Header socials={socials}/>
        </div>

        <section id='hero' className='snap-start' style={{zIndex:1}}> 
          <Hero pageInfo={pageInfo}/>
        </section>

        <section id='about' className='snap-center' style={{zIndex:1}}>
          <About pageInfo={pageInfo}/>
        </section>

        <section id='experience' className='snap-center' style={{zIndex:1}}>
          <WorkExperience experience={experience} />
        </section>

        <section id='skills' className='snap-center' style={{zIndex:1}}>
          <SkillsComp skills={skills}/>
        </section>

        <section id='projects' className='snap-center' style={{zIndex:1}}>
          <ProjectsComp projects={projects} />
        </section>

        
        <section id='contactme' className='snap-end' style={{zIndex:1}}>
          <ContactMe pageInfo={pageInfo}/>
        </section>

      {/* Footer go to top btn */}
        <footer className='sticky bottom-5 w-full' id='footerBtn' style={{scrollBehavior:'smooth'}}>
          <div className='flex items-center justify-center'>
            <Link href="#hero">
              <motion.img initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:4}} className='h-10 w-10 md:h-14 md:w-14 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="../static/logos/pplogo.png" alt="PP" />
            </Link>
          </div>
        </footer>
      </main>
  )
}


export const getStaticProps: GetStaticProps<Props> = async ()=>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const projects: Projects[] = await fetchProjects();
  const skills: Skills[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props :{
      pageInfo,
      experience,
      projects,
      skills,
      socials
    },
    revalidate:20
  }
}