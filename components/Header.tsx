import Link from "next/link";
import * as React from "react";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            href="/"
            className="text-lg font-bold tracking-tighter text-[#704ecd] transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
          >
            Voicl
          </a>
          <button className="rounded-lg text-[#704ecd] md:hidden focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path
                x-show="open"
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-col items-center flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row lg:pl-2">

        <Link href="/">
            <a className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-[#704ecd] focus:outline-none focus:shadow-outline">
            Home
            </a>
          </Link>

        <Link href="/how">
            <a className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-[#704ecd] focus:outline-none focus:shadow-outline">
              How it works
            </a>
          </Link>

          <Link href="/pricing">
            <a className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-[#704ecd] focus:outline-none focus:shadow-outline">
              Pricing
            </a>
          </Link>

          <Link href="/faqs">
            <a className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-[#704ecd] focus:outline-none focus:shadow-outline">
              FAQs
            </a>
          </Link>

          <Link href="/about">
            <a className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-[#704ecd] focus:outline-none focus:shadow-outline">
              About Us
            </a>
          </Link>
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button
              className=" items-center block px-10 py-2.5 text-base font-medium text-center bg-gradient-to-r from-[#a994e8] to-[#886adb] text-white drop-shadow-lg font-bold transition duration-500 ease-in-out transform  shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
          "
            >
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
