function ContactSection() {
  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-10 lg:p-14">

          {/* LABEL */}
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#7c1cff]">
            Contacto
          </span>

          {/* TITLE */}
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[#050917] md:text-4xl">
            Agenda una demo y empieza a controlar la asistencia de tu empresa.
          </h2>

          {/* TEXT */}
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Te mostramos cómo implementar MinolTime en tu operación, configurar
            sucursales, dispositivos y comenzar a registrar asistencia en pocos pasos.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contacto" // 🔥 aquí irá tu página con formulario
              className="inline-flex items-center justify-center rounded-lg bg-[#7c1cff] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#6414d9]"
            >
              Agendar demo
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection