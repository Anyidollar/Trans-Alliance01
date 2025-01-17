import frameImage from "../assets/Frame 555.svg";
import frameImage1 from "../assets/Frame 560crop.png";
import Image1 from "../assets/Sepa&Swift.svg";
import Image2 from "../assets/CustomercareLady.svg";
import Image3 from "../assets/SmilingMan.svg";
import Image4 from "../assets/Mobile.svg";
import Hand from "../assets/Hands1.svg";
import Star from "../assets/Star2.svg";
import Key from "../assets/Key.svg";
import Human from "../assets/Human.svg";
import House from "../assets/House.svg";
import Library from "../assets/Library.svg";
import Computer from "../assets/Computer.svg";
import Field from "../assets/Field.svg";
import About from "./About";
import Button from "./Button";
import Payment from "../components/Payment";
import Transaction from "../components/Transaction";
import Report from "../components/Report";
import Header from "./Header";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <>
      <Header />
      <div className=" bg-gradient-to-r from-white via-white to-green-50">
        <About />
        <div className="flex flex-wrap items-center justify-between max-sm:px-4 md:px-32 max-sm:mt-6 md:mt-14">
          <div className="relative md:mr-2  lg:mr-0 w-full md:w-1/3 lg:w-1/3 mb-10 md:mb-0">
            <img className="w-full" src={Image1} alt="SEPA & SWIFT" />
            <p className="absolute text-center  left-1/2 transform -translate-x-1/2 -bottom-6 bg-neutral-300 p-2 rounded-lg w-60">
              SEPA Instant, SEPA & SWIFT
            </p>
          </div>
          <div className="relative md:w-1/3 lg:w-1/3 lg:h-auto mb-10">
            <img
              className="w-full md:image rounded-lg border-2 border-blue-300 bg-gradient-to-r from-[#D3BD00] via-[#A5D1A3] to-[#5AAF87]"
              src={Image2}
              alt="monitoring"
            />
            <p className="absolute ml-20 text-center max-sm:ml-36 transform -translate-x-1/2 -bottom-10 bg-neutral-200 max-sm:w-60  rounded-lg w-80">
              Customer portal for live transaction monitoring
            </p>
          </div>
        </div>
        <div className="flex md:mt-16 max-sm:mt-6 flex-wrap items-center justify-end max-sm:px-4 md:px-32 mb-10">
          <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6">
            <GoArrowUpRight className="text-2xl absolute top-4 right-6" />
            <img
              className="w-full rounded-lg bg-gradient-to-r from-[#F27405] to-[#D3BD00]"
              src={Image3}
              alt="Danish"
            />
            <p className="absolute text-center transform md:-translate-x-1/2 top-16 bg-neutral-200 p-2 rounded-lg md:w-34 ">
              Danish FSA regulated
            </p>
          </div>
          <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <img
              className="w-full h-full px-10"
              src={Image4}
              alt="90+ currencies served"
            />
            <p className="absolute text-center max-sm:w-60 ml-16 left-1/3 transform -translate-x-1/2 -bottom-12 bg-neutral-200 p-4 rounded-lg">
              90+ currencies served
            </p>
          </div>
        </div>
        <div className="flex md:justify-end max-sm:ml-6 mb-20">
          <Button>Learn More</Button>
        </div>
      </div>
      <Payment />
      <div
        id="solution"
        className="flex max-sm:flex-wrap lg:px-32 max-sm:px-4 md:px-10 mt-20"
      >
        <div className="flex flex-col md:w-full lg:w-1/2 mb-10">
          <h3 className="text-lg font-DMSans font-semibold text-gray-700 mb-6">
            OUR SERVICE
          </h3>
          <div className="mt-4 p-2 items-start">
            <img className="mr-4" src={Hand} alt="Trusted Partner" />
            <div className="mt-2">
              <h4 className="text-xl font-DMSans font-semibold">
                We are your trusted partner
              </h4>
              <p className="mt-4 font-DMSans">
                We are a dedicated and diligent team of <br /> payments
                specialists that’s committed to helping <br /> you unlock
                opportunity, create value and make <br /> payments happen,
                together.
              </p>
            </div>
          </div>
          <div className="mt-4 p-2 items-start">
            <img className="h-16 w-16 mr-4" src={Star} alt="Network" />
            <div className="mt-2">
              <h4 className="text-xl font-DMSans font-semibold">
                We provide the network you need
              </h4>
              <p className="mt-4 font-DMSans">
                We open access to a resilient global network <br /> spanning 90+
                countries that’s built to simplify <br /> complex challenges and
                move money at speed.
              </p>
            </div>
          </div>
          <div className="mt-4 p-2  items-start">
            <img className="h-16 w-16 mr-4" src={Key} alt="Compliance" />
            <div className="mt-2">
              <h4 className="text-xl font-semibold font-DMSans">
                We bring certainty through compliance
              </h4>
              <p className="mt-4 font-DMSans">
                We were born with compliance at our heart.
                <br /> Licensed by the globally trusted Danish FSA, <br /> when
                we move money you can be confident that <br /> it gets to the
                right place with absolute accuracy.
              </p>
            </div>
          </div>
          <div className="mt-4 p-2 items-start">
            <img className="h-16 w-16 mr-4" src={Human} alt="Expertise" />
            <div className="mt-2">
              <h4 className="text-xl font-DMSans font-semibold">
                We execute with expertise
              </h4>
              <p className="mt-4 font-DMSans">
                We complete an industry-leading 99% of payments <br /> for
                customers in the fast-changing financial <br /> services,
                iGaming, corporate and NGO sectors, <br /> drawing on 16 years
                of proven expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-full lg:w-1/2 flex flex-col md:ml-0 lg:ml-10 max-sm:items-center">
          <div className="mr-0 lg:mr-14">
            <h1 className="text-2xl font-semibold font-Gayathri mb-4">
              The Transalliance Group.
              <br /> difference
            </h1>
            <p className="mt-4 font-DMSans">
              Our global payments network is powered by passionate <br />{" "}
              people, transparent customer relationships, and leading- <br />
              edge technology.
            </p>
          </div>
          <div className="flex max-sm:flex-wrap justify-center mt-16 mb-10 max-sm:mx-2">
            <div className="relative">
              <img className="rounded-md" src={frameImage} alt="Team" />
              <p className="absolute p-2 md:w-40 max-sm:ml-20 font-semibold top-6 bg-gray-50 rounded-lg md:-left-6  lg:-left-10 text-center">
                <span className="text-gray-400">OUR TEAM</span> <br /> Over 200
                experts
              </p>
            </div>
            <div className="relative">
              <img className="rounded-md" src={frameImage1} alt="Experts" />

              <p className="absolute bg-white md:w-40 bottom-0 text-center py-4 rounded-lg">
                Meet our best financial experts
                <GoArrowUpRight className="text-2xl absolute left-40 top-10" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10">
        <Transaction />
      </div>

      <div id="news" className=" mt-10 pt-8 lg:px-32 md:px-10 max-sm:px-5">
        <div className="w-full mb-10">
          <h1 className="text-4xl font-Gayathri mb-8">Sectors we serve</h1>
          <p className="font-DMSans text-gray-600">
            We simplify the complexities of cross-border payments in some of the
            world’s most <br /> demanding sectors. Learn more about who we serve
            and how we add value below.
          </p>
        </div>
        <div className="flex mr-2 flex-wrap justify-between">
          <div className="relative md:w-1/3  lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={House} alt="Financial Services" />
            <p className="absolute text-sm bg-neutral-300 md:-right-12 bottom-8 px-6 py-1 rounded-lg">
              Financial Services
              <span className="flex">
                Learn More{" "}
                <IoIosArrowDroprightCircle className="text-2xl ml-2 rounded-full bg-green-400" />
              </span>
            </p>
          </div>
          <div className="relative md:w-1/3 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={Computer} alt="iGaming" />
            <p className="absolute text-sm bg-neutral-300 md:-left-8 top-4 px-6 py-1 rounded-lg">
              iGaming <br />
              <span className="flex">
                Learn More{" "}
                <IoIosArrowDroprightCircle className="  bg-green-400 text-2xl ml-2 rounded-full" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mr-2 md:mt-10">
          <div className="relative md:w-1/3 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={Field} alt="NGOs" />
            <div className="absolute w-40 text-sm bg-neutral-300 md:left-40 top-4 lg:px-6 py-1 rounded-lg">
              <div className="absolute p-4 w-40 text-sm bg-neutral-300 md:left-40 -bottom-20 lg:px-6 py-1 rounded-lg">
                NGOs
                <span className="flex">
                  Learn More{" "}
                  <IoIosArrowDroprightCircle className="text-2xl ml-2 rounded-full bg-green-400" />
                </span>
              </div>
            </div>
          </div>
          <div className="relative md:w-1/3 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={Library} alt="Corporate" />
            <div className="absolute  p-4 w-40 text-sm bg-neutral-300 md:-left-20 bottom-0 lg:px-6 py-1 rounded-lg">
              Corporates
              <span className="flex">
                Learn More{" "}
                <IoIosArrowDroprightCircle className="text-2xl ml-2 rounded-full bg-green-400" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <Report />
      </div>
    </>
  );
};

export default Services;
