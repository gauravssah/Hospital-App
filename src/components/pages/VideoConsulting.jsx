import React from 'react';
import { FaVideo, FaClock, FaUserMd, FaMobileAlt } from 'react-icons/fa';

function VideoConsulting() {
    return (
        <section className="min-h-screen bg-gray-50 py-10 px-4">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
                    Consult Top Doctors via Video Call
                </h1>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                    Get instant access to experienced doctors from the comfort of your home. 24/7 video consultations available.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg shadow-md transition">
                    Start Video Consultation
                </button>
            </div>

            {/* Benefits Section */}
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-center mb-16">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <FaUserMd className="text-blue-600 text-3xl mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Verified Doctors</h3>
                    <p className="text-gray-600 text-sm">Consult with certified and experienced doctors across specialties.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <FaClock className="text-blue-600 text-3xl mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Instant Access</h3>
                    <p className="text-gray-600 text-sm">No waiting – start your consultation within minutes, anytime.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                    <FaMobileAlt className="text-blue-600 text-3xl mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">On Any Device</h3>
                    <p className="text-gray-600 text-sm">Consult using your phone, tablet, or computer without downloading any app.</p>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center mb-8">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-5xl font-bold text-blue-500">1</span>
                        <h4 className="font-semibold text-lg text-blue-700 mt-3 mb-1">Choose Speciality</h4>
                        <p className="text-gray-600 text-sm">Select the health issue you’re facing to connect with the right doctor.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-5xl font-bold text-blue-500">2</span>
                        <h4 className="font-semibold text-lg text-blue-700 mt-3 mb-1">Book a Slot</h4>
                        <p className="text-gray-600 text-sm">Pick a suitable time and confirm your appointment easily.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-5xl font-bold text-blue-500">3</span>
                        <h4 className="font-semibold text-lg text-blue-700 mt-3 mb-1">Start Consultation</h4>
                        <p className="text-gray-600 text-sm">Join the video call and speak to your doctor instantly and securely.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoConsulting;
