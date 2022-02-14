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
                <a className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6" href="https://www.producthunt.com/posts/voicl-2-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-voicl-2-0" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=331428&theme=light" alt="Voicl 2.0 - Easily add voice widgets to your website | Product Hunt" className="width: 150px; height: 54px; mb-5 justify-center content-center" width="150" height="54" /></a>
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
