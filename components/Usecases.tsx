import * as React from "react";
const Usecases: React.FunctionComponent = () => {
  return (
    <section className="mt-24 text-gray-600">
      {/* <div className="flex flex-col w-full mt-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-5xl title-font">
          Some amazing use cases for you
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          No matter if you're a SaaS, personal brand, service agency or podcast
          website - our voice widgets add value to everyone.
        </p>
      </div> */}
      <div className="container flex flex-col items-center px-5 mx-auto md:flex-row md:items-center">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 md:pr-6 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-xl font-semibold text-gray-900 title-font sm:text-5xl ">
            Welcome your audience
          </h1>
          <p className="mb-8 leading-relaxed">
            As soon as someone enters your page, tell them a quick nice hello
            and make them feel appreciated. You can also introduce yourself. :)
          </p>
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Builds trust
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Establishes a personal connection between you and your users
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Makes your site stand out amongst competition
            </a>
            <a></a>
            <a></a>
          </nav>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-2/5 md:w-1/2"></div>
      </div>
      <div className="container flex flex-col flex-col-reverse items-center px-5 pt-24 mx-auto md:flex-row md:items-start">
        <div className="w-5/6 lg:max-w-lg lg:w-2/5 md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/expl_prod_serv.svg"
          />
        </div>
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 md:pl-6 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-xl font-semibold text-gray-900 title-font sm:text-5xl ">
            Explain your product or service
          </h1>
          <p className="mb-8 leading-relaxed">
            Sometimes a good copy just isn't enough to make people understand
            what it is you do. Instead, simply TELL them what you're all about -
            in your own words, using your own voice.
          </p>
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Creates trust
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Increases conversions
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Decreases churn rate
            </a>
            <a></a>
            <a></a>
          </nav>
        </div>
      </div>
      <div className="container flex flex-col items-center px-5 pt-24 mx-auto md:flex-row md:items-center">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 md:pr-6 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-xl font-semibold text-gray-900 title-font sm:text-5xl ">
            Use vocal CTA's
          </h1>
          <p className="mb-8 leading-relaxed">
            Written CTA's were yesterday. There's something cooler now and
            that's a spoken CTA. Don't just write, talk!
          </p>
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Increases conversion rate
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Builds a feeling of urgency for the user
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              You can use your tone of voice to trigger fomo in your user
            </a>
            <a></a>
            <a></a>
          </nav>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-2/5 md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/vocal_cts_1.svg"
          />
          <img
            className="object-cover object-center mx-auto rounded"
            alt="hero"
            src="/vocal_cts_2.svg"
          />
        </div>
      </div>
      <div className="container flex flex-col flex-col-reverse items-center px-5 pt-24 mx-auto md:flex-row md:items-center">
        <div className="w-5/6 lg:max-w-lg lg:w-2/5 md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/vocal_cts_3.svg"
          />
        </div>
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 md:pl-6 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-xl font-semibold text-gray-900 title-font sm:text-5xl ">
            Make your website accessible.
          </h1>
          <p className="mb-8 leading-relaxed">
            Use your voice to explain your written content to your audience.
            Provide everyone a fair chance understanding your concepts while not
            missing out on the personal experience.
          </p>
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Creates trust
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Increases conversions
            </a>
            <a>
              <span className="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
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
              Decreases churn rate
            </a>
            <a></a>
            <a></a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Usecases;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["voicy-momina"]: any;
    }
  }
}
