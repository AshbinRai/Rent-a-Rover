import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Navigation items data
    const navItems = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'hire', label: 'Hire a Driver', path: '/hire' },
        { id: 'blog', label: 'Blog', path: '/blog' },
        { id: 'about', label: 'About Us', path: '/about' },
        { id: 'contact', label: 'Contact Us', path: '/contact' }
    ];

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-2">
                            RR
                        </div>
                        <span className="text-xl font-bold text-gray-800">RentaRover</span>
                    </div>


                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>


                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Sign up
                        </Link>
                    </div>


                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Text-based menu icon */}
                            <span className="text-lg font-bold">
                                {isMenuOpen ? 'X' : '≡'}
                            </span>
                        </button>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.path
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mt-2 transition-colors duration-200"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;