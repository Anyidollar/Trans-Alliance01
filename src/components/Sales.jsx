import Image from "../assets/Image20.svg";
import Button from "./Button";

const Sales = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 py-10 px-4">
      <div className="flex justify-center md:justify-start md:w-1/2 mb-8 md:mb-0">
        <img
          src={Image}
          alt="Illustration"
          className="w-full md:ml-10 max-w-xl"
          loading="lazy"
        />
      </div>
      <div className="md:w-1/2">
        <section className="mx-4 md:mx-8 lg:mx-12">
          <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl font-DMSans font-bold mb-8 text-center md:text-left">
              Speak to Sales
            </h2>
            <form>
              <div className="mb-6">
                <label className="block mb-2 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium" htmlFor="firstname">
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  id="lastname"
                  name="lastname"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  className="mr-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-sm font-DMSans text-gray-700">
                  I agree to receive payment news and trends from Inpay,
                  including updates to our products and services. I am aware
                  that I can withdraw this consent at any time by contacting
                  Inpay or unsubscribing via email. I agree to Inpay processing
                  my personal data in accordance with its{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <Button className="font-DMSans">Submit</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sales;
