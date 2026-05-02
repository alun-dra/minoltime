import { Helmet } from 'react-helmet-async'
import {
  Building2,
  Smartphone,
  Users,
  Clock3,
  MapPin,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

function Solucion() {
  const flow = [
    {
      icon: Building2,
      title: 'Configura la empresa',
      text: 'Crea sucursales, puntos de acceso y dispositivos autorizados para cada operación.',
    },
    {
      icon: Users,
      title: 'Asigna funcionarios',
      text: 'Registra trabajadores, horarios, credenciales y accesos permitidos.',
    },
    {
      icon: Smartphone,
      title: 'Marca desde la app',
      text: 'Usa celular o tablet como punto de marcación con QR, código o tarjeta.',
    },
    {
      icon: BarChart3,
      title: 'Controla en tiempo real',
      text: 'Revisa entradas, salidas, atrasos, asistencia diaria y reportes operativos.',
    },
  ]

  const features = [
    'Gestión de sucursales y puntos de acceso.',
    'Dispositivos autorizados por usuario y contraseña.',
    'Funcionarios con horarios y permisos asignados.',
    'Marcación con QR, código de acceso o tarjeta.',
    'Dashboards diarios y mensuales.',
    'Reportes para recursos humanos y administración.',
  ]

  const pageUrl = 'https://www.minoltime.cl/solucion'
  const pageTitle =
    'Solución MinolTime | Control de asistencia sin máquinas tradicionales'
  const pageDescription =
    'MinolTime es una solución SaaS para controlar asistencia, sucursales, funcionarios, horarios, dispositivos y puntos de acceso sin máquinas tradicionales ni biometría.'

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="control de asistencia, reloj control, software de asistencia, asistencia laboral, marcación QR, código de acceso, tarjetas de asistencia, control horario, MinolTime"
        />
        <meta name="author" content="MinolTime" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="MinolTime" />
        <meta property="og:image" content="https://www.minoltime.cl/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.minoltime.cl/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Solución MinolTime',
            url: pageUrl,
            description: pageDescription,
            isPartOf: {
              '@type': 'WebSite',
              name: 'MinolTime',
              url: 'https://www.minoltime.cl/',
            },
            about: {
              '@type': 'SoftwareApplication',
              name: 'MinolTime',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
            },
          })}
        </script>
      </Helmet>

      <MainLayout>
        <section className="relative overflow-hidden bg-[#050917] py-24 text-white">
          <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#7c1cff]/30 blur-3xl" />
          <div className="absolute bottom-[-140px] left-[-120px] h-96 w-96 rounded-full bg-[#7c1cff]/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
            <div>
              <span className="mb-6 inline-block rounded-full border border-[#7c1cff] px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Solución MinolTime
              </span>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                Control de asistencia moderno, simple y sin máquinas tradicionales.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                MinolTime conecta la gestión web con una app móvil para registrar
                entradas y salidas de funcionarios mediante QR, código de acceso
                o tarjeta. Todo con trazabilidad, reportes y control por sucursal.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contacto"
                  className="rounded-xl bg-[#7c1cff] px-7 py-4 text-center text-sm font-black text-white transition hover:bg-[#6414d9]"
                >
                  Solicitar demo
                </a>

                <a
                  href="/como-funciona"
                  className="rounded-xl border border-white/20 px-7 py-4 text-center text-sm font-black text-white transition hover:border-[#7c1cff] hover:text-[#c4a7ff]"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#c4a7ff]">
                Lo que resuelve
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Evita registros manuales y planillas desordenadas.',
                  'Reduce dependencia de equipos biométricos.',
                  'Ordena la asistencia por sucursal y funcionario.',
                  'Entrega visibilidad diaria y mensual de la operación.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#c4a7ff]" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Flujo de operación
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                De la configuración al reporte, en un solo sistema.
              </h2>

              <p className="mt-4 text-base leading-7 text-[#18365f]">
                La plataforma está diseñada para que recursos humanos o administración
                pueda controlar la asistencia sin procesos técnicos complejos.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {flow.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#7c1cff] hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7c1cff]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-7 text-xl font-black text-[#050917]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#18365f]">
                      {item.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f3f7fb] py-16 lg:py-24">
  <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
        Plataforma web
      </span>

      <h2 className="mt-5 text-3xl font-black leading-tight text-[#050917] sm:text-4xl">
        Administración clara para recursos humanos.
      </h2>

      <p className="mt-5 text-base leading-8 text-[#18365f]">
        Desde la web puedes crear sucursales, configurar puntos de acceso,
        asignar dispositivos, registrar funcionarios y definir horarios.
        Todo queda ordenado para que la operación sea fácil de controlar.
      </p>

      <div className="mt-8 grid gap-3">
        {[
          ['Sucursales', MapPin],
          ['Horarios', Clock3],
          ['Funcionarios', Users],
        ].map(([label, Icon]) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4"
          >
            <Icon className="h-5 w-5 shrink-0 text-[#7c1cff]" />
            <p className="text-sm font-bold text-[#050917]">{label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
        App de marcación
      </span>

      <h2 className="mt-5 text-3xl font-black leading-tight text-[#050917] sm:text-4xl">
        Celular o tablet como punto de control.
      </h2>

      <p className="mt-5 text-base leading-8 text-[#18365f]">
        El dispositivo autorizado inicia sesión en la app y queda listo para
        registrar entradas o salidas. El funcionario puede marcar usando QR,
        código de acceso o tarjeta con código de barra.
      </p>

      <div className="mt-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] sm:grid-cols-3">
        {['QR', 'Código', 'Tarjeta'].map((method) => (
          <div
            key={method}
            className="border-b border-slate-200 p-4 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <p className="text-lg font-black text-[#7c1cff]">{method}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Incluye
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Todo lo necesario para controlar la asistencia.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                MinolTime está pensado para empresas que quieren implementar rápido,
                ordenar su operación y tener información confiable.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                >
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-[#7c1cff]" />
                    <p className="text-sm font-semibold leading-6 text-[#18365f]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-[#7c1cff] p-10 text-white lg:p-14">
              <h2 className="max-w-3xl text-4xl font-black">
                Una solución pensada para empresas que necesitan control real.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Reduce errores, mejora la trazabilidad y elimina la dependencia
                de equipos biométricos o máquinas antiguas.
              </p>

              <a
                href="/contacto"
                className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 text-sm font-black text-[#7c1cff] transition hover:bg-violet-50"
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