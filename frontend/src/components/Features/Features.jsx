import React from "react";
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaShip, FaTrain, FaMapMarkedAlt, FaTicketAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Features = () => {
  return (
   <div className="bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white">
      <section className="py-8 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-white dark:bg-neutral-800 shadow rounded-lg">
          <FaBus className="text-5xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
          <p>Book tickets in minutes with our user-friendly interface.</p>
        </div>
        <div className="text-center p-4 bg-white dark:bg-neutral-800 shadow rounded-lg">
          <FaMapMarkedAlt className="text-5xl mx-auto text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Popular Routes</h3>
          <p>Travel across Bangladesh with all major routes and operators.</p>
        </div>
        <div className="text-center p-4 bg-white dark:bg-neutral-800 shadow rounded-lg">
          <FaTicketAlt className="text-5xl mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best Offers</h3>
          <p>Enjoy exclusive discounts and promotional fares.</p>
        </div>
      </section>
    </div>
  );
};

export default Features;
