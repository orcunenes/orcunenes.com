import { useEffect, useState, useRef } from 'react'

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

export default function LanguageToggle({ onLanguageChange }) {
  const [lang, setLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('language') || 'en'
    setLang(stored)
    onLanguageChange?.(stored)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function selectLanguage(code) {
    setLang(code)
    localStorage.setItem('language', code)
    onLanguageChange?.(code)
    setIsOpen(false)
  }

  const currentLang = languages.find(l => l.code === lang) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className="inline-flex h-9 px-3 items-center justify-center gap-1 rounded-md border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 text-xs font-medium transition"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.code.toUpperCase()}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800 z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => selectLanguage(l.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 first:rounded-t-lg last:rounded-b-lg transition ${
                lang === l.code ? 'bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400' : 'text-zinc-700 dark:text-zinc-300'
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
