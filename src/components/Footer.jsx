import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white font-bold">IEDC</div>
          <div>
            <div className="font-semibold">IEDC Bootcamp CEC</div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} IEDC Bootcamp CEC</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/events" className="text-sm text-gray-600 hover:underline">Events</Link>
          <Link to="/team" className="text-sm text-gray-600 hover:underline">Team</Link>
          <Link to="/blog" className="text-sm text-gray-600 hover:underline">Blog</Link>
        </div>
      </div>
    </footer>
  )
}
