import { FunctionComponent } from "react";

const CTA: FunctionComponent = () => {
  return (
    <div className="mx-4 mt-40 bg-gray-100 rounded-lg md:mx-0">
      <div className="flex flex-col w-full px-4 py-12 mx-auto md:flex-row lg:flex lg:items-center lg:justify-between sm:px-6 lg:py-16 lg:px-16">
        <h2 className="text-3xl sm:text-4xl">
          <span className="block">Want to be millionaire ?</span>
          <span className="block text-indigo-500">It's today or never.</span>
        </h2>
        <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
          <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
