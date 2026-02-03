import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    budget: '', 
    message: '' 
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mpqlboaw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState }),
      })

      if (res.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', budget: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  const budgetOptions = [
    'Small Project ($2,500 - $7,500)',
    'Medium Project ($7,500 - $20,000)',
    'Large Project ($20,000 - $50,000)',
    'Enterprise ($50,000+)'
  ]

  return (
    <section className="bg-[#CDCDCD] py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center md:text-left">
              Email Me
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700 mb-2">Full Name</span>
                  <input
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-500 bg-white"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-gray-700 mb-2">Email</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-500 bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Budget</span>
                <select
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  required
                  className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-500 bg-white"
                >
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="block text-sm font-medium text-gray-700 mb-2">Tell Me More</span>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={6}
                  required
                  className="block w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-500 bg-white"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-[#2c2c2c] hover:bg-[#3c3c3c] text-white py-4 rounded font-medium disabled:opacity-60 transition-colors"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>

              {status === 'success' && <p className="text-green-600">Thanks — I&apos;ll be in touch!</p>}
              {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
            </form>
          </div>

          {/* Right Column - Help Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center md:text-left">
              Help <span className="underline decoration-[#2c2c2c] decoration-[6px] underline-offset-[5px]">Me</span> Help <span className="underline decoration-[#4AD600] decoration-[6px] underline-offset-[5px]">You</span>
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• What problem are you trying to solve? <span className="text-gray-600">(Be specific!)</span></li>
              <li>• What's your timeline? <span className="text-gray-600">(Next week? Next quarter?)</span></li>
              <li>• Do you have a budget range in mind?</li>
              <li>• What does success look like for this project?</li>
              <li>• Do you have existing brand assets or are we starting fresh?</li>
              <li>• Who's the target audience?</li>
              <li>• Any examples of sites/designs you love <span className="text-gray-600">(or hate)?</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
