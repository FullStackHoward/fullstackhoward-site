import Head from 'next/head'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>FullStack Howard — Build faster</title>
        <meta name="description" content="Landing page / lead capture" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">FullStack Howard</h1>
            <p className="mt-2 text-gray-600">Fast, focused landing page to capture leads</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-2">I help teams ship production-ready apps</h2>
              <p className="text-gray-700 mb-4">Design-to-code from your Figma wireframes — responsive, fast, and ready to collect leads.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Landing page built with Next.js + Tailwind</li>
                <li>Formspree-powered lead capture</li>
                <li>Easy to customize from your Figma layout</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
