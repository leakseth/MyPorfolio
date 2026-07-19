import React from 'react';
import { FiGithub, FiFacebook, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

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

          {/* Middle: Social & Copyright */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              {[
                { icon: <FiGithub size={18} />, link: "https://github.com/leakseth", color: "hover:bg-gray-900 hover:text-white" },
                { icon: <FiFacebook size={18} />, link: "https://web.facebook.com/zsmoszin", color: "hover:bg-blue-600 hover:text-white" },
                { icon: <FiLinkedin size={18} />, link: "https://www.linkedin.com/in/suy-piseth-496182383/", color: "hover:bg-blue-500 hover:text-white" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-50 dark:bg-neutral-900 text-gray-500 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Right: Scroll to Top */}
          <div className="flex flex-col items-center md:items-end">
            <motion.button 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="group p-4 bg-gray-900 dark:bg-green-500 text-white dark:text-black rounded-2xl shadow-lg shadow-gray-200 dark:shadow-green-500/20 transition-all"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} className="group-hover:animate-bounce" />
            </motion.button>
          </div>

        </div>

        {/* Bottom Line (Optional for extra polish) */}
        <div className="mt-12 pt-8 border-t border-gray-50 dark:border-neutral-900/50 text-center">
          <p className="text-[11px] text-gray-400 italic">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;