import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const doctors = [
    {
        id: 1,
        name: 'Dr. Priya Sharma',
        qualification: 'MBBS, MD (Cardiology)',
        speciality: 'Cardiologist',
        experience: '12 Years',
        location: 'Delhi, India',
        rating: 4.7,
        fees: 800,
        discount: 10,
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 2,
        name: 'Dr. Rajeev Mehta',
        qualification: 'MBBS, DM (Neurology)',
        speciality: 'Neurologist',
        experience: '15 Years',
        location: 'Mumbai, India',
        rating: 4.9,
        fees: 1000,
        discount: 15,
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 3,
        name: 'Dr. Ayesha Khan',
        qualification: 'MBBS, MD (Dermatology)',
        speciality: 'Dermatologist',
        experience: '10 Years',
        location: 'Hyderabad, India',
        rating: 4.8,
        fees: 600,
        discount: 0,
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        id: 4,
        name: 'Dr. Akash Verma',
        qualification: 'MBBS, MD (Internal Medicine)',
        speciality: 'General Physician',
        experience: '8 Years',
        location: 'Bangalore, India',
        rating: 4.5,
        fees: 500,
        discount: 20,
        image: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
];

function PopularDoctors() {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-10 text-center">
                    Popular Doctors
                </h2>
                <div className="space-y-8">
                    {doctors.map((doctor) => {
                        const discountedFee = doctor.discount
                            ? Math.round(doctor.fees - (doctor.fees * doctor.discount) / 100)
                            : doctor.fees;

                        return (
                            <div
                                key={doctor.id}
                                className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6 gap-6 hover:shadow-lg transition"
                            >
                                {/* Left: Image + Info */}
                                <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-2/3">
                                    <div className="relative">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-40 md:w-28 h-40 md:h-28 rounded-full object-cover border-4 border-white shadow"
                                        />
                                        <a
                                            href={`/doctors/${doctor.id}`}
                                            className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 text-center rounded-b-full hover:bg-blue-700 transition"
                                        >
                                            View Profile
                                        </a>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold text-blue-800">{doctor.name}</h3>
                                        <p className="text-sm text-gray-600">{doctor.qualification}</p>
                                        <p className="text-sm text-gray-500">{doctor.speciality}</p>
                                        <p className="text-sm text-gray-500">{doctor.experience} of Experience</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <FaMapMarkerAlt className="mr-1 text-blue-500" />
                                            {doctor.location}
                                        </div>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <div className="flex text-yellow-500">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={i < Math.floor(doctor.rating) ? '' : 'opacity-30'}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">({doctor.rating})</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Fee + Button */}
                                <div className="flex flex-col items-end text-right w-full md:w-1/3 md:items-end">
                                    <p className="text-md text-blue-700 mb-2">
                                        Consultation Fee:{' '}
                                        {doctor.discount > 0 ? (
                                            <>
                                                <span className="line-through text-gray-500 mr-1">₹{doctor.fees}</span>
                                                <strong>₹{discountedFee}</strong>{' '}
                                                <span className="text-sm text-green-600">({doctor.discount}% OFF)</span>
                                            </>
                                        ) : (
                                            <strong>₹{doctor.fees}</strong>
                                        )}
                                    </p>
                                    <button className="bg-green-500 text-white px-5 py-2 text-sm rounded hover:bg-green-600 transition">
                                        Consult Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default PopularDoctors;
