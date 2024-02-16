import React from "react";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-scroll";

export const navItems = [
  { link: "Home", path: "hero" },
  { link: "About", path: "about" },
  { link: "Experience", path: "experience" },
  { link: "Projects", path: "projects" },
  { link: "Contact", path: "contact" },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-neutral-900  dark:text-white duration-300 shadow-md">
        <div className="container py-3 md:py-2 ">
          <div className=" flex justify-between items-center ">
            {/*Logo section*/}
            <div>
              <Link to="/" className="flex items-center gap-3 cursor-default">
                <span className="text-2xl sm:text-3xl font-semibold font-poppins ">
                  ajay<span className="text-primary">.dev</span>
                </span>
              </Link>
            </div>
            {/*Desktop NavLinks section*/}
            <div className="hidden md:block">
              <ul className="flex item-center gap-8">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={link}
                    to={path}
                    className="text-lg font-poppins font-bold hover:text-primary active:text-primary cursor-pointer py-4"
                    duration={600}
                    smooth={true}
                    offset={-70}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
            {/*Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursour-pointer text-2xl "
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursour-pointer text-2xl "
                />
              )}
            </div>
            {/*Theme*/}
            <div className="hidden md:block">
              <DarkMode />
            </div>
          </div>
        </div>
        {/* Mobile Menu Section*/}
        <ResponsiveMenu showMenu={showMenu} onMenuItemClick={closeMenu} />
      </nav>
    </>
  );
};

export default Navbar;
