import React from 'react';

const StatsBanner = () => {
    return (
        <div className="bg-black text-white py-4">
            <div className="max-w-7xl mx-auto flex justify-around">
                <div className="text-center">
                    <p className="text-2xl font-bold">30,000+</p>
                    <p>Verified Cars</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">15,000+</p>
                    <p>Trusted Hosts</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">2 Million+</p>
                    <p>KMS Driven</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">15+ Cities</p>
                    <p>And Counting..</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;
