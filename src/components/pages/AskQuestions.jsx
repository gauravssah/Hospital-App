import React, { useState } from 'react';

function AskQuestions() {
    const [form, setForm] = useState({
        category: '',
        question: '',
        file: null,
    });

    const categories = [
        'General Medicine',
        'Cardiology',
        'Dermatology',
        'Neurology',
        'Psychiatry',
        'ENT',
        'Orthopedic',
        'Gynecology',
        'Pediatrics',
        'Urology',
        'Ophthalmology',
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', form);
        alert('Your question has been submitted!');
    };

    return (
        <section className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 text-center">
                    Ask a Health Question
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Category Dropdown */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            Select Health Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Choose Category --</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Question Textarea */}
                    <div>
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Question
                        </label>
                        <textarea
                            id="question"
                            name="question"
                            rows="5"
                            value={form.question}
                            onChange={handleChange}
                            placeholder="Describe your issue or ask a question..."
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                            Attach Report/Image (optional)
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept="image/*,application/pdf"
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Submit Question
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AskQuestions;
