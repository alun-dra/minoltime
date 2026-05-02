import { Helmet } from 'react-helmet-async'
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

function Beneficios() {
  const pageUrl = 'https://www.minoltime.cl/beneficios'
  const pageTitle =
    'Beneficios MinolTime | Control de asistencia para empresas'
  const pageDescription =
    'Conoce los beneficios de MinolTime: reduce errores, controla asistencia por sucursal, elimina procesos manuales y mejora la gestión de recursos humanos.'

  const benefits = [
    {
      icon: FileText,
      title: 'Menos planillas y procesos manuales',
      text: 'Centraliza las marcaciones en una plataforma clara y evita depender de registros desordenados o información duplicada.',
    },
    {
      icon: Clock3,
      title: 'Control real de entradas y salidas',
      text: 'Revisa asistencia, atrasos y actividad diaria para tomar decisiones con información confiable.',
    },
    {
      icon: Building2,
      title: 'Gestión por sucursal',
      text: 'Organiza funcionarios, dispositivos y puntos de acceso según la operación de cada empresa.',
    },
    {
      icon: Smartphone,
      title: 'Implementación rápida',
      text: 'Puedes comenzar usando celular o tablet como punto de marcación, sin instalar máquinas complejas.',
    },
    {
      icon: ShieldCheck,
      title: 'Sin biometría facial ni huella',
      text: 'Reduce la exposición a datos sensibles usando QR, código de acceso o tarjeta.',
    },
    {
      icon: BarChart3,
      title: 'Reportes para gestionar mejor',
      text: 'Visualiza dashboards diarios y mensuales para entender el comportamiento de asistencia.',
    },
  ]

  const businessValues = [
    'Reduce errores administrativos.',
    'Mejora la trazabilidad de la asistencia.',
    'Ordena la operación por sucursal y funcionario.',
    'Acelera la revisión de marcaciones.',
    'Facilita reportes para recursos humanos.',
    'Permite escalar a más usuarios y dispositivos.',
  ]

  const roles = [
    {
      title: 'Para recursos humanos',
      text: 'Menos tiempo revisando planillas y más claridad para administrar horarios, funcionarios, atrasos y asistencia.',
    },
    {
      title: 'Para operaciones',
      text: 'Mayor control por sucursal, punto de acceso y dispositivo autorizado, sin depender de máquinas tradicionales.',
    },
    {
      title: 'Para gerencia',
      text: 'Información clara para tomar decisiones, detectar problemas y mejorar la gestión laboral.',
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
          content="beneficios control de asistencia, software asistencia empresas, reducir errores asistencia, control horario empresas, recursos humanos, MinolTime"
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
            name: 'Beneficios MinolTime',
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

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <span className="inline-flex rounded-full border border-[#7c1cff]/60 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Beneficios
              </span>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
                Menos errores operativos. Más control para tu empresa.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                MinolTime ayuda a ordenar la asistencia, reducir trabajo manual
                y entregar información clara para recursos humanos, operaciones
                y gerencia.
              </p>

              <a
                href="/contacto"
                className="mt-8 inline-flex rounded-xl bg-[#7c1cff] px-7 py-4 text-sm font-black text-white transition hover:bg-[#6414d9]"
              >
                Solicitar demo
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Impacto directo
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  ['Errores', 'Menos correcciones manuales'],
                  ['Tiempo', 'Procesos más rápidos'],
                  ['Control', 'Datos claros por sucursal'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-2xl font-black text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-300">{text}</p>
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
                Ventajas principales
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Beneficios pensados para una operación real.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                No se trata solo de marcar asistencia. Se trata de tener orden,
                trazabilidad y visibilidad para administrar mejor a tu equipo.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => {
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

        <section className="border-y border-slate-200 bg-[#f3f7fb] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Valor para la empresa
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Convierte la asistencia en información útil.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                Con MinolTime, la empresa deja de depender de registros aislados
                y obtiene una visión más clara de lo que ocurre con sus equipos.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {businessValues.map((item) => (
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
            <div className="grid gap-6 lg:grid-cols-3">
              {roles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-[#7c1cff] hover:shadow-lg"
                >
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                    Beneficio
                  </p>

                  <h3 className="mt-5 text-2xl font-black text-[#050917]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#18365f]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#050917] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Diferenciador
              </span>

              <h2 className="mt-4 text-4xl font-black">
                Control de asistencia sin depender de biometría.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                MinolTime permite operar con métodos menos invasivos como QR,
                código de acceso o tarjeta, reduciendo la exposición a datos
                sensibles de los trabajadores.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              {[
                'Sin reconocimiento facial.',
                'Sin huella digital.',
                'Marcación mediante QR, código o tarjeta.',
                'Mayor confianza para trabajadores y empresas.',
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/10 py-4 last:border-b-0"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[#c4a7ff]" />
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
                ¿Quieres reducir errores y ordenar la asistencia de tu empresa?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Agenda una demo y revisamos cómo MinolTime puede ayudarte según
                tu cantidad de trabajadores, sucursales y operación.
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

export default Beneficios