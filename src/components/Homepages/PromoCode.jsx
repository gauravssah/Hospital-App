import React from 'react';

const promoData = [
    {
        title: "GET 25% OFF",
        code: "HEALTH25",
        description: "Use this code to get 25% off on your first consultation.",
        validTill: "Valid till: 30th April 2025"
    },
    {
        title: "FREE VIDEO CONSULT",
        code: "FREEDOC",
        description: "Enjoy a free video consultation with our top doctors.",
        validTill: "Valid till: 15th May 2025"
    },
    {
        title: "UPTO ₹500 OFF",
        code: "SAVE500",
        description: "Flat ₹500 off on medicine orders above ₹2000.",
        validTill: "Valid till: 10th May 2025"
    }
];

function PromoCode() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Latest Offers & Coupons</h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {promoData.map((promo, index) => (
                        <div key={index} className="bg-white border rounded-xl shadow p-5 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">{promo.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{promo.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold rounded">{promo.code}</span>
                                <span className="text-xs text-gray-500">{promo.validTill}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PromoCode;
