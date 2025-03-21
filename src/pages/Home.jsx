import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <div className="pt-20 container mx-auto px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Hello there, I'm an enthusiastic aspiring software engineer who has a solid foundation in Python, JavaScript, Django, React, and other programming languages. 
        My interest in technology began with a strong desire to learn more about how digital technologies impact our surroundings. 
        This curiosity quickly transformed into a desire to produce effective solutions on my own.

        I specialise in frontend and backend development and strive to build code that is clean, efficient, and maintainable. 
        While I am still in the early stages of my career, I bring new insights, adaptability, and an unwavering dedication to learning and problem-solving. 
        I'm enthusiastic to create unique applications that have a genuine impact.
        </p>
        <TechStack />
      </motion.section>
    </div>
  );
}