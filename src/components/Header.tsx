'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || 0;
        setIsScrolled(scrollY > 100);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId.replace('#', ''));
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container nav">
        <Link href="/#home" className="logo" aria-label="Design By Choice">
          <Image
            src="/images/DESIGNBYCHOICE1.png"
            alt="Design By Choice"
            width={200}
            height={75}
            className="logo-image logo-default"
            priority
          />
          <Image
            src="/images/DESIGNBYCHOICE.png"
            alt="Design By Choice"
            width={200}
            height={55}
            className="logo-image logo-scrolled"
            priority
          />
        </Link>
        
        <ul
          id="nav-links"
          className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}
        >
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#vision"
              className={activeSection === 'vision' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#vision')}
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="#team"
              className={activeSection === 'team' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#team')}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#tech"
              className={activeSection === 'tech' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#tech')}
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#plans"
              className={activeSection === 'plans' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#plans')}
            >
              Plans
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        
        <button
          className="nav-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-links"
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;

