import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchColorCodesData,
  handleFetchProductsData,
  handleFetchSizeData,
  handleFetchVersionManagerData,
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import {
  handleGetCategoryInfoStorageItems,
  handleGetColorCodeStorageItems,
  handleGetProductsInfoStorageItems,
  handleGetSizeStorageItems,
  handleGetVersionManagerStorageItems,
  handleSetCategoryInfoStorageItems,
  handleSetVersionManagerStorageItems,
} from "../utilities/storageManager";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import MultiRangeSlider from "multi-range-slider-react";
import { useNavigate } from "react-router-dom";
import { AK } from "../constants/AppKeys";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Products() {
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  const [categoryListData, setCategoryListData] = useState([]);
  const [sizeListData, setSizeListData] = useState([]);
  const [colorcodesListData, setColorCodesListData] = useState([]);
  const [versionmanagerListData, setVersionManagerListData] = useState([]);
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

  const [availableData, setAvailabeData] = useState({
    colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    products: [{ id: 110 }, { id: 111 }, { id: 112 }, { id: 113 }, { id: 114 }],
  });
  const [rangeData, setRangeData] = useState({
    min: 5,
    max: 10,
  });
  const [rangeData1, setRangeData1] = useState(0);
  const [incr, setIncr] = useState(0);
  const [minValue, set_minValue] = useState(300);
  const [maxValue, set_maxValue] = useState(600);
  const handleInputSlider = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    if (e.minValue != minValue) onClick_filterDynamic("colorcodes");
    if (e.maxValue != maxValue) onClick_filterDynamic("colorcodes");
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (cartinfoData.cartcount > 5) {
      console.log("***");
    } else {
      console.log("***");
    }
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };

  const filterColor = (color) => {
    let filtered = availableData.colorcodes.filter((avcolor) => {
      if (avcolor.id === color.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  const filterSize = (size) => {
    if (size === null) return true;
    let filtered = availableData.size.filter((avsize) => {
      if (avsize.id === size.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  const filterProduct = (product) => {
    let filtered = availableData.products.filter((avproduct) => {
      if (avproduct.id === product.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  const onClick_filterRestore = () => {
    setAvailabeData({
      colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      products: [
        { id: 110 },
        { id: 111 },
        { id: 112 },
        { id: 113 },
        { id: 114 },
      ],
    });
  };

  const onClick_filterCategory = (categoryId, checked) => {
    let prod = productsListData.filter((product) => {
      if (categoryId === 1 && checked) return true;

      let catlistfilter = categoryListData.filter((catlist) => {
        return (
          catlist.checked === true &&
          product.cat_id.toString() === catlist.id.toString().padStart(3, "0")
        );
      });

      return catlistfilter.length > 0;
    });
    setAvailabeData({
      colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
      size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
      products: prod,
    });
    if (prod.length === 0)
      setAvailabeData({
        colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        products: [
          { id: 110 },
          { id: 111 },
          { id: 112 },
          { id: 113 },
          { id: 114 },
        ],
      });
  };

  const onClick_filterDynamic = (dynamic) => {
    if (dynamic === "category") {
      setAvailabeData({
        colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
        size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
        products: [
          { id: 115 },
          { id: 116 },
          { id: 117 },
          { id: 118 },
          { id: 119 },
        ],
      });
    }
    if (incr === 0)
      setAvailabeData({
        colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
        size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
        products: [
          { id: 115 },
          { id: 116 },
          { id: 117 },
          { id: 118 },
          { id: 119 },
        ],
      });
    else if (incr === 1)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 120 },
          { id: 121 },
          { id: 122 },
          { id: 123 },
          { id: 124 },
        ],
      });
    else if (incr === 2)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 110 },
          { id: 111 },
          { id: 112 },
          { id: 113 },
          { id: 114 },
        ],
      });
    else if (incr === 3)
      setAvailabeData({
        colorcodes: [
          { id: 116 },
          { id: 117 },
          { id: 118 },
          { id: 119 },
          { id: 210 },
        ],
        size: [{ id: 1 }, { id: 12 }, { id: 2 }, { id: 13 }, { id: 14 }],
        products: [
          { id: 130 },
          { id: 131 },
          { id: 132 },
          { id: 133 },
          { id: 134 },
        ],
      });
    else if (incr === 4)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 140 },
          { id: 141 },
          { id: 142 },
          { id: 143 },
          { id: 144 },
        ],
      });
    else if (incr === 5)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 145 },
          { id: 146 },
          { id: 147 },
          { id: 148 },
          { id: 149 },
        ],
      });
    else if (incr === 6)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 150 },
          { id: 151 },
          { id: 152 },
          { id: 153 },
          { id: 154 },
        ],
      });
    else if (incr === 7)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 125 },
          { id: 126 },
          { id: 127 },
          { id: 128 },
          { id: 129 },
        ],
      });
    else if (incr === 8)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 130 },
          { id: 131 },
          { id: 132 },
          { id: 133 },
          { id: 134 },
        ],
      });
    else if (incr === 9)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 160 },
          { id: 161 },
          { id: 162 },
          { id: 163 },
          { id: 164 },
        ],
      });
    else if (incr === 10)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 170 },
          { id: 171 },
          { id: 172 },
          { id: 173 },
          { id: 174 },
        ],
      });
    if (incr === 10) setIncr(0);
    else setIncr(incr + 1);
  };

  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());

    let storeinfo = handleGetCategoryInfoStorageItems();
    if (storeinfo === null) {
      handleFetchCategoryData(setFormLoader, setCategoryListData);
    } else setCategoryListData(storeinfo);

    storeinfo = handleGetProductsInfoStorageItems();
    if (storeinfo === null) {
      handleFetchProductsData(setFormLoader, setProductsListData);
    } else setProductsListData(storeinfo);

    storeinfo = handleGetColorCodeStorageItems();
    if (storeinfo === null) {
      handleFetchColorCodesData(setFormLoader, setColorCodesListData);
    } else setColorCodesListData(storeinfo);

    storeinfo = handleGetSizeStorageItems();
    if (storeinfo === null) {
      handleFetchSizeData(setFormLoader, setSizeListData);
    } else setSizeListData(storeinfo);

    handleGetCartInfoStorageItems(setCartInfoData);

    storeinfo = handleGetVersionManagerStorageItems();
    handleFetchVersionManagerData(
      setFormLoader,
      setVersionManagerListData
    ).then(async (data) => {
      if (storeinfo === null) {
        await handleFetchCategoryData(setFormLoader, setCategoryListData);
        await handleFetchProductsData(setFormLoader, setProductsListData);
        await handleFetchColorCodesData(setFormLoader, setColorCodesListData);
        await handleFetchSizeData(setFormLoader, setSizeListData);
      } else {
        await storeinfo.map(async (stinfo) => {
          let objectdata = data.filter((obj) => {
            return obj.name === stinfo.name;
          });
          if (objectdata.length > 0) {
            if (objectdata[0].code != stinfo.code) {
              if (stinfo.name === "products")
                await handleFetchProductsData(
                  setFormLoader,
                  setProductsListData
                );
              if (stinfo.name === "category")
                await handleFetchCategoryData(
                  setFormLoader,
                  setCategoryListData
                );
              if (stinfo.name === "colorcodes")
                await handleFetchColorCodesData(
                  setFormLoader,
                  setColorCodesListData
                );
              if (stinfo.name === "size")
                await handleFetchSizeData(setFormLoader, setSizeListData);
            }
          }
        });
      }
      // handleSetVersionManagerStorageItems(data);
    });
  }
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative">
          <nav className="flex justify-between border-b navcustombg">
            <div className="px-12 flex w-full items-center">
              <a
                className="hidden xl:block mr-16"
                href={() => {
                  return false;
                }}
                onClick={() => {
                  document.getElementById("desktopsidenav").style.display =
                    document.getElementById("desktopsidenav").style.display ===
                      "none"
                      ? "block"
                      : "none";
                }}
              >
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
              </a>
              <ul className="hidden xl:flex font-heading">
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
                  style={{ height: "38px" }}
                  className="h-12"
                  src={`/yofte-assets/logos/${lowercasenosp(store)}/logo.webp`}
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
                    {getcartCount()}
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden xl:flex items-center px-12 border-l font-heading hover:text-gray-600">
              <a
                href="/signin"
                style={{
                  display: userData != null ? "none" : "flex",
                }}
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
                <span style={{ width: "150px", paddingTop: "5px" }}>
                  SIGN&nbsp;IN
                </span>
              </a>

              <a
                className="dropdown"
                href={() => {
                  return false;
                }}
                style={{
                  display: userData === null ? "none" : "flex",
                  cursor: "pointer",
                }}
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
                <span style={{ width: "150px", paddingTop: "5px" }}>
                  {userData?.name}
                </span>
                <div className="dropdown-content">
                  <a href="/myprofile">My Profile</a>
                  <a href="/orderhistory">My Orders</a>
                  <a href="/changepassword">Change Password</a>
                  <hr
                    style={{
                      border: "1px solid #CFD5E2",
                      height: "2px",
                    }}
                  />
                  <a href="/signin">Logout</a>
                </div>
              </a>
            </div>

            <a
              className="xl:hidden flex mr-6 items-center text-gray-900"
              href="/cart"
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
              onClick={() => {
                document.getElementById("mySidenav").style.width = "290px";
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
            <div id="mySidenav" className="sidenav mr-12 xl:hidden">
              <a
                href={() => {
                  return false;
                }}
                className="closebtn"
                onClick={() => {
                  document.getElementById("mySidenav").style.width = "0";
                }}
              >
                &times;
              </a>
              <div className="xl:flex items-center border-l font-heading hover:text-gray-600">
                <a
                  href="/signin"
                  style={{
                    display: userData != null ? "none" : "flex",
                  }}
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
                  <span style={{ width: "150px", paddingTop: "5px" }}>
                    SIGN&nbsp;IN
                  </span>
                </a>

                <a
                  className="dropdown"
                  href="#"
                  style={{
                    display: userData === null ? "none" : "flex",
                    cursor: "pointer",
                  }}
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
                  <span style={{ width: "150px", paddingTop: "0px" }}>
                    {userData?.name}
                  </span>
                  <div className="dropdown-content-nav">
                    <a href="/myprofile">My Profile</a>
                    <a href="/orderhistory">My Orders</a>
                    <a href="/changepassword">Change Password</a>
                    <hr
                      style={{
                        border: "1px solid #CFD5E2",
                        height: "2px",
                      }}
                    />
                    <a href="/signin">Logout</a>
                  </div>
                </a>
              </div>
              <hr
                style={{
                  border: "1px solid #CFD5E2",
                  height: "2px",
                }}
              />
              <ul className="xl:flex font-heading">
                <li className="mr-12">
                  <a
                    style={{ display: "flex" }}
                    className="hover:text-gray-600"
                    href="/products"
                  >
                    <svg
                      fill="#8594A5"
                      height="25px"
                      width="25px"
                      version="1.1"
                      viewBox="0 0 297.41 297.41"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M86.422,258.26l47.527,37.947c1.004,0.803,2.219,1.203,3.434,1.203c1.214,0,2.429-0.4,3.433-1.202l47.531-37.948 c1.514-1.209,2.281-3.124,2.019-5.044l-8.768-64.313l11.97,5.546c0.747,0.347,1.534,0.512,2.311,0.512 c1.9,0,3.737-0.988,4.754-2.727l11.674-19.969c0.854-1.46,0.988-3.23,0.366-4.803L163.531,43.256h13.975 c3.04,0,5.503-2.464,5.503-5.503V5.503c0-3.039-2.463-5.503-5.503-5.503H97.263c-3.039,0-5.503,2.464-5.503,5.503v32.25 c0,3.039,2.463,5.503,5.503,5.503h15.766l-28.626,209.96C84.141,255.136,84.908,257.051,86.422,258.26z M201.453,169.023 l-7.798,13.338l-13.823-6.404l-12.811-93.962L201.453,169.023z M102.766,32.25V11.006h69.236V32.25h-16.567h-36.103H102.766z M124.137,43.256h26.495l28.407,208.352l-41.656,33.258l-41.653-33.258L124.137,43.256z" />{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    &nbsp;&nbsp; Men
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    style={{ display: "flex" }}
                    className="hover:text-gray-600"
                    href="/products"
                  >
                    <svg
                      fill="#8594A5"
                      height="25px"
                      width="25px"
                      version="1.1"
                      viewBox="0 0 400.829 400.829"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M37.649,101.384c9.946,0,18.93-3.914,24.646-10.738c8.433-10.067,9.327-24.859,9.758-31.969 c0.056-0.923,0.099-1.699,0.159-2.282c0.647-6.302,1.427-12.48,1.435-12.542c0.012-0.093,0.022-0.187,0.031-0.28 c1.172-12.374,9.883-23.034,19.876-25.18l8.713,9.657c-12.562,6.195-21.223,19.137-21.223,34.063 c0,20.929,17.026,37.955,37.955,37.955s37.955-17.026,37.955-37.955c0-19.505-14.791-35.621-33.745-37.723l-19.325-21.42 c-0.953-1.056-2.1-1.834-3.337-2.328c-0.992-0.397-2.071-0.624-3.201-0.642C97.285,0,97.224,0,97.164,0 C76.556,0.022,58.019,18.721,55.771,41.73c-0.123,0.979-0.842,6.755-1.466,12.823c-0.079,0.775-0.146,1.807-0.22,3.036 c-0.314,5.187-0.968,15.979-5.59,21.497c-2.254,2.69-6.309,4.297-10.847,4.297c-4.971,0-9,4.029-9,9S32.678,101.384,37.649,101.384z M118.885,42.159c0.077,0.002,0.152,0.002,0.229,0c10.95,0.063,19.839,8.99,19.839,19.954c0,11.003-8.952,19.955-19.955,19.955 s-19.955-8.952-19.955-19.955C99.043,51.148,107.934,42.221,118.885,42.159z M371.777,174.784c-0.057-3.708-2.382-7.002-5.857-8.296 l-28.062-10.453c-4.659-1.735-9.841,0.635-11.575,5.292c-1.735,4.658,0.634,9.84,5.292,11.575l22.299,8.307l0.168,10.94 l-106.126,0.001v-10.867c3.179-1.259,6.833-2.615,10.825-4.096c26.93-9.993,63.812-23.678,64.938-49.267 c0.38-8.635-2.745-17.08-8.574-23.172c-5.396-5.64-12.467-8.745-19.907-8.745c-15.711,0-28.493,14.141-28.493,31.521 c0,4.971,4.029,9,9,9s9-4.029,9-9c0-7.329,4.806-13.521,10.493-13.521c2.482,0,4.934,1.133,6.902,3.19 c2.451,2.561,3.762,6.183,3.597,9.936c-0.291,6.606-8.975,12.986-16.209,17.174c-10.942,6.336-24.791,11.474-37.009,16.008 c-6.76,2.508-12.599,4.674-17.275,6.791c-3.22,1.458-5.288,4.665-5.288,8.199v25.849c0,2.387,0.948,4.676,2.636,6.364 c1.688,1.688,3.978,2.636,6.364,2.636h31.868l-28.12,137.585c-0.077,0.345-0.135,0.696-0.172,1.055 c-0.111,1.063-0.03,2.112,0.219,3.105c0.324,1.306,0.934,2.499,1.759,3.51c0.829,1.019,1.885,1.86,3.109,2.442 c0.914,0.436,1.912,0.721,2.965,0.825c0.364,0.037,0.729,0.055,1.087,0.045h98.836c0.06,0.001,0.118,0.002,0.177,0.002 c0.285,0,0.572-0.014,0.86-0.042c1.19-0.111,2.313-0.454,3.323-0.983c0.891-0.466,1.685-1.072,2.359-1.785 c0.002-0.002,0.003-0.004,0.005-0.006c1.2-1.268,2.036-2.885,2.338-4.684c0.108-0.638,0.148-1.295,0.113-1.96 c-0.026-0.538-0.101-1.063-0.218-1.572l-28.11-137.538h31.866c2.411,0,4.721-0.967,6.412-2.685c1.692-1.719,2.624-4.043,2.587-6.453 L371.777,174.784z M339.627,340.718H262.47l26.685-130.567l23.787-0.001L339.627,340.718z M247.226,137.317l-65.366,32.896 c-2.334,1.177-5.065,1.277-7.48,0.279c-2.416-0.997-4.279-2.995-5.104-5.476c-3.831-11.506-9.864-27.002-19.58-35.626 c-7.728,4.495-18.209,7.07-29.407,7.07s-21.68-2.575-29.407-7.071c-9.715,8.622-15.748,24.12-19.58,35.627l-24.336,73.11 c-1.256,3.772-4.769,6.159-8.538,6.159c-0.942,0-1.9-0.148-2.844-0.463c-4.716-1.569-7.267-6.665-5.696-11.382l24.336-73.11 c5.707-17.141,14.458-38.145,31.607-48.509c1.568-0.947,3.305-1.372,5.013-1.292c2.3-0.07,4.582,0.704,6.392,2.365 c3.299,3.028,11.315,6.565,23.054,6.565c11.739,0,19.757-3.537,23.056-6.565c1.813-1.664,4.108-2.453,6.404-2.364 c1.698-0.062,3.436,0.347,5,1.292c13.993,8.459,22.393,23.995,28.11,38.736l56.276-28.321c4.44-2.235,9.851-0.447,12.085,3.993 C253.454,129.672,251.666,135.083,247.226,137.317z M179.335,285.823c0.117,0.508,0.19,1.032,0.218,1.569 c0.035,0.658-0.004,1.31-0.109,1.942c-0.3,1.81-1.141,3.438-2.35,4.712c-0.676,0.714-1.472,1.32-2.365,1.786 c-1.007,0.526-2.125,0.868-3.311,0.979c-0.35,0.033-0.695,0.043-1.04,0.04h-15.479l0.535,76.584l15.69,11.028 c4.067,2.858,5.047,8.472,2.188,12.538c-1.752,2.493-4.54,3.826-7.371,3.826c-1.788,0-3.594-0.531-5.167-1.638l-18.388-12.924 c-0.563-0.396-1.067-0.844-1.51-1.334c-2.063-1.635-3.392-4.156-3.412-6.993l-0.567-81.088h-6.896l-33.029,84.15 c-0.43,1.165-1.104,2.251-2.008,3.171c-0.405,0.415-0.848,0.786-1.319,1.111l-18.328,12.88c-4.064,2.858-9.68,1.879-12.538-2.188 c-2.858-4.066-1.878-9.681,2.188-12.538l16.174-11.367l29.523-75.219H86.347c-0.504,0.015-1.019-0.021-1.532-0.097 c-1.059-0.156-2.059-0.497-2.964-0.989c-1.188-0.643-2.192-1.533-2.963-2.583c-0.763-1.036-1.309-2.241-1.571-3.548 c-0.206-1.015-0.238-2.076-0.075-3.141c0.077-0.51,0.197-1.006,0.356-1.484l25.347-82.495l-7.291-38.017 c-0.937-4.882,2.262-9.598,7.144-10.534c4.886-0.935,9.599,2.264,10.534,7.144l7.713,40.216c0.277,1.443,0.196,2.934-0.235,4.339 l-22.488,73.189h25.387c0.108-0.002,0.216-0.002,0.32,0h35.511L136.19,164.607c-0.995-4.869,2.146-9.624,7.016-10.619 c4.863-0.998,9.624,2.145,10.619,7.016L179.335,285.823z"></path>{" "}
                      </g>
                    </svg>
                    &nbsp;&nbsp; Women
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    style={{ display: "flex" }}
                    className="hover:text-gray-600"
                    href="/products"
                  >
                    <svg
                      fill="#8594A5"
                      width="25px"
                      height="25px"
                      viewBox="0 0 100 100"
                      version="1.1"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="hairdryer" /> <g id="scissor" /> <g id="razor" />{" "}
                        <g id="razor_blade_1_" /> <g id="comb" />{" "}
                        <g id="shaving_machine" /> <g id="barbershop" />{" "}
                        <g id="barber_pole" /> <g id="hairstylist" />{" "}
                        <g id="kids">
                          {" "}
                          <g>
                            {" "}
                            <path d="M89.6,76.2c-0.4-4.8-3.8-8.8-8.5-9.9L59,61.2V56c0-0.1,0-0.2-0.1-0.2c5.4-2.9,9.3-8.4,9.9-14.8H69c3.3,0,6-2.7,6-6 c0-1.8-0.8-3.4-2-4.5V21c0-9.4-7.6-17-17-17H44c-9.4,0-17,7.6-17,17v9.5c-1.2,1.1-2,2.7-2,4.5c0,3.3,2.7,6,6,6h0.1 c0.7,6.4,4.5,11.8,9.9,14.8c0,0.1-0.1,0.2-0.1,0.2v5.2l-22.1,5.2c-4.7,1.1-8.1,5.1-8.5,9.9L9,94.9c0,0.3,0.1,0.6,0.3,0.8 C9.5,95.9,9.7,96,10,96h40h40c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.8L89.6,76.2z M50,72c-8.8,0-12.1-6-12.9-7.8l4.2-1 c0.7,1.7,2.9,4.8,8.6,4.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c5.7,0,7.9-3.2,8.6-4.8l4.2,1C62.1,65.9,58.7,72,50,72z M69,39v-8 c2.2,0,4,1.8,4,4S71.2,39,69,39z M29,21c0-8.3,6.7-15,15-15h12c8.3,0,15,6.7,15,15v8.4c-0.6-0.2-1.3-0.4-2-0.4c0-0.6-0.4-1-1-1 c-7,0-8-4-8-4.2c-0.1-0.4-0.4-0.7-0.7-0.8c-0.4-0.1-0.8,0-1,0.3c-3,3.8-20,4.6-26.2,4.6c-0.6,0-1,0.4-1,1c-0.7,0-1.4,0.1-2,0.4V21 z M27,35c0-2.2,1.8-4,4-4v8C28.8,39,27,37.2,27,35z M33,39v-9v0c4.5-0.1,20.2-0.5,25.6-4.3c0.9,1.6,3.1,4,8.4,4.3v0v9 c0,9.4-7.6,17-17,17S33,48.4,33,39z M50,58c2.5,0,4.8-0.5,7-1.4v5.2c-0.2,0.6-1.3,4.1-7,4.1c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0 c0,0,0,0,0,0c-5.6,0-6.8-3.5-7-4.1v-5.2C45.2,57.5,47.5,58,50,58z M75,94v-7c0-0.6-0.4-1-1-1s-1,0.4-1,1v7H50H27v-7 c0-0.6-0.4-1-1-1s-1,0.4-1,1v7H11.1l1.4-17.6c0.3-3.9,3.1-7.2,6.9-8.1l15.8-3.7C35.8,66.2,39.5,74,50,74c10.5,0,14.2-7.8,14.8-9.4 l15.8,3.7c3.8,0.9,6.6,4.1,6.9,8.1L88.9,94H75z" />{" "}
                            <path d="M46,37c0-2.2-1.8-4-4-4s-4,1.8-4,4s1.8,4,4,4S46,39.2,46,37z M42,39c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S43.1,39,42,39z " />{" "}
                            <path d="M58,41c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4S55.8,41,58,41z M58,35c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2 S56.9,35,58,35z" />{" "}
                            <path d="M55.6,49.8c0.4-0.3,0.5-1,0.2-1.4c-0.3-0.4-1-0.5-1.4-0.2c-3,2.4-5.8,2.4-8.8,0c-0.4-0.3-1.1-0.3-1.4,0.2 c-0.3,0.4-0.3,1.1,0.2,1.4c1.8,1.5,3.7,2.2,5.6,2.2S53.8,51.3,55.6,49.8z" />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g id="mature" /> <g id="woman" /> <g id="moustache" />{" "}
                        <g id="hair_gel" /> <g id="shampoo" /> <g id="mirror" />{" "}
                        <g id="spray" /> <g id="apron" /> <g id="chair" />{" "}
                        <g id="mask" />{" "}
                      </g>
                    </svg>
                    &nbsp;&nbsp; Kids
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    style={{ display: "flex" }}
                    className="hover:text-gray-600"
                    href="/products"
                  >
                    <svg
                      fill="#8594A5"
                      width="25px"
                      height="25px"
                      viewBox="0 0 512 512"
                      enable-background="new 0 0 512 512"
                      id="Good_x5F_relationship"
                      version="1.1"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M22.987,441.282v41.148h221.975h10h247.979v-45.383c0-16.825-5.782-33.331-16.282-46.477 c-10.501-13.146-25.32-22.436-41.729-26.154l-39.727-9.004l0.001-16.521c8.849-3.881,16.995-9.4,24.035-16.44 c8.72-8.721,15.335-19.483,19.124-31.114c0.934-2.842,1.695-5.732,2.296-8.658c13.089-1.674,23.24-12.875,23.24-26.412 c0-7.078-2.797-13.783-7.735-18.752v-61.079c0-36.447-31.26-67.359-68.84-68.763v-0.067h-0.154 c-4.672-5.572-11.558-8.839-18.926-8.85h-0.117c-0.088,0-0.176,0-0.266,0c-25.402,0-49.494,10.077-67.859,28.392 c-18.822,18.771-29.188,43.587-29.188,69.878v40.807c-4.743,4.935-7.431,11.526-7.431,18.434 c0,13.535,10.148,24.734,23.234,26.412c0.6,2.924,1.361,5.812,2.293,8.65c7.203,22.041,23.416,39.152,43.787,47.844v16.24 l-39.726,9.004c-13.131,2.977-25.237,9.527-34.934,18.759c0.147-1.711,0.239-3.431,0.239-5.157 c0-18.669-8.386-36.057-23.01-47.709c-4.746-3.776-7.468-9.381-7.468-15.377V213.158c0-26.857-10.586-52.15-29.807-71.219 c-18.868-18.72-43.665-28.89-69.807-28.708c-26.103,0.206-50.642,10.484-69.096,28.939 c-18.668,18.659-28.949,43.476-28.949,69.878v102.415c0,6.074-2.776,11.727-7.615,15.507 c-14.915,11.634-23.469,29.146-23.469,48.05c0,15.832,6.233,31.101,17.201,42.412C24.136,427.014,22.987,434.022,22.987,441.282z M244.962,472.431H32.987v-31.148c0-26.894,18.318-49.828,44.546-55.772l42.939-9.732l0.001-19.205 c5.837,1.423,11.926,2.196,18.195,2.196c6.486,0,12.784-0.816,18.806-2.338l-0.001,19.347l42.941,9.732 c10.803,2.448,20.258,7.784,27.649,15.086c-17.229,8.855-36.392,13.526-55.81,13.526h-118.9v10h118.9 c21.775,0,43.262-5.412,62.42-15.686c6.531,9.338,10.287,20.684,10.287,32.846V472.431z M71.855,319.777 c3.621,6.373,8.124,12.179,13.348,17.251v9.801c0,8.774,1.096,17.48,3.23,25.957l-12.278,2.782 c-2.851-9.232-4.3-18.786-4.3-28.466V319.777z M98.186,370.575c-1.973-7.751-2.982-15.717-2.982-23.746v-1.588 c4.734,3.262,9.854,5.996,15.271,8.143v14.406L98.186,370.575z M203.792,371.017c-0.268,1.601-0.572,3.205-0.904,4.806 c-0.088-0.021-0.174-0.046-0.263-0.065l-13.225-2.998c2.13-8.467,3.224-17.164,3.224-25.93v-10.268 c5.017-4.957,9.345-10.604,12.854-16.777v30.874C205.478,357.464,204.91,364.313,203.792,371.017z M182.624,346.829 c0,8.021-1.009,15.977-2.977,23.72l-12.173-2.759v-14.648c5.38-2.185,10.454-4.961,15.149-8.25V346.829z M452.073,272.188 c0.119-1.771,0.191-3.548,0.191-5.333v-2.077c5.026-1.875,9.127-5.595,11.539-10.282c0.063,0.585,0.097,1.175,0.097,1.77 C463.9,263.769,458.908,270.12,452.073,272.188z M456.165,176.436v68.41c0,3.342-1.505,6.402-3.9,8.491v-5.57 c0-8.381-2.492-16.474-7.212-23.411c-1.763-2.581-3.132-5.432-4.07-8.473c-0.928-3.008-1.397-6.135-1.397-9.296v-10.37 c0-15.665-12.75-28.41-28.383-28.41l-11.502-0.084c2.141-6.157,3.254-12.685,3.254-19.226v-25c0-1.828-0.199-3.633-0.588-5.389 C432.223,121.863,456.165,147.041,456.165,176.436z M290.814,197.025c0-23.615,9.322-45.917,26.25-62.798 c16.478-16.433,38.06-25.473,60.813-25.473c0.078,0,0.159,0,0.237,0h0.123c4.946,0.007,9.537,2.48,12.281,6.614 c1.594,2.403,2.436,5.213,2.436,8.126v25c0,7.706-1.762,15.075-5.234,21.899c-8.309,16.297-24.818,26.421-43.086,26.421 c-13.264,0-25.725,5.163-35.085,14.534c-9.372,9.374-14.534,21.83-14.534,35.076v6.043c-2.617-2.468-4.2-5.957-4.2-9.773V197.025z M283.384,256.267c0-0.839,0.086-1.666,0.21-2.485c2.474,4.62,6.458,8.344,11.421,10.458v2.616c0,1.784,0.072,3.562,0.191,5.331 C288.374,270.116,283.384,263.767,283.384,256.267z M308.415,288.214c-2.256-6.863-3.4-14.049-3.4-21.358v-20.43 c0-10.575,4.121-20.52,11.607-28.007c7.474-7.482,17.422-11.603,28.012-11.603c20.998,0,40.07-11.082,50.5-29.128l16.031,0.118 c10.156,0,18.42,8.259,18.42,18.41v10.37c0,4.161,0.619,8.28,1.842,12.243c1.233,4,3.039,7.757,5.363,11.16 c3.582,5.263,5.475,11.41,5.475,17.777v19.09c0,7.309-1.145,14.495-3.404,21.371c-3.308,10.151-9.08,19.542-16.691,27.153 c-12.965,12.965-30.198,20.105-48.524,20.105C343.868,335.485,317.655,316.491,308.415,288.214z M373.645,345.485 c7.397,0,14.633-1.036,21.56-3.001v13.892l-21.252,11.088l-21.255-11.088l0.001-13.716 C359.401,344.502,366.431,345.485,373.645,345.485z M305.184,374.17l41.829-9.481l26.939,14.055l26.938-14.055l41.83,9.481 c29.57,6.702,50.222,32.558,50.222,62.878v35.383h-42.494v-29.143h-10v29.143H306.205v-29.143h-10v29.143h-41.243v-31.148v-4.234 C254.962,406.728,275.614,380.872,305.184,374.17z M19.059,378.019c0-15.801,7.15-30.439,19.622-40.168 c7.284-5.689,11.462-14.215,11.462-23.389V212.047c0-23.73,9.24-46.035,26.02-62.806c16.588-16.588,38.644-25.826,62.104-26.011 c23.454-0.221,45.724,8.979,62.685,25.807c17.314,17.177,26.85,39.949,26.85,64.121v101.775c0,9.061,4.098,17.518,11.239,23.2 c12.227,9.741,19.238,24.279,19.238,39.886c0,11.731-3.901,22.764-11.092,31.734c-7.361-13.936-19.535-25.01-34.706-30.955 c0.438-2.04,0.833-4.09,1.175-6.135c1.209-7.246,1.822-14.649,1.822-22.005v-82.827c0-30.566-19.57-57.271-48.697-66.451 l-3.006,9.537c24.944,7.862,41.703,30.734,41.703,56.914v14.128c0,36.839-29.97,66.81-66.809,66.81s-66.81-29.971-66.81-66.81 h-0.004v-12.757c0-21.864,12.716-41.925,32.446-51.28l0.559-0.257c23.572-10.857,38.804-34.652,38.804-60.62v-8.555h-10v8.555 c0,21.863-12.7,41.915-32.408,51.266l-0.589,0.271c-23.577,10.868-38.812,34.663-38.812,60.619v77.9 c0,10.633,1.587,21.127,4.703,31.27c-15.839,5.893-28.516,17.341-36.026,31.816C23.182,401.162,19.059,389.778,19.059,378.019z" />{" "}
                            <path d="M129.961,309.755l-9.025,4.305c3.298,6.913,10.379,11.38,18.04,11.38c7.654,0,14.734-4.466,18.038-11.376l-9.021-4.313 c-1.652,3.455-5.191,5.688-9.017,5.688C135.147,315.439,131.608,313.208,129.961,309.755z" />{" "}
                            <path d="M110.676,262.421L110.676,262.421c-2.65,0-4.799,2.148-4.799,4.799v5.76c0,2.65,2.148,4.799,4.799,4.799l0,0 c2.649,0,4.798-2.148,4.798-4.799v-5.76C115.474,264.569,113.325,262.421,110.676,262.421z" />{" "}
                            <path d="M166.658,277.778c2.649,0,4.798-2.148,4.798-4.799v-5.76c0-2.65-2.148-4.799-4.798-4.799c-2.65,0-4.799,2.148-4.799,4.799 v5.76C161.859,275.63,164.008,277.778,166.658,277.778z" />{" "}
                            <path d="M392.34,299.345l-9.021-4.314c-1.716,3.588-5.389,5.905-9.358,5.905c-3.975,0-7.647-2.316-9.357-5.901l-9.025,4.307 c3.361,7.043,10.576,11.595,18.383,11.595C381.759,310.936,388.974,306.386,392.34,299.345z" />{" "}
                            <path d="M344.942,246.449c-2.717,0-4.92,2.203-4.92,4.92v5.906c0,2.717,2.203,4.92,4.92,4.92c2.718,0,4.92-2.203,4.92-4.92v-5.906 C349.862,248.652,347.66,246.449,344.942,246.449z" />{" "}
                            <path d="M402.342,262.195L402.342,262.195c2.718,0,4.92-2.203,4.92-4.92v-5.906c0-2.717-2.202-4.92-4.92-4.92l0,0 c-2.718,0-4.921,2.203-4.921,4.92v5.906C397.421,259.992,399.624,262.195,402.342,262.195z" />{" "}
                            <path d="M285.655,29.733c-9.592-0.943-19.159,2.207-26.252,8.638c-2.423,2.197-4.492,4.713-6.169,7.457 c-1.676-2.744-3.746-5.26-6.169-7.458c-7.092-6.43-16.661-9.579-26.252-8.637c-15.183,1.49-27.556,13.001-30.088,27.992 c-0.282,1.67-0.445,3.377-0.483,5.074c-0.167,7.512,2.468,15.067,7.418,21.273l6.56,8.224l39.27,42.677 c2.407,2.925,5.947,4.599,9.745,4.599l0,0c3.798,0,7.339-1.674,9.746-4.599l39.038-42.408l6.79-8.492 c4.951-6.207,7.585-13.762,7.418-21.274c-0.037-1.691-0.2-3.398-0.482-5.074C313.211,42.734,300.838,31.224,285.655,29.733z M300.991,77.838l-6.449,8.085l-39.023,42.392l-0.23,0.269c-0.687,0.86-1.581,0.989-2.054,0.989c-0.472,0-1.366-0.128-2.053-0.988 l-39.255-42.661l-6.449-8.085c-3.492-4.379-5.353-9.641-5.238-14.814c0.027-1.214,0.145-2.436,0.347-3.631 c1.782-10.553,10.502-18.656,21.204-19.707c6.887-0.678,13.479,1.488,18.559,6.094c5.012,4.544,7.886,11.027,7.886,17.787v6.878 h10v-6.878c0-6.76,2.874-13.243,7.886-17.787c5.08-4.605,11.672-6.771,18.559-6.094c10.702,1.05,19.422,9.154,21.205,19.706 c0.202,1.2,0.318,2.421,0.346,3.631C306.345,68.197,304.484,73.458,300.991,77.838z" />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    &nbsp;&nbsp; Couple Collection
                  </a>
                </li>
                {/* <li className="mr-12">
                  <a className="hover:text-gray-600" href="/products">
                    Apparels
                  </a>
                </li> */}
                <li>
                  <a
                    style={{ display: "flex" }}
                    className="hover:text-gray-600"
                    href="/products"
                  >
                    <svg
                      fill="#8594A5"
                      width="25px"
                      height="25px"
                      viewBox="0 0 96 96"
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
                          d="m37.684 21.816-15.75 15.773 2.347 2.206c2.821 2.65 3.505 2.709 5.931.513 1.777-1.608 2.055-1.508 5.565 2.002l3.694 3.695-15.468 15.492L8.535 76.989l2.738 2.738 2.738 2.738 15.493-15.469 15.493-15.469 4.206 4.205 4.205 4.205-2.203 2.345-2.203 2.345 2.782 2.666 2.781 2.665 15.951-15.974 15.95-15.973-2.706-2.705-2.705-2.706-2.564 2.408-2.563 2.408-10.672-10.672-10.672-10.672 2.207-2.35 2.207-2.349-2.782-2.666-2.781-2.665-15.751 15.774m5.302 5.698-5.446 5.515 10.728 10.727 10.727 10.727 5.738-5.738 5.738-5.738-10.468-10.503C54.246 26.727 49.287 22 48.984 22c-.304 0-3.003 2.481-5.998 5.514M52 80v4h36v-8H52v4"
                          fill-rule="evenodd"
                        />{" "}
                      </g>
                    </svg>
                    &nbsp;&nbsp; Political Shirts
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section className="py-2">
          <div className="container px-2">
            {/* <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0">
                <h2 className="text-3xl font-bold font-heading">
                  <span>Found 125 results for</span>
                  &nbsp;&nbsp;
                  <a className="relative text-blue-300 underline" href='javascript:;'>
                    All Products
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
                  href='javascript:;'
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
                  href='javascript:;'
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
            </div>*/}

            <div className="flex flex-wrap -mx-3 mb-2">
              {/* Mobile */}
              <div id="mobilesidenav" className="w-full lg:hidden px-3">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div
                      className="py-6 px-2 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById(
                          "categoryMobile"
                        ).style.display =
                          document.getElementById("categoryMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Category
                      </a>
                      <ul id="categoryMobile" className="hidden text-left mt-6">
                        {categoryListData.map((category) => (
                          <li>
                            <a
                              className="text-lg"
                              href={() => {
                                return false;
                              }}
                            >
                              <input
                                type="checkbox"
                                id={category.id + category.name}
                              />{" "}
                              &nbsp;&nbsp;&nbsp;
                              <label for={category.id + category.name}>
                                {category.name}
                              </label>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div
                      className="py-6 px-2 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById("colorsMobile").style.display =
                          document.getElementById("colorsMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Colors
                      </a>

                      <div
                        id="colorsMobile"
                        className="hidden mt-6 flex flex-wrap"
                      >
                        {colorcodesListData.filter(filterColor).map((color) => (
                          <button
                            className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"
                            onClick={async (event) => {
                              event.preventDefault();
                              let eventtarget = event.currentTarget;
                              if (eventtarget.readOnly) return;
                              eventtarget.readOnly = true;
                              await onClick_filterDynamic("colorcodes");
                              eventtarget.readOnly = false;
                            }}
                          >
                            <div
                              className="rounded-full bg-orange-300 w-5 h-5"
                              style={{ backgroundColor: color.code }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div
                      className="py-6 px-4 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById("priceMobile").style.display =
                          document.getElementById("priceMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Price
                      </a>
                      <div id="priceMobile" className="hidden mt-6">
                        <MultiRangeSlider
                          min={0}
                          max={1000}
                          step={5}
                          ruler={false}
                          minValue={minValue}
                          maxValue={maxValue}
                          labels={["₹0", "₹1000"]}
                          onInput={async (e) => {
                            handleInputSlider(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div
                      className="py-6 px-4 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById("sizeMobile").style.display =
                          document.getElementById("sizeMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Size
                      </a>
                      <div
                        id="sizeMobile"
                        className="hidden mt-6 flex flex-wrap -mx-2 -mb-2"
                      >
                        {sizeListData.filter(filterSize).map((size) => (
                          <button
                            className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"
                            style={{ fontSize: "80%" }}
                            onClick={async (event) => {
                              event.preventDefault();
                              let eventtarget = event.currentTarget;
                              if (eventtarget.readOnly) return;
                              eventtarget.readOnly = true;
                              await onClick_filterDynamic("colorcodes");
                              eventtarget.readOnly = false;
                            }}
                          >
                            {size.code}
                          </button>
                        ))}
                      </div>
                      {/* <div className="hidden mt-4 text-right">
                        <a
                          className="inline-flex underline text-blue-300 hover:text-blue-400"
                          href='javascript:;'
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
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a className="font-bold font-heading" href='javascript:;'>
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
                      <a className="font-bold font-heading" href='javascript:;'>
                        Location
                      </a>
                      <input
                        className="hidden mt-6 w-full px-8 py-4 bg-white border rounded-md"
                        type="serach"
                        placeholder="City"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              {/* Desktop */}
              <div
                id="desktopsidenav"
                className="hidden lg:block w-1/4 px-3"
                style={{ background: "#ffffff" }}
              >
                <div
                  className="mb-2 py-8 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Category
                  </h3>
                  <ul>
                    {categoryListData.map((category) => (
                      <li>
                        <a
                          className="text-lg"
                          href={() => {
                            return false;
                          }}
                        >
                          <input
                            type="checkbox"
                            id={category.name + category.id}
                            onChange={async (event) => {
                              if (category.id === 1) {
                                categoryListData.map((chqcat) => {
                                  document.getElementById(
                                    chqcat.name + chqcat.id
                                  ).checked = event.currentTarget.checked;
                                  chqcat["checked"] =
                                    event.currentTarget.checked;
                                });
                              }
                              category["checked"] = event.currentTarget.checked;
                              await onClick_filterCategory(
                                category.id,
                                event.currentTarget.checked
                              );
                            }}
                          />{" "}
                          &nbsp;&nbsp;&nbsp;
                          <label for={category.name + category.id}>
                            {category.name}
                          </label>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="mb-2 py-2 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Colors
                  </h3>

                  <div className="flex flex-wrap">
                    {colorcodesListData.filter(filterColor).map((color) => (
                      <button
                        className="mr-4 mb-2 rounded-full border border-blue-300 p-1"
                        onClick={async (event) => {
                          event.preventDefault();
                          let eventtarget = event.currentTarget;
                          if (eventtarget.readOnly) return;
                          eventtarget.readOnly = true;
                          await onClick_filterDynamic("colorcodes");
                          eventtarget.readOnly = false;
                        }}
                      >
                        <div
                          className="rounded-full bg-orange-300 w-5 h-5"
                          style={{ backgroundColor: color.code }}
                        />
                      </button>
                    ))}
                    {/* <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
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
                    </button> */}
                  </div>
                </div>
                <div
                  className="mb-2 py-2 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Prices
                  </h3>
                  <div>
                    <MultiRangeSlider
                      min={0}
                      max={1000}
                      step={5}
                      ruler={false}
                      minValue={minValue}
                      maxValue={maxValue}
                      labels={["₹0", "₹1000"]}
                      onInput={async (e) => {
                        handleInputSlider(e);
                      }}
                    />

                    {/* <div className="flex justify-between">
                      <span
                        className="inline-block text-lg font-heading"
                        style={{ display: "flex" }}
                      >
                        <svg
                          width="15px"
                          height="30px"
                          viewBox="0 0 76 76"
                          version="1.1"
                          baseProfile="full"
                          enable-background="new 0 0 76.00 76.00"
                          fill="#8594A5"
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
                              fill="#8594A5"
                              fill-opacity="0.203922"
                              stroke-width="0.2"
                              stroke-linejoin="round"
                              d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                            />{" "}
                            <path
                              fill="#8594A5"
                              fill-opacity="1"
                              stroke-width="0.2"
                              stroke-linejoin="round"
                              d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                            />{" "}
                          </g>
                        </svg>
                        0
                      </span>
                      <span
                        className="inline-block text-lg font-heading"
                        style={{ display: "flex" }}
                      >
                        <svg
                          width="15px"
                          height="30px"
                          viewBox="0 0 76 76"
                          version="1.1"
                          baseProfile="full"
                          enable-background="new 0 0 76.00 76.00"
                          fill="#8594A5"
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
                              fill="#8594A5"
                              fill-opacity="0.203922"
                              stroke-width="0.2"
                              stroke-linejoin="round"
                              d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                            />{" "}
                            <path
                              fill="#8594A5"
                              fill-opacity="1"
                              stroke-width="0.2"
                              stroke-linejoin="round"
                              d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                            />{" "}
                          </g>
                        </svg>
                        1000
                      </span>
                    </div> */}
                  </div>
                </div>
                <div
                  className="mb-2 py-2 pl-12 pr-6 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">Size</h3>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    {sizeListData.filter(filterSize).map((size) => (
                      <button
                        className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"
                        style={{ fontSize: "80%" }}
                        onClick={async (event) => {
                          event.preventDefault();
                          let eventtarget = event.currentTarget;
                          if (eventtarget.readOnly) return;
                          eventtarget.readOnly = true;
                          await onClick_filterDynamic("colorcodes");
                          eventtarget.readOnly = false;
                        }}
                      >
                        {size.code}
                      </button>
                    ))}
                  </div>
                  {/* <div className="mt-4 text-right">
                    <a
                      className="inline-flex underline text-blue-300 hover:text-blue-400"
                      href='javascript:;'
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
                  </div> */}
                </div>
                {/* <div
                  className="mb-6 py-10 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
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
                <div
                  className="mb-6 py-10 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-6 text-2xl font-bold font-heading">
                    Location
                  </h3>
                  <input
                    className="w-full px-8 py-4 bg-white border rounded-md"
                    type="serach"
                    placeholder="City"
                  />
                </div> */}
              </div>
              <div className="w-auto lg:w-3/4 px-3">
                <div className="flex flex-wrap -mx-3 customproductflex">
                  {productsListData.filter(filterProduct).map((product) => (
                    // <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                    <div>
                      <div
                        // className="p-6 bg-gray-50"

                        style={{ height: "300px" }}
                      >
                        {/* <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                            -15%
                          </span> */}

                        <a
                          className="block px-6 py-6 mt-1 mb-2"
                          href={() => {
                            return false;
                          }}
                          style={{ cursor: "pointer" }}
                          onClick={(event) => {
                            product["images"] = [];
                            product["images"][0] = "1.png";
                            product["images"][1] = "2.png";
                            product["images"][2] = "3.png";
                            product["images"][3] = "4.png";

                            navigate("/p/", {
                              state: { productinfo: product },
                            });
                          }}
                        >
                          <LazyLoadImage
                            className="mb-1 mx-auto h-56 w-full object-contain"
                            src={
                              product.id % 4 === 1
                                ? AK.PRODUCTPAGEIMAGEURL + "1.png"
                                : product.id % 4 === 2
                                  ? AK.PRODUCTPAGEIMAGEURL + "2.png"
                                  : product.id % 4 === 3
                                    ? AK.PRODUCTPAGEIMAGEURL + "3.png"
                                    : product.id % 4 === 0
                                      ? AK.PRODUCTPAGEIMAGEURL + "4.png"
                                      : AK.PRODUCTPAGEIMAGEURL + "1.png"
                            }
                            alt=""
                          />
                          <center>
                            <h3
                              className="text-base"
                              style={{
                                height: "25px",
                                wordWrap: "wrap",
                                wordWrap: "break-word",
                                width: "190px",
                              }}
                            >
                              {/* {product.name} */}
                              All is Well
                            </h3>

                            <p className="text-lg text-black-500">
                              <center>
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <svg
                                    width="15px"
                                    height="30px"
                                    viewBox="0 0 76 76"
                                    version="1.1"
                                    baseProfile="full"
                                    fill="#393b40"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      stroke-width="0"
                                    />

                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />

                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <path
                                        fill="#393b40"
                                        fill-opacity="0.203922"
                                        stroke-width="0.2"
                                        stroke-linejoin="round"
                                        d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                                      />{" "}
                                      <path
                                        fill="#393b40"
                                        fill-opacity="1"
                                        stroke-width="0.2"
                                        stroke-linejoin="round"
                                        d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                                      />{" "}
                                    </g>
                                  </svg>
                                  {product.sp}
                                  &nbsp;&nbsp;
                                  <span
                                    className="text-gray-500 font-semibold font-heading line-through"
                                    style={{
                                      display: "flex",
                                      fontSize: "15px",
                                    }}
                                  >
                                    <svg
                                      width="15px"
                                      height="30px"
                                      viewBox="0 0 76 76"
                                      version="1.1"
                                      baseProfile="full"
                                      enable-background="new 0 0 76.00 76.00"
                                      fill="#7183a7"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      />

                                      <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />

                                      <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                          fill="#7183a7"
                                          fill-opacity="0.203922"
                                          stroke-width="0.2"
                                          stroke-linejoin="round"
                                          d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                                        />{" "}
                                        <path
                                          fill="#7183a7"
                                          fill-opacity="1"
                                          stroke-width="0.2"
                                          stroke-linejoin="round"
                                          d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                                        />{" "}
                                      </g>
                                    </svg>
                                    {product.mrp}
                                  </span>
                                  &nbsp;&nbsp;&nbsp;
                                  <a
                                    className="mr-2 hover:text-gray-600"
                                    href={() => {
                                      return false;
                                    }}
                                  >
                                    <svg
                                      width={15}
                                      height={28}
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
                                </span>
                              </center>
                            </p>
                          </center>
                        </a>
                        {/* {product?.addtocart === true ? (
                          <div
                            style={{ float: "right" }}
                            className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          >
                            <button
                              className="py-2 hover:text-gray-700"
                              onClick={async (event) => {
                                event.preventDefault();
                                let eventtarget = event.currentTarget;
                                if (eventtarget.readOnly) return;
                                eventtarget.readOnly = true;
                                product["addtocart"] = true;
                                await handleCartMinus(
                                  product,
                                  setCartInfoData,
                                  setCount,
                                  cartinfoData,
                                  count
                                );
                                eventtarget.readOnly = false;
                              }}
                            >
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
                              value={product.cartquantity}
                              readOnly
                              style={{ background: "#ffffff" }}
                              placeholder={product.cartquantity}
                            />
                            <button
                              className="py-2 hover:text-gray-700"
                              onClick={async (event) => {
                                event.preventDefault();
                                let eventtarget = event.currentTarget;
                                if (eventtarget.readOnly) return;
                                eventtarget.readOnly = true;
                                product["addtocart"] = true;
                                await handleCartPlus(
                                  product,
                                  setCartInfoData,
                                  setCount,
                                  cartinfoData,
                                  count
                                );
                                eventtarget.readOnly = false;
                              }}
                            >
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
                        ) : (
                          <button
                            style={{ float: "right" }}
                            className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                            onClick={async (event) => {
                              event.preventDefault();
                              let eventtarget = event.currentTarget;
                              if (eventtarget.readOnly) return;
                              eventtarget.readOnly = true;
                              product["addtocart"] = true;
                              await handleCartPlus(
                                product,
                                setCartInfoData,
                                setCount,
                                cartinfoData,
                                count
                              );
                              eventtarget.readOnly = false;
                            }}
                          >
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x={5}
                                width={2}
                                height={12}
                                fill="#161616"
                              />
                              <rect
                                x={12}
                                y={5}
                                width={2}
                                height={12}
                                transform="rotate(90 12 5)"
                                fill="#161616"
                              />
                            </svg>
                          </button>
                        )} */}
                      </div>
                    </div>
                  ))}
                  {/* {myArray.map((name) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                      <div className="p-6 bg-gray-50">
                        <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                          -15%
                        </span>

                        <a className="block px-6 mt-6 mb-2" href="/p/">
                          <img
                            className="mb-5 mx-auto h-56 w-full object-contain"
                            src={name}
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
                  ))} */}
                  {/* <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
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
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div className="text-center">
              <center>
                <a
                  className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-2 px-8 rounded-md uppercase"
                  href='javascript:;'
                >
                  Show More
                </a>
              </center>
            </div> */}
          </div>
        </section>

        <section className="py-6 bg-blue-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 pb-6 lg:pb-16 border-b border-gray-400">
              <div className="w-full lg:w-3/5 px-4 mb-20">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                    <h3 className="mb-8 text-xl font-bold font-heading text-white">
                      Information
                    </h3>
                    <ul>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="privacypolicy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="termsandconditions"
                        >
                          Terms And Condtions
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="shippingandrefundpolicy"
                        >
                          Shipping And Refund Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Reward program
                        </a>
                      </li>
                      <li className="mb-6">
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
                    <h3 className="mb-8 text-xl font-bold font-heading text-white">
                      Customer Service
                    </h3>
                    <ul>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Return an order
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Search Terms
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Advanced Search
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Orders and Returns
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          FAQs
                        </a>
                      </li>
                      <li className="mb-6">
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
                    <h3 className="mb-8 text-xl text-white font-bold font-heading">
                      Contact Us
                    </h3>
                    <ul>
                      <li className="mb-6">
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
                      <li className="mb-6">
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
              <div className="w-full lg:w-2/5 px-4 order-first lg:order-1 mb-20">
                <h3 className="mb-6 text-xl text-white font-bold font-heading">
                  Join our Newsletter
                </h3>
                <p className="mb-8 text-xl text-yellow-500 font-bold font-heading">
                  News, sales:
                </p>
                <div className="mb-6 relative lg:max-w-xl lg:mx-auto bg-white rounded-lg">
                  <div className="relative flex flex-wrap items-center justify-between">
                    <div className="relative flex-1">
                      <span className="absolute top-0 left-0 ml-8 mt-4 font-semibold font-heading text-xs text-gray-400">
                        Drop your e-mail
                      </span>
                      <input
                        className="inline-block w-full pt-8 pb-4 px-8 placeholder-gray-900 border-0 focus:ring-transparent focus:outline-none rounded-md"
                        type="text"
                        placeholder="contact@tamiltshirts.in"
                      />
                    </div>
                    <a
                      className="inline-block w-auto bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase text-center"
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
                    src="yofte-assets/brands/visa.svg"
                    alt=""
                  />
                  <img
                    className="mr-4 mb-2"
                    src="yofte-assets/brands/paypal.svg"
                    alt=""
                  />
                  <img
                    className="mb-2"
                    src="yofte-assets/brands/mastercard.svg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-auto flex">
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                    href={() => {
                      return false;
                    }}
                  >
                    <img
                      src="yofte-assets/buttons/facebook-white-circle.svg"
                      alt=""
                    />
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
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
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    href={() => {
                      return false;
                    }}
                  >
                    <img src="yofte-assets/buttons/twitter-circle.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="Footer-content text-light">
              <h2 className="text-xl text-white font-bold font-heading">
                {" "}
                TAMIL T-SHIRTS THE NEW AGE ONLINE SHOPPING EXPERIENCE.
              </h2>
              <p className="text-gray-50 hover:text-gray-200">
                Tamiltshirts® is a lifestyle fashion brand committed to crafting
                innovative and distinctive fashion for the trendy, contemporary
                Indian. Our brand was born out of a dedication to making a
                positive impact through innovation, honesty, and thoughtfulness.
                We constantly strive to provide an altered and improved fashion
                experience that goes beyond the ordinary, ensuring that our
                creations resonate with your individuality and style. At
                Tamiltshirts®, we believe in setting new standards and pushing
                boundaries, offering you a fashion journey that is both
                meaningful and unique.
              </p>
              <br></br>
              <p className="text-gray-50 hover:text-gray-200">
                Empowering style since 2012, TAMIL T-SHIRTS® boasts a 400-member
                strong team, with a remarkable track record of 2 million
                products sold. Our unrestricted approach to experimentation
                allows us to strike the perfect balance between creativity and
                relatability, resulting in innovative designs that redefine
                fashion. Always at the forefront of style, our product range is
                consistently fresh and in-demand, with monthly sales exceeding 1
                lakh products. Operating on a vertical integration model, we
                manufacture our products in-house, eliminating middlemen to
                offer high-quality fashion at affordable prices. Our commitment
                extends beyond fashion to environmental and social
                responsibility, encompassing practices like rainwater
                harvesting, sustainable packaging, and employee benefits. At
                TAMIL T-SHIRTS®, we not only keep up with the latest trends but
                also set them. From our exclusive T-shirt collection to
                personalized Tamil letter T-shirts, we provide an accessible,
                affordable, and thoughtful online shopping experience tailored
                for the Indian fashion enthusiast.
              </p>{" "}
              <br></br>
              <h2 className="text-xl text-white font-bold font-heading">
                ONLINE SHOPPING AT TAMIL T-SHIRTS IS HASSLE-FREE, CONVENIENT AND
                SUPER-EXCITING!
              </h2>
              <p className="text-gray-50 hover:text-gray-200">
                Transforming the shopping experience, online shopping is now a
                delightful journey right from the comfort of your home. Gone are
                the days of planning trips to physical stores; today, you can
                indulge in the excitement of online shopping with
                tamiltshirt.com. Explore a world of amazing deals, discounts,
                and a user-friendly interface that stands out among other online
                shopping sites in India. With numerous shopping filters, we
                ensure your experience is truly hassle-free. Welcome to
                tamiltshirt.com, where convenience meets exceptional offers,
                making online shopping a joyous affair in every click.
              </p>{" "}
              <br></br>
              <p className="text-gray-50 hover:text-gray-200">
                Welcome to Tamiltshirts®, your ultimate destination for the
                trendiest online fashion. Explore our curated collection of
                fine, high-quality merchandise and embark on a delightful online
                shopping experience for both men and women. Discover a diverse
                range, from men's fashion to essential clothing items, as well
                as a wide variety of women's wear and accessories. Simply fill
                up your carts and enjoy swift home delivery for all orders.
                Indulge in the latest fashion trends with Tamiltshirts®, where
                style meets convenience. Our exciting categories, combined with
                exclusive online shopping offers, create an irresistible and
                uber cool combo for fashion enthusiasts. Whether you're shopping
                for yourself or looking for the perfect gift, Tamiltshirts®
                guarantees a smile on the faces of your near and dear ones.
                Elevate your fashion journey with Tamiltshirts®, where every
                click is a step towards style and satisfaction.
              </p>{" "}
              <br></br>
              <h2 className="text-xl text-white font-bold font-heading">
                TAMILTSHIRT.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!
              </h2>
              <p className="text-gray-50 hover:text-gray-200">
                Experience the epitome of accessible online fashion with
                Tamiltshirt.com. Dive into our latest collections featuring
                Marvel t-shirts, including official Avengers and Captain America
                merchandise. We specialize in creating personalized Tamil word
                t-shirts and Tamil letter t-shirts, adding a unique touch to
                your wardrobe. Discover the quirkiest t-shirts unavailable on
                any other Indian online shopping site, exclusively showcased at
                Tamiltshirt.com. If your wardrobe craves a stylish
                transformation, Tamiltshirt.com stands as your top choice among
                online shopping sites. Explore our diverse range, from trendy
                sliders and joggers to cozy sweatshirts, fashionable bags, and
                backpacks. At Tamiltshirt.com, fashion doesn't have to break the
                bank. Say goodbye to expensive alternatives; here, you'll find
                affordable and chic options to elevate your style.
              </p>
              <p className="text-gray-50 hover:text-gray-200">
                What you wear is a reflection of your mood, and we've got the
                quirky t-shirts that allow you to express yourself with
                confidence. Take a journey through the latest runway trends on
                our Tamiltshirt.com blog and become a trendsetter among your
                peers. With us, you're not just shopping; you're defining your
                style story. No tags, just seamless style and unbeatable
                affordability, making Tamiltshirt.com your go-to destination for
                a fashion-forward online experience.
              </p>
              <br></br>
              <h2 className="text-xl text-white font-bold font-heading">
                DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED
                ONLINE STORE!{" "}
              </h2>{" "}
              <p className="text-gray-50 hover:text-gray-200">
                Explore beyond the ordinary in online fashion with
                Tamiltshirt.com, where we don't just provide thrilling clothing
                options but also offer an array of fabulous accessories,
                featuring exceptionally cool bags and backpacks. Our collection
                is designed for those who appreciate compactness, hassle-free
                functionality, and the ease of storing essentials. Carry your
                belongings with an added touch of swag, thanks to our stylish
                designs.
              </p>{" "}
              <br></br>
              <p className="text-gray-50 hover:text-gray-200">
                At Tamiltshirt.com, we believe in ensuring that our accessories
                section is just as captivating as our clothing line. Immerse
                yourself in the world of cool designs that effortlessly
                complement your style. Our bags and backpacks are not just
                accessories; they are a statement. With Tamiltshirt.com, step
                into a realm where online fashion seamlessly combines
                practicality, style, and a touch of swag, ensuring you never
                compromise on individuality and convenience. <br></br>
                As for our accessories collection, they are also manufactured
                with impeccable quality materials. Our mobile covers are made
                from hard and durable polycarbonate, with a matte finish that
                will make for a great protection for your phone with the rough
                use that we put them through nowadays.{" "}
              </p>{" "}
              <br></br>
              <h2 className="text-xl text-white font-bold font-heading">
                TAMILTSHIRT.COM: THE UBER COOL ONLINE FASHION STORE FOR THE
                YOUTH
              </h2>
              <p className="text-gray-50 hover:text-gray-200">
                {" "}
                At tamiltshirt.com, we offer everything you need to elevate your
                cool quotient. Our extensive range includes plus-size clothing,
                casual shirts for men, and accessories for everyone. We bring
                forth a diverse array of choices, consolidating the best options
                that the online shopping platform in India has to offer under
                one umbrella. Explore a vast selection of men's t-shirts,
                joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants,
                and more to curate a stunning ensemble. Our goal is to cater to
                all kinds of customers by understanding their needs and
                preferences. Communication is the cornerstone of our operation.
                Welcome to your Tamiltshirts® Online Fashion Shop! Don't miss
                out on our attractive daily online shopping offers. Express your
                style effortlessly with our wide range of apparels just a click
                away. Make a statement with our premium t-shirts online—more
                style, more value. Get more, pay less! Your fashion journey
                begins here.
              </p>{" "}
              <br></br>
              <h2 className="text-xl text-white font-bold font-heading">
                OUR PHILOSOPHY
              </h2>
              <p className="text-gray-50 hover:text-gray-200">
                At Tamiltshirts®, our mission is to craft fashion that not only
                aligns with the latest local and global trends but also provides
                functional value for your money. We prioritize quality
                materials, ensuring comfortable and flattering prints that make
                you stand out. We delve into the minds of our customers, drawing
                inspiration from their conversations and experiences to create
                graphics that resonate and relate. Constant and consistent
                innovation is at our core, offering our fans nothing short of
                the best at affordable rates. Unlike many, we don't outsource
                manufacturing; from design conception to production and styling,
                everything happens in-house. We're vertically integrated,
                bringing fashion directly from us to your doorstep without
                middlemen, ensuring reliability and building trust with our
                fans. Environmental impact is a concern, and we're actively
                implementing initiatives, such as optimizing processes to use
                only what we need from nature, rainwater harvesting, and
                recycling water from our RO facility. At Tamiltshirts®, our
                spirit is about making an impact by breaking conventions and
                offering a different perspective!
              </p>{" "}
              <br></br>
            </div>
            <div className="pt-8 flex items-center justify-center">
              <a
                className="inline-block mr-4 text-white text-2xl font-bold font-heading"
                href="/"
              >
                <img
                  className="h-7"
                  src={`yofte-assets/logos/${lowercasenosp(
                    store
                  )}/logowhite.webp`}
                  alt=""
                  width="auto"
                />
              </a>
              <p className="inline-block text-sm text-gray-200">
                © Copyright 2021 TamilTshirts
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
