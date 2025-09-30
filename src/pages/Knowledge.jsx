const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Prisma', level: 'Intermediate' },
]

export default function Knowledge() {
  return (
    <section className="container py-14">
      <h1 className="text-4xl font-bold mb-6">Knowledge</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-700">
          <h2 className="font-semibold mb-4">Skills</h2>
          <ul className="space-y-3">
            {skills.map((s) => (
              <li key={s.name} className="flex items-center justify-between">
                <span>{s.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{s.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-700">
          <h2 className="font-semibold mb-4">Toolbox</h2>
          <div className="flex flex-wrap gap-2">
            {['Vite','Vitest','ESLint','Prettier','GitHub Actions'].map((t) => (
              <span key={t} className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


