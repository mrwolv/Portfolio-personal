
import About from '@/components/about'
import Intro from '@/components/intro'
import Sectiondivider from '@/components/sectiondivider'

export default function Home () {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <Sectiondivider/>
      <About/>
      </main>
  )
}
