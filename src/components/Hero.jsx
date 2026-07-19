import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiDownload, FiLayout } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white dark:bg-[#0a0a0a]">

      {/* Background Glow Effect */}
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] -z-10" />

      {/* Container*/}
      <div className="w-[94%] max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          {/* Status Badge */}
          <div className="inline-block px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 mb-10">
            <span className="text-[10px] font-extrabold text-green-500 uppercase tracking-[0.2em]">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-6xl md:text-[70px] font-black text-gray-900 dark:text-white leading-[1] mb-6">
            I'm <span className="text-green-500">Suy Piseth</span>
          </h1>

          <div className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'A Backend Developer', 2000,
                'A Java & Spring Boot Dev', 2000,
                'A React.js Developer', 2000,
                'A PHP Developer', 2000,
              ]}
              speed={50}
              cursor={true}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              wrapper="span"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed">
            Computer Science student passionate about backend development and full-stack web applications. I build
            projects using Java & Spring Boot, PHP/Laravel, and React.js — with growing experience in PostgreSQL,
            Docker, and Keycloak. Currently seeking opportunities to apply and grow my skills in real-world development.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href='https://drive.google.com/file/d/1-NUogD_SaZIS4ifspFBmTJg9CD0VOzIk/view?usp=sharing'
              target='_blank'
              rel="noopener noreferrer"
              className="mt-10 w-full lg:w-[230px] sm:w-[240px] px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-3">
              Download My CV <FiDownload />
            </a>
            <a
              href="#projects"
              className="px-10 sm:mt-10 w-full lg:w-[230px] sm:w-[240px] justify-center lg:mt-10 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-green-600/20 flex items-center gap-3">
              View Projects <FiArrowRight size={20}/>
            </a>
          </div>
        </motion.div>

        {/* Right Content*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-square">
            {/* Glow */}
            <div className="absolute inset-0 bg-green-500 rounded-[3.5rem] rotate-6 opacity-10 blur-2xl" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-[3.5rem] bg-neutral-100 dark:bg-neutral-800 border-[8px] border-white dark:border-neutral-900 overflow-hidden shadow-2xl">
              <img
                src="/product/image.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -left-8 bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-xl text-green-500">
                  <FiCode size={24}/>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Backend Focus</p>
                  <p className="text-sm font-bold dark:text-white text-gray-900">Java / Spring Boot</p>
                </div>
              </div>
            </motion.div>

            {/* Projects Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-6 -right-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
                  <FiLayout size={24}/>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Projects</p>
                  <p className="text-sm font-bold dark:text-white text-gray-900">5+ Done</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;