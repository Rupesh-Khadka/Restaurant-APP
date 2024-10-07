import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs'; 
import { RiFacebookCircleLine } from 'react-icons/ri'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-30 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
           
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">Mern Restaurant</h1>
            <p className="text-lg mb-2">Dhumbarahi, Kathmandu, Nepal 44600
            </p>
            <p className="text-lg mb-2">98xxxxxxxx</p>
            <p className="text-lg">info@mernrestaurant.com</p>
          </div>

          
          <div className="text-center mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="font-semibold hover:text-red-500 transform transition-transform duration-500 hover:text-xl cursor-pointer ">Home</a></li>
              <li><a href="/menu" className="font-semibold hover:text-red-500 transform transition-transform duration-500 hover:text-xl cursor-pointer ">Menu</a></li>
              <li><a href="/aboutus" className="font-semibold hover:text-red-500 transform transition-transform duration-500 hover:text-xl cursor-pointer ">About Us</a></li>
              <li><a href="/contactus" className="font-semibold hover:text-red-500 transform transition-transform duration-500 hover:text-xl cursor-pointer ">Contact</a></li>
            </ul>
          </div>

           
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 ">Follow Us</h2>
            <div className="flex justify-center space-x-4 pr-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125 cursor-pointer " aria-label="Facebook">
                <RiFacebookCircleLine className="w-8 h-8" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125 cursor-pointer" aria-label="Twitter">
                <BsTwitter className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transform transition-transform duration-300 hover:scale-125 cursor-pointer" aria-label="Instagram">
                <BsInstagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mern Restaurant All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
