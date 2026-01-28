"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBirdAnimation, setShowBirdAnimation] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDesignStylesDropdown, setShowDesignStylesDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Check if bird animation should play (only on homepage, every page load)
  useEffect(() => {
    const isHomepage = pathname === "/";
    if (isHomepage) {
      // Small delay to ensure the animation triggers properly
      const timer = setTimeout(() => {
        setShowBirdAnimation(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShowBirdAnimation(false);
    }
  }, [pathname]);

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setActiveSection(targetId.replace("#", ""));
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="container nav">
        <Link href="/#home" className="logo" aria-label="Design By Choice">
          <Image
            src="/images/DESIGNBYCHOICE1.png"
            alt="Design By Choice"
            width={200}
            height={75}
            className={`logo-image logo-default ${showBirdAnimation ? "bird-flying" : ""}`}
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
          className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
        >
          <li
            className={`services-dropdown-container ${showDesignStylesDropdown ? "dropdown-open" : ""}`}
            onMouseEnter={() => !isMobile && setShowDesignStylesDropdown(true)}
            onMouseLeave={() => !isMobile && setShowDesignStylesDropdown(false)}
          >
            <a
              href="#design-styles"
              className={activeSection === "design-styles" ? "active" : ""}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setShowDesignStylesDropdown(!showDesignStylesDropdown);
                  setShowServicesDropdown(false);
                } else {
                  handleLinkClick(e, "#design-styles");
                }
              }}
            >
              Design Styles
              {isMobile && (
                <span className={`dropdown-arrow ${showDesignStylesDropdown ? "open" : ""}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              )}
            </a>
            {showDesignStylesDropdown && (
              <div
                className="services-dropdown"
                onMouseEnter={() => !isMobile && setShowDesignStylesDropdown(true)}
                onMouseLeave={() => !isMobile && setShowDesignStylesDropdown(false)}
              >
                <Link href="/design-styles/modern-desert" onClick={() => setIsMobileMenuOpen(false)}>Modern Desert Design</Link>
                <Link href="/design-styles/minimalist" onClick={() => setIsMobileMenuOpen(false)}>Minimalist Design</Link>
                <Link href="/design-styles/eclectic" onClick={() => setIsMobileMenuOpen(false)}>Eclectic Design</Link>
                <Link href="/design-styles/industrial" onClick={() => setIsMobileMenuOpen(false)}>Industrial Design</Link>
                <Link href="/design-styles/rustic" onClick={() => setIsMobileMenuOpen(false)}>Rustic Design</Link>
                <Link href="/design-styles/traditional" onClick={() => setIsMobileMenuOpen(false)}>Traditional Design</Link>
                <Link href="/design-styles/art-deco" onClick={() => setIsMobileMenuOpen(false)}>Art Deco Design</Link>
                <Link href="/design-styles/geometric-origami" onClick={() => setIsMobileMenuOpen(false)}>Geometric - Origami Design</Link>
                <Link href="/design-styles/boho-chic" onClick={() => setIsMobileMenuOpen(false)}>Boho Chic Design</Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li
            className={`services-dropdown-container ${showServicesDropdown ? "dropdown-open" : ""}`}
            onMouseEnter={() => !isMobile && setShowServicesDropdown(true)}
            onMouseLeave={() => !isMobile && setShowServicesDropdown(false)}
          >
            <a
              href="/services"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setShowServicesDropdown(!showServicesDropdown);
                  setShowDesignStylesDropdown(false);
                }
              }}
            >
              Our Services
              {isMobile && (
                <span className={`dropdown-arrow ${showServicesDropdown ? "open" : ""}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              )}
            </a>
            {showServicesDropdown && (
              <div
                className="services-dropdown"
                onMouseEnter={() => !isMobile && setShowServicesDropdown(true)}
                onMouseLeave={() => !isMobile && setShowServicesDropdown(false)}
              >
                <Link href="/services#residential" onClick={() => setIsMobileMenuOpen(false)}>Residential Design</Link>
                <Link href="/services#commercial" onClick={() => setIsMobileMenuOpen(false)}>Commercial Design</Link>
                <Link href="/services#consulting" onClick={() => setIsMobileMenuOpen(false)}>Consulting Services</Link>
                <Link href="/services#special" onClick={() => setIsMobileMenuOpen(false)}>Special Services</Link>
                <Link href="/services#home-styling" onClick={() => setIsMobileMenuOpen(false)}>Home Styling</Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/virtual-experience" onClick={() => setIsMobileMenuOpen(false)}>
              In Our Virtual Experience
            </Link>
          </li>
          <li>
            <a
              href="#from-us-to-you"
              className={activeSection === "from-us-to-you" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "#from-us-to-you")}
            >
              From Us to You
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
