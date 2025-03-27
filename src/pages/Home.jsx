import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <div className="pt-20 container mx-auto px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center"
      >
        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-600">
            🧑‍💻 About Me ⚛
          </h1>
          
          <div className="space-y-4 text-gray-600">
            <p>
              I'm an aspiring software engineer with a strong foundation in Python, JavaScript, Django, React, and Rust.
            </p>
            
            <p>
              My passion for technology began with a deep curiosity about how digital solutions shape our world, which quickly evolved into a drive to create impactful applications myself.
            </p>
            
            <p>
              Specializing in both frontend and backend development, I focus on writing clean, efficient, and maintainable code.
            </p>
            
            <p>
              While I'm still in the early stages of my career, I bring fresh perspectives, adaptability, and a relentless commitment to learning and problem-solving.
            </p>
            
            <p>
              I'm excited to build innovative solutions that make a real difference. Let's create something great together!
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <TechStack />
        </motion.div>
      </motion.section>
    </div>
  );
}