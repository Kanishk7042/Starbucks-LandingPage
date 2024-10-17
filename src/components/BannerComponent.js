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
          {[
            {
              image: first,
              title: "Classic Menu",
              subtitle: "A perfect duo of the classic iced or hot coffee inspired by and for India; with all-day classic sandwiches",
              price: "₹150*",
              buttonLabel: "Know More",
              imgSrc: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/banner_image_1_d212303116.png"
            },
            {
              image: red,
              title: "Gift A Starbucks",
              subtitle: "This festive season, we bring to you the perfect gifting story from our India exclusive limited-edition range",
              price: "₹350.00",
              buttonLabel: "Know More",
              imgSrc: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Item_App_and_Web_436875adc1.png"
            },
            {
              image: third,
              title: "Beverage Subscription",
              subtitle: "Starbucks Subscription is Back! Sip Your Favourites for Less.Explore Menu.Tap for Details. T&C Apply.",
              price: "₹250.00",
              buttonLabel: "Know More",
              imgSrc: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png"
            },
            {
              image: fourth,
              title: "Starbucks Menu",
              subtitle: "Indulge in season's feasting! Make your sips extra special. Explore Menu.Tap for Details. T&C Apply.",
              price: "₹250",
              buttonLabel: "Know More",
              imgSrc: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png"
            },
          ].map((banner, index) => (
            <SwiperSlide key={index}>
              <div className='w-full h-[220px] rounded-lg shadow-sm p-2 sm:p-4 relative cursor-pointer' style={{ backgroundImage: `url(${banner.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='grid grid-cols-[1fr_9fr] gap-x-4 p-4'> {/* Consistent gap-x */}
                  <div>
                    <img className='absolute left-0 w-16 sm:w-20' src={banner.imgSrc} alt="Banner Image" />
                  </div>
                  <div className='flex flex-col justify-between h-full pl-4'> {/* Added padding-left */}
                    <div>
                      <p className='text-[#ffffff] text-sm sm:text-base'>Introducing</p>
                      <p className='mt-1 font-extrabold text-lg sm:text-xl text-[#ffffff]'>{banner.title}</p>
                      <p className='mt-1 text-[#ffffff] text-xs sm:text-sm'>{banner.subtitle}</p>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                      <div className='flex flex-col'>
                        <span className='text-[#ffffff] font-light text-xs'>Starting From</span>
                        <span className='text-[#ffffff] font-bold'>{banner.price}</span>
                      </div>
                      <button className='bg-[#ffffff] text-[#00000de] w-36 sm:w-52 rounded-full h-10 sm:h-12 text-xs font-semibold mt-2 ml-5'>{banner.buttonLabel}</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BannerComponent;
