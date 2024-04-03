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
  title: "Store Location",
  meta: [],
  link: [],
  style: [],
  script: [],
};
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Footer from "./footer";
import NavbarMain from "./navbarmain";
export default function Storelocation(props) {
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
        <center><h2 className="font-bold py-5">FIND US HERE</h2>

          <hr /></center>
        <section className=" testing-1 bg-white ">

          <center>
            <h3 className="font-bold text-gray-500 py-5">Tamiltshirts, Chennai</h3>
            <p className=" py-5">9//11,Narayanaswamy Garden 3rd Main Rd,<br />
              Narayanaswamy Garden,<br />
              Chinna Kodungaiyur,<br />
              Kodungaiyur,Chennai, <br></br>
              TamilNadu 600118</p>
          </center>


        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3189991882573!2d80.24500302603163!3d13.14226716111162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526511d23cf81d%3A0xb09d0167610e6222!2sVilva%20Clothings%20%7C%20Tamil%20Tshirt%20Store!5e0!3m2!1sen!2sin!4v1709183796570!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

     
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
      
      </>
    </React.Fragment>
  );
}
