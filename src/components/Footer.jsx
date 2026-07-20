import React from 'react';
import { FiGithub, FiFacebook, FiLinkedin, FiArrowUp, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FiGithub size={18} aria-hidden="true" />, link: "https://github.com/leakseth", label: "Visit Suy Piseth's GitHub profile", color: "hover:bg-gray-900 hover:text-white" },
    { icon: <FiFacebook size={18} aria-hidden="true" />, link: "https://web.facebook.com/zsmoszin", label: "Visit Suy Piseth's Facebook profile", color: "hover:bg-blue-600 hover:text-white" },
    { icon: <FiLinkedin size={18} aria-hidden="true" />, link: "https://www.linkedin.com/in/suy-piseth-496182383/", label: "Connect with Suy Piseth on LinkedIn", color: "hover:bg-blue-500 hover:text-white" },
    { icon: <FiMail size={18} aria-hidden="true" />, link: "mailto:suyp8944@gmail.com", label: "Send an email to Suy Piseth", color: "hover:bg-green-600 hover:text-white" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-neutral-900">
      <div className="w-[94%] max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
              Suy <span className="text-green-500">Piseth</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-[250px] leading-relaxed">
              Crafting high-quality digital solutions with a focus on modern web technologies.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <nav aria-label="Footer navigation" className="flex flex-col items-center gap-3">
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-1">
              Quick Links
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right: Scroll to Top */}
          <div className="flex flex-col items-center md:items-end">
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="group p-4 bg-gray-900 dark:bg-green-500 text-white dark:text-black rounded-2xl shadow-lg shadow-gray-200 dark:shadow-green-500/20 transition-all"
              aria-label="Scroll back to top of page"
            >
              <FiArrowUp size={20} className="group-hover:animate-bounce" aria-hidden="true" />
            </motion.button>
          </div>

        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target={social.link.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              className={`p-3 rounded-full bg-gray-50 dark:bg-neutral-900 text-gray-500 transition-all duration-300 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-8 border-t border-gray-50 dark:border-neutral-900/50 flex flex-col items-center gap-2">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
            © {currentYear} Suy Piseth. All Rights Reserved
          </p>
          <p className="text-[11px] text-gray-400 italic">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;