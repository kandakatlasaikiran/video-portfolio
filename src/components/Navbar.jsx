import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  // White solid background only once scrolled past the hero and the mobile menu isn't open
  const isLight = isScrolled && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-[#C03E2E] py-4"
          : isScrolled
            ? "bg-white shadow-md py-4"
            : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a
            href="#"
            className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
              isLight ? "text-[#C03E2E]" : "text-white"
            }`}
          >
            Saikiran<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-medium relative group transition-colors duration-300 ${
                isLight
                  ? "text-black/80 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full border font-semibold transition-all duration-300 backdrop-blur-md ${
              isLight
                ? "bg-[#C03E2E]/10 border-[#C03E2E]/30 text-[#C03E2E] hover:bg-[#C03E2E]/20 hover:shadow-[0_0_15px_rgba(192,62,46,0.2)]"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-300 ${
              isLight ? "text-[#C03E2E]" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen
            ? "max-h-96 py-4 opacity-100 bg-[#C03E2E] shadow-2xl"
            : "max-h-0 opacity-0 bg-transparent"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#C03E2E] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
