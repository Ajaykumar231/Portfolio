import React from "react";
import Mail from "../assets/icons/mail.png";
import Map from "../assets/icons/map.png";
import Fotter from "./Fotter";
const Contact = () => {
  return (
    <>
      <div
        className="grid justify-center items-center min-h-[400px] sm:min-h-[420px] bg-light dark:bg-black dark:text-white duration-300 text-center sm:justify-start sm:pl-[300px] sm:text-start"
        id="contact"
      >
        <div className="">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-[1.5rem] font-poppins font-bold"
          >
            Contact <span className="text-primary">Me</span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-2xl sm:text-4xl font-poppins font-bold mt-4 sm:mt-4"
          >
            Don't be shy! Hit me up! 👇
          </h1>
          <div
            data-aos="zoom-in"
            className="grid gap-10 sm:grid sm:grid-cols-2 sm:gap-20 items-center mt-10"
          >
            <div className="flex gap-4 text-start transition-all duration-300 hover:scale-105">
              <div className="flex justify-center items-center h-[3rem] w-[3rem] ">
                <img className="" src={Map}></img>
              </div>
              <div>
                <h1 className="text-[1.2rem] sm:text-2xl font-poppins font-bold ">
                  Location
                </h1>
                <p className="text-gray-500 font-poppins">Coimbatore, India</p>
              </div>
            </div>
            <div className="flex gap-4 text-start transition-all duration-300 hover:scale-105">
              <div className="flex justify-center items-center h-[3rem] w-[3rem] ">
                <img className="" src={Mail}></img>
              </div>
              <div>
                <h1 className="text-[1.2rem] sm:text-2xl font-poppins font-bold ">
                  Mail
                </h1>
                <p className="text-gray-500 font-poppins">
                  ajayr.wdev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </>
  );
};

export default Contact;
