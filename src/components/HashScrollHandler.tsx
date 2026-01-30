'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HashScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to fully render
      const scrollToElement = () => {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80;
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        } else {
          // Element not found yet, try again
          setTimeout(scrollToElement, 50);
        }
      };
      // Small delay to ensure DOM is ready
      setTimeout(scrollToElement, 100);
    }
  }, [pathname]);

  return null;
};

export default HashScrollHandler;
