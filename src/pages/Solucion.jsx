import { Helmet } from 'react-helmet-async'
import MainLayout from '../components/layout/MainLayout'

function Solucion() {
  const steps = [
    {
      number: '01',
      title: 'Sucursal',
      text: 'Organiza la operación por empresa, sucursal y punto de acceso.',
    },
    {
      number: '02',
      title: 'Dispositivo',
      text: 'Convierte un celular o tablet en punto de marcación autorizado.',
    },
    {
      number: '03',
      title: 'Funcionario',
      text: 'Asigna horarios, credenciales y accesos permitidos.',
    },
    {
      number: '04',
      title: 'Marcación',
      text: 'Registra entrada o salida con QR, código o tarjeta.',
    },
  ]

  return (
    <>
      <Helmet>
        <html lang="es" />

        <title>
          Solución MinolTime | Control de asistencia sin máquinas tradicionales
        </title>

        <meta
          name="description"
          content="Conoce la solución MinolTime para controlar asistencia, funcionarios, sucursales, horarios, dispositivos y puntos de acceso sin máquinas tradicionales ni biometría."
        />

        <meta
          name="keywords"
          content="control de asistencia, reloj control, software asistencia, marcación QR, marcación con tarjeta, asistencia laboral, control horario, MinolTime"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.minoltime.cl/solucion" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Solución MinolTime | Control de asistencia sin máquinas tradicionales"
        />
        <meta
          property="og:description"
          content="Administra funcionarios, sucursales, horarios, dispositivos y puntos de acceso desde una plataforma web moderna."
        />
        <meta property="og:url" content="https://www.minoltime.cl/solucion" />
        <meta property="og:site_name" content="MinolTime" />
        <meta property="og:image" content="https://www.minoltime.cl/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Solución MinolTime | Control de asistencia"
        />
        <meta
          name="twitter:description"
          content="Control de asistencia para empresas sin máquinas tradicionales ni equipos biométricos."
        />
        <meta name="twitter:image" content="https://www.minoltime.cl/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Solución MinolTime',
            url: 'https://www.minoltime.cl/solucion',
            description:
              'Solución SaaS para controlar asistencia, funcionarios, sucursales, horarios, dispositivos y puntos de acceso sin máquinas tradicionales.',
            isPartOf: {
              '@type': 'WebSite',
              name: 'MinolTime',
              url: 'https://www.minoltime.cl/',
            },
          })}
        </script>
      </Helmet>

      <MainLayout>
        <section className="relative overflow-hidden bg-[#050917] py-24 text-white">
          <div className="absolute right-0 top-0 h-80 w-80 bg-[#7c1cff]/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 bg-[#7c1cff]/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <span className="mb-6 inline-block border border-[#7c1cff] px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#b794ff]">
                Solución MinolTime
              </span>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                Control de asistencia sin máquinas tradicionales.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                MinolTime centraliza la gestión de funcionarios, sucursales,
                horarios, dispositivos y puntos de acceso en una plataforma
                simple, moderna y escalable.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b794ff]">
                Operación conectada
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Web administrativa',
                  'App de marcación',
                  'Reportes operativos',
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-4">
              {steps.map((item) => (
                <article
                  key={item.number}
                  className="group border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:border-[#7c1cff] hover:bg-white hover:shadow-lg"
                >
                  <p className="text-sm font-black tracking-[0.25em] text-[#7c1cff]">
                    {item.number}
                  </p>

                  <h2 className="mt-8 text-2xl font-black text-[#050917]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#18365f]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f3f7fb] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div className="border border-slate-200 bg-white p-10 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Para administración
              </span>

              <h2 className="mt-5 text-4xl font-black text-[#050917]">
                Todo se configura desde la web.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                Recursos humanos puede administrar usuarios, horarios,
                sucursales, dispositivos y accesos sin procesos manuales ni
                planillas.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-10 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Para la operación
              </span>

              <h2 className="mt-5 text-4xl font-black text-[#050917]">
                La marcación ocurre desde la app.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                El dispositivo autorizado permite marcar entrada o salida
                mediante QR, código de acceso o tarjeta con código de barra.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-[#7c1cff] p-10 text-white lg:p-14">
              <h2 className="max-w-3xl text-4xl font-black">
                Una solución pensada para empresas que necesitan control real.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Reduce errores, mejora la trazabilidad y elimina la dependencia
                de equipos biométricos o máquinas antiguas.
              </p>

              <a
                href="/contacto"
                className="mt-8 inline-flex bg-white px-7 py-4 text-sm font-black text-[#7c1cff] transition hover:bg-violet-50"
              >
                Solicitar demo
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default Solucion