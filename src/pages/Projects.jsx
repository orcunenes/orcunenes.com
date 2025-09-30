import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="container py-14">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0 list-none">
        {projects.map((p) => (
          <li key={p.slug} className="group border border-gray-200 rounded-xl p-5 hover:shadow-md transition dark:border-gray-700">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold mb-1 group-hover:text-primary-700 transition">{p.title}</h3>
              {p.href ? <a href={p.href} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:underline">Live</a> : null}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <span key={t} className="rounded-full border border-gray-200 bg-white/60 px-2 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">{t}</span>
              ))}
            </div>
            <div className="mt-4">
              <Link className="text-primary-700 hover:underline" to={`/projects/${p.slug}`}>View details →</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

