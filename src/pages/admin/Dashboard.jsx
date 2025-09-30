import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Projects', value: '12', icon: '📁', change: '+2 this month' },
    { label: 'Active Clients', value: '8', icon: '👥', change: '+1 this week' },
    { label: 'Pending Tasks', value: '5', icon: '✓', change: '2 due today' },
    { label: 'Messages', value: '3', icon: '📧', change: 'New inquiries' },
  ]

  const recentActivity = [
    { action: 'New project inquiry', time: '2 hours ago', type: 'message' },
    { action: 'Updated portfolio item', time: '5 hours ago', type: 'update' },
    { action: 'Client meeting scheduled', time: '1 day ago', type: 'event' },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-zinc-600 dark:text-zinc-300">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-zinc-200 p-6 bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-3xl font-bold text-violet-600 dark:text-violet-400">{stat.value}</span>
            </div>
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{stat.label}</h3>
            <p className="text-xs text-zinc-500 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="rounded-xl border border-zinc-200 p-6 bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800 last:border-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${item.type === 'message' ? 'bg-violet-500' : item.type === 'update' ? 'bg-sky-500' : 'bg-green-500'}`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.action}</p>
                  <p className="text-xs text-zinc-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-zinc-200 p-6 bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid gap-3">
            <Link to="/projects" className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition dark:border-zinc-700 dark:hover:border-violet-700 dark:hover:bg-violet-900/20">
              <span className="text-xl">📁</span>
              <div>
                <p className="font-semibold text-sm">Manage Projects</p>
                <p className="text-xs text-zinc-500">View and edit portfolio items</p>
              </div>
            </Link>
            <a href="mailto:orcuneness@hotmail.com" className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition dark:border-zinc-700 dark:hover:border-violet-700 dark:hover:bg-violet-900/20">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-semibold text-sm">Check Messages</p>
                <p className="text-xs text-zinc-500">3 unread inquiries</p>
              </div>
            </a>
            <Link to="/" className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition dark:border-zinc-700 dark:hover:border-violet-700 dark:hover:bg-violet-900/20">
              <span className="text-xl">🌐</span>
              <div>
                <p className="font-semibold text-sm">View Public Site</p>
                <p className="text-xs text-zinc-500">See how visitors see your portfolio</p>
              </div>
            </Link>
            <Link to="/admin/login" className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition dark:border-zinc-700 dark:hover:border-violet-700 dark:hover:bg-violet-900/20">
              <span className="text-xl">🔒</span>
              <div>
                <p className="font-semibold text-sm">Logout</p>
                <p className="text-xs text-zinc-500">Sign out of admin panel</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}