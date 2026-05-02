import Header from './Header'
import Footer from './Footer'

function MainLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#f3f7fb] text-[#050917]">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout