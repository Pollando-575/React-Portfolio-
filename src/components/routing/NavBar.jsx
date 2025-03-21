import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
       
           
            <div className="flex justify-between items-center">
            
                    <Link to="/" className="text-xl font-bold text-gray-800">
                        
                    </Link>

                    {/* Desktop Navigation
                    <div className="hidden md:flex space-x-6">
                        {navItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 ${
                                    isActive(path) && 'font-semibold text-gray-900'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-1 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                    </button>
                </div>

              
    );
};

export default NavBar;