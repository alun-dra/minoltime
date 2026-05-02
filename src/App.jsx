import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import Beneficios from './pages/Beneficios'
import Seguridad from './pages/Seguridad'
import Planes from './pages/Planes'
import Contacto from './pages/Contacto'
import Solucion from './pages/Solucion'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucion" element={<Solucion />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App