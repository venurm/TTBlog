import React, { useEffect,  useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";

import img1 from "./boy.png"
import img2 from "./woman.png"
import img3 from "./children.png"
import img4 from "./kiss.png"
import img5 from "./purse.png"
import img6 from "./love.png"
import img7 from "./chat.png"
import img8 from "./phone.png"
import img9 from "./user.png"
import img10 from "./exit.png"
import { getUserdata } from "../utilities/sessionexpiry";
import { Link } from "react-router-dom";


export default function NavbarMain(props) {
  const { storeid } = props;
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
  const [userData, setUserData] = useState(getUserdata());

  useEffect(() => {
    handleGetCartInfoStorageItems(setCartInfoData);
  }, []);


  const[isEnabled ,setIsEnabled ]=useState(true);
  
  const initializeWhatsappChatWidget = (enabled) => {
    if (!enabled) return; 

    const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?12205';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    const options = {
      "enabled": true,
      "chatButtonSetting": {
        "backgroundColor": "#00e785",
        "ctaText": "Chat with Tamiltshirts",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginRight": "20",
        "marginBottom": "20",
        "ctaIconWATI": false,
        "position": "right"
      },
      "brandSetting": {
        "brandName": "Tamiltshirts",
        "brandSubTitle": "Tamiltshirts",
        "brandImg": "https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/VTamilFavicon.webp",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello. We would want to avail your services. Kindly get in touch with Tamiltshirts",
        "backgroundColor": "#00e785",
        "ctaText": "Chat with us",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "919551789459"
      }
    };
    script.onload = () => {
      window.CreateWhatsappChatWidget(options);
    };
    document.body.appendChild(script);
  };

  const [pageinit, setPageInit] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
  };
  const toggleDropdown5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5);
  };
  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());
  initializeWhatsappChatWidget(isEnabled); 

    // console.log(social[4]?.mobile);
  }

  const getcartCount = () => {
    return cartinfoData.cartcount;
  };
  const cartCount = getcartCount();
  return (
    <React.Fragment>

      <>
        <section className="relative" >
          <nav
            style={{ fontWeight: 500, fontSize: "13px" }}
            className="flex justify-between border-b navcustombg"
          >
            <div className="px-6 py-2 flex w-full items-center">

              <ul className="hidden xl:flex font-heading">


                <div className="dropdownnav mr-12">
                  <a className="hover:text-gray-600 dropbtnnav" href="/products/men">MEN</a>
                  <div className="dropdown-contentnav" style={{
                    zIndex: 10,

                  }}>
                    <a  href="/products/round-neck-half-sleeve-tshirts" id='30'>ROUND NECK HALF SLEEVE TSHIRTS</a>
                    <a href="/products/round-neck-full-sleeve-tshirts" id='31'>ROUND NECK FULL SLEEVE TSHIRTS</a>
                    <a href="/products/v-neck-half-sleeve-tshirts" id='32'>V-NECK HALF SLEEVE TSHIRTS</a>
                    <a href="/products/polo-collar-tshirts" id='33'>POLO COLLAR TSHIRTS</a>
                    <a href="/products/hooded-sweatshirts" id='34'>HOODED SWEATSHIRTS</a>
                    <a href="/products/zipper-hoodies" id='35'>ZIPPER HOODIES</a>
                    <a href="/products/sweated-tshirts" id='36'>SWEATED TSHIRTS</a>
                    <a href="/products/polo-collar-tshirts-with-pocket" id='37'>POLO COLLAR TSHIRTS - WITH POCKET</a>
                  </div>
                </div>

                <div className="dropdownnav mr-12">
                  <a className="hover:text-gray-600 dropbtnnav" href="/products/women">WOMEN</a>
                  <div className="dropdown-contentnav" style={{
                    zIndex: 10,

                  }}>
                    <a href="/products/women-round-neck-tshirts-half-sleeve"id='38'> WOMEN ROUND NECK TSHIRTS HALF SLEEVE</a>
                    <a href="/products/hooded-sweatshirts"id='39'>HOODED SWEATSHIRTS</a>
                    <a href="/products/zipper-hoodies"id='40'>ZIPPER HOODIES</a>
                    <a href="/products/crop-tops"id='41'>CROP TOPS</a>
                    <a href="/products/crop-hoodies"id='42'> CROP HOODIES</a>
                    <a href="/products/women-long-top"id='43'>WOMEN LONG TOP</a>
                    <a href="/products/sweated-tshirts"id='44'>SWEATED TSHIRTS</a>
                    <a href="/products/polo-collar-tshirts-with-pocket"id='45'>POLO COLLAR TSHIRTS - WITH POCKET</a>
                  </div>
                </div>

                <div className="dropdownnav mr-12">
                  <a className="hover:text-gray-600 dropbtnnav" href="/products/kids">KIDS</a>
                  <div className="dropdown-contentnav" style={{
                    zIndex: 10,

                  }}>
                    <a href="/products/toddlers-round-neck-tshirts"id='44'>TODDLER'S ROUND NECK TSHIRTS</a>
                    <a href="/products/kids-round-neck-tshirts"id='45'>KIDS ROUND NECK TSHIRTS</a>
                    <a href="/products/infant-half-sleeve-tshirts"id='46'>INFANT HALF SLEEVE TSHIRTS</a>
                    <a href="/products/romper-half-sleeve-tshirts"id='47'>ROMPER HALF SLEEVE TSHIRTS</a>
                    <a href="/products/pullover-hoodies"id='48'> PULLOVER HOODIES</a>

                  </div>
                </div>
                <div className="dropdownnav mr-12">
                  <a className="hover:text-gray-600 dropbtnnav" href="/products/couple-tshirts-collection">  COUPLE COLLECTIONS</a>
                </div>
                <div className="dropdownnav mr-12">
                  <a className="hover:text-gray-600 dropbtnnav" href="/products/apparels">APPARELS</a>
                  <div className="dropdown-contentnav" style={{
                    zIndex: 10,

                  }}>
                    <a href="/products/wallet-purses" id='52'>WALLET&PURSES</a>
                    <a href="/products/copper-bracelet" id='53'>COPPER BRACELET</a>
                    <a href="/products/cotton-bags" id='54'> COTTON BAGS</a>
                    <a href="/products/stainless-steel-bracelet" id='55'>STAINLESS STEEL BRACELET</a>
                    <a href="/products/keychains" id='56'> KEYCHAINS</a>

                  </div>
                </div>



              </ul>
              <a className="flex-shrink-0 xl:mx-auto text-3xl font-bold font-heading" href="/" aria-label="Visit Tamiltshirts - Your Ultimate Destination for Tamil-themed Apparel">
                {/* Logo */}
                <img
                  style={{ height: "38px" }}
                  className="h-12"
                  src={`https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/${storeid}/logo.webp`}
                  alt="Tamiltshirts Logo"
                  width="150"
                />
              </a>

              {/* src={`/yofte-assets/logos/${lowercasenosp(store)}/logo.webp`} */}



              <div className="hidden xl:flex items-center">





                <Link className="mr-2 hover:text-gray-600" to="#">
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
                </Link>
                <Link
                  className="flex items-center hover:text-gray-600"
                  to="/cart"
                >
                  <div className="pull-right mainHeaderCols activemenuwrp">
                    <div className="actionMenu" style={{ padding: "10px" }}>
                      <span
                        className="actionMenu actionMenuInner"
                        id="testHeaderCart"
                      >
                        <a
                          href="/cart"
                          className="cartIcon"
                          style={{ paddingRight: 16, position: "relative" }}
                        >
                          {/* <i className="icon_bag" aria-hidden="true" /> */}
                          <i className="fa fa-shopping-cart  pt-1" aria-hidden="true"></i>
                          {cartCount === 0 ? (
                          <span className="cartCount" style={{ display: 'none' }}>{cartCount}</span>
                        ) : (
                          <span className="cartCount">{cartCount}</span>
                        )}
                        </a>
                      </span>
                    </div>
                  </div>
                </Link>
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
                  <Link to="/myprofile" style={{cursor:'pointer'}}>My Profile</Link>
                  <Link to="/myaccount" style={{cursor:'pointer'}}>My Account</Link>
                  <Link to="/orderhistory" style={{cursor:'pointer'}}>My Orders</Link>
                  <Link to="/changepassword" style={{cursor:'pointer'}}>Change Password</Link>
                  <hr
                    style={{
                      border: "1px solid #CFD5E2",
                      height: "2px",
                    }}
                  />
                  <Link to="/signin">Logout</Link>
                </div>
              </a>
            </div>

{/* Mobile Menu Start */}
            <a
              className="xl:hidden flex mr-6 items-center text-gray-900"
              href="/cart"
            >

            </a>
            <a
              className="navbar-burger self-center mr-12 xl:hidden"
              href="#"
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



                <div className="mMenuHead clearfix">
                  <div className="welcomeHeader">
                    <h5 className="welcomeGuest py-4" style={{ fontFamily: "montserrat-bold,sans-serif", fontSize: "16px", color: "#000", lineHeight: "normal" }}>
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Welcome Guest
                    </h5>
                    <a href="/signin"
                  style={{
                    display: userData != null ? "none" : "flex",
                    height: "40px"
                  }}
                >
                  <LazyLoadImage src={img9} alt="user logo" width={"25px"}></LazyLoadImage> &nbsp;
                  <span style={{ width: "150px", paddingTop: "5px", fontSize: "12px" }}>
                    SIGN&nbsp;IN
                  </span>
                </a>
        
                  </div>
                </div>


                <hr
                  style={{
                    border: "1px solid #CFD5E2",
                    height: "2px",
                  }}
                />

                <div
                  className="menuListWrpr"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >

                  <p className="menuHeading " style={{ paddingTop: "15px", paddingBottom: "5px" }}>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;SHOP IN
                  </p>
                  <ul style={{ marginRight: "30px" }}>
                  <li onClick={toggleDropdown} className="subcats">
      <a href="#" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
        <b> Men</b>
        <LazyLoadImage
            className="navIcon"
            style={{ width: "25px", float: "right" }}
            src={img1}
            alt="men icon"
        />
    </a>
    
    {isDropdownOpen && (
      <ul >
          <li><a href="/products/men">ROUND NECK HALF SLEEVE TSHIRTS</a></li>
          <li><a href="/products/men">ROUND NECK FULL SLEEVE TSHIRTS</a></li>
          <li><a href="/products/men">V-NECK HALF SLEEVE TSHIRTS</a></li>
          <li><a href="/products/men">POLO COLLAR TSHIRTS</a></li>
          <li><a href="/products/men">HOODED SWEATSHIRTS</a></li>
          <li><a href="/products/men">ZIPPER HOODIES</a></li>
          <li><a href="/products/men">SWEATED TSHIRTS</a></li>
          <li><a href="/products/men">POLO COLLAR TSHIRTS - WITH POCKET</a></li>
        </ul>
    )}
</li>
<li onClick={toggleDropdown2} className="subcats">
      <a href="#" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
        <b>Women</b>
        <LazyLoadImage
            className="navIcon"
            style={{ width: "25px", float: "right" }}
            src={img2}
            alt="men icon"
        />
    </a>
    
    {isDropdownOpen2 && (
      <ul >
          <li><a href="/products/women"> WOMEN ROUND NECK TSHIRTS HALF SLEEVE</a></li>
          <li> <a href="/products/women">HOODED SWEATSHIRTS</a></li>
          <li><a href="/products/women">ZIPPER HOODIES</a></li>
          <li> <a href="/products/women">CROP TOPS</a></li>
          <li><a href="/products/women"> CROP HOODIES</a></li>
          <li><a href="/products/women">WOMEN LONG TOP</a></li>
          <li><a href="/products/women">SWEATED TSHIRTS</a></li>
          <li><a href="/products/women">POLO COLLAR TSHIRTS - WITH POCKET</a></li>
        </ul>
    )}
</li>
<li onClick={toggleDropdown3} className="subcats">
      <a href="#" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
        <b>Kids</b>
        <LazyLoadImage
            className="navIcon"
            style={{ width: "25px", float: "right" }}
            src={img4}
            alt="men icon"
        />
    </a>
    
    {isDropdownOpen3 && (
      <ul >
          <li><a href="/products/kids">TODDLER'S ROUND NECK TSHIRTS</a></li>
          <li><a href="/products/kids">KIDS ROUND NECK TSHIRTS</a></li>
          <li> <a href="/products/kids">INFANT HALF SLEEVE TSHIRTS</a></li>
          <li><a href="/products/kids">ROMPER HALF SLEEVE TSHIRTS</a></li>
          <li><a href="/products/kids"> PULLOVER HOODIES</a></li>
        </ul>
    )}
</li>
<li onClick={toggleDropdown4} className="subcats">
      <a href="#" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
        <b>Couple collections</b>
        <LazyLoadImage
            className="navIcon"
            style={{ width: "25px", float: "right" }}
            src={img3}
            alt="men icon"
        />
    </a>
    
    {isDropdownOpen4 && (
      <ul >
          {/* <li><a href="#home">TODDLER'S ROUND NECK TSHIRTS</a></li>
          <li><a href="#home">KIDS ROUND NECK TSHIRTS</a></li>
          <li> <a href="#home">INFANT HALF SLEEVE TSHIRTS</a></li>
          <li><a href="#home">ROMPER HALF SLEEVE TSHIRTS</a></li>
          <li><a href="#home"> PULLOVER HOODIES</a></li> */}
        </ul>
    )}
</li>
<li onClick={toggleDropdown5} className="subcats">
      <a href="#" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
        <b>Apparels</b>
        <LazyLoadImage
            className="navIcon"
            style={{ width: "25px", float: "right" }}
            src={img5}
            alt="men icon"
        />
    </a>
    
    {isDropdownOpen5 && (
      <ul >
          <li><a href="/products/apparels">WALLET & PURSES</a></li>
          <li><a href="/products/apparels">COPPER BRACELET</a></li>
          <li> <a href="/products/apparels">COTTON BAGS</a></li>
          <li><a href="/products/apparels">STAINLESS STEEL BRACELET</a></li>
          <li><a href="/products/apparels">KEYCHAINS</a></li>
        </ul>
    )}
</li>

                    <li  style={{
                  display: userData === null ? "none" : "flex",backgroundColor:"#F1F1F1",
                  cursor: "pointer", }}>
                    <hr />

                    <p className="menuHeading " style={{ paddingTop: "15px", paddingBottom: "10px", }}>
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp; &nbsp;MY PROFILE
                    </p></li>

                    <li  style={{
                  display: userData === null ? "none" : "block",
                  cursor: "pointer", }}>
                    
                    <Link to="/myaccount" style={{ display: "flex",backgroundColor:"#F1F1F1", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>My Account</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img6}
                        alt="love icon"
                      />

                    </Link></li>
                    <li  style={{
                  display: userData === null ? "none" : "block",
                  cursor: "pointer", }}>
                    <Link className="hover:text-gray-600" to="/orderhistory" style={{ display: "flex",backgroundColor:"#F1F1F1", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>My orders</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img7}
                        alt="support icon"
                      />

                    </Link></li>
                    <li  style={{
                  display: userData === null ? "none" : "block",
                  cursor: "pointer", }}>
                    <Link className="hover:text-gray-600" to="/mywallet" style={{ display: "flex",backgroundColor:"#F1F1F1", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>My Wallet</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img7}
                        alt="support icon"
                      />

                    </Link></li>
                    <li  style={{
                  display: userData === null ? "none" : "block",
                  cursor: "pointer", }}>
                    <a className="hover:text-gray-600" href="#" style={{ display: "flex", backgroundColor:"#F1F1F1",color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>My Wishlist</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img7}
                        alt="support icon"
                      />

                    </a></li>
                  
              <li>

                    <p className="menuHeading " style={{ paddingTop: "15px", paddingBottom: "5px" }}>
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp; &nbsp;CONTACT US
                    </p></li>
                    <li>
                    <a href="/contactus" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>Help & Support</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img6}
                        alt="love icon"
                      />

                    </a></li>
                    <li>
                    <a className="hover:text-gray-600" href="/contactus" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b> Feedback & Suggestions</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img7}
                        alt="support icon"
                      />

                    </a></li>

<li>
                    <a className="hover:text-gray-600" href="/contactus" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>Request a Call</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                        src={img8}
                        alt="phone icon"
                      />

                    </a></li>
                    <li>
                    <p className="menuHeading " style={{ paddingTop: "15px", paddingBottom: "5px" }}>
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp; &nbsp;ABOUT US
                    </p></li>
                    <li>
                    <a href={()=>{return false}} style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>Blog</b>

                      {/* <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                         src={img1}
                      /> */}

                    </a></li>
                    <li>
                    <a className="hover:text-gray-600" href={()=>{return false}} style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>Our Story</b>

                      {/* <LazyLoadImage
                        className="navIcon"
                        style={{ width: "25px", float: "right" }}
                         src={img1}
                      /> */}

                    </a>
                    </li>
                    <hr style={{
                  display: userData === null ? "none" : "flex",
                  cursor: "pointer", }}></hr>
                    <li style={{
                  display: userData === null ? "none" : "block",
                  cursor: "pointer", }}>
                    <div>
                     
                    <a className="hover:text-gray-600 pt-5" href="/signin" style={{ display: "flex", color: "#000", fontSize: "12px", justifyContent: "space-between" }}>
                      <b>Log Out</b>

                      <LazyLoadImage
                        className="navIcon"
                        style={{ width: "20px", float: "right" }}
                         src={img10}
                      />

                    </a></div>
                    </li>




                  </ul>
                </div>



              
              </div>
              <hr
                style={{
                  border: "1px solid #CFD5E2",
                  height: "2px",
                }}
              />
            
            </div>
          </nav>
        </section>



      </>
    </React.Fragment>
  );
}
