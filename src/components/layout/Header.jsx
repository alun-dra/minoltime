import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    ['Solución', '/solucion'],
    ['Cómo funciona', '/como-funciona'],
    ['Beneficios', '/beneficios'],
    ['Seguridad', '/seguridad'],
    ['Planes', '/planes'],
    ['Contacto', '/contacto'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center bg-[#7c1cff] text-sm font-black text-white">
            MT
          </div>

          <div>
            <p className="text-xl font-black tracking-tight text-[#050917]">
              MinolTime
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5b6f91]">
              Control de asistencia
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[#7c1cff]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="/contacto"
          className="hidden bg-[#7c1cff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6414d9] lg:inline-flex"
        >
          Solicitar demo
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6 text-[#050917]" />
          ) : (
            <Menu className="h-6 w-6 text-[#050917]" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-700 transition hover:text-[#7c1cff]"
              >
                {label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#7c1cff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#6414d9]"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header