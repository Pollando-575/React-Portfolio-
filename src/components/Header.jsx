import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          aria-label="Home"
        >
          Max Takhar🧑‍💻🔐
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/projects', label: 'Projects' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium transition-colors ${
                isActive(path)
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/projects', label: 'Projects' },
                  { path: '/contact', label: 'Contact' }
                ].map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`font-medium transition-colors ${
                      isActive(path)
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}