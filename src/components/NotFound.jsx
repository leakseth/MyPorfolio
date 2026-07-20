import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-md"
      >
        <div className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
          <FiAlertCircle className="text-green-500" size={18} />
          <span className="text-xs font-bold text-green-600 dark:text-green-500 uppercase tracking-wider">
            Error 404
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm transition-colors"
        >
          <FiHome size={18} />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;