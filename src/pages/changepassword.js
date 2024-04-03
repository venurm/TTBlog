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
  title: "Change Password",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ChangePassword(props) {
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
            <h2 className="mb-4 text-3xl font-bold font-heading">
              Change Password
            </h2>
            <p className="mb-14 text-lg text-gray-500">
              You can change your profile password here.
            </p>
            <div className="mb-12 py-8 px-8 md:px-20 bg-white">
              <form
                action=""
                style={{ display: "grid", justifyContent: "center" }}
              >
                <input
                  className="w-72 mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="text"
                  placeholder="Password"
                  value={signinformData.username}
                  onChange={(e) => changeInput(e.target.value, "password")}
                />
                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.usernameError}
                >
                  Please, enter your old password!
                </p>

                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.credentialsError}
                >
                  These credentials do not match our records.
                </p>

                <input
                  className="w-72 mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => changeInput(e.target.value, "password")}
                />

                <p
                  className="mb-2 text-red-500"
                  hidden={!signinformData.passwordError}
                >
                  Please, enter your password!
                </p>

                <input
                  className="w-72 mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                  type="password"
                  placeholder="Re-Type Password"
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
                  Update Password
                </button>
              </form>
            </div>

          </div>
        </section>

    <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
      </>
    </React.Fragment>
  );
}
