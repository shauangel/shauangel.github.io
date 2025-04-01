// import './App.css'
import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from './components/NaviBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <NaviBar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="courses" className="section">
          <Courses />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        {/* Playground Section */}
        <section id="playground" className="section">
          {/* Playground component will go here */}
        </section>
        {/* Life Section */}
        <section id="life" className="section">
          {/* Life component will go here */}
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
