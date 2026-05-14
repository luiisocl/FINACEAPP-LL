import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./screens/Login"
import Dashboard from "./screens/Dashboard"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App