import More from "../assets/DiscoverMore.svg";
import Navbar from "./NavBar";
import Heading from "./Heading";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-indigo-800 from-10% via-sky-700 via-30% to-emerald-900 to-90% mt-[0px] py-[20px] h-[920px]">
        <Navbar />
        <Heading />
        <div className="relative w-30 h-[300px] mt-[-50px] mb-[250px] ">
          <p className=" w-1/5 absolute left-60 -top-6 p-4  bg-gray-500 text-center rounded-lg text-white">
            Discover More
          </p>
          <img
            className="Image1 z-0"
            src={More}
            alt="Discover More"
            loading="lazy"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
