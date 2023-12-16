import React from 'react'

const Cardthree = () => {
    return (
       
        <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
        <img
          data-aos="fade-left"
          className="md:w-1/2"
          src="https://mhaecal.github.io/frontend/img/true-false.png"
          alt="Girl with books"
        />
        <div data-aos="fade-right" className="md:w-1/2 lg:pl-14">
          <h1 className="text-darken font-semibold text-3xl lg:pr-56">
            <span className="text-yellow-500">Tools</span> For Teachers And Learners
          </h1>
          <p className="text-gray-500 my-4 lg:pr-32">
            Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>
      </div>
    );
  };
        
export default Cardthree
