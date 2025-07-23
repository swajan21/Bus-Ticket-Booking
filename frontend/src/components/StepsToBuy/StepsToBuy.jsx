import React from "react";
import { FaSearch, FaHandPointer, FaMoneyBillWave } from "react-icons/fa";

const StepsToBuy = () => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white-800 mb-12">
          <span className="text-green-600">Buy tickets</span> in 3 easy steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Search */}
          <div className="flex flex-col items-center text-center">
            <FaSearch className="text-green-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Search</h3>
            <p className="text-white-600">
              Choose your origin, destination, journey dates and search for buses
            </p>
          </div>

          {/* Select */}
          <div className="flex flex-col items-center text-center">
            <FaHandPointer className="text-green-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Select</h3>
            <p className="text-white-600">
              Select your desired trip and choose your seats
            </p>
          </div>

          {/* Pay */}
          <div className="flex flex-col items-center text-center">
            <FaMoneyBillWave className="text-green-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pay</h3>
            <p className="text-white-600">
              Pay by bank cards or mobile banking
            </p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default StepsToBuy;
