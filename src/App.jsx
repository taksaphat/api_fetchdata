import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
    </>
  )
}

export default App
