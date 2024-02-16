import React from "react";
import { Link } from "react-scroll";
import { navItems } from "./Navbar";

const ResponsiveMenu = ({ showMenu, onMenuItemClick }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      }   fixed bottom-0 top-0 w-[75%] transition-all duration-300
      shadow-md
      pt-16 px-8  bg-white dark:bg-neutral-950 z-50 flex flex-col justify-between`}
    >
      <div className="card">
        {/*Menu Section */}
        <nav className="mt-8">
          <ul className="space-y-10 text-xl ">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className="hover:text-primary font-poppins hover:font-bold flex "
                duration={600}
                smooth={true}
                offset={-70}
                onClick={() => {
                  onMenuItemClick(); // Close the menu
                }}
              >
                {link}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      {/* fotter section*/}
      <div>
        <h1>
          Made by <a href="">Ajay</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
