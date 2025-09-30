import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-violet-700 bg-violet-100' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800'
    }`

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 mb-4 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex items-center gap-2 py-3">
          <Link to="/" className="font-extrabold tracking-tight text-xl mr-2">orcunenes</Link>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={navLinkClass({ isActive: false })}>About</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className={navLinkClass({ isActive: false })}>Skills</a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className={navLinkClass({ isActive: false })}>Experience</a>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className={navLinkClass({ isActive: false })}>Portfolio</a>
          <div className="ml-auto flex items-center gap-2">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={navLinkClass({ isActive: false })}>Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

