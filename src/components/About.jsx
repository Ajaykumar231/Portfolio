import React from "react";
import exp from "../assets/exp.jpg";
export const Skills = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "Css",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "Git",
  },
  {
    id: 6,
    name: "Github",
  },
  {
    id: 7,
    name: "Bootstrap",
  },
  {
    id: 8,
    name: "Tailwind",
  },
];
const About = () => {
  return (
    <>
      <main className="id=2 bg-gray-100 dark:bg-neutral-900 dark:text-white duration-300" id='about'>
        <div className="container min-h-[620px] flex pt-10 pb-10 sm:mt-0 sm:mb-0">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 sm:text-start gap-5 place-items-center">
            {/*Image section */}
            <div data-aos="zoom-in" className="order-2 sm:order-1 realtive ">
              <img className="h-100 w-80 rounded-lg" src={exp} alt=""></img>
            </div>
            {/*Text content section */}
            <div className="space-y-4 order-2 sm:order-1 xl:pr-40">
              <h1 data-aos="fade-up" className="text-2xl sm:text-[1.5rem] font-poppins font-bold">
                About <span className="text-primary">Me</span>
              </h1>
              <h1 data-aos="fade-up" data-aos-duration="300"className="text-4xl sm:text-4xl font-poppins font-bold">
                Ajay <span className="text-primary">Kumar</span>
              </h1>
              <p data-aos="fade-up" data-aos-duration="500"className="font-poppins text-gray-500 dark:text-gray-300">
                I am driven by the endless possibilities that frontend
                development offers. The dynamic nature of the field fuels my
                curiosity, and I am always excited to learn and implement new
                technologies to create seamless user experiences.
              </p>
              {/*Skills */}
              <h3 data-aos="fade-up" data-aos-duration="700"className="text-[1.2rem] sm:text-2xl font-poppins font-bold">
                Tech Stack
              </h3>
              <div data-aos="zoom-out" className="grid grid-cols-3 md:grid-cols-4 gap-5  cursor-pointer ">
                {Skills.map(({ id, name }) => {
                  return (
                    <div
                      key={name}
                      className="p-3 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:flex sm:text-center dark:bg-neutral-800 dark:border-neutral-700 transition-all duration-300 hover:scale-90"
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
