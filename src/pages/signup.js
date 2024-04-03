import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { AxiosPost } from "../utilities/axioscall";
import { AK } from "../constants/AppKeys";
import { AxiosError } from "../utilities/sessionexpiry";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/actions";
import { getUserdata } from "../utilities/sessionexpiry";
import { checkerArray } from "../utilities/checker";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { lowercasenosp } from "../utilities/checker";
const meta = {
  title: "Sign Up",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function SignUp(props) {
  const {
    store,
    description,
    assets,
    storeid,
    hdimage,
    productimage,
    productviewimage,
    thumbnailviewimage,
    cartinfoData,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;

  const navigate = useNavigate();
  const [pageinit, setPageInit] = useState(false);
  const [userData, setUserData] = useState({});
  const [signupformData, setSignUpFormData] = useState({
    username: "",
    email: "",
    mobileno: "",
    password: "",
    retypepassword: "",
    usernameError: false,
    emailError: false,
    mobilenoError: false,
    passwordError: false,
    passwordlengthError: false,
    retypepasswordError: false,
    passwordnotmatchedError: false,
    credentialsError: false,
    formloading: false,
    formsuccessmsg: false,
  });
  let dispatch = useDispatch();
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("***");
  }, [count]);

  const handleSignUp = useCallback(async () => {
    let error = false;
    changeInput(false, "usernameError");
    changeInput(false, "emailError");
    changeInput(false, "mobilenoError");
    changeInput(false, "passwordError");
    changeInput(false, "passwordlengthError");
    changeInput(false, "retypepasswordError");
    changeInput(false, "passwordnotmatchedError");
    changeInput(false, "credentialsError");
    changeInput(false, "formloading");

    if (signupformData.username === "") {
      await changeInput(true, "usernameError");
      error = true;
    }
    if (signupformData.email === "") {
      await changeInput(true, "emailError");
      error = true;
    }
    if (signupformData.mobileno === "") {
      await changeInput(true, "mobilenoError");
      error = true;
    }
    if (signupformData.password === "") {
      await changeInput(true, "passwordError");
      error = true;
    }
    if (signupformData.password.length < 8) {
      await changeInput(true, "passwordlengthError");
      error = true;
    }
    if (signupformData.retypepassword === "") {
      await changeInput(true, "retypepasswordError");
      error = true;
    }
    if (
      signupformData.retypepassword !== "" &&
      signupformData.password !== "" &&
      signupformData.password !== signupformData.retypepassword
    ) {
      await changeInput(true, "passwordnotmatchedError");
      error = true;
    }

    if (error) return;
    const signuppayload = {
      name: signupformData.username,
      email: signupformData.email,
      mobile: signupformData.mobileno,
      password: signupformData.password,
    };
    await changeInput(true, "formloading");
    await AxiosPost(AK.REGISTERAPI, signuppayload, false)
      .then(async (res) => {
        changeInput(false, "formloading");

        if (res != typeof undefined && res.data != typeof undefined) {
          changeInput(true, "formsuccessmsg");
          let userdata = JSON.parse(JSON.stringify(res.data));
          dispatch(setUser(userdata));
          if (
            cartinfoData?.products &&
            checkerArray(cartinfoData?.products, 1)
          ) {
            navigate("/checkout");
          } else {
            navigate("/");
          }
        }
      })
      .catch(async (error) => {
        let errors = AxiosError(error);
        console.log(errors);
        if (errors?.message === "Invalid credentials") {
          await changeInput(false, "formloading");
          await changeInput(true, "credentialsError");
        } else {
          await changeInput(false, "formloading");
          await changeInput(true, "credentialsError");
        }
      });
  });

  const changeInput = useCallback(async (value, field) => {
    signupformData[field] = value;
    setSignUpFormData(signupformData);
    setCount((count) => (count = count + 1));
  });

  if (!pageinit) {
    setPageInit(true);
    setUserData(getUserdata());
  }
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative overflow-x-hidden container-y">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
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
                  <h3 className="mb-8 text-3xl md:text-3xl font-bold font-heading">
                    Signing up with social is super quick
                  </h3>
                  <p className="mb-10">Please, do not hesitate</p>

                  <form action="">
                    <input
                      className="w-full mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => changeInput(e.target.value, "username")}
                    />
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.usernameError}
                    >
                      Please, enter your name!
                    </p>
                    <input
                      className="w-full mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="email"
                      placeholder="contact@tamiltshirts.in"
                      onChange={(e) => changeInput(e.target.value, "email")}
                    />
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.emailError}
                    >
                      Please, enter your email address!
                    </p>
                    <input
                      className="w-full mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="tel"
                      placeholder="Mobile Number"
                      onChange={(e) => changeInput(e.target.value, "mobileno")}
                    />
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.mobilenoError}
                    >
                      Please, enter your mobile number!
                    </p>
                    <input
                      className="w-full mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => changeInput(e.target.value, "password")}
                    />
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.passwordError}
                    >
                      Please, enter your password!
                    </p>
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.passwordlengthError}
                    >
                      Password field required atleast 8 characters.
                    </p>
                    <input
                      className="w-full mb-4 px-12 py-2 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="password"
                      placeholder="Repeat password"
                      onChange={(e) =>
                        changeInput(e.target.value, "retypepassword")
                      }
                    />
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.retypepasswordError}
                    >
                      Please, Type your password again!
                    </p>
                    <p
                      className="mb-2 text-red-500"
                      hidden={!signupformData.passwordnotmatchedError}
                    >
                      Password doesn't match, please check it!
                    </p>
                    <label className="flex" htmlFor="agreecheck">
                      <input
                        id="agreecheck"
                        className="mr-4 mt-0"
                        type="checkbox"
                      />
                      <span className="text-sm">
                        By singning up, you agree to our Terms, Data Policy and
                        Cookies.
                      </span>
                    </label>
                    <PulseLoader
                      loading={signupformData.formloading}
                      size={10}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    <p
                      className="mb-2 text-green-500"
                      hidden={!signupformData.formsuccessmsg}
                    >
                      Hi {signupformData.username}, Your Account Registered
                      Successfully, Shop Now.
                    </p>
                    <button
                      className="mt-2 md:mt-2 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-2 px-8 rounded-md uppercase"
                      onClick={async (event) => {
                        event.preventDefault();
                        let eventtarget = event.currentTarget;
                        if (eventtarget.readOnly) return;
                        eventtarget.readOnly = true;
                        await handleSignUp();
                        eventtarget.readOnly = false;
                      }}
                    >
                      JOIN TeeMania
                    </button>
                    <br />
                    <br />
                    or Already have an account
                    <br />
                    <br />
                    <button
                      className="bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-2 px-8 rounded-md uppercase"
                      onClick={() => {
                        navigate("/signin");
                      }}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
                <img
                  className="hidden lg:hidden h-96 w-full object-cover"
                  src="yofte-assets/images/placeholder-signup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                'url("yofte-assets/images/placeholder-signup.png")',
            }}
          />
        </section>
      </>
    </React.Fragment>
  );
}
