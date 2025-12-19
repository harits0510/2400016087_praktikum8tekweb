import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-8 h-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        
        <span className="text-sm font-bold tracking-[0.3em] text-white">
          HARITS<span className="text-blue-500">.</span>
        </span>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={
              pathname === '/'
                ? 'relative px-4 py-2 text-sm font-medium tracking-widest transition-all duration-300 text-white after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-6 after:-translate-x-1/2 after:bg-blue-500'
                : 'relative px-4 py-2 text-sm font-medium tracking-widest transition-all duration-300 text-gray-300 hover:text-white'
            }
          >
            HOME
          </Link>

          <Link
            to="/projects"
            className={
              pathname === '/projects'
                ? 'relative px-4 py-2 text-sm font-medium tracking-widest transition-all duration-300 text-white after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-6 after:-translate-x-1/2 after:bg-blue-500'
                : 'relative px-4 py-2 text-sm font-medium tracking-widest transition-all duration-300 text-gray-300 hover:text-white'
            }
          >
            PROJECTS
          </Link>
        </nav>

        <Link
          to="/contact"
          className="ml-2 px-5 py-2 rounded-full bg-blue-600/80 text-white text-xs font-semibold tracking-widest hover:bg-blue-600 shadow-lg shadow-blue-600/30 transition"
        >
          CONTACT
        </Link>
      </div>
    </header>
  )
}