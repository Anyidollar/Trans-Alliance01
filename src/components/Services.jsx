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
      <div className="flex flex-wrap items-center justify-between max-sm:px-4 md:px-32 max-sm:mt-6 md:mt-14">
        <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <img
            className="w-full"
            src={Image1}
            alt="SEPA Instant, SEPA & SWIFT"
          />
          <p className="absolute text-center left-1/2 transform -translate-x-1/2 bottom-2 bg-neutral-300 p-2 rounded-lg w-[80%]">
            SEPA Instant, SEPA & SWIFT
          </p>
        </div>
        <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <img
            className="w-full h-full rounded-lg border-2 border-blue-300 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
            src={Image2}
            alt="Customer portal for live transaction monitoring"
          />
          <p className="absolute text-center left-1/2 transform -translate-x-1/2 bottom-2 bg-neutral-200 p-2 rounded-lg w-[80%]">
            Customer portal for live transaction monitoring
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end max-sm:px-4 md:px-32 mb-10">
        <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <img
            className="w-full h-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
            src={Image3}
            alt="Danish FSA regulated"
          />
          <p className="absolute text-center left-1/2 transform -translate-x-1/2 top-16 bg-neutral-200 p-2 rounded-lg w-[80%]">
            Danish FSA regulated
          </p>
        </div>
        <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <img
            className="w-full h-full px-10"
            src={Image4}
            alt="90+ currencies served"
          />
          <p className="absolute text-center left-1/2 transform -translate-x-1/2 bottom-2 bg-neutral-200 p-2 rounded-lg w-[80%]">
            90+ currencies served
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <Button className="bg-green-400">Learn More</Button>
      </div>

      <div className="flex flex-wrap max-sm:px-4 md:px-32 mb-10">
        <div className="flex flex-col md:w-full lg:w-1/2 mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            OUR SERVICE
          </h3>
          <div className="mt-2 p-2 flex items-start">
            <img className="h-16 w-16 mr-4" src={Hand} alt="Trusted Partner" />
            <div>
              <h4 className="text-xl font-semibold">
                We are your trusted partner
              </h4>
              <p>
                We are a dedicated and diligent team of payments specialists
                that’s committed to helping you unlock opportunity, create value
                and make payments happen, together.
              </p>
            </div>
          </div>
          <div className="mt-2 p-2 flex items-start">
            <img className="h-16 w-16 mr-4" src={Star} alt="Network" />
            <div>
              <h4 className="text-xl font-semibold">
                We provide the network you need
              </h4>
              <p>
                We open access to a resilient global network spanning 90+
                countries that’s built to simplify complex challenges and move
                money at speed.
              </p>
            </div>
          </div>
          <div className="mt-2 p-2 flex items-start">
            <img className="h-16 w-16 mr-4" src={Key} alt="Compliance" />
            <div>
              <h4 className="text-xl font-semibold">
                We bring certainty through compliance
              </h4>
              <p>
                We were born with compliance at our heart. Licensed by the
                globally trusted Danish FSA, when we move money you can be
                confident that it gets to the right place with absolute
                accuracy.
              </p>
            </div>
          </div>
          <div className="mt-2 p-2 flex items-start">
            <img className="h-16 w-16 mr-4" src={Human} alt="Expertise" />
            <div>
              <h4 className="text-xl font-semibold">
                We execute with expertise
              </h4>
              <p>
                We complete an industry-leading 99% of payments for customers in
                the fast-changing financial services, iGaming, corporate and NGO
                sectors, drawing on 16 years of proven expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-full lg:w-1/2 flex flex-col md:ml-0 lg:ml-10 max-sm:items-center">
          <div className="mr-0 lg:mr-14">
            <h1 className="text-2xl font-semibold mb-4">
              The Transalliance Group Difference
            </h1>
            <p>
              Our global payments network is powered by passionate people,
              transparent customer relationships, and leading-edge technology.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start mt-16 mb-10 max-sm:mx-2">
            <div className="relative mr-4">
              <img className="rounded-md" src={frameImage} alt="Team" />
              <p className="absolute w-auto p-2 top-6 bg-white rounded-lg left-1/2 transform -translate-x-1/2 text-center">
                <span>OUR TEAM</span> <br /> Meet our best financial experts
              </p>
            </div>
            <div className="relative">
              <img className="rounded-md" src={frameImage1} alt="Experts" />
              <p className="absolute bg-white w-full bottom-0 text-center py-4 rounded-lg">
                Meet our best financial experts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <Transaction />
      </div>

      <div id="sector" className="pt-8 md:px-32 max-sm:px-5 mb-10">
        <div className="w-full mb-10">
          <h1 className="text-4xl font-bold mb-6">Sectors we serve</h1>
          <p className="mx-10">
            We simplify the complexities of cross-border payments in some of the
            world’s most demanding sectors. Learn more about who we serve and
            how we add value below.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <div className="relative md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={House} alt="Financial Services" />
            <p className="absolute text-sm bg-neutral-300 md:-right-12 bottom-8 px-6 py-1 rounded-lg">
              Financial Services <br />
              <span>Learn More</span>
            </p>
          </div>
          <div className="relative md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={Computer} alt="iGaming" />
            <p className="absolute text-sm bg-neutral-300 md:-left-8 top-4 px-6 py-1 rounded-lg">
              iGaming <br />
              <span>Learn More</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full mt-10">
          <div className="relative md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={Library} alt="Corporate" />
            <p className="absolute text-sm bg-neutral-300 md:-right-12 bottom-8 px-6 py-1 rounded-lg">
              Corporate <br />
              <span>Learn More</span>
            </p>
          </div>
          <div className="relative md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <img className="m-2" src={Field} alt="NGOs" />
            <p className="absolute text-sm bg-neutral-300 md:-left-8 top-4 px-6 py-1 rounded-lg">
              NGOs <br />
              <span>Learn More</span>
            </p>
          </div>
        </div>
      </div>

      <Payment />

      <div className="mb-10">
        <Report />
      </div>
    </main>
  );
};

export default Services;
