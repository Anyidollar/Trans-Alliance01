import Layer from "../assets/Frame 524laptop.svg";
import Button from "./Button";

const Payment = () => {
  return (
    <div
      id="more"
      className="flex my-2 mx-2 flex-wrap lg:justify-center lg:items-center md:items-end"
    >
      <div className="w-full md:w-full lg:w-1/2  bg-green-300 p-6 mt-auto md:p-10">
        <div className="max-w-lg mx-auto md:mx-0 md:pl-20">
          <h2 className="text-2xl font-DMSans md:text-3xl  mb-4">
            The human-powered <br /> payments network
          </h2>
          <p className="mb-6 font-DMSans">
            Driven by a team of over 200 global <br /> payments experts with
            absolute dedication <br /> to solving our customers’ most complex{" "}
            <br /> cross-border payments challenges.
          </p>
          <Button className="bg-gradient-to-r from-yellow-300 via-green-500 to-green-400">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-full md:w-full  lg:w-1/2 flex justify-center md:justify-end mt-6 md:mt-4">
        <img className="w-full" src={Layer} alt="Illustration" />
      </div>
    </div>
  );
};

export default Payment;
