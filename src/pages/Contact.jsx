import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Instagram, Linkedin } from 'lucide-react'
import HexBackground from '../components/HexBackground'

export default function Contact() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white flex items-center">
      <HexBackground />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 tracking-widest text-sm mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact Me
          </h1>

          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            Tertarik bekerja sama atau punya ide proyek?
            Jangan ragu untuk menghubungi saya.
          </p>

          {/* CONTACT LINKS */}
          <div className="space-y-4 text-sm">

            <a
              href="mailto:haritsarrozzaq10@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
            >
              <Mail size={18} />
              <span>haritsarrozzaq10@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/haritsarrozzaq_/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition"
            >
              <Instagram size={18} />
              <span>@haritsarrozzaq_</span>
            </a>

            <a
              href="https://www.linkedin.com/in/harits-arrozzaq-69115539b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <input
            required
            placeholder="Nama"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          <textarea
            required
            rows="5"
            placeholder="Pesan"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-black border border-blue-500/40 rounded-2xl px-10 py-8 text-center shadow-2xl"
            >
              <div className="text-blue-500 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">
                Pesan Terkirim
              </h3>
              <p className="text-gray-400 text-sm">
                Terima kasih, saya akan menghubungi Anda segera.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}