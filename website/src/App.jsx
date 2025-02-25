import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <NaviBar />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </>
  )
}

export default App
