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
import { AxiosError, getUserdata } from "../utilities/sessionexpiry";
import { AK } from "../constants/AppKeys";
import { AxiosPost } from "../utilities/axioscall";
import { checkerArray, lowercasenosp } from "../utilities/checker";
import { useLocation } from "react-router-dom";
import moment, { now } from "moment";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
const meta = {
  title: "Order Details",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function OrderDetails(props) {
  const {
    store,
    description,
    assets,
    storeid,
    hdimage,
    productimage,
    productviewimage,
    thumbnailviewimage,
    assetsUrl,
    categoryListData,
    versionmanagerListData,
    colorcodesListData,
    productscolorcodesListData,
    sizeListData,
    productssizeListData,
    productsListData,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);

  const [orderhistoryData, setOrderDetailsData] = useState({
    formError: false,
    formloading: false,
    formsuccessmsg: false,
  });
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
  const [userData, setUserData] = useState({});
  const [orderData, setOrderData] = useState([]);
  const [orderinfo, setorderinfo] = useState({});
  const [orderaddress, setorderaddress] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (cartinfoData.cartcount > 5) {
      console.log("***");
    } else {
      console.log("***");
    }
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  useEffect(() => {
    if (count > 5) {
      console.log("***");
    } else {
      console.log("***");
    }
  }, [count]);

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };

  const changeInput = useCallback(async (value, field) => {
    orderhistoryData[field] = value;
    setOrderDetailsData(orderhistoryData);
    setCount((count) => (count = count + 1));
  });

  const handlefetchOrders = async () => {
    changeInput(true, "formloading");
    return await AxiosPost(AK.VIEWORDERAPI, {}, true)
      .then(async (res) => {
        changeInput(false, "formloading");
        if (res != typeof undefined && res.data != typeof undefined) {
          setOrderData(res.data.datas);
          setCount({ ...count, count: count + 1 });
          return true;
        }
      })
      .catch(async (error) => {
        console.log(error);
        let errors = AxiosError(error);

        return false;
      });
  };

  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());

    if (location.state != null && location?.state?.orderinfo != null) {
      setorderinfo(location?.state?.orderinfo);
      setorderaddress(location?.state?.orderaddress);
    }
    // handleFetchCategoryData(setFormLoader, setCategoryListData);
    // // handleFetchProductsData(setFormLoader, setProductsListData);
    // handlefetchOrders();
    // handleGetCartInfoStorageItems(setCartInfoData);
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
            <div className="orderFlow--wrapper">
              <div className="container custmPadding myaccHeader  undefined">
                <div className="backtoListing hidden-xs">
                  <a
                    className="active"
                    aria-current="true"
                    id="testBackToList"
                    href="/orderhistory"
                  >
                    <i
                      style={{ paddingTop: "5px" }}
                      className="icon_previous"
                    />
                    <span>Back to My Orders</span>
                  </a>
                </div>
                <div className="maHead visible-xs">
                  <a href="/orderhistory">
                    <i className="icon_previous" />
                  </a>
                  My Orders
                </div>
              </div>
              <div className="container orderCustom--container">
                <div className="col-sm-7 noPd">
                  <div className="ordersDetailWrapper">
                    <div className="ordersDetailWrapper--Box">
                      <div className="ordersDetailWrapper--orderNumber">
                        <h6>
                          Order# <strong>{orderinfo?.order_id}</strong>
                        </h6>
                        <h6>
                          Order Placed{" "}
                          <span>
                            {moment(orderinfo?.created_at).format(
                              "DD MMM YYYY hh:mm A"
                            )}
                          </span>
                        </h6>
                      </div>
                      <div className="ordersDetailWrapper--Box-outer clearfix">
                        {JSON.parse(
                          orderinfo?.cartinfodata
                            ? orderinfo?.cartinfodata
                            : null
                        )?.products?.map((product) => (
                          <>
                            <div>
                              <div className="ordersDetailWrapper--Box-inner">
                                <div className="ordersDetailWrapper--Box-inner_left">
                                  <a href="#" className="containerForTag">
                                    <img
                                      src={
                                        assets +
                                        productimage +
                                        String(
                                          checkerArray(
                                            product.imageurl.split(","),
                                            1
                                          )
                                            ? product.imageurl.split(",")[0]
                                            : ""
                                        )
                                      }
                                      onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src =
                                          "yofte-assets/images/no-image.webp";
                                      }}
                                      alt={product.name}
                                    />
                                  </a>
                                </div>
                                <div className="ordersDetailWrapper--Box-inner_right">
                                  <div className="ordersDetailWrapper--Box-forMobile d-flex flex-column justify-content-between ">
                                    <div className="ordersDetailWrapper--Box-inner_right-text">
                                      {/* <label className="labelDefault labelDanger">
                                        Order failed
                                      </label> */}

                                      <label
                                        className="labelDefault labelWarning"
                                        style={{ color: orderinfo?.transaction_status == "Pending" ? "green" : "black" }}
                                      >
                                        {orderinfo?.transaction_status}
                                      </label>

                                      <p style={{ marginTop: "18px" }}>
                                        {product.name}
                                      </p>
                                      <div className="rsizeDetail">
                                        <h2>
                                          <span>Size: {product?.selectedsize?.code}</span>
                                        </h2>
                                      </div>
                                      <p>
                                        {" "}
                                        <span className="right-text_price">
                                          Rs. {product.sp}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="addressPaymentWrapper">
                      <div className="shippingAddress--wrapper-new">
                        <div className="shippingAddressType">
                          <label>
                            {orderaddress?.primary_addr === 1 ? "HOME" : ""}
                            {orderaddress?.primary_addr === 2 ? "OFFICE" : ""}
                            {orderaddress?.primary_addr === 3 ? "OTHER" : ""}
                          </label>
                        </div>
                        <div className="userDetails">
                          <h6>
                            {orderaddress?.firstname} |{" "}
                            {orderaddress?.phonenumber}{" "}
                          </h6>
                        </div>
                        <div className="shippingaddressData">
                          <p>
                            {orderaddress?.doorno_streetaddress},
                            {orderaddress?.location_town_district},
                            {orderaddress?.city},{orderaddress?.pincode}.
                          </p>
                        </div>
                        <div className="returnProductBar" />
                      </div>
                      <button className="viewAddressPayemnt-wrpr ">
                        <div className="viewPaymentWrapper d-flex justify-content-between">
                          <p>Total: ₹{orderinfo?.totalamt}</p>
                          <span>VIEW DETAILS </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* <div className="orderHelpWrapper">
                    <h5 className="orderHelpWrapper--heading">
                      NEED HELP WITH YOUR ORDER?
                    </h5>
                    <div className="orderHelpWrapper--buttons">
                      <div className="orderHelp--buttonWrapper">
                        <button className="">
                          HELP AND SUPPORT
                          <i className="icon_next" />
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="hidden lg:block md:block xl:block 2xl:block">
                  <div className="col-sm-5 noPdRight">
                    <div className="shippingAddress--wrapper">
                      <h5>Shipping Details</h5>{" "}
                      <h6>
                        {orderaddress?.firstname}{" "}
                        <label>
                          {orderaddress?.primary_addr === 1 ? "HOME" : ""}
                          {orderaddress?.primary_addr === 2 ? "OFFICE" : ""}
                          {orderaddress?.primary_addr === 3 ? "OTHER" : ""}
                        </label>
                      </h6>
                      <p>
                        {orderaddress?.doorno_streetaddress},
                        {orderaddress?.location_town_district},
                        {orderaddress?.city},{orderaddress?.pincode}.
                      </p>
                    </div>
                    <div className="orderPaymentWrapper">
                      <h4>Payment Summary</h4>
                      <div className="orderPaymentWrapper-row">
                        <span>Cart Total</span>
                        <span className="orderPaymentWrapper-amount">
                          ₹ {orderinfo?.totalamt}
                        </span>
                      </div>
                      <div className="orderPaymentWrapper-row">
                        <span>Delivery Fee</span>
                        <span className="orderPaymentWrapper-amount">FREE</span>
                      </div>
                      <div className="orderPaymentWrapper-row">
                        <span>COD</span>
                        <span className="orderPaymentWrapper-amount">FREE</span>
                      </div>
                      <div className="orderPaymentWrapper-row">
                        <span>Order Total</span>
                        <span className="orderPaymentWrapper-amount">
                          ₹ {orderinfo?.totalamt}
                        </span>
                      </div>
                      <div className="orderPaymentWrapper-row orderPaymentWrapper-totalRow">
                        <span>Amount Paid</span>
                        <span className="orderPaymentWrapper-amount">
                          ₹ {orderinfo?.totalamt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block lg:hidden md:hidden xl:hidden 2xl:hidden">
                  <div className="col-sm-7 noPd">
                    <div className="shippingAddress--wrapper">
                      <h5>Shipping Details</h5>{" "}
                      <h6>
                        {orderaddress?.firstname}{" "}
                        <label>
                          {orderaddress?.primary_addr === 1 ? "HOME" : ""}
                          {orderaddress?.primary_addr === 2 ? "OFFICE" : ""}
                          {orderaddress?.primary_addr === 3 ? "OTHER" : ""}
                        </label>
                      </h6>
                      <p>
                        {orderaddress?.doorno_streetaddress},
                        {orderaddress?.location_town_district},
                        {orderaddress?.city},{orderaddress?.pincode}.
                      </p>
                    </div>
                    <div className="orderPaymentWrapper">
                      <h4>Payment Summary</h4>
                      <div className="orderPaymentWrapper-row">
                        <span>Cart Total</span>
                        <span className="orderPaymentWrapper-amount">
                          ₹ {orderinfo?.totalamt}
                        </span>
                      </div>
                      <div className="orderPaymentWrapper-row">
                        <span>Delivery Fee</span>
                        <span className="orderPaymentWrapper-amount">FREE</span>
                      </div>
                      <div className="orderPaymentWrapper-row">
                        <span>COD</span>
                        <span className="orderPaymentWrapper-amount">FREE</span>
                      </div>
                      <div className="orderPaymentWrapper-row">
                        <span>Order Total</span>
                        <span className="orderPaymentWrapper-amount">
                          ₹ {orderinfo?.totalamt}
                        </span>
                      </div>
                      <div className="orderPaymentWrapper-row orderPaymentWrapper-totalRow">
                        <span>Amount Paid</span>
                        <span className="orderPaymentWrapper-amount">
                          ₹ {orderinfo?.totalamt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
    
        
      </>
    </React.Fragment>
  );
}
