import * as React from "react";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = ({}) => {
  return (
    <section className="w-full bg-white">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-3xl font-bold leading-none text-grey-100 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Did you know that your <br></br>website can{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#cb5eee] to-[#3085f0]">
                  talk / listen?
                </span>
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base text-2xl leading-relaxed text-gray-900 ">
                Easily embed voice widgets on your site - anywhere, with the
                click of a button.
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="items-center block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-[#a994e8] to-[#886adb] hover:bg-[#F6F3FB] text-white shadow-lg lg:px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
