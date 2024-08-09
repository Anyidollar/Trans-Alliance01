import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  return (
    <div  id="about" className="about mt-10 md:px-28 max-sm:px-2 flex justify-between">
      <div className="flex flex-col justify-between rounded-md">
        <p className="text-neutral-400">ABOUT US</p>
        <div className="flex flex-col relative justify-center rounded-lg ">
          <button className="text-white rounded-xl border-2 px-8 py-2 ">
            Money Out
          </button>
          <button className="text-sm rounded-lg absolute -bottom-4 bg-green-400 px-3 py-2 flex w-36">
            Money Out
            <IoIosArrowDroprightCircle className="text-2xl ml-5 bg-green-300 rounded-2xl" />
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl bold">
          Payment pathways, built <br /> for you
        </h1>
        <p className="p-2">
          Transalliance Group. Money Out and Money In solutions give <br />
          our customers the ability to complete cross-border, multi- <br />
          currency transactions securely and at speed. And with a <br />
          single provider for both payouts and pay-ins, say goodbye to <br />
          the operational headaches of multi-supplier management.
        </p>
      </div>
    </div>
  );
};
export default About;
