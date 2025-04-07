import React, { useState, useEffect } from 'react';

function BookAppointment() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        doctor: '',
        message: '',
        report: null,
    });

    useEffect(() => {
        document.title = "Book Appointment - MediCare";
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'report') {
            setFormData({ ...formData, report: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Data:", formData);
        alert("Appointment booked successfully!");
    };

    return (
        <section className="bg-white py-12 px-4 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
                    Book an Appointment
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-blue-50 shadow-md rounded-lg p-8 space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Street, City, State, ZIP"
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Doctor */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Doctor</label>
                            <input
                                type="text"
                                name="doctor"
                                value={formData.doctor}
                                onChange={handleChange}
                                placeholder="Doctor's Name"
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Time</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Upload Report */}
                        <div>
                            <label className="block text-sm font-medium text-blue-800 mb-1">Upload Report (Optional)</label>
                            <input
                                type="file"
                                name="report"
                                accept=".pdf,.jpg,.png"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                            />
                        </div>
                    </div>

                    {/* Symptoms/Message */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Message / Symptoms</label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your problem or symptoms..."
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>



                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-medium px-6 py-3 rounded hover:bg-green-600 transition"
                        >
                            Confirm Appointment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default BookAppointment;
