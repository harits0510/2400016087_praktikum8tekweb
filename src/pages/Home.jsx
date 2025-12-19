import { motion } from 'framer-motion'
import HexBackground from '../components/HexBackground'

export default function Home() {
  return (
    <section className="relative min-h-screen w-full flex items-center text-white overflow-hidden">

      <HexBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I’m <br />
            <span className="text-blue-500">Harits Arrozzaq</span>
          </h1>

          <p className="text-gray-400 max-w-xl mb-10 leading-relaxed text-lg">
            Saya membangun website modern dengan performa tinggi,
            desain profesional, dan pengalaman pengguna yang kuat.
          </p>

          <div className="flex gap-6">
            <a
              href="/projects"
              className="px-8 py-4 bg-blue-500 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          <img
            src="/Profile.png"
            alt="Harits Arrozzaq"
            className="relative w-[360px] md:w-[360px] drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </div>
    </section>
  )
}