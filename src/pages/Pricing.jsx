import React from "react";
import Navbar from "../components/Navbar";
import arrowIcon from "../assets/Arrow 1.svg";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-[80px] overflow-hidden">
        <p className="font-alegreya font-bold text-base mt-[10px] mb-3">Join Us</p>

        {/* Hero Section */}
        <div className="w-full h-[200px] md:h-[338px] bg-gray-300 flex flex-col justify-center pl-7 space-y-5">
          <h1 className="text-[28px] md:text-[40px] leading-[32px] md:leading-[48px] font-normal text-wrap">
            Become a 99 Yards
            <br />
            Brand Ambassador
          </h1>
          <a href="" className="w-[200px] md:w-[279px] h-[47px] border rounded-[4px] bg-violet-600 flex items-center justify-center">
            <p className="text-base leading-[19px] font-semibold text-white">JOIN US</p>
          </a>
        </div>

        {/* Description */}
        <div className="py-10 md:py-14 text-center">
          <p className="text-xl md:text-2xl font-semibold">Description</p>
          <p className="text-lg md:text-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta, ea facere perferendis omnis
            aliquam tempore in ut libero mollitia magni dolore possimus nisi explicabo odio adipisci atque facilis ad!
          </p>
        </div>

        {/* Requirements Section */}
        <div className="py-10 md:py-14 text-center">
          <p className="text-xl md:text-2xl font-semibold pb-5">Requirements</p>
          <div className="flex justify-center gap-6 md:gap-16">
            <div className="h-[140px] md:h-[217px] w-[140px] md:w-[217px] bg-gray-300"></div>
            <div className="h-[140px] md:h-[217px] w-[140px] md:w-[217px] bg-gray-300"></div>
            <div className="h-[140px] md:h-[217px] w-[140px] md:w-[217px] bg-gray-300"></div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-10 md:py-14 text-center">
          <p className="text-xl md:text-2xl font-semibold pb-5">Benefits</p>
          <div className="flex flex-col sm:flex-col md:flex-row justify-between md:justify-center gap-4 md:gap-12">
            {/* On small screens, the items will be centered and in a column */}
            <div className="h-[200px] md:h-[321px] w-full sm:w-[90%] md:w-[48%] bg-gray-300 mx-auto">
              <p>Exclusive Perks</p>
            </div>
            <div className="h-[200px] md:h-[321px] w-full sm:w-[90%] md:w-[48%] bg-gray-300 mx-auto">
              <p>Networking</p>
            </div>
            <div className="h-[200px] md:h-[321px] w-full sm:w-[90%] md:w-[48%] bg-gray-300 mx-auto">
              <p>Influence</p>
            </div>
            <div className="h-[200px] md:h-[321px] w-full sm:w-[90%] md:w-[48%] bg-gray-300 mx-auto">
              <p>Recognition</p>
            </div>
          </div>
        </div>

        {/* How to Apply Section (with padding) */}
        <div className="py-10 md:py-14 text-center px-4 sm:px-8"> {/* Added padding here */}
          <p className="text-xl md:text-2xl font-semibold pb-2">How to Apply</p>
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {/* Circle 1 */}
            <div className="w-[80px] sm:w-[100px] md:w-[140px] flex flex-col items-center">
              <div className="h-[80px] sm:h-[100px] md:h-[140px] w-[80px] sm:w-[100px] md:w-[140px] bg-gray-300 border rounded-full"></div>
              <p className="text-[12px] md:text-[14px] font-normal text-wrap text-center">Lorem ipsum dolor sit amet, consectetur</p>
            </div>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center h-auto">
              <img
                src={arrowIcon}
                alt="arrow"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                style={{ margin: '0 1rem' }}
              />
            </div>

            {/* Circle 2 */}
            <div className="w-[80px] sm:w-[100px] md:w-[140px] flex flex-col items-center">
              <div className="h-[80px] sm:h-[100px] md:h-[140px] w-[80px] sm:w-[100px] md:w-[140px] bg-gray-300 border rounded-full"></div>
              <p className="text-[12px] md:text-[14px] font-normal text-wrap text-center">Lorem ipsum dolor sit amet, consectetur</p>
            </div>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center h-auto">
              <img
                src={arrowIcon}
                alt="arrow"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                style={{ margin: '0 1rem' }}
              />
            </div>

            {/* Circle 3 */}
            <div className="w-[80px] sm:w-[100px] md:w-[140px] flex flex-col items-center">
              <div className="h-[80px] sm:h-[100px] md:h-[140px] w-[80px] sm:w-[100px] md:w-[140px] bg-gray-300 border rounded-full"></div>
              <p className="text-[12px] md:text-[14px] font-normal text-wrap text-center">Lorem ipsum dolor sit amet, consectetur</p>
            </div>

            {/* Arrow 3 */}
            <div className="flex items-center justify-center h-auto">
              <img
                src={arrowIcon}
                alt="arrow"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                style={{ margin: '0 1rem' }}
              />
            </div>

            {/* Circle 4 */}
            <div className="w-[80px] sm:w-[100px] md:w-[140px] flex flex-col items-center">
              <div className="h-[80px] sm:h-[100px] md:h-[140px] w-[80px] sm:w-[100px] md:w-[140px] bg-gray-300 border rounded-full"></div>
              <p className="text-[12px] md:text-[14px] font-normal text-wrap text-center">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>

        {/* Join Us Button */}
        <div className="pt-12 pb-32 flex justify-center">
          <a href="" className="w-[200px] md:w-[279px] h-[47px] border rounded-[4px] bg-violet-600 flex items-center justify-center">
            <p className="text-base leading-[19px] font-semibold text-white">JOIN US</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Pricing;
