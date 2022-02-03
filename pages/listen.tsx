import Layout from "../components/Layout";
import Typist from "react-typist";
import ListenSVG from "../components/ListenSVG";
import ListenSVG2 from "../components/ListenSVG2";

export default function Faqs() {
  return (
    <Layout>
      {/* Section 1 */}

      <div className="flex flex-col w-full mt-20 text-center">
        <h1 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tighter text-black border-solid sm:text-4xl md:text-5xl">
          Receive spoken feedback
        </h1>
        <p className="box-border mt-2 text-xl font-medium tracking-tighter text-gray-900 border-solid sm:text-2xl">
          Make better decisions by asking your audience for their feedback
          directly.
        </p>
      </div>

      <div className="container flex flex-col items-center px-5 mx-auto mt-40 rounded-3xl bg-our-300 md:flex-row md:items-center">
        <div className="flex flex-col items-center pl-10 mb-16 text-center lg:flex-grow md:w-1/2 md:pr-6 md:items-start md:text-left md:mb-0">
          <h1 className="mt-20 mb-4 text-xl font-semibold tracking-tighter text-our-800 title-font sm:text-4xl ">
            Improve your business
          </h1>
          <p className="mb-8 leading-relaxed tracking-tighter text-our-800">
            The only opinion that matters is that of the people who use your
            product or service. Ask them for their feedback and find out what
            their pain points are.
          </p>
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <a className="text-sm tracking-tighter text-our-800">
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 bg-white rounded-full text-our-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              FIND OUT YOUR CUSTOMERS PAIN POINTS
            </a>
            <a className="text-sm tracking-tighter text-our-800">
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 bg-white rounded-full text-our-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              GET INSTANT FEEDBACK ON NEW FEATURES
            </a>
            <a className="text-sm tracking-tighter text-our-800">
              <span className="inline-flex items-center justify-center w-4 h-4 mb-20 mr-2 bg-white rounded-full text-our-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              ASK FOR YOUR AUDIENCE'S OPINION AND DELIVER THE BEST RESULTS
              POSSIBLE
            </a>
            <a></a>
            <a></a>
          </nav>
        </div>
        <div className="w-5/6 pr-10 lg:max-w-lg lg:w-2/5 md:w-1/2">
          <ListenSVG />
        </div>
      </div>

      <div className="container flex flex-col items-center px-5 mx-auto mt-20 rounded-3xl bg-our-300 md:flex-row md:items-center">
        <div className="flex flex-col items-center pl-10 mb-16 text-center lg:flex-grow md:w-1/2 md:pr-6 md:items-start md:text-left md:mb-0">
          <h1 className="mt-20 mb-4 text-xl font-semibold tracking-tighter text-our-800 title-font sm:text-4xl ">
            Live feedback for content creators
          </h1>
          <p className="mb-8 leading-relaxed tracking-tighter text-our-800">
            Whether you're a podcast host, video creator or influencer - your
            content is your capital. Make sure you deliver what your audience
            wants to see by directly asking them for their opinion on your
            content.
          </p>
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <a className="text-sm tracking-tighter text-our-800">
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 bg-white rounded-full text-our-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              BUILD TRUST WITH YOUR AUDIENCE
            </a>
            <a className="text-sm tracking-tighter text-our-800">
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 bg-white rounded-full text-our-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              IMPROVE YOUR CONTENT TOWARDS MAXIMUM ENGAGEMENT
            </a>
            <a className="text-sm tracking-tighter text-our-800">
              <span className="inline-flex items-center justify-center w-4 h-4 mb-20 mr-2 bg-white rounded-full text-our-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              GET INSIGHT ABOUT YOUR AUDIENCE'S TASTE, LIKES AND DISLIKES FOR
              BETTER DELIVERY
            </a>
            <a></a>
            <a></a>
          </nav>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-2/5 md:w-1/2">
          <ListenSVG2 />
        </div>
      </div>

      <div className="flex flex-col w-full mt-20 text-center">
        <h1 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tighter text-black border-solid sm:text-4xl md:text-5xl">
          Meet our widgets
        </h1>
      </div>

      <div className="mx-4 mt-40 bg-[#F6F3FB] rounded-3xl text-our-800">
        <div className="flex flex-col w-full px-4 py-12 mx-auto rounded-3xl sm:px-6 lg:py-16 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Try Voicl for free
          </h2>
          <p className="mt-3 tracking-tighter text-our-700">
            Getting started is easy and takes a couple of minutes only. No
            credit card required. No hidden fees.
          </p>
          <div className="flex flex-wrap mt-10 -mx-2">
            <a
              href="https://calendly.com/svenjarossig/voicl-demo"
              className="items-center block px-10 py-3 mx-2 text-sm font-medium tracking-tighter text-center transition duration-500 ease-in-out transform border border-our-500 text-our-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-our-500"
            >
              Book a demo
            </a>

            <button className="mt-2 sm:mt-0 tracking-tighter text-sm whitespace-nowrap mx-2 items-center block px-10 py-3 font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-[#a994e8] to-[#886adb] rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start Now - its free
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
