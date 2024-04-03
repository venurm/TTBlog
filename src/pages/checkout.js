import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PiCurrencyInr } from "react-icons/pi";
import SyncLoader from "react-spinners/SyncLoader";
import FadeLoader from "react-spinners/FadeLoader";
import OTPInput, { ResendOTP } from "otp-input-react";
import { TiTickOutline } from "react-icons/ti";
import { BsCartCheckFill } from "react-icons/bs";
import moment, { now } from "moment";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { checkerArray, lowercasenosp } from "../utilities/checker";
import {
  AxiosDirectPost,
  AxiosInstamojoDirectPost,
  AxiosPost,
} from "../utilities/axioscall";
import { AK } from "../constants/AppKeys";
import { callStores, get, put } from "../utilities/storeManager";
import { SK } from "../constants/StorageKeys";
import { checkerString, checkerStringLen } from "../utilities/checker";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/actions";
import Footer from "./footer";
import NavbarMain from "./navbarmain";
import insamojo from './unnamed.png';
import CheckBoxPage from "./checkbox";
import { handleGetInfoStorageItems, handleSetInfoStorageItems } from "../utilities/storageManager";

const meta = {
  title: "Check Out",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function CheckOut(props) {
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
    userData,
    setUserData,
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
    clearCartInfoData,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;
  const [storeinfo, setStoreInfo] = useState({
    storeid: null,
    store: "",
    title: "",
    description: "",
    assets: "",
    hdimage: "",
    productimage: "",
    productviewimage: "",
    thumbnailviewimage: "",
  });
  const navigate = useNavigate();
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  const [formdisplay, setFormDisplay] = useState([]);
  const [exdeliveryaddress, setExDeliveryAddress] = useState([]);
  const [exdeliveryaddshow, setExDeliveryAddshow] = useState(false);
  const [coffeeloader, setcoffeeloader] = useState(true);
  const [processingpaymentloader, setprocessingpaymentloader] = useState(false);
  const [showstatus, setShowstatus] = useState(0);

  const [pickdeliveryaddress, setpickdeliveryaddress] = useState("");
  const [timerresendsms, settimerresendsms] = useState(30);
  const [shippingrate, setShippingRate] = useState([]);
  const [shippingcalc, setShippingCalc] = useState(0);
  const [checkboxpayment, setcheckboxpayment] = useState(false);

  let formdisplayvalue = {
    loginorsignup: "loginorsignup",
    loginorsignupcontent: "loginorsignupcontent",
    verifywithotp: "verifywithotp",
    verifywithotpcontent: "verifywithotpcontent",
    checkoutsignin: "checkoutsignin",
    deliverycontent: "deliverycontent",
    paymentcontent: "paymentcontent",
    confirmcontent: "confirmcontent",
    ordersummarycontent: "ordersummarycontent",
  };
  // loginorsignup
  // loginorsignupcontent
  // verifywithotp
  // verifywithotpcontent
  // checkoutsignin
  // deliverycontent
  // paymentcontent
  // confirmcontent
  // ordersummarycontent

  const [checkoutDeliveryformData, setCheckoutDeliveryFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    city: "",
    pincode: "",
    emailaddress: "",
    phonenumber: "",
    otpinput: "",
    doorno_streetaddress: "",
    location_town_district: "",
    primary_addr: 1,
    firstnameError: false,
    lastnameError: false,
    countryError: false,
    cityError: false,
    pincodeError: false,
    doorno_streetaddressError: false,
    location_town_districtError: false,
    emailaddressError: false,
    phonenumberError: false,
    otpinputError: false,
    otpinputformError: false,
    otpinputformErrorMsg: "Invalid OTP!",
    otploader: false,
    verifyotploader: false,
    loginorsignupformError: false,
    requestotploading: false,
    otpverifyloading: false,
    formError: false,
    formloading: false,
    formsuccessmsg: false,
    messageError: false,
    message: ""
  });

  const [checkoutPaymentformData, setCheckoutPaymentFormData] = useState({
    onlinepayment: true,
    banktransfer: false,
    upitransfer: false,
    razorpaytransfer: false,
    phonepetransfer: false,
    wallettransfer: false,
    onlinepaymentError: false,
    banktransferError: false,
    upitransferError: false,
    razorpaytransferError: false,
    phonepetransferError: false,
    requiredError: false,
    formError: false,
    formloading: false,
    formsuccessmsg: false,
  });

  const [orderdetails, setOrderDetails] = useState({});

  useEffect(() => {
    console.log("products : " + cartinfoData.total);
    if (cartinfoData.cartcount > 5) {
      console.log("***");
    } else {
      console.log("***");
    }
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  useEffect(() => {

    console.log("***");
  }, [count]);



  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };

  const handleOrderPayment = async () => {
    // if (!userData?.name) {
    //   navigate("/signin");
    //   return;
    // }
    setprocessingpaymentloader(true);

    // console.log("**********");
    //deliveryaddress: JSON.stringify(checkoutDeliveryformData),

    let payload = {
      storeid: storeid,
      purpose: "purpose orderpayment",
      amount: cartinfoData.total,
      phone: checkoutDeliveryformData.phonenumber,
      buyer_name: checkoutDeliveryformData.firstname,
      redirect_url: "https://tamiltshirts.pages.dev/checkout",
      send_email: false,
      webhook: "https://tamiltshirts.pages.dev/checkout",
      send_sms: false,
      email: checkoutDeliveryformData.emailaddress,
      allow_repeated_payments: false,
      deliveryaddress: "123 Main St, City, Country",
      cartinfodata: JSON.stringify(cartinfoData),
      totalamount: cartinfoData.total,
      amount: cartinfoData.total,
      wallet: 1,
      deliverychg: 49,
      name: checkoutDeliveryformData.firstname,
      mobile: checkoutDeliveryformData.phonenumber,
      Pending: "pending",
      shthd: "success",
      pmthd: "online",
    };

    // payload = {
    //   storeid: storeid,
    //   amount: cartinfoData.total,
    //   deliveryaddress: "123 Main St, City, Country",
    //   cartinfodata: [
    //     {
    //       product_id: 1,
    //       quantity: 2,
    //     },
    //     {
    //       product_id: 2,
    //       quantity: 1,
    //     },
    //   ],
    //   totalamount: 1300,
    //   wallet: "wallet_id_123",
    //   deliverychg: 10,
    //   name: "Rahman",
    //   mobile: "1234567890",
    //   Pending: "pending_value",
    //   shthd: "shthd_value",
    //   pmthd: "pmthd_value",
    //   email: "rahman@vilvanetworks.com",
    // };

    // console.log(checkoutPaymentformData.banktransfer);
    // console.log(checkoutPaymentformData.upitransfer);
    // console.log(checkoutPaymentformData.onlinepayment);
    //https://mercury-t2.phonepe.com/transact/pg?token=MTA1ZTY4NGQyMmU2ZjI0NzA3OTAwNzAzMDUzNjUxMzllZTFlNjhiZWZlZjQ4NGM1MTg2YTBjZjhjMGNhNWYyYjQzOmI5YWRiOGRjM2Q3YjVlMTBhODg3Y2ZiYWU0ZjEzYTEz
    if (checkoutPaymentformData.upitransfer) {
      return await AxiosPost(AK.HAODAPAYUPI, payload, true)
        .then((res) => {
          if (res != typeof undefined && res.data != typeof undefined) {
            // console.log(res?.data?.data?.data?.payment_link);
            if (res?.data?.data?.data?.payment_link != "") {
              clearCartInfoData();
              window.location.href = res?.data?.data?.data?.payment_link;
              // window.location.replace(res?.data?.data?.data?.payment_link);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          changeInput_CPFD(false, "formloading");
          return false;
        });
    } else if (checkoutPaymentformData.onlinepayment) {
      return await AxiosPost(AK.INSTAMOJOAPI, payload, true)
        .then((res) => {
          if (res != typeof undefined && res.data != typeof undefined) {
            if (res?.data?.datas?.redirecturl != "") {
              clearCartInfoData();
              window.location.href = res?.data?.datas?.redirecturl;
              // window.location.replace(res.data.datas.redirecturl);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          setprocessingpaymentloader(false);
          changeInput_CPFD(false, "formloading");
          return false;
        });
    } else if (checkoutPaymentformData.razorpaytransfer) {
      return await AxiosPost(AK.RAZORPAYAPI, payload, true)
        .then((res) => {
          if (res != typeof undefined && res.data != typeof undefined) {
            var rzpaykey = res.data.datas;
            var options = {
              key: rzpaykey["key"],
              amount: rzpaykey["amount"],
              currency: rzpaykey["currency"],
              name: rzpaykey["name"],
              description: rzpaykey["description"],
              image: rzpaykey["image"],
              order_id: rzpaykey["order_id"],
              callback_url: rzpaykey["callback_url"],
              prefill: {
                name: rzpaykey["prefill"]["name"],
                email: rzpaykey["prefill"]["email"],
                contact: rzpaykey["prefill"]["contact"],
              },
              notes: {
                address: rzpaykey["notes"]["address"],
              },
              theme: {
                color: rzpaykey["theme"]["color"],
              },
            };
            console.log(options);
            var rzp1 = new Razorpay(options);
            console.log(rzp1);
            clearCartInfoData();
            rzp1.open();
            // if (res?.data?.datas?.redirecturl != "") {
            //   clearCartInfoData();
            //   window.location.href = res?.data?.datas?.redirecturl;
            //   // window.location.replace(res.data.datas.redirecturl);
            // }
          }
        })
        .catch((error) => {
          console.log(error);
          setprocessingpaymentloader(false);
          changeInput_CPFD(false, "formloading");
          return false;
        });
    } else if (checkoutPaymentformData.wallettransfer) {
      return await AxiosPost(AK.WALLETSUBMITAPI, payload, true)
        .then((res) => {
          console.log(res?.data)
          if (res != typeof undefined && res.data != typeof undefined) {
            console.log(res?.data)
            // if (res?.data?.datas?.redirecturl != "") {
            //   clearCartInfoData();
            //   window.location.href = res?.data?.datas?.redirecturl;
            //   // window.location.replace(res.data.datas.redirecturl);
            // }
          }
        })
        .catch((error) => {
          console.log(error);
          // checkoutDeliveryformData.messageError = true;
          // checkoutDeliveryformData.message = error?.message;
          changeInput_CPFD(
            true,
            "messageError"
          );
          changeInput_CPFD(
            error?.response?.data?.message,
            "message"
          );
          setprocessingpaymentloader(false);
          changeInput_CPFD(false, "formloading");
          return false;
        });
    }
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchOrderPayment = async () => {
    // if (!userData?.name) {
    //   navigate("/signin");
    //   return;
    // }

    let orderid = searchParams.get("orderid");
    if (!checkerString(orderid)) {
      return false;
    }

    let payload = {
      orderid: orderid.replace("ORDER", ""),
    };

    return await AxiosPost(AK.VIEWORDERBYIDAPI, payload, true)
      .then((res) => {
        if (res != typeof undefined && res.data != typeof undefined) {
          if (res?.data?.datas.length > 0) {
            setFormDisplay([
              formdisplayvalue.checkoutsignin,
              formdisplayvalue.confirmcontent,
            ]);
            setOrderDetails(res?.data?.datas[0]);
            setCount({ ...count, count: count + 1 });
            return true;
          }
        }
      })
      .catch((error) => {
        return false;
      });
  };

  const fetchDeliveryAddress = async () => {
    // if (!userData?.name) {
    //   navigate("/signin");
    //   return;
    // }
    return await AxiosPost(AK.FETCHDELIVERYADDRESSAPI, {})
      .then((res) => {
        if (res != typeof undefined && res.data != typeof undefined) {
          if (res?.data?.datas.length > 0) {
            let _exadd = res?.data?.datas;
            if (!_exadd[0]?.primary_addr) {
              _exadd[0]["primary_addr"] = 1;
            }

            // if (!_exadd[0]) {
            if (_exadd.length > 0) {
              setpickdeliveryaddress(_exadd[0]);
              setCheckoutDeliveryFormData(_exadd[0]);

              setFormDisplay([
                formdisplayvalue.checkoutsignin,
                formdisplayvalue.paymentcontent,
              ]);
            }

            // }

            setExDeliveryAddress(_exadd);
            setExDeliveryAddshow(true);

            setCount({ ...count, count: count + 1 });
            return true;
          }
        }
        setExDeliveryAddshow(false);

        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  let dispatch = useDispatch();

  const loginorsignup = async () => {
    let error = false;
    changeInput(false, "phonenumberError");

    if (!checkerString(checkoutDeliveryformData.phonenumber)) {
      error = true;
      changeInput(true, "phonenumberError");
    }

    if (!checkerStringLen(checkoutDeliveryformData.phonenumber, 10)) {
      error = true;
      changeInput(true, "phonenumberError");
    }

    var phoneno = /^\d{10}$/;
    if (!checkoutDeliveryformData.phonenumber.match(phoneno)) {
      error = true;
      changeInput(true, "phonenumberError");
    }

    if (error) return false;

    const requestotppayload = {
      mobile: checkoutDeliveryformData.phonenumber,
      storeid: storeid,
    };
    await changeInput(true, "otploader");
    await changeInput(false, "requestotploading");
    return await AxiosPost(AK.REQUESTOTPAPI, requestotppayload, false)
      .then(async (res) => {
        changeInput(true, "requestotploading");

        if (res != typeof undefined && res.data != typeof undefined) {
          dispatch(setUser(null));
          // console.log(res.data);
          return true;
        }
      })
      .catch(async (error) => {
        let errors = AxiosError(error);
        await changeInput(false, "otploader");
        await changeInput(true, "otpinputformError");
        return false;
      });
  };

  const verifyotp = async () => {
    let error = false;

    changeInput(false, "otpinputError");

    if (!checkerString(checkoutDeliveryformData.otpinput)) {
      error = true;
      changeInput(true, "otpinputError");
    }

    if (!checkerStringLen(checkoutDeliveryformData.otpinput, 4)) {
      error = true;
      changeInput(true, "otpinputError");
    }

    if (error) return false;
    const requestotppayload = {
      mobile: checkoutDeliveryformData.phonenumber,
      otp: checkoutDeliveryformData.otpinput,
    };
    await changeInput(true, "verifyotploader");
    await changeInput(false, "requestotploading");
    return await AxiosPost(AK.VERIFYOTPAPI, requestotppayload, false)
      .then(async (res) => {
        if (res != typeof undefined && res.data != typeof undefined) {
          changeInput(true, "requestotploading");
          let userdata = JSON.parse(JSON.stringify(res.data));
          //console.log(userdata);
          setcoffeeloader(true);
          dispatch(setUser(userdata));
          setCount({ ...count, count: count + 1 });
          await fetchDeliveryAddress();
          setcoffeeloader(false);

          //setUserData(userData);
          setCount({ ...count, count: count + 1 });

          pageRefresh();
          return true;
        }
      })
      .catch(async (error) => {
        console.log(error);
        let errors = AxiosError(error);
        await changeInput(errors?.message, "otpinputformErrorMsg");
        await changeInput(false, "verifyotploader");
        await changeInput(true, "otpinputformError");
        return false;
      });
  };

  const handleDeliveryAddress = async () => {
    // if (!userData?.name) {
    //   navigate("/signin");
    //   return;
    // }

    let error = false;

    changeInput(false, "firstnameError");
    changeInput(false, "lastnameError");
    changeInput(false, "countryError");
    changeInput(false, "cityError");
    changeInput(false, "pincodeError");
    changeInput(false, "doorno_streetaddressError");
    changeInput(false, "location_town_districtError");
    changeInput(false, "emailaddressError");
    changeInput(false, "phonenumberError");

    if (!checkerString(checkoutDeliveryformData.firstname)) {
      error = true;
      changeInput(true, "firstnameError");
    }

    if (!checkerString(checkoutDeliveryformData.lastname)) {
      error = true;
      changeInput(true, "lastnameError");
    }

    if (!checkerString(checkoutDeliveryformData.country)) {
      error = true;
      changeInput(true, "countryError");
    }

    if (!checkerString(checkoutDeliveryformData.city)) {
      error = true;
      changeInput(true, "cityError");
    }

    if (!checkerString(checkoutDeliveryformData.pincode)) {
      error = true;
      changeInput(true, "pincodeError");
    }

    if (!checkerString(checkoutDeliveryformData.doorno_streetaddress)) {
      error = true;
      changeInput(true, "doorno_streetaddressError");
    }

    if (!checkerString(checkoutDeliveryformData.location_town_district)) {
      error = true;
      changeInput(true, "location_town_districtError");
    }

    if (!checkerString(checkoutDeliveryformData.phonenumber)) {
      error = true;
      changeInput(true, "phonenumberError");
    }

    var phoneno = /^\d{10}$/;
    if (!checkoutDeliveryformData.phonenumber.match(phoneno)) {
      error = true;
      changeInput(true, "phonenumberError");
    }

    if (error) return false;

    if (!checkoutDeliveryformData["primary_addr"])
      checkoutDeliveryformData["primary_addr"] = 1;

    checkoutDeliveryformData["primary_addr"] = !checkoutDeliveryformData[
      "primary_addr"
    ]
      ? 1
      : checkoutDeliveryformData["primary_addr"] === "HOME"
        ? 1
        : checkoutDeliveryformData["primary_addr"] === "OFFICE"
          ? 2
          : checkoutDeliveryformData["primary_addr"] === "OTHER"
            ? 3
            : 1;

    put(SK.DELIVERYCONTENTINFODATA, checkoutDeliveryformData);

    return await AxiosPost(
      AK.SUBMITDELIVERYADDRESSAPI,
      checkoutDeliveryformData
    )
      .then(async (res) => {
        console.log(res);
        if (res != typeof undefined && res.data != typeof undefined) {
          console.log(res);
          setExDeliveryAddress(res?.data?.datas);
          if (res?.data?.datas.length > 0) {
            setpickdeliveryaddress(res?.data?.datas[0]);
            setCheckoutDeliveryFormData(res?.data?.datas[0]);
          }
          //setUserData(userData);
          setCount({ ...count, count: count + 1 });

          // pageRefresh();
          return true;
        }
      })
      .catch(async (error) => {
        console.log(error);
        let errors = AxiosError(error);

        return false;
      });
  };

  var timeLeft = 30;

  //var elem = document.getElementById("some_div");

  const countdown = () => {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      //  doSomething();
    } else {
      // elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
      settimerresendsms(timeLeft);
    }
  };

  var timerId = setInterval(countdown, 1000);

  const doSomething = () => {
    // alert("Hi");
  };

  const changeInput = useCallback(async (value, field) => {
    checkoutDeliveryformData[field] = value;
    setCheckoutDeliveryFormData(checkoutDeliveryformData);
    setCount((count) => (count = count + 1));
  });

  const changeInput_CPFD = useCallback(async (value, field) => {
    checkoutPaymentformData[field] = value;
    setCheckoutPaymentFormData(checkoutPaymentformData);
    setCount((count) => (count = count + 1));
  });

  const callinitfetching = async (oneloader = true) => {
    setcoffeeloader(true);
    setCount({ ...count, count: count + 1 });
    let _cartinfo = await handleGetCartInfoStorageItems(setCartInfoData);

    if (oneloader) {

      if (await fetchOrderPayment()) {
        setcoffeeloader(false);
        //  navigate("/orderhistory")
      } else {

        if (_cartinfo?.cartcount === 0) {
          navigate("/cart");
        }
        await fetchDeliveryAddress();
        await pageRefresh();
      }

    } else {
      await pageRefresh();
    }




    let _datas = [];

    _cartinfo?.products.map(prod => {
      _datas.push({ productid: prod.products_id, weight: prod.weight })
    })

    AxiosPost(
      AK.CALCULATESHIPPINGCHARGEAPI,
      {
        storeid: storeid,
        datas: _datas,
      },
      true
    )
      .then((res) => {
        if (res != typeof undefined && res.data != typeof undefined) {
          let calcdata = res.data;
          console.log(calcdata)

          if (checkerArray(res.data)) {
            calcdata[0]['checked'] = true;
            setShippingCalc(calcdata[0]?.shipping);
          } else {
            calcdata['checked'] = true;
            setShippingCalc(calcdata?.shipping);
          }
          setShippingRate(calcdata);
          setCount({ ...count, count: count + 1 });

        }
      })
      .catch((error) => {
        console.log(error);
        return false;
      });


    setcoffeeloader(false);
    setCount({ ...count, count: count + 1 });
  };

  const callpageInit = async () => {
    let version = handleGetInfoStorageItems(SK.VERSIONINFODATA);
    let hardreset = false;
    let mockupdata = false;
    if (
      version === null ||
      version === undefined ||
      isNaN(Number(version)) ||
      Number(version) === null ||
      Number(version) === undefined ||
      Number(process.env.REACT_APP_VERSION) !== Number(version)
    ) {
      console.log("mockup true");
      handleSetInfoStorageItems(
        SK.VERSIONINFODATA,
        process.env.REACT_APP_VERSION
      );
      setCount({ ...count, count: count + 1 });
      mockupdata = true;
    }

    // setAssetsUrl(await callStores("assets", hardreset, true));
    let storedetails = await callStores(null, hardreset, mockupdata);
    // setStoreInfo(storedetails);
    // console.log(storedetails)
    const shippingConfig = storedetails.shipping_config;
    const statusvalue = JSON.parse(shippingConfig).methods[0].status;

    console.log("status"+statusvalue); // Output: "1"
setShowstatus(statusvalue);
  }

  if (!pageinit) {
    callpageInit()
    setUserData(getUserdata());
    setCount({ ...count, count: count + 1 });
    if (getUserdata()?.mobile) {
      setFormDisplay([
        formdisplayvalue.checkoutsignin,
        formdisplayvalue.deliverycontent,
      ]);
      checkoutDeliveryformData.firstname = userData?.name;
      checkoutDeliveryformData.emailaddress = userData?.email;
      let deliverycontent = get(SK.DELIVERYCONTENTINFODATA);
      if (deliverycontent?.firstname) {
        setCheckoutDeliveryFormData(deliverycontent);
      } else {
        setCheckoutDeliveryFormData(checkoutDeliveryformData);
      }

      callinitfetching();

      setPageInit(true);



      console.log(userData?.wallet);

      return;
    } else {
      setFormDisplay([
        formdisplayvalue.loginorsignup,
        formdisplayvalue.loginorsignupcontent,
      ]);
      setCount({ ...count, count: count + 1 });
      callinitfetching(false);
      setPageInit(true);


    }

    // changeInput_CPFD(true, "onlinepayment");
    // changeInput_CPFD(false, "banktransfer");
    // changeInput_CPFD(false, "upitransfer");
  }


  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </Helmet>
      </HelmetProvider>
      <>
        <div hidden={processingpaymentloader}>
          <section className="relative">
            <NavbarMain storeid={storeid} />

            {/* <div className="relative container mx-auto px-4">
            <img
              id="bgimg"
              className="absolute bottom-0 inset-x-0 w-full h-80 -mb-16 lg:mb-0 md:h-full object-cover"
              src={`yofte-assets/images/${lowercasenosp(store)}/banner.png`}
              alt=""
            />
            <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col items-center">
              <span className="mb-5 font-bold font-heading">01</span>
              <div className="mb-5 h-16 w-px bg-gray-100" />
              <button className="mb-5">
                <img src="yofte-assets/elements/circle.svg" alt="" />
              </button>
              <button
                className="mb-6 w-1 h-1 bg-blue-500 rounded-full"
                onClick={() => {
                  document.getElementById("bgimg").src =
                    "yofte-assets/images/women.webp";
                }}
              >
                <img src="yofte-assets/elements/circle.svg" alt="" />
              </button>
              <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full" />
              <div className="h-16 w-px bg-gray-100" />
            </div>
            <div className="relative flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-32 lg:pb-64">
                <div>
                  <h2
                    className="mb-8 text-2xl lg:text-3xl font-heading"
                    dangerouslySetInnerHTML={{ __html: mainpageheader1text }}
                  ></h2>
                  <p className="mb-20 text-lg text-gray-600">
                    {mainpageheader2text}
                  </p>
                  <a
                    className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-2 px-8 rounded-md uppercase transition duration-200"
                    href="/products"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-100 py-4 testing-1">
            <div className="container mx-auto px-4">
              <div className="flex lg:-mt-52 mb-20 flex-wrap justify-center">
                <div
                  className="relative h-64 w-full lg:w-96 mb-6 lg:mb-0 lg:mr-6 bg-no-repeat bg-cover bg-right"
                  style={{
                    backgroundImage: `url("yofte-assets/images/${lowercasenosp(
                      store
                    )}/womanclothing1.jpg")`,
                    boxSizing: "border-box",

                    borderRadius: "5%",
                  }}
                >
                  <a
                    className="absolute inset-0 flex items-end"
                    href="/products"
                  >
                    <div className="pl-12 pb-12">
                      <h3 className="text-3xl font-bold font-heading text-white">
                        {mainpagebanner1text}
                      </h3>
                      <p className="text-xl text-white font-bold font-heading">
                        <span style={{ display: "flex" }}>
                          <span style={{ paddingTop: "5px" }}>
                            <PiCurrencyInr style={{ color: "#ffffff" }} />
                          </span>
                          600
                          <span
                            className="text-sm font-normal line-through"
                            style={{ paddingTop: "5px" }}
                          >
                            800
                          </span>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  className="relative h-64 w-full lg:w-96 bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("yofte-assets/images/${lowercasenosp(
                      store
                    )}/womanclothing2.jpg")`,
                    boxSizing: "border-box",

                    borderRadius: "5%",
                  }}
                >
                  <a
                    className="absolute inset-0 flex items-end"
                    href="/products"
                  >
                    <div className="pl-12 pb-12">
                      <h3 className="text-3xl font-bold font-heading text-white">
                        {mainpagebanner2text}
                      </h3>
                      <p className="text-xl text-white font-bold font-heading">
                        <span style={{ display: "flex" }}>
                          <span style={{ paddingTop: "5px" }}>
                            <PiCurrencyInr style={{ color: "#ffffff" }} />
                          </span>
                          600
                          <span
                            className="text-sm font-normal line-through"
                            style={{ paddingTop: "5px" }}
                          >
                            800
                          </span>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center -mb-12">
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/exxon.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/ea-sports.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/eurosport.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/nike.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/aol.svg"
                    alt=""
                  />
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
                  <img
                    className="mx-auto h-6"
                    src="yofte-assets/brands/north-face.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold font-heading" href="#">
                  <img
                    className="h-10"
                    src={`/yofte-assets/logos/${lowercasenosp(store)}/logo.webp`}
                    alt=""
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-2 w-2 text-gray-500 cursor-pointer"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex mb-8 justify-between">
                <a
                  className="inline-flex items-center font-semibold font-heading"
                  href="#"
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
                  <span>SIGN&nbsp;IN</span>
                </a>
                <div className="flex items-center">
                  <a
                    className="mr-10"
                    href={() => {
                      return false;
                    }}
                  >
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
                    className="flex items-center"
                    href={() => {
                      return false;
                    }}
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
                      3
                    </span>
                  </a>
                </div>
              </div>
              <input
                className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                type="search"
                placeholder="Search"
              />
              <ul className="text-3xl font-bold font-heading">
                <li className="mb-8">
                  <a href="/products">Category</a>
                </li>
                <li className="mb-8">
                  <a
                    href={() => {
                      return false;
                    }}
                  >
                    Collection
                  </a>
                </li>
                <li className="mb-8">
                  <a
                    href={() => {
                      return false;
                    }}
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    href={() => {
                      return false;
                    }}
                  >
                    Brand
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
          </section>
        </div>

        <section className="py-4 testing-1 container-y">
          <div className="container mx-auto px-4">
            <div className="cartWrapper">
              <div className="margin-mobile">
                {" "}
                <div
                  className="cartDeskHead container"
                  hidden={processingpaymentloader}
                >
                  <span className="qty">
                    <b>Checkout </b>
                  </span>
                </div>
                <div hidden={!coffeeloader}>
                  <center>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img
                      style={{ width: "150px" }}
                      src={`yofte-assets/loader/truckloader.gif`}
                      alt={`${lowercasenosp(store)} loader`}
                    />

                    {/* <div className="loop-wrapper">
                      <div className="mountain" />
                      <div className="hill" />
                      <div className="tree" />
                      <div className="tree" />
                      <div className="tree" />
                      <div className="rock" />
                      <div className="truck" />
                      <div className="wheels" />
                    </div> */}
                  </center>
                </div>
                <div hidden={!processingpaymentloader}>
                  <center>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img
                      style={{ width: "350px" }}
                      src={`yofte-assets/loader/processingpayment.gif`}
                      alt={`${lowercasenosp(store)} loader`}
                    />

                    {/* <div className="loop-wrapper">
                      <div className="mountain" />
                      <div className="hill" />
                      <div className="tree" />
                      <div className="tree" />
                      <div className="tree" />
                      <div className="rock" />
                      <div className="truck" />
                      <div className="wheels" />
                    </div> */}
                  </center>
                </div>
                <div
                  id="confirmcontent"
                  hidden={
                    !formdisplay.includes(formdisplayvalue.confirmcontent)
                  }
                >
                  <div className="w-full">
                    <br />
                    <br />
                    <center>
                      <img
                        style={{ width: "auto" }}
                        src={`yofte-assets/loader/order-placed.webp`}
                        alt={`${lowercasenosp(store)} loader`}
                      />
                      {/* <BsCartCheckFill
                        color="#7fa37f"
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                      /> */}
                      <br />
                      <h3>
                        <b>Thank you for shopping!</b>
                      </h3>
                      <p>
                        Your order has been placed. <br />
                      </p>
                      <br />
                      <p>
                        Total Paid: ₹ {orderdetails.totalamt}
                        <br />
                      </p>
                      <br />
                      <button
                        className="block w-72 py-2 bg-orange-300 hover:bg-orange-400 text-center text-white font-heading uppercase rounded-md transition duration-200"
                        onClick={() => {
                          // setFormDisplay([
                          //   formdisplayvalue.checkoutsignin,
                          //   formdisplayvalue.ordersummarycontent,
                          // ]);
                          navigate("/orderhistory");
                          setCount({
                            ...count,
                            count: count + 1,
                          });
                          window.scrollTo(10, 0);
                        }}
                      >
                        View Order
                      </button>
                    </center>
                  </div>
                </div>
                <div hidden={coffeeloader || processingpaymentloader}>
                  <div className="bagWapperWithItems">
                    <div className="container cartContainer">
                      <div className="container-fluid" style={{ padding: 0 }}>
                        <div className="col-sm-7 noPd">
                          <div className="leftSection">
                            <div
                              id="loginorsignup"
                              hidden={
                                !formdisplay.includes(
                                  formdisplayvalue.loginorsignup
                                )
                              }
                            >
                              <div
                                className="flex flex-wrap justify-center -mx-4 mb-10"
                                id="loginorsignupcontent"
                                hidden={
                                  !formdisplay.includes(
                                    formdisplayvalue.loginorsignup
                                  )
                                }
                              >
                                <div className="loginWrapper">
                                  <div className="login-signup-body">
                                    <div className="log-sign-desk-wrap">
                                      <div className="form-wrap">
                                        <div className="login-text-desk-wrap">
                                          <h1>Log in / Sign up</h1>
                                        </div>
                                        <div className="form-body">
                                          <form
                                            name="loginForm"
                                            noValidate=""
                                            autoComplete="off"
                                          >
                                            <div
                                              id="web_mobile_no"
                                              className="xgroup showCountryCode dynamicCountryCode"
                                            >
                                              <div className="input-wrap">
                                                <div className="countryCode-wrap">
                                                  <div className="country-code-dropdown-icon d-flex justify-content-between align-items-center">
                                                    <div className="cntry-mob-phone-code-item d-flex justify-content-start align-items-center">
                                                      <img
                                                        src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                                                        alt="country flag"
                                                      />
                                                      <span>+91</span>
                                                    </div>
                                                    <i className="icon_down_solid down" />
                                                  </div>
                                                </div>
                                                <input
                                                  className=""
                                                  id="mobile_number"
                                                  type="tel"
                                                  name="mobile"
                                                  placeholder="Enter Mobile Number"
                                                  maxLength={10}
                                                  data-phonecode={+91}
                                                  defaultValue=""
                                                  onChange={(e) =>
                                                    changeInput(
                                                      e.target.value,
                                                      "phonenumber"
                                                    )
                                                  }
                                                  value={
                                                    checkoutDeliveryformData.phonenumber
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <center>
                                              <p
                                                className="mb-2 text-red-500"
                                                hidden={
                                                  !checkoutDeliveryformData.phonenumberError
                                                }
                                              >
                                                Please, enter valid phone
                                                number!
                                              </p>
                                              <p
                                                className="mb-2 text-red-500"
                                                hidden={
                                                  !checkoutDeliveryformData.loginorsignupformError
                                                }
                                              >
                                                Authentication failed, please
                                                try again later!
                                              </p>
                                              <br />
                                              <div
                                                hidden={
                                                  !checkoutDeliveryformData.otploader
                                                }
                                              >
                                                <div
                                                  className={
                                                    checkoutDeliveryformData.requestotploading
                                                      ? "circle-loader load-complete"
                                                      : "circle-loader"
                                                  }
                                                >
                                                  <div
                                                    className={
                                                      checkoutDeliveryformData.requestotploading
                                                        ? "checkmark draw"
                                                        : "draw"
                                                    }
                                                  ></div>
                                                </div>
                                              </div>
                                              <br />
                                            </center>
                                            <button
                                              id="web_continue_submit"
                                              type="button"
                                              className="loginSubmit"
                                              onClick={async () => {
                                                if (await loginorsignup()) {
                                                  setCount({
                                                    ...count,
                                                    count: count + 1,
                                                  });
                                                  setTimeout(() => {
                                                    setFormDisplay([
                                                      formdisplayvalue.verifywithotp,
                                                      formdisplayvalue.verifywithotpcontent,
                                                    ]);
                                                    setCount({
                                                      ...count,
                                                      count: count + 1,
                                                    });
                                                    window.scrollTo(10, 0);
                                                  }, 1000);
                                                }
                                              }}
                                            >
                                              Continue
                                            </button>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* <div className="w-full">
                                <div className="mb-12">
                                  <div>
                                    <label
                                      className="font-bold font-heading text-gray-600"
                                      htmlFor=""
                                    >
                                      Login / Signup
                                    </label>

                                    <div className="input-group">
                                      <span className="input-group-addon block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                        +91
                                      </span>

                                      <input
                                        className="block w-1/2 mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="tel"
                                        name="phonenumber"
                                        maxLength="10"
                                        placeholder="Enter Mobile Number"
                                        onChange={(e) =>
                                          changeInput(
                                            e.target.value,
                                            "phonenumber"
                                          )
                                        }
                                        value={
                                          checkoutDeliveryformData.phonenumber
                                        }
                                      />
                                    </div>

                                    <center>
                                      <p
                                        className="mb-2 text-red-500"
                                        hidden={
                                          !checkoutDeliveryformData.phonenumberError
                                        }
                                      >
                                        Please, enter valid phone number!
                                      </p>
                                      <p
                                        className="mb-2 text-red-500"
                                        hidden={
                                          !checkoutDeliveryformData.loginorsignupformError
                                        }
                                      >
                                        Authentication failed, please try again
                                        later!
                                      </p>
                                      <br />
                                      <div
                                        hidden={
                                          !checkoutDeliveryformData.otploader
                                        }
                                      >
                                        <div
                                          className={
                                            checkoutDeliveryformData.requestotploading
                                              ? "circle-loader load-complete"
                                              : "circle-loader"
                                          }
                                        >
                                          <div
                                            className={
                                              checkoutDeliveryformData.requestotploading
                                                ? "checkmark draw"
                                                : "draw"
                                            }
                                          ></div>
                                        </div>
                                      </div>
                                    </center>
                                  </div>
                                  <br />
                                  <center>
                                    <button
                                      className="block w-1/2 py-2 text-2xl bg-orange-300 hover:bg-orange-400 text-center text-white uppercase rounded-md transition duration-200"
                                      onClick={async () => {
                                        if (await loginorsignup()) {
                                          setCount({ ...count, count: count + 1 });
                                          setTimeout(() => {
                                            setFormDisplay([
                                              formdisplayvalue.verifywithotp,
                                              formdisplayvalue.verifywithotpcontent,
                                            ]);
                                            setCount({ ...count, count: count + 1 });
                                            window.scrollTo(10, 0);
                                          }, 1000);
                                        }
                                      }}
                                    >
                                      <h6 className="font-heading">Continue</h6>
                                    </button>
                                  </center>
                                </div>
                              </div> */}
                              </div>
                            </div>

                            <div
                              id="verifywithotp"
                              className="mb-2 px-8 lg:px-20 bg-white"
                              style={{
                                paddingBottom: "2px",
                              }}
                              hidden={
                                !formdisplay.includes(
                                  formdisplayvalue.verifywithotp
                                )
                              }
                            >
                              <div
                                className="flex flex-wrap justify-center -mx-4 mb-10"
                                id="verifywithotpcontent"
                                hidden={
                                  !formdisplay.includes(
                                    formdisplayvalue.verifywithotpcontent
                                  )
                                }
                              >
                                <div className="loginWrapper">
                                  <div className="login-signup-body">
                                    <div className="log-sign-desk-wrap">
                                      <div className="form-wrap">
                                        <div className="login-text-desk-wrap">
                                          <h1>Verify with OTP</h1>
                                        </div>

                                        <center>
                                          <h4 className="font-bold font-heading">
                                            Sent to
                                          </h4>
                                        </center>
                                        <br />

                                        <div className="form-body">
                                          <form
                                            name="loginForm"
                                            noValidate=""
                                            autoComplete="off"
                                          >
                                            <div
                                              id="web_mobile_no"
                                              className="xgroup showCountryCode dynamicCountryCode"
                                            >
                                              <div className="input-wrap">
                                                <div className="countryCode-wrap">
                                                  <div className="country-code-dropdown-icon d-flex justify-content-between align-items-center">
                                                    <div className="cntry-mob-phone-code-item d-flex justify-content-start align-items-center">
                                                      <img
                                                        src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                                                        alt="country flag"
                                                      />
                                                      <span>+91</span>
                                                    </div>
                                                    <i className="icon_down_solid down" />
                                                  </div>
                                                </div>
                                                <input
                                                  className=""
                                                  id="mobile_number1"
                                                  type="tel"
                                                  name="mobile"
                                                  placeholder="Enter Mobile Number"
                                                  maxLength={10}
                                                  data-phonecode={+91}
                                                  defaultValue=""
                                                  disabled={true}
                                                  onChange={(e) =>
                                                    changeInput(
                                                      e.target.value,
                                                      "phonenumber"
                                                    )
                                                  }
                                                  value={
                                                    checkoutDeliveryformData.phonenumber
                                                  }
                                                />
                                              </div>
                                            </div>

                                            <br />
                                            <center>
                                              <h4 className="font-bold font-heading">
                                                Enter OTP
                                              </h4>
                                            </center>
                                            <br />
                                            <div className="flex w-full justify-center">
                                              <OTPInput
                                                inputClassName="block w-full text-2xl border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md text-black"
                                                inputStyles={{
                                                  height: "35px",
                                                  width: "35px",
                                                  marginRigh: "5px",
                                                }}
                                                value={
                                                  checkoutDeliveryformData.otpinput
                                                }
                                                onChange={(value) =>
                                                  changeInput(value, "otpinput")
                                                }
                                                autoFocus
                                                OTPLength={4}
                                                otpType="number"
                                                disabled={false}
                                                secure
                                              />
                                            </div>
                                            <br />
                                            <center>
                                              <p
                                                className="mb-2 text-red-500"
                                                hidden={
                                                  !checkoutDeliveryformData.otpinputError
                                                }
                                              >
                                                <br />
                                                Please, enter valid OTP!
                                              </p>
                                            </center>
                                            <center>
                                              <p
                                                className="mb-2 text-red-500"
                                                hidden={
                                                  !checkoutDeliveryformData.otpinputformError
                                                }
                                              >
                                                Invalid OTP!
                                              </p>
                                            </center>
                                            <br />
                                            <center>
                                              <div
                                                hidden={
                                                  !checkoutDeliveryformData.verifyotploader
                                                }
                                              >
                                                <div
                                                  className={
                                                    checkoutDeliveryformData.requestotploading
                                                      ? "circle-loader load-complete"
                                                      : "circle-loader"
                                                  }
                                                >
                                                  <div
                                                    className={
                                                      checkoutDeliveryformData.requestotploading
                                                        ? "checkmark draw"
                                                        : "draw"
                                                    }
                                                  ></div>
                                                </div>
                                              </div>
                                            </center>
                                            <br />
                                            <center>
                                              <div className="otp-resend ">
                                                <button
                                                  type="button"
                                                  className="false resendBtn"
                                                  onClick={async () => {
                                                    if (await loginorsignup()) {
                                                      setCount({
                                                        ...count,
                                                        count: count + 1,
                                                      });
                                                      setTimeout(() => {
                                                        setFormDisplay([
                                                          formdisplayvalue.verifywithotp,
                                                          formdisplayvalue.verifywithotpcontent,
                                                        ]);
                                                        setCount({
                                                          ...count,
                                                          count: count + 1,
                                                        });
                                                        window.scrollTo(10, 0);
                                                      }, 1000);
                                                    }
                                                  }}
                                                >
                                                  {" "}
                                                  RESEND OTP
                                                </button>
                                                {/* <div id="some_div"></div> */}
                                              </div>
                                            </center>
                                            <button
                                              id="web_continue_submit"
                                              type="button"
                                              className="loginSubmit"
                                              onClick={async () => {
                                                if (await verifyotp()) {
                                                  setFormDisplay([
                                                    formdisplayvalue.checkoutsignin,
                                                    formdisplayvalue.deliverycontent,
                                                  ]);
                                                  setCount({
                                                    ...count,
                                                    count: count + 1,
                                                  });
                                                  window.scrollTo(10, 0);
                                                }
                                              }}
                                            >
                                              Continue
                                            </button>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* <div className="w-full">
                                <div className="mb-12">
                                  <div>
                                    <label
                                      className="font-bold font-heading text-gray-600"
                                      htmlFor=""
                                    >
                                      Verify with OTP
                                    </label>

                                    <center>
                                      <h4 className="font-bold font-heading">
                                        Sent to
                                      </h4>
                                    </center>

                                    <div
                                      id="web_mobile_no"
                                      className="xgroup showCountryCode dynamicCountryCode"
                                    >
                                      <div className="input-wrap">
                                        <div className="countryCode-wrap">
                                          <div className="country-code-dropdown-icon d-flex justify-content-between align-items-center">
                                            <div className="cntry-mob-phone-code-item d-flex justify-content-start align-items-center">
                                              <img
                                                src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                                                alt="country flag"
                                              />
                                              <span>+91</span>
                                            </div>
                                            <i className="icon_down_solid down" />
                                          </div>
                                        </div>
                                        <input
                                          className=""
                                          id="mobile_number"
                                          type="tel"
                                          name="mobile"
                                          placeholder="Enter Mobile Number"
                                          maxLength={10}
                                          disabled={true}
                                          data-phonecode={+91}
                                          defaultValue=""
                                          onChange={(e) =>
                                            changeInput(
                                              e.target.value,
                                              "phonenumber"
                                            )
                                          }
                                          value={
                                            checkoutDeliveryformData.phonenumber
                                          }
                                        />
                                      </div>
                                    </div>

                                    <br />
                                    <center>
                                      <h4 className="font-bold font-heading">
                                        Enter OTP
                                      </h4>
                                    </center>
                                    <br />
                                    <div className="flex w-full justify-center">
                                      <OTPInput
                                        inputClassName="block w-full text-2xl border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md text-black"
                                        inputStyles={{
                                          height: "35px",
                                          width: "35px",
                                          marginRigh: "5px",
                                        }}
                                        value={
                                          checkoutDeliveryformData.otpinput
                                        }
                                        onChange={(value) =>
                                          changeInput(value, "otpinput")
                                        }
                                        autoFocus
                                        OTPLength={4}
                                        otpType="number"
                                        disabled={false}
                                        secure
                                      />
                                    </div>
                                    <br />
                                    <center>
                                      <p
                                        className="mb-2 text-red-500"
                                        hidden={
                                          !checkoutDeliveryformData.otpinputError
                                        }
                                      >
                                        <br />
                                        Please, enter valid OTP!
                                      </p>
                                    </center>
                                    <center>
                                      <p
                                        className="mb-2 text-red-500"
                                        hidden={
                                          !checkoutDeliveryformData.otpinputformError
                                        }
                                      >
                                        Invalid OTP!
                                      </p>
                                    </center>
                                    <br />
                                    <center>
                                      <div
                                        hidden={
                                          !checkoutDeliveryformData.verifyotploader
                                        }
                                      >
                                        <div
                                          className={
                                            checkoutDeliveryformData.requestotploading
                                              ? "circle-loader load-complete"
                                              : "circle-loader"
                                          }
                                        >
                                          <div
                                            className={
                                              checkoutDeliveryformData.requestotploading
                                                ? "checkmark draw"
                                                : "draw"
                                            }
                                          ></div>
                                        </div>
                                        <br />
                                        <br />
                                      </div>
                                    </center>
                                  </div>

                                  <center>
                                    <button
                                      className="block w-1/2 py-2 text-2xl bg-orange-300 hover:bg-orange-400 text-center text-white uppercase rounded-md transition duration-200"
                                      onClick={async () => {
                                        if (await verifyotp()) {
                                          setFormDisplay([
                                            formdisplayvalue.checkoutsignin,
                                            formdisplayvalue.deliverycontent,
                                          ]);
                                          setCount({ ...count, count: count + 1 });
                                          window.scrollTo(10, 0);
                                        }
                                      }}
                                    >
                                      <h6 className="font-heading">Continue</h6>
                                    </button>
                                  </center>
                                </div>
                              </div> */}
                              </div>
                            </div>
                            <div
                              id="checkoutsignin"
                              style={{
                                paddingBottom: "2px",
                              }}
                              hidden={
                                !formdisplay.includes(
                                  formdisplayvalue.checkoutsignin
                                )
                              }
                            >
                              {/* <div className="hidden lg:block md:block xl:block 2xl:block px-2 lg:px-2 py-4 bg-white">
                                <ul id="breadcrumb">
                                  <li>
                                    <a href="#" style={{ paddingTop: "4px" }}>
                                      <span className="fa fa-home"> </span>{" "}
                                      <IoBagCheckOutline
                                        className="text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                        style={{
                                          height: "30px",
                                          width: "30px",
                                          padding: "4px",
                                        }}
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span
                                        className={
                                          formdisplay.includes(
                                            formdisplayvalue.paymentcontent
                                          ) ||
                                          formdisplay.includes(
                                            formdisplayvalue.confirmcontent
                                          ) ||
                                          formdisplay.includes(
                                            formdisplayvalue.ordersummarycontent
                                          )
                                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-blue-300 text-white"
                                        }
                                      >
                                        {formdisplay.includes(
                                          formdisplayvalue.paymentcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.confirmcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? "✓"
                                          : "1"}
                                      </span>
                                      Delivery
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span
                                        className={
                                          formdisplay.includes(
                                            formdisplayvalue.confirmcontent
                                          ) ||
                                          formdisplay.includes(
                                            formdisplayvalue.ordersummarycontent
                                          )
                                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-purple-300 text-white"
                                        }
                                      >
                                        {formdisplay.includes(
                                          formdisplayvalue.confirmcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? "✓"
                                          : "2"}
                                      </span>
                                      Payment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span
                                        className={
                                          formdisplay.includes(
                                            formdisplayvalue.ordersummarycontent
                                          )
                                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-orange-300 text-white"
                                        }
                                      >
                                        {formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? "✓"
                                          : "3"}
                                      </span>
                                      Status
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span className="text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-pink-300 text-white">
                                        4
                                      </span>
                                      Summary
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="block lg:hidden md:hidden xl:hidden 2xl:hidden px-2 lg:px-2 py-4 bg-white">
                                <ul id="mobilebreadcrumb">
                                  <li>
                                    <a href="#" style={{ paddingTop: "8px" }}>
                                      <span className="fa fa-home"> </span>{" "}
                                      <IoBagCheckOutline
                                        className="text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                        style={{
                                          height: "25px",
                                          width: "25px",
                                          padding: "4px",
                                        }}
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      style={{
                                        paddingTop: "8px",
                                        color: "black",
                                        fontSize: "8px",
                                      }}
                                      className={
                                        formdisplay.includes(
                                          formdisplayvalue.paymentcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.confirmcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? ""
                                          : "active"
                                      }
                                    >
                                      <span
                                        className={
                                          formdisplay.includes(
                                            formdisplayvalue.paymentcontent
                                          ) ||
                                          formdisplay.includes(
                                            formdisplayvalue.confirmcontent
                                          ) ||
                                          formdisplay.includes(
                                            formdisplayvalue.ordersummarycontent
                                          )
                                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-blue-300 text-white"
                                        }
                                      >
                                        {formdisplay.includes(
                                          formdisplayvalue.paymentcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.confirmcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? "✓"
                                          : "1"}
                                      </span>
                                      <br />
                                      Delivery
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      style={{
                                        paddingTop: "8px",
                                        color: "black",
                                        fontSize: "8px",
                                      }}
                                    >
                                      <span
                                        className={
                                          formdisplay.includes(
                                            formdisplayvalue.confirmcontent
                                          ) ||
                                          formdisplay.includes(
                                            formdisplayvalue.ordersummarycontent
                                          )
                                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-purple-300 text-white"
                                        }
                                      >
                                        {formdisplay.includes(
                                          formdisplayvalue.confirmcontent
                                        ) ||
                                        formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? "✓"
                                          : "2"}
                                      </span>
                                      <br />
                                      Payment
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      style={{
                                        paddingTop: "8px",
                                        color: "black",
                                        fontSize: "8px",
                                      }}
                                    >
                                      <span
                                        className={
                                          formdisplay.includes(
                                            formdisplayvalue.ordersummarycontent
                                          )
                                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-orange-300 text-white"
                                        }
                                      >
                                        {formdisplay.includes(
                                          formdisplayvalue.ordersummarycontent
                                        )
                                          ? "✓"
                                          : "3"}
                                      </span>
                                      <br />
                                      Status
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      style={{
                                        paddingTop: "8px",
                                        color: "black",
                                        fontSize: "8px",
                                      }}
                                    >
                                      <span className="text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-pink-300 text-white">
                                        4
                                      </span>
                                      <br />
                                      Summary
                                    </a>
                                  </li>
                                </ul>
                                <br /> <br />
                              </div> */}

                              <div
                                className="mb-2 px-2 lg:px-2 bg-white"
                                style={{ paddingBottom: "2px" }}
                              >
                                {/* <div className="flex mb-10 items-center">
                      <span
                        className={
                          formdisplay.includes(
                            formdisplayvalue.paymentcontent
                          ) ||
                          formdisplay.includes(
                            formdisplayvalue.confirmcontent
                          ) ||
                          formdisplay.includes(
                            formdisplayvalue.ordersummarycontent
                          )
                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-blue-300 text-white"
                        }
                      >
                        {formdisplay.includes(
                          formdisplayvalue.paymentcontent
                        ) ||
                        formdisplay.includes(formdisplayvalue.confirmcontent) ||
                        formdisplay.includes(
                          formdisplayvalue.ordersummarycontent
                        )
                          ? "✓"
                          : "1"}
                      </span>
                      <h3 className="text-sm font-heading">Delivery</h3>
                      &nbsp;&nbsp; &nbsp;&nbsp;
                      <span
                        className={
                          formdisplay.includes(
                            formdisplayvalue.confirmcontent
                          ) ||
                          formdisplay.includes(
                            formdisplayvalue.ordersummarycontent
                          )
                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-purple-300 text-white"
                        }
                      >
                        {formdisplay.includes(
                          formdisplayvalue.confirmcontent
                        ) ||
                        formdisplay.includes(
                          formdisplayvalue.ordersummarycontent
                        )
                          ? "✓"
                          : "2"}
                      </span>
                      <h3 className="text-sm font-heading">Payment</h3>
                      &nbsp;&nbsp; &nbsp;&nbsp;
                      <span
                        className={
                          formdisplay.includes(
                            formdisplayvalue.ordersummarycontent
                          )
                            ? "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-green-300 text-white"
                            : "text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-orange-300 text-white"
                        }
                      >
                        {formdisplay.includes(
                          formdisplayvalue.ordersummarycontent
                        )
                          ? "✓"
                          : "3"}
                      </span>
                      <h3 className="text-sm font-heading">Confirm</h3>
                      &nbsp;&nbsp; &nbsp;&nbsp;
                      <span className="text-sm flex-shrink-0 inline-flex mr-2 items-center justify-center w-6 h-6 rounded-full bg-pink-300 text-white">
                        4
                      </span>
                      <h3 className="text-sm font-heading">Order summary</h3>
                    </div> */}

                                <div
                                  id="deliverycontent"
                                  hidden={
                                    !formdisplay.includes(
                                      formdisplayvalue.deliverycontent
                                    )
                                  }
                                >
                                  <div hidden={!exdeliveryaddshow}>
                                    <div className="col-sm-12 noPd desktopAddressList">
                                      <div
                                        id="addressListContainer"
                                        className="checkoutAddressBody"
                                      >
                                        <div className="addr-wrapper-main">
                                          <div className="checkoutAddressHead">
                                            <h5>Recently used</h5>
                                          </div>
                                          {exdeliveryaddress.map(
                                            (exdelivery) => (
                                              <>
                                                <div
                                                  className="checkoutSingleAddress"
                                                  id={
                                                    "address" +
                                                    exdelivery?.recentlyused
                                                  }
                                                >
                                                  <div className="singleAddressBody active">
                                                    <div
                                                      className="addressName active"
                                                      onClick={(e) => {
                                                        setpickdeliveryaddress(
                                                          exdelivery
                                                        );
                                                        setCheckoutDeliveryFormData(
                                                          exdelivery
                                                        );
                                                      }}
                                                    >
                                                      {/* <div className="selectAddressInput">
                                                        <input
                                                          type="radio"
                                                          name="radiodeliveryaddress"
                                                          id={
                                                            "selectAddInput" +
                                                            exdelivery?.recentlyused
                                                          }
                                                          defaultValue={
                                                            exdelivery?.recentlyused
                                                          }
                                                          defaultChecked=""
                                                          style={{ opacity: 0 }}
                                                        />
                                                        <label
                                                          htmlFor={
                                                            "selectAddInput" +
                                                            exdelivery?.recentlyused
                                                          }
                                                        />
                                                      </div> */}

                                                      <div className="selectAddressInput">
                                                        <input
                                                          type="radio"
                                                          id={
                                                            "selectAddInput" +
                                                            exdelivery?.recentlyused
                                                          }
                                                          value={
                                                            exdelivery?.recentlyused
                                                          }
                                                          name="exdeliveryradio"
                                                          style={{ opacity: 0 }}
                                                          checked={
                                                            pickdeliveryaddress?.recentlyused ===
                                                            exdelivery?.recentlyused
                                                          }
                                                          onChange={(e) => {
                                                            setpickdeliveryaddress(
                                                              exdelivery
                                                            );
                                                            setCheckoutDeliveryFormData(
                                                              exdelivery
                                                            );
                                                          }}
                                                        />

                                                        <label
                                                          htmlFor={
                                                            "selectAddInput" +
                                                            exdelivery?.recentlyused
                                                          }
                                                        />
                                                      </div>
                                                      <p>
                                                        {exdelivery?.firstname}
                                                      </p>
                                                      <span>
                                                        {
                                                          exdelivery?.primary_addr
                                                        }
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="fullAddress active"
                                                      onClick={(e) => {
                                                        setpickdeliveryaddress(
                                                          exdelivery
                                                        );
                                                        setCheckoutDeliveryFormData(
                                                          exdelivery
                                                        );
                                                      }}
                                                    >
                                                      <p className="ellipsis">
                                                        {
                                                          exdelivery?.doorno_streetaddress
                                                        }{" "}
                                                        <br />
                                                      </p>
                                                      <p className="adr-city">
                                                        {
                                                          exdelivery?.location_town_district
                                                        }
                                                        , {exdelivery?.city},
                                                      </p>{" "}
                                                      <span>
                                                        {exdelivery?.pincode}.
                                                      </span>
                                                      <div className="mobile-section">
                                                        <span>
                                                          Mobile:{" "}
                                                          <span className="mob">
                                                            {" "}
                                                            {
                                                              exdelivery?.phonenumber
                                                            }{" "}
                                                          </span>{" "}
                                                        </span>
                                                        <div className="addressCta">
                                                          <span className="addressLabel">
                                                            <button
                                                              onClick={() => {
                                                                setCheckoutDeliveryFormData(
                                                                  exdelivery
                                                                );
                                                                setExDeliveryAddshow(
                                                                  false
                                                                );
                                                              }}
                                                            >
                                                              EDIT
                                                            </button>
                                                          </span>
                                                          <span className="addressLabel">
                                                            <a>Remove</a>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <button
                                                      hidden={
                                                        !(
                                                          pickdeliveryaddress?.recentlyused ===
                                                          exdelivery?.recentlyused
                                                        )
                                                      }
                                                      className="addressConfirmBtn"
                                                      onClick={async () => {
                                                        setFormDisplay([
                                                          formdisplayvalue.checkoutsignin,
                                                          formdisplayvalue.paymentcontent,
                                                        ]);
                                                        setCount({
                                                          ...count,
                                                          count: count + 1,
                                                        });
                                                        window.scrollTo(10, 0);
                                                      }}
                                                    >
                                                      Confirm
                                                    </button>
                                                  </div>
                                                </div>
                                              </>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    {/* <div className="col-sm-12 noPd desktopAddressList">
                                      <div
                                        id="addressListContainer"
                                        className="checkoutAddressBody"
                                      >
                                        <div className="addr-wrapper">
                                          <div className="checkoutAddressHead">
                                            <h5>Recently used</h5>
                                          </div>
                                          {exdeliveryaddress.map(
                                            (exdelivery) => (
                                              <>
                                                <div
                                                  className="checkoutSingleAddress"
                                                  id={
                                                    "address" +
                                                    exdelivery?.recentlyused
                                                  }
                                                >
                                                  <div
                                                    className="singleAddressBody active"
                                                    style={{
                                                      borderBottom: "none",
                                                    }}
                                                  >
                                                    <div className="addressName active">
                                                      <div className="selectAddressInput">
                                                        <input
                                                          type="radio"
                                                          id={
                                                            "selectAddInput" +
                                                            exdelivery?.recentlyused
                                                          }
                                                          value={
                                                            exdelivery?.recentlyused
                                                          }
                                                          name="exdeliveryradio"
                                                          style={{ opacity: 0 }}
                                                        />

                                                        <label
                                                          htmlFor={
                                                            "selectAddInput" +
                                                            exdelivery?.recentlyused
                                                          }
                                                        />
                                                      </div>
                                                      <p>
                                                        {exdelivery?.firstname}
                                                      </p>
                                                      <span>
                                                        {
                                                          exdelivery?.primary_addr
                                                        }
                                                      </span>
                                                    </div>

                                                    <div className="fullAddress active">
                                                      <p className="ellipsis">
                                                        {
                                                          exdelivery?.doorno_streetaddress
                                                        }{" "}
                                                        <br />
                                                      </p>
                                                      <p className="adr-city">
                                                        {
                                                          exdelivery?.location_town_district
                                                        }
                                                        , {exdelivery?.city},
                                                      </p>{" "}
                                                      <span>
                                                        {exdelivery?.pincode}
                                                      </span>
                                                      <div className="mobile-section">
                                                        <span>
                                                          Mobile:{" "}
                                                          <span className="mob">
                                                            {" "}
                                                            {
                                                              exdelivery?.phonenumber
                                                            }
                                                            ,{" "}
                                                          </span>{" "}
                                                        </span>
                                                        <div className="addressCta">
                                                          <span className="addressLabel">
                                                            <button
                                                              onClick={() => {
                                                                setCheckoutDeliveryFormData(
                                                                  exdelivery
                                                                );
                                                                setExDeliveryAddshow(
                                                                  false
                                                                );
                                                              }}
                                                            >
                                                              Edit
                                                            </button>
                                                          </span>
                                                          <span className="addressLabel">
                                                            <a>Remove</a>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <button className="addressConfirmBtn">
                                                    Confirm
                                                  </button>
                                                </div>
                                              </>
                                            )
                                          )}

                                          <button
                                            className="addressConfirmBtn"
                                            onClick={async () => {
                                              setFormDisplay([
                                                formdisplayvalue.checkoutsignin,
                                                formdisplayvalue.paymentcontent,
                                              ]);
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                              window.scrollTo(10, 0);
                                            }}
                                          >
                                            Confirm
                                          </button>
                                        </div>
                                      </div>
                                    </div> */}
                                  </div>

                                  <div hidden={exdeliveryaddshow}>
                                    <div className="mb-10">
                                      <div className="flex flex-wrap">
                                        <div className="w-full lg:w-1/2 px-2 mb-2 lg:mb-0">
                                          <div>
                                            <label htmlFor="">First name</label>
                                            <input
                                              className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              onChange={(e) =>
                                                changeInput(
                                                  e.target.value,
                                                  "firstname"
                                                )
                                              }
                                              value={
                                                checkoutDeliveryformData.firstname
                                              }
                                              type="text"
                                            />
                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.firstnameError
                                              }
                                            >
                                              Please, enter your first name!
                                            </p>
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-1/2 px-2 mb-2 lg:mb-0">
                                          <div>
                                            <label htmlFor="">Last name</label>
                                            <input
                                              className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              type="text"
                                              onChange={(e) =>
                                                changeInput(
                                                  e.target.value,
                                                  "lastname"
                                                )
                                              }
                                              value={
                                                checkoutDeliveryformData.lastname
                                              }
                                            />
                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.lastnameError
                                              }
                                            >
                                              Please, enter your last name!
                                            </p>
                                          </div>
                                        </div>

                                        <div className="w-full mt-2 mb-2 px-2">
                                          <div className="flex flex-wrap -mx-4">
                                            <div className="w-full lg:w-2/5 px-4 mb-2 lg:mb-0">
                                              <div>
                                                <label htmlFor="">
                                                  Country
                                                </label>
                                                <select
                                                  className="block w-full mt-2 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md outline-none cursor-pointer"
                                                  name=""
                                                  id=""
                                                  onChange={(e) =>
                                                    changeInput(
                                                      e.target.value,
                                                      "country"
                                                    )
                                                  }
                                                  value={
                                                    checkoutDeliveryformData.country
                                                  }
                                                >
                                                  <option value={1} />
                                                  <option value={2}>
                                                    India
                                                  </option>
                                                  <option value={3}>
                                                    United States
                                                  </option>
                                                  <option value={4}>
                                                    Spain
                                                  </option>
                                                  <option value={5}>
                                                    Poland
                                                  </option>
                                                </select>
                                                <p
                                                  className="mb-2 text-red-500"
                                                  hidden={
                                                    !checkoutDeliveryformData.countryError
                                                  }
                                                >
                                                  Please, choose country!
                                                </p>
                                              </div>
                                            </div>
                                            <div className="w-full lg:w-2/5 px-4 mb-2 lg:mb-0">
                                              <div>
                                                <label htmlFor="">City</label>
                                                <input
                                                  className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                  type="text"
                                                  onChange={(e) =>
                                                    changeInput(
                                                      e.target.value,
                                                      "city"
                                                    )
                                                  }
                                                  value={
                                                    checkoutDeliveryformData.city
                                                  }
                                                />
                                                <p
                                                  className="mb-2 text-red-500"
                                                  hidden={
                                                    !checkoutDeliveryformData.cityError
                                                  }
                                                >
                                                  Please, enter city name!
                                                </p>
                                              </div>
                                            </div>
                                            <div className="w-full lg:w-1/5 px-4">
                                              <label htmlFor="">Pin Code</label>
                                              <input
                                                className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                type="text"
                                                onChange={(e) =>
                                                  changeInput(
                                                    e.target.value,
                                                    "pincode"
                                                  )
                                                }
                                                value={
                                                  checkoutDeliveryformData.pincode
                                                }
                                              />
                                              <p
                                                className="mb-2 text-red-500"
                                                hidden={
                                                  !checkoutDeliveryformData.pincodeError
                                                }
                                              >
                                                Please, enter Pin code!
                                              </p>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="w-full px-2">
                                          <div className="mb-2">
                                            <label htmlFor="">
                                              Door no / Street address
                                            </label>
                                            <input
                                              className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              type="text"
                                              onChange={(e) =>
                                                changeInput(
                                                  e.target.value,
                                                  "doorno_streetaddress"
                                                )
                                              }
                                              value={
                                                checkoutDeliveryformData.doorno_streetaddress
                                              }
                                            />
                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.doorno_streetaddressError
                                              }
                                            >
                                              Please, enter doorno / street
                                              address!
                                            </p>
                                          </div>
                                          <div className="mb-2">
                                            <label htmlFor="">
                                              Locality / Town / District
                                            </label>
                                            <input
                                              className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              type="text"
                                              onChange={(e) =>
                                                changeInput(
                                                  e.target.value,
                                                  "location_town_district"
                                                )
                                              }
                                              value={
                                                checkoutDeliveryformData.location_town_district
                                              }
                                            />
                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.location_town_districtError
                                              }
                                            >
                                              Please, enter location / town /
                                              district!
                                            </p>
                                          </div>
                                          <div className="mb-2">
                                            <label htmlFor="">
                                              Email address
                                            </label>
                                            <input
                                              className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              type="email"
                                              onChange={(e) =>
                                                changeInput(
                                                  e.target.value,
                                                  "emailaddress"
                                                )
                                              }
                                              value={
                                                checkoutDeliveryformData.emailaddress
                                              }
                                            />
                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.emailaddressError
                                              }
                                            >
                                              Please, enter email address!
                                            </p>
                                          </div>
                                          <div className="mb-2">
                                            <label htmlFor="">Phone</label>
                                            <input
                                              className="block w-full mt-2 py-2 px-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              type="text"
                                              onChange={(e) =>
                                                changeInput(
                                                  e.target.value,
                                                  "phonenumber"
                                                )
                                              }
                                              value={
                                                checkoutDeliveryformData.phonenumber
                                              }
                                            />
                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.phonenumberError
                                              }
                                            >
                                              Please, enter phone number!
                                            </p>
                                          </div>

                                          <div className="mb-2">
                                            <label htmlFor="">
                                              Save Address As
                                            </label>

                                            <div className="flex flex-wrap w-full mt-2 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                              <div className="round">
                                                <input
                                                  className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                  type="checkbox"
                                                  id="checkboxhome"
                                                  name="checkboxhome"
                                                  checked={
                                                    checkoutDeliveryformData?.primary_addr ===
                                                    "HOME" ||
                                                    checkoutDeliveryformData?.primary_addr ===
                                                    "1" ||
                                                    checkoutDeliveryformData?.primary_addr ==
                                                    1
                                                  }
                                                  onChange={async (event) => {
                                                    changeInput(
                                                      "HOME",
                                                      "primary_addr"
                                                    );
                                                  }}
                                                />
                                                <label for="checkboxhome"></label>
                                              </div>
                                              <label
                                                htmlFor="checkboxhome"
                                                style={{ paddingTop: "2px" }}
                                                className="block border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              >
                                                &nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;
                                              </label>
                                              &nbsp;&nbsp;&nbsp;
                                              <div className="round">
                                                <input
                                                  className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                  type="checkbox"
                                                  id="checkboxoffice"
                                                  name="checkboxoffice"
                                                  checked={
                                                    checkoutDeliveryformData?.primary_addr ===
                                                    "OFFICE" ||
                                                    checkoutDeliveryformData?.primary_addr ===
                                                    "2" ||
                                                    checkoutDeliveryformData?.primary_addr ==
                                                    2
                                                  }
                                                  onChange={async (event) => {
                                                    changeInput(
                                                      "OFFICE",
                                                      "primary_addr"
                                                    );
                                                  }}
                                                />
                                                <label for="checkboxoffice"></label>
                                              </div>
                                              <label
                                                htmlFor="checkboxoffice"
                                                style={{ paddingTop: "2px" }}
                                                className="block border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                              >
                                                &nbsp;&nbsp;&nbsp;&nbsp;Office&nbsp;
                                              </label>
                                              &nbsp;&nbsp;&nbsp;
                                              <div className="round">
                                                <input
                                                  className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                  type="checkbox"
                                                  id="checkboxother"
                                                  name="checkboxother"
                                                  checked={
                                                    checkoutDeliveryformData?.primary_addr ===
                                                    "OTHER" ||
                                                    checkoutDeliveryformData?.primary_addr ===
                                                    "3" ||
                                                    checkoutDeliveryformData?.primary_addr ==
                                                    3
                                                  }
                                                  onChange={async (event) => {
                                                    changeInput(
                                                      "OTHER",
                                                      "primary_addr"
                                                    );
                                                  }}
                                                />
                                                <label for="checkboxother"></label>
                                              </div>
                                              <label
                                                className="block border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                htmlFor="checkboxother"
                                                style={{ paddingTop: "2px" }}
                                              >
                                                &nbsp;&nbsp;&nbsp;&nbsp;Other&nbsp;
                                              </label>
                                            </div>

                                            <p
                                              className="mb-2 text-red-500"
                                              hidden={
                                                !checkoutDeliveryformData.phonenumberError
                                              }
                                            >
                                              Please, choose your address save
                                              as!
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex w-full justify-center">
                                          <div
                                            hidden={
                                              !checkoutDeliveryformData.formloading
                                            }
                                          >
                                            <p
                                              className="flex mb-2 text-black-500"
                                              style={{
                                                justifyContent: "center",
                                              }}
                                            >
                                              <br />
                                              Loading, Please wait
                                              <SyncLoader
                                                color="#000"
                                                loading={
                                                  checkoutDeliveryformData.formloading
                                                }
                                                style={{
                                                  marginTop: "20px",
                                                  marginLeft: "10px",
                                                }}
                                              />
                                            </p>
                                          </div>
                                        </div>

                                        <div className="w-full">
                                          <div className="mb-12 flex justify-center">
                                            <button
                                              className="block w-72 py-2 bg-orange-300 hover:bg-orange-400 text-center text-white font-heading uppercase rounded-md transition duration-200"
                                              onClick={async () => {
                                                changeInput(
                                                  true,
                                                  "formloading"
                                                );
                                                setCount({
                                                  ...count,
                                                  count: count + 1,
                                                });

                                                if (
                                                  await handleDeliveryAddress()
                                                ) {
                                                  setFormDisplay([
                                                    formdisplayvalue.checkoutsignin,
                                                    formdisplayvalue.paymentcontent,
                                                  ]);
                                                  setCount({
                                                    ...count,
                                                    count: count + 1,
                                                  });
                                                  window.scrollTo(10, 0);
                                                }

                                                changeInput(
                                                  false,
                                                  "formloading"
                                                );
                                                setCount({
                                                  ...count,
                                                  count: count + 1,
                                                });
                                              }}
                                            >
                                              Submit Delivery Details
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="mb-2 px-2 lg:px-2 py-4 bg-white"
                                id="paymentcontent"
                                hidden={
                                  !formdisplay.includes(
                                    formdisplayvalue.paymentcontent
                                  )
                                }
                              >
                                <div>
                                  <p className="f-b1-b mb-3">
                                    Choose your payment method
                                  </p>
                                  <div className="paymentListTabsWrapper clearfix">
                                    <div className="paymentBoxBody">
                                      <div className="paymentTablist bgclr-shade8">
                                      {showstatus > 0 ? (  <div
                                          onClick={() => {
                                            changeInput_CPFD(
                                              true,
                                              "onlinepayment"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "banktransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "upitransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "razorpaytransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "wallettransfer"
                                            );
                                          }}
                                          id="testPaymentGateway-Debit & Credit Card"
                                          className={
                                            checkoutPaymentformData.onlinepayment
                                              ? "active f-b2-b singlePaymentOption"
                                              : "f-b2-b singlePaymentOption"
                                          }
                                        >
                                           <div className="d-flex align-items-center">
                                       
  <>
    <img
      width={24}
      height={24}
      src={insamojo}
      alt="po image"
      style={{ opacity: 1 }}
    />
    <span className="clr-shade1 false" style={{ marginLeft: 12 }}>
      Instamojo 
    </span>
  </>

                                          </div>
                                        </div>) : (
 <span style={{color:"blue",display:"none"}}></span>
)}
                                        {/* <div
                                          id="testPaymentGateway-Wallet"
                                          className="f-b2-r singlePaymentOption "
                                        >
                                          <div className="d-flex align-items-center">
                                            <img
                                              width={24}
                                              height={24}
                                              src="https://images.bewakoof.com/web/Group-1645705428.png"
                                              alt="po image"
                                              style={{ opacity: "0.42" }}
                                            />
                                            <span
                                              className="clr-shade1 false"
                                              style={{ marginLeft: 12 }}
                                            >
                                              Wallet
                                            </span>
                                          </div>
                                        </div> */}
                                      {showstatus > 0 ? (    <div
                                          onClick={() => {
                                            changeInput_CPFD(
                                              false,
                                              "onlinepayment"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "banktransfer"
                                            );
                                            changeInput_CPFD(
                                              true,
                                              "upitransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "razorpaytransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "wallettransfer"
                                            );
                                          }}
                                          id="testPaymentGateway-UPI"
                                          className={
                                            checkoutPaymentformData.upitransfer
                                              ? "active f-b2-b singlePaymentOption"
                                              : "f-b2-b singlePaymentOption"
                                          }
                                        >
                                          <div className="d-flex align-items-center">
                                            <img
                                              width={24}
                                              height={24}
                                              src="https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png"
                                              alt="po image"
                                              style={{ opacity: "0.42" }}
                                            />
                                            <span
                                              className="clr-shade1 false"
                                              style={{ marginLeft: 12 }}
                                            >
                                              UPI
                                            </span>
                                          </div>
                                        </div>) : (
 <span style={{color:"blue",display:"none"}}></span>
)}
                                        <div
                                          onClick={() => {
                                            changeInput_CPFD(
                                              false,
                                              "onlinepayment"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "banktransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "upitransfer"
                                            );
                                            changeInput_CPFD(
                                              true,
                                              "razorpaytransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "wallettransfer"
                                            );
                                          }}
                                          id="testPaymentGateway-UPI"
                                          className={
                                            checkoutPaymentformData.razorpaytransfer
                                              ? "active f-b2-b singlePaymentOption"
                                              : "f-b2-b singlePaymentOption"
                                          }
                                        >
                                          <div className="d-flex align-items-center">
                                            <img
                                              width={24}
                                              height={24}
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RaaKme5OcofEwciY7E4A7Ms6FgFUBMmvN4x_jVzvAFtHL-IhybpprNMCAljXKgc-BOY&usqp=CAU"
                                              alt="po image"
                                              style={{ opacity: "0.42" }}
                                            />
                                            <span
                                              className="clr-shade1 false"
                                              style={{ marginLeft: 12 }}
                                            >
                                              RazorPay
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          onClick={() => {
                                            changeInput_CPFD(
                                              false,
                                              "onlinepayment"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "banktransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "upitransfer"
                                            );
                                            changeInput_CPFD(
                                              false,
                                              "razorpaytransfer"
                                            );
                                            changeInput_CPFD(
                                              true,
                                              "wallettransfer"
                                            );
                                          }}
                                          id="testPaymentGateway-UPI"
                                          className={
                                            checkoutPaymentformData.wallettransfer
                                              ? "active f-b2-b singlePaymentOption"
                                              : "f-b2-b singlePaymentOption"
                                          }
                                        >
                                          <div className="d-flex align-items-center">
                                            <img
                                              width={24}
                                              height={24}
                                              src="https://c0.klipartz.com/pngpicture/283/633/gratis-png-iconos-de-computadora-de-escritorio-google-pay-send-logotipo-de-google-wallet-para-iconos-de-windows-thumbnail.png"
                                              alt="po image"
                                              style={{ opacity: "0.42" }}
                                            />
                                            <span
                                              className="clr-shade1 false"
                                              style={{ marginLeft: 12 }}
                                            >
                                              Wallet
                                            </span>
                                          </div>
                                        </div>
                                        {/* <div
                                          id="testPaymentGateway-Net banking"
                                          className="f-b2-r singlePaymentOption "
                                        >
                                          <div className="d-flex align-items-center">
                                            <img
                                              width={24}
                                              height={24}
                                              src="https://images.bewakoof.com/web/nb-icon-1645705428.png"
                                              alt="po image"
                                              style={{ opacity: "0.42" }}
                                            />
                                            <span
                                              className="clr-shade1 false"
                                              style={{ marginLeft: 12 }}
                                            >
                                              Bank Transfer
                                            </span>
                                          </div>
                                        </div> */}
                                        {/* <div
                                          id="testPaymentGateway-Cash On Delivery"
                                          className="f-b2-r singlePaymentOption "
                                        >
                                          <div className="d-flex align-items-center">
                                            <img
                                              width={24}
                                              height={24}
                                              src="https://images.bewakoof.com/web/cod-icon-1645705427.png"
                                              alt="po image"
                                              style={{ opacity: "0.42" }}
                                            />
                                            <span
                                              className="clr-shade1 clr-shade4"
                                              style={{ marginLeft: 12 }}
                                            >
                                              Cash On Delivery
                                            </span>
                                          </div>
                                          <p className="f-b3-r clr-shade4 mt-1">
                                            Cash On Delivery is not available on
                                            Customized products.
                                          </p>
                                        </div> */}
                                      </div>
                                      <div className="paymentTabDetail">
                                        <div className="selectedPay">
                                          <div className="detailBoxWrapper col-xs-12 paymentOptionsWrpr p-0">
                                            <div className="paymentOptionsInner bgclr-so-white clearfix">
                                              <div className="add-card-wrapper w100">
                                                <div className="pmt-popup-wrap false">
                                                  <div className="creditCardBox clearfix my-4">
                                                    {/* <div
                                                        className="w-full lg:w-1/2 px-4 mb-0 lg:mb-0"
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <div className="round">
                                                          <input
                                                            className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                            type="checkbox"
                                                            id="checkboxonlinetransfer"
                                                            checked={
                                                              checkoutPaymentformData.onlinepayment
                                                            }
                                                            onChange={async (
                                                              event
                                                            ) => {
                                                              if (
                                                                event
                                                                  .currentTarget
                                                                  .checked
                                                              ) {
                                                                changeInput_CPFD(
                                                                  true,
                                                                  "onlinepayment"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "banktransfer"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "upitransfer"
                                                                );
                                                              } else {
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "onlinepayment"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "banktransfer"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "upitransfer"
                                                                );
                                                              }
                                                            }}
                                                          />
                                                          <label for="checkboxonlinetransfer"></label>
                                                        </div>
                                                        <label
                                                          htmlFor="checkboxonlinetransfer"
                                                          style={{
                                                            paddingTop: "2px",
                                                          }}
                                                        >
                                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online
                                                          Payment
                                                        </label>
                                                      </div>
                                                      <br />

                                                      <div
                                                        className="w-full lg:w-1/2 px-4 mb-0 lg:mb-0"
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <div className="round">
                                                          <input
                                                            className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                            type="checkbox"
                                                            id="checkboxupitransfer"
                                                            checked={
                                                              checkoutPaymentformData.upitransfer
                                                            }
                                                            onChange={async (
                                                              event
                                                            ) => {
                                                              if (
                                                                event
                                                                  .currentTarget
                                                                  .checked
                                                              ) {
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "onlinepayment"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "banktransfer"
                                                                );
                                                                changeInput_CPFD(
                                                                  true,
                                                                  "upitransfer"
                                                                );
                                                              } else {
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "onlinepayment"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "banktransfer"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "upitransfer"
                                                                );
                                                              }
                                                            }}
                                                          />
                                                          <label for="checkboxupitransfer"></label>
                                                        </div>
                                                        <label
                                                          htmlFor="checkboxupitransfer"
                                                          style={{
                                                            paddingTop: "2px",
                                                          }}
                                                        >
                                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UPI
                                                          Transfer
                                                        </label>
                                                      </div>
                                                      <br />
                                                      <div
                                                        className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0"
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <div className="round">
                                                          <input
                                                            className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                                            type="checkbox"
                                                            id="checkboxbanktransfer"
                                                            checked={
                                                              checkoutPaymentformData.banktransfer
                                                            }
                                                            onChange={async (
                                                              event
                                                            ) => {
                                                              if (
                                                                event
                                                                  .currentTarget
                                                                  .checked
                                                              ) {
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "onlinepayment"
                                                                );
                                                                changeInput_CPFD(
                                                                  true,
                                                                  "banktransfer"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "upitransfer"
                                                                );
                                                              } else {
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "onlinepayment"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "banktransfer"
                                                                );
                                                                changeInput_CPFD(
                                                                  false,
                                                                  "upitransfer"
                                                                );
                                                              }
                                                            }}
                                                          />
                                                          <label for="checkboxbanktransfer"></label>
                                                        </div>
                                                        <label
                                                          htmlFor="checkboxbanktransfer"
                                                          style={{
                                                            paddingTop: "2px",
                                                          }}
                                                        >
                                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bank
                                                          Transfer
                                                        </label>
                                                      </div> */}

                                                    <div
                                                      hidden={
                                                        !checkoutPaymentformData.formloading
                                                      }
                                                    >
                                                      <p
                                                        className="flex mb-2 text-black-500"
                                                        style={{
                                                          justifyContent:
                                                            "center",
                                                        }}
                                                      >
                                                        <br />
                                                        Loading, Please wait
                                                        <SyncLoader
                                                          color="#000"
                                                          loading={
                                                            checkoutPaymentformData.formloading
                                                          }
                                                          style={{
                                                            marginTop: "20px",
                                                            marginLeft: "10px",
                                                          }}
                                                        />
                                                        <br />
                                                      </p>
                                                    </div>
                                                    <center>
                                                      <p
                                                        className="mb-2 text-red-500"
                                                        hidden={
                                                          !checkoutPaymentformData.requiredError
                                                        }
                                                      >
                                                        <br />
                                                        Please check atleast one
                                                        payment option.
                                                        <br />
                                                      </p>
                                                    </center>

                                                    <center>
                                                      <p
                                                        className="mb-2 text-red-500"
                                                        hidden={
                                                          !checkoutPaymentformData.messageError
                                                        }
                                                      >
                                                        <br />
                                                        {checkoutPaymentformData.message}
                                                        <br />
                                                      </p>
                                                    </center>

                                                    <button
                                                      id="pay_addCard_button"
                                                      className="p-add-bag bkf-btn-wrap d-flex align-items-center justify-content-center bgclr-shade7 text-white btn-m f-b2-s"
                                                      type="submit"
                                                      style={{
                                                        width: "100%",
                                                      }}
                                                      onClick={async () => {
                                                        // changeInput_CPFD(
                                                        //   true,
                                                        //   "upitransfer"
                                                        // );
                                                        if (
                                                          checkoutPaymentformData.onlinepayment ===
                                                          false &&
                                                          checkoutPaymentformData.banktransfer ===
                                                          false &&
                                                          checkoutPaymentformData.upitransfer ===
                                                          false &&
                                                          checkoutPaymentformData.razorpaytransfer ===
                                                          false &&
                                                          checkoutPaymentformData.wallettransfer ===
                                                          false
                                                        ) {
                                                          changeInput_CPFD(
                                                            true,
                                                            "requiredError"
                                                          );
                                                        } else {
                                                          changeInput_CPFD(
                                                            false,
                                                            "requiredError"
                                                          );
                                                          changeInput_CPFD(
                                                            true,
                                                            "formloading"
                                                          );
                                                          if (
                                                            await handleOrderPayment()
                                                          ) {
                                                            setFormDisplay([
                                                              formdisplayvalue.checkoutsignin,
                                                              formdisplayvalue.confirmcontent,
                                                            ]);
                                                            setCount({
                                                              ...count,
                                                              count: count + 1,
                                                            });
                                                            window.scrollTo(
                                                              10,
                                                              0
                                                            );
                                                          } else {
                                                            changeInput_CPFD(
                                                              false,
                                                              "formloading"
                                                            );
                                                          }
                                                        }
                                                        // document.getElementById(
                                                        //   "deliverycontent"
                                                        // ).style.display = "none";
                                                        // document.getElementById(
                                                        //   "paymentcontent"
                                                        // ).style.display = "none";
                                                        // document.getElementById(
                                                        //   "confirmcontent"
                                                        // ).style.display = "block";
                                                        // document.getElementById(
                                                        //   "ordersummarycontent"
                                                        // ).style.display = "none";
                                                      }}
                                                    >
                                                      Pay ₹{(Number(cartinfoData.total + shippingcalc))}
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* 
                              <div
                                id="confirmcontent"
                                hidden={
                                  !formdisplay.includes(
                                    formdisplayvalue.confirmcontent
                                  )
                                }
                              >
                                <div className="w-full">
                                  <br />
                                  <br />
                                  <center>
                                    <BsCartCheckFill
                                      color="#7fa37f"
                                      style={{
                                        height: "100px",
                                        width: "100px",
                                      }}
                                    />
                                    <br />
                                    <h3>
                                      <b>Thank you for shopping!</b>
                                    </h3>
                                    <p>
                                      Your order has been placed. <br />
                                    </p>
                                    <br />
                                    <p>
                                      Total Paid: ₹ {orderdetails.totalamt}
                                      <br />
                                    </p>
                                    <br />
                                    <button
                                      className="block w-72 py-2 bg-orange-300 hover:bg-orange-400 text-center text-white font-heading uppercase rounded-md transition duration-200"
                                      onClick={() => {
                                        // setFormDisplay([
                                        //   formdisplayvalue.checkoutsignin,
                                        //   formdisplayvalue.ordersummarycontent,
                                        // ]);
                                        navigate("/orderhistory");
                                        setCount({
                                          ...count,
                                          count: count + 1,
                                        });
                                        window.scrollTo(10, 0);
                                      }}
                                    >
                                      View Order
                                    </button>
                                  </center>
                                </div>
                              </div> */}

                              <div
                                id="ordersummarycontent"
                                hidden={
                                  !formdisplay.includes(
                                    formdisplayvalue.ordersummarycontent
                                  )
                                }
                              >
                                <br />
                                <div className="mb-2 py-2 px-8 border rounded-full">
                                  <div className="flex justify-between items-center">
                                    <span className="text-blue-500">
                                      Order subtotal
                                    </span>
                                    <span className="text-xl font-heading text-black">
                                      <span style={{ display: "flex" }}>
                                        <span style={{ paddingTop: "5px" }}>
                                          <PiCurrencyInr
                                            style={{ color: "#000" }}
                                          />
                                        </span>
                                        {orderdetails.totalamt}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mb-2 py-2 px-8 border rounded-full">
                                  <div className="flex justify-between items-center">
                                    <span className="text-blue-500">
                                      Shipping
                                    </span>
                                    <span className="text-xl font-heading text-black">
                                      <span style={{ display: "flex" }}>
                                        <span style={{ paddingTop: "5px" }}>
                                          <PiCurrencyInr
                                            style={{ color: "#000" }}
                                          />
                                        </span>
                                        0.00
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mb-10 py-2 px-8 border rounded-full">
                                  <div className="flex justify-between items-center">
                                    <span className="text-blue-500">Tax</span>
                                    <span className="text-xl font-heading text-black">
                                      <span style={{ display: "flex" }}>
                                        <span style={{ paddingTop: "5px" }}>
                                          <PiCurrencyInr
                                            style={{ color: "#000" }}
                                          />
                                        </span>
                                        0.00
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="flex mb-8 justify-between items-center">
                                  <span className="text-xl font-heading text-black">
                                    Total
                                  </span>
                                  <span className="text-xl font-heading text-black">
                                    <span style={{ display: "flex" }}>
                                      <span style={{ paddingTop: "5px" }}>
                                        <PiCurrencyInr
                                          style={{ color: "#000" }}
                                        />
                                      </span>
                                      {orderdetails.totalamt}
                                    </span>
                                  </span>
                                </div>
                                <a
                                  className="block w-full py-2 bg-orange-300 hover:bg-orange-400 text-center text-white font-heading uppercase rounded-md transition duration-200"
                                  href="/orderhistory"
                                >
                                  Show All Orders
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="summaryBox col-sm-4 rightSection noPdRight"
                          hidden={formdisplay.includes(
                            formdisplayvalue.confirmcontent
                          )}
                        >
                          <div className="summeryBorderBox prc-summary">
                            {/* <div className="sectionTopHeading">
                              <h4>Price Summary</h4>
                            </div> */}

                            <div className="bx-pdg">
                              <div className="paymentBox">
                                <div className="prc-bdn prc-bdn-dsk">
                                  <div hidden={!pickdeliveryaddress}>
                                    <div className="f-flex flex-column pm-o-summary mb-2">
                                      <div
                                        className="bgclr-so-white cursor-p"
                                        style={{ padding: 0 }}
                                      >
                                        <div>
                                          <span className="f-b3-r clr-shade1">
                                            Delivering order to{" "}
                                          </span>{" "}
                                          <span className="f-b3-s clr-shade1">
                                            {pickdeliveryaddress?.firstname}
                                          </span>
                                          <div
                                            className="d-flex align-items-center"
                                            onClick={() => {
                                              setFormDisplay([
                                                formdisplayvalue.checkoutsignin,
                                                formdisplayvalue.deliverycontent,
                                              ]);
                                              setExDeliveryAddshow(true);
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                            }}
                                          >
                                            <p
                                              className="f-b2-r clr-shade3 bkf-ellipsis"
                                              style={{ maxWidth: "85%" }}
                                            >
                                              {
                                                pickdeliveryaddress?.doorno_streetaddress
                                              }
                                              ,
                                              {
                                                pickdeliveryaddress?.location_town_district
                                              }
                                              ,{pickdeliveryaddress?.city},
                                              {pickdeliveryaddress?.pincode}.
                                            </p>
                                            <br />
                                            <b>Change</b>
                                            <img
                                              className="ml-1"
                                              src="https://images.bewakoof.com/web/right-arrow-addr-1645078965.svg"
                                              alt="address change"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr className="hr-dark mb-2" />
                                  </div>

                                  <div>
                                    <div className="shipmentWrapper mb-2">
                                      <p className="f-b2-s ">
                                        You are paying for these items
                                      </p>

                                      {cartinfoData.products.map((product) => (
                                        <>
                                          <div>
                                            <div className="shipmentinner d-flex align-items-center">
                                              <p className="count bgclr-p-black clr-so-white f-b3-m">
                                                {product.cartquantity}
                                              </p>
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
                                                alt={product.name}
                                              />
                                              <div
                                                className="shipmentinnerText ml-3"
                                                style={{ width: "85%" }}
                                              >
                                                <p className="f-b3-r clr-shade2 bkf-ellipsis">
                                                  {product.name}
                                                </p>
                                                <p className="f-b3-r clr-shade4 bkf-ellipsis">
                                                  Estimated delivery by{" "}
                                                  <span className="clr-so-green f-b3-s">
                                                    {moment(new Date())
                                                      .add(4, "days")
                                                      .format("DD MMMM YYYY")}
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                            <hr />
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                    <hr className="hr-dark" />

                                    <div className="bgclr-so-white ">

                                      <p className="f-b1-b mb-3 pmt-popup-wrap">
                                        Shipping Method
                                      </p>

                                      {checkerArray(shippingrate) ?
                                        <>
                                          {shippingrate?.map((shprate) => (
                                            <>
                                              <div className="paymentBox">
                                                <div className="undefined ">
                                                  <div className="d-flex w100 paymentBoxInner f-b3-r text-left">
                                                    <input type="radio" id={shprate?.shipping} onChange={(event) => {
                                                      setShippingCalc(shprate?.shipping)
                                                    }}
                                                      name="shipping" value={shprate?.shipping} checked={shprate?.checked} />
                                                    <label for={shprate?.shipping}> &nbsp;&nbsp; &nbsp;&nbsp;{shprate?.method}  &nbsp;&nbsp;&nbsp; ₹{shprate?.shipping}</label><br />
                                                  </div>

                                                </div>
                                              </div>
                                            </>
                                          ))}
                                        </> :
                                        <>
                                          <div className="paymentBox">
                                            <div className="undefined ">
                                              <div className="d-flex w100 paymentBoxInner f-b3-r text-left">
                                                <input type="radio" id={shippingrate?.shipping} onChange={(event) => {
                                                  setShippingCalc(shippingrate?.shipping)
                                                }}
                                                  name="shipping" value={shippingrate?.shipping} checked={shippingrate?.checked} />
                                                <label for={shippingrate?.shipping}> &nbsp;&nbsp; &nbsp;&nbsp;{shippingrate?.method}  &nbsp;&nbsp;&nbsp; ₹{shippingrate?.shipping}</label><br />
                                              </div>

                                            </div>
                                          </div>
                                        </>
                                      }

                                      <hr className="m-0" />
                                      {/* <div className="walletbalanceMSG2 d-flex justify-content-between">
                                        <p className="walletbalanceMSG3 d-flex"> <input type="checkbox" id="myCheckbox" />
                                          <label for="myCheckbox"></label>&nbsp;&nbsp;Use Tamiltshirts Cash (₹100)</p> <b className=""><span >Balance : ₹100</span></b></div> */}
                                      <CheckBoxPage userData={userData} setUserData={setUserData} cartinfoData={cartinfoData} />
                                      <p className="f-b1-b mb-3 pmt-popup-wrap">
                                        Price Summary
                                      </p>

                                      <div className="paymentBox">
                                        <div className="undefined ">
                                          <div className="d-flex justify-content-between w100 paymentBoxInner f-b3-r">
                                            <p className="f-b3-r p-brk-dwn false">
                                              Total MRP (Incl. of taxes)&nbsp;
                                            </p>
                                            <p className="f-b3-r p-brk-dwn false">
                                              ₹{cartinfoData.mrptotal}
                                            </p>
                                          </div>
                                          <div className="d-flex justify-content-between w100 paymentBoxInner f-b3-r">
                                            <p className="f-b3-r p-brk-dwn false">
                                              Delivery Fee&nbsp;
                                            </p>
                                            <p
                                              className="f-b3-r p-brk-dwn false"
                                              style={{
                                                color: "rgb(0, 184, 82)",
                                              }}
                                            >
                                              ₹ {shippingcalc}
                                            </p>
                                          </div>
                                          <div className="d-flex justify-content-between w100 paymentBoxInner f-b3-r">
                                            <p className="f-b3-r p-brk-dwn false">
                                              Discount on MRP&nbsp;
                                            </p>
                                            <p className="f-b3-r p-brk-dwn false">
                                              - ₹
                                              {cartinfoData.mrptotal -
                                                cartinfoData.total}
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
                                              <b>Subtotal&nbsp;</b>
                                            </p>
                                            <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                              <b> ₹{cartinfoData.total}</b>
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
                                              -₹200
                                            </p>
                                          </div>
                                        </div>
                                      </div>





                                      {/* {shippingrate.map((shprate) => {
                                        <>
                                          <div className="paymentBox">
                                            <div className="undefined ">
                                              <div className="d-flex w100 paymentBoxInner f-b3-r text-left">
                                                <input type="radio" id={shprate?.shipping} onChange={(event) => {
                                                  console.log(shprate?.shipping)
                                                  setShippingCalc(shprate?.shipping)
                                                }}
                                                  name="shipping" value={shprate?.shipping} />
                                                <label for={shprate?.shipping}> &nbsp;&nbsp; &nbsp;&nbsp;{shprate?.method}  &nbsp;&nbsp;&nbsp; ₹{shprate?.shipping}</label><br />
                                              </div>

                                            </div>
                                          </div>
                                        </>
                                      })} */}


                                      {/* <div className="paymentBox">
                                        <div className="undefined ">
                                          <div className="d-flex w100 paymentBoxInner f-b3-r text-left">
                                            <input type="radio" id={shippingrate?.shipping} onChange={(event) => {
                                              console.log(shippingrate?.shipping)
                                              setShippingCalc(shippingrate?.shipping)
                                            }}
                                              name="shipping" value={shippingrate?.shipping} />
                                            <label for={shippingrate?.shipping}> &nbsp;&nbsp; &nbsp;&nbsp;{shippingrate?.method}  &nbsp;&nbsp;&nbsp; ₹{shippingrate?.shipping}</label><br />
                                          </div>

                                        </div>
                                      </div> */}
                                      <hr className="m-0" />
                                      <div className="f-b2-s mt-3 d-flex justify-content-between">
                                        <p>Final amount </p>
                                        <p>₹{(Number(cartinfoData.total + shippingcalc))}</p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <div className="d-flex justify-content-between w100 paymentBoxInner ">
                                    <p className="f-b3-r p-brk-dwn false">
                                      Total MRP (Incl. of taxes)&nbsp;
                                    </p>
                                    <p className="f-b3-r p-brk-dwn false">
                                      ₹
                                      {cartinfoData.mrptotal +
                                        cartinfoData.total}
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
                                      FREE
                                    </p>
                                  </div>
                                  <div className="d-flex justify-content-between w100 paymentBoxInner ">
                                    <p className="f-b3-r p-brk-dwn false">
                                      Cart Discount&nbsp;
                                    </p>
                                    <p className="f-b3-r p-brk-dwn false">
                                      - ₹
                                      {cartinfoData.mrptotal -
                                        cartinfoData.total}
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
                                  </div> */}
                                </div>
                                {/* <div className="hidden lg:block md:block xl:block 2xl:block">
                                  <div className="pmts-box px-2">
                                    <div className="pmts-wrap">
                                      <div
                                        className="d-flex justify-content-between w100 paymentBoxInner "
                                        style={{
                                          fontFamily:
                                            "montserrat-semibold, sans-serif",
                                        }}
                                      >
                                        <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                          Total&nbsp;
                                        </p>
                                        <p className="f-b3-r p-brk-dwn p-brk-dwn-st">
                                          ₹{cartinfoData.total}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>

                            <div>
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
                                          src="https://images.bewakoof.com/web/frame-easy-trust.svg"
                                        />
                                        <span className="ProductText">
                                          EASY RETURNS &amp; INSTANT REFUNDS
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row  containerInner">
                                      <div className="d-flex flex-column align-items-center">
                                        <img
                                          loading="lazy"
                                          alt="offer"
                                          src="https://images.bewakoof.com/web/Globe-gray-badge.svg"
                                        />
                                        <span className="ProductText">
                                          SHIPPING GLOBALLY
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="connectTitle">
                                    <hr className="acceptText" />{" "}
                                    <span className="socialHeading">
                                      We accept
                                    </span>
                                    <div className="d-flex flex-row justify-content-between connectWithTitle">
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/google-pay-logo.svg"
                                      />
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/upi-sign.svg"
                                      />
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/phone-pay-logo.svg"
                                      />
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/visa-card-logo-9.svg"
                                      />
                                      <img
                                        loading="lazy"
                                        alt="offer"
                                        src="https://images.bewakoof.com/web/master-card.svg"
                                      />
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
                {/* <div hidden={coffeeloader}>
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
                </div> */}
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
          count,
          storeid
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

      <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
    </>
  );
}