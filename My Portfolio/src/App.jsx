import React from 'react'
import styles from "./App.module.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Studies from './components/Studies/Studies';
import Certificates from './components/Certificates/Certificates';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Studies/>
      <Certificates/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
