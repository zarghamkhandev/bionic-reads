import * as React from "react";

const Testimonials: React.FunctionComponent = () => {
  return (
    <section className="text-gray-600 ">
      <div className="flex flex-col w-full mt-32 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl title-font">
          Hear what our clients has to say!
        </h1>
      </div>
      <div className="px-5 pt-16 ">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="https://dummyimage.com/302x302"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
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
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                ALPER KAMU
              </h2>
              <p className="text-gray-500">UI Develeoper</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="https://dummyimage.com/305x305"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                HENRY LETHAM
              </h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
