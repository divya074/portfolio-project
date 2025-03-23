import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-semibold mb-2">Sai Divya Mulukala</h4>
        <div className="flex justify-center space-x-6 text-xl mb-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Sai Divya Mulukala. All rights reserved.</p>
      </div>
    </footer>
  );
}
