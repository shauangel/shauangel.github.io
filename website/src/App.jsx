// import './App.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./components/NaviBar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navibar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photo" element={<Photo />} />
          </Routes>
      </>
  )
}

export default App
