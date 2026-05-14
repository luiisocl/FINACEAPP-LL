import { useState } from "react"

const transacoesIniciais = [
  { id: 1, descricao: "Mercado", categoria: "Alimentação", data: "13/05/2026", valor: -150, tipo: "gasto" },
  { id: 2, descricao: "Salário", categoria: "Receita", data: "05/05/2026", valor: 3000, tipo: "receita" },
  { id: 3, descricao: "Uber", categoria: "Transporte", data: "12/05/2026", valor: -25, tipo: "gasto" },
  { id: 4, descricao: "Freelance", categoria: "Receita", data: "10/05/2026", valor: 800, tipo: "receita" },
]

function Transacoes() {
  const [transacoes, setTransacoes] = useState(transacoesIniciais)
  const [modalAberto, setModalAberto] = useState(false)
  const [nova, setNova] = useState({ descricao: "", categoria: "", data: "", valor: "", tipo: "gasto" })

  function adicionarTransacao() {
    if (!nova.descricao || !nova.valor) return
    const novaTransacao = {
      id: transacoes.length + 1,
      descricao: nova.descricao,
      categoria: nova.categoria,
      data: nova.data,
      valor: nova.tipo === "gasto" ? -Number(nova.valor) : Number(nova.valor),
      tipo: nova.tipo,
    }
    setTransacoes([...transacoes, novaTransacao])
    setModalAberto(false)
    setNova({ descricao: "", categoria: "", data: "", valor: "", tipo: "gasto" })
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col p-6">
        <h1 className="text-emerald-600 text-xl font-bold mb-8">FINANCE LL</h1>
        <nav className="flex flex-col gap-2">
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Dashboard</button>
          <button className="text-left px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-semibold">Transações</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Faturas</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">IA Financeira</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Configurações</button>
        </nav>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Transações</h2>
          <button
            onClick={() => setModalAberto(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            + Nova Transação
          </button>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-gray-400 text-sm">
                <th className="text-left px-6 py-4">Descrição</th>
                <th className="text-left px-6 py-4">Categoria</th>
                <th className="text-left px-6 py-4">Data</th>
                <th className="text-right px-6 py-4">Valor</th>
              </tr>
            </thead>
            <tbody>
              {transacoes.map((t) => (
                <tr key={t.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">{t.descricao}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{t.categoria}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{t.data}</td>
                  <td className={`px-6 py-4 text-right font-semibold ${t.valor > 0 ? "text-emerald-500" : "text-red-500"}`}>
                    {t.valor > 0 ? "+" : ""} R$ {Math.abs(t.valor).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-xl font-bold text-gray-700 mb-6">Nova Transação</h3>

            <label className="text-gray-500 text-sm mb-1 block">Descrição</label>
            <input
              value={nova.descricao}
              onChange={(e) => setNova({ ...nova, descricao: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ex: Mercado"
            />

            <label className="text-gray-500 text-sm mb-1 block">Categoria</label>
            <input
              value={nova.categoria}
              onChange={(e) => setNova({ ...nova, categoria: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ex: Alimentação"
            />

            <label className="text-gray-500 text-sm mb-1 block">Data</label>
            <input
              type="date"
              value={nova.data}
              onChange={(e) => setNova({ ...nova, data: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <label className="text-gray-500 text-sm mb-1 block">Valor (R$)</label>
            <input
              type="number"
              value={nova.valor}
              onChange={(e) => setNova({ ...nova, valor: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ex: 150"
            />

            <label className="text-gray-500 text-sm mb-1 block">Tipo</label>
            <select
              value={nova.tipo}
              onChange={(e) => setNova({ ...nova, tipo: e.target.value })}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="gasto">Gasto</option>
              <option value="receita">Receita</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={() => setModalAberto(false)}
                className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-200">
                Cancelar
              </button>
              <button
                onClick={adicionarTransacao}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-500">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Transacoes