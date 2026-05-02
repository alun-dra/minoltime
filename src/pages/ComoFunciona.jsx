import { Helmet } from 'react-helmet-async'
import {
  Building2,
  TabletSmartphone,
  UserPlus,
  Clock3,
  QrCode,
  CreditCard,
  KeyRound,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

function ComoFunciona() {
  const pageUrl = 'https://www.minoltime.cl/como-funciona'
  const pageTitle =
    'Cómo funciona MinolTime | Control de asistencia con QR, código y tarjeta'
  const pageDescription =
    'Conoce cómo funciona MinolTime: crea sucursales, configura dispositivos, asigna funcionarios y registra asistencia con QR, código de acceso o tarjeta.'

  const steps = [
    {
      icon: Building2,
      title: 'Crea la sucursal',
      text: 'El administrador registra la empresa, sus sucursales y los puntos de acceso donde se realizarán las marcaciones.',
    },
    {
      icon: TabletSmartphone,
      title: 'Configura el dispositivo',
      text: 'Un celular o tablet inicia sesión como dispositivo autorizado para funcionar como punto de marcación.',
    },
    {
      icon: UserPlus,
      title: 'Registra funcionarios',
      text: 'Cada funcionario recibe sus credenciales, horario, sucursal y accesos permitidos dentro de la operación.',
    },
    {
      icon: Clock3,
      title: 'Asigna horarios',
      text: 'Define jornadas, turnos y reglas operativas para controlar entradas, salidas y atrasos.',
    },
    {
      icon: QrCode,
      title: 'Marca asistencia',
      text: 'El funcionario registra entrada o salida mediante QR, código de acceso o tarjeta con código de barra.',
    },
    {
      icon: BarChart3,
      title: 'Revisa reportes',
      text: 'Consulta dashboards diarios y mensuales con marcaciones, atrasos y actividad por sucursal.',
    },
  ]

  const methods = [
    {
      icon: QrCode,
      title: 'QR',
      text: 'Marcación rápida desde la app del funcionario.',
    },
    {
      icon: KeyRound,
      title: 'Código de acceso',
      text: 'Ingreso seguro mediante código personal.',
    },
    {
      icon: CreditCard,
      title: 'Tarjeta',
      text: 'Lectura de código de barra asociado al trabajador.',
    },
  ]

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="cómo funciona control de asistencia, marcación QR, código de acceso asistencia, tarjeta código de barra, reloj control digital, MinolTime"
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
            name: 'Cómo funciona MinolTime',
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
          <div className="absolute right-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#7c1cff]/35 blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#7c1cff]/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
            <div>
              <span className="inline-flex rounded-full border border-[#7c1cff]/60 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Cómo funciona
              </span>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
                Configura, marca y controla asistencia en un flujo simple.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                MinolTime une la administración web con una app móvil para
                registrar asistencia con QR, código de acceso o tarjeta, sin
                depender de máquinas tradicionales.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Flujo MinolTime
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Sucursal',
                  'Dispositivo',
                  'Funcionario',
                  'Marcación',
                  'Reportes',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7c1cff] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <p className="font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f3f7fb] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Paso a paso
              </span>

              <h2 className="mt-4 max-w-3xl text-4xl font-black text-[#050917]">
                Todo el proceso operativo, ordenado de principio a fin.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#7c1cff] hover:shadow-xl"
                  >
                    <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7c1cff]/10 text-sm font-black text-[#7c1cff] transition group-hover:bg-[#7c1cff] group-hover:text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7c1cff]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="relative mt-7 text-xl font-black text-[#050917]">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-[#18365f]">
                      {item.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Formas de marcar
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Tres métodos para registrar entrada y salida.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                La empresa puede operar con distintos métodos de marcación según
                el tipo de trabajador, sucursal o punto de acceso.
              </p>
            </div>

            <div className="grid gap-5">
              {methods.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:border-[#7c1cff] hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7c1cff] transition group-hover:bg-[#7c1cff] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#050917]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#18365f]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#050917] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Resultado
              </span>

              <h2 className="mt-4 text-4xl font-black">
                Menos trabajo manual y más visibilidad.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                El administrador puede revisar marcaciones, atrasos y actividad
                por sucursal sin depender de planillas o registros manuales.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              {[
                'Marcaciones centralizadas.',
                'Control por sucursal y dispositivo.',
                'Reportes diarios y mensuales.',
                'Operación sin biometría facial ni huella digital.',
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/10 py-4 last:border-b-0"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#c4a7ff]" />
                  <p className="text-sm font-semibold text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-[#7c1cff] p-10 text-white lg:p-14">
              <h2 className="max-w-3xl text-4xl font-black">
                ¿Quieres ver el flujo completo aplicado a tu empresa?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Agenda una presentación y revisamos cómo implementar MinolTime
                según tus sucursales, trabajadores y operación.
              </p>

              <a
                href="/contacto"
                className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 text-sm font-black text-[#7c1cff] transition hover:bg-violet-50"
              >
                Agendar demo
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default ComoFunciona