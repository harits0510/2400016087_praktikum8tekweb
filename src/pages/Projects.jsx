import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HexBackground from '../components/HexBackground'

export default function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/harits0510/repos')
      .then(res => res.json())
      .then(data =>
        setRepos(data.filter(r => !r.fork).slice(0, 6))
      )
  }, [])

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      <HexBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-16">
          Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {repo.name}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {repo.description || 'No description'}
              </p>

              <span className="text-xs text-blue-400">
                {repo.language}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}