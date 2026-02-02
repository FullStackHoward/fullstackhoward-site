export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#ebebeb' }}>
      <style jsx>{`
        .pulsate {
          border-radius: 50%;
          transform: scale(1.2, 1.2);
        }

        /* Mobile: Static border */
        @media (max-width: 767px) {
          .pulsate {
            border: 10px solid var(--watercourse-green);
            transform: none;
          }
        }

        /* Desktop: Animated pulsate */
        @media (min-width: 768px) {
          .pulsate {
            animation: pulsate 2s linear 0.3s infinite;
          }
        }

        @keyframes pulsate {
          0% {
            box-shadow: 0 0 0 0 var(--watercourse-green);
          }
          50% {
            box-shadow: 0 0 0 20px var(--ufo-green);
          }
          100% {
            box-shadow: 0 0 0 40px rgba(220, 242, 141, 0);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image - First on Mobile, Second on Desktop */}
          <div className="flex justify-center order-1 md:order-2">
            <div
              className="pulsate"
              style={{
                width: '200px',
                height: '200px',
                overflow: 'hidden'
              }}
              className="pulsate w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden"
            >
              <img
                src="/img/avi.png"
                alt="Howard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text - Second on Mobile, First on Desktop */}
          <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
            <p className="text-lg mb-6">
              I'm the guy you'll be working with! Just call me Howard. When you're working with me, you're working with a natural problem solver who's been building and optimizing digital experiences for marketing teams and agencies for over 10 years.
            </p>
            <p className="text-lg mb-6">
              I don't just build what you ask for. I understand why you're asking for it, and I can often spot better ways to get you there. With 20 years spanning engineering, design, and digital marketing, I bring strategic thinking about what actually drives results. Whether it's conversion optimization, user experience, or marketing automation, I've lived in all these worlds.
            </p>
            <p className="text-lg">
              Continuous Growth, Continuous Improvement is my north star. When I'm not working on client projects, I'm refining my process, learning new tools, or exploring how to solve problems more elegantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
