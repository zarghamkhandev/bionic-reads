import { FunctionComponent } from "react";

const CTA: FunctionComponent = () => {
  return (
    <div className="mx-4 mt-40 bg-[#F6F3FB] rounded-3xl text-our-800">
      <div className="flex flex-col w-full px-4 py-12 mx-auto rounded-3xl sm:px-6 lg:py-16 lg:px-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Try Voicl for free</h2>
        <p className="mt-3 tracking-tighter text-our-700">
          Getting started is easy and takes a couple of minutes only. No credit
          card required. No hidden fees.
        </p>
        <div className="flex flex-wrap mt-10 -mx-2">
        <a href="https://calendly.com/svenjarossig/voicl-demo" className="items-center block px-10 py-3 mx-2 text-sm font-medium text-center transition duration-500 ease-in-out transform border border-our-500 text-our-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-tighter focus:ring-our-500">Book a demo</a> 
            
          <button className="mt-2 tracking-tighter sm:mt-0 text-sm whitespace-nowrap mx-2 items-center block px-10 py-3 font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-[#a994e8] to-[#886adb] rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Start Now - its free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
