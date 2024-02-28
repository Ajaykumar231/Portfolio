import React from "react";
import HeroImg from "../assets/HeroImg.jpg";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

const Hero = () => {
  return (
    <>
      <main
        className="bg-white dark:bg-black dark:text-white duration-300"
        id="hero"
      >
        <div className="container min-h-[620px] flex justify-center mt-0 sm:mt-0">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 sm:text-start gap-5 place-items-center">
            {/*Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 realtive">
              <img className="rounded-2xl" src={HeroImg} alt=""></img>
            </div>
            {/*Text content section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h1
                data-aos="fade-up"
                className="text-5xl sm:text-5xl font-poppins font-bold"
              >
                <span className="text-primary font-poppins font-bold">
                  Front-End React
                </span>{" "}
                Developer.
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-poppins text-[1.1rem] text-gray-500 dark:text-gray-300"
              >
                Hi, I'm Ajay Kumar. A passionate Front-end React Developer based
                in Chennai, India 📍
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                off-set="500"
                className="flex gap-3 justify-center sm:justify-start items-center"
              >
                <a href="https://github.com/Ajaykumar231">
                  <img
                    className="object-cover h-10 w-10 transition-all duration-300 hover:scale-90"
                    src={github}
                    alt="Github"
                  ></img>
                </a>
                <a href="https://www.linkedin.com/in/ajay-kumar-r-04b692242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <img
                    className="object-cover h-10 w-10 transition-all duration-300 hover:scale-90"
                    src={linkedin}
                    alt="LinkedIn"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
