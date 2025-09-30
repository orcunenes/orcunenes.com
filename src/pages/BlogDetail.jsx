import { useParams, Link } from 'react-router-dom'

export default function BlogDetail() {
  const { slug } = useParams()
  return (
    <section className="container py-12 prose prose-gray max-w-none dark:prose-invert">
      <Link className="text-primary-700 hover:underline" to="/blog">← Back to blog</Link>
      <h1 className="mt-4">{slug?.replaceAll('-', ' ')}</h1>
      <p>This is a placeholder for the blog post content. You can wire a markdown source later.</p>
    </section>
  )
}


