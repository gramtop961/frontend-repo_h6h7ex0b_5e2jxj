import { useEffect, useState } from 'react'

function App() {
  const [apiMessage, setApiMessage] = useState('')
  const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const res = await fetch(`${backendBase}/api/hello`)
        if (res.ok) {
          const data = await res.json()
          setApiMessage(data.message || '')
        }
      } catch (e) {
        // ignore errors for this simple demo
      }
    }
    fetchHello()
  }, [backendBase])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="text-center p-8 rounded-2xl shadow-sm bg-white border border-slate-100">
        <h1 className="text-4xl font-bold text-red-600">Hello, World! 👋</h1>
        {apiMessage && (
          <p className="mt-4 text-red-500">Backend says: <span className="font-semibold">{apiMessage}</span></p>
        )}
        <a href="/test" className="inline-block mt-6 text-sm text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded transition-colors">Check backend & database</a>
      </div>
    </div>
  )
}

export default App
