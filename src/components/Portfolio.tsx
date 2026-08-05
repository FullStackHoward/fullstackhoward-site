import React, { useState } from 'react';
import Image from 'next/image';

type PortfolioImage = {
  src: string;
  alt: string;
  link: string;
};

const Portfolio: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<PortfolioImage | null>(null);

  const portfolioImages: PortfolioImage[] = [
    { src: '/img/p1.jpg', alt: 'Portfolio project 1', link: 'https://www.vicegamers.com' },
    { src: '/img/p2.jpg', alt: 'Portfolio project 2', link: 'https://www.pottshomerestoration.com' },
    { src: '/img/p3.jpg', alt: 'Portfolio project 3', link: 'https://performstrongpt.com' },
  ];

  return (
    <section id="portfolio" className="py-20 px-6" style={{ backgroundColor: '#ebebeb' }}>
      <div className="max-w-7xl mx-auto">
        {/* Divider Bar */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-[925px] h-[5px] bg-[#2c2c2c]"></div>
        </div>

        {/* Centered Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="text-gray-900">My </span>
          <span 
            className="bg-gradient-to-r from-[#6DF2B4] via-[#4AD600] to-[#07734B] bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, #6DF2B4 0%, #4AD600 50%, #07734B 100%)' }}
          >
            Portfolio
          </span>
        </h2>

        {/* Three Column Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => setExpandedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={expandedImage.src}
              alt={expandedImage.alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-[75vh] object-contain"
            />
            {/* Visit Site Link */}
            <a
              href={expandedImage.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-6 inline-block bg-[#2D2D2D] text-white px-8 py-3 hover:bg-[#3D3D3D] transition-colors duration-300 text-lg font-medium shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
            >
              <span className="text-white">Visit </span>
              <span className="text-[#4AD600]">
                {expandedImage.link.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
              <span className="text-[#4AD600] ml-2">→</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
