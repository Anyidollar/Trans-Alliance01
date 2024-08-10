import More from "../assets/DiscoverMore.svg";
import Icon from "../assets/Icons.svg";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 mt-0">
      <div className="relative flex justify-center md:justify-start">
        <p className="absolute md:left-60 -top-8 px-4 py-4 bg-gray-500 text-center text-sm sm:text-base md:text-lg rounded-lg md:w-1/4 flex items-center justify-around">
          <span className="text-white">Discover More</span>
          <IoIosArrowDroprightCircle className="text-2xl rounded-full" />
        </p>
        <img className="md:w-2/3 max-sm:w-2/3" src={More} alt="Discover More" />
      </div>

      <div className="h-auto absolute bottom-0 transform translate-y-1/2 w-full md:w-11/12 md:left-1/2 md:transform md:-translate-x-1/2 bg-white shadow-lg rounded-t-lg">
        <div className="rounded-t-lg py-4 px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg">
            Send and Receive Money from all over with ease.
          </p>
        </div>
        <div className="px-4 md:px-32">
          <img className="mx-auto" src={Icon} alt="Icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
