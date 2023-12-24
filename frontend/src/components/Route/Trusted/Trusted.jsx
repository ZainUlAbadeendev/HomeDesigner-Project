import React from 'react'

const Trusted = () => {
  return (

    <div className="max-w-4xl mx-auto">
      <h1 className="text-center mb-3 text-gray-400 font-medium">Trusted by 5,000+ Companies Worldwide</h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <img className="h-7" src="https://mhaecal.github.io/frontend/img/company/google.svg" alt="Google" />
        <img className="h-7" src="https://mhaecal.github.io/frontend/img/company/netflix.svg" alt="Netflix" />
        <img className="h-7" src="https://mhaecal.github.io/frontend/img/company/airbnb.svg" alt="Airbnb" />
        <img className="h-7 transform translate-y-2" src="https://mhaecal.github.io/frontend/img/company/amazon.svg" alt="Amazon" />
        <img className="h-7" src="https://mhaecal.github.io/frontend/img/company/facebook.svg" alt="Facebook" />
        <img className="h-7" src="https://mhaecal.github.io/frontend/img/company/grab.svg" alt="Grab" />
      </div>
    </div>
  );
};

export default Trusted;
