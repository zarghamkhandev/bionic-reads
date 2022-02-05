import Layout from "../components/Layout";
import VideoPlayer from "../components/VideoPlayer";

export default function How() {
  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/videos/demo_video_1.mp4",
        type: "video/mp4",
      },
    ],
  };
  return (
    <Layout>
      <section className="mt-20 text-gray-600">
        <div className="flex flex-col w-full mt-20 text-center">
          <h1 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tighter text-black border-solid sm:text-4xl md:text-5xl">
            Here’s how it works
          </h1>
          <p className="box-border mt-2 text-xl font-medium tracking-tighter text-gray-900 border-solid sm:text-2xl">
            Our no code solution enables everyone to place voice widgets on
            their website
          </p>
        </div>
        <div className="flex flex-wrap px-5 py-24 md:px-6 lg:px-8">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                  <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#a994e8] rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    Sign up for free von voicl.com/sign up and provide your
                    website url.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                  <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#a994e8] rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    After signing up, please add the one line of code we give
                    you anywhere into your website's code.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                  <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#a994e8] rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Create your voicy. You can choose a template, customize the
                    colors to match your brand, add your text and record/upload
                    your audio file.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                  <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#a994e8] rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                    STEP 4
                  </h2>
                  <p className="mb-1 leading-relaxed">
                    Choose a method to add your voicy
                  </p>

                  <div>
                    <div
                      className="p-2 bg-[#EEEAFA] items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                      role="alert"
                    >
                      <span className="flex rounded-full bg-[#704ecd] uppercase px-2 py-1 text-xs font-bold text-[#EEEAFA] mr-3">
                        Tip
                      </span>
                      <span className="mr-2 text-left flex-auto text-[#5b38b0]">
                        Smart embed = easiest way to use Voicl
                      </span>
                      <svg
                        className="w-4 h-4 opacity-75 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex">
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-[#a994e8] rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                    DONE
                  </h2>
                  <p className="leading-relaxed">
                    You're all set! Have fun playing around with colors and
                    templates as much as you want to.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 mt-12 lg:w-3/5 md:w-1/2 md:mt-0">
              <div className="w-full overflow-hidden border border-gray-200 rounded-lg shadow">
                <VideoPlayer options={videoJsOptions} />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
