import React from 'react';
import "../styles/LearnMoreComponent.css";

const LearnMoreComponent = () => {
    return (
        <div className='p-5 lg:pl-20 lg:pr-20 bg-[#edebe9] pb-20'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <span className='text-[#1e3932] font-bold text-lg sm:text-2xl text-center sm:text-left'>
                    Learn more about the world of coffee!
                </span>
                <span className='font-semibold text-xs sm:text-sm text-[#00754a] mt-4 sm:mt-0 text-center sm:text-right'>
                    Discover More
                </span>
            </div>

            <div className='mt-10 rounded-lg cursor-pointer'>
                <div className='flex flex-col justify-between cursor-pointer rounded-lg image p-5 sm:pl-10 sm:pt-5 sm:pb-10'>
                    <span className='text-[#096] bg-[#E6EDEB] p-1 rounded-md w-20' style={{ fontSize: 10 }}>
                        Coffee Culture
                    </span>
                    <div className='text-white mt-5'>
                        <p className='text-lg sm:text-2xl font-semibold'>
                            Art & Science Of Coffee Brewing
                        </p>

                        <p className='mt-2 font-light text-sm'>
                            Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.
                        </p>

                        <button className='bg-white text-xs font-semibold text-[#1e3932] mt-5 sm:mt-14 pl-10 pr-10 sm:pl-16 sm:pr-16 p-2 rounded-full'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreComponent;
