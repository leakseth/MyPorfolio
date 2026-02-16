import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiArrowRight, FiPlayCircle } from 'react-icons/fi';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "ប្រព័ន្ធលក់ទំនិញអនឡាញពេញលេញ បង្កើតឡើងដោយប្រើ Laravel blade",
      tech: ["Laravel", "MySQL", "Tailwind"],
      github: "#",
      demo: "/public/videos/Demo  final at etec - Made with Clipchamp.mp4",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "School Management System",
      description: "កម្មវិធីគ្រប់គ្រងសាលារៀន សម្រាប់គ្រប់គ្រងវត្តមានសិស្ស ពិន្ទុ និងកាលវិភាគសិក្សា។",
      tech: ["PHP", "Laravel", "Bootstrap", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "គេហទំព័រផ្ទាល់ខ្លួនដែលមានចលនាស្អាតៗ និងមាន Dark Mode ពេញលេញ។",
      tech: ["React", "Framer Motion", "Tailwind"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="py-0 lg:py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="w-[94%] max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Featured <span className="text-green-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-[#111] rounded-3xl border border-gray-100 dark:border-neutral-800 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <button
                    onClick={() => setActiveVideo(project.demo)}
                    className="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <FiPlayCircle size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-green-500 mb-3">
                  <FiFolder size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Project</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-200/50 dark:bg-neutral-800 text-[10px] font-bold text-gray-600 dark:text-gray-400 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="mt-16 text-center">
          <a href="https://github.com/" className="inline-flex items-center gap-2 text-green-500 font-bold hover:underline">
            See more on GitHub <FiArrowRight />
          </a>
        </div>
      </div>
      {activeVideo && (
        <div onClick={() => setActiveVideo(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          
          <div className="relative w-[90%] max-w-3xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-lg font-bold"
            >
              ✕ Close
            </button>

            {/* Video */}
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
            
          </div>
        </div>
      )}
    </section>
    
  );
}

export default Projects;