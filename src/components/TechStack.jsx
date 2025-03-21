import { techStack } from '../data/techStack';
import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-gray-50 rounded-lg flex items-center space-x-2"
          >
            <tech.icon className="text-xl" />
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}