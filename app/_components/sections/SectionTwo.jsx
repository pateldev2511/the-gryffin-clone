import React from 'react';
import { motion } from 'framer-motion';

const SectionTwo = () => {
  return (
    <section className="w-full section bg-black text-white relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 items-center justify-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/background/bg-2.png" // Replace with your image path
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <motion.h2
          className="text-4xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What we do
        </motion.h2>
        <motion.h3
          className="text-2xl lg:text-4xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Brand guidelines and websites
        </motion.h3>
        <motion.p
          className="text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We create impactful brand narratives and guidelines for effective communication.
        </motion.p>
      </div>
    </section>
  );
};

export default SectionTwo;