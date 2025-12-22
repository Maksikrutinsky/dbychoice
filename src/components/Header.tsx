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
  const pathname = usePathname();

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
            className="services-dropdown-container"
            onMouseEnter={() => setShowDesignStylesDropdown(true)}
            onMouseLeave={() => setShowDesignStylesDropdown(false)}
          >
            <a
              href="#design-styles"
              className={activeSection === "design-styles" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "#design-styles")}
            >
              Design Styles
            </a>
            {showDesignStylesDropdown && (
              <div
                className="services-dropdown"
                onMouseEnter={() => setShowDesignStylesDropdown(true)}
                onMouseLeave={() => setShowDesignStylesDropdown(false)}
              >
                <Link href="/design-styles/modern-desert">Modern Desert Design</Link>
                <Link href="/design-styles/minimalist">Minimalist Design</Link>
                <Link href="/design-styles/eclectic">Eclectic Design</Link>
                <Link href="/design-styles/industrial">Industrial Design</Link>
                <Link href="/design-styles/rustic">Rustic Design</Link>
                <Link href="/design-styles/traditional">Traditional Design</Link>
                <Link href="/design-styles/art-deco">Art Deco Design</Link>
                <Link href="/design-styles/geometric-origami">Geometric - Origami Design</Link>
                <Link href="/design-styles/boho-chic">Boho Chic Design</Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li
            className="services-dropdown-container"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link href="/services">
              Our Services
            </Link>
            {showServicesDropdown && (
              <div
                className="services-dropdown"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <a href="/services#residential">Residential Design</a>
                <a href="/services#commercial">Commercial Design</a>
                <a href="/services#consulting">Consulting Services</a>
                <a href="/services#special">Special Services</a>
                <a href="/services#home-styling">Home Styling</a>
              </div>
            )}
          </li>
          <li>
            <Link href="/virtual-experience">
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
