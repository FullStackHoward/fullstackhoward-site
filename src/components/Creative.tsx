import React from 'react';
import Image from 'next/image';

const Creative: React.FC = () => {
  return (
    <section 
      id="creative"
      className="relative py-20 md:py-40 px-6 overflow-hidden min-h-150 pb-48 md:pb-96"
      style={{
        background: 'linear-gradient(120deg, #6DF2B4 0%, #4AD600 50%, #07734B 100%)'
      }}
    >
      {/* Animated Clouds - top with seamless loop - Hidden on Mobile */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden hidden md:block">
        <div className="animate-float-clouds absolute top-4 whitespace-nowrap flex">
          <Image
            src="/svg/clouds.svg"
            alt="Clouds decoration"
            width={1200}
            height={100}
            className="h-24 w-auto"
          />
          <Image
            src="/svg/clouds.svg"
            alt="Clouds decoration"
            width={1200}
            height={100}
            className="h-24 w-auto"
          />
          <Image
            src="/svg/clouds.svg"
            alt="Clouds decoration"
            width={1200}
            height={100}
            className="h-24 w-auto"
          />
        </div>
      </div>

      {/* City Divider - bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src="/svg/city-divider.svg"
          alt="City divider"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* Centered Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 md:mt-[-60px]">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Creative
        </h2>
        <p className="text-lg lg:text-xl text-white leading-relaxed mb-8">
          My passion for design started during the MySpace era. I was that kid 
          building custom profile layouts, learning early that great design isn't just 
          about looking good, it's about making an impression. Since then, I've 
          expanded that foundation into branding, web design, and visual identity 
          work that helps businesses stand out. I love the challenge of taking an idea 
          and crafting it into something that not only looks great but actually works 
          for your goals. Want to see what I've been creating?
        </p>
        <a 
          href="https://mrhoward.net" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#2D2D2D] text-white px-10 py-4 hover:bg-[#3D3D3D] transition-colors duration-300 text-xl font-medium shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          <span className="text-white">Visit my </span>
          <span className="text-[#4AD600]">Creative Portfolio</span>
          <span className="text-[#4AD600] ml-2">→</span>
        </a>
      </div>

      <style jsx>{`
        @keyframes float-clouds {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-float-clouds {
          animation: float-clouds 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Creative;
