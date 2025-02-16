import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Experience Seamless Transactions with SwiftSub
        </h2>
        <p className="mt-4 text-lg text-white">
          Join SwiftSub today and enjoy effortless bill payments, airtime purchases, and more.
        </p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <Button className="px-6 text-lg font-semibold bg-white text-primary rounded-full shadow-lg hover:bg-primary transition-all duration-300 cursor-pointer">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
