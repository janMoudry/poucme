import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "contexts/index";
import ThemeIcon from "components/common/ThemeIcon";

const Menu = () => {
  const { toggleTheme, theme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute w-full">
      <div
        className="absolute right-3 top-3 cursor-pointer"
        onClick={toggleTheme}
      >
        <ThemeIcon theme={theme} />
      </div>
      <div className="flex justify-start items-center h-12 px-4 lg:px-10">
        {/* <div className="font-bold text-xl">Logo</div> */}
        <div
          className="lg:hidden absolute left-2 top-4 cursor-pointer"
          onClick={handleHamburgerClick}
        >
          <i className="fas fa-bars">
            <svg
              className="w-6 h-6 absolute left-1/2 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="0" x2="30" y2="0"></line>
              <line x1="0" y1="8" x2="30" y2="8"></line>
              <line x1="0" y1="16" x2="30" y2="16"></line>
            </svg>
          </i>
        </div>
        <div className={`lg:flex hidden space-x-4`}>
          <Link
            to="/"
            className={`transition-colors duration-300 text-xl ${
              location.pathname === "/" ? "text-primary" : ""
            }`}
          >
            Domů
          </Link>
          <Link
            to="/dataStructure"
            className={`transition-colors duration-300 text-xl ${
              location.pathname.startsWith("/dataStructure")
                ? "text-primary"
                : ""
            }`}
          >
            Datové struktury
          </Link>
          <Link
            to="/algorithms"
            className={`transition-colors duration-300 text-xl ${
              location.pathname.startsWith("/algorithms") ? "text-primary" : ""
            }`}
          >
            Algoritmy
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-12 w-full shadow-md p-4 space-y-4 z-10 flex flex-col items-center justify-center">
          {/* Mobile Menu Items */}
          <Link
            onClick={handleHamburgerClick}
            to="/"
            className={`transition-colors duration-300 text-xl ${
              location.pathname === "/" ? "text-primary" : ""
            }`}
          >
            Domů
          </Link>
          <Link
            onClick={handleHamburgerClick}
            to="/dataStructure"
            className={`transition-colors duration-300 text-xl ${
              location.pathname.startsWith("/dataStructure")
                ? "text-primary"
                : ""
            }`}
          >
            Datové struktury
          </Link>
          <Link
            onClick={handleHamburgerClick}
            to="/algorithms"
            className={`transition-colors duration-300 text-xl ${
              location.pathname.startsWith("/algorithms") ? "text-primary" : ""
            }`}
          >
            Algoritmy
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Menu;
