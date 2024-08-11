import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  return (
    <div className="mt-40 max-sm:mt-28 px-4 sm:px-8 md:px-28 flex flex-wrap justify-between">
      <div className="flex flex-col justify-between rounded-md w-full md:w-1/2 mb-8 md:mb-0">
        <p className="text-neutral-400 text-lg font-DMSans md:text-xl mb-4">ABOUT US</p>
        <div className="flex flex-col relative justify-center md:mt-0 rounded-lg">
          <button className="text-white rounded-xl border-2 max-sm:ml-4 max-sm:w-36 md:w-36 md:ml-4 py-2 max-sm:mb-3 md:mb-2">
            Money Out
          </button>
          <button className="text-sm rounded-lg absolute bottom-0 bg-gradient-to-r from-yellow-300 via-green-500 to-green-400 px-3 py-2 flex items-center w-36">
            Money Out
            <IoIosArrowDroprightCircle className="text-2xl ml-2 rounded-full" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-DMSans md:text-4xl mb-4">
          Payment pathways, built <br className="hidden md:block" /> for you
        </h1>
        <p className="text-sm font-DMSans sm:text-base md:text-lg p-2">
          Transalliance Group. Money Out and Money In solutions give{" "}
          <br className="hidden md:block" />
          our customers the ability to complete cross-border, multi-{" "}
          <br className="hidden md:block" />
          currency transactions securely and at speed. And with a{" "}
          <br className="hidden md:block" />
          single provider for both payouts and pay-ins, say goodbye to{" "}
          <br className="hidden md:block" />
          the operational headaches of multi-supplier management.
        </p>
      </div>
    </div>
  );
};

export default About;
