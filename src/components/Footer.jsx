import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo and Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-white">MediCare</h2>
                    <p className="mt-2 text-sm text-gray-300">
                        Your trusted partner in health. Book appointments, consult doctors, and take care of your well-being.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/doctors" className="hover:text-white">Doctors</a></li>
                        <li><a href="/specialities" className="hover:text-white">Specialities</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                            <FaPhoneAlt className="mr-2" /> +91 98765 43210
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="mr-2" /> support@medicare.com
                        </li>
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> Delhi, India
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-300 text-xl">
                        <a href="#" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white"><FaTwitter /></a>
                        <a href="#" className="hover:text-white"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright + Name */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} MediCare. All rights reserved.
                <div className="mt-1">
                    Built with ❤️ by <a href="https://www.linkedin.com/in/gauravssah" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Gaurav Sah</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
