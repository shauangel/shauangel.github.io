// import './App.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./components/NaviBar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navibar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        
        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          {/* Skills section will go here */}
        </section>

        <section id="projects" className="section">
          {/* Projects section will go here */}
        </section>

        <section id="playground" className="section">
          {/* Playground section will go here */}
        </section>

        <section id="life" className="section">
          {/* Life section will go here */}
        </section>

        <section id="contact" className="section">
          {/* Contact section will go here */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
