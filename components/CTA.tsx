import { FunctionComponent } from "react";

const CTA: FunctionComponent = () => {
  return (
    <div className="mx-4 mt-40 bg-[#F6F3FB] rounded-3xl  shadow-lg text-[#5b38b0]  md:mx-0">
      <div className="flex flex-col rounded-3xl w-full px-4 py-12 mx-auto md:flex-row lg:flex lg:items-center lg:justify-between sm:px-6 lg:py-16 lg:px-16">
        <h2 className="text-3xl sm:text-4xl">
          <span className="block font-bold">Increase your conversions & website engagement</span>
          <span className="block text-[#a994e8] text-lg font-bold text-4xl">using voice widgets.</span>
        </h2>
        <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
          <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-[#a994e8] to-[#886adb] rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
