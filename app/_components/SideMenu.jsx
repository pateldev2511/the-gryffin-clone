import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const SideMenu = ({ isOpen, onClose, onSectionClick }) => {
  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-64 bg-[#111111] text-white z-50 p-8"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? '0%' : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <button
        className="text-zinc-900 absolute top-4 right-4 focus:outline-none"
        onClick={onClose}
      >
        <X className="h-8 w-8 p-2 bg-zinc-400 border border-zinc-200 rounded-full" /> {/* Lucide Close icon */}
      </button>
      <h2 className="text-2xl font-light mb-8">Menu</h2>
      <ul>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('home')}>Home</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section2')}>What we do</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section3')}>Photography & Brand</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section4')}>Consultations</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section5')}>Who we serve</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section6')}>Other Projects</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section7')}>Why a Gryffin?</li>
        <li className="mb-4 cursor-pointer" onClick={() => onSectionClick('section8')}>Connect with us</li>
      </ul>
    </motion.div>
  );
};

export default SideMenu;