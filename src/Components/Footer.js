import React from 'react';
import { FaPhone, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-[#2c2f34] text-gray-300 py-6 px-4 flex flex-col items-center">
      {/* Name */}
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Harikrishnan</h2>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4">
        <a href="tel:+919487781005" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
          <FaPhone className="text-2xl md:text-3xl" />
        </a>
        <a href="mailto:harikrizhnan58@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
          <FaEnvelope className="text-2xl md:text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/harikrizhnan578/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
          <FaLinkedin className="text-2xl md:text-3xl" />
        </a>
        <a href="https://github.com/Harikrishnanshanthi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
          <FaGithub className="text-2xl md:text-3xl" />
        </a>
        <a href="https://wa.me/9487781005" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
          <FaWhatsapp className="text-2xl md:text-3xl" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm text-center">© {new Date().getFullYear()} Harikrishnan. All rights reserved.</p>
    </div>
  );
}

export default Footer;
