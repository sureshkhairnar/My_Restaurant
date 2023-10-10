import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PagenotFound from './pages/PagenotFound'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
