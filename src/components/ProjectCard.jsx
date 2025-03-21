import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { DiReact, DiNodejs, DiPython, DiDatabase } from 'react-icons/di';
import { SiCplusplus, SiRust } from 'react-icons/si';

const techIcons = (tech) => {
  switch(tech.toLowerCase()) {
    case 'JavaScript': return <DiReact className="text-xl text-blue-500" />;
    case 'HTML': return <DiNodejs className="text-xl text-green-500" />;
    case 'python': return <DiPython className="text-xl text-yellow-500" />;
    case 'c++': return <SiCplusplus className="text-xl text-pink-500" />;
    case 'Rust': return <SiRust className="text-xl text-orange-500" />;
    case 'CSS': return <DiDatabase className="text-xl text-purple-500" />;
    case 'SQL': return <DiDatabase className="text-xl text-blue-500" />;
    default: return <DiReact className="text-xl" />;
  }
};

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8"
    >
      <div className="md:flex">
        {/* Project Image */}
        <div className="md:w-1/3 relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover md:h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
              >
                {techIcons(tech)}
                <span className="ml-1 text-gray-700">{tech}</span>
              </div>
            ))}
          </div>

          {/* Project Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FiExternalLink className="mr-2" />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}