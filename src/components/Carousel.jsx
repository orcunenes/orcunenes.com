import { useEffect, useRef, useState } from 'react'

export default function Carousel({ items = [] }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  function go(next) {
    const len = items.length
    if (len === 0) return
    setIndex((i) => (i + next + len) % len)
  }

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
      <div ref={trackRef} className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((node, i) => (
          <div key={i} className="min-w-full p-6">
            {node}
          </div>
        ))}
      </div>
      {items.length > 1 ? (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}`} />
          ))}
        </div>
      ) : null}
      <button onClick={() => go(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white dark:bg-gray-800/80 dark:text-gray-200">‹</button>
      <button onClick={() => go(1)} className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white dark:bg-gray-800/80 dark:text-gray-200">›</button>
    </div>
  )
}


