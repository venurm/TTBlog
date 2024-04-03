import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// import Uppy from "@uppy/core";
// import { Dashboard } from "@uppy/react";
import CanvasContainer from "./XmaniaCanvasContainer";
import "./Xmaniastyles.css";
// Don't forget the CSS: core and the UI components + plugins you are using.
// import "@uppy/core/dist/style.min.css";
// import "@uppy/dashboard/dist/style.min.css";

import {
  handleCartCartInfoMinus,
  handleCartCartInfoPlus,
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchProductsData,
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import NavbarMain from "./navbarmain";
import Footer from "./footer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function UppyFileUpload() {
  // const uppy = new Uppy();
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

        <section className="py-8">
          <div className="container mx-auto px-4" style={{ display: "flex" }}>
            {/* <Dashboard uppy={uppy} /> */}

            <div className="container mx-auto px-4">
              <div className="flex items-center">
                <CanvasContainer />
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
                  src={`yofte-assets/logos/${lowercasenosp(
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

            <center>
              <div
                className="w-full"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setshowFooter(false);
                  setCount({ ...count, count: count + 1 });
                }}
              >
                <IoIosArrowDropdownCircle color="#fff" />
              </div>
            </center>
          </div>
        </section>

       <Footer/>
      </>
    </React.Fragment>
  );
}
