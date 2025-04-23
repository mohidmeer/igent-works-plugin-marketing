import React from 'react';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0   border-b border-white/20 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo/>
        <div className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide  items-center">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#features" className="hover:text-blue-500 transition">Features</a>
          <a href="#how" className="hover:text-blue-500 transition">How It Works</a>
          
        </div>
        <a
            href="/auto-blog-poster.zip"
            className="btn"
          >
            Download
          </a>

      </div>
    </nav>
  );
};

export default NavBar;