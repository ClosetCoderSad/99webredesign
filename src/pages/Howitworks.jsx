import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Howitworks = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-[80px]">
        <p className="font-alegreya font-bold text-base mt-4 mb-2">
          How it works
        </p>
        <div className="w-full h-[200px] md:h-[338px] bg-gray-300 flex items-center pl-4 md:pl-7">
          <p className="text-[24px] md:text-[40px] font-normal leading-[32px] md:leading-[48px]">
            How 99 Yards
            <br />
            Simplifies Fashion
            <br />
            Collaboration
          </p>
        </div>

        {/* Repetitive Block 1 */}
        <div className="py-8 md:py-16 px-5 flex flex-col md:flex-row justify-between gap-10 md:gap-14">
          <div className="pt-6">
            <p className="text-[16px] md:text-[20px] font-semibold">
              Join the community
            </p>
            <h1 className="text-[24px] md:text-[32px] font-normal">
              Become part of a thriving community of fashion professionals.
              Connect with like-minded individuals and expand your network
            </h1>
          </div>
          <div className="w-full md:w-[373px] h-[200px] md:h-[238px] bg-gray-300"></div>
        </div>

        {/* Repetitive Block 2 */}
        <div className="py-8 md:py-16 px-5 flex flex-col-reverse md:flex-row-reverse justify-between gap-10 md:gap-14">
          <div className="pt-6">
            <p className="text-[16px] md:text-[20px] font-semibold">
              Create Your Profile
            </p>
            <h1 className="text-[24px] md:text-[32px] font-normal">
              Showcase your skills and experience. Create a professional profile
              that highlights your unique talents and offerings
            </h1>
          </div>
          <div className="w-full md:w-[373px] h-[200px] md:h-[238px] bg-gray-300"></div>
        </div>

        {/* Repetitive Block 3 */}
        <div className="py-8 md:py-16 px-5 flex flex-col md:flex-row justify-between gap-10 md:gap-14">
          <div className="pt-6">
            <p className="text-[16px] md:text-[20px] font-semibold">
              Set Your Offers
            </p>
            <h1 className="text-[24px] md:text-[32px] font-normal">
              Define your services and set your rates. Attract clients by
              clearly outlining your offerings and pricing
            </h1>
          </div>
          <div className="w-full md:w-[373px] h-[200px] md:h-[238px] bg-gray-300"></div>
        </div>

        {/* Repetitive Block 4 */}
        <div className="py-8 md:py-16 px-5 flex flex-col-reverse md:flex-row-reverse justify-between gap-10 md:gap-14">
          <div className="pt-6">
            <p className="text-[16px] md:text-[20px] font-semibold">
              Get Booked and Collaborate
            </p>
            <h1 className="text-[24px] md:text-[32px] font-normal">
              Receive booking requests directly through the app. Collaborate
              with clients seamlessly and efficiently
            </h1>
          </div>
          <div className="w-full md:w-[373px] h-[200px] md:h-[238px] bg-gray-300"></div>
        </div>

        {/* Repetitive Block 5 */}
        <div className="py-8 md:py-16 px-5 flex flex-col md:flex-row justify-between gap-10 md:gap-14">
          <div className="pt-6">
            <p className="text-[16px] md:text-[20px] font-semibold">
              Build Your Portfolio and Reputation
            </p>
            <h1 className="text-[24px] md:text-[32px] font-normal">
              Showcase your work and build your reputation. Receive feedback and
              ratings from clients to enhance your credibility
            </h1>
          </div>
          <div className="w-full md:w-[373px] h-[200px] md:h-[238px] bg-gray-300"></div>
        </div>

        {/* Repetitive Block 6 */}
        <div className="py-8 md:py-16 px-5 flex flex-col-reverse md:flex-row-reverse justify-between gap-10 md:gap-14">
          <div className="pt-6">
            <p className="text-[16px] md:text-[20px] font-semibold">Get Paid</p>
            <h1 className="text-[24px] md:text-[32px] font-normal">
              Get paid quickly and securely for your services. Enjoy a
              hassle-free payment process
            </h1>
          </div>
          <div className="w-full md:w-[373px] h-[200px] md:h-[238px] bg-gray-300"></div>
        </div>

        {/* Bottom section with two images */}
        <div className="py-8 md:py-12 flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full md:w-[542px] h-[200px] md:h-[293px] bg-gray-300"></div>
          <div className="w-full md:w-[542px] h-[200px] md:h-[293px] bg-gray-300"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Howitworks;
