import Laptop from "../assets/LaptopFrame.svg";

const Heading = () => {
  return (
    <div className="flex bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex-wrap mb-10 justify-center w-full mt-20">
      <div className="flex flex-col justify-start items-center p-6 md:p-10 md:pl-20 pt-6 md:w-3/5">
        <p className="text-sm text-yellow-300">
          Simplified cross-border payment
        </p>
        <p className="text-4xl md:text-6xl lg:text-8xl text-white mt-2 mb-3 text-center md:text-left">
          We are the <br className="hidden md:block" /> payments people
        </p>
        <p className="text-white text-sm text-center md:text-left">
          Transalliance Group’s cross-border payments solutions connect{" "}
          <br className="hidden md:block" />
          organizations and communities globally to the network they need{" "}
          <br className="hidden md:block" />
          to thrive. Together, we make money move.
        </p>
      </div>
      <div className="flex justify-center md:flex-col relative md:w-2/5 mt-6 md:mt-0">
        <img
          className="max-sm:ml-5 w-full max-w-md"
          src={Laptop}
          alt="Header"
        />
        <div className="absolute bg-white/70 top-12 md:top-10 p-2 rounded-lg left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0 h-12 md:h-16 mt-3">
          <p className="flex items-center justify-center h-full">
            24/7, 365 transaction tracking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
