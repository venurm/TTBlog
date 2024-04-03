import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PiCurrencyInr } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { BsFillCartXFill } from "react-icons/bs";
import {
  handleCartCartInfoMinus,
  handleCartCartInfoPlus,
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchProductsData,
  handleGetCartInfoStorageItems,
  handleProductInfoUpdatetoCart,
  handleSetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import { checkerArray } from "../utilities/checker";
import { lowercasenosp } from "../utilities/checker";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
import CheckBoxPage from "./checkbox";

const meta = {
  title: "Cart",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Cart(props) {
  const {
    store,
    description,
    assets,
    storeid,
    hdimage,
    productimage,
    setUserData,
    productviewimage,
    thumbnailviewimage,
    assetsUrl,
    categoryListData,
    userData,
    versionmanagerListData,
    colorcodesListData,
    productscolorcodesListData,
    sizeListData,
    productssizeListData,
    productsListData,
    cartinfoData,
    setCartInfoData,
    count,
    setCount,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;
  const [walletbalance, setWalletbalance] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  const [showpromocodePopup, setshowpromocodePopup] = useState(false);
  const [showcouponsuccessPopup, setcouponsuccessPopup] = useState(false);
  const storeName = store ? lowercasenosp(store) : ""; // Handle undefined or empty store prop
  const [logoImageUrl, setLogoImageUrl] = useState(`/yofte-assets/logos/${storeName}/logo.webp`);
  // const [userData, setUserData] = useState({});

  const [couponlist, setcouponlist] = useState([
    {
      code: "VILVA021",
    },
  ]);

  const [hiddencouponinvalid, sethiddencouponinvalid] = useState(true);
  const [hiddencouponadded, sethiddencouponadded] = useState(true);

  const [couponAndGiftCardInput, setcouponAndGiftCardInput] = useState("");
  const [cartcouponlist, setcartcouponlist] = useState([]);

  const options = [
    { value: '1', text: '1' },
    { value: '2', text: '2' },
    { value: '3', text: '3' },
    { value: '4', text: '4' },
    { value: '5', text: '5' },
    { value: '6', text: '6' },
    { value: '7', text: '7' },
    { value: '8', text: '8' },
    { value: '9', text: '9' },
    { value: '10', text: '10' },
  ];

  //const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event, product) => {
    console.log(event.target.value);
    //product['cartquantity'] = event.target.value;
    product.cartquantity = event.target.value;
    handleProductInfoUpdatetoCart(product, setCartInfoData, setCount, cartinfoData, event.target.value, count);
    //setSelected(event.target.value);
  };

  const [availableData, setAvailabeData] = useState({
    colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    products: [{ id: 110 }, { id: 111 }, { id: 112 }, { id: 113 }, { id: 114 }],
  });
  useEffect(() => {
    if (cartinfoData.cartcount > 5) {
      console.log("***");
    } else {
      console.log("***");
    }
    console.log(cartinfoData);
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };


  function handleCheckboxChange() {
    setIsChecked(prevChecked => !prevChecked); 
    if (!isChecked) {
      setWalletbalance(userData?.wallet - cartinfoData.total); 
    } else {
      setWalletbalance(0); 
    }
  }

  const filterSize = (size) => {
    if (size === null) return true;
    let filtered = availableData.size.filter((avsize) => {
      if (avsize.id === size.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  if (!pageinit) {
    console.log(userData?.wallet);
    setPageInit(true);
    pageRefresh();

  }



  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <NavbarMain storeid={storeid} />

        <section className="relative lg:py-4 testing-1 md:py-4 testing-1 container-y">
          <div
            className="container mx-auto lg:px-4 md:px-4"
            hidden={getcartCount() == 0}
          >
            <div className="cartWrapper">
              <div className="margin-mobile">
                {" "}
                <div className="cartDeskHead container">
                  <span className="qty">
                    <b>My Cart </b>
                    {getcartCount()} item
                  </span>
                </div>
                <div className="bagWapperWithItems">
                  <div className="container cartContainer">
                    <div className="container-fluid" style={{ padding: 0 }}>
                      <div className="col-sm-7 noPd">
                        <div className="df-wrap">
                          <div
                            className="df-inner"
                            style={{
                              backgroundColor: "rgb(252, 255, 238)",
                              height: 50,
                            }}
                          >
                            <img
                              src="https://images.bewakoof.com/web/Red-truck.png"
                              alt="truck"
                              className="df-img"
                              style={{
                                width: 19,
                                height: 12,
                                animationDuration: "2s",
                              }}
                            />
                            <p
                              style={{
                                fontSize: 12,
                                color: "black",
                                fontFamily: "Montserrat",
                              }}
                            >
                              Yay! You get FREE delivery on this order
                            </p>
                          </div>
                        </div>
                        <div className="leftSection">
                          {cartinfoData.products.map((product) => (
                            <div>
                              <div id="">
                                <div className="cartProductBorder clearfix">
                                  <div className="cartProduct">
                                    {/* <div className="prod-offer-wrap">
                                      <div className="prod-offer-text">
                                        <p className="prod-offer-head">
                                          Buy 3 For 1199 offer applicable
                                        </p>
                                        <p className="prod-offer-desc">
                                          Add 2 more item to avail this offer
                                        </p>
                                      </div>
                                      <div>
                                        <button
                                          className="prod-offer-btn"
                                          style={{
                                            color: "rgb(234, 128, 0)",
                                            fontSize: 16,
                                            fontFamily: "montserrat",
                                          }}
                                        >
                                          Add items
                                        </button>
                                      </div>
                                    </div> */}
                                    <div className="cartProductInner">
                                      <div className="">
                                        <div className="prod-row">
                                          <div className="cartProdText">
                                            <span>
                                              <a
                                                className="cartProductName"
                                                aria-current="false"
                                                href="#"
                                              >
                                                {product.name}
                                              </a>
                                            </span>
                                            <div className="productPriceDetails clearfix">
                                              <span className="cartProductPrice">
                                                <b>₹</b>
                                                {product.sp}
                                              </span>
                                              <span className="cartProductMrp">
                                                ₹{product.mrp}
                                              </span>
                                            </div>
                                            <div className="cart-prod-info-msg">
                                              You saved ₹
                                              {product.mrp - product.sp}!
                                            </div>
                                            {/* <div className="prod-offer-apply">
                                              <div className="img-wrap">
                                                <img
                                                  className="img-outer"
                                                  src="https://images.bewakoof.com/web/BXGY-icon-orange-1608789467.png"
                                                  alt=""
                                                />
                                                <img
                                                  className="img-inner"
                                                  src="https://images.bewakoof.com/web/BXGY-icon-white-1608789491.png"
                                                  alt=""
                                                />
                                              </div>
                                              <p>
                                                Buy 3 For 1199 offer applicable
                                              </p>
                                            </div>{" "} */}
                                            <div className="cartModOptionWrap">
                                              <div className="cartModOptionInner">
                                                <div className="cartModOptions ">
                                                  <span className="">
                                                    Size :{" "}
                                                    <b id="testChangeSize">{product?.selectedsize?.code}</b>
                                                  </span>
                                                  {/* <i className="icon_down" /> */}
                                                </div>
                                              </div>
                                              <div className="cartModOptionInner">
                                                <div className="cartModOptions">
                                                  <span>
                                                    Qty :{" "}

                                                    {/* <b id="testChangeQty">1</b> */}
                                                    {/* cartquantity */}
                                                    {/* <select name="Qty" id="testChangeQty"

                                                      handleChange

                                                      onChange={(val) => {
                                                        event.preventDefault.value
                                                      }}>
                                                      <option value="1">1</option>
                                                      <option value="2">2</option>
                                                      <option value="3">3</option>
                                                      <option value="4">4</option>
                                                      <option value="5">5</option>
                                                      <option value="6">6</option>
                                                      <option value="7">7</option>
                                                      <option value="8">8</option>
                                                      <option value="9">9</option>
                                                      <option value="10">10</option>
                                                    </select> */}

                                                    <select value={product?.cartquantity} onChange={(event) => handleChange(event, product)}>
                                                      {options.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                          {option.text}
                                                        </option>
                                                      ))}
                                                    </select>


                                                  </span>{" "}
                                                  {/* <i className="icon_down" /> */}
                                                </div>
                                              </div>
                                            </div>{" "}
                                          </div>
                                          <div className="cartProductImg">
                                            <a aria-current="false" href="#">
                                              <img
                                                src={
                                                  assets +
                                                  productimage +
                                                  String(
                                                    checkerArray(
                                                      product.imageurl.split(
                                                        ","
                                                      ),
                                                      1
                                                    )
                                                      ? product.imageurl.split(
                                                        ","
                                                      )[0]
                                                      : ""
                                                  )
                                                }
                                                onError={({
                                                  currentTarget,
                                                }) => {
                                                  currentTarget.onerror = null; // prevents looping
                                                  currentTarget.src =
                                                    "yofte-assets/images/no-image.webp";
                                                }}
                                                title="Men's Green Cyber Samurai Graphic Printed T-shirt"
                                                alt="Men's Green Cyber Samurai Graphic Printed T-shirt"
                                                loading="lazy"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cartBottomAction">
                                      <div className="cartProductActions">
                                        <div
                                          id="testRemoveCart"
                                          className="rmv-action"
                                          onClick={() => {
                                            let _cartinfodata = cartinfoData;
                                            _cartinfodata.products =
                                              cartinfoData.products?.filter(
                                                (_product) => {
                                                  return (
                                                    _product.id !== product.id
                                                  );
                                                }
                                              );
                                            setCartInfoData(_cartinfodata);
                                            handleSetCartInfoStorageItems(
                                              _cartinfodata
                                            );
                                            setCount({
                                              ...count,
                                              count: count + 1,
                                            });
                                          }}
                                        >
                                          {" "}
                                          Remove{" "}
                                        </div>
                                        <div
                                          id="testSavefrLater"
                                          className="add-w-action"
                                        >
                                          {" "}
                                          Move to Wishlist{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span id="SizeList">
                                <div />
                              </span>
                              <span id="QuantityList">
                                <div />
                              </span>
                              <span id="removeOrWishlist">
                                <div />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="summaryBox col-sm-5 rightSection noPdRight">
                        <span
                          id="CouponSuccess"
                          hidden={!showcouponsuccessPopup}
                        >
                          <div>
                            <div className="close_popup_target popup_backdrop slideUpToMiddle">
                              <div
                                className="popupBody"
                                style={{ borderRadius: 5 }}
                              >
                                <div className="couponReedemBox clearfix">
                                  <div className="couponReedemSuccess">
                                    <div className="successCheckWrapper">
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 130.2 130.2"
                                      >
                                        <circle
                                          className="path circle"
                                          fill="none"
                                          stroke="#fdd734"
                                          strokeWidth={8}
                                          strokeMiterlimit={10}
                                          cx="65.1"
                                          cy="65.1"
                                          r="60.1"
                                        />
                                        <polyline
                                          className="path check"
                                          fill="none"
                                          stroke="#fdd734"
                                          strokeWidth={8}
                                          strokeLinecap="round"
                                          strokeMiterlimit={10}
                                          points="100.2,40.2 51.5,88.8 29.8,67.5 "
                                        />
                                      </svg>
                                    </div>
                                    <span className="couponSuccessMsg">
                                      Coupon Applied Successfully!
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        {/* <div
                          className="cart-story-tribe"
                          style={{ height: 50 }}
                        >
                          <div className="cart-story-tribe-text">
                            <p
                              style={{ fontSize: 14, fontFamily: "montserrat" }}
                            >
                              Save extra{" "}
                              <strong style={{ fontFamily: "montserrat-bold" }}>
                                ₹40
                              </strong>{" "}
                              with{" "}
                              <img
                                alt="TriBe"
                                height={17}
                                width={38}
                                src="https://images.bewakoof.com/web/ic-cm-tribe-lg.svg"
                              />
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div className="icon_next_one">
                              <i className="icon_next " />
                            </div>
                            <div className="icon_next_two">
                              <i
                                className="icon_next"
                                style={{ marginLeft: "-7px" }}
                              />
                            </div>
                          </div>
                        </div> */}
                        <div>
                          <span id="OfferRows">
                            <div />
                          </span>
                          <div
                            className="offerBox"
                            style={{
                              marginBottom: 15,
                              borderRadius: 4,
                              borderWidth: 1,
                              borderStyle: "solid",
                              borderColor: "rgb(234, 234, 234)",
                              backgroundColor: "rgb(255, 255, 255)",
                              color: "rgb(45, 45, 45)",
                              fontFamily: "Montserrat-Regular",
                              lineHeight: "1.44",
                              fontSize: 14,
                              padding: "5px 15px",
                            }}
                          >
                            <div>
                              Whistles! Get extra 15% cashback on prepaid orders
                              above Rs.699. Coupon code - VILVA021
                            </div>
                          </div>
                        </div>
                        <div>
                          <span id="loginConf">
                            <div />
                          </span>
                          <span id="otpConf">
                            <div />
                          </span>
                          <span id="promocode" hidden={!showpromocodePopup}>
                            <div>
                              <div className="close_popup_target popup_backdrop slideUpToMiddle">
                                <div
                                  className="popupBody"
                                  style={{ borderRadius: 5 }}
                                >
                                  <i
                                    id="promocode"
                                    className="close_popup_target icon_close"
                                    onClick={() => {
                                      sethiddencouponadded(true);
                                      sethiddencouponinvalid(true);
                                      setcouponAndGiftCardInput("");
                                      setshowpromocodePopup(false);
                                    }}
                                  />
                                  <div className="couponReedemBox clearfix">
                                    <div className="applyCoupon">
                                      <h3>Apply Coupon / Gift Card</h3>
                                      <form>
                                        <div className="xgroup">
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="couponAndGiftCardInput"
                                            placeholder=""
                                            defaultValue=""
                                            value={couponAndGiftCardInput}
                                            onChange={(e) => {
                                              setcouponAndGiftCardInput(
                                                e.target.value.toUpperCase()
                                              );
                                              if (e.target.value)
                                                document
                                                  .getElementById(
                                                    "entercodelabel"
                                                  )
                                                  .classList.add("active");
                                              else
                                                document
                                                  .getElementById(
                                                    "entercodelabel"
                                                  )
                                                  .classList.remove("active");
                                            }}
                                          />
                                          <span className="bar focus" />
                                          <label
                                            id="entercodelabel"
                                            htmlFor="fname"
                                            className="active"
                                          >
                                            ENTER CODE
                                          </label>
                                          <div
                                            hidden={
                                              !hiddencouponinvalid ||
                                              !hiddencouponadded
                                            }
                                          >
                                            <br />
                                          </div>
                                          <div
                                            className="feedback-wrapper"
                                            hidden={hiddencouponinvalid}
                                          >
                                            <div className="feedback-msg error">
                                              Invalid Code
                                            </div>
                                          </div>
                                          <div
                                            className="feedback-wrapper"
                                            hidden={hiddencouponadded}
                                          >
                                            <div className="feedback-msg error">
                                              Coupon Already Added!
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                      <button
                                        className=""
                                        onClick={() => {
                                          sethiddencouponadded(true);
                                          sethiddencouponinvalid(true);
                                          if (couponAndGiftCardInput === "") {
                                            sethiddencouponinvalid(false);
                                          } else {
                                            let couponfilter =
                                              couponlist.filter((_coupon) => {
                                                return (
                                                  _coupon.code ===
                                                  couponAndGiftCardInput
                                                );
                                              });
                                            if (couponfilter.length > 0) {
                                              if (
                                                cartcouponlist.filter(
                                                  (cartcoupon) => {
                                                    return (
                                                      couponfilter[0].code ===
                                                      cartcoupon.code
                                                    );
                                                  }
                                                ).length > 0
                                              ) {
                                                sethiddencouponadded(false);
                                              } else {
                                                let cartcoupon = cartcouponlist;

                                                cartcoupon.push(
                                                  couponfilter[0]
                                                );
                                                setcartcouponlist(cartcoupon);
                                                setshowpromocodePopup(false);
                                                setcouponsuccessPopup(true);
                                                setTimeout(() => {
                                                  setcouponsuccessPopup(false);
                                                  setCount({
                                                    ...count,
                                                    count: count + 1,
                                                  });
                                                }, 1000);
                                              }
                                            } else {
                                              sethiddencouponinvalid(false);
                                            }
                                          }
                                        }}
                                      >
                                        APPLY
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div
                          className="redeem-button-wraper"
                          onClick={() => {
                            sethiddencouponadded(true);
                            sethiddencouponinvalid(true);
                            setcouponAndGiftCardInput("");
                            document
                              .getElementById("entercodelabel")
                              .classList.remove("active");
                            setshowpromocodePopup(true);
                          }}
                        >
                          <div className="redeem-button d-flex align-items-center justify-content-between">
                            <span>Apply Coupon / Gift Card / Referral</span>
                            <span className="d-flex align-items-center">
                              Redeem
                              <img
                                src="https://images.bewakoof.com/web/coupon-redeem-arrow-1634641878.png"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>

                        {cartcouponlist.map((_couponlist) => (
                          <>
                            <div
                              className="coupon-wrap"
                              style={{
                                position: "relative",
                                marginBottom: 15,
                                borderRadius: 4,
                                borderStyle: "solid",
                                borderColor: "rgb(234, 234, 234)",
                                backgroundColor: "rgba(253, 216, 53, 0.1)",
                                padding: "10px 15px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className="coupon-success-img">
                                  <img
                                    className="success-img"
                                    src="https://images.bewakoof.com/web/teenyicons-tick-circle-solid-1614248395.png"
                                    alt="coupoun success img"
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "inline-block",
                                    paddingRight: 5,
                                    fontFamily: "Montserrat-Bold",
                                    fontWeight: "bold",
                                    fontSize: 12,
                                    color: "rgb(0, 0, 0)",
                                    lineHeight: "1.9",
                                    marginLeft: 5,
                                  }}
                                >
                                  Coupon Applied
                                </div>
                                <span
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    padding: "15px 10px",
                                    color: "rgb(199, 24, 24)",
                                    fontSize: 11,
                                    fontWeight: 900,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    let filteredcoupon = cartcouponlist.filter(
                                      (_ccpl) => {
                                        return _ccpl.code !== _couponlist.code;
                                      }
                                    );
                                    setcartcouponlist(filteredcoupon);
                                  }}
                                >
                                  REMOVE
                                </span>
                                <span className="coupon">VILVA021</span>
                              </div>
                              <div>
                                <p className="cb-text">
                                  Cashback of{" "}
                                  <strong>
                                    ₹{(cartinfoData.total * 10) / 100}
                                  </strong>{" "}
                                  will be credited to your {store} wallet post
                                  successful delivery of your order
                                </p>
                              </div>
                            </div>
                          </>
                        ))}

                        <span id="loginConf">
                          <div />
                        </span>
                        <div className="summeryBorderBox prc-summary">
                          <div className="sectionTopHeading">
                            <h4>Price Summary</h4>
                          </div> 
                          {/* <div className="walletbalanceMSG2 d-flex justify-content-between">
                            <p className="walletbalanceMSG3 d-flex">
                            <input type="checkbox" id="myCheckbox" onChange={handleCheckboxChange} checked={isChecked} />
                              <label for="myCheckbox"></label>&nbsp;&nbsp;Use Tamiltshirts Cash (₹{userData?.wallet})</p> <b className="mt-1"><span >Balance : {walletbalance}</span></b></div> */}
          
                              <CheckBoxPage  
  
          userData={userData}
          setUserData={setUserData}
          cartinfoData={cartinfoData}
  />
                          <div className="bx-pdg">
                            <div className="paymentBox">
                              <div className="prc-bdn prc-bdn-dsk">
                                <div className="d-flex justify-content-between w100 paymentBoxInner ">
                                  <p className="f-b3-r p-brk-dwn false">
                                    Total MRP (Incl. of taxes)&nbsp;
                                  </p>
                                  <p className="f-b3-r p-brk-dwn false">
                                    ₹{cartinfoData.mrptotal}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between w100 paymentBoxInner ">
                                  <p className="f-b3-r p-brk-dwn false">
                                    Shipping Charges&nbsp;
                                  </p>
                                  <p
                                    className="f-b3-r p-brk-dwn false"
                                    style={{ color: "rgb(29, 136, 2)" }}
                                  >
                                    To Be Estimated
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between w100 paymentBoxInner ">
                                  <p className="f-b3-r p-brk-dwn false">
                                    Cart Discount&nbsp;
                                  </p>
                                  <p className="f-b3-r p-brk-dwn false">
                                    - ₹
                                    {cartinfoData.mrptotal - cartinfoData.total}
                                  </p>
                                </div>
                                <div
                                  className="d-flex justify-content-between w100 paymentBoxInner "
                                  style={{
                                    fontFamily:
                                      "montserrat-semibold, sans-serif",
                                  }}
                                >
                                  <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                    Subtotal&nbsp;
                                  </p>
                                  <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                    ₹{cartinfoData.total}
                                  </p>
                                </div>
                                <div
                                  className="d-flex justify-content-between w100 paymentBoxInner "
                                  style={{
                                    fontFamily:
                                      "montserrat-semibold, sans-serif",
                                  }}
                                >
                                  <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                    Tamiltshirts Cash&nbsp;
                                  </p>
                                  <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                    ₹{walletbalance}
                                  </p>
                                </div>
                              </div>
                              <div className="hidden lg:block md:block xl:block 2xl:block">
                                <div className="pmts-box">
                                  <div className="pmts-wrap">
                                    <div className="pmts-pr">
                                      <span>Total</span>
                                      <div className="d-flex">
                                        <p>₹</p>
                                        <p>{cartinfoData.total - walletbalance < 0 ? 0 : cartinfoData.total - walletbalance}</p>
                                      </div>
                                    </div>
                                    <a
                                      id="os_payNow_btn"
                                      className="pmts-btn text-center"
                                      style={{
                                        backgroundColor: "rgb(66, 162, 162)",
                                        borderColor: "rgb(66, 162, 162)",
                                        color: "white",
                                      }}
                                      href="/checkout"
                                    >
                                      Go to checkout
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="hidden lg:block md:block xl:block 2xl:block">
                            <div className="cartInline">
                              <div className="trustBaggeContainer d-flex flex-column">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row  containerInner">
                                    <div className="d-flex flex-column align-items-center">
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/cart-badge-trust.svg"
                                      />
                                      <span className="ProductText">
                                        100% SECURE PAYMENTS
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row  containerInner">
                                    <div className="d-flex flex-column align-items-center">
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/cart-easy-return.svg"
                                      />
                                      <span className="ProductText">
                                        EASY RETURNS &amp; QUICK REFUNDS
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row  containerInner">
                                    <div className="d-flex flex-column align-items-center">
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/quality-check.svg"
                                      />
                                      <span className="ProductText">
                                        QUALITY ASSURANCE
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block md:block xl:block 2xl:block">
                  <div
                    className="container"
                    style={{ maxWidth: 750, margin: "0px auto" }}
                  />
                  <span id="AddressUpdate">
                    <div />
                  </span>
                  <div className="countryListWrapper">
                    <span id="AllCountries">
                      <div />
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: 0,
                      textAlign: "center",
                      background: "rgb(251, 251, 251)",
                    }}
                  >
                    <img
                      src="https://images.bewakoof.com/web/secure-payments-image.png"
                      title="Secure Payments"
                      alt="Secure Payments"
                      style={{
                        maxWidth: 257,
                        width: "100%",
                        margin: "10px auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="inline w-full lg:hidden md:hidden xl:hidden 2xl:hidden">
              <div className="addButtonsWrpr">
                <div className="pmts-wrap">
                  <div className="pmts-pr">
                    <span>Total</span>
                    <div className="d-flex">
                      <p>₹</p>
                      <p>{cartinfoData.total}</p>
                    </div>
                  </div>
                  <a
                    id="os_payNow_btn"
                    className="pmts-btn text-center"
                    style={{
                      backgroundColor: "rgb(66, 162, 162)",
                      borderColor: "rgb(66, 162, 162)",
                      color: "white",
                    }}
                    href="/checkout"
                  >
                    Go to checkout
                  </a>
                </div>
              </div>

              {/* <a
                id="addButtons"
                className="addButtonsWrpr w-full"
                href="/checkout"
              >
                <div
                  className="addButtons d-flex flex-row align-items-center flex-row flex-grow-1  "
                  style={{ opacity: 1, pointerEvents: "auto" }}
                >
                  <div
                    className="p-add-bag bg-yellow-300 hover:bg-yellow-400 btn-border d-flex flex-row align-items-center flex-row align-items-center justify-content-center cursor-p "
                    style={{ flex: "1 1 0%" }}
                  >
                    <span>GO TO CHECKOUT</span>
                  </div>
                </div>
              </a> */}
            </div>

            <div className="inline w-full lg:hidden md:hidden xl:hidden 2xl:hidden">
              <div className="cartInline">
                <div className="trustBaggeContainer d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row  containerInner">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          loading="lazy"
                          alt="offer"
                          src="https://images.bewakoof.com/web/cart-badge-trust.svg"
                        />
                        <span className="ProductText">
                          100% SECURE PAYMENTS
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row  containerInner">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          loading="lazy"
                          alt="offer"
                          src="https://images.bewakoof.com/web/cart-easy-return.svg"
                        />
                        <span className="ProductText">
                          EASY RETURNS &amp; QUICK REFUNDS
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row  containerInner">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          loading="lazy"
                          alt="offer"
                          src="https://images.bewakoof.com/web/quality-check.svg"
                        />
                        <span className="ProductText">QUALITY ASSURANCE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline w-full lg:hidden md:hidden xl:hidden 2xl:hidden">
              <div
                className="container"
                style={{ maxWidth: 750, margin: "0px auto" }}
              />
              <span id="AddressUpdate">
                <div />
              </span>
              <div className="countryListWrapper">
                <span id="AllCountries">
                  <div />
                </span>
              </div>
              <div
                style={{
                  marginTop: 0,
                  textAlign: "center",
                  background: "rgb(251, 251, 251)",
                }}
              >
                <img
                  src="https://images.bewakoof.com/web/secure-payments-image.png"
                  title="Secure Payments"
                  alt="Secure Payments"
                  style={{
                    maxWidth: 257,
                    width: "100%",
                    margin: "10px auto",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="container mx-auto lg:px-4 md:px-4"
            hidden={!(getcartCount() == 0)}
          >
            <div className="p-4 lg:p-4s bg-white">
              <div className="cartDeskHead container">
                <span className="qty">
                  <b>My Cart </b>
                </span>
              </div>
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full">
                  <br />
                  <br />
                  <center>
                    {/* <BsFillCartXFill
                      color="gray"
                      style={{ height: "100px", width: "100px" }}
                    /> */}
                    <img src="yofte-assets/loader/empty-cart.webp" alt="" />
                    <br />
                    <h3>
                      <b>Cart is empty.</b>
                    </h3>
                    <p>
                      Looks like you have no items in your shopping cart. <br />
                      Click{" "}
                      <a href="/products" style={{ color: "blue" }}>
                        here
                      </a>{" "}
                      to continue shopping.
                    </p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>

        {FooterInCart(
          showFooter,
          store,
          footercopyrighttext,
          setshowFooter,
          setCount,
          storeid,
          count
        )}


      </>
    </React.Fragment>
  );
}

function FooterInCart(
  showFooter,
  store,
  footercopyrighttext,
  setshowFooter,
  setCount,
  storeid,
  count
) {
  return (
    <>
      <section className={"inline-block py-4 bg-blue-300 footerStyle"}>
        <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
      </section>
    </>
  );
}
