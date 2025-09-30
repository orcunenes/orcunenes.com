export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-6 py-4 text-center text-sm text-zinc-500">
      <div className="mx-auto max-w-6xl px-4">
        <small>© {new Date().getFullYear()} orcunenes • Built with React + Vite</small>
      </div>
    </footer>
  )
}

