import * as React from "react";

const Testimonials: React.FunctionComponent = () => {
  return (
    <section className="text-gray-600 ">
      <div className="flex flex-col w-full mt-32 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl title-font">
          Hear what our clients have to say!
        </h1>
      </div>
      <div className="px-5 pt-16 ">
        <div className="flex flex-wrap justify-center -m-4">
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="https://dummyimage.com/302x302"
              />
              <p className="leading-relaxed">
                Voicl is a gamechanger for us by helping explain our product to our customers - genius.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                Victor Ehinmowo
              </h2>
              <p className="text-gray-500">CEO vobb.io</p>
            </div>
          </div>
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="https://dummyimage.com/300x300"
              />
              <p className="leading-relaxed">
                We use Voicl to encourage clients to book a demo with us. And it works!! Really cool tool.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                Sarah Moran
              </h2>
              <p className="text-gray-500">pynhq.com</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
