export default function Hero() {
  return (
    <section id="home" className="flex items-center justify-center px-6" style={{ height: '510px' }}>
      <style jsx>{`
        @keyframes drawUnderline {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .underline-container {
          position: relative;
          display: inline-block;
          padding-right: 10px;
        }
        .animated-underline {
          position: absolute;
          bottom: -20px;
          left: 15px;
          height: 20px;
          overflow: hidden;
          animation: drawUnderline 1.5s ease-out 0.5s forwards;
          width: 0;
        }
        .animated-underline img {
          height: 100%;
          width: auto;
        }
        .hero-button {
          transition: box-shadow 0.1s ease, transform 0.1s ease;
        }
        .hero-button:active {
          box-shadow: none !important;
          transform: translateY(2px);
        }
        
        /* Styles for very small phones only (under 400px) */
        @media (max-width: 399px) {
          .hero-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .hero-heading {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          .hero-button {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      `}</style>
      <div className="max-w-7xl w-full text-center hero-section">
        <h1 className="text-6xl font-extrabold mb-6 hero-heading">
          I Build Digital{' '}
          <span className="underline-container">
            Experiences
            <span className="animated-underline">
              <img src="/svg/greenstroke.svg" alt="" />
            </span>
          </span>
        </h1>
        <p className="text-[28px] font-semibold mb-8 max-w-3xl mx-auto hero-subtitle" style={{ color: '#525252' }}>
          Where creative direction meets robust engineering
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="hero-button px-8 py-4 text-2xl font-medium transition-colors inline-flex items-center justify-center"
            style={{ backgroundColor: 'var(--almost-black)', color: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }}
          >
            Schedule a <span style={{ color: '#6ceeac' }}>&nbsp;Call</span>
          </a>
          <a
            href="mailto:contact@fullstackhoward.com"
            className="hero-button px-8 py-4 text-2xl font-medium border-[6px] transition-colors inline-flex items-center justify-center gap-3"
            style={{ borderColor: 'var(--almost-black)', color: 'var(--almost-black)', backgroundColor: 'transparent', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }}
          >
            Email Me
            <img src="/img/icon-email.gif" alt="" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
