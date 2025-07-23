import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaShip, FaTrain, FaMapMarkedAlt, FaTicketAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';
import slider5 from '../../assets/slider5.jpg';

const Slider1 = () => {

    const [activeTab, setActiveTab] = useState('bus');
      const sliderImages = [slider1, slider2, slider3, slider4, slider5];
    
      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };




    return (
        <div className="bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white min-h-screen">
            {/* Slider Section with Search Overlay */}
      <section className="relative overflow-hidden">
        <Slider {...sliderSettings}>
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100vh] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Search Box Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 dark:bg-neutral-800 rounded-xl shadow-lg p-6 w-[90%] max-w-4xl">
            <div className="flex justify-center mb-4 gap-4">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'bus' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}
                onClick={() => setActiveTab('bus')}
              >
                <FaBus className="inline mr-1" /> Bus
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="From" className="px-4 py-2 border rounded w-full" />
              <input type="text" placeholder="To" className="px-4 py-2 border rounded w-full" />
              <input type="date" className="px-4 py-2 border rounded w-full" />
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">Search</button>
            </div>
          </div>
        </div>
      </section>
            
        </div>
    );
};

export default Slider1;