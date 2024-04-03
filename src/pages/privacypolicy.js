import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "react-lazy-blur-image";
import InfiniteScroll from "react-infinite-scroll-component";
import { PiCurrencyInr } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchColorCodesData,
  handleFetchProductsColorCodesData,
  handleFetchProductsData,
  handleFetchProductsDataSliced,
  handleFetchProductsSizeData,
  handleFetchSizeData,
  handleFetchVersionManagerData,
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import {
  handleGetCategoryInfoStorageItems,
  handleGetColorCodeStorageItems,
  handleGetProductsColorCodesStorageItems,
  handleGetProductsInfoStorageItems,
  handleGetProductsSizeStorageItems,
  handleGetSizeStorageItems,
  handleGetVersionManagerStorageItems,
  handleSetCategoryInfoStorageItems,
  handleSetVersionManagerStorageItems,
} from "../utilities/storageManager";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import MultiRangeSlider from "multi-range-slider-react";
import { useNavigate, useParams } from "react-router-dom";
import { AK } from "../constants/AppKeys";
import { callStores } from "../utilities/storeManager";
import { checkerArray, checkerString } from "../utilities/checker";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { lowercasenosp } from "../utilities/checker";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
const meta = {
  title: "Privacy Policy",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function PrivacyPolicy(props) {
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

  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  const [producthasMore, setProductHasMore] = useState(true);
  const params = useParams();
  const [productsListPageData, setProductsListPageData] = useState([]);
  const [productsListDisplayData, setProductsListDisplayData] = useState([]);
  const [sizeListDisplayData, setSizeListDisplayData] = useState([]);
  const [colorListDisplayData, setColorListDisplayData] = useState([]);
  const [productsListDisplayDataCount, setProductsListDisplayDataCount] =
    useState(20);
  const [
    productsListIncreaseDisplayDataCount,
    setProductsListIncreaseDisplayDataCount,
  ] = useState(20);
  const [mobileFilterTab, setmobileFilterTab] = useState("sizes");

  if (!pageinit) {
    setPageInit(true);
    pageRefresh();
  }

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };
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
            <div className="flex flex-wrap -mx-3 mb-2">
              <div>
                <>
                  <br />
                  <h3>Privacy Policy</h3>
                  <br />
                  <p>
                    Your privacy is very important to us. We do not publish,
                    sell or rent your personal information to third parties for
                    their marketing purposes without your explicit consent.
                    Please read this privacy policy to learn more about the ways
                    in which we use and protect your personal information.
                  </p>
                  <br />
                  <p>
                    This privacy policy sets out how we use and protects any
                    information that you give us when you use this website. Our
                    Team is committed to ensuring that your privacy is
                    protected. Should we ask you to provide certain information
                    by which you can be identified when using this website, then
                    you can be assured that it will only be used in accordance
                    with this privacy statement. We may change this policy from
                    time to time by updating this page. You should check this
                    page from time to time to ensure that you are happy with any
                    changes.
                  </p>
                  <br />
                  <b>What we collect</b>
                  <br />
                  <br />
                  We may collect the following information: name contact
                  information including email address demographic information
                  such as postcode, preferences and interests other information
                  relevant to customer surveys and/or offers
                  <br />
                  <br />
                  <b>What we do with the information we gather</b>
                  <br />
                  <br />
                  We require this information to understand your needs and
                  provide you with a better service, and in particular for the
                  following reasons: Internal record keeping. We may use the
                  information to improve our products and services. We may
                  periodically send promotional emails about new products,
                  special offers or other information which we think you may
                  find interesting using the email address which you have
                  provided. From time to time, we may also use your information
                  to contact you for market research purposes. We may contact
                  you by email, phone, fax or mail. We may use the information
                  to customize the website according to your interests.
                  <br />
                  <br />
                  <b>Security</b>
                  <br />
                  <br />
                  <p>
                    We are committed to ensuring that your information is
                    secure. In order to prevent unauthorized access or
                    disclosure, we have put in place suitable physical,
                    electronic and managerial procedures to safeguard and secure
                    the information we collect online.
                  </p>
                  <br />
                  <b>How we use cookies</b>
                  <br />
                  <br />
                  <p>
                    A cookie is a small file which asks permission to be placed
                    on your computer's hard drive. Once you agree, the file is
                    added and the cookie helps analyse web traffic or lets you
                    know when you visit a particular site. Cookies allow web
                    applications to respond to you as an individual. The web
                    application can tailor its operations to your needs, likes
                    and dislikes by gathering and remembering information about
                    your preferences.
                  </p>
                  <br />
                  <p>
                    We use traffic log cookies to identify which pages are being
                    used. This helps us analyse data about web page traffic and
                    improve our website in order to tailor it to customer needs.
                    We only use this information for statistical analysis
                    purposes and then the data is removed from the system.
                  </p>
                  <br />
                  <p>
                    Overall, cookies help us provide you with a better website,
                    by enabling us to monitor which pages you find useful and
                    which you do not. A cookie in no way gives us access to your
                    computer or any information about you, other than the data
                    you choose to share with us. You can choose to accept or
                    decline cookies. Most web browsers automatically accept
                    cookies, but you can usually modify your browser setting to
                    decline cookies if you prefer. This may prevent you from
                    taking full advantage of the website.
                  </p>
                  <br />
                  <br />
                  <b>Links to other websites</b>
                  <br />
                  <br />
                  <p>
                    Our website may contain links to other websites of interest.
                    However, once you have used these links to leave our site,
                    you should note that we do not have any control over that
                    other website. Therefore, we cannot be responsible for the
                    protection and privacy of any information which you provide
                    whilst visiting such sites and such sites are not governed
                    by this privacy statement. You should exercise caution and
                    look at the privacy statement applicable to the website in
                    question.
                  </p>
                  <br />
                  <br />
                  <b>Controlling your personal information</b>
                  <br />
                  <br />
                  You may choose to restrict the collection or use of your
                  personal information in the following ways: whenever you are
                  asked to fill in a form on the website, look for the box that
                  you can click to indicate that you do not want the information
                  to be used by anybody for direct marketing purposes. If you
                  have previously agreed to us using your personal information
                  for direct marketing purposes, you may change your mind at any
                  time by writing to or emailing us at{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="3a494f4a4a55484e7a5b5e435b48525b545e5359485b5c4e4914595557"
                  >
                    [email&nbsp;protected]
                  </a>
                  <p>
                    We will not sell, distribute or lease your personal
                    information to third parties unless we have your permission
                    or are required by law to do so. We may use your personal
                    information to send you promotional information about third
                    parties which we think you may find interesting if you tell
                    us that you wish this to happen.
                  </p>
                  <p>
                    You may request details of personal information which we
                    hold about you under the Data Protection Act 1998. A small
                    fee will be payable. If you would like a copy of the
                    information held on you please write to 230/1A NSK Street,
                    RV Nagar, Kodungaiyur, chennai - 118.
                  </p>
                  <p>
                    If you believe that any information we are holding on you is
                    incorrect or incomplete, please write to or email us as soon
                    as possible, at the above address. We will promptly correct
                    any information found to be incorrect.
                  </p>
                  We allow our users to unsubscribe from our mailing list.
                </>
              </div>
            </div>
          </div>
        </section>


         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>

      
      </>
    </React.Fragment>
  );
}
