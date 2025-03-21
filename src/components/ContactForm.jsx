import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data
      );
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        
        {/* Contact Information */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <div className="flex items-center space-x-4">
            <SiGmail className="text-4xl text-red-600 hover:scale-110 transition-transform" />
            <span className="text-gray-600 text-lg">maxtakhar.contact@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-4xl text-green-600 hover:scale-110 transition-transform" />
            <span className="text-gray-600 text-lg">+44 7471 125379</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-12">
          <a
            href="https://www.linkedin.com/in/maxtakhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-all hover:scale-110"
          >
            <FaLinkedin className="text-5xl" />
          </a>
          <a
            href="https://github.com/Pollando-575"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-all hover:scale-110"
          >
            <FaGithub className="text-5xl" />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.name ? 'border-red-500' : 'focus:border-blue-500'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.email ? 'border-red-500' : 'focus:border-blue-500'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.message ? 'border-red-500' : 'focus:border-blue-500'
            }`}
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center disabled:bg-blue-400"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Send Message
            </>
          )}
        </button>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 text-center mt-4"
          >
            Message sent successfully!
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}