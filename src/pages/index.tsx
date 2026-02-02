import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Development from '../components/Development'
import Creative from '../components/Creative'
import Marketing from '../components/Marketing'
import Portfolio from '../components/Portfolio'
import Contact from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>FullStack Howard — Build faster</title>
        <meta name="description" content="Landing page / lead capture" />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-24 lg:pt-16" style={{ backgroundColor: '#ffffff' }}>
        <Hero />
        <About />
        <Development />
        <Creative />
        <Marketing />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
