'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ComingSoon = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="coming-soon" ref={sectionRef} className="coming-soon-section">
      <div className="container coming-soon-container">
        <motion.h2
          className="coming-soon-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          COMING SOON
        </motion.h2>

        <motion.div
          className="coming-soon-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="coming-soon-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="coming-soon-paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
