import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  handleCartCartInfoMinus,
  handleCartCartInfoPlus,
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchProductsData,
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "./customstyle.css";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { lowercasenosp } from "../utilities/checker";
import { getUserdata } from "../utilities/sessionexpiry";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
const meta = {
  title: "My Profile",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function MyProfile(props) {
  const {
    store,
    description,
    assets,
    storeid,
    hdimage,
    productimage,
    productviewimage,
    thumbnailviewimage,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;
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
  const [signinformData, setSignInFormData] = useState({
    username: "",
    password: "",
    usernameError: false,
    passwordError: false,
    credentialsError: false,
    formloading: false,
    formsuccessmsg: false,
  });

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

  const changeInput = useCallback(async (value, field) => {
    signinformData[field] = value;
    setSignInFormData(signinformData);
    setCount((count) => (count = count + 1));
  });

  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());
    // handleFetchCategoryData(setFormLoader, setCategoryListData);
    // handleFetchProductsData(setFormLoader, setProductsListData);
    handleGetCartInfoStorageItems(setCartInfoData);
  }
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative">
        <NavbarMain storeid={storeid} />
        
        </section>

        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-3xl font-bold font-heading">My Profile</h2>
            <p className="mb-14 text-lg text-gray-500">
              You can update your information here.
            </p>
            <div className="mb-12 py-8 px-8 md:px-20 bg-white">
              <form
                action=""
                style={{ display: "grid", justifyContent: "center" }}
              >
                <input
                  className="w-72 mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="text"
                  placeholder="username"
                  value={signinformData.username}
                  onChange={(e) => changeInput(e.target.value, "username")}
                />
                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.usernameError}
                >
                  Please, enter your user name!
                </p>

                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.credentialsError}
                >
                  These credentials do not match our records.
                </p>
                <input
                  className="w-72 mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="email"
                  placeholder="contact@tamiltshirts.in"
                  value={signinformData.username}
                  onChange={(e) => changeInput(e.target.value, "username")}
                />
                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.usernameError}
                >
                  Please, enter your user name!
                </p>

                <input
                  className="w-72 mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="date"
                  placeholder="date of birth"
                  onChange={(e) => changeInput(e.target.value, "password")}
                />

                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.passwordError}
                >
                  Please, enter your password!
                </p>

                <PulseLoader
                  loading={signinformData.formloading}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <p
                  className="mb-2 text-green-500"
                  hidden={!signinformData.formsuccessmsg}
                >
                  Logged In Successfully, Shop Now.
                </p>
                <button
                  className="mt-2 md:mt-2 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-2 px-8 rounded-md uppercase"
                  onClick={async (event) => {
                    event.preventDefault();
                    let eventtarget = event.currentTarget;
                    if (eventtarget.readOnly) return;
                    eventtarget.readOnly = true;
                    await handleSignIn();
                    eventtarget.readOnly = false;
                  }}
                >
                  Update
                </button>
              </form>
            </div>

            {/* <div className="mb-12 py-8 px-8 md:px-20 bg-white">
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
                  href='javascript:;'
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
                        href='javascript:;'
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href='javascript:;'
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
                        href='javascript:;'
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href='javascript:;'
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
                        href='javascript:;'
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href='javascript:;'
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="py-8 px-8 md:px-20 bg-white">
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
                  href='javascript:;'
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
                        href='javascript:;'
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href='javascript:;'
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
                        href='javascript:;'
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href='javascript:;'
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
                        href='javascript:;'
                      >
                        View summary
                      </a>
                      <a
                        className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                        href='javascript:;'
                      >
                        Buy again
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

      
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
      </>
    </React.Fragment>
  );
}
