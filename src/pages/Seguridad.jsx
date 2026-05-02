import { Helmet } from 'react-helmet-async'
import {
  ShieldCheck,
  EyeOff,
  Fingerprint,
  LockKeyhole,
  Database,
  Smartphone,
  QrCode,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

function Seguridad() {
  const pageUrl = 'https://www.minoltime.cl/seguridad'
  const pageTitle =
    'Seguridad MinolTime | Control de asistencia sin biometría facial ni huella'
  const pageDescription =
    'MinolTime permite controlar asistencia sin reconocimiento facial ni huella digital, reduciendo la exposición a datos biométricos sensibles mediante QR, código de acceso y tarjeta.'

  const risks = [
    {
      icon: EyeOff,
      title: 'Sin reconocimiento facial',
      text: 'MinolTime no necesita capturar ni procesar el rostro del trabajador para registrar asistencia.',
    },
    {
      icon: Fingerprint,
      title: 'Sin huella digital',
      text: 'La marcación no depende de huellas ni lectores biométricos tradicionales.',
    },
    {
      icon: Database,
      title: 'Menos datos sensibles',
      text: 'Al evitar biometría, la empresa reduce la exposición de información personal sensible.',
    },
    {
      icon: LockKeyhole,
      title: 'Accesos controlados',
      text: 'La operación se organiza con usuarios, contraseñas, dispositivos autorizados y permisos.',
    },
  ]

  const methods = [
    {
      icon: QrCode,
      title: 'QR',
      text: 'Marcación rápida y simple desde la app del funcionario.',
    },
    {
      icon: LockKeyhole,
      title: 'Código de acceso',
      text: 'Ingreso personal mediante código asignado al trabajador.',
    },
    {
      icon: FileCheck2,
      title: 'Tarjeta',
      text: 'Lectura de código de barra asociado al funcionario.',
    },
  ]

  const trustPoints = [
    'Evita el uso de rostro como mecanismo de marcación.',
    'Evita el uso de huella digital como identificador obligatorio.',
    'Permite operar con métodos menos invasivos.',
    'Reduce riesgos asociados al tratamiento de datos biométricos.',
    'Facilita una implementación más responsable para empresas.',
    'Mejora la confianza de los trabajadores frente al sistema.',
  ]

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="control de asistencia sin biometría, reloj control sin huella, asistencia sin reconocimiento facial, datos biométricos, protección de datos personales, MinolTime"
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
            name: 'Seguridad MinolTime',
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
                Seguridad
              </span>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
                Control de asistencia sin exponer datos biométricos.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                MinolTime evita el uso de reconocimiento facial y huella digital.
                La asistencia se registra con QR, código de acceso o tarjeta,
                ayudando a reducir la exposición de datos sensibles.
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
                Enfoque MinolTime
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Sin reconocimiento facial.',
                  'Sin huella digital.',
                  'Sin captura biométrica para marcar.',
                  'Métodos de asistencia menos invasivos.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-[#c4a7ff]" />
                    <p className="text-sm font-semibold leading-6 text-slate-200">
                      {item}
                    </p>
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
                Menos exposición
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Seguridad pensada para empresas y trabajadores.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                La biometría, como rostro o huella, puede implicar un tratamiento
                más delicado de información personal. MinolTime propone una
                alternativa práctica para controlar asistencia sin depender de
                esos mecanismos.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {risks.map((item) => {
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
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Métodos seguros
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Tres formas de marcar sin usar rostro ni huella.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                La empresa puede implementar métodos simples y controlados para
                registrar asistencia, manteniendo trazabilidad sin depender de
                dispositivos biométricos tradicionales.
              </p>
            </div>

            <div className="grid gap-5">
              {methods.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#7c1cff] hover:shadow-lg"
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

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Confianza operacional
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Protege la operación sin complicar la asistencia.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#18365f]">
                MinolTime ayuda a las empresas a implementar control de
                asistencia con una política más responsable frente a la
                información personal de sus trabajadores.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
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

        <section className="border-y border-slate-200 bg-[#050917] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Diferenciador
              </span>

              <h2 className="mt-4 text-4xl font-black">
                Una alternativa moderna al reloj biométrico tradicional.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                En vez de depender de lectores de huella o reconocimiento facial,
                MinolTime permite registrar asistencia mediante app, QR, código
                de acceso y tarjeta.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              {[
                'Menor exposición de datos biométricos.',
                'Trazabilidad por funcionario, sucursal y dispositivo.',
                'Métodos de marcación simples y auditables.',
                'Mejor experiencia para trabajadores y administración.',
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
                Controla asistencia sin depender de datos biométricos.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100">
                Agenda una demo y revisamos cómo implementar MinolTime en tu
                empresa usando QR, código de acceso o tarjeta.
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

export default Seguridad