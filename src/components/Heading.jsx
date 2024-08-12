import Laptop from "../assets/LaptopFrame.svg";

const Heading = () => {
  return (
    <div id="home" className="flex flex-wrap items-center ml-10 mb-10">
      <div className="flex flex-col  max-sm:p-10 md:p-10">
        <p className="text-sm font-DMSans text-yellow-600 max-sm:mb-4 md:mr-auto md:mb-4">
          Simplified cross-border payment
        </p>
        <p className="text-4xl font-Gayathri md:text-6xl lg:text-8xl text-white">
          We are the <br className="hidden md:block" /> payments people
        </p>
        <p className="text-white font-DMSans text-sm md:text-left">
          Transalliance Group’s cross-border payments solutions connect{" "}
          <br className="hidden md:block" />
          organizations and communities globally to the network they need{" "}
          <br className="hidden md:block" />
          to thrive. Together, we make money move.
        </p>
      </div>
      <div className="flex justify-center md:flex-col relative md:w-2/5">
        <img
          className="max-sm:ml-5 md:mr-40 w-screen"
          src={Laptop}
          alt="Header"
        />
        <div className="absolute max-sm:w-60 bg-white/70 max-sm:top-20 md:top-44 p-2 rounded-lg transform md:translate-x-0 md:-left-10 max-sm:left-6 mt-3">
          <p className="flex items-center justify-center">
            24/7, 365 transaction tracking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
