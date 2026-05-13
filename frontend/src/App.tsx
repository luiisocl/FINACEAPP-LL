import { useState } from "react"
import "./App.css"
import "@fontsource/playfair-display"
function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm">
<h1 className="text-emerald-600 text-3xl font-bold text-center mb-1 fonte-titulo">FINANCE LL</h1>
        <p className="text-gray-400 text-center text-sm mb-8">Controle seu dinheiro</p>

        <label className="text-gray-500 text-sm mb-1 block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
        />

        <label className="text-gray-500 text-sm mb-1 block">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="••••••••"
          className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
        />

        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-lg transition-colors mb-4">
          ENTRAR
        </button>

        <p className="text-gray-400 text-center text-sm">
          Não tem uma conta?{" "}
          <span className="text-emerald-500 cursor-pointer hover:underline font-semibold">Crie agora</span>
        </p>

      </div>
    </div>
  )
}

export default App