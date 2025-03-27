import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ success: false, message: '' }), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="pt-20 container mx-auto px-4 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={containerVariants}
        >
          
        </motion.h2>
        
        <motion.div 
          className="mb-12 bg-white p-6 rounded-lg shadow-md"
          variants={containerVariants}
        >
          <h3 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Get in Touch
          </h3>
          
          {/* Social Media Icons Section */}
          <div className="flex flex-col items-center space-y-24">
            {/* Email section */}
            <motion.a 
              href="mailto:maxtakhar.contact@gmail.com"
              className="flex flex-col items-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <SiGmail className="text-[8rem] text-red-600 group-hover:text-red-700 transition-colors" />
              <span className="mt-4 text-lg font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                maxtakhar.contact@gmail.com
              </span>
            </motion.a>

            {/* Social media icons */}
            <motion.a 
              href="https://github.com/Pollando-575" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub className="text-[8rem] text-gray-800 hover:text-gray-900" />
              <span className="mt-4 text-lg font-medium">GitHub</span>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/maxtakhar/" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin className="text-[8rem] text-blue-600 hover:text-blue-700" />
              <span className="mt-4 text-lg font-medium">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          variants={containerVariants}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
          {submitStatus.message && (
            <div className={`p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors flex items-center space-x-2"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}