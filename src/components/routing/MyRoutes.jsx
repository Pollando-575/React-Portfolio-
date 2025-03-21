import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import Contact from '../../pages/Contact.jsx';
import Header from '../Header.jsx';
import NavBar from './NavBar.jsx';

const MyRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default MyRoutes;