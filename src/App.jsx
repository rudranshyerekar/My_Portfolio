// src/App.jsx (router version)
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/Not Found.jsx'
import Loader from './components/Loader.jsx'
import { useLoader } from './hooks/useLoader.js'

export default function App() {
  const { loading, fadeOut, progress, skipLoading } = useLoader(2500)

  useEffect(() => {
    // Initialize AOS after loading is complete
    if (!loading) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      })
    }
  }, [loading])

  if (loading) {
    return (
      <Loader
        className={fadeOut ? 'fade-out' : ''}
        progress={progress}
        onSkip={skipLoading}
      />
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
