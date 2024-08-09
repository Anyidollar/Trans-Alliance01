import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-2">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 ml-12" />
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {["Home", "About", "Solutions", "News & Insights", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.replace(/ & /g, "").toLowerCase()}`}
                className="text-white hover:text-blue-500 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#"
            className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-2">
            {[
              "Home",
              "About",
              "Solutions",
              "News & Insights",
              "Contact Us",
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/ & /g, "").toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
