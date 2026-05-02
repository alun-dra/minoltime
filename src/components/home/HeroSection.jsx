import heroImg from '../../assets/hero.png'

function HeroSection() {
  const methods = [
    ['QR', 'Marcación inmediata'],
    ['Código', 'Acceso seguro'],
    ['Tarjeta', 'Código de barra'],
  ]

  return (
    <section id="inicio" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-5 w-fit rounded-lg border border-[#d8c6ff] bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#7c1cff]">
            Software SaaS para control de asistencia
          </span>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#050917] md:text-6xl">
            Control de asistencia moderno para empresas.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#18365f]">
            Registra entradas y salidas con QR, código de acceso o tarjeta,
            usando celular o tablet como punto de marcación. Sin máquinas
            tradicionales, sin biometría y con reportes claros para tu operación.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-xl bg-[#7c1cff] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#6414d9]"
            >
              Solicitar presentación
            </a>

            <a
              href="/como-funciona"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-[#050917] transition hover:border-[#7c1cff] hover:text-[#7c1cff]"
            >
              Cómo funciona
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm">
            {methods.map(([title, subtitle]) => (
              <div
                key={title}
                className="border-r border-slate-200 p-4 last:border-r-0"
              >
                <p className="text-2xl font-black text-[#7c1cff]">{title}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#18365f]">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-[#f3f7fb] p-8 shadow-sm">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="border-b border-slate-200 pb-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c1cff]">
                Plataforma MinolTime
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#050917]">
                Asistencia simple, trazable y sin equipos biométricos.
              </h2>
            </div>

            <img
              src={heroImg}
              alt="Plataforma MinolTime para control de asistencia"
              className="mx-auto my-8 max-h-[320px] w-full object-contain"
            />

            <div className="grid grid-cols-2 border-t border-slate-200 pt-5">
              <div className="border-r border-slate-200 pr-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#7c1cff]">
                  Web
                </p>
                <p className="mt-2 text-sm leading-6 text-[#18365f]">
                  Administra sucursales, horarios, funcionarios y accesos.
                </p>
              </div>

              <div className="pl-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#7c1cff]">
                  App
                </p>
                <p className="mt-2 text-sm leading-6 text-[#18365f]">
                  Marca desde celular o tablet con métodos flexibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection