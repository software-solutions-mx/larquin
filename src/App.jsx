import { useEffect } from 'react'
import AOS from 'aos'
import NavigationBar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import ValueProposition from './components/sections/ValueProposition'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Hero />
        <ValueProposition />
        <About />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
