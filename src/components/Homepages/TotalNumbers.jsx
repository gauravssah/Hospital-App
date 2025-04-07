import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { label: 'Total Consultancies', value: 25000 },
    { label: 'Daily Consultations', value: 1200 },
    { label: 'Available Specialities', value: 40 },
];

function TotalNumbers() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only once when in view
        threshold: 0.3, // Trigger when 30% visible
    });

    return (
        <section ref={ref} className="bg-blue-50 py-12 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-10">
                    Our Growing Network
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-8">
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                {inView ? (
                                    <CountUp end={stat.value} duration={2} separator="," />
                                ) : (
                                    0
                                )}
                                +
                            </h3>
                            <p className="text-gray-700 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TotalNumbers;
