import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchProductsData,
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import Footer from "./footer";
import NavbarMain from "./navbarmain";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  const [categoryListData, setCategoryListData] = useState({});
  const [cartinfoData, setCartInfoData] = useState({
    cartcount: 0,
    cartquantitycount: 0,
    products: [],
    cartprice: 0,
    subtotal: 0,
    shipping: 0,
    ordertotal: 0,
    total: 0,
  });
  const [count, setCount] = useState(1);
  const [productsListData, setProductsListData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("***");
  }, [count]);

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };

  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());
    // handleFetchCategoryData(setFormLoader, setCategoryListData);
    // handleFetchProductsData(setFormLoader, setProductsListData);
    handleGetCartInfoStorageItems(setCartInfoData);
    setCount((count) => (count = count + 1));
  }
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative">
        <NavbarMain storeid={storeid} />
      
          <div className="relative container mx-auto px-4">
            <img
              id="bgimg"
              className="absolute bottom-0 inset-x-0 w-full h-80 -mb-16 lg:mb-0 md:h-full object-cover"
              src="yofte-assets/images/mentamilprinted.png"
              alt=""
            />
            <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col items-center">
              <span className="mb-5 font-bold font-heading">01</span>
              <div className="mb-5 h-16 w-px bg-gray-100" />
              <button className="mb-5">
                <img src="yofte-assets/elements/circle.svg" alt="" />
              </button>
              <button
                className="mb-6 w-1 h-1 bg-blue-500 rounded-full"
                onClick={() => {
                  document.getElementById("bgimg").src =
                    "yofte-assets/images/women.webp";
                }}
              >
                <img src="yofte-assets/elements/circle.svg" alt="" />
              </button>
              <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full" />
              <div className="h-16 w-px bg-gray-100" />
            </div>
            <div className="relative flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-32 lg:pb-64">
                <div>
                  <h2 className="mb-8 text-2xl lg:text-3xl font-heading">
                    Elevate Your Style with Unique
                    <br /> Printed T-Shirts.
                  </h2>
                  <p className="mb-20 text-lg text-gray-600">
                    Discover more products and inspiration.
                  </p>
                  <a
                    className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-2 px-8 rounded-md uppercase transition duration-200"
                    href="/products"
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
                      'url("yofte-assets/images/womanclothing1.jpg")',
                    boxSizing: "border-box",
                    border: "1px solid white",
                    borderRadius: "5%",
                  }}
                >
                  <a
                    className="absolute inset-0 flex items-end"
                    href="/products"
                  >
                    <div className="pl-12 pb-12">
                      <h3 className="text-3xl font-bold font-heading text-white">
                        TamilTshirts Printed Tshirts for Women
                      </h3>
                      <p className="text-xl text-white font-bold font-heading">
                        <span style={{ display: "flex" }}>
                          <svg
                            width="26px"
                            height="30px"
                            viewBox="0 0 50 76"
                            version="1.1"
                            baseProfile="full"
                            enable-background="new 0 0 76.00 76.00"
                            fill="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                fill="#ffffff"
                                fill-opacity="0.203922"
                                stroke-width="0.2"
                                stroke-linejoin="round"
                                d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                              />{" "}
                              <path
                                fill="#ffffff"
                                fill-opacity="1"
                                stroke-width="0.2"
                                stroke-linejoin="round"
                                d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                              />{" "}
                            </g>
                          </svg>
                          600
                          <span
                            className="text-sm font-normal line-through"
                            style={{ paddingTop: "5px" }}
                          >
                            800
                          </span>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  className="relative h-64 w-full lg:w-96 bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("yofte-assets/images/womanclothing2.jpg")',
                    boxSizing: "border-box",
                    border: "1px solid white",
                    borderRadius: "5%",
                  }}
                >
                  <a
                    className="absolute inset-0 flex items-end"
                    href="/products"
                  >
                    <div className="pl-12 pb-12">
                      <h3 className="text-3xl font-bold font-heading text-white">
                        Customized Printed Tshirts
                      </h3>
                      <p className="text-xl text-white font-bold font-heading">
                        <span style={{ display: "flex" }}>
                          <svg
                            width="26px"
                            height="30px"
                            viewBox="0 0 50 76"
                            version="1.1"
                            baseProfile="full"
                            enable-background="new 0 0 76.00 76.00"
                            fill="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                fill="#ffffff"
                                fill-opacity="0.203922"
                                stroke-width="0.2"
                                stroke-linejoin="round"
                                d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                              />{" "}
                              <path
                                fill="#ffffff"
                                fill-opacity="1"
                                stroke-width="0.2"
                                stroke-linejoin="round"
                                d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                              />{" "}
                            </g>
                          </svg>
                          600
                          <span
                            className="text-sm font-normal line-through"
                            style={{ paddingTop: "5px" }}
                          >
                            800
                          </span>
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

        {/* <section className="py-4 testing-1 bg-white container-y">
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
                    href='javascript:;'
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
                    href='javascript:;'
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
                    href='javascript:;'
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
                    href='javascript:;'
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
                href='javascript:;'
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
                  href='javascript:;'
                >
                  Buy Now
                </a>
              </div>
              <div className="w-full lg:w-1/3 px-3 mb-16 lg:mb-0">
                <a className="block mb-10" href='javascript:;'>
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
                  href='javascript:;'
                >
                  Buy Now
                </a>
              </div>
              <div className="w-full lg:w-1/3 px-3">
                <a className="block mb-10" href='javascript:;'>
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
                  href='javascript:;'
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </section> */}
        <section className="relative py-4 testing-1 md:pt-32 bg-blue-800 overflow-x-hidden">
          <img
            className="absolute h-24 md:h-auto top-0 left-0 right-0"
            src="yofte-assets/elements/line-top.svg"
            alt=""
          />
          <div className="relative container px-4 mx-auto">
            <h2 className="mb-10 xl:mb-20 text-3xl text-white font-heading">
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
                    <h3 className="mb-16 text-1xl font-heading text-white">
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
                className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-2 px-8 rounded-md uppercase"
                href={() => {
                  return false;
                }}
              >
                Show More
              </a>
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
     
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
      </>
    </React.Fragment>
  );
}
