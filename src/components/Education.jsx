import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCheckCircle } from 'react-icons/fi';

function Education() {
  const educationData = [
    {
      year: "2024 - present",
      title: "Bachelor of Computer Science",
      school: "Royal University Of Phnom Penh",
      desc: "Focusing on software development, data structures, and database management systems (DBMS)."
    },
    {
      year: "2024 - 2025",
      title: "Full Stack Web Development",
      school: "ETEC-CENTER",
      desc: "Intensive training in modern web technologies including React.js and building robust APIs with Laravel."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="w-[94%] max-w-5xl mx-auto">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FiBookOpen className="text-green-500 text-3xl" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">Education</h2>
          </div>
          <div className="w-16 h-1 bg-green-500 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-8 rounded-[2.5rem] bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-neutral-800 hover:border-green-500/50 transition-all duration-500 shadow-xl shadow-transparent hover:shadow-green-500/5"
            >
              {/* Badge*/}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <span className="text-[10px] font-bold text-green-600 dark:text-green-500 uppercase tracking-wider">
                  {edu.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors">
                {edu.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold mb-4 text-sm">
                <FiCheckCircle className="text-green-500" />
                {edu.school}
              </div>

              <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                {edu.desc}
              </p>

              {/* Decorative Element - សញ្ញាចុចៗនៅជ្រុង */}
              <div className="absolute top-6 right-8 text-gray-200 dark:text-neutral-800 opacity-20 group-hover:opacity-100 transition-opacity">
                <FiBookOpen size={40} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;