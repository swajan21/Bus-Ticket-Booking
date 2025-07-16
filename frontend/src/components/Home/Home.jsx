import React, { useState } from 'react';
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







const HomePage = () => {
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
                className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'bus' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-neutral-700'}`}
                onClick={() => setActiveTab('bus')}
              >
                <FaBus className="inline mr-1" /> Bus
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="From" className="px-4 py-2 border rounded w-full" />
              <input type="text" placeholder="To" className="px-4 py-2 border rounded w-full" />
              <input type="date" className="px-4 py-2 border rounded w-full" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="text-center p-6 bg-white dark:bg-neutral-800 shadow rounded-lg">
          <FaBus className="text-5xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
          <p>Book tickets in minutes with our user-friendly interface.</p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-neutral-800 shadow rounded-lg">
          <FaMapMarkedAlt className="text-5xl mx-auto text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Popular Routes</h3>
          <p>Travel across Bangladesh with all major routes and operators.</p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-neutral-800 shadow rounded-lg">
          <FaTicketAlt className="text-5xl mx-auto text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best Offers</h3>
          <p>Enjoy exclusive discounts and promotional fares.</p>
        </div>
      </section>
      {/* Bus Categories */}
<section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-950">
  <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-white mb-12">
    🚌 Explore Bus Categories
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
      <img src="/images/ac-bus.png" alt="AC Bus" className="w-24 h-24 mx-auto mb-4" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-white">AC Bus</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Cool and comfortable travel experience.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
      <img src="/images/non-ac.png" alt="Non-AC Bus" className="w-24 h-24 mx-auto mb-4" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-white">Non-AC Bus</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Affordable and widely available transport.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
      <img src="/images/sleeper.png" alt="Sleeper Bus" className="w-24 h-24 mx-auto mb-4" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-white">Sleeper</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Lie-flat seats for overnight journeys.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 text-center p-6">
      <img src="/images/business.png" alt="Business Class" className="w-24 h-24 mx-auto mb-4" />
      <h4 className="text-lg font-semibold text-blue-600 dark:text-white">Business Class</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Premium seating for executive comfort.</p>
    </div>
  </div>
</section> 

{/* Discounts & Offers */}
<section className="py-20 px-4 bg-gray-50 dark:bg-neutral-900">
  <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-white mb-12">
    🎁 Discounts & Offers
  </h2>

  <div className="max-w-6xl mx-auto">
    <Slider
      dots={true}
      infinite={true}
      speed={700}
      slidesToShow={3}       // Show 3 slides on large screens
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
      arrows={false}
      responsive={[
        {
          breakpoint: 1024,  // below 1024px width (tablet)
          settings: {
            slidesToShow: 2, // show 2 slides
          },
        },
        {
          breakpoint: 640,   // below 640px width (mobile)
          settings: {
            slidesToShow: 1, // show 1 slide
          },
        },
      ]}
    >
      {['offer1.jpg', 'offer2.jpg', 'offer3.jpg'].map((img, index) => (
        <div key={index} className="px-3">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800">
            <img
              src={`/images/offers/${img}`}
              alt={`Offer ${index + 1}`}
              className="w-full h-56 md:h-72 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Special Deal Just for You!
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Save on top routes – limited time only.
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

{/* Popular Routes */}
<section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
  <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-white mb-12">
    🚍 Popular Routes Across Bangladesh
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { from: 'Dhaka', to: 'Chittagong' },
      { from: 'Dhaka', to: 'Cox’s Bazar' },
      { from: 'Dhaka', to: 'Sylhet' },
      { from: 'Dhaka', to: 'Khulna' },
      { from: 'Dhaka', to: 'Rajshahi' },
      { from: 'Dhaka', to: 'Barisal' },
    ].map((route, idx) => (
      <Link
        to={`/bus?from=${route.from}&to=${route.to}`}
        key={idx}
        className="group bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="text-blue-600 dark:text-blue-400 text-3xl group-hover:scale-110 transition-transform">🚌</div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {route.from} → {route.to}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Daily available tickets</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* Call to Action */}
      <section className="bg-violet-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to travel?</h2>
        <p className="mb-6">Book your tickets now and explore your destination</p>
        <Link to="/bus" className="bg-white text-violet-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100">
          Find Buses
        </Link>
      </section>
    </div>
  );
};

export default HomePage;