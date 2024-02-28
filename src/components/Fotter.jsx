import React from "react";
import gitIcon from "../assets/icons/g2.png";
import linIocn from "../assets/icons/l2.png";
const Fotter = () => {
  return (
    <footer className=" bg-primary text-white duration-300 text-center">
      <div data-aos="fade-up" className="grid justify-center min-h-[200px]">
        <div className="grid sm:flex sm:gap-60 items-center">
          <p className="text-[1.2rem] sm:text-[1.3rem] font-poppins font-bold ">
            Copyright © 2024. All rights are reserved
          </p>
          <div  className="flex justify-center gap-5 ">
            <a href="https://github.com/Ajaykumar231">
              <img
                className="w-10 h-10 transition-all duration-300 hover:scale-90"
                alt="github"
                src={gitIcon}
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/ajay-kumar-r-04b692242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img
                className="w-10 h-10 transition-all duration-300 hover:scale-90"
                alt="linkedin"
                src={linIocn}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
