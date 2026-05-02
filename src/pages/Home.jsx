import { Helmet } from 'react-helmet-async'

import MainLayout from '../components/layout/MainLayout'
import HeroSection from '../components/home/HeroSection'
import SolutionSection from '../components/home/SolutionSection'
import BenefitsSection from '../components/home/BenefitsSection'
import SecuritySection from '../components/home/SecuritySection'
import PlansSection from '../components/home/PlansSection'
import ContactSection from '../components/home/ContactSection'

function Home() {
  return (
    <>
      <Helmet>
        <html lang="es" />

        <title>MinolTime | Control de asistencia para empresas</title>

        <meta
          name="description"
          content="MinolTime es un software SaaS de control de asistencia para empresas. Permite registrar asistencia mediante QR, tarjetas, dispositivos y marcación móvil autorizada, sin reconocimiento facial ni huella digital."
        />

        <meta
          name="keywords"
          content="control de asistencia, software de asistencia, reloj control, asistencia laboral, control horario, marcación QR, tarjetas de asistencia, asistencia empresas Chile, MinolTime"
        />

        <meta name="author" content="MinolTime" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.minoltime.cl/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="MinolTime | Control de asistencia para empresas" />
        <meta
          property="og:description"
          content="Controla asistencia, turnos y reportes mediante QR, tarjetas, dispositivos y marcación móvil autorizada."
        />
        <meta property="og:url" content="https://www.minoltime.cl/" />
        <meta property="og:site_name" content="MinolTime" />
        <meta property="og:image" content="https://www.minoltime.cl/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MinolTime | Control de asistencia para empresas" />
        <meta
          name="twitter:description"
          content="Software SaaS para control de asistencia empresarial con QR, tarjetas y marcación móvil autorizada."
        />
        <meta name="twitter:image" content="https://www.minoltime.cl/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'MinolTime',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'Software SaaS de control de asistencia para empresas mediante QR, tarjetas, dispositivos y marcación móvil autorizada.',
            url: 'https://www.minoltime.cl/',
            brand: {
              '@type': 'Brand',
              name: 'MinolTime',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'CLP',
              availability: 'https://schema.org/InStock',
            },
          })}
        </script>
      </Helmet>

      <MainLayout>
        <HeroSection />
        <SolutionSection />
        <BenefitsSection />
        <SecuritySection />
        <PlansSection />
        <ContactSection />
      </MainLayout>
    </>
  )
}

export default Home