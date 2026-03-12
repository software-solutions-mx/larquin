import NavigationBar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import ValueProposition from './components/sections/ValueProposition'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Process from './components/sections/Process'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Projects />
        <Process />
      </main>
      <Footer />
    </div>
  )
}

export default App
