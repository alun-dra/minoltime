function PlansSection() {
  const plans = [
    {
      name: 'Inicial',
      users: 'Hasta 50 trabajadores',
      price: '$49.990',
      note: '/mes',
    },
    {
      name: 'Empresa',
      users: 'Hasta 200 trabajadores',
      price: '$199.990',
      note: '/mes',
      featured: true,
    },
    {
      name: 'Corporativo',
      users: 'Más de 200 trabajadores',
      price: 'A medida',
    },
  ]

  return (
    <section id="planes" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#7c1cff]">
            Planes
          </span>

          <h2 className="text-4xl font-black text-[#050917]">
            Planes simples que crecen contigo.
          </h2>

          <p className="mt-4 text-base text-slate-500">
            Elige según tu equipo. Escala cuando lo necesites.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition ${
                plan.featured
                  ? 'border-[#7c1cff] shadow-lg'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* FEATURED BADGE */}
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#7c1cff] px-3 py-1 text-xs font-bold text-white">
                  Más popular
                </span>
              )}

              {/* NAME */}
              <h3 className="text-lg font-bold text-[#050917]">
                {plan.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {plan.users}
              </p>

              {/* PRICE */}
              <div className="mt-6">
                <span className="text-4xl font-black text-[#050917]">
                  {plan.price}
                </span>
                {plan.note && (
                  <span className="ml-1 text-sm text-slate-400">
                    {plan.note}
                  </span>
                )}
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• Control de asistencia</li>
                <li>• Gestión de sucursales</li>
                <li>• Reportes</li>
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-[#7c1cff] text-white hover:bg-[#6414d9]'
                    : 'bg-slate-100 text-[#050917] hover:bg-slate-200'
                }`}
              >
                Consultar plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlansSection