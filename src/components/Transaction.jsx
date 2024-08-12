import logo1 from "../assets/Frame 524tab.svg";

const Transaction = () => {
  return (
    <div className="flex flex-wrap md:items-end">
      <div className="md:flex-1">
        <img src={logo1} alt="logo" />
      </div>
      <div className="md:flex-1 max-sm:py-5 max-sm:px-2 md:mt-[5.5rem] bg-green-300">
        <div className="md:py-10 md:px-20">
          <h2 className="text-3xl font-Gayathri">
            One portal, <br /> every transaction
          </h2>
          <p className="font-DMSans">
            Our customer portal provides an intuitive <br />
            interface to access all of our services via a <br /> simple, single
            login.
          </p>
          <ul className="list-disc pl-10">
            <li>Real-time, 24/7, 365 transaction tracking</li>
            <li>Customizable & downloadable reports</li>
            <li>Rich data analysis</li>
            <li>
              Multiple integration methods, built to suit <br /> your needs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
