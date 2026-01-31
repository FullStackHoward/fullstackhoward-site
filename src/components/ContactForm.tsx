import { useState } from 'react'

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '<YOUR_FORM_ID>'
    const url = `https://formspree.io/f/${formId}`

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState }),
      })

      if (res.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Name</span>
        <input
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Email</span>
        <input
          type="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Message</span>
        <textarea
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          rows={4}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded disabled:opacity-60"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'success' && <p className="text-green-600">Thanks — I&apos;ll be in touch!</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  )
}
