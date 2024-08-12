import React from 'react';
import Banner from '../assets/banner.png';

export default function Home() {
    return (
        <div className="w-full  h-screen overflow-hidden bg-gray-100 flex items-center justify-center ">
            <div className=" container mt-[150px] md:mt-0 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                
         
                    {/* Text Section */}
                    <div className="md:w-1/2 flex flex-col space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        Elevate Your Life With Us
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        We are Elevate, the leading elevator company in India. Our mission is to make cities and lives better through moving people. We design and manufacture elevators, escalators, and moving walks, as well as provide maintenance and modernization services. We are committed to sustainable urban development and have been recognized for our efforts. We are also a trusted partner for architects, builders, and developers, providing expertise and support from planning to operation. We are Elevate, and we are here to elevate your life.
                    </p>
                    <button className="mt-4 w-40 bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                        Contact Us
                    </button>
                </div>

                {/* Image Section */}
                <div className="  md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={Banner} alt="Elevate Banner" className="w-full h-auto max-w-md rounded-lg shadow-xl" />
                </div>
          
            
            </div>
        </div>
    );
}
