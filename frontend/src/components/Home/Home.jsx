import React from 'react';
import Slider1 from '../Slider1/Slider1';
import Features from '../Features/Features';
import Categories from '../Categories/Categories';
import StepsToBuy from '../StepsToBuy/StepsToBuy';
import DiscountSlider from '../DiscountSlider/DiscountSlider';
import PopularRoutes from '../PopularRoutes/PopularRoutes';
import TravelOptionsSection from '../TravelOptionsSection/TravelOptionsSection';
import Footer from './../footer/Footer';

const Home = () => {
  return (
    <div className="space-y-10" >
      
        <Slider1 />
      
      
        <Features />
      
      
        <Categories />
        
    
        <StepsToBuy />
     
      
        <DiscountSlider />
        
        
        <PopularRoutes />
        
      
        <TravelOptionsSection />
        
       

      
    </div>
  );
};

export default Home;