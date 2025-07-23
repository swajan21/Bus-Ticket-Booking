import React from "react";
import { Link } from "react-router-dom";

const PopularRoutes = () => {
  const routes = [
    { from: "Dhaka", to: "Chittagong" },
    { from: "Dhaka", to: "Cox’s Bazar" },
    { from: "Dhaka", to: "Sylhet" },
    { from: "Dhaka", to: "Khulna" },
    { from: "Dhaka", to: "Rajshahi" },
    { from: "Dhaka", to: "Barisal" },
  ];

  return (
     <div className="bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white">
    
      <h2 className="text-4xl font-extrabold text-center text-green-700 dark:text-white mb-12">
         Popular Routes Across Bangladesh
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {routes.map((route, idx) => (
          <Link
            to={`/bus?from=${route.from}&to=${route.to}`}
            key={idx}
            className="group bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="text-blue-600 dark:text-blue-400 text-3xl group-hover:scale-110 transition-transform">🚌</div>
              <div className="text-left sm:text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {route.from} → {route.to}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Daily available tickets</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    
    </div>
  );
};

export default PopularRoutes;