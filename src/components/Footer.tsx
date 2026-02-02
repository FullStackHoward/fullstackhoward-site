import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '/svg/icon-x.svg', url: 'https://x.com/FullStackHoward', alt: 'X (Twitter)' },
    { icon: '/svg/icon-fb.svg', url: 'https://www.facebook.com/fullstackhoward', alt: 'Facebook' },
    { icon: '/svg/icon-yt.svg', url: 'https://www.youtube.com/@FullStackHoward', alt: 'YouTube' },
    { icon: '/svg/icon-ig.svg', url: 'https://www.instagram.com/fullstackhoward/', alt: 'Instagram' },
    { icon: '/svg/icon-lnkdn.svg', url: 'https://www.linkedin.com/in/fullstackhoward/', alt: 'LinkedIn' },
    { icon: '/svg/icon-bsky.svg', url: 'https://bsky.app/profile/fullstackhoward.bsky.social', alt: 'Bluesky' },
    { icon: '/svg/icon-pen.svg', url: 'https://forem.com/fullstackhoward', alt: 'Forem' },
  ];

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Icons Row */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="text-center text-gray-700">
          <p>©{currentYear} FullStackHoward LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
