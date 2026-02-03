import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Development', href: '#development' },
    { label: 'Creative', href: '#creative' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="lg:relative fixed top-0 left-0 right-0 bg-white z-50 pb-4 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 pt-5">
            <a href="#home" className="block">
              <img src="/svg/logo-mobile.svg" alt="FullStack Howard" className="h-[40px] w-auto lg:hidden" />
              <img src="/svg/logo.svg" alt="FullStack Howard" className="h-[40px] w-auto hidden lg:block" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 pt-9">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="hover:text-blue-600 transition-colors text-[20px]"
                style={{ color: '#2c2c2c' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden pt-5">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-blue-600 focus:outline-none"
              style={{ color: '#2c2c2c' }}
              aria-label="Toggle menu"
            >
              <svg
                className="h-[40px] w-[40px]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block py-2 hover:text-blue-600 transition-colors text-[20px]"
                style={{ color: '#2c2c2c' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
