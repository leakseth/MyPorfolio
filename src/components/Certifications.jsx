import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      title: "Java & Spring Boot Development",
      issuer: "ETEC Center",
      granted: "March 15 2026",
      skills: "Java, MySQL, SpringBoot",
      image: "/certificates/cert1.png",
    },
    {
      title: "4th IT Scholarship Training Course",
      issuer: "ETEC Center",
      granted: "November 15 2025",
      skills: "PHP, MySQL, Ajax, Laravel",
      image: "/certificates/cert2.png",
    },
    {
      title: "Front-End Web Development",
      issuer: "ETEC Center",
      granted: "July 15 2025",
      skills: "HTML, CSS, Bootstrap, JavaScript, React.js",
      image: "/certificates/cert3.png",
    },
    {
      title: "Advanced Java & GUI Programming",
      issuer: "ETEC Center",
      granted: "July 15 2025",
      skills: "Advance Java, MySQL, GUI",
      image: "/certificates/cert4.png",
    },
    {
      title: "C/C++ Programming & Algorithms",
      issuer: "ETEC Center",
      granted: "March 15 2025",
      skills: "C, C++, OOP, File, Algorithm",
      image: "/certificates/cert5.png",
    }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  // Lock background scroll ពេល modal បើក
  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  return (
    <section id="certification" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="w-[94%] max-w-5xl mx-auto">

        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FiAward className="text-green-500 text-3xl" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <div className="w-16 h-1 bg-green-500 rounded-full" />
        </div>

        {/* Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group bg-gray-50 dark:bg-[#111] rounded-[2rem] border border-gray-100 dark:border-neutral-800 overflow-hidden shadow-xl shadow-transparent hover:shadow-green-500/5 hover:border-green-500/40 transition-all duration-500"
            >
              <div
                className="relative cursor-pointer overflow-hidden"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>

                <p className="text-xs font-semibold text-green-600 dark:text-green-500 mb-5 uppercase tracking-wider">
                  {cert.granted}
                </p>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors"
                >
                  Preview
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {certificates.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/10 font-semibold text-sm transition-colors"
            >
              {showAll ? (
                <>
                  See Less <FiChevronUp />
                </>
              ) : (
                <>
                  See More <FiChevronDown />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal - Image Only, No Scroll */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full max-h-[90vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;