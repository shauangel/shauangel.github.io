// import './App.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./components/NaviBar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
