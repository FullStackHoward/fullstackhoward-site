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
        <title>FullStackHoward | Full-Stack Developer & Marketing Technologist | DC, MD, VA</title>
        <meta 
        name="description" 
        content="Senior front-end engineer specializing in marketing technology for DC, Baltimore, and DMV area businesses. I build digital experiences that convert—React, Python, WordPress, HubSpot, and marketing automation solutions." 
      />
      <meta name="keywords" content="full-stack developer DC, web developer Baltimore, marketing technology specialist Maryland, React developer DMV, front-end engineer Washington DC, WordPress developer Baltimore, web design DC, marketing automation developer, HubSpot developer Maryland, Python developer DMV area" />
      <meta name="author" content="Howard" />
      <link rel="canonical" href="https://fullstackhoward.com" />
        
        {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fullstackhoward.com/" />
      <meta property="og:title" content="Full-Stack Web Developer & Designer | Marketing Technology Specialist | DC, MD, VA" />
      <meta 
        property="og:description" 
        content="Senior front-end engineer specializing in marketing technology. I build digital experiences that convert for businesses in DC, Baltimore, and the DMV area." 
      />
      <meta property="og:image" content="https://fullstackhoward.com/og-image.jpg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Full Stack Howard" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://fullstackhoward.com/" />
      <meta property="twitter:title" content="Full-Stack Web Developer & Designer | Marketing Technology Specialist | DC, MD, VA" />
      <meta 
        property="twitter:description" 
        content="Senior front-end engineer specializing in marketing technology. I build digital experiences that convert for businesses in DC, Baltimore, and the DMV area." 
      />
      <meta property="twitter:image" content="https://fullstackhoward.com/og-image.jpg" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-MD" />
      <meta name="geo.region" content="US-DC" />
      <meta name="geo.region" content="US-VA" />
      <meta name="geo.placename" content="Washington DC, Baltimore, DMV Area" />

      {/* Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Full Stack Howard",
            "image": "https://fullstackhoward.com/img/logo.png",
            "description": "Senior front-end engineer and full-stack web developer specializing in marketing technology for businesses in Washington DC, Baltimore, and the DMV area.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "MD",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Washington DC"
              },
              {
                "@type": "City",
                "name": "Baltimore"
              },
              {
                "@type": "State",
                "name": "Maryland"
              },
              {
                "@type": "State",
                "name": "Virginia"
              }
            ],
            "priceRange": "$2500-$50000",
            "url": "https://fullstackhoward.com",
            "telephone": "+1-504-289-7988",
            "email": "contact@fullstackhoward.com",
            "serviceType": [
              "Web Development",
              "Front-End Engineering",
              "Marketing Technology",
              "Web Design",
              "React Development",
              "WordPress Development",
              "Marketing Automation"
            ],
            "knowsAbout": [
              "React",
              "JavaScript",
              "TypeScript",
              "Python",
              "WordPress",
              "Drupal",
              "HubSpot",
              "Marketing Automation",
              "Google Analytics",
              "Web Performance Optimization"
            ]
          })
        }}
      />

      {/* Structured Data - Person Schema (Professional Identity) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Howard",
            "jobTitle": "Senior Front-End Engineer & Marketing Technology Specialist",
            "url": "https://fullstackhoward.com",
            "sameAs": [
              "https://howard.codes",
              "https://mrhoward.net",
              "https://linkedin.com/in/fullstackhoward",
              "https://github.com/fullstackhoward"
            ],
            "knowsAbout": [
              "Web Development",
              "Front-End Engineering",
              "Marketing Technology",
              "React",
              "Python",
              "WordPress",
              "HubSpot",
              "Marketing Automation"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Full-Stack Web Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Washington DC Metropolitan Area"
              }
            }
          })
        }}
      />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
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
