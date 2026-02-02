import React, { useState } from 'react';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const portfolioImages = [
    { src: '/img/p1.jpg', alt: 'Portfolio project 1' },
    { src: '/img/p2.jpg', alt: 'Portfolio project 2' },
    { src: '/img/p3.jpg', alt: 'Portfolio project 3' },
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#ebebeb' }}>
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
              onClick={() => setExpandedImage(image.src)}
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
          <div className="relative max-w-7xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={expandedImage}
              alt="Expanded portfolio image"
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
