import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="p-2">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 ml-12 cursor-pointer" />
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/home"
              className="text-white font-[700] hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white font-[700] hover:text-blue-500"
            >
              About
            </a>
            <a
              href="/solutions"
              className="text-white font-[700] hover:text-blue-500"
            >
              Solutions
            </a>
            <a
              href="/news & insights"
              className="text-white font-[700] hover:text-blue-500"
            >
              News & Insights
            </a>
            <a
              href="/contact us"
              className="text-white font-[700] hover:text-blue-500"
            >
              Contact Us
            </a>
            <a
              href="/get started"
              className="bg-green-600 text-white font-[700] hover:bg-indigo-600 px-4 py-2 rounded-lg"
            >
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden  bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-2 space-y-2">
              <a
                href="/home"
                className="block text-black font-[500] hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-black font-[500] hover:text-blue-500"
              >
                About
              </a>

              <a
                href="/solutions"
                className="block text-black font-[500] hover:text-blue-500"
              >
                Solutions
              </a>
              <a
                href="/new & insights"
                className="block font-[500] text-black px-1 rounded hover:bg-indigo-600"
              >
                New & Insights
              </a>
              <a
                href="/contact us"
                className="block font-[500] text-black px-1 rounded hover:bg-indigo-600"
              >
                Contact Us
              </a>
              <a
                href="/get started"
                className="block bg-green-600 font-[500] w-36  text-white px-4 py-2 rounded hover:bg-indigo-600"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
