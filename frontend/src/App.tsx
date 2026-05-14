import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./screens/Login"
import Dashboard from "./screens/Dashboard"
import "./App.css"
import Transacoes from "./screens/Transacoes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transacoes" element={<Transacoes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App