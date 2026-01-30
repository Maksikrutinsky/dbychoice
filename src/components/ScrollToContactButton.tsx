'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useCallback } from 'react';

interface ScrollToContactButtonProps {
  children: ReactNode;
  className?: string;
}

const ScrollToContactButton = ({ children, className = '' }: ScrollToContactButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact-cta');
    if (contactSection) {
      const headerHeight = 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === '/') {
      // Already on homepage, just scroll
      scrollToContact();
    } else {
      // Navigate to homepage first, then scroll
      router.push('/');
      // Wait for navigation and then scroll
      const checkAndScroll = () => {
        const contactSection = document.getElementById('contact-cta');
        if (contactSection) {
          scrollToContact();
        } else {
          setTimeout(checkAndScroll, 50);
        }
      };
      setTimeout(checkAndScroll, 100);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default ScrollToContactButton;
