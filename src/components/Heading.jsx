import Laptop from "../assets/LaptopFrame.svg";

const Heading = () => {
  return (
    <div className="flex bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 flex-wrap mb-10 justify-center w-[100%] mt-20">
      <div className=" flex flex-col justify-left item-center max-sm:p-10 md:pl-[150px] pt-[20px] md:w-[60%]">
        <p className="text-sm text-yellow-300">
          Simplified cross-border payment
        </p>
        <p className="md:text-8xl sm:text-4xl text-white mt-1 mb-3">
          We are the <br /> payments people
        </p>
        <p className="text-white text-sm">
          Transalliance Group.’s cross-border payments solutions connect <br />
          organisations and communities globally to the network they need <br />
          to thrive. Together, we make money move.
        </p>
      </div>
      <div className="md:flex md:flex-col relative md:w-[40%] md:pt-[20px]">
        <img className="max-sm:ml-5 " src={Laptop} alt="Header" />

        <div className="absolute bg-[#FFFFFFB2] max-sm:top-28 md:top-10 p-2 rounded-lg md:left-0 md:h-[70px] max-sm:h-[50px] mt-3">
          <p className="flex item-center justify-center max-sm:pt-2 md:pt-3.5">
            24/7, 365 transaction tracking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
