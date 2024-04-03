import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AxiosPost } from "../utilities/axioscall";
import { AK } from "../constants/AppKeys";
import { AxiosError } from "../utilities/sessionexpiry";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/actions";
import { getUserdata } from "../utilities/sessionexpiry";
import { checkerArray, lowercasenosp } from "../utilities/checker";

import cart from './shopping-cart.png'
import OTPInput, { ResendOTP } from "otp-input-react";
import "./customstyle.css";
import { get, put } from "../utilities/storeManager";
import { SK } from "../constants/StorageKeys";
import { checkerString, checkerStringLen } from "../utilities/checker";

const meta = {
  title: "Check Out",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function SignIn(props) {
  

  const {
    store,
    storeid,
    userData,
    setUserData,
    cartinfoData,
    setCartInfoData,
    count,
    setCount,
    clearCartInfoData,
    pageRefresh,
  } = props;
  
  const navigate = useNavigate();
  const [pageinit, setPageInit] = useState(false);
  const [formdisplay, setFormDisplay] = useState([]);
  const [exdeliveryaddshow, setExDeliveryAddshow] = useState(false);

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
  });
  let dispatch = useDispatch();

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
 
  useEffect(() => {
    console.log("***");
  }, [count]);


  const handleLogout = async () => {
    AxiosPost(AK.LOGOUTAPI, {})
      .then((res) => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        dispatch(setUser(null));
      });
    dispatch(setUser(null));
  };

  if (!pageinit) {
    setPageInit(true);
    handleLogout();
    pageRefresh();
  }

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

  const fetchOrderPayment = async () => {
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
    return await AxiosPost(AK.FETCHDELIVERYADDRESSAPI, {})
      .then((res) => {
        if (res != typeof undefined && res.data != typeof undefined) {
          if (res?.data?.datas.length > 0) {
            let _exadd = res?.data?.datas;
            if (!_exadd[0]?.primary_addr) {
              _exadd[0]["primary_addr"] = 1;
            }
            if (_exadd.length > 0) {
              setCheckoutDeliveryFormData(_exadd[0]);

              setFormDisplay([
                formdisplayvalue.checkoutsignin,
                formdisplayvalue.paymentcontent,
              ]);
            }
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
          dispatch(setUser(userdata));
          setCount({ ...count, count: count + 1 });
          await fetchDeliveryAddress();

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

  var timeLeft = 30;


  const countdown = () => {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      //  doSomething();
    } else {

      timeLeft--;
    }
  };

  var timerId = setInterval(countdown, 1000);

  const changeInput = useCallback(async (value, field) => {
    checkoutDeliveryformData[field] = value;
    setCheckoutDeliveryFormData(checkoutDeliveryformData);
    setCount((count) => (count = count + 1));
  });

  if (!pageinit) {
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


      setPageInit(true);

      return;
    } else {
      setFormDisplay([
        formdisplayvalue.loginorsignup,
        formdisplayvalue.loginorsignupcontent,
      ]);
      setCount({ ...count, count: count + 1 });
      setPageInit(true);
    }
  }

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <section className="overflow-x-hidden container-y pt-5 mt-5">
          <div className="container px-4 mt-1 mt-md-5  mx-auto">
            <div className="flex flex-wrap items-center  pt-5 mt-5">
              <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
                <div className="py-4 testing-1 text-center">
                  <a
                    className="inline-block mb-14 text-3xl font-bold font-heading"
                    href="/"
                  >
                   <img
                      className="h-16"
                      src={`yofte-assets/logos/${lowercasenosp(
                        store
                      )}/logo.webp`}
                      alt=""
                      width="auto"
                    />
                  </a>
           
                  
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
                                className="flex flex-wrap justify-center -mx-4 "
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

                                           <p className="pt-4">Don't have an account? <span ><a href="/signup" style={{color:'#42a2a2'}}><b>Sign up</b></a></span></p>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                          
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
                                              <div className="otp-resend">
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
                             

                              <div
                                className="mb-2 px-2 lg:px-2 bg-white"
                                style={{ paddingBottom: "2px" }}
                              >
                               

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
                                          <h5 className="text-center">successfully Sign in</h5>
                                          </div>
                                          <div className="successmsg pt-5">
                                            <center><img src={cart} width={'100px'} alt="cart logo"></img></center>
                                            <p>Go and purchase your favorite items on Tamiltshirts today</p>
                                                 <a href="/">SHOP NOW</a></div>
                                        
                                        </div>
                                      </div>
                                    </div>

                                    
                                  </div>

                                </div>
                              </div>


                         
                            </div>
                          </div>
                </div>
                <img
                  className="hidden lg:hidden h-full w-full object-cover"
                  src="yofte-assets/images/placeholder-sign.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                'url("yofte-assets/images/placeholder-sign.png")',
            }}
          />
        </section>

      </>
    </React.Fragment>
  );
}