import { translations } from '../i18n/translations'

export default function Home({ lang = 'en' }) {
  const t = translations[lang]
  const skills = [
    { name: 'C# & .NET Framework', level: 95 },
    { name: 'JavaScript & TypeScript', level: 85 },
    { name: 'Python', level: 67 },
    { name: 'Java', level: 60 },
  ]

  const techStack = [
    'C#', '.NET Core', 'ASP.NET', 'Entity Framework', 'LINQ', 'WPF',
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
    'Python', 'Django', 'FastAPI', 'Flask',
    'Java', 'Spring Boot',
    'PostgreSQL', 'MongoDB', 'Redis', 'SQL Server',
    'Docker', 'Git', 'CI/CD', 'Azure'
  ]

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300">{t.hero.badge}</div>
            <h1 className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">Orçun Enes</h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">{t.hero.subtitle}</p>
            <div className="mt-6 flex gap-3">
              <a href="#portfolio" onClick={(e) => {e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})}} className="btn-primary">{t.hero.viewProjects}</a>
              <a href="#contact" onClick={(e) => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="btn-outline">{t.hero.getInTouch}</a>
            </div>
          </div>
          <div className="rounded-2xl p-10 ring-1 ring-violet-200/50 bg-gradient-to-br from-violet-100 to-sky-100 dark:from-violet-950/40 dark:to-sky-950/40 dark:ring-violet-700/40 hover:ring-violet-300/60 transition">
            <ul className="space-y-3 text-violet-900 dark:text-violet-100">
              <li className="flex items-center gap-2"><span className="text-violet-600 dark:text-violet-400">⚡</span> {t.hero.highlight1}</li>
              <li className="flex items-center gap-2"><span className="text-violet-600 dark:text-violet-400">📡</span> {t.hero.highlight2}</li>
              <li className="flex items-center gap-2"><span className="text-violet-600 dark:text-violet-400">🎯</span> {t.hero.highlight3}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="about" className="pb-16 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">{t.sections.recentWork}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: t.projects.network.title, desc: t.projects.network.desc, tags: ['.NET', 'SQL Server', 'Azure'] },
            { title: t.projects.analytics.title, desc: t.projects.analytics.desc, tags: ['React', 'JavaScript', 'Chart.js'] },
            { title: t.projects.ecommerce.title, desc: t.projects.ecommerce.desc, tags: ['React', 'Redux', 'Stripe'] }
          ].map((p, i) => (
            <article key={i} className="group rounded-xl border border-zinc-200 p-5 shadow-sm bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition">
              <h3 className="font-semibold mb-1 group-hover:text-violet-600 transition">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pb-16 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">{t.sections.skills}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 p-6 bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40">
            <h3 className="font-semibold mb-4">{t.sections.coretech}</h3>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300">{s.name}</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-200 rounded-full overflow-hidden dark:bg-zinc-800">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-sky-500 transition-all" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40">
            <h3 className="font-semibold mb-4">{t.sections.techstack}</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm rounded-lg border border-zinc-200 bg-white/60 text-zinc-700 hover:border-violet-300 hover:bg-violet-50 transition dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:border-violet-700 dark:hover:bg-violet-900/20">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="pb-16 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">{t.sections.experience}</h2>
        <div className="space-y-6">
          {[
            {company: t.experience.ttg.company, role: t.experience.ttg.role, type: t.experience.ttg.type, period: t.experience.ttg.period, desc: t.experience.ttg.desc},
            {company: t.experience.freelance.company, role: t.experience.freelance.role, type: t.experience.freelance.type, period: t.experience.freelance.period, desc: t.experience.freelance.desc}
          ].map((e) => (
            <div key={e.company} className="rounded-xl border border-zinc-200 p-6 bg-white/80 backdrop-blur shadow-sm dark:border-zinc-700 dark:bg-zinc-900/40 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{e.company}</h3>
                  <p className="text-sm text-violet-600 dark:text-violet-400">{e.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-500">{e.type}</span>
                  <p className="text-xs text-zinc-400">{e.period}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="pb-16 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">{t.sections.moreProjects}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            t.projects.willBeAdded,
            t.projects.willBeAdded,
            t.projects.willBeAdded,
            t.projects.willBeAdded,
            t.projects.willBeAdded,
            t.projects.willBeAdded
          ].map((desc, i) => (
            <article key={i} className="group rounded-xl border border-zinc-200 p-5 shadow-sm bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-violet-100 to-sky-100 dark:from-violet-900/20 dark:to-sky-900/20 mb-3"></div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-24 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">{t.sections.contact}</h2>
        <div className="rounded-xl border border-zinc-200 p-8 shadow-sm bg-white/80 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-zinc-600 dark:text-zinc-300 mb-4">{t.contact.text}</p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:orcuneness@hotmail.com" className="btn-primary">{t.contact.email}</a>
            <a href="https://github.com/orcunenes" target="_blank" rel="noreferrer" className="btn-outline">{t.contact.github}</a>
            <a href="https://linkedin.com/in/orcunenes" target="_blank" rel="noreferrer" className="btn-outline">{t.contact.linkedin}</a>
          </div>
        </div>
      </section>
    </div>
  )
}