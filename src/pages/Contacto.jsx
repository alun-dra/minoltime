import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Turnstile } from '@marsidev/react-turnstile'
import {
  Building2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  CheckCircle2,
} from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'

function Contacto() {
  const pageUrl = 'https://www.minoltime.cl/contacto'
  const pageTitle = 'Contacto MinolTime | Agenda una demo'
  const pageDescription =
    'Contacta a MinolTime para agendar una demo del sistema de control de asistencia para empresas con QR, código de acceso y tarjetas.'

  const turnstileRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    workers: '',
    message: '',
    website: '',
  })

  const [turnstileToken, setTurnstileToken] = useState('')

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const resetTurnstile = () => {
    setTurnstileToken('')
    turnstileRef.current?.reset()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus({
      loading: true,
      success: false,
      error: '',
    })

    try {
      const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '')

      if (!apiUrl) {
        throw new Error('Falta configurar VITE_API_URL')
      }

      if (!turnstileToken) {
        throw new Error('Debes completar la verificación de seguridad')
      }

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.message || 'No se pudo enviar el mensaje')
      }

      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        workers: '',
        message: '',
        website: '',
      })

      resetTurnstile()

      setStatus({
        loading: false,
        success: true,
        error: '',
      })
    } catch (error) {
      resetTurnstile()

      setStatus({
        loading: false,
        success: false,
        error:
          error.message ||
          'No pudimos enviar el mensaje. Intenta nuevamente o contáctanos por correo.',
      })
    }
  }

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="contacto MinolTime, demo control de asistencia, software asistencia empresas, reloj control digital, control horario empresas"
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
      </Helmet>

      <MainLayout>
        <section className="relative overflow-hidden bg-[#050917] py-24 text-white">
          <div className="absolute right-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#7c1cff]/35 blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#7c1cff]/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
            <div>
              <span className="inline-flex rounded-full border border-[#7c1cff]/60 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Contacto
              </span>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-6xl">
                Agenda una demo de MinolTime para tu empresa.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Cuéntanos sobre tu operación, cantidad de trabajadores,
                sucursales y necesidades. Te ayudamos a elegir el plan correcto
                e implementar control de asistencia sin máquinas tradicionales.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c4a7ff]">
                Qué revisamos en la demo
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Cantidad de trabajadores.',
                  'Sucursales y puntos de acceso.',
                  'Métodos de marcación.',
                  'Planes, tarjetas e integraciones.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#c4a7ff]" />
                    <p className="text-sm font-semibold leading-6 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f7fb] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7c1cff]">
                Formulario
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#050917]">
                Completa tus datos y te contactamos.
              </h2>

              <div className="mt-8 grid gap-4">
                {[
                  ['Demo comercial', Building2],
                  ['Revisión de plan', MessageSquare],
                  ['Integraciones API', Mail],
                ].map(([label, Icon]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-[#7c1cff]" />
                    <p className="text-sm font-bold text-[#050917]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-[#050917]">
                    Nombre
                  </span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3">
                    <User className="h-5 w-5 text-[#7c1cff]" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-sm text-[#050917] outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#050917]">
                    Empresa
                  </span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3">
                    <Building2 className="h-5 w-5 text-[#7c1cff]" />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-sm text-[#050917] outline-none"
                      placeholder="Nombre de empresa"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#050917]">
                    Correo
                  </span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3">
                    <Mail className="h-5 w-5 text-[#7c1cff]" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-sm text-[#050917] outline-none"
                      placeholder="correo@empresa.cl"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#050917]">
                    Teléfono
                  </span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3">
                    <Phone className="h-5 w-5 text-[#7c1cff]" />
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm text-[#050917] outline-none"
                      placeholder="+56 9..."
                    />
                  </div>
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-bold text-[#050917]">
                  Cantidad de trabajadores
                </span>
                <select
                  name="workers"
                  value={form.workers}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm text-[#050917] outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="1-50">1 a 50 trabajadores</option>
                  <option value="51-100">51 a 100 trabajadores</option>
                  <option value="101-200">101 a 200 trabajadores</option>
                  <option value="200+">Más de 200 trabajadores</option>
                  <option value="integracion">Quiero integración/API</option>
                </select>
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-bold text-[#050917]">
                  Mensaje
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm text-[#050917] outline-none"
                  placeholder="Cuéntanos qué necesitas implementar..."
                />
              </label>

              <div className="mt-6">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  options={{
                    theme: 'light',
                    size: 'flexible',
                  }}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken('')}
                  onError={() => setTurnstileToken('')}
                />
              </div>

              {status.error && (
                <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                  {status.error}
                </p>
              )}

              {status.success && (
                <p className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
                  Mensaje enviado correctamente. Te contactaremos pronto.
                </p>
              )}

              <button
                type="submit"
                disabled={status.loading || !turnstileToken}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#7c1cff] px-7 py-4 text-sm font-black text-white transition hover:bg-[#6414d9] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                {status.loading ? 'Enviando...' : 'Enviar solicitud'}
              </button>
            </form>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default Contacto