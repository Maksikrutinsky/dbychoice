'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const ComingSoon = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="blog" ref={sectionRef} className="coming-soon-section">
      <div className="container coming-soon-container">
        <motion.div
          className="coming-soon-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="coming-soon-paragraph">
            After many years in the design world, I embarked on an exciting, enriching, and joyful journey, where I write <span className="blog-highlight">MY BLOG</span> from a personal perspective on topics close to my heart and my work, hoping to bring them closer to your hearts and homes as well.
          </p>
          <p className="coming-soon-paragraph">
            <strong>Blog Topics:</strong> Home Design, Home Styling, Wellness, and Fashion with Interesting Tips
          </p>
          <p className="coming-soon-paragraph">
            I write what I would want to read myself. Through my blog and its authentic content, I want to bring more beauty, style, and experiences into your lives and introduce you to new and enjoyable things.
          </p>
          <Link href="/blog" className="blog-cta-button">
            Visit Our Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
