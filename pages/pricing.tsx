import { useState } from "react";
import Layout from "../components/Layout";

export default function Pricing() {
  const [type, setType] = useState<"monthly" | "yearly">("monthly");

  const plans = {
    monthly: { starter: 15, pro: 29 },
    yearly: { starter: 144, pro: 278 },
  };

  const freeFeatures = ["Limited customization", "500 views/month", "30sec recording length", "No analytics", "3 voicys/month"
];
  const starterFeatures = [
    "Unlimited customization",
    "15.000 views/month",
    "1 min recording length",
    "Simple analytics",
    "12 voicys/month",
    ,
  ];

  const proFeatures = [
    "Unlimited customization",
    "50.000 views/month",
    "3 min recording length",
    "In depth analytics",
    "30 voicys/month",
    ,
  ];
  return (
    <Layout>
      {/* Section 1 */}
      <section className="py-8 leading-7 text-gray-900 bg-white ">
        <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
          {/* <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p classNameName="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
              Pricing to fit the needs of any company size.
            </p>
          </div> */}
          <div className="flex mx-auto mt-6 overflow-hidden border-2 rounded border-our-600 w-fit">
            <button
              className={
                "px-4 py-1 focus:outline-none" +
                (type === "monthly" ? " text-white bg-our-600" : "")
              }
              onClick={() => {
                setType("monthly");
              }}
            >
              Monthly
            </button>
            <button
              className={
                "px-4 py-1 focus:outline-none" +
                (type === "yearly" ? " text-white bg-our-600" : "")
              }
              onClick={() => {
                setType("yearly");
              }}
            >
              Annually
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            {/* Price 1 */}
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Free Forever
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  $0
                </p>
                <p
                  className="box-border m-0 border-solid"
                  style={{ borderImage: "initial" }}
                >
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for exploring Voicl
              </p>
              <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                {freeFeatures.map((item) => (
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 text-sm leading-none text-center no-underline bg-transparent border rounded-md cursor-pointer text-our-600 border-our-600 hover:bg-our-700 hover:border-our-700 hover:text-white focus-within:bg-our-700 focus-within:border-our-700 focus-within:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
            {/* Price 2 */}
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-solid rounded-lg border-our-300 sm:p-6 md:px-8 md:py-16">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Basic
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  ${plans[type].starter}
                </p>
                <p
                  className="box-border m-0 border-solid"
                  style={{ borderImage: "initial" }}
                >
                  / {type.slice(0, -2)}
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for medium-size businesses to larger businesses
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                {starterFeatures.map((item) => (
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 text-sm leading-none text-center text-white no-underline border rounded-md cursor-pointer bg-our-600 hover:bg-our-700 hover:border-our-700 hover:text-white focus-within:bg-our-700 focus-within:border-our-700 focus-within:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
            {/* Price 3 */}
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Plus
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  ${plans[type].pro}
                </p>
                <p
                  className="box-border m-0 border-solid"
                  style={{ borderImage: "initial" }}
                >
                  / {type.slice(0, -2)}
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for larger and enterprise companies
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                {proFeatures.map((item) => (
                  <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 text-sm leading-none text-center no-underline bg-transparent border rounded-md cursor-pointer text-our-600 border-our-600 hover:bg-our-700 hover:border-our-700 hover:text-white focus-within:bg-our-700 focus-within:border-our-700 focus-within:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
