import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <Router basename="/">
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
      
  )
}

export default App
