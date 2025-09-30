import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-2">{project?.title ?? slug}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{project?.summary ?? 'Project details coming soon.'}</p>
      {project?.tags?.length ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-gray-200 bg-white/60 px-2 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">{t}</span>
          ))}
        </div>
      ) : null}
      {project?.href ? (
        <a href={project.href} target="_blank" rel="noreferrer" className="inline-block text-primary-700 hover:underline">Visit live →</a>
      ) : null}
      <div className="mt-6">
        <Link className="text-primary-700 hover:underline" to="/projects">← Back to projects</Link>
      </div>
    </section>
  )
}

