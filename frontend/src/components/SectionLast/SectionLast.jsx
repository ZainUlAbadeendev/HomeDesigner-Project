import React from 'react';

const SectionLast = () => {
    const textStyle = { fontFamily: "'Proxima Nova', sans-serif" };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-200" style={{ height: '400px' }}>
            <h1 className="text-4xl font-bold mb-4" style={textStyle}>
                Like to Know More?
            </h1>
            <p className="text-lg text-center mb-8" style={textStyle}>
                Find out how our platform will improve your sales and engagement.<br /> Contact our team for a demo and see how you can gain a competitive advantage.
            </p>
            <a href="/best-selling" className="bg-green-700 text-white py-2 px-4 rounded-full text-center text-lg hover:bg-green-900" style={textStyle}>
                Vist Shop
            </a>
        </div>
    );
};

export default SectionLast;
