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
import SendMoney from "./SendMoney";
import About from "./About";
import Button from "./Button";
import Payment from "./Payment";
import Transaction from "./Transaction";
import Report from "./Report";
// import Break2 from "../Break2";

const Services = () => {
  return (
    <main>
      <SendMoney />
      <About />
      <div className=" flex justify-between  px-32 mt-14">
        <div className="image1 small-s  relative w-1/3">
          <img className="" src={Image1} alt="Image 1" loading="lazy" />
          <div className=" text-center left-10 absolute -bottom-4">
            <p className="bg-neutral-300 p-2  rounded-lg">
              SEPA Instant, SEPA & SWIFT
            </p>
          </div>
        </div>
        <div className="image2  small-s rounded-lg relative w-1/3">
          <img
            className="h-300 rounded-lg  border-2 p-10 border-blue-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            src={Image2}
            alt="Image 2"
            loading="lazy"
          />
          <p className="bg-neutral-200 absolute bottom-14 -left-6 px-6 py-1 mr-1 rounded-lg text-center ">
            Customer portal for live transaction <br /> monitoring
          </p>
        </div>
      </div>
      <div className="flex mt-6 pt-6 justify-end  px-32 ">
        <div className="mt-4 rounded-lg h-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-6 w-1/3 relative">
          <img className="-mt-14" src={Image3} alt="Image 3" loading="lazy" />
          <p className="bg-neutral-200 p-2  rounded-lg absolute top-16 -left-14">
            Danish FSA regulated
          </p>
        </div>
        <div className=" w-1/3 mt-4 relative">
          <img
            className="h-300 pt-10 px-10"
            src={Image4}
            alt="Image 4"
            loading="lazy"
          />
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
      <div id="ourService" className="flex mt-5">
        <div className="flex flex-col p-20">
          <p className="mb-6 text-gray-200"> OUR SERVICE</p>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Hand} alt="Back" loading="lazy" />
            <h1 className="text-xl p-2">We are your trusted partner</h1>
            <p>
              We are a dedicated and diligent team of payments specialists
              that’s committed to helping you unlock opportunity, create value
              and make payments happen, together.
            </p>
          </div>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Star} alt="Back" loading="lazy" />
            <h1 className="text-xl p-2">We provide the network you need</h1>
            <p>
              We open access to a resilient global network spanning 90+
              countries that’s built to simplify complex challenges and move
              money at speed.
            </p>
          </div>
          <div className="mt-2 p-2">
            <img className=" h-16 w-16" src={Key} alt="Back" loading="lazy" />
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
            <img className=" h-16 w-16" src={Human} alt="Back" loading="lazy" />
            <h1 className="text-xl p-2">We execute with expertise</h1>
            <p>
              We complete an industry-leading 99% of payments for customers in
              the fast-changing financial services, iGaming, corporate and NGO
              sectors, drawing on 16 years of proven expertise.
            </p>
          </div>
        </div>
        <div className="ml-10">
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
          <div className="flex mt-16 mb-10 mr-16">
            <div className="relative ">
              <img
                className=" mt-0 rounded-md"
                src={frameImage}
                alt="Image 6"
                loading="lazy"
              />
              <p className="absolute top-6 bg-white rounded-lg -left-14">
                <span>OUR TEAM</span> <br /> Meet our best financial experts
              </p>
            </div>
            <div className="relative">
              <img
                className="mt-0  rounded-md"
                src={frameImage1}
                alt="Image 6"
                loading="lazy"
              />
              <p className="py-10 px-2 text-center absolute bottom-0 right-0 bg-white w-full">
                Meet our best financial experts
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 flex">
        <Transaction />
      </div>
      <div id="sector" className="sector pt-8 px-32 mb-10">
        <div className="w-[100%]">
          <h1 className="text-4xl bold mb-6 ">Sectors we serve</h1>
          <p className="mx-10 mb-8">
            We simplify the complexities of cross-border payments in some of the
            world’s most <br /> demanding sectors. Learn more about who we serve
            and how we add value below.
          </p>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="mr-4 w-1/3 relative ">
            <img className="m-2" src={House} alt="" loading="lazy" />
            <p className="absolute text-sm bg-neutral-300 -right-12 bottom-8 px-6 py-1 rounded-lg">
              Finacial Services <br />
              <span>Learn More</span>
            </p>
          </div>
          <div className=" rounded-lg w-1/3 relative">
            <img className="m-2" src={Computer} alt="" loading="lazy" />
            <p className="  text-sm absolute bg-neutral-300 -left-8 top-4 px-6 py-1 rounded-lg">
              iGaming <br />
              <span>Learn More</span>
            </p>
          </div>
        </div>
        <div className=" flex justify-between w-[100%]">
          <div className="mr-4 w-1/3 relative">
            <img className="m-2" src={Field} alt="" loading="lazy" />
            <p className=" text-sm absolute bg-neutral-300 -right-10 top-6 px-4 py-1 rounded-lg">
              NGOs <br />
              <span>Learn More</span>
            </p>
          </div>
          <div className=" w-1/3 relative ">
            <img className="m-2" src={Library} alt="" />
            <p className=" text-sm absolute bg-neutral-300 -left-4 -bottom-2 px-4 py-1 rounded-lg">
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
