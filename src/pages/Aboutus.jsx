import React from "react";
import Navbar from "../components/Navbar";
import aboutImg1 from "../assets/aboutimg1.png";
import aboutImg2 from "../assets/aboutimg2.png";
import linkedinIcon from "../assets/mdi_linkedin.svg";
import aboutImg3 from "../assets/aboutimg3.png";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <div>
      <Navbar />

      {/*Responsive Banner*/}
      <div className="h-fit w-full px-[30px] sm:px-[55px] md:px-[80px]">
        <p className="font-alegreya font-bold text-base mt-[10px]">About Us</p>
        <div className="relative">
          <img
            src={aboutImg1}
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[338px] w-full object-cover"
            alt="Fashion"
          />
          <div className="absolute top-[60px] sm:top-[80px] md:top-[100px] lg:top-[110px] left-[20px] sm:left-[40px] md:left-[60px] lg:left-[95px]">
            <p className="font-frank text-white text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-medium leading-tight">
              Revolutionizing the
              <br />
              Fashion Industry
            </p>
          </div>
          <div className="absolute top-[150px] sm:top-[180px] md:top-[210px] lg:top-[235px] left-[20px] sm:left-[40px] md:left-[60px] lg:left-[95px]">
            <p className="font-frank text-sm sm:text-lg md:text-xl font-medium">
              Discover, Connect, Create
            </p>
          </div>
        </div>
      </div>

      {/*About Us Section*/}
      <div className="w-full my-14 flex flex-col space-y-4 sm:space-y-7 lg:space-y-0 lg:flex-row lg:justify-between xl:gap-0 lg:gap-8 px-[30px] sm:px-[55px] lg:px-[110px]">
        <div className="w-full lg:w-[50vw]">
          <p className="font-frank font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] pb-4">
            What we do
          </p>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[26px] text-gray-600">
            99 Yards is an innovative digital platform that makes finding
            freelance opportunities in the fashion industry easier.
            <br /> Our platform is a secure and efficient hub for all
            participants in the creative process, including brands, designers,
            garment manufacturers, and fashion professionals. Creatives can join
            our platform to showcase their portfolios, indicate their
            availability, and set their pricing, enhancing their outreach
            opportunities.
            <br /> We leverage AI to streamline the connection process, matching
            you with the most suitable talent for your specific needs and
            significantly reducing the time spent on talent discovery.
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-end items-center lg:w-[50vw]">
          <img
            src={aboutImg2}
            className="w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[280px] lg:w-[470px] lg:h-[315px] object-contain"
            alt="About us"
          />
        </div>
      </div>

      {/*Mission and Vision*/}
      <div className="w-full h-fit my-10 px-[30px] sm:px-[55px] lg:px-[110px] flex flex-col md:flex-row justify-center gap-12 md:gap-24 pt-4 pb-9">
        <div className="w-full md:w-[539px] h-auto bg-violet-100 p-6 md:p-9 shadow-custom-light">
          <p className="font-frank font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-center pb-4">
            Our Mission
          </p>
          <p className="font-medium text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-center text-gray-700">
            It is to simplify the creative process from concept to catwalk by
            facilitating the discovery of new talent, ensuring transparent
            pricing, and providing secure transactions.
          </p>
        </div>
        <div className="w-full md:w-[539px] h-auto bg-violet-100 p-6 md:p-9 shadow-custom-light">
          <p className="font-frank font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-center pb-4">
            Our Vision
          </p>
          <p className="font-medium text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-center text-gray-700">
            We aspire to be the ultimate one-stop solution for all aspects of
            fashion campaigns, using technology to tailor the perfect campaign
            to your needs.
          </p>
        </div>
      </div>

      {/*99 YARDS TEAM BIGS*/}
      <div>
        <p className="font-frank font-semibold text-[40px] pl-[130px] mt-14 pb-6">
          Meet our team
        </p>
        <div className="flex flex-row justify-center gap-14">
          <div className="w-[380px] h-[643px] bg-violet-400 border rounded-sm">
            <div className="w-[312px] h-[243px] bg-gray-300 mx-8 mt-9">
              <img />
            </div>
            <h1 className="font-frank text-[32px] leading-[41px] mx-8 my-4 text-white font-semibold">
              Anthony Henry
            </h1>
            <div className="flex flex-row w-full justify-between px-8">
              <p className="text-[20px] leading-[23px] text-white font-medium">
                CEO & Co-Founder
              </p>
              <img src={linkedinIcon} className="w-33px h-auto" />
            </div>
            <p></p>
          </div>
          <div className="w-[380px] h-[643px] bg-violet-400 border rounded-sm">
            <div className="w-[312px] h-[243px] bg-gray-300 mx-8 mt-9">
              <img />
            </div>
            <h1 className="font-frank text-[32px] leading-[41px] mx-8 my-4 text-white font-semibold">
              Mani Kumar Gouni
            </h1>
            <div className="flex flex-row w-full justify-between px-8">
              <p className="text-[20px] leading-[23px] text-white font-medium">
                CTO & Co-Founder
              </p>
              <img src={linkedinIcon} className="w-33px h-auto" />
            </div>
            <p></p>
          </div>
          <div className="w-[380px] h-[643px] bg-violet-400 border rounded-sm">
            <div className="w-[312px] h-[243px] bg-gray-300 mx-8 mt-9">
              <img />
            </div>
            <h1 className="font-frank text-[32px] leading-[41px] mx-8 my-4 text-white font-semibold">
              Neha Dodeja
            </h1>
            <div className="flex flex-row w-full justify-between px-8">
              <p className="text-[20px] leading-[23px] text-white font-medium">
                CCO & Co-Founder
              </p>
              <img src={linkedinIcon} className="w-33px h-auto" />
            </div>
            <p className="text-white font-normal px-8 mt-8">
              Neha is the Chief Commercial Officer at 99 Yards. She brings a
              wealth of experience working with and leading diverse,
              multinational teams in large corporate organizations and strategy
              consulting firms. She holds an MBA from INSEAD.
            </p>
          </div>
        </div>
      </div>

      {/*Location*/}
      <div className="flex flex-col md:flex-row justify-between md:gap-32 mx-6 sm:mx-12 md:mx-[130px] mt-14 pb-10">
        <div>
          <h1 className="font-frank font-semibold text-[32px] sm:text-[36px] md:text-[40px]">
            Where we work
          </h1>
          <div className="pt-5 sm:pt-12 md:pt-16 pl-2 sm:pl-4">
            <p className="font-medium text-2xl sm:text-3xl md:text-4xl leading-[32px] sm:leading-[36px] md:leading-[42px]">
              Headquartered in New York
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={aboutImg3} className="w-full md:w-[770px] h-auto" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
