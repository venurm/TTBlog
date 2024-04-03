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
import Footer from "./footer";
import NavbarMain from "./navbarmain";
const meta = {
  title: "Shipping And Refund Policy",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ShippingAndRefundPolicy(props) {
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
          <div className="container mx-auto px-8">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div>
                <br /> <br />
                <h3>Shipping &amp; Delivery Information</h3>
                <br />
                <p>
                  Most of our Products are delivered within 48 hours across
                  India from the date of order.
                </p>
                <p>
                  Estimated delivery time is marked across each product and
                  shall be intimated during placing the order.
                </p>
                <p>
                  Some products are offered Same day shipping/delivery across
                  Chennai.
                </p>
                <br />
                <h3>Return and Refund Policy</h3>
                <br />
                <p>
                  If the Product isn't right, We are ready to accept the Return.
                </p>
                <p>
                  Items must be returned within 7 days of purchase along with
                  the proof.
                </p>
                <p>
                  We can exchange the product or refund the purchase amount
                  based on your notification.
                </p>
              </div>
            </div>
          </div>
        </section>

     
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>

       
      </>
    </React.Fragment>
  );
}
