const Report = () => {
  return (
    <div className="bg-[#122038] text-white text-center rounded-br-3xl p-8 md:p-12 max-sm:ml-4">
      <h2 className="text-3xl md:text-4xl py-8 md:py-10">2023 Annual Report</h2>
      <p className="pb-12 md:pb-20 w-11/12 md:w-1/2 lg:w-1/3 mx-auto">
        Click below to read more about Inpay’s impressive year-on-year growth
        and to download the full report.
      </p>
      <button className="bg-white text-[#122038] px-6 py-3 rounded-md font-semibold mt-4 hover:bg-gray-200 transition-colors duration-300">
        Download Report
      </button>
    </div>
  );
};

export default Report;
