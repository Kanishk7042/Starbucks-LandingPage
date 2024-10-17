import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";

import React from 'react';

const FooterComponent = () => {
    return (
        <div className='p-5 lg:pl-20 lg:pr-20 bg-[#0e382c] w-full'>
            <div className='flex flex-col lg:flex-row justify-between flex-wrap '>
                <div className='mt-2 lg:mt-0 flex justify-center lg:justify-start'>
                    <img src={require("../images/logo.png")} alt="Logo " className="w-[62px] h-[62px]" />
                </div>
                <div className='text-white mt-5 lg:mt-2'>
                    <p className='font-semibold text-lg sm:text-xl text-center lg:text-left'>About Us</p>
                    <p className='mt-2 text-center lg:text-left'>Our Heritage</p>
                    <p className='mt-2 text-center lg:text-left'>Coffeehouse</p>
                    <p className='mt-2 text-center lg:text-left'>Our Company</p>
                </div>

                <div className='text-white mt-5 lg:mt-2'>
                    <p className='font-semibold text-lg sm:text-xl text-center lg:text-left'>Responsibility</p>
                    <p className='mt-2 text-center lg:text-left'>Diversity</p>
                    <p className='mt-2 text-center lg:text-left'>Community</p>
                    <p className='mt-2 text-center lg:text-left'>Ethical Sourcing</p>
                    <p className='mt-2 text-center lg:text-left'>Environmental Stewardship</p>
                    <p className='mt-2 text-center lg:text-left'>Learn More</p>
                </div>

                <div className='text-white mt-5 lg:mt-2'>
                    <p className='font-semibold text-lg sm:text-xl text-center lg:text-left'>Quick Links</p>
                    <p className='mt-2 text-center lg:text-left'>Privacy Policy</p>
                    <p className='mt-2 text-center lg:text-left'>FAQs</p>
                    <p className='mt-2 text-center lg:text-left'>Mobile App Terms</p>
                    <p className='mt-2 text-center lg:text-left'>Customer Service</p>
                    <p className='mt-2 text-center lg:text-left'>Delivery</p>
                    <p className='mt-2 text-center lg:text-left'>Season's Gifting</p>
                    <p className='mt-2 text-center lg:text-left'>Loyalty Program</p>
                    <p className='mt-2 text-center lg:text-left'>Rewards Day Offer</p>
                    <p className='mt-2 text-center lg:text-left'>Beverage Subscription</p>
                </div>

                <div className='text-white mt-5 lg:mt-2'>
                    <p className='font-semibold text-lg sm:text-xl text-center lg:text-left'>Social Media</p>
                    <div className='flex justify-center lg:justify-start mt-2 space-x-4'>
                        <img src={one} alt="Social 1" className='w-8 h-8' />
                        <img src={two} alt="Social 2" className='w-8 h-8' />
                        <img src={three} alt="Social 3" className='w-8 h-8' />
                    </div>
                </div>

                <div className='mt-5 lg:mt-2 flex justify-center lg:justify-start'>
                    <p className='cursor-pointer'><img src="https://www.starbucks.in/assets/images/appstoreiOS.png" alt="iOS Store" className='w-32' /></p>
                    <p className='ml-4 cursor-pointer'><img src="https://www.starbucks.in/assets/images/appstoreAndroid.png" alt="Android Store" className='w-32' /></p>
                </div>
            </div>

            <hr className='mt-10' />

            <div className='text-white text-sm mt-5 font-thin flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-wrap justify-center lg:justify-start'>
                    <span className='mt-2'>Web Accessibility <span className='text-xl mx-2'>|</span></span>
                    <span className='mt-2'>Privacy Statement <span className='text-xl mx-2'>|</span></span>
                    <span className='mt-2'>Terms of Use <span className='text-xl mx-2'>|</span></span>
                    <span className='mt-3.5'>Contact Us</span>
                </div>
                <div className='text-xs mt-5 lg:mt-0 text-center lg:text-right'>
                    <span>© 2024 Starbucks Coffee Company. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
