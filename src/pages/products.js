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
import { checkerArray, checkerString, defaulttextremove } from "../utilities/checker";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { lowercasenosp } from "../utilities/checker";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
const meta = {
  title: "Products",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Products(props) {
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

  const [availableData, setAvailabeData] = useState({
    colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    products: [
      { id: 110 },
      { id: 111 },
      { id: 112 },
      { id: 113 },
      { id: 114 },
      { id: 115 },
      { id: 116 },
      { id: 117 },
      { id: 118 },
      { id: 119 },
      { id: 120 },
      { id: 121 },
      { id: 122 },
      { id: 123 },
      { id: 124 },
      { id: 125 },
      { id: 126 },
      { id: 127 },
      { id: 128 },
      { id: 129 },
    ],
  });
  const [rangeData, setRangeData] = useState({
    min: 5,
    max: 10,
  });
  const [rangeData1, setRangeData1] = useState(0);
  const [incr, setIncr] = useState(0);
  const [minValue, set_minValue] = useState(300);
  const [maxValue, set_maxValue] = useState(600);
  const handleInputSlider = async (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    if (e.minValue != minValue) await filterProductByCategoryChecks();
    if (e.maxValue != maxValue) await filterProductByCategoryChecks();
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log("***");
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  useEffect(() => {
    console.log("***");
  }, [count]);

  const getcartCount = () => {
    return cartinfoData.cartcount;
  };

  const filterColor = (color) => {
    let filtered = productscolorcodesListData.filter((avcolor) => {
      if (avcolor.colorcodes_id === color.id) return true;
    });
    if (filtered.length > 0) return true;
    //return true;
  };

  const filterSize = (size) => {
    if (size === null) return true;
    let filtered = productssizeListData.filter((avsize) => {
      if (String(avsize.size_id).indexOf(size.id) !== -1) return true;
    });
    if (filtered.length > 0) return true;
  };

  const filterProduct = (product) => {
    let filtered = availableData.products.filter((avproduct) => {
      if (avproduct.id === product.id) return true;
    });
    if (filtered.length > 0) return true;
  };

  const onClick_filterRestore = () => {
    setAvailabeData({
      colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      products: [
        { id: 110 },
        { id: 111 },
        { id: 112 },
        { id: 113 },
        { id: 114 },
      ],
    });
  };

  const onClick_filterCategory = (categoryId, checked) => {
    if (categoryId === 1 && checked) {
      setAvailabeData({
        colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
        size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
        products: productsListData.slice(0, 100),
      });
      setProductsListDisplayData(productsListData.slice(0, 100));
    } else {
      let prod = productsListData.filter((product) => {
        let catlistfilter = categoryListData.filter((catlist) => {
          if (product?.cat_id === undefined || product?.cat_id === null)
            return false;
          return (
            catlist.checked === true &&
            product.cat_id.toString() === catlist.id.toString().padStart(3, "0")
          );
        });

        return catlistfilter.length > 0;
      });
      setProductsListDisplayData(prod.slice(0, 100));
      setAvailabeData({
        colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
        size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
        products: prod,
      });
      if (prod.length === 0)
        setAvailabeData({
          colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
          size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
          products: [
            { id: 110 },
            { id: 111 },
            { id: 112 },
            { id: 113 },
            { id: 114 },
          ],
        });
    }
  };

  const onClick_filterDynamic = (dynamic) => {
    if (dynamic === "category") {
      setAvailabeData({
        colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
        size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
        products: [
          { id: 115 },
          { id: 116 },
          { id: 117 },
          { id: 118 },
          { id: 119 },
        ],
      });
    }
    if (incr === 0)
      setAvailabeData({
        colorcodes: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }],
        size: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
        products: [
          { id: 115 },
          { id: 116 },
          { id: 117 },
          { id: 118 },
          { id: 119 },
        ],
      });
    else if (incr === 1)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 120 },
          { id: 121 },
          { id: 122 },
          { id: 123 },
          { id: 124 },
        ],
      });
    else if (incr === 2)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 110 },
          { id: 111 },
          { id: 112 },
          { id: 113 },
          { id: 114 },
        ],
      });
    else if (incr === 3)
      setAvailabeData({
        colorcodes: [
          { id: 116 },
          { id: 117 },
          { id: 118 },
          { id: 119 },
          { id: 210 },
        ],
        size: [{ id: 1 }, { id: 12 }, { id: 2 }, { id: 13 }, { id: 14 }],
        products: [
          { id: 130 },
          { id: 131 },
          { id: 132 },
          { id: 133 },
          { id: 134 },
        ],
      });
    else if (incr === 4)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 140 },
          { id: 141 },
          { id: 142 },
          { id: 143 },
          { id: 144 },
        ],
      });
    else if (incr === 5)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 145 },
          { id: 146 },
          { id: 147 },
          { id: 148 },
          { id: 149 },
        ],
      });
    else if (incr === 6)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 150 },
          { id: 151 },
          { id: 152 },
          { id: 153 },
          { id: 154 },
        ],
      });
    else if (incr === 7)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 125 },
          { id: 126 },
          { id: 127 },
          { id: 128 },
          { id: 129 },
        ],
      });
    else if (incr === 8)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 130 },
          { id: 131 },
          { id: 132 },
          { id: 133 },
          { id: 134 },
        ],
      });
    else if (incr === 9)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 160 },
          { id: 161 },
          { id: 162 },
          { id: 163 },
          { id: 164 },
        ],
      });
    else if (incr === 10)
      setAvailabeData({
        colorcodes: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        size: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        products: [
          { id: 170 },
          { id: 171 },
          { id: 172 },
          { id: 173 },
          { id: 174 },
        ],
      });
    if (incr === 10) setIncr(0);
    else setIncr(incr + 1);
  };

  const filterProductByCategoryChecks = async (currentlistproducts = null) => {
    let _fiteringproducts = [];
    let _processingdata = currentlistproducts
      ? currentlistproducts
      : productsListData;

    categoryListData.map((categorydata) => {
      let subfiltering = _fiteringproducts;
      if (categorydata?.checked === true) {
        let _productListData = _processingdata?.filter((prod) => {
          return prod?.category_parent_id === categorydata?.id || prod?.category_id === categorydata?.id;
        });
        // console.log(_productListData)
        subfiltering = _fiteringproducts.concat(_productListData);
        _fiteringproducts = subfiltering;
      }
    });

    _fiteringproducts =
      _fiteringproducts.length == 0 ? productsListData : _fiteringproducts;

    setProductsListPageData(_fiteringproducts);

    setProductsListDisplayData(
      _fiteringproducts.slice(0, productsListDisplayDataCount)
    );

    onchangeproductsearchattri(_fiteringproducts);
    // onchangepPATTIProductfilter(_fiteringproducts);

    setCount({ ...count, count: count + 1 });
  };

  const onchangeproductsearchattri = async (currentlistproducts) => {
    let _productsizes = {};
    let _filtersizes = [];
    let _filtercolors = [];
    let _filterproducts = [];
    // currentlistproducts.map((products) => {
    //   let objcate = categoryListData?.find(
    //     (cate) => cate.name === products.category_name
    //   );
    //   if (objcate?.subcat === 1) {
    //     objcate = categoryListData?.find(
    //       (cate) => cate.id === objcate.parent_id
    //     );
    //   }

    //   products?.size_id?.split(",").map((_sizeid) => {
    //     if (_productsizes[objcate.name] === undefined)
    //       _productsizes[objcate.name] = [];

    //     if (_productsizes[objcate.name].indexOf(_sizeid) == -1) {
    //       _productsizes[objcate.name].push(_sizeid);
    //       let findsize = sizeListData.find((sizeobj) => sizeobj.id == _sizeid);
    //       if (findsize) _filtersizes.push(findsize);
    //     }
    //   });

    //   let findcolor = colorcodesListData.find(
    //     (coloreobj) => coloreobj.id == products.colorcodes_id
    //   );
    //   if (_filtercolors.indexOf(findcolor) == -1) {
    //     if (findcolor) _filtercolors.push(findcolor);
    //   }

    //   _filterproducts.push(products);
    // });
    setColorListDisplayData(_filtercolors);
    setSizeListDisplayData(_filtersizes);
    setCount({ ...count, count: count + 1 });
  };

  const onchangepPATTIProductfilter = async (currentlistproducts) => {
    let _filterproducts = [];
    let _productlistdd = currentlistproducts;
    let includecolor = false;
    let includesize = false;
    let includeprice = false;

    let checkedcolors = colorListDisplayData.filter(
      (colors) => colors?.selected == true
    );
    let checkedsizes = sizeListDisplayData.filter(
      (sizes) => sizes?.selected == true
    );

    _productlistdd.map((product) => {
      let productschecked = false;

      if (checkedcolors.length > 0) {
        let colorobj = checkedcolors.filter(
          (color) => color.id == product.colorcodes_id
        );
        if (colorobj.length > 0) includecolor = true;
        else includecolor = false;
      } else includecolor = true;

      if (checkedsizes.length > 0) {
        let sizeobj = checkedsizes.filter((size) =>
          product.size_id.split(",").includes(String(size.id))
        );
        if (sizeobj.length > 0) includesize = true;
      } else includesize = true;

      if (minValue <= product?.sp && product?.sp <= maxValue)
        includeprice = true;

      // if (includecolor && includesize && includeprice) {
      //   console.log("includecolor : " + includecolor);
      //   console.log("includesize : " + includesize);
      //   console.log("includeprice : " + includeprice);
      //   console.log(includecolor && includesize && includeprice);
      // }
      productschecked = includecolor && includesize && includeprice;
      if (productschecked) {
        if (
          _filterproducts?.filter(
            (inproduct) =>
              inproduct?.products_group_id == product?.products_group_id
          ).length == 0
        ) {
          _filterproducts.push(product);
        }
      }
    });

    setProductsListDisplayData(_filterproducts);
    setProductsListPageData(_filterproducts);
    setCount({ ...count, count: count + 1 });
  };

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // console.log(productsListData.length);
    // console.log(productsListDisplayData.length);
    if (
      productsListPageData.length >
      productsListDisplayDataCount + productsListIncreaseDisplayDataCount
    ) {
      setProductsListDisplayData(
        productsListDisplayData.concat(
          productsListPageData.slice(
            productsListDisplayDataCount,
            productsListDisplayDataCount + productsListIncreaseDisplayDataCount
          )
        )
      );
      setProductsListDisplayDataCount(
        productsListDisplayDataCount + productsListIncreaseDisplayDataCount
      );
      setCount({ ...count, count: count + 1 });
    } else {
      setProductHasMore(false);
      setCount({ ...count, count: count + 1 });
    }
  };

  if (!pageinit) {
    if (
      (productsListData != undefined || productsListData != null) &&
      productsListData.length != 0
    ) {
      // if ("tamiltshirts1" === lowercasenosp(store)) {
      //   let productsListDatafilter = productsListData.filter((pro) => {
      //     return pro.name.includes("Ah") || pro.name.includes("Aah");
      //   });
      //   setProductsListDisplayData(
      //     productsListDatafilter.slice(0, productsListDisplayDataCount)
      //   );
      // } else {

      // }

      let productview = params?.id;
      console.log("productVIew"+productview);
      if (checkerString(productview)) {
        if (
          (categoryListData != undefined || categoryListData != null) &&
          categoryListData.length != 0
        ) {
          categoryListData.map((categorydata) => {
            console.log("catagory "+categorydata?.seo_url
            )
            if (
              lowercasenosp(categorydata?.name) === defaulttextremove(productview)
            ) {

              categorydata["checked"] = true;
            }
          });

          filterProductByCategoryChecks();
          console.log(categoryListData);
        }

        //console.log(productview);
      } else {
        filterProductByCategoryChecks(productsListData);
      }

      setPageInit(true);
      pageRefresh();
    }
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

        <section className="py-2 container-y">
          <div className="container px-2" style={{ justifyContent: "center" }}>
            <div className="flex flex-wrap -mx-3 mb-2">
              {/* Mobile */}
              <div id="mobilesidenav" className="w-full hidden px-3">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 md:w-1/3 px-2 mb-2">
                    <div
                      className="py-2 px-2 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById(
                          "categoryMobile"
                        ).style.display =
                          document.getElementById("categoryMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Category
                      </a>
                    </div>
                    <ul
                      id="categoryMobile"
                      className="hidden text-left bg-gray-50 mt-2"
                    >
                      {categoryListData
                        .filter((cate) => {
                          return !cate?.subcat;
                        })
                        .map((category) => (
                          <li>
                            <a
                              className="text-m"
                              href={() => {
                                return false;
                              }}
                              style={{ display: "flex", paddingBottom: "10px" }}
                            >
                              <div className="round1">
                                <input
                                  className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                  type="checkbox"
                                  checked={category?.checked}
                                  id={
                                    "categorymobile" +
                                    category.name +
                                    category.id
                                  }
                                  onChange={async (event) => {
                                    if (category.id === 1) {
                                      categoryListData.map((chqcat) => {
                                        document.getElementById(
                                          chqcat.name + chqcat.id
                                        ).checked = event.currentTarget.checked;
                                        chqcat["checked"] =
                                          event.currentTarget.checked;
                                      });
                                    }
                                    category["checked"] =
                                      event.currentTarget.checked;
                                    await onClick_filterCategory(
                                      category.id,
                                      event.currentTarget.checked
                                    );
                                  }}
                                />
                                <label
                                  className="font-bold text-black"
                                  for={
                                    "categorymobile" +
                                    category.name +
                                    category.id
                                  }
                                ></label>
                              </div>
                              <label
                                className="text-black"
                                htmlFor={
                                  "categorymobile" + category.name + category.id
                                }
                                style={{ paddingTop: "2px", fontSize: "12px" }}
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {category.name}
                                {category.subcat}
                              </label>
                              {/* <input
                              type="checkbox"
                              id={category.name + category.id}
                              onChange={async (event) => {
                                if (category.id === 1) {
                                  categoryListData.map((chqcat) => {
                                    document.getElementById(
                                      chqcat.name + chqcat.id
                                    ).checked = event.currentTarget.checked;
                                    chqcat["checked"] =
                                      event.currentTarget.checked;
                                  });
                                }
                                category["checked"] = event.currentTarget.checked;
                                await onClick_filterCategory(
                                  category.id,
                                  event.currentTarget.checked
                                );
                              }}
                            />{" "}
                            &nbsp;&nbsp;&nbsp;
                            <label for={category.name + category.id}>
                              {category.name}
                            </label> */}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="w-1/2 md:w-1/3 px-2 mb-2">
                    <div
                      className="py-2 px-2 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById("colorsMobile").style.display =
                          document.getElementById("colorsMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Colors
                      </a>
                    </div>

                    <div
                      id="colorsMobile"
                      className="hidden mt-2 flex flex-wrap bg-gray-50"
                    >
                      {colorcodesListData.filter(filterColor).map((color) => (
                        <button
                          className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"
                          onClick={async (event) => {
                            event.preventDefault();
                            let eventtarget = event.currentTarget;
                            if (eventtarget.readOnly) return;
                            eventtarget.readOnly = true;
                            await onClick_filterDynamic("colorcodes");
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
                  <div className="w-1/2 md:w-1/3 px-2 mb-2">
                    <div
                      className="py-2 px-2 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById("priceMobile").style.display =
                          document.getElementById("priceMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Price
                      </a>
                    </div>
                    <div id="priceMobile" className="hidden mt-2 bg-gray-50">
                      <MultiRangeSlider
                        min={0}
                        max={1000}
                        step={5}
                        ruler={false}
                        minValue={minValue}
                        maxValue={maxValue}
                        labels={["₹0", "₹1000"]}
                        onInput={async (e) => {
                          handleInputSlider(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-2">
                    <div
                      className="py-2 px-2 text-center bg-gray-50"
                      onClick={() => {
                        document.getElementById("sizeMobile").style.display =
                          document.getElementById("sizeMobile").style
                            .display === "none"
                            ? "block"
                            : "none";
                      }}
                    >
                      <a
                        className="font-bold font-heading"
                        href={() => {
                          return false;
                        }}
                      >
                        Size
                      </a>
                    </div>
                    <div
                      id="sizeMobile"
                      className="hidden mt-2 flex flex-wrap -mx-2 -mb-2 bg-gray-50"
                    >
                      {sizeListData.filter(filterSize).map((size) => (
                        <button
                          id={"sizecode" + size.code}
                          className={
                            size?.selected === true
                              ? "mb-2 mr-1 w-16 py-1 bg-blue-300 text-white border hover:border-gray-400 rounded-md"
                              : "mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"
                          }
                          style={{ fontSize: "80%" }}
                          onClick={async (event) => {
                            event.preventDefault();
                            let eventtarget = event.currentTarget;
                            if (eventtarget.readOnly) return;
                            eventtarget.readOnly = true;
                            await onClick_filterDynamic("colorcodes");
                            size["selected"] =
                              size?.selected === true ? false : true;
                            setCount({ ...count, count: count + 1 });
                            eventtarget.readOnly = false;
                          }}
                        >
                          {size.code}
                        </button>
                      ))}
                    </div>
                    {/* <div className="hidden mt-4 text-right">
                        <a
                          className="inline-flex underline text-blue-300 hover:text-blue-400"
                          href='javascript:;'
                        >
                          <span className="mr-2">Show all</span>
                          <svg
                            width={14}
                            height={27}
                            viewBox="0 0 14 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                              fill="#3C60D9"
                            />
                          </svg>
                        </a>
                      </div> */}
                  </div>
                  {/* <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a className="font-bold font-heading" href='javascript:;'>
                        Location
                      </a>
                      <div className="hidden mt-6">
                        <label className="flex mb-3 items-center text-lg">
                          <input type="checkbox" />
                          <span className="ml-2">Standard</span>
                        </label>
                        <label className="flex items-center text-lg">
                          <input type="checkbox" />
                          <span className="ml-2">Next day (yes!)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 px-2 mb-4">
                    <div className="py-6 px-4 text-center bg-gray-50">
                      <a className="font-bold font-heading" href='javascript:;'>
                        Location
                      </a>
                      <input
                        className="hidden mt-6 w-full px-8 py-4 bg-white border rounded-md"
                        type="serach"
                        placeholder="City"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              {/* Desktop */}
              <div
                id="desktopsidenav"
                className="hidden lg:block w-1/4 px-3"
                style={{ background: "#ffffff" }}
              >
                <div
                  className="mb-2 py-8 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Category
                  </h3>
                  <br />
                  <ul>
                    {categoryListData
                      .filter((cate) => {
                        return cate?.parent_id === null;
                      })
                      .map((category) => (
                        <li>
                          {" "}
                          <a
                            className="text-m"
                            href={() => {
                              return false;
                            }}
                            style={{ display: "flex", paddingBottom: "10px" }}
                          >
                            <div className="round1">
                              <input
                                className="block mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                type="checkbox"
                                checked={category?.checked}
                                id={category.name + category.id}
                                onChange={async (event) => {
                                  category["checked"] =
                                    event.currentTarget.checked;
                                  document.getElementById(
                                    category.name + category.id
                                  ).checked = event.currentTarget.checked;

                                  // let categoryListDatadown = categoryListData;

                                  // categoryListDatadown.map((chqcat) => {
                                  //   if (chqcat.id === category.id) {
                                  //     document.getElementById(
                                  //       chqcat.name + chqcat.id
                                  //     ).checked = event.currentTarget.checked;
                                  //     chqcat["checked"] =
                                  //       event.currentTarget.checked;
                                  //   }
                                  // });

                                  if (category?.id === 1) {
                                    categoryListData.map((chqcat) => {
                                      document.getElementById(
                                        chqcat.name + chqcat.id
                                      ).checked = event.currentTarget.checked;
                                      chqcat["checked"] =
                                        event.currentTarget.checked;
                                    });
                                  }

                                  filterProductByCategoryChecks();

                                  // else {
                                  //   // const catefind = categoryListData.find(
                                  //   //   (obj) => {
                                  //   //     return obj.id === 1;
                                  //   //   }
                                  //   // );
                                  //   console.log(categoryListData);
                                  //   let allchecked = true;
                                  //   categoryListDatadown.map((chqcat) => {
                                  //     console.log(
                                  //       chqcat["checked"] + "  " + chqcat.id
                                  //     );
                                  //     if (chqcat.id != 1) {
                                  //       if (
                                  //         chqcat["checked"] === false ||
                                  //         chqcat["checked"] === undefined
                                  //       ) {
                                  //         allchecked = false;
                                  //       }
                                  //     }
                                  //   });

                                  //   // console.log(allchecked);
                                  //   // categoryListDatadown.filter((obj) => {
                                  //   //   if (obj.id === 1) {
                                  //   //     document.getElementById(
                                  //   //       obj.name + obj.id
                                  //   //     ).checked = allchecked;
                                  //   //     obj["checked"] = allchecked;
                                  //   //   }
                                  //   // });

                                  //   // setCategoryListData(categoryListDatadown);
                                  //   // setCount({ ...count, count: count + 1 });
                                  //   // allchecked = false;
                                  //   // categoryListData.map((chqcat) => {
                                  //   //   if (chqcat.id === 1) {
                                  //   //     allproduct = chqcat;
                                  //   //   }
                                  //   // });
                                  //   // if (event.currentTarget.checked === false) {
                                  //   //   document.getElementById(
                                  //   //     category.name + category.id
                                  //   //   ).checked = event.currentTarget.checked;
                                  //   //   category["checked"] =
                                  //   //     event.currentTarget.checked;
                                  //   //   document.getElementById(
                                  //   //     allproduct.name + allproduct.id
                                  //   //   ).checked = event.currentTarget.checked;
                                  //   //   allproduct["checked"] =
                                  //   //     event.currentTarget.checked;
                                  //   // } else {
                                  //   //   document.getElementById(
                                  //   //     category.name + category.id
                                  //   //   ).checked = event.currentTarget.checked;
                                  //   //   category["checked"] =
                                  //   //     event.currentTarget.checked;
                                  //   //   allchecked = true;
                                  //   //   categoryListData.map((chqcat) => {
                                  //   //     if (chqcat.id === 1) {
                                  //   //       allproduct = chqcat;
                                  //   //     } else if (
                                  //   //       chqcat["checked"] === false ||
                                  //   //       chqcat["checked"] === undefined
                                  //   //     ) {
                                  //   //       allchecked = false;
                                  //   //     }
                                  //   //   });
                                  //   //   if (allchecked) {
                                  //   //     document.getElementById(
                                  //   //       allproduct.name + allproduct.id
                                  //   //     ).checked = allchecked;
                                  //   //     allproduct["checked"] = allchecked;
                                  //   //   }
                                  //   // }
                                  // }

                                  // // categoryListData.map((chqcat) => {
                                  // //   if (chqcat?.id === 1) {
                                  // //     allproduct = chqcat;
                                  // //   }
                                  // //   if (category.id === 1) {
                                  // //     document.getElementById(
                                  // //       chqcat.name + chqcat.id
                                  // //     ).checked = event.currentTarget.checked;
                                  // //     chqcat["checked"] =
                                  // //       event.currentTarget.checked;
                                  // //   } else {
                                  // //     if (
                                  // //       chqcat?.checked === false ||
                                  // //       chqcat?.checked === undefined
                                  // //     ) {
                                  // //       allchecked = false;
                                  // //     }
                                  // //     if (category.id === chqcat.id) {
                                  // //       document.getElementById(
                                  // //         chqcat.name + chqcat.id
                                  // //       ).checked = event.currentTarget.checked;
                                  // //       chqcat["checked"] =
                                  // //         event.currentTarget.checked;
                                  // //     }
                                  // //   }
                                  // // });

                                  // // if (allchecked === true && allproduct != null) {
                                  // //   document.getElementById(
                                  // //     allproduct.name + allproduct.id
                                  // //   ).checked = true;
                                  // //   allproduct["checked"] = true;
                                  // // } else if (allproduct != null) {
                                  // //   document.getElementById(
                                  // //     allproduct.name + allproduct.id
                                  // //   ).checked = false;
                                  // //   allproduct["checked"] = false;
                                  // // }

                                  // // if (category.id === 1) {
                                  // //   categoryListData.map((chqcat) => {
                                  // //     document.getElementById(
                                  // //       chqcat.name + chqcat.id
                                  // //     ).checked = event.currentTarget.checked;
                                  // //     chqcat["checked"] =
                                  // //       event.currentTarget.checked;
                                  // //   });
                                  // // } else {
                                  // //   let allchecked = true;
                                  // //   let allproduct = null;
                                  // //   categoryListData.map((chqcat) => {
                                  // //     if (chqcat?.id === 1) {
                                  // //       allproduct = chqcat;
                                  // //     } else if (
                                  // //       chqcat?.checked === false ||
                                  // //       chqcat?.checked === undefined
                                  // //     ) {
                                  // //       allchecked = false;
                                  // //     }
                                  // //   });

                                  // //   if (
                                  // //     allchecked === true &&
                                  // //     allproduct != null
                                  // //   ) {
                                  // //     document.getElementById(
                                  // //       allproduct.name + allproduct.id
                                  // //     ).checked = true;
                                  // //     allproduct["checked"] = true;
                                  // //   } else if (allproduct != null) {
                                  // //     document.getElementById(
                                  // //       allproduct.name + allproduct.id
                                  // //     ).checked = false;
                                  // //     allproduct["checked"] = false;
                                  // //   }
                                  // // }

                                  // else {
                                  //   let categoryallproducts = null;
                                  //   let cateFilter = categoryListData.filter(
                                  //     (catlist) => {
                                  //       if (catlist.id === 1) {
                                  //         categoryallproducts = catlist;
                                  //       }
                                  //       return catlist["checked"] === true;
                                  //     }
                                  //   );

                                  //   let index =
                                  //     cateFilter.indexOf(categoryallproducts);
                                  //   cateFilter.splice(index, 1);

                                  //   console.log(cateFilter);
                                  //   categoryListData.map((catvalue) => {
                                  //     document.getElementById(
                                  //       catvalue.name + catvalue.id
                                  //     ).checked =
                                  //       cateFilter.length ===
                                  //       categoryListData.length - 1
                                  //         ? true
                                  //         : cateFilter.length <
                                  //           categoryListData.length - 1
                                  //         ? false
                                  //         : true;
                                  //   });
                                  // }

                                  // await onClick_filterCategory(
                                  //   category.id,
                                  //   event.currentTarget.checked
                                  // );
                                }}
                              />
                              <label
                                className="font-bold font-heading text-black"
                                for={category.name + category.id}
                              ></label>
                            </div>
                            <label
                              className="text-black"
                              htmlFor={category.name + category.id}
                              style={{ paddingTop: "2px" }}
                            >
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {category.name}
                            </label>
                            {/* <input
                            type="checkbox"
                            id={category.name + category.id}
                            onChange={async (event) => {
                              if (category.id === 1) {
                                categoryListData.map((chqcat) => {
                                  document.getElementById(
                                    chqcat.name + chqcat.id
                                  ).checked = event.currentTarget.checked;
                                  chqcat["checked"] =
                                    event.currentTarget.checked;
                                });
                              }
                              category["checked"] = event.currentTarget.checked;
                              await onClick_filterCategory(
                                category.id,
                                event.currentTarget.checked
                              );
                            }}
                          />{" "}
                          &nbsp;&nbsp;&nbsp;
                          <label for={category.name + category.id}>
                            {category.name}
                          </label> */}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
                <div
                  className="mb-2 py-2 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Colors
                  </h3>

                  <div className="flex flex-wrap">
                    {colorListDisplayData.map((color) => (
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
                          // await onClick_filterDynamic("colorcodes");
                          color["selected"] = !color?.selected;
                          await filterProductByCategoryChecks();
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
                <div
                  className="mb-2 py-2 px-12 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Prices
                  </h3>
                  <div>
                    <MultiRangeSlider
                      min={0}
                      max={1000}
                      step={5}
                      ruler={false}
                      minValue={minValue}
                      maxValue={maxValue}
                      labels={["₹0", "₹1000"]}
                      onInput={async (e) => {
                        handleInputSlider(e);
                      }}
                    />
                  </div>
                </div>
                <div
                  className="mb-2 py-2 pl-12 pr-6 bg-gray-50"
                  style={{ background: "#ffffff" }}
                >
                  <h3 className="mb-2 text-2xl font-bold font-heading">Size</h3>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    {sizeListDisplayData?.map((size) => (
                      <button
                        id={"sizecode" + size.code}
                        className={
                          size?.selected === true
                            ? "mb-2 mr-1 w-16 py-1 bg-blue-300 text-white border hover:border-gray-400 rounded-md"
                            : "mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"
                        }
                        style={{ fontSize: "80%" }}
                        onClick={async (event) => {
                          event.preventDefault();
                          let eventtarget = event.currentTarget;
                          if (eventtarget.readOnly) return;
                          eventtarget.readOnly = true;

                          // await onClick_filterDynamic("colorcodes");

                          size["selected"] = !size?.selected;
                          await filterProductByCategoryChecks();
                          setCount({ ...count, count: count + 1 });
                          eventtarget.readOnly = false;
                        }}
                      >
                        {size.code}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="container-xy"
                hidden={productsListDisplayData.length > 0}
              ></div>


              {/* <div id="productlistview" className="w-auto lg:w-3/4">
                <InfiniteScroll
                  dataLength={productsListDisplayData.length}
                  next={fetchMoreData}
                  hasMore={producthasMore}
                  scrollThreshold={0.5}
                  useWindow={true}
                  style={{ overflowY: "hidden" }}
                >
                  <div
                    id="productlistviewdiv1"
                    className="flex flex-wrap lg:block customproductflex"
                    style={{ width: "100%" }}
                  >
                    {productsListDisplayData.map((product) => (
                      <>
                        <div
                          className="plp-product-card w-1/2 lg:w-full"
                          id="testProductcard_8"
                        >
                          <div
                            className="col-sm-4 px-2 lg:px-2"
                            aria-current="false"
                            href="/p/pop-hope-half-sleeve-t-shirt-black"
                          >
                            <div className="productCardBox   ">
                              <div className="productCardImg false">
                                <div
                                  className="productImg"
                                  style={{
                                    width: "100%",
                                    paddingTop: "125%",
                                    position: "relative",
                                    background: "rgb(248, 246, 248)",
                                  }}
                                >
                                  <img
                                    src="https://images.bewakoof.com/t640/men-s-black-hope-t-shirt-300994-1655813841-1.jpg"
                                    className="productImgTag"
                                    title="Men's Black Hope T-shirt-Front Bewakoof"
                                    alt="Shop Men's Black Hope T-shirt-Front"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="productStatusBox" />
                                <div className="bottomTag" />
                                <div className="tag-container " />
                                <div className="pdt-r-wrap d-flex align-items-center bgclr-shade8   undefined">
                                  <i className="icon_star_filled clr-p-yellow" />
                                  <span className="clr-shade-3">4.7</span>
                                </div>
                              </div>
                              <div className="productCardDetail   pdt-card-h   ">
                                <div className="d-flex">
                                  <div className="productNaming bkf-ellipsis">
                                    <h3 className="brand-name  undefined">
                                      Bewakoof®
                                    </h3>
                                    <h2 className="clr-shade4 h3-p-name   undefined false  ">
                                      Men's Black Hope T-shirt
                                    </h2>
                                  </div>
                                  <div className="wishListProduct-v2 ">
                                    <img
                                      src="https://images.bewakoof.com/web/Wishlist.svg"
                                      alt="wishlist"
                                      className="wishlist-icon-animate"
                                    />
                                  </div>
                                </div>
                                <div className="productPriceBox d-flex align-items-end  false">
                                  <div className="discountedPriceText clr-p-black   false  ">
                                    <span>₹</span>349
                                  </div>
                                  <div className="actualPriceText clr-shade5 ">
                                    ₹499
                                  </div>
                                  <span className="sellingFastBox" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                                  <div
                                    className="loyaltyPriceBox"
                                    style={{ width: "unset" }}
                                  >
                                    <h6>
                                      <b>₹319</b>For TriBe Members
                                    </h6>
                                  </div>
                                </div>
                                <div
                                  className="fabric_tag_container px-2 py-1"
                                  style={{
                                    border: "1px solid rgb(115, 115, 115)",
                                    background: "white",
                                  }}
                                >
                                  <div
                                    className="tag_label_plp"
                                    style={{ color: "rgb(115, 115, 115)" }}
                                  >
                                    100% COTTON
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </InfiniteScroll>
              </div> */}
              <div id="productlistview" className="w-auto lg:w-3/4">
                <InfiniteScroll
                  dataLength={productsListDisplayData.length}
                  next={fetchMoreData}
                  hasMore={producthasMore}
                  scrollThreshold={0.5}
                  useWindow={true}
                  style={{ overflowY: "hidden" }}
                >
                  <div
                    id="productlistviewdiv1"
                    className="flex flex-wrap customproductflex"
                    style={{ width: "100%" }}
                  >
                    {productsListDisplayData.map((product) => (
                      <>
                        <div className="customproductlist">
                          <a
                            href={() => {
                              return false;
                            }}
                            style={{ cursor: "pointer" }}
                            onClick={(event) => {
                              product["images"] = product?.imageurl?.split(",");
                              let groupd_id = product?.products_group_id;
                              let group_product = productsListData.filter(
                                (prod) => {
                                  return prod?.products_group_id === groupd_id
                                    ? true
                                    : false;
                                }
                              );
                              navigate("/p/" + product?.seo_url, {
                                state: {
                                  productinfo: product,
                                  productgroups: group_product,
                                },
                              });
                            }}
                          >
                            <div className="productCardBox">
                              <div className="productCardImg false">
                                <div
                                  className="productImg"
                                  style={{
                                    width: "100%",
                                    paddingTop: "125%",
                                    position: "relative",
                                    background: "rgb(248, 246, 248)",
                                  }}
                                >
                                  <img
                                    src={
                                      assets +
                                      productimage +
                                      String(
                                        checkerArray(
                                          product?.imageurl?.split(","),
                                          1
                                        )
                                          ? product?.imageurl?.split(",")[0]
                                          : ""
                                      )
                                    }
                                    onError={({ currentTarget }) => {
                                      currentTarget.onerror = null; // prevents looping
                                      currentTarget.src =
                                        "/yofte-assets/images/no-image.webp";
                                    }}
                                    className="productImgTag"
                                    title={product.name + store}
                                    alt={product.name + store}
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="productStatusBox" />
                                <div className="bottomTag" />
                                <div className="tag-container " />
                                <div className="pdt-r-wrap d-flex align-items-center bgclr-shade8   undefined">
                                  <i className="icon_star_filled clr-p-yellow" />
                                  <span className="clr-shade-3">4.7</span>
                                </div>
                              </div>
                              <div className="productCardDetail pdt-card-h">
                                <div className="d-flex">
                                  <div className="productNaming bkf-ellipsis">
                                    <h3 className="brand-name  undefined">
                                      {store}®
                                    </h3>
                                    <h2 className="clr-shade4 h3-p-name   undefined false  ">
                                      {product.name}
                                    </h2>
                                  </div>
                                  <div className="wishListProduct-v2 ">
                                    <img
                                      src="https://images.bewakoof.com/web/Wishlist.svg"
                                      alt="wishlist"
                                      className="wishlist-icon-animate"
                                    />
                                  </div>
                                </div>
                                <div className="productPriceBox d-flex align-items-end  false">
                                  <div className="discountedPriceText clr-p-black   false  ">
                                    <span>₹</span>
                                    {product.sp}
                                  </div>
                                  <div className="actualPriceText clr-shade5 ">
                                    ₹{product.mrp}
                                  </div>
                                  <span className="sellingFastBox" />
                                </div>
                                {/* <div className="d-flex align-items-center justify-content-between loyalty-stock-wrap">
                                <div
                                  className="loyaltyPriceBox"
                                  style={{ width: "unset" }}
                                >
                                  <h6>
                                    <b>₹319</b>For TriBe Members
                                  </h6>
                                </div>
                              </div>
                              <div
                                className="fabric_tag_container px-2 py-1"
                                style={{
                                  border: "1px solid rgb(115, 115, 115)",
                                  background: "white",
                                }}
                              >
                                <div
                                  className="tag_label_plp"
                                  style={{ color: "rgb(115, 115, 115)" }}
                                >
                                  100% COTTON
                                </div>
                              </div> */}
                              </div>
                            </div>
                          </a>
                          {/* <a
                            className="block"
                            href={() => {
                              return false;
                            }}
                            style={{ cursor: "pointer" }}
                            onClick={(event) => {
                              product["images"] = product.imageurl.split(",");
                              let groupd_id = product.products_group_id;
                              let group_product =
                                productsListDisplayData.filter((prod) => {
                                  return prod.products_group_id === groupd_id
                                    ? true
                                    : false;
                                });
                              navigate(
                                "/p/?id=" + product.products_id,
                                {
                                  state: {
                                    productinfo: product,
                                    productgroups: group_product,
                                  },
                                }
                              );
                            }}
                          >
                            <div className="image-box">
                              <LazyImage
                                placeholder={
                                  assets +
                                  productimage +
                                  String(
                                    checkerArray(product.imageurl.split(","), 1)
                                      ? product.imageurl.split(",")[0]
                                      : ""
                                  ) +
                                  "?blur=10"
                                }
                                uri={
                                  assets +
                                  productimage +
                                  String(
                                    checkerArray(product.imageurl.split(","), 1)
                                      ? product.imageurl.split(",")[0]
                                      : ""
                                  )
                                }
                                render={(src, style) => (
                                  <img
                                    src={src}
                                    style={{ height: "266px" }}
                                    alt="demonstration"
                                  />
                                )}
                              />
                            </div>
                            <center>
                              <a
                                className="text-base product-title"
                                onClick={(event) => {
                                  product["images"] =
                                    product.imageurl.split(",");

                                  navigate("/p/", {
                                    state: {
                                      productinfo: product,
                                    },
                                  });
                                }}
                                title={product.name}
                              >
                                {product.name}
                              </a>

                              <p
                                className="text-lg text-black-500"
                                style={{
                                  color: "black",
                                  fontSize: "1rem",
                                  lineHeight: "1.75rem",
                                  marginTop: "-10px",
                                }}
                              >
                                <center>
                                  <span
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <span style={{ paddingTop: "5px" }}>
                                      <PiCurrencyInr />
                                    </span>
                                    {product.sp}
                                    &nbsp;&nbsp;
                                    <span
                                      className="text-gray-500 font-semibold font-heading line-through"
                                      style={{
                                        display: "flex",
                                        fontSize: "15px",
                                      }}
                                    >
                                      <span style={{ paddingTop: "5px" }}>
                                        <PiCurrencyInr
                                          style={{ color: "#7183a7" }}
                                        />
                                      </span>

                                      {product.mrp}
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <a
                                      className="mr-2 hover:text-gray-600"
                                      href={() => {
                                        return false;
                                      }}
                                      style={{ paddingTop: "3px" }}
                                    >
                                      <MdFavoriteBorder
                                        style={{
                                          height: "20px",
                                          width: "20px",
                                        }}
                                      />
                                    </a>
                                  </span>
                                </center>
                              </p>
                            </center>
                          </a> */}
                        </div>
                      </>
                    ))}
                  </div>
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </section>

        <section
          className="block lg:hidden md:hidden xl:hidden 2xl:hidden"
          style={{ width: "100%", position: "sticky", bottom: "-2px" }}
        >
          <div style={{ width: "100%" }}>
            {/* <div className="toastWrapper">
                  <span />
                </div> */}
            <div>
              {/* <div>
                    <div className="sideNavBox ">
                      <header
                        id="pageMHeader"
                        className="mHeaderDiv mHeaderSticky visible-sm visible-xs "
                        style={{ zIndex: 9999, position: "fixed", top: 0 }}
                      >
                        <div className="noMg mHeader">
                          <div className="backToPreviousPage ">
                            <a className="backPreviousCat" href="/">
                              <img
                                src="https://images.bewakoof.com/web/ic-web-head-primary-back.svg"
                                alt="back"
                              />
                            </a>
                          </div>
                          <input type="checkbox" id="hambu" />
                          <div
                            className="mActionMenu "
                            style={{ display: "block" }}
                          >
                            <div className="pageHeaderText mBewakoofLogoDiv  ">
                              <h1 className="f-b3-s m-h-title">
                                Men's T-Shirts
                              </h1>
                              <span className="f-b4-m  m-h-sub-title">
                                996 items
                              </span>
                            </div>
                          </div>
                          <div className="iconMenuOption ">
                            <span className="" style={{ width: "auto" }}>
                              <form
                                className="msearchContainer"
                                style={{ display: "inline-block" }}
                              >
                                <label>
                                  <img
                                    src="https://images.bewakoof.com/web/ic-web-head-search.svg"
                                    className="header-icon ml-1 ico-search "
                                    alt="search-icon"
                                  />
                                </label>
                              </form>
                            </span>
                            <span>
                              <div className="">
                                <img
                                  src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                                  className="header-icon"
                                  alt="wish-list"
                                />
                              </div>
                            </span>
                            <a href="/cart">
                              <span>
                                <img
                                  src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                                  className="header-icon"
                                  alt="shopping-bag"
                                />
                                <span className="cartCount cartCountHome">
                                  {getcartCount()}
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
                      <div className="mMenuOverlay undefined" />
                    </div>
                  </div> */}
              <div className="containerHeight">
                <div className="categoryWrapper" style={{ marginTop: 0 }}>
                  <div className="categoryInnerWrapper mobileFilterBtn container padding0 visible-xs">
                    <div
                      className="filterBox"
                      style={{ width: "100%", position: "sticky" }}
                    >
                      <div className="filterBox--wrapper">
                        <div className="filterMenuWrapper false" style={{}}>
                          <button className="filterMenuWrapper--tab d-flex justify-content-center align-items-center">
                            <i className="icon_bullet clr-so-sea-blue" />
                            <img
                              src="https://images.bewakoof.com/web/sort-1648211177.svg"
                              alt=""
                            />
                            <div>
                              <h3 className="f-b3-m clr-shade3">Sort</h3>
                              <span className="sort-value clr-shade4">
                                Popular
                              </span>
                            </div>
                          </button>
                          <div className="sortMenuOption false">
                            <div className="sortbyHeading">
                              <h4 className="visible-xs">
                                Sort by <i className="icon_close" />
                              </h4>
                              <div className="listingBox mobileList">
                                <ul>
                                  <li>
                                    <div>
                                      <div>
                                        <a
                                          aria-current="false"
                                          href="#"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            color: "black",
                                            fontFamily: "montserrat-bold",
                                          }}
                                        >
                                          Popular
                                          <i className="icon_bullet selectedFilterIcon" />
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <div>
                                        <a
                                          aria-current="false"
                                          href="#"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            color: "black",
                                            fontFamily: "montserrat-regular",
                                          }}
                                        >
                                          New
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <div>
                                        <a
                                          aria-current="false"
                                          href="#"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            color: "black",
                                            fontFamily: "montserrat-regular",
                                          }}
                                        >
                                          Price : High to Low
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div>
                                      <div>
                                        <a
                                          aria-current="false"
                                          href="#"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            color: "black",
                                            fontFamily: "montserrat-regular",
                                          }}
                                        >
                                          Price : Low to High
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filterBox--wrapper">
                        <div className="filterMenuWrapper false">
                          <button
                            className="filterMenuWrapper--tab d-flex justify-content-center align-items-center"
                            onClick={() => {
                              document
                                .getElementById("filterMenuOption")
                                .classList.add("filterMenuOption--active");
                            }}
                          >
                            <i className="icon_bullet clr-shade7" />
                            <img
                              src="https://images.bewakoof.com/web/filter-1648211155.svg"
                              alt=""
                            />
                            <div>
                              <h3 className="f-b3-m clr-shade3">Filter</h3>
                              <p className="filter-value clr-shade4">None</p>
                            </div>
                          </button>
                          <div
                            id="filterMenuOption"
                            className="filterMenuOption mobileFilter false"
                          >
                            <div>
                              <div className="filterHeading">
                                <h4>Filters</h4>
                                <div
                                  className="clearAllBtn"
                                  onClick={() => {
                                    colorListDisplayData.map((color) => {
                                      color["selected"] = false;
                                    });
                                    sizeListDisplayData.map((size) => {
                                      size["selected"] = false;
                                    });
                                    setCount({
                                      ...count,
                                      count: count + 1,
                                    });
                                  }}
                                >
                                  <a className="anchorStyle">Clear All</a>
                                </div>
                              </div>
                              <div className="mobileFilterTab visible-xs">
                                <div className="mobileFilterTab--left">
                                  <div
                                    className={
                                      mobileFilterTab === "sizes"
                                        ? "mobileFilterTab--list mobileFilterTab--list-active"
                                        : "mobileFilterTab--list"
                                    }
                                    onClick={() => {
                                      setmobileFilterTab("sizes");
                                    }}
                                  >
                                    <p className="mobileFilterTab--left--header">
                                      sizes
                                    </p>
                                  </div>
                                  <div
                                    className={
                                      mobileFilterTab === "color"
                                        ? "mobileFilterTab--list mobileFilterTab--list-active"
                                        : "mobileFilterTab--list"
                                    }
                                    onClick={() => {
                                      setmobileFilterTab("color");
                                    }}
                                  >
                                    <p className="mobileFilterTab--left--header">
                                      color
                                    </p>
                                  </div>
                                </div>{" "}
                                <div className="mobileFilterTab--right">
                                  <div hidden={!(mobileFilterTab == "sizes")}>
                                    <>
                                      {sizeListDisplayData?.map((size) => (
                                        <>
                                          <div
                                            className="mobileFilterTab--details"
                                            onClick={async (event) => {
                                              event.preventDefault();
                                              let eventtarget =
                                                event.currentTarget;
                                              if (eventtarget.readOnly) return;
                                              eventtarget.readOnly = true;

                                              size["selected"] =
                                                !size?.selected;
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                              eventtarget.readOnly = false;
                                            }}
                                          >
                                            <div className="filterCheckbox">
                                              <label>
                                                <i
                                                  className={
                                                    size?.selected === true
                                                      ? "icon_tick active"
                                                      : "icon_tick"
                                                  }
                                                />
                                              </label>
                                              <span className="mobileFilterTab--details-label label-capitalize">
                                                {size.code}
                                              </span>
                                            </div>
                                          </div>
                                          {/* 
                                          <button
                                            id={"sizecode" + size.code}
                                            className={
                                              size?.selected === true
                                                ? "mb-2 mr-1 w-16 py-1 bg-blue-300 text-white border hover:border-gray-400 rounded-md"
                                                : "mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"
                                            }
                                            style={{ fontSize: "80%" }}
                                            onClick={async (event) => {
                                              event.preventDefault();
                                              let eventtarget =
                                                event.currentTarget;
                                              if (eventtarget.readOnly) return;
                                              eventtarget.readOnly = true;

                                              size["selected"] =
                                                !size?.selected;
                                              await filterProductByCategoryChecks();
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                              eventtarget.readOnly = false;
                                            }}
                                          >
                                            {size.code}
                                          </button> */}
                                        </>
                                      ))}
                                    </>
                                  </div>
                                  <div hidden={!(mobileFilterTab == "color")}>
                                    <>
                                      {colorListDisplayData?.map((color) => (
                                        <>
                                          <div
                                            className="mobileFilterTab--details "
                                            onClick={async (event) => {
                                              event.preventDefault();
                                              let eventtarget =
                                                event.currentTarget;
                                              if (eventtarget.readOnly) return;
                                              eventtarget.readOnly = true;
                                              // await onClick_filterDynamic("colorcodes");
                                              color["selected"] =
                                                !color?.selected;
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                              eventtarget.readOnly = false;
                                            }}
                                          >
                                            <div className="filterCheckbox">
                                              <label>
                                                <i
                                                  className={
                                                    color?.selected === true
                                                      ? "icon_tick active"
                                                      : "icon_tick"
                                                  }
                                                />
                                              </label>
                                              <span className="mobileFilterTab--details-label label-capitalize">
                                                <span
                                                  className="mobileFilterTab--details-color"
                                                  style={{
                                                    backgroundColor: color.code,
                                                  }}
                                                />
                                                {color.name}
                                              </span>
                                            </div>
                                          </div>

                                          {/* 
                                          <button
                                            id={"sizecode" + size.code}
                                            className={
                                              size?.selected === true
                                                ? "mb-2 mr-1 w-16 py-1 bg-blue-300 text-white border hover:border-gray-400 rounded-md"
                                                : "mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"
                                            }
                                            style={{ fontSize: "80%" }}
                                            onClick={async (event) => {
                                              event.preventDefault();
                                              let eventtarget =
                                                event.currentTarget;
                                              if (eventtarget.readOnly) return;
                                              eventtarget.readOnly = true;

                                              size["selected"] =
                                                !size?.selected;
                                              await filterProductByCategoryChecks();
                                              setCount({
                                                ...count,
                                                count: count + 1,
                                              });
                                              eventtarget.readOnly = false;
                                            }}
                                          >
                                            {size.code}
                                          </button> */}
                                        </>
                                      ))}
                                    </>
                                  </div>
                                </div>
                              </div>
                              <div className="filterActionBtn">
                                <button
                                  className="filterActionBtn--close"
                                  onClick={() => {
                                    document
                                      .getElementById("filterMenuOption")
                                      .classList.remove(
                                        "filterMenuOption--active"
                                      );
                                  }}
                                >
                                  Close
                                </button>
                                <button
                                  className="filterActionBtn--apply"
                                  onClick={async () => {
                                    await filterProductByCategoryChecks();
                                    document
                                      .getElementById("filterMenuOption")
                                      .classList.remove(
                                        "filterMenuOption--active"
                                      );
                                  }}
                                >
                                  Apply
                                </button>
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
        </section>



        <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
      </>
    </React.Fragment>
  );
}
