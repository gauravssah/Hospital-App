import React from 'react';
import {
    FaStethoscope,
    FaClinicMedical,
    FaBrain,
    FaHeartbeat,
    FaLungs,
    FaTooth,
    FaEye,
    FaUserMd,
    FaBone,
    FaChild,
    FaXRay,
    FaNotesMedical,
    FaBriefcaseMedical,
    FaSyringe,
    FaVial
} from 'react-icons/fa';

const specialities = [
    { name: 'General Physician', icon: <FaStethoscope />, slug: 'general-physician' },
    { name: 'Dermatologist', icon: <FaClinicMedical />, slug: 'dermatologist' },
    { name: 'Neurologist', icon: <FaBrain />, slug: 'neurologist' },
    { name: 'Cardiologist', icon: <FaHeartbeat />, slug: 'cardiologist' },
    { name: 'Pulmonologist', icon: <FaLungs />, slug: 'pulmonologist' },
    { name: 'Dentist', icon: <FaTooth />, slug: 'dentist' },
    { name: 'Ophthalmologist', icon: <FaEye />, slug: 'ophthalmologist' },
    { name: 'Nephrologist', icon: <FaUserMd />, slug: 'nephrologist' },
    { name: 'Orthopedic', icon: <FaBone />, slug: 'orthopedic' },
    { name: 'Pediatrician', icon: <FaChild />, slug: 'pediatrician' },
    { name: 'Radiologist', icon: <FaXRay />, slug: 'radiologist' },
    { name: 'ENT Specialist', icon: <FaNotesMedical />, slug: 'ent-specialist' },
    { name: 'Gastroenterologist', icon: <FaBriefcaseMedical />, slug: 'gastroenterologist' },
    { name: 'Immunologist', icon: <FaSyringe />, slug: 'immunologist' },
    { name: 'Pathologist', icon: <FaVial />, slug: 'pathologist' },
];

function Specialities() {
    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 text-center sm:text-left">
                    Browse by Speciality
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {specialities.map((speciality, index) => (
                        <a
                            key={index}
                            href={`/find-doctor/${speciality.slug}`}
                            className="flex flex-col items-center justify-center bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg hover:bg-blue-100 transition-all group"
                        >
                            <div className="text-3xl text-blue-600 mb-3 group-hover:text-blue-800 group-hover:scale-110 transition-transform">
                                {speciality.icon}
                            </div>
                            <p className="text-center text-sm font-medium text-blue-800 ">
                                {speciality.name}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specialities;
