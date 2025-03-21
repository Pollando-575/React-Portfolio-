import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaRegEnvelope, FaAngleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { techStack } from '../data/techStack';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-white">Max Takhar</h3>
            <p className="text-sm leading-relaxed">
              Full-stack developer specializing in modern web technologies and 
              clean architecture. Building scalable solutions with best practices.
            </p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              {techStack.slice(0, 5).map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, color: '#3B82F6' }}
                  variants={itemVariants}
                >
                  <tech.icon 
                    className="text-2xl transition-colors"
                    title={tech.name}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="hover:text-blue-500 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-white">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.linkedin.com/in/maxtakhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Pollando-575"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
              <a 
                href="mailto:maxtakhar.contact@gmail.com"
                className="hover:text-blue-500 transition-colors flex items-center"
              >
                <FaRegEnvelope className="mr-2" />
                maxtakhar.contact@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Max Takhar. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center hover:text-blue-500 transition-colors group"
            aria-label="Scroll to top"
          >
            <FaAngleUp className="mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}