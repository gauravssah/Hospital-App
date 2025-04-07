import React from 'react';

function FindRightDoctor() {
    const doctorImages = [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/women/65.jpg',
        'https://randomuser.me/api/portraits/men/55.jpg',
        'https://randomuser.me/api/portraits/women/21.jpg',
        'https://randomuser.me/api/portraits/men/29.jpg',
    ];

    return (
        <section className="bg-blue-50 py-14 px-6 md:px-10">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="text-center md:text-left max-w-xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 leading-tight">
                        Find the Right Doctor for Your Ailments
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Book your appointment today or call us directly to get personalized care from top verified doctors.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-600 transition">
                            Book Appointment
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="text-blue-700 text-sm sm:text-base hover:underline"
                        >
                            📞 Call Us: +91 98765 43210
                        </a>
                    </div>
                </div>

                {/* Right Overlapping Doctor Avatars */}
                <div className="flex items-center justify-center">
                    <div className="flex -space-x-4 flex-wrap">
                        {doctorImages.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`Doctor ${idx + 1}`}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-md hover:z-10 transition hover:scale-105"
                                style={{ zIndex: doctorImages.length - idx }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FindRightDoctor;
