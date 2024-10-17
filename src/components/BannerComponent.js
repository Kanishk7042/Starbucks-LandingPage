import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import red from "../images/red.png";
import first from "../images/first.png";
import third from "../images/third.png";
import fourth from "../images/fourth.png";
import "../styles/BannerComponent.css";

function BannerComponent() {
  return (
    <div className='lg:pl-20 lg:pr-20'>
      <div className="mt-10 relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination={{ clickable: true }}
          mousewheel={true}
          loop={true}
        >
          <SwiperSlide>
            <div className='w-full h-[220px] rounded-lg shadow-sm p-4 relative cursor-pointer' style={{ backgroundImage: `url(${first})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

              <div className='grid grid-cols-[1fr_9fr] gap-x-4'>
                <div>
                  <img className='absolute left-0' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/banner_image_1_d212303116.png" width={80} alt="Banner Image" />
                </div>
                <div>
                  <p className='text-[#ffffff]'>Introducing</p>
                  <p className='mt-2 font-extrabold text-xl text-[#ffffff]'>Classic Menu</p>
                  <p className='mt-2 text-[#ffffff]'>A perfect duo of the classic iced or hot coffee inspired by and for India; with all-day classic sandwiches</p>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex flex-col'>
                      <span className='text-[#ffffff] font-light text-xs'>Starting From</span>
                      <span className='text-[#ffffff] font-bold'>₹150* onwards</span>
                    </div>
                    <button className='bg-[#ffffff] text-[#00000de] w-52 rounded-full h-12 text-xs font-semibold'>Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-[220px] rounded-lg shadow-sm p-4 relative cursor-pointer' style={{ backgroundImage: `url(${red})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='grid grid-cols-[1fr_9fr] gap-x-4'>
                <div>
                  <img className='absolute left-0' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Item_App_and_Web_436875adc1.png" width={80} alt="Banner Image" />
                </div>
                <div>
                  <p className='text-[#ffffff]'>Introducing</p>
                  <p className='mt-2 font-extrabold text-xl text-[#ffffff]'>Gift A Starbucks</p>
                  <p className='mt-2 text-[#ffffff]'>This festive season, we bring to you the perfect gifting story from our India exclusive limited-edition range</p>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex flex-col'>
                      <span className='text-[#ffffff] font-light text-xs'>Starting From</span>
                      <span className='text-[#ffffff] font-bold'>₹350<span className='text-xs'>.00</span></span>
                    </div>
                    <button className='bg-[#ffffff] text-[#00000de] w-52 rounded-full h-12 text-xs font-semibold'>Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-[220px] rounded-lg shadow-sm p-4 relative cursor-pointer' style={{ backgroundImage: `url(${third})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

              <div className='grid grid-cols-[1fr_9fr] gap-x-4'>
                <div>
                  <img className='absolute left-0' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png" width={80} alt="Banner Image" />
                </div>
                <div>
                  <p className='text-[#ffffff]'>Starbucks</p>
                  <p className='mt-2 font-extrabold text-xl text-[#ffffff]'>Beverage Subscription</p>
                  <p className='mt-2 text-[#ffffff]'>Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply.</p>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex flex-col'>
                      <span className='text-[#ffffff] font-light text-xs'>Starting From</span>
                      <span className='text-[#ffffff] font-bold '>₹250<span className='text-xs'>.00</span>
                      </span>
                    </div>
                    <button className='bg-[#ffffff] text-[#00000de] w-52 rounded-full h-12 text-xs font-semibold'>Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-[220px] rounded-lg shadow-sm p-4 relative cursor-pointer' style={{ backgroundImage: `url(${fourth})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='grid grid-cols-[1fr_9fr] gap-x-4'>
                <div>
                  <img className='absolute left-0' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png" width={80} alt="Banner Image" />
                </div>
                <div>
                  <p className='text-[#ffffff]'>Now Brewing</p>
                  <p className='mt-2 font-extrabold text-xl text-[#ffffff]'>Starbucks Menu</p>
                  <p className='mt-2 text-[#ffffff]'>Indulge in season's feasting! Make your sips extra special. Explore Menu.</p>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex flex-col'>
                      <span className='text-[#ffffff] font-light text-xs'>Starting From</span>
                      <span className='text-[#ffffff] font-bold'>₹250</span>
                    </div>
                    <button className='bg-[#ffffff] text-[#00000de] w-52 rounded-full h-12 text-xs font-semibold'>Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BannerComponent;
