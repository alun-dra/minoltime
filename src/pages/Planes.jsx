import { Helmet } from 'react-helmet-async'
import {
  CheckCircle2,
  Users,
  Building2,
  BarChart3,
  CreditCard,
  Code2,
  Handshake,
} from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

function Planes() {
  const pageUrl = 'https://www.minoltime.cl/planes'
  const pageTitle =
    'Planes MinolTime | Precios para control de asistencia empresarial'
  const pageDescription =
    'Conoce los planes de MinolTime para control de asistencia: planes para 50, 100 y 200 trabajadores, opciones a medida, tarjetas de acceso e integración vía API.'

  const plans = [
    {
      name: 'Plan 50',
      users: 'Hasta 50 trabajadores',
      base: '$50.000',
      price: '$59.500',
      popular: false,
    },
    {
      name: 'Plan 100',
      users: 'Hasta 100 trabajadores',
      base: '$150.000',
      price: '$178.500',
      popular: true,
    },
    {
      name: 'Plan 200',
      users: 'Hasta 200 trabajadores',
      base: '$220.000',
      price: '$261.800',
      popular: false,
    },
  ]

  const included = [
    'Control de asistencia con QR, código de acceso o tarjeta.',
    'Gestión de funcionarios, horarios y sucursales.',
    'Dispositivos autorizados para marcación.',
    'Dashboard diario y mensual.',
    'Reportes operativos para administración.',
    'Soporte para implementación inicial.',
  ]

  const extras = [
    {
      icon: CreditCard,
      title: 'Tarjetas de acceso',
      text: 'Si la empresa no cuenta con tarjetas, podemos incluirlas como pago único según cantidad requerida.',
    },
    {
      icon: Code2,
      title: 'Acceso a API',
      text: 'Para integraciones externas, ofrecemos acceso a API por $119.000 mensual IVA incluido.',
    },
    {
      icon: Handshake,
      title: 'Integración personalizada',
      text: 'También podemos desarrollar la integración completa. El valor se cotiza según el alcance.',
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
          content="planes control de asistencia, precios reloj control, software asistencia empresas, control horario, planes MinolTime, API control de asistencia"
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
            name: 'Planes MinolTime',
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

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <span className="inline-flex rounded-full border border-[#7c1cff]/60 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
              Planes
            </span>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
              Planes claros según la cantidad de trabajadores.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Elige el plan según el tamaño de tu empresa. Puedes complementar
              MinolTime con tarjetas de acceso, API o integraciones personalizadas
              según tu operación.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    plan.popular
                      ? 'border-[#7c1cff] bg-white'
                      : 'border-slate-200 bg-[#f8fafc]'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-8 rounded-full bg-[#7c1cff] px-4 py-2 text-xs font-black text-white">
                      Más solicitado
                    </span>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7c1cff]">
                    <Users className="h-6 w-6" />
                  </div>

                  <h2 className="mt-7 text-2xl font-black text-[#050917]">
                    {plan.name}
                  </h2>

                  <p className="mt-2 text-sm font-semibold text-[#18365f]">
                    {plan.users}
                  </p>

                  <div className="mt-7">
                    <p className="text-sm font-semibold text-slate-500">
                      Valor base: {plan.base} + IVA
                    </p>
                    <p className="mt-2 text-4xl font-black text-[#050917]">
                      {plan.price}
                      <span className="ml-1 text-sm font-bold text-slate-500">
                        /mes IVA incluido
                      </span>
                    </p>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      'Control de asistencia',
                      'Gestión de sucursales',
                      'Reportes y dashboards',
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#7c1cff]" />
                        <p className="text-sm font-semibold text-[#18365f]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contacto"
                    className={`mt-8 inline-flex w-full justify-center rounded-xl px-6 py-4 text-sm font-black transition ${
                      plan.popular
                        ? 'bg-[#7c1cff] text-white hover:bg-[#6414d9]'
                        : 'bg-white text-[#050917] ring-1 ring-slate-200 hover:text-[#7c1cff] hover:ring-[#7c1cff]'
                    }`}
                  >
                    Consultar plan
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f3f7fb] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Incluido en los planes
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Todo lo necesario para comenzar a controlar asistencia.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                Los planes consideran las funciones principales de MinolTime para
                administrar trabajadores, horarios, sucursales, dispositivos y
                reportes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7c1cff]" />
                    <p className="text-sm font-semibold leading-6 text-[#18365f]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Opcionales
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Complementa MinolTime según tu operación.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                Si tu empresa necesita tarjetas, integraciones o conexión con
                otros sistemas, podemos agregar servicios complementarios.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {extras.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#7c1cff] hover:bg-white hover:shadow-xl"
                  >
                    <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#7c1cff]/10 transition group-hover:bg-[#7c1cff]/20" />

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7c1cff] transition group-hover:bg-[#7c1cff] group-hover:text-white">
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

        <section className="border-y border-slate-200 bg-[#050917] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Plan a medida
              </span>

              <h2 className="mt-4 text-4xl font-black">
                Para empresas con necesidades específicas.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Si necesitas más de 200 trabajadores, integraciones especiales,
                configuración avanzada o una implementación personalizada,
                podemos preparar una cotización a medida.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              {[
                'Más de 200 trabajadores.',
                'Integraciones con sistemas internos.',
                'Acceso a API por $119.000 mensual IVA incluido.',
                'Desarrollo de integración cotizado según alcance.',
                'Tarjetas de acceso como pago único según cantidad.',
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
                ¿No sabes qué plan elegir?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Agenda una presentación y revisamos el plan ideal según tu
                cantidad de trabajadores, sucursales, dispositivos e
                integraciones necesarias.
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

export default Planes