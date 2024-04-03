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
import { useNavigate } from "react-router-dom";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
const meta = {
  title: "Order History",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function OrderHistory(props) {
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
  let navigate = useNavigate();

  const [orderhistoryData, setOrderHistoryData] = useState({
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
  const [shownorders, setshownoorders] = useState(false);

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
    setOrderHistoryData(orderhistoryData);
    setCount((count) => (count = count + 1));
  });

  const handlefetchOrders = async () => {
    setshownoorders(false);
    changeInput(true, "formloading");
    return await AxiosPost(AK.VIEWORDERAPI, {}, true)
      .then(async (res) => {
        changeInput(false, "formloading");
        if (res != typeof undefined && res.data != typeof undefined) {
          console.log(res.data.datas)
          setOrderData(res.data.datas);
          if (res?.data?.datas?.length === 0) {
            setshownoorders(true);
          }
          setCount({ ...count, count: count + 1 });
          return true;
        }
      })
      .catch(async (error) => {
        //console.log(error);
        let errors = AxiosError(error);
        setshownoorders(true);

        return false;
      });
  };

  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());
    // handleFetchCategoryData(setFormLoader, setCategoryListData);
    // handleFetchProductsData(setFormLoader, setProductsListData);
    handlefetchOrders();
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
        {/* #fbfbfb */}
        {/* <div>
                <center>
                  <img
                    src={`yofte-assets/loader/loader.gif`}
                    alt={`${lowercasenosp(store)} loader`}
                  />
                </center>
              </div>

               hidden={orderData?.length === 0}
               hidden={orderData?.length !== 0}
              
              */}
        <section
          hidden={orderData?.length === 0}
          className="py-4 testing-1 bg-white container-y"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-xl font-bold font-heading">
              Order History
            </h2>
            {/* <p className="mb-14 text-lg text-gray-500">
              Recent Orders listed below
            </p> */}

            <div className="container orderCustom--container">
              <div className="ordersWrapper">
                {orderData.map((order) => (
                  <>
                    <div>
                      <div className="ordersDetailWrapper--orderNumber">
                        <h6>
                          Order# <strong>{order.order_id}</strong>
                        </h6>
                      </div>
                      <a
                        aria-current="false"
                        data-orderid={order.order_id}
                        href="#"
                      />
                      <div className="ordersWrapper--Box">
                        <a
                          aria-current="false"
                          data-orderid={order.order_id}
                          href="#"
                        />
                        <div className="ordersWrapper--Box-outer">
                          <a
                            aria-current="false"
                            data-orderid={order.order_id}
                            href="#"
                          />
                          {JSON.parse(order?.cartinfodata)?.products.map(
                            (product) => (
                              <>
                                <div className="ordersWrapper--Box-inner">
                                  <a
                                    aria-current="false"
                                    data-orderid={order.order_id}
                                    href="#"
                                  />
                                  <div className="ordersWrapper--Box-inner_left">
                                    <a
                                      aria-current="false"
                                      data-orderid={order.order_id}
                                      href="#"
                                    />
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
                                  <div className="ordersWrapper--Box-inner_right">
                                    <div className="ordersWrapper--Box-inner_right-text">
                                      <a href="#">
                                        <p> {product.name}</p>
                                      </a>
                                      <p>
                                        <span>Size: {product?.selectedsize?.code}</span>
                                      </p>
                                    </div>
                                    <label
                                      className="labelDefault labelWarning"
                                      style={{ color: order?.transaction_status == "Pending" ? "green" : "black" }}
                                    >
                                      {order?.transaction_status}
                                    </label>
                                  </div>
                                </div>
                              </>
                            )
                          )}

                          <div className="ordersWrapper--Box-inner_right-button">
                            {/* orderaddress: JSON.parse(
                                      order?.deliveryaddress
                                    ), */}
                            <button
                              onClick={(event) => {
                                navigate("/orderdetails?id=" + order.order_id, {
                                  state: {
                                    orderinfo: order,

                                  },
                                });
                              }}
                            >
                              order info{" "}
                              <img
                                src="https://images.bewakoof.com/web/right-arrow-2x-1588841172.png"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                {/* <div>
                  <div className="ordersDetailWrapper--orderNumber">
                    <h6>
                      Order# <strong>56173807</strong>
                    </h6>
                  </div>
                  <a
                    aria-current="false"
                    data-orderid={56173807}
                    href="/myaccount/orders/56173807"
                  />
                  <div className="ordersWrapper--Box">
                    <a
                      aria-current="false"
                      data-orderid={56173807}
                      href="/myaccount/orders/56173807"
                    />
                    <div className="ordersWrapper--Box-outer">
                      <a
                        aria-current="false"
                        data-orderid={56173807}
                        href="/myaccount/orders/56173807"
                      />
                      <div className="ordersWrapper--Box-inner">
                        <a
                          aria-current="false"
                          data-orderid={56173807}
                          href="/myaccount/orders/56173807"
                        />
                        <div className="ordersWrapper--Box-inner_left">
                          <a
                            aria-current="false"
                            data-orderid={56173807}
                            href="/myaccount/orders/56173807"
                          />
                          <a
                            href="/p/mens-white-shirt-ss23shrtcsmssrt5578?src=myorder"
                            className="containerForTag"
                          >
                            <img
                              src="https://images.bewakoof.com/t320/men-s-white-shirt-596670-1686842911-1.jpg"
                              alt="undefined"
                            />
                          </a>
                        </div>
                        <div className="ordersWrapper--Box-inner_right">
                          <div className="ordersWrapper--Box-inner_right-text">
                            <a href="/p/mens-white-shirt-ss23shrtcsmssrt5578?src=myorder">
                              <p>Men's White Shirt</p>
                            </a>
                            <p>
                              <span>Size: 40</span>
                            </p>
                          </div>
                          <label className="labelDefault labelWarning">
                            Payment confirmation awaited
                          </label>
                        </div>
                      </div>
                      <div className="ordersWrapper--Box-inner_right-button">
                        <button>
                          order info{" "}
                          <img
                            src="https://images.bewakoof.com/web/right-arrow-2x-1588841172.png"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* <div className="mb-12 py-8 px-8 md:px-20 bg-white">
              {orderData.map((order) => (
                <>
                  <div className="flex flex-wrap mb-8 pb-4 border-b">
                    <div className="mr-20">
                      <h4 className="text-gray-600">Order Number</h4>
                      <p className="text-blue-300 font-bold font-heading">
                        {order.order_id}
                      </p>
                    </div>
                    <div className="mr-auto">
                      <h4 className="text-gray-600">Date</h4>
                      <p className="text-blue-300 font-bold font-heading">
                        {new Date(order.created_at).getDate()}-
                        {new Date(order.created_at).getMonth()}-
                        {new Date(order.created_at).getFullYear()}
                      </p>
                    </div>
                    <div className="mr-auto">
                      <h4 className="text-gray-600">Total Spend</h4>
                      <p className="text-blue-300 font-bold font-heading">
                        {order.amt}
                      </p>
                    </div>
                    <a
                      id={"shop" + order.order_id}
                      className="inline-flex w-full md:w-auto mb-4 md:mb-0 mr-4 bg-gray-100 hover:bg-gray-200 justify-center items-center text-center font-bold font-heading px-6 rounded-md uppercase transition duration-200"
                      href="#"
                      onClick={() => {
                        let ordersummary = document.getElementById(
                          "detail" + order.order_id
                        );
                        if (ordersummary.style.display === "none") {
                          ordersummary.style.display = "block";
                          document.getElementById(
                            "shop" + order.order_id
                          ).innerText = "Hide Summary";
                        } else {
                          ordersummary.style.display = "none";
                          document.getElementById(
                            "shop" + order.order_id
                          ).innerText = "View Summary";
                        }
                      }}
                    >
                      View Summary
                    </a>
                    <a
                      className="inline-flex mt-6 md:mt-0 w-full lg:w-auto justify-center items-center px-6 border hover:border-gray-500 rounded-md font-bold font-heading"
                      href="#"
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
                  <div
                    id={"detail" + order.order_id}
                    style={{ display: "none" }}
                  >
                    <div className="flex flex-wrap -mx-4 mb-8">
                      <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                        <div className="flex items-center justify-center">
                          <img src={AK.PRODUCTPAGEIMAGEURL + "1.png"} alt="" />
                        </div>
                      </div>
                      <div className="w-full lg:w-5/6 px-4">
                        <div className="flex mb-16">
                          <div className="mr-auto">
                            <h3 className="text-xl font-bold font-heading">
                              All is well
                            </h3>
                            <p className="text-gray-500">
                              Customized printed t-shirt
                            </p>
                          </div>
                          <span className="text-2xl font-bold font-heading text-blue-300">
                            ₹1000
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
                            <h4 className="mb-6 font-bold font-heading">
                              Delivered
                            </h4>
                            <p className="text-gray-500">07/23/2021</p>
                          </div>
                          <div className="w-full lg:w-auto ml-auto px-10">
                            <a
                              className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                              href={() => {
                                return false;
                              }}
                            >
                              Buy again
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-8">
                      <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                        <div className="flex items-center justify-center">
                          <img src={AK.PRODUCTPAGEIMAGEURL + "2.png"} alt="" />
                        </div>
                      </div>
                      <div className="w-full lg:w-5/6 px-4">
                        <div className="flex mb-16">
                          <div className="mr-auto">
                            <h3 className="text-xl font-bold font-heading">
                              All is well
                            </h3>
                            <p className="text-gray-500">
                              Lorem ipsum dolor size L
                            </p>
                          </div>
                          <span className="text-2xl font-bold font-heading text-blue-300">
                            ₹1000
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
                            <h4 className="mb-6 font-bold font-heading">
                              Delivered
                            </h4>
                            <p className="text-gray-500">07/23/2021</p>
                          </div>
                          <div className="w-full lg:w-auto ml-auto px-10">
                            <a
                              className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                              href={() => {
                                return false;
                              }}
                            >
                              Buy again
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-8">
                      <div className="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
                        <div className="flex items-center justify-center">
                          <img src={AK.PRODUCTPAGEIMAGEURL + "3.png"} alt="" />
                        </div>
                      </div>
                      <div className="w-full lg:w-5/6 px-4">
                        <div className="flex mb-16">
                          <div className="mr-auto">
                            <h3 className="text-xl font-bold font-heading">
                              All is well
                            </h3>
                            <p className="text-gray-500">
                              Maecenas commodo libero ut molestie dictum. Morbi
                              placerat eros id porttitor sagittis.
                            </p>
                          </div>
                          <span className="text-2xl font-bold font-heading text-blue-300">
                            ₹1000
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
                            <h4 className="mb-6 font-bold font-heading">
                              Delivered
                            </h4>
                            <p className="text-gray-500">07/23/2021</p>
                          </div>
                          <div className="w-full lg:w-auto ml-auto px-10">
                            <a
                              className="inline-block w-full md:w-auto bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-4 px-8 rounded-md uppercase transition duration-200"
                              href={() => {
                                return false;
                              }}
                            >
                              Buy again
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div> */}

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
                      ₹1000
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
                      ₹1000
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
                      ₹1000
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
                      ₹1000
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
                      ₹1000
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
                      ₹1000
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
        <section
          hidden={orderData?.length !== 0}
          className="py-4 testing-1 container-y"
          style={{ backgroundColor: "#fbfbfb", margin: "auto" }}
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-xl font-bold font-heading">
              Order History
            </h2>
            <div hidden={shownorders}>
              <center>
                <img
                  src={`yofte-assets/loader/loader.gif`}
                  alt={`${lowercasenosp(store)} loader`}
                />
              </center>
            </div>
            <div hidden={!shownorders}>
              <center>
                <img
                  src={`yofte-assets/loader/nodata-founds.png`}
                  alt={`${lowercasenosp(store)} loader`}
                />
                <br />
                <p>
                  Looks like you have no items in your order history. <br />
                  Click{" "}
                  <a href="/products" style={{ color: "blue" }}>
                    here
                  </a>{" "}
                  to continue shopping.
                </p>
              </center>
            </div>
          </div>
        </section>
       
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>

       
      </>
    </React.Fragment>
  );
}
