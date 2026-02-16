import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const [activeHref, setActiveHref] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleNavLinkClick = (e, href) => {
  e.preventDefault();
  setActiveHref(href);
  setMobileOpen(false);

  const targetId = href.replace('#', '');
  const elem = document.getElementById(targetId);
  
  if (elem) {
    window.scrollTo({
      top: elem.offsetTop - 80,
      behavior: 'smooth',
    });
  }
};

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, i) => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveHref(navLinks[i].href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="fixed z-50 top-3 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur shadow-md dark:shadow-black/30 rounded-2xl border border-gray-200/70 dark:border-neutral-700">
      <div className="flex items-center justify-between">
        
        {/* === LOGO SECTION WITH ANIMATION === */}
        <motion.h2 
          whileHover={{ scale: 1.05 }}
          className="font-bold text-green-700 dark:text-green-400 text-lg cursor-pointer flex"
        >
          {"Suy Piseth".split("").map((char, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block" }}
              whileHover={{ y: -3, color: "#10b981" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    // onClick={() => setActiveHref(link.href)}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`relative text-sm font-medium transition-colors duration-300 group ${isActive ? 'text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'}`}
                  >
                    {link.name}
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-green-700 dark:bg-green-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 overflow-hidden w-10 h-10 flex items-center justify-center transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <FiSun className="text-xl text-yellow-400" /> : <FiMoon className="text-xl text-gray-700" />}
              </motion.div>
            </AnimatePresence>
          </button>

          <a href="https://github.com/" className="hidden sm:block p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
            <FiGithub size={20} />
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-700 dark:text-gray-200">
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-2 pb-2 pt-4 border-t border-gray-100 dark:border-neutral-800 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => { setActiveHref(link.href); setMobileOpen(false); }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeHref === link.href ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;