import React from 'react'
import '../index.css'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-gray-100">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-700">
                <div>
                    <h3 className="font-semibold mb-2">POPULAR LOCATIONS</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Kolkata</li>
                        <li>Mumbai</li>
                        <li>Chennai</li>
                        <li>Pune</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">TRENDING LOCATIONS</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Bhubaneshwar</li>
                        <li>Hyderabad</li>
                        <li>Chandigarh</li>
                        <li>Nashik</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">ABOUT US</h3>
                    <p className="text-sm">Tech@OLX</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">OLX</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Blog</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                        <li>Vulnerability Disclosure Program</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">FOLLOW US</h3>
                    <div className="flex space-x-3">
                        <FaFacebookF className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                        <FaInstagram className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                        <FaTwitter className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                    </div>
                    {/* App Store Buttons */}
                    <div className="mt-3 flex flex-col space-y-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="w-32"
                        />
                       
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 text-white py-6 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">Help - Sitemap</span>
                    </div>
                    <p className="text-sm mt-2 md:mt-0">All rights reserved © 2006-2025 OLX</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
