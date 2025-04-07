import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import HeaderBottom from './HeaderBottom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [location, setLocation] = useState('Select Location');
    const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

    const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'];

    // Refs for detecting outside click
    const locationRef = useRef();
    const userRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (locationRef.current && !locationRef.current.contains(e.target)) {
                setLocationDropdownOpen(false);
            }
            if (userRef.current && !userRef.current.contains(e.target)) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <header className="w-full bg-white border-b shadow-sm z-20 relative">
                <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        <NavLink to="/">MediCare</NavLink>
                    </div>

                    {/* Right Section: Location + Support + Account */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">

                        {/* Location Selector */}
                        <div className="relative flex items-center gap-2" ref={locationRef}>
                            <FaMapMarkerAlt className="text-blue-600" />
                            <button
                                onClick={() => setLocationDropdownOpen(prev => !prev)}
                                className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                                aria-haspopup="listbox"
                                aria-expanded={isLocationDropdownOpen}
                            >
                                <span>{location}</span>
                                <FiChevronDown className="text-xs" />
                            </button>
                            {isLocationDropdownOpen && (
                                <ul
                                    className="absolute top-full mt-2 w-48 bg-white border rounded shadow-lg z-10"
                                    role="listbox"
                                >
                                    {locations.map((loc, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setLocation(loc);
                                                setLocationDropdownOpen(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            role="option"
                                        >
                                            {loc}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Support */}
                        <div className="flex items-center gap-2 text-xs">
                            <FaPhoneAlt />
                            <span className="hidden sm:inline">Support:</span>
                            <span className="font-medium text-blue-600">1800-123-4567</span>
                        </div>

                        {/* User Account Dropdown */}
                        <div className="relative" ref={userRef}>
                            <button
                                onClick={() => setUserDropdownOpen(prev => !prev)}
                                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md transition"
                                aria-haspopup="true"
                                aria-expanded={isUserDropdownOpen}
                            >
                                <FaUser />
                                <span>Account</span>
                                <FiChevronDown className="text-xs mt-0.5" />
                            </button>

                            {isUserDropdownOpen && (
                                <ul
                                    className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-10 right-0"
                                    role="menu"
                                >
                                    <li role="menuitem">
                                        <NavLink
                                            to="/login"
                                            className="block px-4 py-2 hover:bg-gray-100 transition"
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li role="menuitem">
                                        <NavLink
                                            to="/signup"
                                            className="block px-4 py-2 hover:bg-gray-100 transition"
                                        >
                                            Sign Up
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <HeaderBottom />
        </>
    );
};

export default Header;
