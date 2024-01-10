
import React from 'react';

const Cardone = () => {
  return (
    <section className="bg-gray-50" style={{ fontFamily: "'Proxima Nova', sans-serif" }}>

      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://inhaabit.com/wp-content/uploads/2023/05/furniture-room-planner.jpg" alt="feature image 2" />

          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              E-commerce for Local Vendors</h2>
            <p className="mb-8 font-light lg:text-xl">Explore an exclusive array of home decor, furniture, and design elements sourced directly from local vendors. Uncover hidden gems and one-of-a-kind pieces that add a distinctive touch to your interior spaces.</p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5  text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Furniture Products</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5  text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Decor Items</span>
              </li>

            </ul>

            <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional  solutions.</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Instant Augmented Reality Feature</h2>
            <p className="mb-8 font-light lg:text-xl"> With our Augmented Reality feature, you can virtually place furniture and decor in your own space. Use your phone's camera to see how each piece fits, matches, and complements your surroundings. It's like trying before buying, making interior design not just easy but fun. Augmented Reality is your personal design assistant, bringing your vision to life effortlessly.</p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              {/* <li className="flex space-x-3">
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
              </li> */}
              {/* Button with hover effect and link to RoomPlanner page */}
              <a href="/RoomPlanner">
                <button className="relative inline-flex items-center px-4 py-2 mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#316756] border border-transparent rounded-md hover:shadow-lg hover:bg-[#255243] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-[#1E4D35]">
                  <span>Explore Now</span>
                </button>
              </a>
            </ul>


            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional  solutions.</p>
          </div>

          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://inhaabit.com/wp-content/uploads/2023/06/ar-mocka-chair.jpg" alt="feature image" />
        </div>
      </div>
    </section>
  );
};





export default Cardone;



