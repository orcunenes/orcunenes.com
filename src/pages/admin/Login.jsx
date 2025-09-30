import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // Simple demo auth - in production, validate against backend
    if (email && password) {
      localStorage.setItem('admin_logged_in', 'true')
      navigate('/admin')
    } else {
      alert('Please enter email and password')
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-md mx-auto">
        <div className="rounded-xl border border-zinc-200 p-8 bg-white/80 backdrop-blur shadow-lg dark:border-zinc-700 dark:bg-zinc-900/40">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Enter your credentials to access the dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
              <input 
                type="email"
                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="admin@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Password</label>
              <input 
                type="password"
                className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700">
            <p className="text-xs text-center text-zinc-500">
              Demo credentials: any email/password will work
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}