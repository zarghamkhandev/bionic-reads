import * as React from "react";

const Testimonials: React.FunctionComponent = () => {
  return (
    <section className="text-gray-600">
      <div className="flex flex-col w-full mt-32 text-center">
        <h1 className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl title-font">
          Hear what our clients have to say!
        </h1>
      </div>

      <div className="px-5 pt-16 ">
        <div className="flex flex-wrap justify-center -m-4">
          <div
            className="relative flex flex-col h-full p-4 mx-6 mb-16 bg-our-100 w-96 sm:w.0.5 lg:mb-0"
            style={{
              borderRadius: "600000px",
              borderTopRightRadius: "20px",
            }}
          >
            <img
              alt="testimonial"
              className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 bg-gray-100 border-2 rounded-full border-our-600 -mt-14 "
              src="/77.svg"
            />
            <div className="h-full text-center">
              <p className="text-xs text-[#7C6CA3] tracking-tighter leading-relaxed sm:text-base">
                Voicl is a gamechanger for us by helping explain our product to
                our customers - genius.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-[#7C6CA3] rounded" />
              <h2 className="text-xs font-medium tracking-wider text-[#7C6CA3] sm:text-sm title-font">
                Victor Ehinmowo
              </h2>
              <p className="text-xs tracking-tighter text-[#7C6CA3] sm:text-sm">CEO vobb.io</p>
            </div>
          </div>
          <div
            className="relative flex flex-col h-full p-4 mx-6 mb-6 bg-our-100 w-96 lg:mb-0"
            style={{
              borderRadius: "600000px",
              borderTopRightRadius: "20px",
            }}
          >
            <img
              alt="testimonial"
              className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 bg-gray-100 border-2 rounded-full border-our-600 -mt-14 "
              src="/78.svg"
            />
            <div className="h-full text-center">
              <p className="text-xs tracking-tighter text-[#7C6CA3] leading-relaxed sm:text-base">
                We use Voicl to encourage clients to book a demo with us. And it
                works!! Really cool tool.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-[#7C6CA3] rounded" />
              <h2 className="text-xs font-medium tracking-wider text-[#7C6CA3] sm:text-sm title-font">
                Sarah Moran
              </h2>
              <p className="text-xs text-[#7C6CA3] sm:text-sm">pynhq.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
