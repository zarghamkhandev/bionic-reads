import * as React from "react";
import { useEffect } from "react";
import SlideShow from "./Slideshow";
const TryIt: React.FunctionComponent = () => {
  useEffect(() => {
    import("widgets-ui/build/827.bundle.js");
    import("widgets-ui/build/bundle.js");
  }, []);

  return (
    <section className="flex flex-col w-full p-10 text-gray-600 rounded-2xl">
      <div className="flex justify-between">
        <h1 className="mx-auto mb-4 text-xl font-normal text-slate-800 title-font sm:text-3xl arrow">
          Meet your voicys
        </h1>
      </div>
      <div className="flex justify-center w-full mt-20">
        <SlideShow />
      </div>
    </section>
  );
};

export default TryIt;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["voicy-momina"]: any;
      ["voicy-meghan"]: any;
      ["voicy-cta"]: any;
      ["voicy-malik"]: any;
      ["voicy-usman"]: any;
      ["voicy-nicky"]: any;
    }
  }
}
