import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// Add a custom class for Open Sans Condensed if not in Tailwind config
// font-[Open_Sans_Condensed] or font-open-sans-condensed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4">
        <RouterLink to="/" className="flex items-center">
          <img src="/img/kumarmessdallas.png" alt="Kumar's Plano" className="h-14" />
        </RouterLink>
        <button
          className="md:hidden text-secondary text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <span className="fa fa-bars"></span>
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <RouterLink to="/" className="nav-link font-open-sans-condensed hover:text-primary transition-colors duration-300 font-bold text-lg">
            HOME
          </RouterLink>
          <ScrollLink
            to="thestory"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-link font-open-sans-condensed hover:text-primary transition-colors duration-300 font-bold cursor-pointer text-lg"
          >
            THE STORY
          </ScrollLink>
          <RouterLink to="/ourmenu" className="nav-link font-open-sans-condensed hover:text-primary transition-colors duration-300 font-bold text-lg">
            OUR MENU
          </RouterLink>
          <div className="relative" ref={dropdownRef}>
            <button
              className="nav-link font-open-sans-condensed hover:text-primary transition-colors duration-300 font-bold flex items-center text-lg"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              ORDER ONLINE <span className={`ml-1 fa fa-caret-${dropdownOpen ? 'up' : 'down'} transition-transform duration-300`}></span>
            </button>
            <div 
              className={`absolute z-20 bg-white text-dark shadow-lg rounded-lg mt-2 py-2 w-48 transition-all duration-300 transform origin-top ${
                dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="https://app.magilhub.com/restaurant/kumars-plano/menu/Pickup"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-300 font-open-sans-condensed"
              >
                Pickup
              </a>
              <a
                href="https://app.magilhub.com/restaurant/kumars-plano/menu/Delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-300 font-open-sans-condensed"
              >
                Delivery
              </a>
            </div>
          </div>
          <ScrollLink
            to="contactus"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-link font-open-sans-condensed hover:text-primary transition-colors duration-300 font-bold cursor-pointer text-lg"
          >
            CONTACT US
          </ScrollLink>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-slide-down">
          <div className="flex flex-col space-y-2 py-4 px-6">
            <RouterLink to="/" className="py-2 text-dark font-bold font-open-sans-condensed text-lg hover:text-primary transition-colors duration-300" onClick={handleNavClick}>
              HOME
            </RouterLink>
            <ScrollLink
              to="thestory"
              smooth={true}
              duration={500}
              offset={-80}
              className="py-2 text-dark font-bold font-open-sans-condensed cursor-pointer text-lg hover:text-primary transition-colors duration-300"
              onClick={handleNavClick}
            >
              THE STORY
            </ScrollLink>
            <RouterLink to="/ourmenu" className="py-2 text-dark font-bold font-open-sans-condensed text-lg hover:text-primary transition-colors duration-300" onClick={handleNavClick}>
              OUR MENU
            </RouterLink>
            {/* Mobile dropdown for Order Online */}
            <div>
              <button
                className="py-2 text-dark font-bold font-open-sans-condensed flex items-center w-full justify-between focus:outline-none text-lg hover:text-primary transition-colors duration-300"
                onClick={() => setDropdownOpen(d => !d)}
              >
                ORDER ONLINE <span className={`ml-2 fa fa-caret-${dropdownOpen ? 'up' : 'down'} transition-transform duration-300`}></span>
              </button>
              {dropdownOpen && (
                <div className="pl-4 flex flex-col space-y-1 mt-1">
                  <a
                    href="https://app.magilhub.com/restaurant/kumars-plano/menu/Pickup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-dark hover:text-primary font-open-sans-condensed transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    Pickup
                  </a>
                  <a
                    href="https://app.magilhub.com/restaurant/kumars-plano/menu/Delivery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-dark hover:text-primary font-open-sans-condensed transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    Delivery
                  </a>
                </div>
              )}
            </div>
            <ScrollLink
              to="contactus"
              smooth={true}
              duration={500}
              offset={-80}
              className="py-2 text-dark font-bold font-open-sans-condensed cursor-pointer text-lg hover:text-primary transition-colors duration-300"
              onClick={handleNavClick}
            >
              CONTACT US
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 