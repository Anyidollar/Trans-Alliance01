import Layer from "../assets/Frame 524laptop.svg";
import Button from "./Button";

const Payment = () => {
  return (
    <div className="flex md:items-end flex-wrap">
      <div className="md:flex-1 md:mt-[5.5rem] bg-green-500">
        <div className="md:pt-10 md:pl-80 md:pr-10">
          <h2 className="text-3xl">The human-powered payments network</h2>
          <p>
            Driven by a team of over 200 global payments experts with absolute
            dedication to solving our customers’ most complex cross-border
            payments challenges.
          </p>
          <Button className="bg-green-600 my-10">Learn More</Button>
        </div>
      </div>
      <div className="md:flex-1">
        <img src={Layer} alt="" />
      </div>
    </div>
  );
};

export default Payment;
