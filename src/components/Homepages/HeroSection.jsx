import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarCheck, FaVideo, FaUserMd } from 'react-icons/fa';
import heroImage from '../../assets/hero-doctor.png';

function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="bg-blue-50 w-full py-12 border-b min-h-[500px]">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
                        Your Health, <span className="text-blue-600">Our Priority</span>
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Book appointments with top doctors, consult online, and get personalized treatment from the comfort of your home.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate('/book-appointment')}
                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
                        >
                            <FaCalendarCheck />
                            Book Appointment
                        </button>

                        <button
                            onClick={() => navigate('/video-consulting')}
                            className="flex items-center gap-2 bg-white text-blue-600 border border-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50 transition"
                        >
                            <FaVideo />
                            Video Consultation
                        </button>

                        <button
                            onClick={() => navigate('/find-doctor')}
                            className="flex items-center gap-2 bg-white text-blue-600 border border-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50 transition"
                        >
                            <FaUserMd />
                            Find Doctor
                        </button>
                    </div>
                </div>

                {/* Right Image with Background */}
                <div className="flex-1 flex justify-center items-center relative h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 via-white to-orange-100">
                    {/* Background Glow Effects */}
                    <div className="absolute w-[250px] h-[250px] bg-blue-200 rounded-full blur-3xl opacity-40 top-10 left-10 z-0"></div>
                    <div className="absolute w-[200px] h-[200px] bg-orange-200 rounded-full blur-2xl opacity-40 bottom-10 right-10 z-0"></div>

                    {/* Image */}
                    <div className="relative z-10 w-[320px] h-[400px] overflow-hidden flex items-center justify-center">
                        <img
                            src={heroImage}
                            alt="Doctor consultation"
                            className="h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
