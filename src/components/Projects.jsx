import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiArrowRight } from 'react-icons/fi';

function Projects() {
  const projects = [
    {
      title: "E-commerce Web Application | June 2026 – Present",
      description: "A full-stack e-commerce platform with product browsing, authentication, cart management, and order placement. Built secure RESTful APIs with transactional order processing and role-based access control (RBAC) for customers and admins.",
      tech: ["React.js", "Spring Boot", "PostgreSQL", "Docker"],
      github: "https://github.com/leakseth/ecommerce-backend",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Clothing E-commerce Website",
      description: "A modern e-commerce platform with responsive design, reusable frontend components, and a clean product catalog. Deployed via Vercel.",
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/leakseth/Z-Shop",
      demo: "#",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Electronics E-commerce",
      description: "A fullstack e-commerce system with an admin dashboard for product management, CRUD features, authentication, and order tracking.",
      tech: ["Laravel-blade", "MySQL"],
      github: "https://github.com/leakseth/ecommerce-dashboard",
      demo: "#",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "User Management System",
      description: "A full-stack app with JWT authentication, protected API routes via Spring Security, CRUD user operations, and Swagger-documented REST APIs.",
      tech: ["React.js", "Spring Boot"],
      github: "https://github.com/leakseth/user-management-backend",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Course Registration System Backend",
      description: "A secure backend with JWT auth, role-based access control (Admin/Teacher/Student), BCrypt password encryption, DTO/Mapper pattern, and Swagger docs.",
      tech: ["Spring Boot", "Spring Security", "Swagger"],
      github: "https://github.com/leakseth/Course-Registration-System-Backend",
      demo: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "BrownPOS – Full-Stack POS System",
      description: "A complete Point of Sale system for small shops with product, inventory, and cash session management. Features secure REST APIs, JWT auth, role-based access, POS checkout with split payments, refunds, ABA QR payment integration, and a responsive React dashboard backed by a normalized MySQL database.",
      tech: ["React.js", "Spring Boot", "MySQL", "Tailwind CSS"],
      github: "https://github.com/leakseth/BrownPOS",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
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
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
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
          <button href="https://github.com/" className="inline-flex items-center gap-2 text-green-500 font-bold hover:underline">
            See more on GitHub <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;