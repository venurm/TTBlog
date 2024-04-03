import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative">
          <nav className="flex justify-between border-b navcustombg">
            <div className="px-12 py-2 flex w-full items-center">
              {/* <a className="hidden xl:block mr-16" href='javascript:;'>
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="black" />
                  <path
                    d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z"
                    fill="black"
                  />
                  <path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="black" />
                </svg>
              </a> */}
              <ul className="hidden xl:flex font-semibold font-heading">
                <li className="mr-12">
                  <a className="hover:text-gray-600" href="/products/men">
                    MEN
                  </a>
                </li>
                <li className="mr-12">
                  <a className="hover:text-gray-600" href="/products/women">
                    WOMEN
                  </a>
                </li>
                <li className="mr-12">
                  <a className="hover:text-gray-600" href="/products/kids">
                    KIDS
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="hover:text-gray-600"
                    href="/products/couple-tshirts-collection"
                  >
                    COUPLE COLLECTION
                  </a>
                </li>
                {/* <li className="mr-12">
                  <a className="hover:text-gray-600" href="/products">
                    Apparels
                  </a>
                </li> */}
                <li>
                  <a
                    className="hover:text-gray-600"
                    href="/products/politicalshirts"
                  >
                    POLITICAL SHIRTS
                  </a>
                </li>
              </ul>
              <a
                className="flex-shrink-0 xl:mx-auto text-3xl font-bold font-heading"
                href="/"
              >
                <img
                  className="h-16"
                  src="yofte-assets/logos/tamiltshirts.webp"
                  alt=""
                  width="auto"
                />
              </a>
              {/* <div className="hidden xl:inline-block mr-14">
                <input
                  className="py-5 px-8 w-full placeholder-gray-400 text-xs uppercase font-semibold font-heading bg-gray-50 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="text"
                  placeholder="Search"
                />
              </div> */}
              <div className="hidden xl:flex items-center">
                <a className="mr-10 hover:text-gray-600" href="#">
                  <svg
                    width={23}
                    height={20}
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="flex items-center hover:text-gray-600"
                  href="/cart"
                >
                  <svg
                    className="mr-3"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{ padding: "3px" }}
                    className="inline-block w-6 h-6 text-center text-white bg-orange-300  hover:bg-orange-400 rounded-full font-heading"
                  >
                    3
                  </span>
                </a>
              </div>
            </div>
            <a
              className="hidden xl:flex items-center px-12 border-l font-semibold font-heading hover:text-gray-600"
              href="/signin"
            >
              <svg
                className="mr-3"
                width={32}
                height={31}
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>SIGN&nbsp;IN</span>
            </a>
            <a
              className="xl:hidden flex mr-6 items-center text-gray-900"
              href={() => {
                return false;
              }}
            >
              <svg
                className="mr-2"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{ padding: "3px" }}
                className="inline-block w-6 h-6 text-center text-white bg-orange-300  hover:bg-orange-400 rounded-full font-heading"
              >
                {getcartCount()}
              </span>
            </a>
            <a
              className="navbar-burger self-center mr-12 xl:hidden"
              href={() => {
                return false;
              }}
            >
              <svg
                width={20}
                height={12}
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                  fill="#8594A5"
                />
              </svg>
            </a>
          </nav>
          <div className="relative container mx-auto px-4">
            <img
              className="absolute bottom-0 inset-x-0 w-full h-80 -mb-16 lg:mb-0 md:h-full object-cover"
              src="yofte-assets/images/women.webp"
              alt=""
            />
            <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col items-center">
              <span className="mb-5 font-bold font-heading">01</span>
              <div className="mb-5 h-16 w-px bg-gray-100" />
              <button className="mb-5">
                <img src="yofte-assets/elements/circle.svg" alt="" />
              </button>
              <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full" />
              <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full" />
              <div className="h-16 w-px bg-gray-100" />
            </div>
            <div className="relative flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-32 lg:pb-64">
                <div className="max-w-md">
                  <h2 className="mb-8 text-5xl lg:text-6xl font-semibold font-heading">
                    Get 10% off site-wide when you spend $30 with code: new
                  </h2>
                  <p className="mb-20 text-lg text-gray-600">
                    Discover more products and inspiration.
                  </p>
                  <a
                    className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                    href={() => {
                      return false;
                    }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-100 py-4 testing-1">
            <div className="container mx-auto px-4">
              <div className="flex lg:-mt-52 mb-20 flex-wrap justify-center">
                <div
                  className="relative h-64 w-full lg:w-96 mb-6 lg:mb-0 lg:mr-6 bg-no-repeat bg-cover bg-right"
                  style={{
                    backgroundImage:
                      'url("yofte-assets/images/placeholder-snapshot.webp")',
                  }}
                >
                  <a
                    className="absolute inset-0 flex items-end"
                    href={() => {
                      return false;
                    }}
                  >
                    <div className="pl-12 pb-12">
                      <h3 className="text-3xl font-bold font-heading text-white">
                        LIFE Bottle 2.0
                      </h3>
                      <p className="text-xl text-white font-bold font-heading">
                        <span>$10.30</span>
                        <span className="text-sm font-normal line-through">
                          11.99
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  className="relative h-64 w-full lg:w-96 bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("yofte-assets/images/placeholder-playing-tennis.webp")',
                  }}
                >
                  <a
                    className="absolute inset-0 flex items-end"
                    href={() => {
                      return false;
                    }}
                  >
                    <div className="pl-12 pb-12">
                      <h3 className="text-3xl font-bold font-heading text-white">
                        Bicycle S20
                      </h3>
                      <p className="text-xl text-white font-bold font-heading">
                        <span>$10.30</span>
                        <span className="text-sm font-normal line-through">
                          11.99
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center -mb-12">
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/exxon.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/ea-sports.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/eurosport.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/nike.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/aol.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/north-face.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold font-heading" href="#">
                  <img
                    className="h-10"
                    src="yofte-assets/logos/tamiltshirts.webp"
                    alt=""
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-2 w-2 text-gray-500 cursor-pointer"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex mb-8 justify-between">
                <a
                  className="inline-flex items-center font-semibold font-heading"
                  href="#"
                >
                  <svg
                    className="mr-3"
                    width={32}
                    height={31}
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>SIGN&nbsp;IN</span>
                </a>
                <div className="flex items-center">
                  <a
                    className="mr-10"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={23}
                      height={20}
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="flex items-center"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      className="mr-3"
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{ padding: "3px" }}
                      className="inline-block w-6 h-6 text-center text-white bg-orange-300  hover:bg-orange-400 rounded-full font-heading"
                    >
                      3
                    </span>
                  </a>
                </div>
              </div>
              <input
                className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                type="search"
                placeholder="Search"
              />
              <ul className="text-3xl font-bold font-heading">
                <li className="mb-8">
                  <a href="/products">Category</a>
                </li>
                <li className="mb-8">
                  <a
                    href={() => {
                      return false;
                    }}
                  >
                    Collection
                  </a>
                </li>
                <li className="mb-8">
                  <a
                    href={() => {
                      return false;
                    }}
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    href={() => {
                      return false;
                    }}
                  >
                    Brand
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
              Discover our products
            </h2>
            <div className="flex flex-wrap -mx-3 mb-24">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
                <div className="p-6 bg-gray-50">
                  <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                    -15%
                  </span>
                  <a className="block px-6 mt-6 mb-2" href="/p/">
                    <img
                      className="mb-5 mx-auto h-56 w-full object-contain"
                      src="yofte-assets/images/waterbottle.webp"
                      alt=""
                    />
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      BRILE water filter
                    </h3>
                    <p className="text-lg font-bold font-heading text-blue-500">
                      <span>$29.89</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $33.69
                      </span>
                    </p>
                  </a>
                  <a
                    className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={5} width={2} height={12} fill="#161616" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
                <div className="p-6 bg-gray-50">
                  <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                    -15%
                  </span>
                  <a className="block px-6 mt-6 mb-2" href="/p/">
                    <img
                      className="mb-5 mx-auto h-56 w-full object-contain"
                      src="yofte-assets/images/cycle.webp"
                      alt=""
                    />
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Bicycle S20
                    </h3>
                    <p className="text-lg font-bold font-heading text-blue-500">
                      <span>$14.30</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $15.90
                      </span>
                    </p>
                  </a>
                  <a
                    className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={5} width={2} height={12} fill="#161616" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0">
                <div className="p-6 bg-gray-50">
                  <span className="px-2 py-1" />
                  <a className="block px-6 mt-6 mb-2" href="/p/">
                    <img
                      className="mb-5 mx-auto h-56 w-full object-contain"
                      src="yofte-assets/images/basketball.webp"
                      alt=""
                    />
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Nike basketball ball
                    </h3>
                    <p className="text-lg font-bold font-heading text-blue-500">
                      <span>$34.89</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $33.69
                      </span>
                    </p>
                  </a>
                  <a
                    className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={5} width={2} height={12} fill="#161616" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3">
                <div className="p-6 bg-gray-50">
                  <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                    NEW
                  </span>
                  <a className="block px-6 mt-6 mb-2" href="/p/">
                    <img
                      className="mb-5 mx-auto h-56 w-full object-contain"
                      src="yofte-assets/images/skateboard.webp"
                      alt=""
                    />
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Kiteboard WH-004
                    </h3>
                    <p className="text-lg font-bold font-heading text-blue-500">
                      <span>$199.90</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $33.69
                      </span>
                    </p>
                  </a>
                  <a
                    className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={5} width={2} height={12} fill="#161616" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
                href={() => {
                  return false;
                }}
              >
                Show More
              </a>
            </div>
          </div>
        </section>
        <section className="relative py-4 testing-1 lg:pt-32 bg-blue-800 overflow-x-hidden">
          <img
            className="hidden md:block absolute top-0 left-0"
            src="yofte-assets/elements/white-line.svg"
            alt=""
          />
          <img
            className="absolute top-50 left-0 mt-64"
            src="yofte-assets/elements/orange-line.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 w-72"
            src="yofte-assets/elements/violet-line.svg"
            alt=""
          />
          <div className="relative container mx-auto px-4">
            <h2 className="mb-16 text-4xl md:text-5xl text-white font-bold font-heading">
              The Most Popular
            </h2>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0">
                <a className="block mb-10" href="">
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 ml-6 mb-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                      -15%
                    </span>
                    <img
                      className="w-full h-96 object-cover"
                      src="yofte-assets/images/placeholder-playing-tennis.webp"
                      alt=""
                    />
                  </div>
                  <div className="mt-12">
                    <div className="mb-2">
                      <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                        Tennis racket Sanks 2
                      </h3>
                      <p className="text-xl font-bold font-heading text-white">
                        <span>$295.30</span>
                        <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                          $330.90
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
              <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0">
                <a className="block mb-10" href="#">
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 ml-6 mb-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                      -15%
                    </span>
                    <img
                      className="w-full h-96 object-cover"
                      src="yofte-assets/images/product-bottle.webp"
                      alt=""
                    />
                  </div>
                  <div className="mt-12">
                    <div className="mb-2">
                      <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                        LIFE Bottle (2)
                      </h3>
                      <p className="text-xl font-bold font-heading text-white">
                        <span>$32.30</span>
                        <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                          $49.90
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
              <div className="w-full lg:w-1/3 px-3">
                <a className="block mb-10" href="#">
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 ml-6 mb-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                      -15%
                    </span>
                    <img
                      className="w-full h-96 object-cover"
                      src="yofte-assets/images/placeholder-surfing-blue.webp"
                      alt=""
                    />
                  </div>
                  <div className="mt-12">
                    <div className="mb-2">
                      <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                        VONeon Board Surfing
                      </h3>
                      <p className="text-xl font-bold font-heading text-white">
                        <span>$295.30</span>
                        <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                          $330.90
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                  href="#"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-4 testing-1 md:pt-32 bg-blue-800 overflow-x-hidden">
          <img
            className="absolute h-24 md:h-auto top-0 left-0 right-0"
            src="yofte-assets/elements/line-top.svg"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <h2 className="mb-10 xl:mb-20 text-5xl text-white font-bold font-heading">
              What Customers Say
            </h2>
            <div className="flex xl:hidden items-center mb-20">
              <a
                className="flex items-center justify-center w-12 h-12 mr-5 bg-orange-300 hover:bg-orange-400 rounded-md"
                href={() => {
                  return false;
                }}
              >
                <svg
                  width={8}
                  height={12}
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                className="flex items-center justify-center w-12 h-12 bg-blue-300 hover:bg-blue-400 rounded-md"
                href={() => {
                  return false;
                }}
              >
                <svg
                  width={8}
                  height={12}
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <a
                className="hidden xl:flex absolute top-1/2 left-0 -ml-32 -mt-12 transform translate-y-1/2 items-center justify-center w-12 h-12 bg-orange-300 hover:bg-orange-400 rounded-md"
                href={() => {
                  return false;
                }}
              >
                <svg
                  width={8}
                  height={12}
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                className="hidden xl:flex absolute top-1/2 right-0 -mr-32 -mt-12 transform translate-y-1/2 items-center justify-center w-12 h-12 bg-blue-300 hover:bg-blue-400 rounded-md"
                href={() => {
                  return false;
                }}
              >
                <svg
                  width={8}
                  height={12}
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div className="absolute inset-0 bg-blue-200 my-8 -ml-6 -mr-6" />
              <div className="relative mx-auto mb-20 py-12 md:py-28 bg-blue-300">
                <img
                  className="w-32 h-32 mb-10 mx-auto rounded-full"
                  src="yofte-assets/images/placeholder-portrait.webp"
                  alt=""
                />
                <div className="relative max-w-2xl px-4 mx-auto">
                  <img
                    className="hidden md:block absolute top-0 left-0"
                    src="yofte-assets/elements/quote.svg"
                    alt=""
                  />
                  <img
                    className="hidden md:block absolute top-0 right-0"
                    src="yofte-assets/elements/quote.svg"
                    alt=""
                  />
                  <div className="max-w-md mx-auto px-4">
                    <h3 className="mb-16 text-2xl font-bold font-heading text-white">
                      Tonight I had interdum at ante porta, eleifend feugiat
                      nunc. In semper euismod mi a accumsan. Thaaank you! 👏💥
                    </h3>
                    <p className="text-gray-50">Alice Kenowski, NYC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                href={() => {
                  return false;
                }}
              >
                Show More
              </a>
            </div>
          </div>
        </section>
        <section className="relative overflow-x-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
                <div className="py-4 testing-1 text-center">
                  <a
                    className="inline-block mb-14 text-3xl font-bold font-heading"
                    href={() => {
                      return false;
                    }}
                  >
                    <img
                      className="h-10"
                      src="yofte-assets/logos/tamiltshirts.webp"
                      alt=""
                      width="auto"
                    />
                  </a>
                  <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">
                    Signing up with social is super quick
                  </h3>
                  <p className="mb-10">Please, do not hesitate</p>
                  <form action="">
                    <input
                      className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="text"
                      placeholder="contact@tamiltshirts.in"
                    />
                    <input
                      className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="password"
                      placeholder="Password"
                    />
                    <input
                      className="w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="password"
                      placeholder="Repeat password"
                    />
                    <label className="flex" htmlFor="">
                      <input className="mr-4 mt-1" type="checkbox" />
                      <span className="text-sm">
                        By singning up, you agree to our Terms, Data Policy and
                        Cookies.
                      </span>
                    </label>
                    <button className="mt-12 md:mt-16 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                      JOIN yofte
                    </button>
                  </form>
                </div>
                <img
                  className="lg:hidden h-96 w-full object-cover"
                  src="yofte-assets/images/placeholder-sign.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                'url("yofte-assets/images/placeholder-sign.webp")',
            }}
          />
        </section>
        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0">
                <h2 className="text-5xl font-bold font-heading">
                  <span>Found 125 results for</span>
                  <a
                    className="relative text-blue-300 underline"
                    href={() => {
                      return false;
                    }}
                  >
                    Sports
                  </a>
                </h2>
              </div>
              <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
                <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
                  <select
                    className="pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    name=""
                    id=""
                  >
                    <option value={1}>Sort by newest</option>
                    <option value={2}>Sort by price</option>
                    <option value={3}>Sort by most popular</option>
                  </select>
                </div>
                <a
                  className="inline-block mr-3 h-full p-4 bg-white rounded-md border"
                  href="#"
                >
                  <svg
                    width={20}
                    height={24}
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={4} height={4} rx={2} fill="#2B51C6" />
                    <rect x={8} width={4} height={4} rx={2} fill="#2B51C6" />
                    <rect x={16} width={4} height={4} rx={2} fill="#2B51C6" />
                    <rect y={10} width={4} height={4} rx={2} fill="#2B51C6" />
                    <rect
                      x={8}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#2B51C6"
                    />
                    <rect
                      x={16}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#2B51C6"
                    />
                    <rect y={20} width={4} height={4} rx={2} fill="#2B51C6" />
                    <rect
                      x={8}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#2B51C6"
                    />
                    <rect
                      x={16}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#2B51C6"
                    />
                  </svg>
                </a>
                <a
                  className="inline-block h-full p-4 hover:bg-white border rounded-md group"
                  href="#"
                >
                  <svg
                    className="text-gray-200 group-hover:text-blue-300"
                    width={28}
                    height={24}
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={4} height={4} rx={2} fill="currentColor" />
                    <rect
                      x={8}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={16}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={24}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={8}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={16}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={24}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={8}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={16}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                    <rect
                      x={24}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-24">
              <div className="w-full lg:hidden px-3">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-2 text-center bg-gray-50">
                      <a className="font-bold font-heading" href="/products">
                        Category
                      </a>
                      <ul className="hidden text-left mt-6">
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            New in
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Activewear
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Hoodies &amp; Sweatshirts
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Jackets
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Multipacks
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Bags
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Sports
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Gifts
                          </a>
                        </li>
                        <li>
                          <a
                            href={() => {
                              return false;
                            }}
                          >
                            Notes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-2 text-center bg-gray-50">
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Colors
                      </a>
                      <div className="hidden mt-6 flex flex-wrap">
                        <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                          <div className="rounded-full bg-blue-300 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-orange-300 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-gray-900 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-red-300 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-green-300 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-pink-300 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-yellow-300 w-5 h-5" />
                        </button>
                        <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                          <div className="rounded-full bg-gray-100 w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Price
                      </a>
                      <div className="hidden mt-6">
                        <input
                          className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer"
                          type="range"
                          min={1}
                          max={100}
                          defaultValue={50}
                        />
                        <div className="flex justify-between">
                          <span className="inline-block text-lg font-bold font-heading text-blue-300">
                            $0
                          </span>
                          <span className="inline-block text-lg font-bold font-heading text-blue-300">
                            $289
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Size
                      </a>
                      <div className="hidden mt-6 flex flex-wrap -mx-2 -mb-2">
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          36
                        </button>
                        <button className="relative mb-2 mr-1 w-16 border rounded-md">
                          37
                          <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300" />
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          38
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          39
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          40
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          41
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          42
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          43
                        </button>
                        <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                          44
                        </button>
                      </div>
                      <div className="hidden mt-4 text-right">
                        <a
                          className="inline-flex underline text-blue-300 hover:text-blue-400"
                          href={() => {
                            return false;
                          }}
                        >
                          <span className="mr-2">Show all</span>
                          <svg
                            width={14}
                            height={27}
                            viewBox="0 0 14 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                              fill="#3C60D9"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Location
                      </a>
                      <div className="hidden mt-6">
                        <label className="flex mb-3 items-center text-lg">
                          <input type="checkbox" />
                          <span className="ml-2">Standard</span>
                        </label>
                        <label className="flex items-center text-lg">
                          <input type="checkbox" />
                          <span className="ml-2">Next day (yes!)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Location
                      </a>
                      <input
                        className="hidden mt-6 w-full px-8 py-4 bg-white border rounded-md"
                        type="serach"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block w-1/4 px-3">
                <div className="mb-6 py-10 px-12 bg-gray-50">
                  <h3 className="mb-8 text-2xl font-bold font-heading">
                    Category
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        New in
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Activewear
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Hoodies &amp; Sweatshirts
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Jackets
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Multipacks
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Bags
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Sports
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Gifts
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-lg"
                        href={() => {
                          return false;
                        }}
                      >
                        Notes
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mb-6 py-10 px-12 bg-gray-50">
                  <h3 className="mb-8 text-2xl font-bold font-heading">
                    Colors
                  </h3>
                  <div className="flex flex-wrap">
                    <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                      <div className="rounded-full bg-blue-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-orange-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-gray-900 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-red-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-green-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-pink-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-yellow-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-gray-100 w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="mb-6 py-10 px-12 bg-gray-50">
                  <h3 className="mb-8 text-2xl font-bold font-heading">
                    Price
                  </h3>
                  <div>
                    <input
                      className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer"
                      type="range"
                      min={1}
                      max={100}
                      defaultValue={50}
                    />
                    <div className="flex justify-between">
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $0
                      </span>
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $289
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 py-12 pl-12 pr-6 bg-gray-50">
                  <h3 className="mb-8 text-2xl font-bold font-heading">Size</h3>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      36
                    </button>
                    <button className="relative mb-2 mr-1 w-16 border rounded-md">
                      37
                      <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300" />
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      38
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      39
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      40
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      41
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      42
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      43
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      44
                    </button>
                  </div>
                  <div className="mt-4 text-right">
                    <a
                      className="inline-flex underline text-blue-300 hover:text-blue-400"
                      href={() => {
                        return false;
                      }}
                    >
                      <span className="mr-2">Show all</span>
                      <svg
                        width={14}
                        height={27}
                        viewBox="0 0 14 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                          fill="#3C60D9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mb-6 py-10 px-12 bg-gray-50">
                  <h3 className="mb-6 text-2xl font-bold font-heading">
                    Location
                  </h3>
                  <label className="flex mb-3 items-center text-lg">
                    <input type="checkbox" />
                    <span className="ml-2">Standard</span>
                  </label>
                  <label className="flex items-center text-lg">
                    <input type="checkbox" />
                    <span className="ml-2">Next day (yes!)</span>
                  </label>
                </div>
                <div className="mb-6 py-10 px-12 bg-gray-50">
                  <h3 className="mb-6 text-2xl font-bold font-heading">
                    Location
                  </h3>
                  <input
                    className="w-full px-8 py-4 bg-white border rounded-md"
                    type="serach"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="w-full lg:w-3/4 px-3">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/waterbottle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          BRILE water filter
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$29.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/cycle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Bicycle S20
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $15.90
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1" />
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/basketball.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Nike basketball ball
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$34.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                        NEW
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/skateboard.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Kiteboard WH-004
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$19.90</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -10%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/backpack.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Backpack Travel
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$21.99</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $24.00
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/cycle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Bicycle S20
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $15.90
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/waterbottle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          BRILE water filter
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$29.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/cycle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Bicycle S20
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $15.90
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1" />
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/basketball.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Nike basketball ball
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$34.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                        NEW
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/skateboard.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Kiteboard WH-004
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$19.90</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -10%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/backpack.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Backpack Travel
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$21.99</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $24.00
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/cycle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Bicycle S20
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $15.90
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/waterbottle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          BRILE water filter
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$29.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                        -15%
                      </span>
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/cycle.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Bicycle S20
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $15.90
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div className="p-6 bg-gray-50">
                      <span className="px-2 py-1" />
                      <a className="block px-6 mt-6 mb-2" href="/p/">
                        <img
                          className="mb-5 mx-auto h-56 w-full object-contain"
                          src="yofte-assets/images/basketball.webp"
                          alt=""
                        />
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          Nike basketball ball
                        </h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$34.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                            $33.69
                          </span>
                        </p>
                      </a>
                      <a
                        className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={5} width={2} height={12} fill="#161616" />
                          <rect
                            x={12}
                            y={5}
                            width={2}
                            height={12}
                            transform="rotate(90 12 5)"
                            fill="#161616"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
                href={() => {
                  return false;
                }}
              >
                Show More
              </a>
            </div>
          </div>
        </section>
        <section className="py-4 testing-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-24">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div className="relative mb-10" style={{ height: 564 }}>
                  <a
                    className="absolute top-1/2 left-0 ml-8 transform translate-1/2"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={10}
                      height={18}
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                        fill="#1F40FF"
                      />
                    </svg>
                  </a>
                  <img
                    className="object-cover w-full h-full"
                    src="yofte-assets/images/product-bottle.webp"
                    alt=""
                  />
                  <a
                    className="absolute top-1/2 right-0 mr-8 transform translate-1/2"
                    href={() => {
                      return false;
                    }}
                  >
                    <svg
                      width={10}
                      height={18}
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                        fill="#1F40FF"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 sm:w-1/4 p-2">
                    <a
                      className="block border border-blue-300"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src="yofte-assets/images/product-bottle.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 sm:w-1/4 p-2">
                    <a
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src="yofte-assets/images/product-bottle2.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 sm:w-1/4 p-2">
                    <a
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src="yofte-assets/images/product-bottle3.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 sm:w-1/4 p-2">
                    <a
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src="yofte-assets/images/product-bottle4.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="lg:pl-20">
                  <div className="mb-10 pb-10 border-b">
                    <span className="text-gray-500">Brille</span>
                    <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading">
                      BRILE water filter carafe
                    </h2>
                    <div className="mb-8">
                      <button>
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button>
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button>
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button>
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button>
                        <img src="yofte-assets/elements/star-gray.svg" alt="" />
                      </button>
                    </div>
                    <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
                      <span>$29.99</span>
                      <span className="font-normal text-base text-gray-400 line-through">
                        $33.69
                      </span>
                    </p>
                    <p className="max-w-md text-gray-500">
                      Maecenas commodo libero ut molestie dictum. Morbi placerat
                      eros id porttitor sagittis.
                    </p>
                  </div>
                  <div className="flex mb-12">
                    <div className="mr-6">
                      <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
                        QTY
                      </span>
                      <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                        <button className="py-2 hover:text-gray-700">
                          <svg
                            width={12}
                            height={2}
                            viewBox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x={12}
                                width={2}
                                height={12}
                                transform="rotate(90 12 0)"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </button>
                        <input
                          className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                          type="number"
                          placeholder={1}
                        />
                        <button className="py-2 hover:text-gray-700">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x={5}
                                width={2}
                                height={12}
                                fill="currentColor"
                              />
                              <rect
                                x={12}
                                y={5}
                                width={2}
                                height={12}
                                transform="rotate(90 12 5)"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
                        Size
                      </span>
                      <select
                        className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                        name=""
                        id=""
                      >
                        <option value={1}>Medium</option>
                        <option value={2}>Small</option>
                        <option value={3}>Large</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-4 mb-14 items-center">
                    <div className="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                      <a
                        className="block bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                    <div className="w-full xl:w-1/3 px-4">
                      <a
                        className="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          className="w-6 h-6"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                        href={() => {
                          return false;
                        }}
                      >
                        <svg
                          className="w-6 h-6"
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-8 text-gray-500 font-bold font-heading uppercase">
                      SHARE IT
                    </span>
                    <a
                      className="mr-1 w-8 h-8"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        src="yofte-assets/buttons/facebook-circle.svg"
                        alt=""
                      />
                    </a>
                    <a
                      className="mr-1 w-8 h-8"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        src="yofte-assets/buttons/instagram-circle.svg"
                        alt=""
                      />
                    </a>
                    <a
                      className="w-8 h-8"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        src="yofte-assets/buttons/twitter-circle.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap mb-16 border-b-2">
                <li className="w-1/2 md:w-auto">
                  <a
                    className="inline-block py-6 px-10 bg-white text-gray-500 font-bold font-heading shadow-2xl"
                    href={() => {
                      return false;
                    }}
                  >
                    Description
                  </a>
                </li>
                <li className="w-1/2 md:w-auto">
                  <a
                    className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                    href={() => {
                      return false;
                    }}
                  >
                    Customer reviews
                  </a>
                </li>
                <li className="w-1/2 md:w-auto">
                  <a
                    className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                    href={() => {
                      return false;
                    }}
                  >
                    Shipping &amp; returns
                  </a>
                </li>
                <li className="w-1/2 md:w-auto">
                  <a
                    className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                    href={() => {
                      return false;
                    }}
                  >
                    Brand
                  </a>
                </li>
              </ul>
              <h3 className="mb-8 text-3xl font-bold font-heading text-blue-300">
                Summer collection and laoreet get
              </h3>
              <p className="max-w-2xl text-gray-500">
                I had interdum at ante porta, eleifend feugiat nunc. In semper
                euismod mi a accums lorem sad. Morbi at auctor nibh. Aliquam
                tincidunt placerat mollis. Lorem euismod dignissim, felis tortor
                ollis eros, non ultricies turpis.
              </p>
            </div>
          </div>
        </section>
        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <div className="p-8 lg:p-20 bg-white">
              <h2 className="mb-20 text-5xl font-bold font-heading">
                Your cart
              </h2>
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
                  <div className="hidden lg:flex w-full">
                    <div className="w-full lg:w-3/6">
                      <h4 className="mb-6 font-bold font-heading text-gray-500">
                        Description
                      </h4>
                    </div>
                    <div className="w-full lg:w-1/6">
                      <h4 className="mb-6 font-bold font-heading text-gray-500">
                        Price
                      </h4>
                    </div>
                    <div className="w-full lg:w-1/6 text-center">
                      <h4 className="mb-6 font-bold font-heading text-gray-500">
                        Quantity
                      </h4>
                    </div>
                    <div className="w-full lg:w-1/6 text-right">
                      <h4 className="mb-6 font-bold font-heading text-gray-500">
                        Subtotal
                      </h4>
                    </div>
                  </div>
                  <div className="mb-12 py-6 border-t border-b border-gray-200">
                    <div className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
                      <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                        <div className="flex -mx-4 flex-wrap items-center">
                          <div className="w-full md:w-1/3 px-4 mb-3">
                            <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                              <img
                                className="h-full object-contain"
                                src="yofte-assets/images/waterbottle.webp"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-2/3 px-4">
                            <h3 className="mb-2 text-xl font-bold font-heading">
                              BRILE water filter carafe
                            </h3>
                            <p className="text-gray-500">
                              Maecenas 0.7 commodo sit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:block lg:w-2/12 px-4">
                        <p className="text-lg text-blue-500 font-bold font-heading">
                          $29.89
                        </p>
                        <span className="text-xs text-gray-500 line-through">
                          $33.69
                        </span>
                      </div>
                      <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                        <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                          <button className="py-2 hover:text-gray-700">
                            <svg
                              width={12}
                              height={2}
                              viewBox="0 0 12 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.35">
                                <rect
                                  x={12}
                                  width={2}
                                  height={12}
                                  transform="rotate(90 12 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                          </button>
                          <input
                            className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                            type="number"
                            placeholder={1}
                          />
                          <button className="py-2 hover:text-gray-700">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.35">
                                <rect
                                  x={5}
                                  width={2}
                                  height={12}
                                  fill="currentColor"
                                />
                                <rect
                                  x={12}
                                  y={5}
                                  width={2}
                                  height={12}
                                  transform="rotate(90 12 5)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                        <p className="text-lg text-blue-500 font-bold font-heading">
                          $29.89
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center -mx-4">
                      <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                        <div className="flex -mx-4 flex-wrap items-center">
                          <div className="w-full md:w-1/3 px-4 mb-3">
                            <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                              <img
                                className="h-full object-contain"
                                src="yofte-assets/images/basketball.webp"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full md:w-2/3 px-4">
                            <h3 className="mb-2 text-xl font-bold font-heading">
                              Nike basketball ball
                            </h3>
                            <p className="text-gray-500">Lorem ipsum dolor L</p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:block lg:w-2/12 px-4">
                        <p className="text-lg text-blue-500 font-bold font-heading">
                          $29.89
                        </p>
                        <span className="text-xs text-gray-500 line-through">
                          $33.69
                        </span>
                      </div>
                      <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                        <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                          <button className="py-2 hover:text-gray-700">
                            <svg
                              width={12}
                              height={2}
                              viewBox="0 0 12 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.35">
                                <rect
                                  x={12}
                                  width={2}
                                  height={12}
                                  transform="rotate(90 12 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                          </button>
                          <input
                            className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                            type="number"
                            placeholder={1}
                          />
                          <button className="py-2 hover:text-gray-700">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.35">
                                <rect
                                  x={5}
                                  width={2}
                                  height={12}
                                  fill="currentColor"
                                />
                                <rect
                                  x={12}
                                  y={5}
                                  width={2}
                                  height={12}
                                  transform="rotate(90 12 5)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                        <p className="text-lg text-blue-500 font-bold font-heading">
                          $29.89
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center lg:-mb-4">
                    <span className="mr-12 mb-4 font-medium">
                      Apply discount code:
                    </span>
                    <input
                      className="flex-1 md:flex-none mr-6 sm:mr-0 md:mr-6 mb-4 px-8 py-4 placeholder-gray-800 font-bold font-heading border rounded-md"
                      type="text"
                      placeholder="SUMMER30X"
                    />
                    <a
                      className="flex-1 md:flex-none inline-block mb-4 px-8 py-4 text-center text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                      href={() => {
                        return false;
                      }}
                    >
                      Apply
                    </a>
                  </div>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                  <div className="p-6 md:p-12 bg-blue-300">
                    <h2 className="mb-6 text-4xl font-bold font-heading text-white">
                      Cart totals
                    </h2>
                    <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                      <span className="text-blue-50">Subtotal</span>
                      <span className="text-xl font-bold font-heading text-white">
                        $89.67
                      </span>
                    </div>
                    <h4 className="mb-2 text-xl font-bold font-heading text-white">
                      Shipping
                    </h4>
                    <div className="flex mb-2 justify-between items-center">
                      <span className="text-blue-50">Next day</span>
                      <span className="text-xl font-bold font-heading text-white">
                        $11.00
                      </span>
                    </div>
                    <div className="flex mb-10 justify-between items-center">
                      <span className="text-blue-50">
                        Shipping to United States
                      </span>
                      <span className="text-xl font-bold font-heading text-white">
                        -
                      </span>
                    </div>
                    <div className="flex mb-10 justify-between items-center">
                      <span className="text-xl font-bold font-heading text-white">
                        Order total
                      </span>
                      <span className="text-xl font-bold font-heading text-white">
                        $100.67
                      </span>
                    </div>
                    <a
                      className="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
                      href={() => {
                        return false;
                      }}
                    >
                      Go to Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-5xl font-bold font-heading">Checkout</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                <div className="mb-2 px-8 lg:px-20 py-12 bg-white">
                  <div className="flex mb-10 items-center">
                    <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-blue-300 text-white">
                      1
                    </span>
                    <h3 className="text-2xl font-bold font-heading">
                      Delivery
                    </h3>
                  </div>
                  <div className="flex flex-wrap -mx-4 mb-10">
                    <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          First name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Last name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-10 mb-10 px-4">
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Company name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-10 px-4">
                      <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-2/5 px-4 mb-10 lg:mb-0">
                          <div>
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Country
                            </label>
                            <select
                              className="block w-full mt-4 py-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md outline-none cursor-pointer"
                              name=""
                              id=""
                            >
                              <option value={1} />
                              <option value={2}>United States</option>
                              <option value={3}>Spain</option>
                              <option value={4}>Poland</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-full lg:w-2/5 px-4 mb-10 lg:mb-0">
                          <div>
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              City
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-1/5 px-4">
                          <label
                            className="font-bold font-heading text-gray-600"
                            htmlFor=""
                          >
                            Zip Code
                          </label>
                          <input
                            className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-10">
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Street address
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                      <div className="mb-10">
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Email address
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="email"
                        />
                      </div>
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Phone
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a className="block mb-2 px-4 md:px-20 py-8 bg-white" href="#">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-white">
                      2
                    </span>
                    <h3 className="text-2xl font-bold font-heading">Payment</h3>
                  </div>
                </a>
                <a className="block mb-2 px-4 md:px-20 py-8 bg-white" href="#">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-orange-300 text-white">
                      3
                    </span>
                    <h3 className="text-2xl font-bold font-heading">Confirm</h3>
                  </div>
                </a>
                <a className="block px-4 md:px-20 py-8 bg-white" href="#">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-pink-300 text-white">
                      4
                    </span>
                    <h3 className="text-2xl font-bold font-heading">
                      Order summary
                    </h3>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="mb-12 p-6 lg:p-12 bg-blue-300">
                  <div className="mb-6 pb-8 border-b border-blue-100">
                    <h2 className="mb-6 text-3xl font-bold font-heading text-white">
                      Order summary
                    </h2>
                    <p className="text-blue-50">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                  </div>
                  <div className="mb-2 py-2 px-8 border rounded-full">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-50">Order subtotal</span>
                      <span className="text-xl font-bold font-heading text-white">
                        $89.67
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 py-2 px-8 border rounded-full">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-50">Shipping</span>
                      <span className="text-xl font-bold font-heading text-white">
                        $11.00
                      </span>
                    </div>
                  </div>
                  <div className="mb-10 py-2 px-8 border rounded-full">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-50">Tax</span>
                      <span className="text-xl font-bold font-heading text-white">
                        $0
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-8 justify-between items-center">
                    <span className="text-xl font-bold font-heading text-white">
                      Total
                    </span>
                    <span className="text-xl font-bold font-heading text-white">
                      $100.67
                    </span>
                  </div>
                  <a
                    className="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
                    href={() => {
                      return false;
                    }}
                  >
                    Go to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-5xl font-bold font-heading">
              Order History
            </h2>
            <p className="mb-14 text-lg text-gray-500">
              Recent Orders dolor sit amet consectutar
            </p>
            <div className="mb-12 py-8 px-8 md:px-20 bg-white">
              <div className="flex flex-wrap mb-8 pb-4 border-b">
                <div className="mr-20">
                  <h3 className="text-gray-600">Order Number</h3>
                  <p className="text-blue-300 font-bold font-heading">
                    XYZ0864395
                  </p>
                </div>
                <div className="mr-auto">
                  <h3 className="text-gray-600">Date</h3>
                  <p className="text-blue-300 font-bold font-heading">
                    June 05, 2021
                  </p>
                </div>
                <a
                  className="inline-flex mt-6 md:mt-0 w-full lg:w-auto justify-center items-center py-4 px-6 border hover:border-gray-500 rounded-md font-bold font-heading"
                  href="#"
                >
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1V0.25C0.585786 0.25 0.25 0.585786 0.25 1L1 1ZM15 19V19.75C15.4142 19.75 15.75 19.4142 15.75 19H15ZM1 19H0.25C0.25 19.4142 0.585786 19.75 1 19.75L1 19ZM10 1L10.5303 0.46967C10.3897 0.329018 10.1989 0.25 10 0.25V1ZM15 6H15.75C15.75 5.80109 15.671 5.61032 15.5303 5.46967L15 6ZM15 18.25H1V19.75H15V18.25ZM1.75 19V1H0.25V19H1.75ZM1 1.75H10V0.25H1V1.75ZM14.25 6V19H15.75V6H14.25ZM9.46967 1.53033L14.4697 6.53033L15.5303 5.46967L10.5303 0.46967L9.46967 1.53033ZM8.25 1V5H9.75V1H8.25ZM11 7.75H15V6.25H11V7.75ZM8.25 5C8.25 6.51878 9.48122 7.75 11 7.75V6.25C10.3096 6.25 9.75 5.69036 9.75 5H8.25Z"
                      fill="black"
                    />
                  </svg>
                  <span className="ml-4">View Invoice</span>
                </a>
              </div>
              <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center justify-center h-72 bg-gray-100">
                    <img
                      className="h-64 object-cover"
                      src="yofte-assets/images/waterbottle.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/6 px-4">
                  <div className="flex mb-16">
                    <div className="mr-auto">
                      <h3 className="text-xl font-bold font-heading">
                        BRILE water filter carafe
                      </h3>
                      <p className="text-gray-500">Maecenas 0.7 commodo sit</p>
                    </div>
                    <span className="text-2xl font-bold font-heading text-blue-300">
                      $29.89
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-10">
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">
                        Ordered on
                      </h4>
                      <p className="text-gray-500">07/17/2021</p>
                    </div>
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">Delivered</h4>
                      <p className="text-gray-500">07/23/2021</p>
                    </div>
                    <div className="w-full lg:w-auto ml-auto px-10">
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center justify-center h-72 bg-gray-100">
                    <img
                      className="h-64 object-cover"
                      src="yofte-assets/images/basketball.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/6 px-4">
                  <div className="flex mb-16">
                    <div className="mr-auto">
                      <h3 className="text-xl font-bold font-heading">
                        NIKE Basketball Ball
                      </h3>
                      <p className="text-gray-500">Lorem ipsum dolor size L</p>
                    </div>
                    <span className="text-2xl font-bold font-heading text-blue-300">
                      $29.89
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-10">
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">
                        Ordered on
                      </h4>
                      <p className="text-gray-500">07/17/2021</p>
                    </div>
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">Delivered</h4>
                      <p className="text-gray-500">07/23/2021</p>
                    </div>
                    <div className="w-full lg:w-auto ml-auto px-10">
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center justify-center h-72 bg-gray-100">
                    <img
                      className="h-64 object-cover"
                      src="yofte-assets/images/backpack.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/6 px-4">
                  <div className="flex mb-16">
                    <div className="mr-auto">
                      <h3 className="text-xl font-bold font-heading">
                        Backpack Travel
                      </h3>
                      <p className="text-gray-500">
                        Maecenas commodo libero ut molestie dictum. Morbi
                        placerat eros id porttitor sagittis.
                      </p>
                    </div>
                    <span className="text-2xl font-bold font-heading text-blue-300">
                      $29.89
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-10">
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">
                        Ordered on
                      </h4>
                      <p className="text-gray-500">07/17/2021</p>
                    </div>
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">Delivered</h4>
                      <p className="text-gray-500">07/23/2021</p>
                    </div>
                    <div className="w-full lg:w-auto ml-auto px-10">
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 px-8 md:px-20 bg-white">
              <div className="flex flex-wrap mb-8 pb-4 border-b">
                <div className="mr-20">
                  <h3 className="text-gray-600">Order Number</h3>
                  <p className="text-blue-300 font-bold font-heading">
                    XYZ0864395
                  </p>
                </div>
                <div className="mr-auto">
                  <h3 className="text-gray-600">Date</h3>
                  <p className="text-blue-300 font-bold font-heading">
                    June 05, 2021
                  </p>
                </div>
                <a
                  className="inline-flex mt-6 md:mt-0 w-full lg:w-auto justify-center items-center py-4 px-6 border hover:border-gray-500 rounded-md font-bold font-heading"
                  href="#"
                >
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1V0.25C0.585786 0.25 0.25 0.585786 0.25 1L1 1ZM15 19V19.75C15.4142 19.75 15.75 19.4142 15.75 19H15ZM1 19H0.25C0.25 19.4142 0.585786 19.75 1 19.75L1 19ZM10 1L10.5303 0.46967C10.3897 0.329018 10.1989 0.25 10 0.25V1ZM15 6H15.75C15.75 5.80109 15.671 5.61032 15.5303 5.46967L15 6ZM15 18.25H1V19.75H15V18.25ZM1.75 19V1H0.25V19H1.75ZM1 1.75H10V0.25H1V1.75ZM14.25 6V19H15.75V6H14.25ZM9.46967 1.53033L14.4697 6.53033L15.5303 5.46967L10.5303 0.46967L9.46967 1.53033ZM8.25 1V5H9.75V1H8.25ZM11 7.75H15V6.25H11V7.75ZM8.25 5C8.25 6.51878 9.48122 7.75 11 7.75V6.25C10.3096 6.25 9.75 5.69036 9.75 5H8.25Z"
                      fill="black"
                    />
                  </svg>
                  <span className="ml-4">View Invoice</span>
                </a>
              </div>
              <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center justify-center h-72 bg-gray-100">
                    <img
                      className="h-64 object-cover"
                      src="yofte-assets/images/waterbottle.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/6 px-4">
                  <div className="flex mb-16">
                    <div className="mr-auto">
                      <h3 className="text-xl font-bold font-heading">
                        BRILE water filter carafe
                      </h3>
                      <p className="text-gray-500">Maecenas 0.7 commodo sit</p>
                    </div>
                    <span className="text-2xl font-bold font-heading text-blue-300">
                      $29.89
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-10">
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">
                        Ordered on
                      </h4>
                      <p className="text-gray-500">07/17/2021</p>
                    </div>
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">Delivered</h4>
                      <p className="text-gray-500">07/23/2021</p>
                    </div>
                    <div className="w-full lg:w-auto ml-auto px-10">
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center justify-center h-72 bg-gray-100">
                    <img
                      className="h-64 object-cover"
                      src="yofte-assets/images/basketball.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/6 px-4">
                  <div className="flex mb-16">
                    <div className="mr-auto">
                      <h3 className="text-xl font-bold font-heading">
                        NIKE Basketball Ball
                      </h3>
                      <p className="text-gray-500">Lorem ipsum dolor size L</p>
                    </div>
                    <span className="text-2xl font-bold font-heading text-blue-300">
                      $29.89
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-10">
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">
                        Ordered on
                      </h4>
                      <p className="text-gray-500">07/17/2021</p>
                    </div>
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">Delivered</h4>
                      <p className="text-gray-500">07/23/2021</p>
                    </div>
                    <div className="w-full lg:w-auto ml-auto px-10">
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center justify-center h-72 bg-gray-100">
                    <img
                      className="h-64 object-cover"
                      src="yofte-assets/images/backpack.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/6 px-4">
                  <div className="flex mb-16">
                    <div className="mr-auto">
                      <h3 className="text-xl font-bold font-heading">
                        Backpack Travel
                      </h3>
                      <p className="text-gray-500">
                        Maecenas commodo libero ut molestie dictum. Morbi
                        placerat eros id porttitor sagittis.
                      </p>
                    </div>
                    <span className="text-2xl font-bold font-heading text-blue-300">
                      $29.89
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-10">
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">
                        Ordered on
                      </h4>
                      <p className="text-gray-500">07/17/2021</p>
                    </div>
                    <div className="w-full lg:w-auto px-10 mb-6 lg:mb-0">
                      <h4 className="mb-6 font-bold font-heading">Delivered</h4>
                      <p className="text-gray-500">07/23/2021</p>
                    </div>
                    <div className="w-full lg:w-auto ml-auto px-10">
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href={() => {
                          return false;
                        }}
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-300 footerStyle" hidden={!showFooter}>
          <div className="container mx-auto px-4">
            <div className="pt-2 flex items-center justify-center">
              <a
                className="inline-block mr-4 text-white text-2xl font-bold font-heading"
                href="/"
              >
                <img
                  className="h-7"
                  src={`/yofte-assets/logos/${lowercasenosp(
                    store
                  )}/logowhite.webp`}
                  alt=""
                  width="auto"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="py-2 bg-blue-300 footerStyle">
          <div className="container mx-auto px-2">
            <div className="flex flex-wrap -mx-4 pb-6 lg:pb-6 border-b border-gray-400">
              <div className="w-full lg:w-3/5 px-4 mb-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                    <h3 className="mb-2 text-xl font-bold font-heading text-white">
                      Information
                    </h3>
                    <ul>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="privacypolicy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="termsandconditions"
                        >
                          Terms And Condtions
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="shippingandrefundpolicy"
                        >
                          Shipping And Refund Policy
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Reward program
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Delivery information
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Paying by invoice
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                    <h3 className="mb-2 text-xl font-bold font-heading text-white">
                      Customer Service
                    </h3>
                    <ul>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Return an order
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Search Terms
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Advanced Search
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Orders and Returns
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          FAQs
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="/storelocation"
                        >
                          Store Location
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="/contactus"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <h3 className="mb-2 text-xl text-white font-bold font-heading">
                      Contact Us
                    </h3>
                    <ul>
                      <li className="mb-2">
                        <h4 className="mb-2 text-gray-50">Mobile</h4>
                        <a
                          className="text-white hover:underline"
                          href={() => {
                            return false;
                          }}
                        >
                          +91 95 517 89459
                        </a>
                      </li>
                      <li className="mb-2">
                        <h4 className="mb-2 text-gray-50">Email</h4>
                        <a
                          className="text-white hover:underline"
                          href={() => {
                            return false;
                          }}
                        >
                          contact@tamiltshirts.com
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 px-4 order-first lg:order-1 mb-2">
                <h3 className="mb-2 text-xl text-white font-bold font-heading">
                  Join our Newsletter
                </h3>
                <p className="mb-2 text-xl text-yellow-500 font-bold font-heading">
                  News, sales:
                </p>
                <div className="mb-2 relative lg:max-w-xl lg:mx-auto bg-white rounded-lg">
                  <div className="relative flex flex-wrap items-center justify-between">
                    <div className="relative flex-1">
                      {/* <span className="absolute top-0 left-0 ml-8 mt-4 font-semibold font-heading text-xs text-gray-400">
                      Drop your e-mail
                    </span> */}
                      <input
                        className="inline-block w-full px-8 placeholder-gray-900 border-0 focus:ring-transparent focus:outline-none rounded-md"
                        type="text"
                        placeholder="Drop your e-mail"
                      />
                    </div>
                    <a
                      className="inline-block w-auto bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-2 px-8 rounded-md uppercase text-center"
                      href={() => {
                        return false;
                      }}
                    >
                      Join
                    </a>
                  </div>
                </div>

              </div>
              <div className="w-full px-4 flex flex-wrap justify-between lg:order-last">
                <div className="w-full md:w-auto mb-4 md:mb-0 flex flex-wrap">
                  <img
                    className="mr-4 mb-2"
                    src="/yofte-assets/brands/visa.svg"
                    alt=""
                  />
                  <img
                    className="mr-4 mb-2"
                    src="/yofte-assets/brands/paypal.svg"
                    alt=""
                  />
                  <img
                    className="mb-2"
                    src="/yofte-assets/brands/mastercard.svg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-auto flex">
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                    href="https://www.facebook.com/tamiltshirts.in/"
                  >
                    <img
                      src="/yofte-assets/buttons/facebook-white-circle.svg"
                      alt=""
                    />
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                    href="https://www.instagram.com/tamiltshirts.in/"
                  >
                    <img
                      src="/yofte-assets/buttons/instagram-circle.svg"
                      alt=""
                    />
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    href={() => {
                      return false;
                    }}
                  >
                    <img
                      src="/yofte-assets/buttons/twitter-circle.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-15   flex items-center justify-center">
              <a
                className="inline-block mr-4 text-white text-2xl font-bold font-heading"
                href="/"
              >
                <img
                  className="h-7"
                  src={`/yofte-assets/logos/${lowercasenosp(
                    store
                  )}/logowhite.webp`}
                  alt=""
                  width="auto"
                />
              </a>
              <p className="inline-block text-sm text-gray-200">
                {footercopyrighttext}
              </p>
            </div>
            <br />
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
