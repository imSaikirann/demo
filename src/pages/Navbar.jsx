import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white shadow-md">
            <div className="h-16 px-6 md:px-12 border-b-2 border-gray-300 flex items-center justify-between">
                <div className="text-xl font-bold text-gray-800">
                    LiftUp
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    <a href="/login" className="text-gray-600 hover:text-gray-900">Login</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4">
                    <a href="/" className="block text-gray-600 hover:text-gray-900 py-2">Home</a>
                    <a href="/about" className="block text-gray-600 hover:text-gray-900 py-2">About</a>
                    <a href="/contact" className="block text-gray-600 hover:text-gray-900 py-2">Contact</a>
                    <a href="/login" className="block text-gray-600 hover:text-gray-900 py-2">Login</a>
                </div>
            )}
        </div>
    );
}
