import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiDownload, FiAward, FiLayout, FiBookOpen } from 'react-icons/fi';

function About() {
  const skills = [
    { name: 'Java / Spring Boot', level: '90%' },
    { name: 'React.js', level: '85%' },
    { name: 'Tailwind CSS', level: '80%' },
    { name: 'PHP / Laravel', level: '80%' },
  ];
  const tools = [
    { name: 'GitHub', icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'DBeaver', icon: 'https://icon.icepanel.io/Technology/svg/DBeaver.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="w-[94%] max-w-5xl mx-auto">

        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* My story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
              <FiUser className="text-green-500" /> My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Hello! I'm Piseth, a Computer Science student passionate about building backend systems and full-stack
              web applications. Through academic coursework and personal projects, I've developed hands-on skills in
              Java and Spring Boot for REST APIs, PHP/Laravel for server-side development, and React.js for building
              responsive front-end interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm currently pursuing my Bachelor's degree in Computer Science at the Royal University of Phnom Penh.
              Throughout my journey, I've been strengthening my foundation in database design with PostgreSQL and
              SQL, containerization with Docker, and authentication systems using Keycloak.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I believe in continuous learning and always strive to improve my skills. Whether it's building a
              management system, developing a REST API, or solving algorithmic problems, I approach each project
              with enthusiasm and dedication.
            </p>
          </motion.div>

          {/* Skills Progress Bar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              My <span className="text-green-500">Skills</span>
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm font-bold dark:text-gray-300 text-gray-700">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Grid */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Other <span className="text-green-500">Technologies</span> I Use
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {tools.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 mb-2" />
                    <span className="text-xs font-medium dark:text-gray-400">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;