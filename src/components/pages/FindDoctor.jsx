import React, { useState } from 'react';
import { FaSearch, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const dummyDoctors = [
    {
        id: 1,
        name: 'Dr. Sneha Reddy',
        speciality: 'Pediatrician',
        location: 'Hyderabad',
        gender: 'Female',
        experience: '7 Years',
        fees: '₹700',
        offer: '10%',
        rating: 4.6,
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 2,
        name: 'Dr. Rohit Sharma',
        speciality: 'Cardiologist',
        location: 'Delhi',
        gender: 'Male',
        experience: '10 Years',
        fees: '₹1000',
        rating: 4.8,
        image: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    {
        id: 3,
        name: 'Dr. Meera Kapoor',
        speciality: 'Dermatologist',
        location: 'Mumbai',
        gender: 'Female',
        experience: '6 Years',
        fees: '₹600',
        offer: '15%',
        rating: 4.5,
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
        id: 4,
        name: 'Dr. Arjun Nair',
        speciality: 'Orthopedic',
        location: 'Bangalore',
        gender: 'Male',
        experience: '12 Years',
        fees: '₹900',
        offer: '20%',
        rating: 4.7,
        image: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
        id: 5,
        name: 'Dr. Riya Sen',
        speciality: 'Neurology',
        location: 'Kolkata',
        gender: 'Female',
        experience: '8 Years',
        fees: '₹1200',
        rating: 4.9,
        image: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
        id: 6,
        name: 'Dr. Karan Patel',
        speciality: 'ENT',
        location: 'Chennai',
        gender: 'Male',
        experience: '5 Years',
        fees: '₹500',
        offer: '10%',
        rating: 4.4,
        image: 'https://randomuser.me/api/portraits/men/57.jpg',
    },
    {
        id: 7,
        name: 'Dr. Nidhi Verma',
        speciality: 'Psychiatry',
        location: 'Ahmedabad',
        gender: 'Female',
        experience: '9 Years',
        fees: '₹950',
        rating: 4.7,
        image: 'https://randomuser.me/api/portraits/women/76.jpg',
    }
];

const fallbackImage = 'https://via.placeholder.com/150?text=Doctor+Image';

function FindDoctor() {
    const [mode, setMode] = useState('search');
    const [search, setSearch] = useState('');
    const [issue, setIssue] = useState('');
    const [gender, setGender] = useState('');

    const searchFiltered = dummyDoctors.filter(
        (doc) =>
            doc.name.toLowerCase().includes(search.toLowerCase()) ||
            doc.speciality.toLowerCase().includes(search.toLowerCase()) ||
            doc.location.toLowerCase().includes(search.toLowerCase())
    );

    const guidedFiltered = dummyDoctors.filter((doc) => {
        return (
            (!issue || doc.speciality.toLowerCase().includes(issue.toLowerCase())) &&
            (!gender || doc.gender === gender)
        );
    });

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Find a Doctor</h1>

                <div className="flex justify-center mb-8 space-x-4">
                    <button
                        onClick={() => setMode('search')}
                        className={`px-4 py-2 rounded-full ${mode === 'search' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                    >
                        🔍 Search
                    </button>
                    <button
                        onClick={() => setMode('guided')}
                        className={`px-4 py-2 rounded-full ${mode === 'guided' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                    >
                        🤔 Guided Help
                    </button>
                </div>

                {mode === 'search' && (
                    <>
                        <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md overflow-hidden mb-10">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name, speciality, or location..."
                                className="w-full px-4 py-2 outline-none"
                            />
                            <div className="px-4 text-blue-600">
                                <FaSearch />
                            </div>
                        </div>

                        <DoctorCards doctors={searchFiltered} />
                    </>
                )}

                {mode === 'guided' && (
                    <>
                        <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto mb-10">
                            <h2 className="text-xl font-semibold mb-4 text-blue-800">Help us understand your needs</h2>

                            <div className="mb-4">
                                <label className="block text-sm text-gray-700 mb-1">What issue are you facing?</label>
                                <select
                                    value={issue}
                                    onChange={(e) => setIssue(e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                >
                                    <option value="">-- Select Speciality --</option>
                                    <option value="Pediatrician">Child Specialist</option>
                                    <option value="Cardiologist">Heart Issues</option>
                                    <option value="Dermatologist">Skin Problems</option>
                                    <option value="ENT">ENT</option>
                                    <option value="Orthopedic">Bone & Joint</option>
                                    <option value="Neurology">Brain & Nerves</option>
                                    <option value="Psychiatry">Mental Health</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-gray-700 mb-1">Preferred gender of doctor</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                >
                                    <option value="">No Preference</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>
                        </div>

                        <DoctorCards doctors={guidedFiltered} />
                    </>
                )}
            </div>
        </div>
    );
}

function DoctorCards({ doctors }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.length > 0 ? (
                doctors.map((doc) => {
                    const originalFees = parseInt(doc.fees.replace('₹', ''));
                    const discount = doc.offer ? Math.round(originalFees * (parseInt(doc.offer) / 100)) : 0;
                    const finalFees = doc.offer ? originalFees - discount : originalFees;

                    return (
                        <div key={doc.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = fallbackImage;
                                    }}
                                    className="w-20 h-20 rounded-full object-cover border"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-800">{doc.name}</h3>
                                    <p className="text-sm text-gray-600">{doc.speciality}</p>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <FaMapMarkerAlt className="mr-1 text-blue-500" />
                                        {doc.location}
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">Experience: {doc.experience}</div>
                            <div className="text-sm text-gray-600 mb-2">
                                Fees: {doc.offer ? (
                                    <>
                                        <span className="line-through text-red-500 mr-1">₹{originalFees}</span>
                                        <span className="text-green-600 font-medium">₹{finalFees} ({doc.offer} OFF)</span>
                                    </>
                                ) : (
                                    doc.fees
                                )}
                            </div>
                            <div className="flex items-center space-x-1 text-yellow-500 mb-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} className={i < Math.floor(doc.rating) ? '' : 'opacity-30'} />
                                ))}
                                <span className="text-sm text-gray-600">({doc.rating})</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                Book Appointment
                            </button>
                        </div>
                    );
                })
            ) : (
                <p className="text-center text-gray-500 col-span-full">No doctors found.</p>
            )}
        </div>
    );
}

export default FindDoctor;
