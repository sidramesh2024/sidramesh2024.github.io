
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Education from '../components/education'
import Connect from '../components/connect'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Connect />
    </main>
  )
}
