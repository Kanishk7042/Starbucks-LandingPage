import React from "react";

const RecommendsComponent = () => {
    return (<>

        <div className="xl:pl-20 xl:pr-20  pl-5 pr-5 mt-20">

            <div className="flex justify-center xl:justify-start ">

                <span className="text-[#1e3932] font-bold text-2xl">Handcrafted Curations

                </span>
            </div>
            <div className="mt-5 flex justify-between flex-wrap">

                <div className="w-28 text-center">
                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/100501.jpg" alt="Bestseller" className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"></img>
                    <span className="text-[#212529] text-sm font-semibold">Bestseller</span>
                </div>

                <div className="w-28 text-center">
                    <img src="https://www.starbucks.in/assets/icon/Drinks.webp" alt="Drinks" className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"></img>
                    <span className="text-[#212529] text-sm font-semibold">Drinks</span>
                </div>

                <div className="w-28 text-center">
                    <img src="https://www.starbucks.in/assets/icon/Food.webp" alt="Food" className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"></img>
                    <span className="text-[#212529] text-sm font-semibold">Food</span>
                </div>

                <div className="w-28 text-center">
                    <img src="https://www.starbucks.in/assets/icon/Merchandise.webp" alt="Merchandise" className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"></img>
                    <span className="text-[#212529] text-sm font-semibold">Merchandise</span>
                </div>

                <div className="w-28 text-center">
                    <img src="		https://www.starbucks.in/assets/icon/CoffeeAtHome.webp
" alt="Coffee At Home" className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"></img>
                    <span className="text-[#212529] text-sm font-semibold">Coffee At Home</span>
                </div>

                <div className="w-28 text-center">
                    <img src="https://www.starbucks.in/assets/icon/ReadyToEat.webp		
" alt="Ready to Eat" className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"></img>
                    <span className="text-[#212529] text-sm font-semibold">Ready to Eat</span>
                </div>
            </div>
        </div>

    </>

    );
};

export default RecommendsComponent;