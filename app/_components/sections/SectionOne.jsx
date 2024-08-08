import React from 'react';
import { motion } from 'framer-motion';

const SectionOne = () => {
  return (
    <section className="section bg-[#111111] text-white flex flex-col lg:flex-row h-screen">
      {/* Text Content */}
      <div className="flex flex-col justify-center h-1/2 lg:h-full lg:w-1/2 p-6 lg:p-16">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Gryffin Project
        </motion.h1>
        <motion.p
          className="text-sm lg:text-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Gryffin Project is a nonprofit organization dedicated to supporting other
          nonprofits with their branding, marketing, and fundraising needs.
        </motion.p>
      </div>

      {/* Image Content */}
      <motion.div
        className="h-1/2 lg:h-full lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src="/background/bg-1.jpg"  // Replace with your image path
          alt="Gryffin"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default SectionOne;