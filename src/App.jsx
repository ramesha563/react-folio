
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'; 
import About from './pages/About';
import Skills from './pages/Skills';       
import Projects from './pages/Projects';   
import Resume from './pages/Resume';       
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
  
      <section id="home">
        <Hero darkMode={darkMode} toggleTheme={toggleTheme} />
      </section>
      <Navbar />
      <main>
        <section id="about"><About /></section> 
        <section id="skills"><Skills /></section>         
        <section id="projects"><Projects /></section>     
        <section id="resume"><Resume /></section>         
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
