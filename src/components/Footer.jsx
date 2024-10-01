import React from "react";
import logo from "../assets/logo.jpeg";
import mailLogo from "../assets/ic_outline-email.svg";
import linkedinLogo from "../assets/mdi_linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-fit w-full bg-customFooterColor pb-5">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Navigation links */}
        <div className="lg:ml-[80px] pt-[27px] flex justify-center lg:justify-start">
          <ul className="flex flex-col text-white space-y-3 text-lg sm:text-xl items-center lg:items-start">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/howitworks">How it works</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </div>

        {/* Download button and logo */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end lg:mr-[100px] pt-[27px] items-center lg:items-start gap-12">
          {/* Download button */}
          <div className="mt-5 lg:mt-[50px]">
            <div className="flex items-center justify-center bg-white w-[230px] h-[50px] border rounded-md cursor-pointer">
              <a href="" className="text-xl text-customFooterColor font-medium">
                Download the app now
              </a>
            </div>
          </div>

          {/* Logo and social icons */}
          <div className="mt-5 lg:mt-0 flex flex-col items-center">
            {/* Logo */}
            <div>
              <img
                src={logo}
                className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
            </div>

            {/* Social media icons */}
            <div className="mt-[30px] lg:mt-[50px] w-[100px] flex flex-row justify-between px-4">
              <a href="">
                <img src={mailLogo} className="h-[24px] w-[24px]" />
              </a>
              <a href="">
                <img src={linkedinLogo} className="h-[24px] w-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="mt-6 mx-5 sm:mx-32">
        <div className="bg-gray-400 w-full h-[1px]"></div>
      </div>

      {/* Copyright text */}
      <p className="text-white text-center text-lg sm:text-xl mt-5">
        Copyright 2024 &copy; by 99 Yards
      </p>
    </div>
  );
};

export default Footer;
