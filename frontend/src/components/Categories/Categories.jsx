import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBus,
  FaShip,
  FaTrain,
  FaMapMarkedAlt,
  FaTicketAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white">
      <h2 className="text-4xl font-extrabold text-center text-green-700 dark:text-white mb-12">
         Explore Bus Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
          <img
            src="/images/ac-bus.png"
            alt="AC Bus"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-blue-600 dark:text-white">
            AC Bus
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Cool and comfortable travel experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
          <img
            src="/images/non-ac.png"
            alt="Non-AC Bus"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-blue-600 dark:text-white">
            Non-AC Bus
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Affordable and widely available transport.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
          <img
            src="/images/sleeper.png"
            alt="Sleeper Bus"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-blue-600 dark:text-white">
            Sleeper
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Lie-flat seats for overnight journeys.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
          <img
            src="/images/business.png"
            alt="Business Class"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold text-blue-600 dark:text-white">
            Business Class
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Premium seating for executive comfort.
          </p>
        </div>
      </div>
    </div>
  
           
  );
};

export default Categories;
