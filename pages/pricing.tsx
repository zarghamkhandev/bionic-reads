import Layout from "../components/Layout";

export default function Pricing() {
  return (
    <Layout>
   

 


      {/* Section 1 */}
      <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
              Pricing to fit the needs of any company size.
            </p>
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
                <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for exploring Voicl
              </p>
              <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated Reporting
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Faster Processing
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customizations
                </li>
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-our-600 no-underline bg-transparent border border-our-600 rounded-md cursor-pointer hover:bg-our-700 hover:border-our-700 hover:text-white focus-within:bg-our-700 focus-within:border-our-700 focus-within:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
            {/* Price 2 */}
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-our-700 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Basic
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  $15
                </p>
                <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for medium-size businesses to larger businesses
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                50,000+ views / month
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100 Builds
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Progress Reports
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium Support
                </li>
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-our-600 border rounded-md cursor-pointer hover:bg-our-700 hover:border-our-700 hover:text-white focus-within:bg-our-700 focus-within:border-our-700 focus-within:text-white sm:text-base md:text-lg">
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
                  $25
                </p>
                <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for larger and enterprise companies
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Basic
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited Builds
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Analytics
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-our-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Company Evaluations
                </li>
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-our-600 no-underline bg-transparent border border-our-600 rounded-md cursor-pointer hover:bg-our-700 hover:border-our-700 hover:text-white focus-within:bg-our-700 focus-within:border-our-700 focus-within:text-white sm:text-base md:text-lg">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  );
}
