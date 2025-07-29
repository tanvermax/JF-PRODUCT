import React from 'react';
import GrassWallSlider from './Slider';
import Slider from './Agriculter';
import Landscape from './Landscape';
import TrustIndicators from './TrustIndicators';
import WhyUsSection from './WhyUsSection';
import ShippingQualityBanner from './ShippingQualityBanner';
import Testimonial from './Client';
import ContactBranch from './ContactBranch';

const Home = () => {
    return (
        <div className='overflow-x-hidden '>
            <GrassWallSlider />
            <Slider />
            <Landscape />
            <TrustIndicators />
            <WhyUsSection />
            <div className='md:py-14 overflow-hidden -ml-3'>
                <ShippingQualityBanner />
            </div>
            <Testimonial />
            <ContactBranch />
        </div>
    );
};

export default Home;