import Layer from "../assets/Frame 524laptop.svg";
import Button from "./Button";

const Payment = () => {
  return (
    <div className="flex flex-wrap justify-center items-center md:items-end">
      <div className="w-full md:w-1/2 bg-green-500 p-6 md:p-10">
        <div className="max-w-lg mx-auto md:mx-0 md:pl-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The human-powered payments network
          </h2>
          <p className="text-white mb-6">
            Driven by a team of over 200 global payments experts with absolute
            dedication to solving our customers’ most complex cross-border
            payments challenges.
          </p>
          <Button className="bg-green-600 text-white px-6 py-3">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-8 flex justify-center md:justify-end mt-6 md:mt-0">
        <img className="w-full max-w-lg" src={Layer} alt="Layer illustration" />
      </div>
    </div>
  );
};

export default Payment;
