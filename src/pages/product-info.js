import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { PiCurrencyInr } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";
import { FaExclamationCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import {
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchProductsData,
  handleGetCartInfoStorageItems,
  handleProductInfoAddtoCart,
  handleProductInfoMinus,
  handleProductInfoPlus,
  updateProductInfoData,
  handleFetchVersionManagerData,
  handleFetchColorCodesData,
  handleFetchSizeData,
} from "../utilities/cartManager";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { AK } from "../constants/AppKeys";
import { checkerString, lowercasenosp, removeDuplicates } from "../utilities/checker";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  handleGetCategoryInfoStorageItems,
  handleGetColorCodeStorageItems,
  handleGetProductsInfoStorageItems,
  handleGetSizeStorageItems,
  handleGetVersionManagerStorageItems,
  handleSetCategoryInfoStorageItems,
  handleSetVersionManagerStorageItems,
} from "../utilities/storageManager";
import { callStores } from "../utilities/storeManager";
import { checkerArray } from "../utilities/checker";
import toast, { Toaster } from "react-hot-toast";
import NavbarMain from "./navbarmain";
import Footer from "./footer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProductView(props) {
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
  const location = useLocation();
  const navigate = useNavigate();
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);

  const [productinfo, setProductInfoData] = useState({});
  const [productinfoselectedSize, setproductinfoselectedSize] = useState([]);
  const [productgroupsData, setProductGroupsData] = useState([]);
  const [showimage, setShowImage] = useState(0);
  const [chooseSizeError, setchooseSizeError] = useState(false);

  const [mobilepdtlshower, setMobilepdtlShower] = useState({
    description: false,
    brand: false,
    reviews: false,
    shipping: false,
  });

  const [availableData, setAvailabeData] = useState({
    colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    products: [{ id: 110 }, { id: 111 }, { id: 112 }, { id: 113 }, { id: 114 }],
  });

  const notify = () =>
    toast.success("Added to cart.", {
      style: {
        border: "1px solid #00b852",
        padding: "16px",
        color: "#00b852",
      },
      iconTheme: {
        primary: "#00b852",
        secondary: "#FFFAEE",
      },
    });

  const notifyerror = (msg) =>
    toast.error(msg, {
      style: {
        border: "1px solid #cc0000",
        padding: "16px",
        color: "#cc0000",
      },
      iconTheme: {
        primary: "#cc0000",
        secondary: "#FFFAEE",
      },
    });
  useEffect(() => {
    if (cartinfoData.cartcount > 5) {
      console.log("***");
    } else {
      console.log("***");
    }
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    let productview = params?.id;
    console.log(productview);
    console.log(params);
    if (
      location?.state === null ||
      location?.state?.productinfo === null ||
      !checkerString(productview)
    ) {
      navigate("/products");
    }
  }, []);

  useEffect(() => {
    console.log("***");
  }, [count]);

  const changeInputprdtlshower = useCallback(async (value, field) => {
    mobilepdtlshower.description = false;
    mobilepdtlshower.brand = false;
    mobilepdtlshower.reviews = false;
    mobilepdtlshower.shipping = false;

    mobilepdtlshower[field] = value;
    setMobilepdtlShower(mobilepdtlshower);
    setCount((count) => (count = count + 1));
  });

  const filterSize = (size) => {
    if (size === null) return true;
    let filtered = availableData.size.filter((avsize) => {
      if (avsize.id === size.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  const filterColor = (color) => {
    let filtered = availableData.colorcodes.filter((avcolor) => {
      if (avcolor.id === color.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  const onchangeProductColor = (color) => {
    if (productgroupsData.length > 0) {
      let pgfilter = productgroupsData.filter((pg) => {
        return pg.colorcodes_id === color.id;
      });
      if (pgfilter.length > 0) {
        let ongoingproduct = pgfilter[0];
        navigate("/p/" + ongoingproduct?.seo_url, {
          state: {
            productinfo: ongoingproduct,
            productgroups: productgroupsData,
          },
        });
        // window.location.reload();
        ongoingproduct["images"] = ongoingproduct?.imageurl?.split(",");
        updateProductInfoData(
          setFormLoader,
          ongoingproduct,
          setProductInfoData
        );
        setCount((count) => (count = count + 1));
      }
    }
  };

  const setProductInfoView = async (productinfo, productgroups) => {
    updateProductInfoData(setFormLoader, productinfo, setProductInfoData);
    setProductGroupsData(productgroups);
    let groupd_id = productinfo?.products_group_id;

    availableData.colorcodes = [];
    availableData.colorcodes.push({
      id: productinfo?.colorcodes_id,
    });
    if (productgroups.length > 0) {
      productgroups.map((pg) => {
        availableData.colorcodes.push({
          id: pg?.colorcodes_id,
        });
      });
    }
    availableData.size = [];
    let size = productinfo?.size_id?.split(",");
    if (size?.length > 0) {
      size.map((sz) => {
        availableData.size.push({ id: Number(sz) });
      });
    }
    setAvailabeData(availableData);
    setCount((count) => (count = count + 1));
  };

  const callProductview = async () => {
    let productview = params?.id;
    if (checkerString(productview)) {
      let _productsListData = await pageRefresh(true);
      let _productfilter = _productsListData?.filter((filtpro) => {
        return filtpro?.seo_url === productview;
      });
      if (_productfilter?.length > 0) {
        let product = _productfilter[0];
        product["images"] = product?.imageurl?.split(",");
        let groupd_id = product?.products_group_id;
        let group_product = _productsListData.filter((prod) => {
          return prod?.products_group_id === groupd_id ? true : false;
        });
        navigate("/p/" + product?.seo_url, {
          state: {
            productinfo: product,
            productgroups: group_product,
          },
        });
        setProductInfoView(product, group_product);
      }
    }
  };

  if (!pageinit) {
    window.scrollTo(0, 0);
    if (location.state != null && location?.state?.productinfo != null) {
      let productgroups = location?.state?.productgroups;
      let productinfo = location?.state?.productinfo;
      setProductInfoView(productinfo, productgroups);
      setPageInit(true);
      pageRefresh();
    } else {
      callProductview();
      setCount((count) => (count = count + 1));
      setPageInit(true);
    }
  }

  // if (!pageinit) {
  //   setPageInit(true);
  //   setUserData(getUserdata());

  //   if (location.state != null && location?.state?.productinfo != null) {
  //     updateProductInfoData(
  //       setFormLoader,
  //       location.state?.productinfo,
  //       setProductInfoData
  //     );
  //   }
  //   let storeinfo = handleGetCategoryInfoStorageItems();
  //   if (storeinfo === null) {
  //     handleFetchCategoryData(setFormLoader, setCategoryListData);
  //   } else setCategoryListData(storeinfo);

  //   storeinfo = handleGetProductsInfoStorageItems();
  //   if (storeinfo === null) {
  //     handleFetchProductsData(setFormLoader, setProductsListData);
  //   } else setProductsListData(storeinfo);

  //   storeinfo = handleGetColorCodeStorageItems();
  //   if (storeinfo === null) {
  //     handleFetchColorCodesData(setFormLoader, setColorCodesListData);
  //   } else setColorCodesListData(storeinfo);

  //   storeinfo = handleGetSizeStorageItems();
  //   if (storeinfo === null) {
  //     handleFetchSizeData(setFormLoader, setSizeListData);
  //   } else setSizeListData(storeinfo);

  //   handleGetCartInfoStorageItems(setCartInfoData);

  //   storeinfo = handleGetVersionManagerStorageItems();
  //   handleFetchVersionManagerData(
  //     setFormLoader,
  //     setVersionManagerListData
  //   ).then(async (data) => {
  //     if (storeinfo === null) {
  //       await handleFetchCategoryData(setFormLoader, setCategoryListData);
  //       await handleFetchProductsData(setFormLoader, setProductsListData);
  //       await handleFetchColorCodesData(setFormLoader, setColorCodesListData);
  //       await handleFetchSizeData(setFormLoader, setSizeListData);
  //     } else {
  //       await storeinfo.map(async (stinfo) => {
  //         let objectdata = data.filter((obj) => {
  //           return obj.name === stinfo.name;
  //         });
  //         if (objectdata.length > 0) {
  //           if (objectdata[0].code != stinfo.code) {
  //             if (stinfo.name === "products")
  //               await handleFetchProductsData(
  //                 setFormLoader,
  //                 setProductsListData
  //               );
  //             if (stinfo.name === "category")
  //               await handleFetchCategoryData(
  //                 setFormLoader,
  //                 setCategoryListData
  //               );
  //             if (stinfo.name === "colorcodes")
  //               await handleFetchColorCodesData(
  //                 setFormLoader,
  //                 setColorCodesListData
  //               );
  //             if (stinfo.name === "size")
  //               await handleFetchSizeData(setFormLoader, setSizeListData);
  //           }
  //         }
  //       });
  //     }
  //     // handleSetVersionManagerStorageItems(data);
  //   });
  // }
  useEffect(() => {
    // Update the title when the component mounts
    document.title = productinfo.name ? productinfo.name : 'TamilTshirts';
  }, [productinfo.name]);
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative hidden lg:block">
          <NavbarMain storeid={storeid} />

        </section>

        <section className="relative block lg:hidden md:hidden xl:hidden 2xl:hidden container-y">
          <div className="container mx-auto">
            <div>
              <div className="toastWrapper">
                <span />
              </div>
              <div className="producMainWrpr">
                <header
                  className="pdpHeaderDiv visible-xs"
                  id="pdpHeaderDiv"
                  style={{
                    background: "rgba(255, 255, 255, 0)",
                    boxShadow: "none",
                  }}
                >
                  <div className="pdpHeader d-flex justify-content-start align-items-center">
                    <div className="iconContainer d-flex justify-content-center align-items-center bk-ic-mgn">
                      <a href="/products">
                        <img
                          src="https://images.bewakoof.com/web/ic-web-head-primary-back.svg"
                          alt="back"
                          className="pdp-header-icons"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    </div>
                    <div className="rightButtons d-flex flex-row justify-content-around align-items-center">
                      {/* <div className=" visible-xs">
                        <a
                          className="iconContainer d-flex justify-content-center align-items-center"
                          data-deeplink="No deeplink "
                          href="whatsapp://send?text=https://www.bewakoof.com/p/mens-green-cyber-samurai-graphic-printed-t-shirt?utm_source=whatsapp_share_msite&utm_medium=whatsapp&amp;linkname=Men's Green Cyber Samurai Graphic Printed T-shirt"
                        >
                          <img
                            src="https://images.bewakoof.com/web/sharing-icon.png"
                            alt="share"
                            className="pdp-header-icons"
                          />
                        </a>
                      </div> */}
                      <div className="iconContainer d-flex justify-content-center align-items-center">
                        <a aria-current="false" href="/cart">
                          <img
                            src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                            alt="shopping-bag"
                            className="pdp-header-icons"
                          />
                          <span className="cartCount d-flex justify-content-center align-items-center">
                            {getcartCount()}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </header>
                <span id="tribePopup">
                  <div />
                </span>
                <span id="viewSimilarPopup">
                  <div />
                </span>
                <div />
                <div className="containerHeightPDPMsite productWrapper">
                  <div className="container prodDetailsContainer">
                    <div className="col-sm-6 col-xs-12 sliderWrpr stickySlider">
                      <div>
                        <div className="col-xs-12 col-sm-10 noPdXs mainSlickV3">
                          <div className="swiper-container swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                            <div
                              className="swiper-wrapper"
                              style={{
                                transitionDuration: "0ms",
                                transform: "translate3d(-2262px, 0px, 0px)",
                              }}
                            >
                              <div
                                id="testMainSlider-0"
                                className="swiper-slide bg-grey swiper-slide-duplicate swiper-slide-duplicate-active"
                                data-swiper-slide-index={0}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  className="swiper-lazy swiper-lazy-loaded"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                  src={
                                    productinfo != null &&
                                      productinfo != undefined &&
                                      productinfo?.images != undefined
                                      ? assets +
                                      productviewimage +
                                      productinfo["images"][0]
                                      : ""
                                  }
                                  onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src =
                                      "/yofte-assets/images/no-image.webp";
                                  }}
                                />
                              </div>
                              <div
                                id="testMainSlider-1"
                                className="swiper-slide bg-grey swiper-slide-duplicate swiper-slide-duplicate-next"
                                data-swiper-slide-index={1}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762495-2.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-2"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762501-3.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-3"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={3}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762506-4.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-4"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={4}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762512-5.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-5"
                                className="swiper-slide bg-grey swiper-slide-duplicate swiper-slide-prev"
                                data-swiper-slide-index={5}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762517-6.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-0"
                                className="swiper-slide bg-grey swiper-slide-active"
                                data-swiper-slide-index={0}
                                style={{ width: "100%", marginRight: 2 }}
                              >
                                <img
                                  className="swiper-lazy swiper-lazy-loaded"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                  src={
                                    productinfo != null &&
                                      productinfo != undefined &&
                                      productinfo?.images != undefined
                                      ? assets +
                                      productviewimage +
                                      productinfo["images"][0]
                                      : ""
                                  }
                                  onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src =
                                      "/yofte-assets/images/no-image.webp";
                                  }}
                                />
                              </div>
                              <div
                                id="testMainSlider-1"
                                className="swiper-slide bg-grey swiper-slide-next"
                                data-swiper-slide-index={1}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762495-2.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-2"
                                className="swiper-slide bg-grey"
                                data-swiper-slide-index={2}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762501-3.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-3"
                                className="swiper-slide bg-grey"
                                data-swiper-slide-index={3}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762506-4.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-4"
                                className="swiper-slide bg-grey"
                                data-swiper-slide-index={4}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762512-5.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-5"
                                className="swiper-slide bg-grey swiper-slide-duplicate-prev"
                                data-swiper-slide-index={5}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762517-6.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-0"
                                className="swiper-slide bg-grey swiper-slide-duplicate swiper-slide-duplicate-active"
                                data-swiper-slide-index={0}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src={
                                    productinfo != null &&
                                      productinfo != undefined &&
                                      productinfo?.images != undefined
                                      ? assets +
                                      productviewimage +
                                      productinfo["images"][0]
                                      : ""
                                  }
                                  onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src =
                                      "/yofte-assets/images/no-image.webp";
                                  }}
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-1"
                                className="swiper-slide bg-grey swiper-slide-duplicate swiper-slide-duplicate-next"
                                data-swiper-slide-index={1}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762495-2.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-2"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={2}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762501-3.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-3"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={3}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762506-4.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-4"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={4}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762512-5.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                              <div
                                id="testMainSlider-5"
                                className="swiper-slide bg-grey swiper-slide-duplicate"
                                data-swiper-slide-index={5}
                                style={{ width: 375, marginRight: 2 }}
                              >
                                <img
                                  data-src="https://images.bewakoof.com/t1080/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762517-6.jpg"
                                  className="swiper-lazy"
                                  alt="galler_img"
                                  style={{ cursor: "zoom-in" }}
                                />
                                <div className="swiper-lazy-preloader swiper-skeleton">
                                  <p className="bTag">B.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pdt-r-wrap d-flex align-items-center bgclr-shade8 pdp-r-wrap  undefined">
                            <i className="icon_star_filled clr-p-yellow" />
                            <span className="clr-shade-2">4.5 | 492</span>
                          </div>
                        </div>
                      </div>
                      <div className="ratings-box-v3">
                        <div className="p-smlr-wrp rtng-wrapper-v3 view-sim-rp">
                          <img
                            className="sim-img"
                            src="https://images.bewakoof.com/web/view-simi-1651751913.svg"
                            loading="lazy"
                            decoding="async"
                            alt="view_similar_img"
                          />
                          <div className="fade-out-text-v3 vi-sim-txt">
                            View Similar
                          </div>
                        </div>
                      </div>
                      <div className="tag-container pdp-tag-container">
                        <div
                          className="d-flex tag-wrapper"
                          style={{ minHeight: 18 }}
                        >
                          <div
                            className="d-flex align-items-center tag-row p-tag"
                            style={{ background: "rgba(0, 184, 82, 0.8)" }}
                          >
                            <span
                              className="pdp"
                              style={{ color: "rgb(255, 255, 255)" }}
                            >
                              BUY 3 FOR 1199
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12 detailsWrapper">
                      <div className="prodDesc w100 clearfix d-flex flex-column">
                        <div className="pd-t-name-sec d-flex">
                          <h3
                            id="testProManufacturer"
                            className="col-xs-12 col-sm-12 noPd brandNameV3"
                          >
                            {store}®
                          </h3>
                          <div className="pdp--wishlist-wrap">
                            <img
                              src="https://images.bewakoof.com/web/ic--wishlist-v2.svg"
                              alt="wishlist"
                              className="wishlist-icon-animate"
                            />
                          </div>
                        </div>
                        <h1
                          id="testProName"
                          className="col-xs-12 col-sm-12 noPd productName"
                        >
                          {productinfo.name}
                        </h1>
                        <div className="priceRow pull-left w100 d-flex align-items-start">
                          <span className="priceContainer d-flex flex-column col-xs-12 noPd">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="prices d-flex flex-row align-items-end">
                                <span className="sellingPrice mr-1">
                                  <span className="rupee_icon">₹</span>
                                  {productinfo.sp}
                                </span>
                                <div className="discPrice mr-2">
                                  <span>₹</span>
                                  {productinfo.mrp}
                                </div>
                                <div className="offers offer-perc-o">
                                  <p>66% OFF</p>
                                </div>
                              </div>
                            </div>
                            <span className="inclusiveOfAllTaxes mb-1">
                              inclusive of all taxes
                            </span>
                          </span>
                          {/* <div className="d-flex flex-column trb-jo-wrap">
                            <div className="trb-jo-container">
                              <div className="pr-row-wrap">
                                <div className="border">
                                  <div className="d-flex flex-row pr-row-container">
                                    <div className="d-flex flex-column pr-row justify-content-start">
                                      <div className="tp-head d-flex align-items-center">
                                        <p>
                                          Tri<span>Be</span>
                                        </p>{" "}
                                        Price
                                      </div>
                                      <div>
                                        <span className="rp-i">₹</span>{" "}
                                        <span className="sv-amt">459</span>
                                      </div>
                                    </div>
                                    <div className="py-2">
                                      <img
                                        src="https://images.bewakoof.com/web/ic-tribe-partition.svg"
                                        alt="tribe-img"
                                      />
                                    </div>
                                    <div className="d-flex flex-grow-1 flex-column tr-md-r justify-content-center">
                                      <div className="d-flex flex-row">
                                        <div className="sv-row">
                                          <span className="reg-amt">Save</span>
                                          <span className="rp">EXTRA ₹</span>
                                          <span className="sv-amt">40</span>
                                          <span className="reg-amt">
                                            with TriBe
                                          </span>
                                        </div>
                                      </div>
                                      <p className="sub-h">
                                        and, enjoy <span>FREE</span> Delivery
                                      </p>
                                    </div>
                                    <div className="tribe-cta d-flex align-items-center">
                                      Get TriBe{" "}
                                      <img
                                        src="https://images.bewakoof.com/web/right-arrow.svg"
                                        alt="right-arrow"
                                      />
                                    </div>
                                    <div className="watermark-img">
                                      <img
                                        src="https://images.bewakoof.com/web/ic-glass-light-yellow.svg"
                                        alt="yellow_glass_icon"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="d-fit-tags-ctr w100 clear">
                            <div className="tags-wrapper">
                              <div
                                className="tags-rect d-flex flex-column"
                                style={{
                                  backgroundColor: "white",
                                  color: "rgb(115, 115, 115)",
                                  border: "1px solid rgb(115, 115, 115)",
                                  margin: "4px 12px 0px 0px",
                                }}
                              >
                                <p className="mob">100% COTTON</p>
                              </div>
                            </div>
                          </div> */}

                          <div
                            className="g-dvr"
                            style={{
                              width: "calc(100% + 30px)",
                              margin: "16px -15px 0px",
                            }}
                          />
                        </div>
                        <div className="mDealWrapper visible-xs col-xs-12 noPd" />
                        <div className="col-sm-12 noPd">
                          <span className="savingPrice" />
                        </div>
                        <div className="sizeBlock col-xs-12 ">
                          <div>
                            <div className="sizeWrapper exchangeSizeWrapper ">
                              <div className="sizeOuterWrapper align-items-center ">
                                <div className="selectSizeLeft">
                                  <div className="col-xs-12 noPd d-flex flex-row align-items-center">
                                    <h2 className="selectSizeTitle">
                                      Select Size
                                    </h2>
                                    <h2 className="sizeQtyError" />
                                  </div>
                                </div>

                                <div className="sizeGuidRight">
                                  <div
                                    className="sizeChartDiv"
                                    id="testSizeChart"
                                  >
                                    <span className="sizeChart">
                                      Size Guide
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="scrollSize">
                                <div className="selectSize">
                                  {sizeListData
                                    .filter(filterSize)
                                    .map((size) => (
                                      <button
                                        id={"sizecode" + size.code}
                                        className={
                                          size?.selected === true
                                            ? "mb-2 mr-2 selectSizeBtn text-black rounded-md"
                                            : "mb-2 mr-2 selectSizeBtn text-black rounded-md"
                                        }
                                        onClick={async (event) => {
                                          event.preventDefault();
                                          let eventtarget = event.currentTarget;
                                          if (eventtarget.readOnly) return;
                                          eventtarget.readOnly = true;
                                          sizeListData.map((sizesub) => {
                                            sizesub["selected"] = false;
                                          });
                                          size["selected"] =
                                            size?.selected === true
                                              ? false
                                              : true;
                                          // if (productinfo["selectedsize"]) {
                                          //   productinfo["selectedsize"] = size;
                                          // }

                                          setCount({
                                            ...count,
                                            count: count + 1,
                                          });
                                          eventtarget.readOnly = false;
                                        }}
                                      >
                                        <div
                                          className={
                                            size?.selected === true
                                              ? "eachSize text-blue  border-blue-300"
                                              : "text-black eachSize"
                                          }
                                        >
                                          <span> {size.code}</span>
                                        </div>
                                      </button>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* {productgroupsData.map((_groupproduct) => (
                          <>
                            {(_groupproduct ? true : false)(
                              <>
                                <div className="colorDivV3 noPdSm col-xs-12 noPdXs ">
                                  <div className="colorName">
                                    <label> COLOUR:</label>
                                  </div>
                                  <div className="multiColorBoxV3 clearfix">
                                    <div className="multiColorDivV3 d-flex flex-wrap align-items-center justify-content-start">
                                      {colorcodesListData
                                        .filter(filterColor)
                                        .map((color) => (
                                          <div
                                            className={
                                              color?.selected === true
                                                ? "colorbttn multiColorBlockV3 active"
                                                : "colorbttn multiColorBlockV3"
                                            }
                                            onClick={async (event) => {
                                              event.preventDefault();
                                              let eventtarget =
                                                event.currentTarget;
                                              if (eventtarget.readOnly) return;
                                              eventtarget.readOnly = true;
                                              colorcodesListData.map(
                                                (colorsub) => {
                                                  colorsub["selected"] = false;
                                                }
                                              );
                                              onchangeProductColor(color);
                                              color["selected"] =
                                                color?.selected === true
                                                  ? false
                                                  : true;
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                              eventtarget.readOnly = false;
                                            }}
                                          >
                                            <span>
                                              <div
                                                style={{
                                                  height: "calc(100%)",
                                                  backgroundColor: color.code,
                                                  borderRadius: 8,
                                                }}
                                              />
                                            </span>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                  <div className="sizeColorDvdr">
                                    <div
                                      className="g-dvr"
                                      style={{
                                        height: 8,
                                        background: "rgb(247, 247, 247)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        ))} */}

                        {/* <div className="p-ofr-wrapper d-flex flex-column">
                          <div
                            className="g-dvr"
                            style={{
                              height: 8,
                              background: "rgb(247, 247, 247)",
                            }}
                          />
                          <span className="offer-head">
                            Save Extra With Offers
                          </span>
                          <div className="d-flex PDP-container">
                            <div className="swiper-container swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                              <div className="swiper-wrapper">
                                <div
                                  className="swiper-slide scroll-container d-flex swiper-no-swiping swiper-slide-active"
                                  style={{ width: 343, marginRight: 10 }}
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="offer-img">
                                      <img
                                        src="https://images.bewakoof.com/web/offer-img.svg"
                                        alt="offer"
                                      />
                                    </div>
                                    <div className="coupon-text">
                                      Get flat 20% Off on Rupay Cards on orders
                                      above Rs. 1200. Coupon code -{" "}
                                      <strong>RUPAY20</strong>{" "}
                                    </div>
                                  </div>
                                  <div className="border-circle con1" />
                                  <div className="border-circle con2" />
                                  <div className="border-circle con3" />
                                  <div className="border-circle con4" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="g-dvr"
                            style={{
                              height: 8,
                              background: "rgb(247, 247, 247)",
                            }}
                          />
                        </div>
                        <div className="checkCod mt-2 w100 pull-left">
                          <div className="checkCodBox offer-sec">
                            <div className="checkPincodeBox">
                              <div className="checkPincodeHeader d-flex align-items-center">
                                <img
                                  src="https://images.bewakoof.com/web/ic-location.svg"
                                  alt="location_icon"
                                  loading="lazy"
                                />
                                CHECK FOR DELIVERY DETAILS
                              </div>
                              <div className="deliveryLocation">
                                <a
                                  className="pull-left"
                                  aria-current="false"
                                  href="/p/mens-green-cyber-samurai-graphic-printed-t-shirt#SELECT_COUNTRY"
                                >
                                  <div className="deliveryLocation d-flex flex-row justify-content-start align-items-center">
                                    <p>Delivering in</p>
                                    <p className="countryName">India </p>
                                  </div>
                                </a>
                                <img
                                  src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <div className="codCheckForm mb-3 codError false">
                                <input
                                  type="text"
                                  placeholder="Enter Pincode"
                                  maxLength={6}
                                  name="codCheck"
                                  defaultValue=""
                                />
                                <button>Check</button>
                              </div>
                              <p className="codCheckError">
                                Enter a valid pincode or check for Global
                                Delivery
                              </p>
                            </div>
                          </div>
                          <a
                            aria-current="false"
                            href="/p/mens-green-cyber-samurai-graphic-printed-t-shirt#SELECT_COUNTRY"
                          >
                            <div className="delivery-change-link d-flex justify-content-between align-items-center mb-1">
                              <div className="delivery-change-link-text d-flex align-items-center justify-content-start">
                                <img
                                  src="https://images.bewakoof.com/web/ic-earth.svg"
                                  alt="globe"
                                  loading="lazy"
                                  decoding="async"
                                />
                                Check For Global Delivery&nbsp;
                              </div>
                              <img
                                className="iconNext"
                                src="https://images.bewakoof.com/web/ic-next-blue.svg"
                                alt="icon_next"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="designerBanner pull-left mt-3 mb-4">
                          <div className="designerText">Buy 3 for 1199</div>
                          <div className="designerViewAll">
                            <p>
                              View All Items <i className="icon_next" />
                            </p>
                          </div>
                          <div className="designerImg">
                            <img
                              loading="lazy"
                              src="https://images.bewakoof.com/web/offer--1--1-2x-1631707984.webp"
                              alt="designer_img"
                            />
                          </div>
                        </div> */}
                        <section className="sectionBrdrBtm pull-left w100">
                          <div className="pull-left w100 mt-2" />
                          <div className="w100 pull-left ">
                            <div className="accordion mb-2 pt-2 pb-2 brdrBtm">
                              <div
                                className="accordion-item mb-2"
                                onClick={() => {
                                  changeInputprdtlshower(
                                    !mobilepdtlshower.description,
                                    "description"
                                  );
                                }}
                              >
                                <div className="accordion-title d-flex align-items-center mb-2">
                                  <img
                                    className="mr-2"
                                    src="https://images.bewakoof.com/web/ic-prod-desc.svg"
                                    alt="accordion_img"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <div className="d-flex flex-column">
                                    <div className="d-flex flex-row pl-1">
                                      <h2>Product Description</h2>
                                    </div>
                                    <div className="accordion-subtitle pl-1 pt-1">
                                      Manufacture, Care and Fit
                                    </div>
                                  </div>
                                  <p className="accordion-icon">
                                    {!mobilepdtlshower.description ? "+" : "-"}
                                  </p>
                                </div>
                              </div>
                              <div
                                id="mobviewproductdescription"
                                className="descObjWrpr ml-1 mb-3"
                                hidden={!mobilepdtlshower.description}
                                dangerouslySetInnerHTML={{
                                  __html: productinfo?.descp,
                                }}
                              ></div>
                            </div>
                            <div className="accordion mb-2 pt-2 pb-2 brdrBtm">
                              <div
                                className="accordion-item mb-2"
                                onClick={() => {
                                  changeInputprdtlshower(
                                    !mobilepdtlshower.reviews,
                                    "reviews"
                                  );
                                }}
                              >
                                <div className="accordion-title d-flex align-items-center mb-2">
                                  <img
                                    className="mr-2"
                                    src="https://images.bewakoof.com/web/ic-return.svg"
                                    alt="accordion_img"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <div className="d-flex flex-column">
                                    <div className="d-flex flex-row pl-1">
                                      <h2>Customer &amp; Reviews</h2>
                                    </div>
                                  </div>
                                  <p className="accordion-icon">
                                    {!mobilepdtlshower.reviews ? "+" : "-"}
                                  </p>
                                </div>
                              </div>
                              <div
                                id="mobviewproductreviews"
                                className="descObjWrpr ml-1 mb-3"
                                hidden={!mobilepdtlshower.reviews}
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-8 course-details-content">
                                      <div className="course-details-card mt--40">
                                        <div className="course-content">
                                          <h5 className="mb--20">Review</h5>
                                          <div className="row row--30 flex flex-wrap">
                                            <div className="col-lg-4 w-full">
                                              <div className="rating-box">
                                                <div className="rating-number">
                                                  5.0
                                                </div>
                                                <div className="rating mb-2">
                                                  <StarRatings
                                                    rating={5.0}
                                                    starRatedColor="orange"
                                                    starDimension="20px"
                                                    starSpacing="2px"
                                                  />
                                                </div>
                                                <span>(25 Review)</span>{" "}
                                              </div>
                                            </div>
                                            <div className="col-lg-8 w-full">
                                              <div className="review-wrapper">
                                                <div className="single-progress-bar">
                                                  <div className="rating-text">
                                                    {" "}
                                                    5{" "}
                                                    <i
                                                      className="fa fa-star"
                                                      aria-hidden="true"
                                                    ></i>{" "}
                                                  </div>
                                                  <div
                                                    className="progress"
                                                    style={{
                                                      marginLeft: "18px",
                                                    }}
                                                  >
                                                    <div
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={{ width: "100%" }}
                                                      aria-valuenow="100"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"
                                                    ></div>
                                                  </div>
                                                  <span className="rating-value">
                                                    23
                                                  </span>{" "}
                                                </div>
                                                <div className="single-progress-bar">
                                                  <div className="rating-text">
                                                    {" "}
                                                    4{" "}
                                                    <i
                                                      className="fa fa-star"
                                                      aria-hidden="true"
                                                    ></i>{" "}
                                                  </div>
                                                  <div
                                                    className="progress"
                                                    style={{
                                                      marginLeft: "18px",
                                                    }}
                                                  >
                                                    <div
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={{ width: "80%" }}
                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"
                                                    ></div>
                                                  </div>
                                                  <span className="rating-value">
                                                    3
                                                  </span>{" "}
                                                </div>
                                                <div className="single-progress-bar">
                                                  <div className="rating-text">
                                                    {" "}
                                                    3{" "}
                                                    <i
                                                      className="fa fa-star"
                                                      aria-hidden="true"
                                                    ></i>{" "}
                                                  </div>
                                                  <div
                                                    className="progress"
                                                    style={{
                                                      marginLeft: "18px",
                                                    }}
                                                  >
                                                    <div
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={{ width: "60%" }}
                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"
                                                    ></div>
                                                  </div>
                                                  <span className="rating-value">
                                                    2
                                                  </span>{" "}
                                                </div>
                                                <div className="single-progress-bar">
                                                  <div className="rating-text">
                                                    {" "}
                                                    2{" "}
                                                    <i
                                                      className="fa fa-star"
                                                      aria-hidden="true"
                                                    ></i>{" "}
                                                  </div>
                                                  <div
                                                    className="progress"
                                                    style={{
                                                      marginLeft: "18px",
                                                    }}
                                                  >
                                                    <div
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={{ width: "40%" }}
                                                      aria-valuenow="0"
                                                      aria-valuemin="0"
                                                      aria-valuemax="100"
                                                    ></div>
                                                  </div>
                                                  <span className="rating-value">
                                                    3
                                                  </span>{" "}
                                                </div>
                                                <div className="single-progress-bar">
                                                  <div className="rating-text">
                                                    {" "}
                                                    1{" "}
                                                    <i
                                                      className="fa fa-star"
                                                      aria-hidden="true"
                                                    ></i>{" "}
                                                  </div>
                                                  <div
                                                    className="progress"
                                                    style={{
                                                      marginLeft: "18px",
                                                    }}
                                                  >
                                                    <div
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={{ width: "20%" }}
                                                      aria-valuenow="0"
                                                      aria-valuemin="80"
                                                      aria-valuemax="100"
                                                    ></div>
                                                  </div>
                                                  <span className="rating-value">
                                                    2
                                                  </span>{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="comment-wrapper pt--40">
                                            <div className="section-title">
                                              <h5 className="mb--25">
                                                Reviews
                                              </h5>
                                            </div>

                                            <div className="edu-comment">
                                              <div className="thumbnail">
                                                {" "}
                                                <img
                                                  src={`/yofte-assets/users/user1.webp`}
                                                  alt="Comment Images"
                                                />{" "}
                                              </div>
                                              <div className="comment-content">
                                                <div className="comment-top">
                                                  <h6 className="title">
                                                    Vijay Kumar
                                                  </h6>
                                                  <div className="rating mb-4">
                                                    <StarRatings
                                                      rating={4.4}
                                                      starRatedColor="orange"
                                                      starDimension="20px"
                                                      starSpacing="2px"
                                                    />
                                                  </div>
                                                </div>
                                                <span className="subtitle">
                                                  “ Outstanding Review Design ”
                                                </span>
                                                <p>
                                                  Lorem ipsum dolor sit amet,
                                                  consectetur adipiscing elit,
                                                  sed do eiusmod tempor
                                                  incididunt ut labore et dolore
                                                  magna aliqua. Ut enim ad minim
                                                  veniam, quis nostrud
                                                  exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo
                                                  consequat.
                                                </p>
                                              </div>
                                            </div>

                                            <div className="edu-comment">
                                              <div className="thumbnail">
                                                {" "}
                                                <img
                                                  src={`/yofte-assets/users/user1.webp`}
                                                  alt="Comment Images"
                                                />{" "}
                                              </div>
                                              <div className="comment-content">
                                                <div className="comment-top">
                                                  <h6 className="title">
                                                    Ashok Selvan
                                                  </h6>
                                                  <div className="rating mb-4">
                                                    <StarRatings
                                                      rating={3.2}
                                                      starRatedColor="orange"
                                                      starDimension="20px"
                                                      starSpacing="2px"
                                                    />
                                                  </div>
                                                </div>
                                                <span className="subtitle">
                                                  “ Nice Review Design ”
                                                </span>
                                                <p>
                                                  Nemo enim ipsam voluptatem
                                                  quia voluptas sit aspernatur
                                                  aut odit aut fugit, sed quia
                                                  consequuntur magni dolores eos
                                                  qui ratione voluptatem sequi
                                                  nesciunt. Neque porro quisquam
                                                  est, qui dolorem ipsum quia
                                                  dolor sit amet, consectetur,
                                                  adipisci velit, sed quia non
                                                  numquam.
                                                </p>
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
                            {/* <div className="accordion mb-2 pt-2 pb-2 brdrBtm">
                              <div className="accordion-item mb-2">
                                <div className="accordion-title d-flex align-items-center mb-2">
                                  <img
                                    className="mr-2"
                                    src="https://images.bewakoof.com/web/ic-return.svg"
                                    alt="accordion_img"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <div className="d-flex flex-column">
                                    <div className="d-flex flex-row pl-1">
                                      <h2>15 Days Returns &amp; Exchange</h2>
                                    </div>
                                    <div className="accordion-subtitle pl-1 pt-1">
                                      Know about return &amp; exchange policy
                                    </div>
                                  </div>
                                  <p className="accordion-icon">+</p>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </section>
                        {/* <div className="rating-skeleton-wrapper">
                          <div className="productDetailsSkeleton">
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <br />
                            <div className="avgRatingSectionWrpr">
                              <div className="skeleton sizeboxesDesktop">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="avgRatingSectionInner">
                                <div className="skeleton normaltext">
                                  <div
                                    className="shimmerPreloader"
                                    style={{ height: "100%", width: "100%" }}
                                  />
                                </div>
                                <div className="skeleton longtext">
                                  <div
                                    className="shimmerPreloader"
                                    style={{ height: "100%", width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <br />
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <br />
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <br />
                            <div className="skeleton normaltext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <br />
                            <div className="userReviewImageWrpr">
                              <div className="skeleton userReviewImage">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton userReviewImage">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                            </div>
                            <br />
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <br />
                            <div className="skeleton normaltext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton normaltext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <br />
                            <br />
                            <div className="sizebox">
                              <div className="skeleton shorttext">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton shortesttext">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="colorbox skeletonRow">
                              <div className="skeleton colorbox">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton colorbox">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton colorbox">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                            </div>
                            <br />
                            <br />
                            <div className="sizebox">
                              <div className="skeleton shorttext">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton shortesttext">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="skeleton longtext">
                              <div
                                className="shimmerPreloader"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                            <div className="colorbox skeletonRow">
                              <div className="skeleton colorbox">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton colorbox">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <div className="skeleton colorbox">
                                <div
                                  className="shimmerPreloader"
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                            </div>
                            <br />
                          </div>
                        </div>
                        <div className="trustBaggeContainer d-flex flex-column">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row  containerInner">
                              <div className="d-flex flex-column align-items-center">
                                <img
                                  loading="lazy"
                                  alt="offer"
                                  src="https://images.bewakoof.com/web/trust-cart.svg"
                                />
                                <span className="trustBadgeTitle">
                                  100% SECURE PAYMENTS
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-row  containerInner">
                              <div className="d-flex flex-column align-items-center">
                                <img
                                  loading="lazy"
                                  alt="offer"
                                  src="https://images.bewakoof.com/web/Easy-Returns.svg"
                                />
                                <span className="trustBadgeTitle">
                                  EASY RETURNS &amp; INSTANT REFUNDS
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-row  containerInner">
                              <div className="d-flex flex-column align-items-center">
                                <img
                                  loading="lazy"
                                  alt="offer"
                                  src="https://images.bewakoof.com/web/Globe.svg"
                                />
                                <span className="trustBadgeTitle">
                                  SHIPPING GLOBALLY
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reviewTrustwrpr">
                          <div className="sizeColorDvdr">
                            <div
                              className="g-dvr"
                              style={{
                                height: 8,
                                background: "rgb(247, 247, 247)",
                              }}
                            />
                          </div>
                          <div className="productRatingsWrpr w100 pull-left mt-1">
                            <div className="lazyload-placeholder" />
                          </div>
                          <span id="selectSizePopup">
                            <div />
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="descriptionImageList pull-left w100" />
                  <div className="col-xs-12" />
                  <div
                    id="addButtons"
                    className="addButtonsWrpr pull-left"
                    onClick={async (event) => {
                      event.preventDefault();
                      let eventtarget = event.currentTarget;
                      if (eventtarget.readOnly) return;
                      eventtarget.readOnly = true;
                      if (productinfo?.addtocart) {
                        navigate("/cart");
                        return;
                      }
                      let sizeselected = false;
                      sizeListData.map((sizesub) => {
                        if (sizesub["selected"]) sizeselected = true;
                      });
                      if (!sizeselected) {
                        setchooseSizeError(true);
                        notifyerror("Please choose size.");
                        setCount({ ...count, count: count + 1 });
                        eventtarget.readOnly = false;
                        return;
                      }
                      setchooseSizeError(false);
                      setCount({ ...count, count: count + 1 });
                      productinfo["addtocart"] = true;
                      await handleProductInfoAddtoCart(
                        productinfo,
                        setCartInfoData,
                        setCount,
                        cartinfoData,
                        count
                      );
                      notify();
                      eventtarget.readOnly = false;
                    }}
                  >
                    <div
                      className="addButtons d-flex flex-row align-items-center flex-row flex-grow-1  "
                      style={{ opacity: 1, pointerEvents: "auto" }}
                    >
                      <div
                        className={
                          productinfo?.addtocart
                            ? "p-add-bag bg-orange-300 hover:bg-orange-400 btn-border d-flex flex-row align-items-center flex-row align-items-center justify-content-center cursor-p "
                            : "p-add-bag bg-yellow-300 hover:bg-yellow-400 btn-border d-flex flex-row align-items-center flex-row align-items-center justify-content-center cursor-p "
                        }
                        style={{ flex: "1 1 0%" }}
                      >
                        <span>
                          {" "}
                          {productinfo?.addtocart
                            ? "GO TO CART"
                            : "ADD TO CART"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Toaster />
        <section className="hidden lg:block md:block xl:block 2xl:block py-4 container-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="flex flex-wrap w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <div
                  className={
                    checkerArray(productinfo["images"], 2)
                      ? "hidden lg:block mx-12 md:w-3/4"
                      : "hidden"
                  }
                  style={{
                    height: "564px",
                    width: "130px",
                    position: "sticky",
                    top: "100px",
                  }}
                >
                  <div
                    className="w-full sm:w-full p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 1)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgidv1"
                      className="block border border-transparent"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgidv1 =
                          document.getElementById("prothumimgidv1");
                        let prothumimgidv2 =
                          document.getElementById("prothumimgidv2");
                        let prothumimgidv3 =
                          document.getElementById("prothumimgidv3");
                        let prothumimgidv4 =
                          document.getElementById("prothumimgidv4");

                        prothumimgidv1.classList.add("border-blue-300");
                        //prothumimgidv1.classList.remove("border-blue-300");
                        prothumimgidv2.classList.remove("border-blue-300");
                        prothumimgidv3.classList.remove("border-blue-300");
                        prothumimgidv4.classList.remove("border-blue-300");
                        prothumimgidv1.classList.remove("border-transparent");
                        prothumimgidv2.classList.add("border-transparent");
                        prothumimgidv3.classList.add("border-transparent");
                        prothumimgidv4.classList.add("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][0]
                            : "";
                      }}
                    >
                      <LazyLoadImage
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][0]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="w-full sm:w-full p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 2)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgidv2"
                      className="block border border-transparent"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgidv1 =
                          document.getElementById("prothumimgidv1");
                        let prothumimgidv2 =
                          document.getElementById("prothumimgidv2");
                        let prothumimgidv3 =
                          document.getElementById("prothumimgidv3");
                        let prothumimgidv4 =
                          document.getElementById("prothumimgidv4");

                        prothumimgidv2.classList.add("border-blue-300");
                        prothumimgidv1.classList.remove("border-blue-300");
                        //prothumimgidv2.classList.remove("border-blue-300");
                        prothumimgidv3.classList.remove("border-blue-300");
                        prothumimgidv4.classList.remove("border-blue-300");
                        prothumimgidv1.classList.add("border-transparent");
                        prothumimgidv2.classList.remove("border-transparent");
                        prothumimgidv3.classList.add("border-transparent");
                        prothumimgidv4.classList.add("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][1]
                            : "";
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][1]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>

                  <div
                    className="w-full sm:w-full p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 3)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgidv3"
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgidv1 =
                          document.getElementById("prothumimgidv1");
                        let prothumimgidv2 =
                          document.getElementById("prothumimgidv2");
                        let prothumimgidv3 =
                          document.getElementById("prothumimgidv3");
                        let prothumimgidv4 =
                          document.getElementById("prothumimgidv4");

                        prothumimgidv3.classList.add("border-blue-300");
                        prothumimgidv1.classList.remove("border-blue-300");
                        prothumimgidv2.classList.remove("border-blue-300");
                        //prothumimgidv3.classList.remove("border-blue-300");
                        prothumimgidv4.classList.remove("border-blue-300");
                        prothumimgidv1.classList.add("border-transparent");
                        prothumimgidv2.classList.add("border-transparent");
                        prothumimgidv3.classList.remove("border-transparent");
                        prothumimgidv4.classList.add("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][2]
                            : "";
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][2]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="w-full sm:w-full p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 4)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgidv4"
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgidv1 =
                          document.getElementById("prothumimgidv1");
                        let prothumimgidv2 =
                          document.getElementById("prothumimgidv2");
                        let prothumimgidv3 =
                          document.getElementById("prothumimgidv3");
                        let prothumimgidv4 =
                          document.getElementById("prothumimgidv4");

                        prothumimgidv4.classList.add("border-blue-300");
                        prothumimgidv1.classList.remove("border-blue-300");
                        prothumimgidv2.classList.remove("border-blue-300");
                        prothumimgidv3.classList.remove("border-blue-300");
                        //prothumimgidv4.classList.remove("border-blue-300");
                        prothumimgidv1.classList.add("border-transparent");
                        prothumimgidv2.classList.add("border-transparent");
                        prothumimgidv3.classList.add("border-transparent");
                        prothumimgidv4.classList.remove("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][3]
                            : "";
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][3]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div
                  className={
                    checkerArray(productinfo["images"], 2)
                      ? "relative productinfoimagecss"
                      : "relative productinfosingleimagecss"
                  }
                >
                  <a
                    style={{
                      display: checkerArray(productinfo["images"], 2)
                        ? "block"
                        : "none",
                      cursor: "pointer",
                    }}
                    className="absolute top-1/2 left-0 ml-8 transform translate-1/2"
                    href={() => {
                      return false;
                    }}
                    onClick={() => {
                      var productimage =
                        document.getElementById("productimage");
                      productimage.src =
                        assets + productviewimage + productinfo["images"][0];
                      productinfo["images"][
                        showimage - 1 <= -1 ? 2 : showimage - 1
                      ];
                      if (showimage - 1 <= -1) setShowImage(2);
                      else setShowImage(showimage - 1);
                    }}
                  >
                    <svg
                      width={10}
                      height={18}
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                        fill="#000000"
                      />
                    </svg>
                  </a>
                  <LazyLoadImage
                    id="productimage"
                    className="object-cover w-full h-full"
                    src={
                      productinfo != null &&
                        productinfo != undefined &&
                        productinfo?.images != undefined
                        ? assets + productviewimage + productinfo["images"][0]
                        : ""
                    }
                    PlaceholderSrc={
                      productinfo != null &&
                        productinfo != undefined &&
                        productinfo?.images != undefined
                        ? assets + productviewimage + productinfo["images"][0]
                        : ""
                    }
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/yofte-assets/images/no-image.webp";
                    }}
                    alt=""
                  />
                  <a
                    style={{
                      display: checkerArray(productinfo["images"], 2)
                        ? "block"
                        : "none",
                      cursor: "pointer",
                    }}
                    className="absolute top-1/2 right-0 mr-8 transform translate-1/2"
                    href={() => {
                      return false;
                    }}
                    onClick={() => {
                      var productimage =
                        document.getElementById("productimage");
                      productimage.src =
                        assets +
                        productviewimage +
                        productinfo["images"][showimage + 1];
                      if (showimage + 1 >= 3) setShowImage(0);
                      else setShowImage(showimage + 1);
                    }}
                  >
                    <svg
                      width={10}
                      height={18}
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                        fill="#000000"
                      />
                    </svg>
                  </a>
                </div>

                <div
                  className={
                    checkerArray(productinfo["images"], 2)
                      ? "flex flex-wrap lg:hidden -mx-2"
                      : "hidden"
                  }
                >
                  <div
                    className="w-1/4 sm:w-1/4 p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 1)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgid1"
                      className="block border border-transparent"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgid1 =
                          document.getElementById("prothumimgid1");
                        let prothumimgid2 =
                          document.getElementById("prothumimgid2");
                        let prothumimgid3 =
                          document.getElementById("prothumimgid3");
                        let prothumimgid4 =
                          document.getElementById("prothumimgid4");

                        prothumimgid1.classList.add("border-blue-300");
                        //prothumimgid1.classList.remove("border-blue-300");
                        prothumimgid2.classList.remove("border-blue-300");
                        prothumimgid3.classList.remove("border-blue-300");
                        prothumimgid4.classList.remove("border-blue-300");
                        prothumimgid1.classList.remove("border-transparent");
                        prothumimgid2.classList.add("border-transparent");
                        prothumimgid3.classList.add("border-transparent");
                        prothumimgid4.classList.add("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][0]
                            : "";
                      }}
                    >
                      <LazyLoadImage
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][0]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="w-1/4 sm:w-1/4 p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 2)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgid2"
                      className="block border border-transparent"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgid1 =
                          document.getElementById("prothumimgid1");
                        let prothumimgid2 =
                          document.getElementById("prothumimgid2");
                        let prothumimgid3 =
                          document.getElementById("prothumimgid3");
                        let prothumimgid4 =
                          document.getElementById("prothumimgid4");

                        prothumimgid2.classList.add("border-blue-300");
                        prothumimgid1.classList.remove("border-blue-300");
                        //prothumimgid2.classList.remove("border-blue-300");
                        prothumimgid3.classList.remove("border-blue-300");
                        prothumimgid4.classList.remove("border-blue-300");
                        prothumimgid1.classList.add("border-transparent");
                        prothumimgid2.classList.remove("border-transparent");
                        prothumimgid3.classList.add("border-transparent");
                        prothumimgid4.classList.add("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][1]
                            : "";
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? AK.THUMBNAILSIMAGEURL + productinfo["images"][1]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>

                  <div
                    className="w-1/4 sm:w-1/4 p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 3)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgid3"
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgid1 =
                          document.getElementById("prothumimgid1");
                        let prothumimgid2 =
                          document.getElementById("prothumimgid2");
                        let prothumimgid3 =
                          document.getElementById("prothumimgid3");
                        let prothumimgid4 =
                          document.getElementById("prothumimgid4");

                        prothumimgid3.classList.add("border-blue-300");
                        prothumimgid1.classList.remove("border-blue-300");
                        prothumimgid2.classList.remove("border-blue-300");
                        //prothumimgid3.classList.remove("border-blue-300");
                        prothumimgid4.classList.remove("border-blue-300");
                        prothumimgid1.classList.add("border-transparent");
                        prothumimgid2.classList.add("border-transparent");
                        prothumimgid3.classList.remove("border-transparent");
                        prothumimgid4.classList.add("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][2]
                            : "";
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? AK.THUMBNAILSIMAGEURL + productinfo["images"][2]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="w-1/4 sm:w-1/4 p-2"
                    style={{
                      display: checkerArray(productinfo["images"], 4)
                        ? "block"
                        : "none",
                    }}
                  >
                    <a
                      id="prothumimgid4"
                      className="block border border-transparent hover:border-gray-400"
                      href={() => {
                        return false;
                      }}
                      onMouseOver={() => {
                        let prothumimgid1 =
                          document.getElementById("prothumimgid1");
                        let prothumimgid2 =
                          document.getElementById("prothumimgid2");
                        let prothumimgid3 =
                          document.getElementById("prothumimgid3");
                        let prothumimgid4 =
                          document.getElementById("prothumimgid4");

                        prothumimgid4.classList.add("border-blue-300");
                        prothumimgid1.classList.remove("border-blue-300");
                        prothumimgid2.classList.remove("border-blue-300");
                        prothumimgid3.classList.remove("border-blue-300");
                        //prothumimgid4.classList.remove("border-blue-300");
                        prothumimgid1.classList.add("border-transparent");
                        prothumimgid2.classList.add("border-transparent");
                        prothumimgid3.classList.add("border-transparent");
                        prothumimgid4.classList.remove("border-transparent");

                        document.getElementById("productimage").src =
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? assets +
                            productviewimage +
                            productinfo["images"][3]
                            : "";
                      }}
                    >
                      <img
                        className="w-full h-32 object-cover"
                        src={
                          productinfo != null &&
                            productinfo != undefined &&
                            productinfo?.images != undefined
                            ? AK.THUMBNAILSIMAGEURL + productinfo["images"][3]
                            : ""
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "/yofte-assets/images/no-image.webp";
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="lg:pl-20">
                  <div className="mb-2 pb-4 border-b">
                    <span className="font-heading productName">
                      {productinfo?.name}
                    </span>
                    {/* <h5 className="mt-2 mb-6 max-w-xl text-xl md:text-xl font-bold">
                      {productinfo?.name}
                    </h5> */}
                    <div>
                      <button className="startSize">
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button className="startSize">
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button className="startSize">
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button className="startSize">
                        <img src="yofte-assets/elements/star-gold.svg" alt="" />
                      </button>
                      <button className="startSize">
                        <img src="yofte-assets/elements/star-gray.svg" alt="" />
                      </button>
                    </div>
                    <div className="priceRow pull-left w100 d-flex align-items-start">
                      <span className="priceContainer d-flex flex-column col-xs-12 noPd">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="prices d-flex flex-row align-items-end">
                            <span className="sellingPrice mr-1">
                              <span className="rupee_icon">₹</span>
                              {productinfo.sp}
                            </span>
                            <div className="discPrice mr-2">
                              <span>₹</span>
                              {productinfo.mrp}
                            </div>
                            <div className="offers offer-perc-o">
                              <p>
                                {" "}
                                {parseFloat(
                                  (productinfo.mrp -
                                    productinfo.sp / productinfo.mrp) /
                                  100
                                ).toFixed(2)}
                                % OFF
                              </p>
                            </div>
                          </div>
                        </div>
                        <span className="inclusiveOfAllTaxes mb-1">
                          inclusive of all taxes
                        </span>
                      </span>
                      {/* <div className="d-flex flex-column trb-jo-wrap">
                            <div className="trb-jo-container">
                              <div className="pr-row-wrap">
                                <div className="border">
                                  <div className="d-flex flex-row pr-row-container">
                                    <div className="d-flex flex-column pr-row justify-content-start">
                                      <div className="tp-head d-flex align-items-center">
                                        <p>
                                          Tri<span>Be</span>
                                        </p>{" "}
                                        Price
                                      </div>
                                      <div>
                                        <span className="rp-i">₹</span>{" "}
                                        <span className="sv-amt">459</span>
                                      </div>
                                    </div>
                                    <div className="py-2">
                                      <img
                                        src="https://images.bewakoof.com/web/ic-tribe-partition.svg"
                                        alt="tribe-img"
                                      />
                                    </div>
                                    <div className="d-flex flex-grow-1 flex-column tr-md-r justify-content-center">
                                      <div className="d-flex flex-row">
                                        <div className="sv-row">
                                          <span className="reg-amt">Save</span>
                                          <span className="rp">EXTRA ₹</span>
                                          <span className="sv-amt">40</span>
                                          <span className="reg-amt">
                                            with TriBe
                                          </span>
                                        </div>
                                      </div>
                                      <p className="sub-h">
                                        and, enjoy <span>FREE</span> Delivery
                                      </p>
                                    </div>
                                    <div className="tribe-cta d-flex align-items-center">
                                      Get TriBe{" "}
                                      <img
                                        src="https://images.bewakoof.com/web/right-arrow.svg"
                                        alt="right-arrow"
                                      />
                                    </div>
                                    <div className="watermark-img">
                                      <img
                                        src="https://images.bewakoof.com/web/ic-glass-light-yellow.svg"
                                        alt="yellow_glass_icon"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                      {/* <div className="d-fit-tags-ctr w100 clear">
                            <div className="tags-wrapper">
                              <div
                                className="tags-rect d-flex flex-column"
                                style={{
                                  backgroundColor: "white",
                                  color: "rgb(115, 115, 115)",
                                  border: "1px solid rgb(115, 115, 115)",
                                  margin: "4px 12px 0px 0px",
                                }}
                              >
                                <p className="mob">100% COTTON</p>
                              </div>
                            </div>
                          </div> */}
                      {/* <div
                        className="g-dvr"
                        style={{
                          width: "calc(100% + 30px)",
                          margin: "16px -15px 0px",
                        }}
                      /> */}
                    </div>
                    {/* <p className="inline-block text-xl font-heading text-blue-300">
                      <span style={{ display: "flex" }}>
                        <span style={{ paddingTop: "5px" }}>
                          <PiCurrencyInr style={{ color: "#1c3fb7" }} />
                        </span>
                        {productinfo?.sp}
                        &nbsp;&nbsp;
                        <span
                          className="text-gray-500 font-heading line-through"
                          style={{ display: "flex" }}
                        >
                          <span style={{ paddingTop: "5px" }}>
                            <PiCurrencyInr style={{ color: "#7183a7" }} />
                          </span>
                          {productinfo?.mrp}
                        </span>
                      </span>
                    </p> */}
                    <p className="max-w-md">
                      {/* {productinfo?.descp} */}
                      <ul
                        className="mr-8"
                        style={{
                          listStyleType: "star",
                          paddingLeft: "15px",
                          fontSize: "11px",
                        }}
                      >
                        <li>Bio Washed &amp; Pre shrink</li>
                        <li>Hand &amp; Machine Wash</li>
                        <li>7 days Return &amp; Exchange Policy</li>
                      </ul>
                    </p>
                  </div>
                  {/* <div className="flex mb-4">
                    <div className="mr-6">
                      <span className="block mb-2 font-bold font-heading text-black uppercase">
                        QTY
                      </span>
                      <div>
                        {productinfo?.addtocart === true ? (
                          <div
                            style={{ float: "right" }}
                            className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          >
                            <button
                              className="py-2 hover:text-gray-700"
                              style={{ fontSize: "80%" }}
                              onClick={(event) => {
                                event.preventDefault();
                                let eventtarget = event.currentTarget;
                                if (eventtarget.readOnly) return;
                                eventtarget.readOnly = true;
                                productinfo["addtocart"] = true;
                                console.log(productinfo["cartquantity"]);
                                handleProductInfoMinus(
                                  productinfo,
                                  setCartInfoData,
                                  setCount,
                                  cartinfoData,
                                  count
                                );
                                eventtarget.readOnly = false;
                              }}
                            >
                              <svg
                                width={12}
                                height={2}
                                viewBox="0 0 12 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g opacity="0.35">
                                  <rect
                                    x={12}
                                    width={2}
                                    height={12}
                                    transform="rotate(90 12 0)"
                                    fill="currentColor"
                                  />
                                </g>
                              </svg>
                            </button>
                            <input
                              className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                              type="number"
                              value={productinfo.cartquantity}
                              readOnly
                              style={{ background: "#ffffff", fontSize: "80%" }}
                              placeholder={productinfo.cartquantity}
                            />
                            <button
                              className="py-2 hover:text-gray-700"
                              style={{ fontSize: "80%" }}
                              onClick={async (event) => {
                                event.preventDefault();
                                let eventtarget = event.currentTarget;
                                if (eventtarget.readOnly) return;
                                eventtarget.readOnly = true;
                                productinfo["addtocart"] = true;
                                await handleProductInfoPlus(
                                  productinfo,
                                  setCartInfoData,
                                  setCount,
                                  cartinfoData,
                                  count
                                );
                                eventtarget.readOnly = false;
                              }}
                            >
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g opacity="0.35">
                                  <rect
                                    x={5}
                                    width={2}
                                    height={12}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={12}
                                    y={5}
                                    width={2}
                                    height={12}
                                    transform="rotate(90 12 5)"
                                    fill="currentColor"
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <button
                            style={{
                              float: "right",
                              cursor: "pointer",
                              fontSize: "80%",
                            }}
                            className="ml-auto mr-2 py-6 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                            onClick={async (event) => {
                              event.preventDefault();
                              let eventtarget = event.currentTarget;
                              if (eventtarget.readOnly) return;
                              eventtarget.readOnly = true;
                              productinfo["addtocart"] = true;
                              await handleProductInfoPlus(
                                productinfo,
                                setCartInfoData,
                                setCount,
                                cartinfoData,
                                count
                              );
                              eventtarget.readOnly = false;
                            }}
                          >
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x={5}
                                width={2}
                                height={12}
                                fill="#161616"
                              />
                              <rect
                                x={12}
                                y={5}
                                width={2}
                                height={12}
                                transform="rotate(90 12 5)"
                                fill="#161616"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div> */}
                  <div className="flex mb-2">
                    <div>
                      <span className="block mb-2 colorName">
                        Color Options
                      </span>

                      <div className="flex flex-wrap">
                        {colorcodesListData.filter(filterColor).map((color) => (
                          <button
                            className={
                              color?.selected === true
                                ? "mr-4 mb-2 rounded-full border border-blue-300 p-1"
                                : "mr-4 mb-2 rounded-full border border-black-300 p-1"
                            }
                            onClick={async (event) => {
                              event.preventDefault();
                              let eventtarget = event.currentTarget;
                              if (eventtarget.readOnly) return;
                              eventtarget.readOnly = true;
                              colorcodesListData.map((colorsub) => {
                                colorsub["selected"] = false;
                              });
                              onchangeProductColor(color);
                              color["selected"] =
                                color?.selected === true ? false : true;
                              setCount({ ...count, count: count + 1 });
                              eventtarget.readOnly = false;
                            }}
                          >
                            <div
                              className="rounded-full bg-orange-300 w-5 h-5"
                              style={{ backgroundColor: color.code }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div>
                      <span className="block mb-2 selectSizeTitle">
                        Select Size
                      </span>

                      {/* {sizeListData.filter(filterSize).map((size) => (
                        <button
                          id={"sizecode" + size.code}
                          className={
                            size?.selected === true
                              ? "mb-2 mr-2 selectSizeBtn border-blue-300 text-blue border hover:border-gray-400 rounded-md"
                              : "mb-2 mr-2 selectSizeBtn border hover:border-gray-400 rounded-md"
                          }
                          onClick={async (event) => {
                            event.preventDefault();
                            let eventtarget = event.currentTarget;
                            if (eventtarget.readOnly) return;
                            eventtarget.readOnly = true;
                            sizeListData.map((sizesub) => {
                              sizesub["selected"] = false;
                            });
                            size["selected"] =
                              size?.selected === true ? false : true;
                            productinfo["selectedsize"] = size;
                            setCount({ ...count, count: count + 1 });
                            eventtarget.readOnly = false;
                          }}
                        >
                          {size.code}
                        </button>
                      ))} */}
                      {sizeListData.filter(filterSize).map((size) => (
                        <button
                          key={size.code}
                          id={"sizecode" + size.code}
                          className={
                            size?.selected === true
                              ? "mb-2 mr-2 selectSizeBtn border-blue-300 text-blue border hover:border-gray-400 rounded-md"
                              : "mb-2 mr-2 selectSizeBtn border hover:border-gray-400 rounded-md"
                          }
                          onClick={(event) => {
                            event.preventDefault();
                            let eventtarget = event.currentTarget;
                            if (eventtarget.readOnly) return;
                            eventtarget.readOnly = true;
                            const updatedSizeListData = sizeListData.map((sizesub) => {
                              if (sizesub.code === size.code) {
                                sizesub.selected = !sizesub.selected;
                              }
                              return sizesub;
                            });
                            const selectedSizes = updatedSizeListData.filter((sizesub) => sizesub.selected).map((sizesub) => sizesub.code);
                            console.log(updatedSizeListData);
                            console.log(selectedSizes);
                            console.log(removeDuplicates(selectedSizes));

                            setProductInfoData({
                              ...productinfo,
                              selectedSizes: selectedSizes,
                            });
                            setproductinfoselectedSize(productinfoselectedSize);
                          }}
                        >
                          {size.code}
                        </button>
                      ))}


                      <div hidden={!chooseSizeError}>
                        <p className="flex mb-2 text-red-500">
                          <span style={{ paddingTop: "3px" }}>
                            <FaExclamationCircle color="#e10e0e" />
                          </span>
                          &nbsp;&nbsp;Please choose size as per your fit.
                        </p>
                      </div>
                      {/* <select
                        className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                        name=""
                        id=""
                      >
                        <option value={1}>Medium</option>
                        <option value={2}>Small</option>
                        <option value={3}>Large</option>
                      </select> */}
                    </div>
                    {/* &nbsp;&nbsp;&nbsp;
                    <div className="mr-6" style={{ paddingTop: "35px" }}>
                      <a
                        className="block bg-purple-300 hover:bg-purple-900 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                        href="/customize"
                      >
                        Customize
                      </a>
                    </div> */}
                  </div>

                  <div className="flex flex-wrap -mx-4 mb-2 items-center">
                    <div className="w-full xl:w-2/3 px-4 mb-2 xl:mb-0">
                      <a
                        style={{
                          cursor: "pointer",
                          alignItems: "center",
                          height: "50px",
                          justifyContent: "center",
                        }}
                        className={
                          productinfo?.addtocart
                            ? "p-add-bag text-white bg-orange-300 hover:bg-orange-400 btn-border d-flex flex-row align-items-center flex-row align-items-center justify-content-center cursor-p "
                            : "p-add-bag text-white bg-yellow-300 hover:bg-yellow-400 btn-border d-flex flex-row align-items-center flex-row align-items-center justify-content-center cursor-p "
                        }
                        href={() => {
                          return false;
                        }}
                        onClick={async (event) => {
                          event.preventDefault();
                          let eventtarget = event.currentTarget;
                          if (eventtarget.readOnly) return;
                          eventtarget.readOnly = true;
                          if (productinfo?.addtocart) {
                            navigate("/cart");
                            return;
                          }
                          let sizeselected = false;
                          sizeListData.map((sizesub) => {
                            if (sizesub["selected"]) sizeselected = true;
                          });
                          if (!sizeselected) {
                            setchooseSizeError(true);
                            notifyerror("Please choose size.");
                            setCount({ ...count, count: count + 1 });
                            eventtarget.readOnly = false;
                            return;
                          }
                          setchooseSizeError(false);
                          setCount({ ...count, count: count + 1 });
                          productinfo["addtocart"] = true;
                          await handleProductInfoAddtoCart(
                            productinfo,
                            setCartInfoData,
                            setCount,
                            cartinfoData,
                            count
                          );
                          notify();
                          eventtarget.readOnly = false;
                        }}
                      >
                        <CgShoppingBag
                          style={{
                            color: "#fff",
                            height: "20px",
                            width: "20px",
                          }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        {productinfo?.addtocart ? "GO TO CART" : "ADD TO CART"}
                      </a>
                    </div>

                    <div
                      className="w-full xl:w-1/3 px-4"
                      style={{ marginTop: "-8px" }}
                    >
                      <a
                        style={{
                          cursor: "pointer",
                          alignItems: "center",
                          height: "50px",
                          justifyContent: "center",
                        }}
                        className="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                        onClick={() => methodDoesNotExist()}
                      >
                        <svg
                          style={{ width: "20px", height: "20px" }}
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        style={{
                          cursor: "pointer",
                          alignItems: "center",
                          height: "50px",
                          justifyContent: "center",
                        }}
                        className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                        onClick={() => methodDoesNotExist()}
                      >
                        <svg
                          style={{ width: "20px", height: "20px" }}
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-8 text-sm text-gray-500 font-bold font-heading uppercase" >
                      SHARE IT
                    </span>
                    <a
                      className="mr-1 w-6 h-6"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        src="yofte-assets/buttons/facebook-circle.svg"
                        alt=""
                        className="starSize"
                      />
                    </a>
                    <a
                      className="mr-1 w-6 h-6"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        src="yofte-assets/buttons/instagram-circle.svg"
                        alt=""
                      />
                    </a>
                    <a
                      className="w-6 h-6"
                      href={() => {
                        return false;
                      }}
                    >
                      <img
                        src="yofte-assets/buttons/twitter-circle.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap mb-6 border-b-2">
                <li className="w-1/2 md:w-auto">
                  <a
                    id="linkproductdescription"
                    className="inline-block py-6 px-10 bg-white shadow-2xl"
                    href={() => {
                      return false;
                    }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      var varproductdescription =
                        document.getElementById("productdescription");
                      var varcustomerreviews = document.getElementById(
                        "productcustomerreviews"
                      );
                      var varproductshippingreturns = document.getElementById(
                        "productshippingreturns"
                      );
                      var varproductbrand =
                        document.getElementById("productbrand");

                      var varlinkproductdescription = document.getElementById(
                        "linkproductdescription"
                      );
                      var varlinkcustomerreviews = document.getElementById(
                        "linkcustomerreviews"
                      );
                      var varlinkshippingreturns = document.getElementById(
                        "linkshippingreturns"
                      );
                      var varlinkbrand = document.getElementById("linkbrand");

                      varlinkproductdescription.classList.add("shadow-2xl");
                      varlinkcustomerreviews.classList.remove("shadow-2xl");
                      varlinkshippingreturns.classList.remove("shadow-2xl");
                      varlinkbrand.classList.remove("shadow-2xl");
                      varproductdescription.style.display = "block";
                      varcustomerreviews.style.display = "none";
                      varproductshippingreturns.style.display = "none";
                      varproductbrand.style.display = "none";
                    }}
                  >
                    Description
                  </a>
                </li>
                <li className="w-1/2 md:w-auto">
                  <a
                    id="linkcustomerreviews"
                    className="inline-block py-6 px-10"
                    href={() => {
                      return false;
                    }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      var varproductdescription =
                        document.getElementById("productdescription");
                      var varcustomerreviews = document.getElementById(
                        "productcustomerreviews"
                      );
                      var varproductshippingreturns = document.getElementById(
                        "productshippingreturns"
                      );
                      var varproductbrand =
                        document.getElementById("productbrand");

                      var varlinkproductdescription = document.getElementById(
                        "linkproductdescription"
                      );
                      var varlinkcustomerreviews = document.getElementById(
                        "linkcustomerreviews"
                      );
                      var varlinkshippingreturns = document.getElementById(
                        "linkshippingreturns"
                      );
                      var varlinkbrand = document.getElementById("linkbrand");

                      varlinkproductdescription.classList.remove("shadow-2xl");
                      varlinkcustomerreviews.classList.add("shadow-2xl");
                      varlinkshippingreturns.classList.remove("shadow-2xl");
                      varlinkbrand.classList.remove("shadow-2xl");

                      varproductdescription.style.display = "none";
                      varcustomerreviews.style.display = "block";
                      varproductshippingreturns.style.display = "none";
                      varproductbrand.style.display = "none";
                    }}
                  >
                    Customer reviews
                  </a>
                </li>
                <li className="w-1/2 md:w-auto">
                  <a
                    id="linkshippingreturns"
                    className="inline-block py-6 px-10"
                    href={() => {
                      return false;
                    }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      var varproductdescription =
                        document.getElementById("productdescription");
                      var varcustomerreviews = document.getElementById(
                        "productcustomerreviews"
                      );
                      var varproductshippingreturns = document.getElementById(
                        "productshippingreturns"
                      );
                      var varproductbrand =
                        document.getElementById("productbrand");

                      var varlinkproductdescription = document.getElementById(
                        "linkproductdescription"
                      );
                      var varlinkcustomerreviews = document.getElementById(
                        "linkcustomerreviews"
                      );
                      var varlinkshippingreturns = document.getElementById(
                        "linkshippingreturns"
                      );
                      var varlinkbrand = document.getElementById("linkbrand");

                      varlinkproductdescription.classList.remove("shadow-2xl");
                      varlinkcustomerreviews.classList.remove("shadow-2xl");
                      varlinkshippingreturns.classList.add("shadow-2xl");
                      varlinkbrand.classList.remove("shadow-2xl");

                      varproductdescription.style.display = "none";
                      varcustomerreviews.style.display = "none";
                      varproductshippingreturns.style.display = "block";
                      varproductbrand.style.display = "none";
                    }}
                  >
                    Shipping &amp; returns
                  </a>
                </li>
                <li className="w-1/2 md:w-auto">
                  <a
                    id="linkbrand"
                    className="inline-block py-6 px-10"
                    href={() => {
                      return false;
                    }}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      var varproductdescription =
                        document.getElementById("productdescription");
                      var varcustomerreviews = document.getElementById(
                        "productcustomerreviews"
                      );
                      var varproductshippingreturns = document.getElementById(
                        "productshippingreturns"
                      );
                      var varproductbrand =
                        document.getElementById("productbrand");

                      var varlinkproductdescription = document.getElementById(
                        "linkproductdescription"
                      );
                      var varlinkcustomerreviews = document.getElementById(
                        "linkcustomerreviews"
                      );
                      var varlinkshippingreturns = document.getElementById(
                        "linkshippingreturns"
                      );
                      var varlinkbrand = document.getElementById("linkbrand");

                      varlinkproductdescription.classList.remove("shadow-2xl");
                      varlinkcustomerreviews.classList.remove("shadow-2xl");
                      varlinkshippingreturns.classList.remove("shadow-2xl");
                      varlinkbrand.classList.add("shadow-2xl");
                      varproductdescription.style.display = "none";
                      varcustomerreviews.style.display = "none";
                      varproductshippingreturns.style.display = "none";
                      varproductbrand.style.display = "block";
                    }}
                  >
                    Brand
                  </a>
                </li>
              </ul>
              <div id="productdescription" style={{ display: "block" }}>
                {/* <h3 className="mb-8 text-blue-300">{productinfo?.name}</h3> */}
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: productinfo?.descp }}
                >
                  {/* <ul
                    className="mr-8"
                    style={{ listStyleType: "square", paddingLeft: "25px" }}
                  >
                    <li>தமிழி(TAMIZHI)</li>
                    <li>Bio Washed &amp; Pre shrink</li>
                    <li>Hand &amp; Machine Wash</li>
                    <li>7 days Return &amp; Exchange Policy</li>
                  </ul> */}
                </div>
              </div>
              <div id="productcustomerreviews" style={{ display: "none" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 course-details-content">
                      <div className="course-details-card mt--40">
                        <div className="course-content">
                          <h5 className="mb--20">Review</h5>
                          <div className="row row--30 flex flex-wrap">
                            <div className="col-lg-4 w-1/4">
                              <div className="rating-box">
                                <div className="rating-number">5.0</div>
                                <div className="rating mb-2">
                                  <StarRatings
                                    rating={5.0}
                                    starRatedColor="orange"
                                    starDimension="20px"
                                    starSpacing="2px"
                                  />
                                </div>
                                <span>(25 Review)</span>{" "}
                              </div>
                            </div>
                            <div className="col-lg-8 w-2/3">
                              <div className="review-wrapper">
                                <div className="single-progress-bar">
                                  <div className="rating-text">
                                    {" "}
                                    5{" "}
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  </div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "100%" }}
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <span className="rating-value">23</span>{" "}
                                </div>
                                <div className="single-progress-bar">
                                  <div className="rating-text">
                                    {" "}
                                    4{" "}
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  </div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "80%" }}
                                      aria-valuenow="0"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <span className="rating-value">3</span>{" "}
                                </div>
                                <div className="single-progress-bar">
                                  <div className="rating-text">
                                    {" "}
                                    3{" "}
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  </div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "60%" }}
                                      aria-valuenow="0"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <span className="rating-value">2</span>{" "}
                                </div>
                                <div className="single-progress-bar">
                                  <div className="rating-text">
                                    {" "}
                                    2{" "}
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  </div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "40%" }}
                                      aria-valuenow="0"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <span className="rating-value">3</span>{" "}
                                </div>
                                <div className="single-progress-bar">
                                  <div className="rating-text">
                                    {" "}
                                    1{" "}
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    ></i>{" "}
                                  </div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "20%" }}
                                      aria-valuenow="0"
                                      aria-valuemin="80"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <span className="rating-value">2</span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-wrapper pt--40">
                            <div className="section-title">
                              <h5 className="mb--25">Reviews</h5>
                            </div>

                            <div className="edu-comment">
                              <div className="thumbnail">
                                {" "}
                                <img
                                  src={`/yofte-assets/users/user1.webp`}
                                  alt="Comment Images"
                                />{" "}
                              </div>
                              <div className="comment-content">
                                <div className="comment-top">
                                  <h6 className="title">Vijay Kumar</h6>
                                  <div className="rating mb-4">
                                    <StarRatings
                                      rating={4.4}
                                      starRatedColor="orange"
                                      starDimension="20px"
                                      starSpacing="2px"
                                    />
                                  </div>
                                </div>
                                <span className="subtitle">
                                  “ Outstanding Review Design ”
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                            </div>

                            <div className="edu-comment">
                              <div className="thumbnail">
                                {" "}
                                <img
                                  src={`/yofte-assets/users/user1.webp`}
                                  alt="Comment Images"
                                />{" "}
                              </div>
                              <div className="comment-content">
                                <div className="comment-top">
                                  <h6 className="title">Ashok Selvan</h6>
                                  <div className="rating mb-4">
                                    <StarRatings
                                      rating={3.2}
                                      starRatedColor="orange"
                                      starDimension="20px"
                                      starSpacing="2px"
                                    />
                                  </div>
                                </div>
                                <span className="subtitle">
                                  “ Nice Review Design ”
                                </span>
                                <p>
                                  Nemo enim ipsam voluptatem quia voluptas sit
                                  aspernatur aut odit aut fugit, sed quia
                                  consequuntur magni dolores eos qui ratione
                                  voluptatem sequi nesciunt. Neque porro
                                  quisquam est, qui dolorem ipsum quia dolor sit
                                  amet, consectetur, adipisci velit, sed quia
                                  non numquam.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="productshippingreturns" style={{ display: "none" }}>
                {/* <h3 className="mb-8 text-blue-300">Shipping Returns</h3> */}
                <div className="trustBaggeContainer d-flex flex-column">
                  <div className="d-flex px-2 py-2 mt-2">
                    <div className="d-flex flex-row  containerInner px-4">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          loading="lazy"
                          alt="offer"
                          src="https://images.bewakoof.com/web/trust-cart.svg"
                        />
                        <span className="trustBadgeTitle">
                          100% SECURE PAYMENTS
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row  containerInner px-4">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          loading="lazy"
                          alt="offer"
                          src="https://images.bewakoof.com/web/Easy-Returns.svg"
                        />
                        <span className="trustBadgeTitle">
                          EASY RETURNS &amp; INSTANT REFUNDS
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row  containerInner px-4">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          loading="lazy"
                          alt="offer"
                          src="https://images.bewakoof.com/web/Globe.svg"
                        />
                        <span className="trustBadgeTitle">
                          SHIPPING GLOBALLY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="productbrand" style={{ display: "none" }}>
                <div className="recommendText flex">
                  <div className="verifiedIcon">
                    <img
                      style={{ height: "20px" }}
                      src="https://images.bewakoof.com/web/ic-shield--check.svg"
                    />
                  </div>
                  <div className="percentageText flex">
                    <p className="percentage">&nbsp;&nbsp;&nbsp;91% &nbsp;</p>
                    <p> of verified buyers recommend this brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
      </>
    </React.Fragment>
  );
}
