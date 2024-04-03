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
import XMLViewer from 'react-xml-viewer';
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
import { AxiosGET } from "../utilities/axioscall";
import axios from "axios";

const meta = {
  title: "Site Map",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function SiteMap(props) {
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

  const [siteMap, setSiteMap] = useState("")

  if (!pageinit) {
    setPageInit(true);

    const headers = {
      accesskey: AK.ACCESSKEY,
      "Content-Type": "application/json",
    };


    // axios.get('/user/12345')
    //   .then(function (response) {
    //     console.log(response.data);
    //     console.log(response.status);
    //     console.log(response.statusText);
    //     console.log(response.headers);
    //     console.log(response.config);
    //   });

    // const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");
    // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get("https://earth-api.vilvabusiness.com/api/product-feed/2")
      .then((res) => {
        // if (res != typeof undefined && res.data != typeof undefined) {
        console.log(res);

        setSiteMap(res.data);
        // document.getElementById("siteMap").innerHTML = new DOMParser().parseFromString(siteMap, "text/xml")
        // return res.data;
        // }
      })
      .catch((error) => {
        // return AxiosError(history, error);
      });

    // AxiosGET(AK.SITEMAPXMLAPI)
    //   .then((res) => {
    //     console.log(res)
    //     // if (res != null && res.data.length > 0)
    //     //   if (singledata) return res.data[0];
    //     //   else return res.data;
    //     // else return null;
    //   })
    //   .catch((error) => { });
    // pageRefresh();
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

        <XMLViewer xml={siteMap} />

        {/* <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div
                id="siteMap"

              >
                
              </div>

            </div>
          </div>
        </section> */}




      </>
    </React.Fragment>
  );
}
