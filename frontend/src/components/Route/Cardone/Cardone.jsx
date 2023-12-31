
import React from 'react';

const Cardone = () => {
  return (
    <section className="bg-gray-50" style={{ fontFamily: "'Proxima Nova', sans-serif" }}>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Instant Augmented Reality</h2>
            <p className="mb-8 font-light lg:text-xl">Augmented Reality completes the sales process by allowing customers to try your products in their space. With realistic sizing and materials, AR increases purchase confidence by allowing customers to see how a product impacts in their space, see which material is best and place it in the ideal position.</p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Continuous integration and deployment</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Development workflow</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Knowledge management</span>
              </li>
            </ul>

            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>

          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://inhaabit.com/wp-content/uploads/2023/06/ar-mocka-chair.jpg" alt="feature image" />
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://inhaabit.com/wp-content/uploads/2023/05/furniture-room-planner.jpg" alt="feature image 2" />

          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">We invest in the world’s potential</h2>
            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Dynamic reports and dashboards</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Templates for everyone</span>
              </li>
              {/* Add more list items as needed */}
            </ul>

            <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};





export default Cardone;



