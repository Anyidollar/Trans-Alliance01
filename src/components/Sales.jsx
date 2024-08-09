import Image from "../assets/Image20.svg";
import Button from "./Button";

const Sales = () => {
  return (
    <div
      id="contact"
      className="flex flex-col bg-gray-50 md:flex-row py-10 px-4"
    >
      <div className="flex justify-center md:justify-start md:w-1/2">
        <img src={Image} alt="" className="w-3/4"  loading="lazy"/>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <section className="mx-1">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-12">
              <h2 className="text-2xl">Speak to sales</h2>
            </div>
            <form className="mx-20">
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="firstname">
                  Firstname
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="lastname">
                  Lastname
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="text"
                  id="lastname"
                  name="lastname"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="flex items-start mb-4">
                <input type="checkbox" className="mr-2 mt-1" />
                <p className="text-sm text-gray-700">
                  I agree to receiving payment news and trends from Inpay,
                  including updates to our products and services. I am aware
                  that I can withdraw this consent at any time by contacting
                  Inpay or unsubscribing via email. I agree to Inpay processing
                  my personal data in accordance with its{" "}
                  <a href="#">
                    <u>Privacy Policy</u>
                  </a>
                </p>
              </div>
              <Button>Submit</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sales;
