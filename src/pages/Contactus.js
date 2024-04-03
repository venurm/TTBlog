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
const meta = {
  title: "Contact Us",
  meta: [],
  link: [],
  style: [],
  script: [],
};
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Footer from "./footer";
import NavbarMain from "./navbarmain";
export default function Contactus(props) {
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
          <div className="container mt-10 mx-auto px-4">
            <div className="flex flex-wrap flex-col-reverse sm:flex-row justify-between">
              <div className="w-full sm:w-1/2 mb-4">
                <div className="max-w-full p-2">
                  <h2 className="mb-4  text-3xl font-bold font-heading">
                    GET IN TOUCH WITH US</h2>
                  <p className="text-gray-600 pb-10">
                    Get in touch with us! At Tamil T-shirts, we value your feedback and inquiries.</p>

                  <p className="text-gray-600 pb-10">Reach out to our dedicated helpline anytime between 10 AM to 8 PM, 365 days a year, for any questions, concerns, or product-related queries.</p>

                  <p className="text-gray-600 pb-10">We welcome your messages about anything under the sun - whether it's sharing your latest interests, unique experiences, or specific requests for Tamil T-shirts. Your satisfaction is our priority, and we're here to ensure your shopping experience is exceptional, each and every time.
                  </p>
                </div>

              </div>
              <div className="w-full sm:w-1/2">
                <form>
                  <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                      <p className="mt-1 text-sm leading-6 text-gray-600">Should you have any queries or require assistance, feel free to reach out to us at any time – we're here to help</p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Name *</label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number *</label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              autoComplete="tel"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">How can I assist you today?</label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={''}
                            />
                          </div>
                          <p className="mt-3 text-sm leading-6 text-gray-600">I'm here to assist you with any questions or tasks you have on your mind. Feel free to let me know how I can help.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>

 
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
       
      </>
    </React.Fragment>
  );
}
