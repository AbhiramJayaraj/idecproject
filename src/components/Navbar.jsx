import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container-max flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold">IEDC</div>
          <span className="font-semibold text-lg text-black">IEDC Bootcamp CEC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`} end>Home</NavLink>
          <NavLink to="/events" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Events</NavLink>
          <NavLink to="/team" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Team</NavLink>
          <NavLink to="/blog" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          {/* Mobile simple menu: go to pages via links */}
          <details className="relative">
            <summary className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Menu</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2">
              <Link to="/" className="block px-2 py-2 rounded hover:bg-gray-50">Home</Link>
              <Link to="/events" className="block px-2 py-2 rounded hover:bg-gray-50">Events</Link>
              <Link to="/team" className="block px-2 py-2 rounded hover:bg-gray-50">Team</Link>
              <Link to="/blog" className="block px-2 py-2 rounded hover:bg-gray-50">Blog</Link>
              <Link to="/contact" className="block px-2 py-2 rounded hover:bg-gray-50">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
