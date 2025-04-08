import React from 'react';
import Cardiology from '../../assets/TretementImages/Cardiology.jpg';
import Orthopedics from '../../assets/TretementImages/Orthopedics.jpg';
import Neurology from '../../assets/TretementImages/Neurology.jpg';
import Dermatology from '../../assets/TretementImages/Dermatology.jpg';
import Pediatrics from '../../assets/TretementImages/Pediatrics.jpg';
import Dentistry from '../../assets/TretementImages/Dentistry.jpg';

const treatments = [
    {
        title: 'Cardiology',
        description: 'Our cardiology department provides comprehensive heart care, from diagnostics to surgery and rehabilitation.',
        image: Cardiology,
    },
    {
        title: 'Orthopedics',
        description: 'We treat bone, joint, and spine issues with advanced surgical and non-surgical methods.',
        image: Orthopedics,
    },
    {
        title: 'Neurology',
        description: 'Expert care for brain and nervous system conditions including epilepsy, stroke, and Parkinson’s disease.',
        image: Neurology,
    },
    {
        title: 'Dermatology',
        description: 'Comprehensive skin care including acne, eczema, cosmetic treatments, and skin cancer screening.',
        image: Dermatology,
    },
    {
        title: 'Pediatrics',
        description: 'Full pediatric care for newborns to teenagers by experienced child specialists.',
        image: Pediatrics,
    },
    {
        title: 'Dentistry',
        description: 'We provide advanced dental care for all age groups.',
        image: Dentistry,
    },
];

function Treatement() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Our Treatments</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatments.map((treatment, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition duration-300"
                    >
                        <img
                            src={treatment.image}
                            alt={`Image representing ${treatment.title}`}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">{treatment.title}</h3>
                            <p className="text-gray-600 text-sm">{treatment.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Treatement;
