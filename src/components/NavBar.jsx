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
          <a href="#home" className="text-white hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-white hover:text-blue-500">
            About
          </a>
          <a href="#ourService" className="text-white hover:text-blue-500">
            Solutions
          </a>
          <a href="#sector" className="text-white hover:text-blue-500">
            News & Insights
          </a>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact Us
          </a>
          <a href="#" className="bg-[#5BFB94] text-white px-4 py-2 rounded-lg">
            Get Started
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none ;
            "
          ></button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="block text-white hover:text-blue-500">
              About
            </a>
            <a href="#" className="block text-white hover:text-blue-500">
              Solutions
            </a>
            <a href="#" className="block text-white hover:text-blue-500">
              News & Insights
            </a>
            <a href="#" className="block text-white hover:text-blue-500">
              Contact Us
            </a>
            <a
              href="#"
              className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
