import React from 'react';
import { FaUserMd, FaClock, FaMoneyBillWave, FaHeart } from 'react-icons/fa';

const features = [
    {
        title: '5000+ Verified Doctors',
        icon: <FaUserMd className="text-blue-600 text-3xl mb-3" />,
        description: 'Connect with certified and experienced doctors you can trust.',
    },
    {
        title: '24/7 Access to Healthcare',
        icon: <FaClock className="text-blue-600 text-3xl mb-3" />,
        description: 'Get medical support anytime, anywhere—even during midnight emergencies.',
    },
    {
        title: 'Save Time & Money',
        icon: <FaMoneyBillWave className="text-blue-600 text-3xl mb-3" />,
        description: 'Skip the long queues and save on travel costs with online consultations.',
    },
    {
        title: '100% Care Guarantee',
        icon: <FaHeart className="text-blue-600 text-3xl mb-3" />,
        description: 'We ensure high-quality consultations and complete patient satisfaction.',
    },
];

function WhyChooseUs() {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition"
                        >
                            {item.icon}
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
