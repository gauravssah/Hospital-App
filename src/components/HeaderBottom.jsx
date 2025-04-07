import React from 'react';
import {
    FaCalendarCheck,
    FaStethoscope,
    FaQuestionCircle,
    FaUserMd,
    FaVideo
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
    const menuItems = [
        { label: 'Book Appointment', icon: <FaCalendarCheck />, path: '/book-appointment' },
        { label: 'Treatment', icon: <FaStethoscope />, path: '/treatments' }, // Update path later
        { label: 'Ask Question', icon: <FaQuestionCircle />, path: '/ask-question' }, // Update path later
        { label: 'Find Doctor', icon: <FaUserMd />, path: '/find-doctor' }, // Update path later
        { label: 'Video Consulting', icon: <FaVideo />, path: '/video-consulting' }, // Update path later
    ];

    return (
        <div className="bg-gray-50 border-t border-b shadow-sm w-full pb-2 pt-2">
            <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-center gap-6 flex-wrap">
                {menuItems.map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600  whitespace-nowrap"
                    >
                        <span className="text-blue-500">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeaderBottom;
