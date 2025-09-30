import { Link } from 'react-router-dom'

const posts = [
  { slug: 'introducing-portfolio', title: 'Introducing my portfolio', date: '2025-09-30', excerpt: 'A quick tour of the new site and what I’m building next.' },
  { slug: 'react-performance-tips', title: 'React performance tips', date: '2025-09-20', excerpt: 'Practical techniques to keep your app snappy and responsive.' },
  { slug: 'design-system-notes', title: 'Notes on building a design system', date: '2025-09-10', excerpt: 'Tokens, components, and a workflow that scales.' },
]

export default function Blog() {
  return (
    <section className="container py-14">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0 list-none">
        {posts.map((p) => (
          <li key={p.slug} className="group border border-gray-200 rounded-xl p-5 hover:shadow-md transition dark:border-gray-700">
            <time className="text-xs text-gray-500">{p.date}</time>
            <h3 className="mt-1 font-semibold group-hover:text-primary-700 transition">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.excerpt}</p>
            <div className="mt-3">
              <Link className="text-primary-700 hover:underline" to={`/blog/${p.slug}`}>Read more →</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}


