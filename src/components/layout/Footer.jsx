function Footer() {
  const navItems = [
    ['Solución', '/solucion'],
    ['Beneficios', '/beneficios'],
    ['Seguridad', '/seguridad'],
    ['Planes', '/planes'],
    ['Contacto', '/contacto'],
  ]

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* TOP */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          
          {/* LOGO (CUADRADO como header) */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#7c1cff] text-sm font-black text-white">
              MT
            </div>

            <div>
              <p className="text-lg font-black text-[#050917]">
                MinolTime
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Control de asistencia
              </p>
            </div>
          </div>

          {/* NAV */}
          <nav className="flex flex-wrap gap-6 text-sm font-semibold text-slate-600">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-[#7c1cff]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-slate-200" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MinolTime. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#7c1cff]">
              Términos
            </a>
            <a href="#" className="transition hover:text-[#7c1cff]">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer