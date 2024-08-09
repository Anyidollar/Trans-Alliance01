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
import Heading from "./Heading";
import Header from "./Header";
import NavBar from "./NavBar";

const Services = () => {
  return (
    <main>
      <NavBar />
      <Heading />
      <Header />
      <About />
      <div className="flex flex-wrap max-sm:mt-26 md:justify-between max-sm:px-2  md:px-32 md:mt-14">
        <div className="image1 small-s  relative md:w-1/3">
          <img className="" src={Image1} alt="Image 1" />
          <div className=" text-center left-10 absolute -bottom-4">
            <p className="bg-neutral-300 p-2  rounded-lg">
              SEPA Instant, SEPA & SWIFT
            </p>
          </div>
        </div>
        <div className="image2 max-sm:mt-10 small-s rounded-lg relative md:w-1/3">
          <img
            className="md:h-300 rounded-lg  border-2 md:p-10 border-blue-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            src={Image2}
            alt="Image 2"
          />
          <p className="bg-neutral-200 absolute max-sm:-bottom-2 md:bottom-14 md:-left-6 max-sm:px-2 md:px-6 py-1 mr-1 rounded-lg text-center">
            Customer portal for live transaction <br /> monitoring
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 pt-6 md:justify-end max-sm:px-4 md:px-32 ">
        <div className="mt-4 rounded-lg h-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-6 md:w-1/3 relative">
          <img className="-mt-14" src={Image3} alt="Image 3" />
          <p className="bg-neutral-200 p-2  rounded-lg absolute top-16 md:-left-14 max-sm:-left-2">
            Danish FSA regulated
          </p>
        </div>
        <div className="md:w-1/3 mt-4 relative">
          <img className="h-300 pt-10 px-10" src={Image4} alt="Image 4" />
          <p className="bg-neutral-200 py-2 px-2 ml-4 text-center absolute rounded-lg left-16">
            90+ currencies served
          </p>
        </div>
      </div>
      <div className="flex justify-end m-6">
        <Button className="bg-green-400 my-10">Learn More</Button>
      </div>
      <div className="flex">
        <Payment />
      </div>
      <div className="flex max-sm:flex-wrap max-sm:px-2 mt-5">
        <div className="flex flex-col md:p-20">
          <p className="mb-6 text-gray-200"> OUR SERVICE</p>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Hand} alt="Back" />
            <h1 className="text-xl p-2">We are your trusted partner</h1>
            <p>
              We are a dedicated and diligent team of payments specialists
              that’s committed to helping you unlock opportunity, create value
              and make payments happen, together.
            </p>
          </div>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Star} alt="Back" />
            <h1 className="text-xl p-2">We provide the network you need</h1>
            <p>
              We open access to a resilient global network spanning 90+
              countries that’s built to simplify complex challenges and move
              money at speed.
            </p>
          </div>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Key} alt="Back" />
            <h1 className="text-xl p-2">
              We bring certainty through compliance
            </h1>
            <p>
              We were born with compliance at our heart. Licensed by the
              globally trusted Danish FSA, when we move money you can be
              confident that it gets to the right place with absolute accuracy.
            </p>
          </div>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Human} alt="Back" />
            <h1 className="text-xl p-2">We execute with expertise</h1>
            <p>
              We complete an industry-leading 99% of payments for customers in
              the fast-changing financial services, iGaming, corporate and NGO
              sectors, drawing on 16 years of proven expertise.
            </p>
          </div>
        </div>
        <div className="md:ml-10 max-sm:flex max-sm:flex-wrap max-sm:items-center">
          <div className="mr-14">
            <h1 className="text-2xl mt-14">
              The Transalliance Group.
              <br /> difference
            </h1>
            <p className="">
              Our global payments network is powered by passionate people,
              transparent customer relationships, and leading-edge technology.
            </p>
          </div>
          <div className="flex mt-16 mb-10 max-sm:mx-2 md:mr-16">
            <div className="relative ">
              <img
                className=" mt-0 rounded-md"
                src={frameImage}
                alt="Image 6"
              />
              <p className="absolute w-auto p-2 top-6 bg-white rounded-lg md:-left-14 max-sm:-left-3">
                <span>OUR TEAM</span> <br /> Meet our best financial experts
              </p>
            </div>
            <div className="relative">
              <img
                className="mt-0  rounded-md"
                src={frameImage1}
                alt="Image 6"
              />
              <p className="md:py-10 max-sm:py-4 max-sm:rounded-md px-2 text-center absolute bottom-0 right-0 bg-white w-full">
                Meet our best financial experts
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 flex">
        <Transaction />
      </div>
      <div id="sector" className="sector pt-8 md:px-32 max-sm:px-5 mb-10">
        <div className="w-[100%]">
          <h1 className="text-4xl bold mb-6 ">Sectors we serve</h1>
          <p className="mx-10 mb-8">
            We simplify the complexities of cross-border payments in some of the
            world’s most <br /> demanding sectors. Learn more about who we serve
            and how we add value below.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-[100%]">
          <div className="mr-4 md:w-1/3 relative ">
            <img className="m-2" src={House} alt="" />
            <p className="absolute text-sm bg-neutral-300 md:-right-12 bottom-8 px-6 py-1 rounded-lg">
              Finacial Services <br />
              <span>Learn More</span>
            </p>
          </div>
          <div className=" rounded-lg md:w-1/3 relative">
            <img className="m-2" src={Computer} alt="" />
            <p className="  text-sm absolute bg-neutral-300 md:-left-8 top-4 px-6 py-1 rounded-lg">
              iGaming <br />
              <span>Learn More</span>
            </p>
          </div>
        </div>
        <div className=" flex  flex-wrap justify-between w-[100%]">
          <div className="mr-4 md:w-1/3 relative">
            <img className="m-2" src={Field} alt="" />
            <p className=" text-sm absolute bg-neutral-300 md:-right-10 top-6 px-4 py-1 rounded-lg">
              NGOs <br />
              <span>Learn More</span>
            </p>
          </div>
          <div className=" md:w-1/3 relative ">
            <img className="m-2" src={Library} alt="" />
            <p className=" text-sm absolute bg-neutral-300 md:-left-4 -bottom-2 px-4 py-1 rounded-lg">
              Corporates <br />
              <span>Learn More</span>
            </p>
          </div>
        </div>
      </div>
      <Report />
    </main>
  );
};

export default Services;
