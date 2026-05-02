function SecuritySection() {
  return (
    <section id="seguridad" className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="mb-5 inline-block border border-[#d8c6ff] bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#7c1cff]">
            Seguridad
          </span>

          <h2 className="text-3xl font-black tracking-tight text-[#050917] md:text-4xl">
            Sin reconocimiento facial. Sin huella digital. Menos exposición a
            datos sensibles.
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-[#18365f]">
            MinolTime se enfoca en métodos de marcación menos invasivos, como
            QR, tarjetas y dispositivos autorizados. Esto permite a las empresas
            implementar control de asistencia manteniendo una política más
            responsable frente al tratamiento de información personal.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-slate-200 bg-[#f8fafc] p-5">
              <p className="font-black text-[#7c1cff]">No facial</p>
              <p className="mt-2 text-sm text-[#18365f]">
                No requiere reconocimiento de rostro.
              </p>
            </div>

            <div className="border border-slate-200 bg-[#f8fafc] p-5">
              <p className="font-black text-[#7c1cff]">No huella</p>
              <p className="mt-2 text-sm text-[#18365f]">
                No depende de datos biométricos de huella.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection