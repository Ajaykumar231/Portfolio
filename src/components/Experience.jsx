import React from "react";
import resume from "../assets/resume.pdf";
const Experience = () => {
  return (
    <div
      className=" bg-light dark:bg-black dark:text-white duration-300"
      id="experience"
    >
      <div data-aos="fade-up">
        {/*Heading text */}
        <div className="grid justify-center text-center sm:justify-start sm:text-start sm:pl-16 gap-2">
          <h3 className="text-[1.2rem] font-poppins font-semibold mt-5 sm:mt-20">
            My Career Journey
          </h3>
          <h1 className="sm:text-5xl text-3xl font-poppins font-semibold">
            My{" "}
            <span className="text-primary text-3xl sm:text-5xl font-poppins font-semibold">
              CV Resume
            </span>
          </h1>
        </div>
        {/*Timeline */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 justify-center items-center sm:gap-20 min-h-[620px] sm:min-h-[280px]  sm:mt-0 mb-10">
          {/*Eduction Section */}
          <div className="grid mt- 5 sm:mt-0 items-center justify-center gap-4">
            <h2 className="text-1xl font-poppins font-semibold ">Education</h2>
            <ol className="relative border-l h-60 sm:h-20 border-gray-200 dark:border-zinc-700">
              <li className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-6 h-6 bg-violet-200 rounded-full -start-3 ring-0 ring-white dark:bg-zinc-800 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <span className="flex w-3 h-3 bg-primary rounded-full"></span>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2023 - 2024
                  </time>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-300">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Meta
                    </a>{" "}
                    Front-end Devleoper Proffesional Cerification at{" "}
                    <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-neutral-600 dark:text-gray-300">
                      Coursera
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-6 h-6 bg-violet-200 rounded-full -start-3 ring-0 ring-white dark:bg-zinc-800 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <span className="flex w-3 h-3 bg-primary rounded-full"></span>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    2019 - 2022
                  </time>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-300">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      bachelor's degree
                    </a>{" "}
                    Bsc - Computer Science at{" "}
                    <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-neutral-600 dark:text-gray-300">
                      Madurai Kamraj university, Madurai.
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          {/*Experience Section */}
          <div className="grid mt- 5 sm:mt-0 items-center justify-center gap-4">
            <h2 className="text-1xl font-poppins font-semibold">Experience</h2>
            <ol className="relative border-l h-60 sm:h-20 border-gray-200 dark:border-zinc-700 ">
              <li className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-6 h-6 bg-violet-200 rounded-full -start-3 ring-0 ring-white dark:bg-zinc-800 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <span className="flex w-3 h-3 bg-primary rounded-full"></span>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Jan2023 - Dec2024
                  </time>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-300">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Internship
                    </a>{" "}
                    Front-end React Devleoper at{" "}
                    <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-neutral-600 dark:text-gray-300">
                      Matlync LLP, Coimbatore.
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-10 ms-6">
                <div className="absolute flex items-center justify-center w-6 h-6 bg-violet-200 rounded-full -start-3 ring-0 ring-white dark:bg-zinc-800 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <span className="flex w-3 h-3 bg-primary rounded-full"></span>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Jul2022 - 2023Nov
                  </time>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-300">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Internship
                    </a>{" "}
                    Mobile Application Developer Flutter at{" "}
                    <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-neutral-600 dark:text-gray-300">
                      Matlync LLP, Coimbatore.
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* cv Button */}
        <div className="grid justify-center pb-20">
          <a href= {resume} download="resume.pdf">
            <button
              type="button"
              className="focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:primary dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all duration-300 hover:scale-90"
            >
              Download CV
            </button>
          </a>
        </div>
        {/*{/*Clients review}
      <div className=" grid justify-center text-center mt-5">
        <h4 className="text-1xl font-poppins font-semibold">
          What my clients think about Me{" "}
        </h4>
        <h1 className="text-3xl sm:text-5xl font-poppins font-semibold">
          What My{" "}
          <span className="text-primary text-3xl sm:text-5xl font-poppins font-semibold">
            Clients Says
          </span>
        </h1>
      </div>
      {/*review cards */}
      </div>
    </div>
  );
};

export default Experience;
