import * as React from "react";
import TextTransition, { presets } from "react-text-transition";
import Typist from "react-typist";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = ({}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const TEXTS = ["talk?", "listen?"];
  return (
    <section className="w-full bg-white">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="w-full text-3xl font-bold tracking-tighter text-grey-100 md:text-5xl lg:text-6xl text-slate-700">
                Did you know that your <br></br>website can{" "}
                <Typist
                  className="text-transparent bg-clip-text bg-gradient-to-br from-[#cb5eee] to-[#3085f0] ml-4"
                  key={index % TEXTS.length}
                >
                  {TEXTS[index % TEXTS.length]}
                </Typist>
              </h1>

              <p className="max-w-xl mx-auto mt-8 text-xl leading-relaxed tracking-tighter text-gray-500 ">
                Use voice widgets to speak to your audience & collect voice
                feedback. Increase conversions and make better decisions.
              </p>

              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <a
                    className="items-center tracking-tighter block px-5 py-4 text-base font-normal text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-[#a994e8] to-[#886adb] hover:bg-[#F6F3FB] text-white  lg:px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    href="https://app.voicl.com/login"
                  >
                    Start now - it's free
                  </a>
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
