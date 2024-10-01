import React from "react";
import Navbar from "../components/Navbar";
import homepageImg1 from "../assets/iPhone 15.png";
import arrowIcon from "../assets/chevron-double-right-svgrepo-com.svg";
import homepageImg2 from "../assets/iPhone 15 Pro.png";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-[80px] pb-20">
        <div className="h-fit mt-10 w-full pb-8 relative">
          {/* Background */}
          <div className="h-[338px] bg-gray-300"></div>

          {/* Text */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center">
            <p className="text-[24px] sm:text-[28px] md:text-[32px] leading-[30px] sm:leading-[34px] md:leading-[38px] font-normal text-center">
              Your Fashion, Your Way
            </p>
          </div>

          {/* Search Bar */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="w-[90%] sm:w-[75%] md:w-[504px] h-[52px] border-[1px] border-black rounded-lg bg-white flex justify-center items-center">
              <input
                className="w-full text-base font-normal text-center px-4"
                type="text"
                placeholder="Search Bar"
              />
            </div>
          </div>
        </div>

        <div>
          {/* Popular Searches Section */}
          <p className="text-[24px] leading-[29px] font-normal pt-10 pb-5">
            Popular Searches
          </p>
          <div className="flex flex-wrap justify-between gap-4 sm:gap-6">
            {/* Responsive widths and flex wrap */}
            <div className="w-full sm:w-[48%] lg:w-[197px] h-[228px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[197px] h-[228px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[197px] h-[228px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[197px] h-[228px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[197px] h-[228px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[197px] h-[228px] bg-gray-300"></div>
          </div>

          {/* Text and Image Section */}
          <div className="flex flex-col lg:flex-row justify-around items-center gap-6 pt-12 pb-12">
            <div className="lg:pt-20 text-center lg:text-left">
              <h1 className="text-[28px] sm:text-[32px] leading-[34px] sm:leading-[38px] font-normal">
                Revolutionize Fashion: From Concept to Catwalk
              </h1>
              <p className="text-[18px] sm:text-[24px] leading-[22px] sm:leading-[29px] font-normal">
                A premier platform uniting fashion professionals
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <img
                src={homepageImg1}
                className="object-contain h-[250px] w-[280px] sm:h-[305px] sm:w-[406px]"
              />
            </div>
          </div>
        </div>

        <div>
          {/* Fashion Categories Section */}
          <div className="flex flex-row justify-between pb-4">
            <p className="text-[24px] leading-[29px] font-normal">
              Fashion Categories
            </p>
            <a href="">
              <div className="flex flex-row gap-2 items-center">
                <p className="text-base font-normal">View All</p>
                <img src={arrowIcon} className="h-4 w-4" />
              </div>
            </a>
          </div>

          {/* Responsive Columns for Fashion Categories */}
          <div className="flex flex-wrap justify-between gap-4 sm:gap-6">
            <div className="w-full sm:w-[48%] lg:w-[48%] xl:w-[614px] h-[91px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[48%] xl:w-[614px] h-[91px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[48%] xl:w-[614px] h-[91px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[48%] xl:w-[614px] h-[91px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[48%] xl:w-[614px] h-[91px] bg-gray-300"></div>
            <div className="w-full sm:w-[48%] lg:w-[48%] xl:w-[614px] h-[91px] bg-gray-300"></div>
          </div>

          {/* Testimonials Section */}
          <div className="py-14">
            <p className="text-[24px] leading-[29px] font-normal pb-4">
              Testimonials
            </p>
            <div className="flex flex-wrap justify-between gap-4 sm:gap-6">
              <div className="w-full sm:w-[48%] md:w-[297px] h-[228px] bg-gray-300"></div>
              <div className="w-full sm:w-[48%] md:w-[297px] h-[228px] bg-gray-300"></div>
              <div className="w-full sm:w-[48%] md:w-[297px] h-[228px] bg-gray-300"></div>
              <div className="w-full sm:w-[48%] md:w-[297px] h-[228px] bg-gray-300"></div>
            </div>
          </div>

          {/* App Download Section */}
          <div className="bg-gray-300 h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-24 px-5 lg:px-20 py-10">
            {/* Text Section */}
            <div className="w-full lg:w-[50%] space-y-5 text-center lg:text-left">
              <h1 className="text-[28px] sm:text-[32px] leading-[34px] sm:leading-[38px] font-semibold">
                Download the 99 Yards app now
              </h1>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[24px] lg:leading-[29px] text-wrap pb-6">
                Your go-to platform for booking fashion talent. Easy to use,
                diverse professionals. Find models, photographers, stylists, and
                more.
              </p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <div className="bg-gray-100 w-[217px] h-[46px] flex items-center justify-center border border-gray-400">
                  <p className="text-[18px] sm:text-[20px]">Get on Android</p>
                </div>
                <div className="bg-gray-100 w-[217px] h-[46px] flex items-center justify-center border border-gray-400">
                  <p className="text-[18px] sm:text-[20px]">Get on iOS</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
              <img
                src={homepageImg2}
                className="object-contain w-[240px] sm:w-[320px] lg:w-[462px] h-auto"
                alt="Download the App"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
