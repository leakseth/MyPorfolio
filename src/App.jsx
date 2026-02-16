import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="">{/* page content */}
        <Hero/>
        <About/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </main>

    </>
  )
}

export default App
