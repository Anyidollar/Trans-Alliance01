import More from "../assets/DiscoverMore.svg";
// import Navbar from "./NavBar";
// import Heading from "./Heading";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Icon from "../assets/Icons.svg";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-indigo-800 from-10% via-sky-700 via-30% to-emerald-900 to-90% mt-[0px] py-[20px] h-[920px]">
        <div className="relative w-30 h-[300px] mt-[-50px] mb-[250px] ">
          <div className="w-1/5 absolute flex justify-between left-60 -top-6 px-6 py-4 bg-gray-800 text-center rounded-lg text-white">
            <p>Discover More</p>
            <a>
              <IoIosArrowDroprightCircle className="text-2xl  bg-black rounded-2xl" />
            </a>
          </div>
          <img
            className="Image1 -z-10"
            src={More}
            alt="Discover More"
            loading="lazy"
          />
        </div>
        <div className="h-auto bg-[#FFFFFF] shadow-lg w-[90%] ml-[5%] rounded-t-lg mt-[-100px] z-1000">
          <div className="rounded-t-lg py-4 px-2  ">
            <p className="py-4 px-2">
              Send and Receive Money from all over with ease.
            </p>
          </div>
          <div className="px-32 ">
            <img className="" src={Icon} alt="Icon" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
