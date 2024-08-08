import React from 'react';
import { Menu } from 'lucide-react'; // Import the Menu icon from Lucide

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 flex justify-between items-center p-4">
      <div className="text-white text-2xl font-bold">The Gryffin Project</div>
      <button
        className="text-white focus:outline-none p-2 border border-zinc-800 rounded-full bg-zinc-900 shadow-lg"
        onClick={onMenuClick}
      >
        <Menu className="h-8 w-8" /> {/* Lucide Menu icon */}
      </button>
    </nav>
  );
};

export default Navbar;