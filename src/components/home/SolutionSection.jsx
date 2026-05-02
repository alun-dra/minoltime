import {
  Building2,
  Smartphone,
  ScanLine, // mejor que CreditCard para marcación
  BarChart3,
} from 'lucide-react'

function SolutionSection() {
  const highlights = [
    {
      title: 'Control centralizado',
      text: 'Administra sucursales, dispositivos y funcionarios desde una sola plataforma.',
      icon: Building2,
    },
    {
      title: 'Marcación flexible',
      text: 'QR, código de acceso o tarjeta desde celular o tablet.',
      icon: Smartphone,
    },
    {
      title: 'Sin hardware complejo',
      text: 'Elimina máquinas tradicionales y simplifica la implementación.',
      icon: ScanLine,
    },
    {
      title: 'Información en tiempo real',
      text: 'Visualiza asistencia, atrasos y reportes de forma clara.',
      icon: BarChart3,
    },
  ]

  return (
    <section
      id="solucion"
      className="border-b border-slate-200 bg-[#f3f7fb] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#7c1cff]">
            Solución
          </span>

          <h2 className="text-3xl font-black tracking-tight text-[#050917] md:text-4xl">
            Controla la asistencia sin máquinas ni procesos complejos.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            MinolTime reemplaza el reloj control tradicional por una solución
            moderna, simple de implementar y pensada para empresas que necesitan
            orden, trazabilidad y control real.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className={`group border rounded-xl p-6 transition-all duration-200
                ${
                  index === 0
                    ? 'border-[#7c1cff] bg-white shadow-md'
                    : 'border-slate-200 bg-white shadow-sm hover:border-[#7c1cff] hover:shadow-md'
                }`}
              >
                {/* ICON */}
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg transition
                  ${
                    index === 0
                      ? 'bg-[#7c1cff] text-white'
                      : 'bg-[#f4efff] text-[#7c1cff] group-hover:bg-[#7c1cff] group-hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-bold text-[#050917]">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/solucion"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-[#050917] transition hover:border-[#7c1cff] hover:text-[#7c1cff]"
          >
            Ver cómo funciona
          </a>
        </div>

      </div>
    </section>
  )
}

export default SolutionSection