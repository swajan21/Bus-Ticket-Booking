import React from "react";
//import travelImage from "../../assets/travel-illustration.png"; // Adjust path if needed

const TravelOptionsSection = () => {
  return (
   <div className="bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            All your <span className="text-green-600">travel options</span> in one place
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            More than <strong>1,000</strong> trusted travel partners across trains, buses, flights, and launch
            so that you can focus on the journey.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-green-600">250 Million+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tickets Sold</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">3000+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Routes</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">10 Million+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Happy Users</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={''}
            alt="Travel illustration"
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelOptionsSection;