import React from 'react';
import Image from 'next/image';

const Development: React.FC = () => {
  return (
    <section id="development" className="bg-[#CDCDCD] py-20 px-6 relative overflow-hidden">
      {/* Big Sphere - bottom left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] -translate-x-1/4 translate-y-1/4">
        <Image
          src="/svg/bigsphere.svg"
          alt="Big sphere decoration"
          width={600}
          height={600}
          className="w-full h-full"
        />
      </div>
      
      {/* Small Sphere - next to big sphere with slight overlap */}
      <div className="absolute top-0 left-90 w-70 h-70 translate-y-1/4">
        <Image
          src="/svg/smallsphere.svg"
          alt="Small sphere decoration"
          width={280}
          height={280}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Empty for sphere space */}
          <div className="hidden lg:block"></div>

          {/* Right Column - Content */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Development
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I design it. I build it. I deploy it. Front-end, back-end, hosting, the entire stack. React, Python, WordPress, custom applications, whatever the project needs. With two decades of development experience, I've seen every browser quirk, every hosting headache, and every "it works on my machine" scenario you can imagine. I build things that actually work in the real world, not just in perfect conditions. Performance, security, user experience, accessibility... I handle the technical complexity so you can focus on your business. Want the full technical breakdown?
            </p>
            <a 
              href="https://howard.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#2D2D2D] text-white px-10 py-4 hover:bg-[#3D3D3D] transition-colors duration-300 text-xl font-medium shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              <span className="text-white">Visit my </span>
              <span className="text-[#66CDAA]">Development Portfolio</span>
              <span className="ml-2 text-[#66CDAA]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
