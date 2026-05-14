import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { useNavigate } from "react-router-dom"

function Dashboard() {
    const navigate = useNavigate()
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col p-6">
        <h1 className="text-emerald-600 text-xl font-bold mb-8">FINANCE LL</h1>
        <nav className="flex flex-col gap-2">
          <button className="text-left px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-semibold">Dashboard</button>
          <button onClick={() => navigate("/transacoes")} className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Transações</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Transações</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Faturas</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">IA Financeira</button>
          <button className="text-left px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100">Configurações</button>
        </nav>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Dashboard</h2>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-400 text-sm mb-1">Saldo Total</p>
            <h3 className="text-2xl font-bold text-gray-800">R$ 4.250,00</h3>
            <p className="text-emerald-500 text-sm mt-1">↑ 12% esse mês</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-400 text-sm mb-1">Receitas</p>
            <h3 className="text-2xl font-bold text-emerald-600">R$ 6.000,00</h3>
            <p className="text-emerald-500 text-sm mt-1">↑ 8% esse mês</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-400 text-sm mb-1">Despesas</p>
            <h3 className="text-2xl font-bold text-red-500">R$ 1.750,00</h3>
            <p className="text-red-400 text-sm mt-1">↓ 3% esse mês</p>
          </div>
        </div>

        {/* Gráfico */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-gray-700 font-semibold mb-4">Gastos por categoria</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={[
                { name: "Alimentação", value: 400 },
                { name: "Transporte", value: 200 },
                { name: "Lazer", value: 150 },
                { name: "Saúde", value: 100 },
              ]}
              cx={200}
              cy={120}
              outerRadius={100}
              dataKey="value"
            >
              <Cell fill="#10b981" />
              <Cell fill="#3b82f6" />
              <Cell fill="#f59e0b" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        {/* Últimas transações */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-gray-700 font-semibold mb-4">Últimas transações</h3>
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm border-b">
                <th className="text-left pb-3">Descrição</th>
                <th className="text-left pb-3">Categoria</th>
                <th className="text-left pb-3">Data</th>
                <th className="text-right pb-3">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0">
                <td className="py-3 text-gray-700">Mercado</td>
                <td className="py-3 text-gray-400 text-sm">Alimentação</td>
                <td className="py-3 text-gray-400 text-sm">13/05/2026</td>
                <td className="py-3 text-right text-red-500 font-semibold">- R$ 150,00</td>
              </tr>
              <tr className="border-b last:border-0">
                <td className="py-3 text-gray-700">Salário</td>
                <td className="py-3 text-gray-400 text-sm">Receita</td>
                <td className="py-3 text-gray-400 text-sm">05/05/2026</td>
                <td className="py-3 text-right text-emerald-500 font-semibold">+ R$ 3.000,00</td>
              </tr>
              <tr className="border-b last:border-0">
                <td className="py-3 text-gray-700">Uber</td>
                <td className="py-3 text-gray-400 text-sm">Transporte</td>
                <td className="py-3 text-gray-400 text-sm">12/05/2026</td>
                <td className="py-3 text-right text-red-500 font-semibold">- R$ 25,00</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Dashboard