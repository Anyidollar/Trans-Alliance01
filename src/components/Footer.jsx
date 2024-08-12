import logo from "../assets/logo.svg";
import Button from "./Button";
import { LiaFacebook, LiaTwitter, LiaInstagram } from "react-icons/lia";

const Footer = () => {
  return (
    <div  id="footer" className="flex flex-col p-4 sm:p-8 w-full">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="w-12 h-12 mr-2" />
            <div className="text-xl font-Gayathri font-semibold">
              Transalliance Group
            </div>
          </div>
          <Button className="my-4 md:my-10 font-DMSans md:w-40 max-sm:w-40">
            Contact Us
          </Button>
        </div>
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="text-lg md:text-xl font-DMSans mb-4">Offices</div>
          <div className="font-DMSans">
            <p>Denmark:</p>
            <p>Toldbodgade 55B</p>
            <p>1253, Copenhagen</p>
            <p className="mt-2">United Kingdom:</p>
          </div>
          <div className="mt-5">
            <p>1 Poultry</p>
            <p>EC2R 8EJ, London</p>
            <p>info@inpay.com</p>
            <p>Phone: +45 88 610 600</p>
          </div>
        </div>
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="text-lg md:text-xl font-DMSans mb-4">Solutions</div>
          <div>Money Out</div>
          <div>Money In</div>
        </div>
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="text-lg md:text-xl font-DMSans mb-4">Sectors</div>
          <div>Financial services</div>
          <div>iGaming</div>
          <div>Corporates</div>
          <div>NGOs</div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg md:text-xl font-DMSans mb-4">Other</div>
          <div>About Us</div>
          <div>News & Insights</div>
          <div>Compliance</div>
          <div>Careers</div>
          <div>Contact us</div>
        </div>
      </div>
      <hr className="my-4 border-gray-300 w-full mx-auto" />
      <div className="flex flex-col items-start md:items-end">
        <div className="text-lg md:text-xl font-DMSans mb-4">Social Media</div>
        <div className="flex space-x-4">
          <LiaFacebook className="w-8 h-8" />
          <LiaTwitter className="w-8 h-8" />
          <LiaInstagram className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
