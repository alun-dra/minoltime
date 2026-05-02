function BenefitsSection() {
  const benefits = [
    {
      title: 'Reduce errores y pérdidas de información',
      text: 'Olvídate de planillas y registros manuales inconsistentes.',
    },
    {
      title: 'Control total de tu operación',
      text: 'Supervisa asistencia por sucursal, dispositivo y funcionario en tiempo real.',
    },
    {
      title: 'Implementación rápida',
      text: 'Comienza a operar con celular o tablet, sin hardware complejo.',
    },
    {
      title: 'Decisiones con datos reales',
      text: 'Accede a reportes claros de asistencia y comportamiento laboral.',
    },
    {
      title: 'Escala sin fricción',
      text: 'Agrega usuarios, sucursales y dispositivos fácilmente.',
    },
  ]

  return (
    <section
      id="beneficios"
      className="border-b border-slate-200 bg-gradient-to-b from-[#ffffff] to-[#f3f7fb] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        
        {/* TEXTO */}
        <div>
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#7c1cff]">
            Beneficios
          </span>

          <h2 className="text-3xl font-black leading-tight text-[#050917] md:text-4xl">
            Menos errores. Más control.
            <br />
            <span className="text-slate-500">
              Operación clara y sin fricción.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            MinolTime no solo registra asistencia. Te da visibilidad real,
            orden operativo y control sobre lo que pasa en tu empresa.
          </p>

          <a
            href="/beneficios"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#7c1cff] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#6414d9]"
          >
            Ver todos los beneficios
          </a>
        </div>

        {/* LISTA */}
        <div className="grid gap-5">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#7c1cff] hover:shadow-md"
            >
              {/* número */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4efff] text-sm font-bold text-[#7c1cff]">
                {index + 1}
              </div>

              <div>
                <p className="text-sm font-bold text-[#050917]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection