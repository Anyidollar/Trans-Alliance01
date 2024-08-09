import More from "../assets/DiscoverMore.svg";
import Icon from "../assets/Icons.svg";

const Header = () => {
  return (
    <>
      <header className="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mt-[0px] ">
        <div className="">
          <p className=" md:w-1/5  max-sm:ml-6 absolute md:left-60 -top-6 p-4  bg-gray-500 text-center rounded-lg">
            Discover More
          </p>
          <img className="" src={More} alt="Discover More" />
        </div>

        <div className="h-auto absolute -bottom-20 bg-[#FFFFFF] md:shadow-lg md:w-[90%] md:ml-[5%] rounded-t-lg ">
          <div className="rounded-t-lg py-4 px-2  ">
            <p className="md:py-4 px-2">
              Send and Receive Money from all over with ease.
            </p>
          </div>
          <div className="md:px-32">
            <img src={Icon} alt="Icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
