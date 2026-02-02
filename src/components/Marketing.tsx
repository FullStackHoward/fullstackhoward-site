import React from 'react';
import Image from 'next/image';

const Marketing: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="text-gray-900">From </span>
          <span className="text-[#4AD600]">Sketch</span>
          <span className="text-gray-900"> to </span>
          <span className="text-[#07734B]">Market</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - SVG Icons - Triangle on Desktop, Horizontal with Arrows on Mobile */}
          <div className="relative flex items-center justify-center">
            {/* Desktop: Triangle Layout */}
            <div className="relative w-full max-w-md hidden lg:block">
              {/* Top Row - Two Icons */}
              <div className="flex justify-center gap-12 mb-12">
                {/* Sketch Icon */}
                <div className="w-32 h-32 lg:w-40 lg:h-40">
                  <Image
                    src="/svg/icon-sketch.svg"
                    alt="Sketch icon"
                    width={160}
                    height={160}
                    className="w-full h-full"
                  />
                </div>
                {/* Layout Icon */}
                <div className="w-32 h-32 lg:w-40 lg:h-40">
                  <Image
                    src="/svg/icon-layout.svg"
                    alt="Layout icon"
                    width={160}
                    height={160}
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* Bottom Row - One Icon Centered */}
              <div className="flex justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40">
                  <Image
                    src="/svg/icon-analytics.svg"
                    alt="Analytics icon"
                    width={160}
                    height={160}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Mobile: Horizontal Layout with Arrows */}
            <div className="flex items-center justify-center gap-4 lg:hidden">
              <div className="w-20 h-20">
                <Image
                  src="/svg/icon-sketch.svg"
                  alt="Sketch icon"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              <svg className="w-6 h-6 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="w-20 h-20">
                <Image
                  src="/svg/icon-layout.svg"
                  alt="Layout icon"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              <svg className="w-6 h-6 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="w-20 h-20">
                <Image
                  src="/svg/icon-analytics.svg"
                  alt="Analytics icon"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Building a great product is only half the battle. Getting it in front of the 
              right people is where the real work begins. I help businesses bridge that gap 
              with marketing strategies that turn launches into growth.
            </p>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 pt-4">
              How I Help:
            </h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex flex-col">
                <span className="font-semibold">- Marketing automation setup and optimization</span>
                <span className="text-sm text-gray-600">(HubSpot, ActiveCampaign, Mailchimp)</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">- Analytics implementation and conversion tracking</span>
                <span className="text-sm text-gray-600">(Google Analytics, Tag Manager, UTM strategies)</span>
              </li>
              <li className="font-semibold">- Landing page optimization for lead capture and conversion</li>
              <li className="font-semibold">- Email campaign strategy and execution</li>
              <li className="font-semibold">- Growth experimentation and A/B testing</li>
              <li className="font-semibold">- SEO fundamentals and technical optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
