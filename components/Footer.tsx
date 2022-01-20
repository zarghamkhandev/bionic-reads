import Link from "next/link";
import * as React from "react";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = ({ children }) => {
  return (
    <footer className="mt-32 bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-5 py-12 lg:py-16 md:px-0 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a
              href="/"
              className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            >
              wickedblocks
            </a>
            <p className="w-1/2 mt-2 text-sm text-gray-500">
              Wicked templates for wicked dev's
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase ">
                  About us
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gelatinous-canoe-27d.notion.site/Terms-Conditions-d419fceee13348009392f080d2eea361"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gelatinous-canoe-27d.notion.site/Privacy-Policy-2517212599ea4ad582e7b3bf4ec12477"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gelatinous-canoe-27d.notion.site/Impressum-73e5c780032f4a22908fba43e157b64c"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      Imprint
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase ">
                  Blog
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/blog/7">
                      <a className="text-sm font-normal text-gray-500 hover:text-gray-900">
                        7 ways to increase your website traffic
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      How to increase your website engagement
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      How to add voicl to your website
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:text-gray-900"
                    >
                      Why voice is simply better
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:justify-end md:grid md:grid-cols-1">
              <div className="w-full mt-12 md:mt-0">
                <div className="mt-8 lg:justify-end xl:mt-0">
                  <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase ">
                    Subscribe to our newsletter
                  </h3>
                  <p className="mt-4 text-sm text-gray-500 lg:ml-auto">
                    Don't miss out on exciting product updates and coupons.
                  </p>
                  <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                    <form
                      method="post"
                      id="revue-form"
                      name="revue-form"
                      target="_blank"
                      className="p-1 mt-4 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
                    >
                      <div className="flex-1 min-w-0 revue-form-group">
                        <label htmlFor="member_email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          placeholder="Enter your email  "
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                        <button
                          type="submit"
                          value="Subscribe"
                          name="member[subscribe]"
                          id="member_submit"
                          className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                        >
                          Notify me
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
