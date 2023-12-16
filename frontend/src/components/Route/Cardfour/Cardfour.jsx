import React from 'react'

const Cardfour = () => {
  return (
    <div>
      {/* Assessments, Quizzes, Tests */}
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-right" className="md:w-6/12">
          <img className="md:w-11/12" src="https://mhaecal.github.io/frontend/img/true-false.png" alt="True False Image" />
        </div>
        <div data-aos="fade-left" className="md:w-6/12 md:transform md:-translate-y-20">
          <h1 className="font-semibold text-darken text-3xl lg:pr-64">Assessments, <span className="text-yellow-500">Quizzes</span>, Tests</h1>
          <p className="text-gray-500 my-5 lg:pr-52">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
        </div>
      </div>

      {/* Class Management Tools for Educators */}
      <div className="flex flex-col md:flex-row items-center mt-12">
        <div data-aos="fade-right" className="md:w-5/12">
          <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32"><span className="text-yellow-500">Class Management</span> Tools for Educators</h1>
          <p className="my-5 lg:pr-14">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
        </div>
        <img data-aos="fade-left" className="md:w-7/12" src="https://mhaecal.github.io/frontend/img/gradebook.png" alt="Gradebook Image" />
      </div>
    </div>
  );

}

export default Cardfour
