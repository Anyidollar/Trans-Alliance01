import logo1 from "../assets/Frame 524tab.svg";

const Transaction = () => {
  return (
    <div className="flex items-end">
      <div className="flex-1">
        <img src={logo1} alt="" />
      </div>
      <div className="flex-1 mt-[5.5rem] bg-green-500">
        <div className="py-10 px-20">
          <h2 className="text-3xl">One portal, every transaction</h2>
          <p>
            Our customer portal provides an intuitive interface to access all of
            our services via a simple, single login.
          </p>
          <ul className="list-disc pl-10">
            <li>Real-time, 24/7, 365 transaction tracking</li>
            <li>Customizable & downloadable reports</li>
            <li>Rich data analysis</li>
            <li>Multiple integration methods, built to suit your needs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
