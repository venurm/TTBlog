import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  callBlogDataList,
  callCategoryList,
  callColorList,
  callMockCategoryList,
  callProductsColorList,
  callProductsList,
  callProductsSizeList,
  callSizeList,
  callStores,
  callVersionMangerList,
} from "./utilities/storeManager.js";
import { getUserdata } from "./utilities/sessionexpiry.js";
import {
  handleGetInfoStorageItems,
  handleSetInfoStorageItems,
} from "./utilities/storageManager.js";
import { SK } from "./constants/StorageKeys.js";
import {
  handleGetCartInfoStorageItems,
  handleSetCartInfoStorageItems,
} from "./utilities/cartManager.js";
import { checkerString, lowercasenosp } from "./utilities/checker.js";

import { store } from "./store/index.js";
// import Myaccount from "./pages/Myaccount.js";
// import Mywallet from "./pages/Mywallet.js";
// import UppyFileUpload from "./pages/uppyfileupload.js";
// import ChangePassword from "./pages/changepassword.js";
// import MyProfile from "./pages/myprofile.js";
import Customize from "./pages/customize.js";
import NavbarMain from "./pages/navbarmain.js";
import CheckBoxPage from "./pages/checkbox.js";
import { BlogPage } from "./pages/blogpages/blog-page.js";
import { Fashionblog } from "./pages/blogpages/Fashionblog.js";

import { Bollywood } from "./pages/blogpages/bollywood.js";
import { General } from "./pages/blogpages/general.js";
import { Allblogs } from "./pages/blogpages/allblogs.js";
import { Beauty } from "./pages/blogpages/beauty.js";
import { FashionOverview } from "./pages/blogpages/overviewpages/fashion-overview.js";
import { BeautyOverview } from "./pages/blogpages/overviewpages/beauty-overview.js";
import { GeneralOverview } from "./pages/blogpages/overviewpages/general-overview.js";
// import HomepgeFooter from "./pages/homepagefooter.js";


const Footer = React.lazy(() => import("./pages/footer.js"))
const ChangePassword = React.lazy(() => import("./pages/changepassword.js"))
const MyProfile = React.lazy(() => import("./pages/myprofile.js"))
const UppyFileUpload = React.lazy(() => import("./pages/uppyfileupload.js"))
const ProductsPage = React.lazy(() => import("./pages/products.js"))
const CheckOutPage = React.lazy(() => import("./pages/checkout.js"))
const Mywallet = React.lazy(() => import("./pages/Mywallet.js"))
const Myaccount = React.lazy(() => import("./pages/Myaccount.js"))
const Storelocation = React.lazy(() => import("./pages/Storelocation.js"))
const Contactus = React.lazy(() => import("./pages/Contactus.js"))
const ShippingAndRefundPolicy = React.lazy(() => import("./pages/shippingandrefundpolicy.js"))
const OrderDetails = React.lazy(() => import("./pages/orderdetails.js"))
const PrivacyPolicy = React.lazy(() => import("./pages/privacypolicy.js"))
const TermsAndCondtions = React.lazy(() => import("./pages/termsandconditions.js"))
const SignInPage = React.lazy(() => import("./pages/signin.js"))
const SignUpPage = React.lazy(() => import("./pages/signup.js"))
const ProductViewPage = React.lazy(() => import("./pages/product-info.js"))
const OrderHistoryPage = React.lazy(() => import("./pages/orderhistory.js"))
const CartPage = React.lazy(() => import("./pages/cart.js"))
const IndexPage = React.lazy(() => import("./pages/Index.js"))
const SiteMap = React.lazy(() => import("./pages/sitemap.js"))

function App(props) {
  const [pageinit, setPageInit] = useState(false);
  const [assetsUrl, setAssetsUrl] = useState(null);
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
  
  const [categoryListData, setCategoryListData] = useState([]);
  const [userData, setUserData] = useState({});
  const [showFooter, setshowFooter] = useState(true);
  const [sizeListData, setSizeListData] = useState([]);

  const [productsListData, setProductsListData] = useState([]);
  const [productssizeListData, setProductsSizeListData] = useState([]);
  const [productscolorcodesListData, setProductsColorCodesListData] = useState(
    []
  );

  const [blogdata,setBlogdata] = useState([]);
  const [logoImageUrl, setLogoImageUrl] = useState(`/yofte-assets/logos/${lowercasenosp(store)}/logo.webp`);
  const [colorcodesListData, setColorCodesListData] = useState([]);
  const [versionmanagerListData, setVersionManagerListData] = useState([]);
  const [count, setCount] = useState(1);
  let cartinfodefalults = {
    cartcount: 0,
    cartquantitycount: 0,
    products: [],
    cartprice: 0,
    subtotal: 0,
    mrptotal: 0,
    shipping: 0,
    ordertotal: 0,
    total: 0,
  };

  let storetextdefalults = {
    storeid: process.env.REACT_APP_STORE_ID,
    footercopyrighttext: "",
    mainpagebannerbgcolor: "#ffffff",
    mainpagebanner1text: "",
    mainpagebanner2text: "",
    mainpageheader1text: "",
    mainpageheader2text: "",
    title: "",
    social: "",
  };

  const [cartinfoData, setCartInfoData] = useState(cartinfodefalults);
  const [storeText, setStoreText] = useState(storetextdefalults);

  useEffect(() => {
    console.log("***");
  }, [count]);

  const clearCartInfoData = async () => {
    handleSetCartInfoStorageItems(cartinfodefalults);
    setCartInfoData(cartinfodefalults);
    setProductsListData(await callProductsList(null, true, true));
    setCount({ ...count, count: count + 1 });
  };

  const pageRefresh = async (productlist = false) => {
    setUserData(getUserdata());
    setCount({ ...count, count: count + 1 });
    if (productlist) {
      let hardreset = false;
      let mockupdata = true;
      let _productlistdata = await callProductsList(
        null,
        hardreset,
        mockupdata
      );
      setProductsListData(_productlistdata === null ? [] : _productlistdata);
      setCount({ ...count, count: count + 1 });
      return _productlistdata;
    }
    return await handleGetCartInfoStorageItems(setCartInfoData);
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
    setStoreInfo(storedetails);
    console.log(storedetails)

    let _categorylistdata = await await callCategoryList(
      null,
      hardreset,
      mockupdata
    );
    setCategoryListData(_categorylistdata === null ? [] : _categorylistdata);
    let _bloglistdata = await await callCategoryList(
      null,
      hardreset,
      mockupdata
    );
    setCategoryListData(_bloglistdata === null ? [] : _categorylistdata);

    let _sizelistdata = await callSizeList(null, hardreset, mockupdata);
    setSizeListData(_sizelistdata === null ? [] : _sizelistdata);

    let _productlistdata = await callProductsList(null, hardreset, mockupdata);
    setProductsListData(_productlistdata === null ? [] : _productlistdata);

    let _blogpagedata = await callBlogDataList(null, hardreset, mockupdata);
    console.log("_blogpagedata:",_blogpagedata)
    setBlogdata(_blogpagedata === null ? [] : _blogpagedata);

    let _prodictsizelistdata = await callProductsSizeList(
      null,
      hardreset,
      mockupdata
    );
    setProductsSizeListData(
      _prodictsizelistdata === null ? [] : _prodictsizelistdata
    );

    let _colorcodelistdata = await callColorList(null, hardreset, mockupdata);
    setColorCodesListData(
      _colorcodelistdata === null ? [] : _colorcodelistdata
    );

    let _productscolorcodelistdata = await callProductsColorList(
      null,
      hardreset,
      mockupdata
    );
    setProductsColorCodesListData(
      _productscolorcodelistdata === null ? [] : _productscolorcodelistdata
    );

    setVersionManagerListData(
      await callVersionMangerList(null, hardreset, mockupdata)
    );

    if (hardreset) {
      clearCartInfoData();
    } else {
      handleGetCartInfoStorageItems(setCartInfoData);
    }



    if (lowercasenosp(storedetails.store) === lowercasenosp("tamiltshirts")) {

      storetextdefalults.title = storedetails.title;
      storetextdefalults.social = JSON.parse(storedetails?.social);
      storetextdefalults.footercopyrighttext = `© Copyright 2012 - ${new Date().getFullYear()} TamilTshirts.in | Legal Name : Vilva Networks`;
      storetextdefalults.mainpagebanner1text = "Tamil Printed Tshirts Factory";
      storetextdefalults.mainpagebanner2text = "Customized Printed Tshirts";
      storetextdefalults.mainpageheader1text =
        "Elevate Your Style with Unique <br/> Printed T-Shirts.";
      storetextdefalults.mainpageheader2text =
        "Discover more products and inspiration.";

      setStoreText(storetextdefalults);
    } else if (
      lowercasenosp(storedetails.store) === lowercasenosp("tamiltshirts")
    ) {
      storetextdefalults.title = storedetails.title;
      storetextdefalults.social = JSON.parse(storedetails?.social);
      storetextdefalults.footercopyrighttext = `© Copyright ${new Date().getFullYear()} TamilTshirts.in | Legal Name : Vilva Networks`;
      storetextdefalults.mainpagebanner1text =
        "Beautiful Quotes Printed Tshirts Factory";
      storetextdefalults.mainpagebanner2text = "Customized Printed Tshirts";
      storetextdefalults.mainpageheader1text =
        "Elevate Your Style with Unique <br/> Printed T-Shirts.";
      storetextdefalults.mainpageheader2text =
        "Discover more products and inspiration.";
      setStoreText(storetextdefalults);
    } else if (
      lowercasenosp(storedetails.store) === lowercasenosp("thaithingal")
    ) {
      storetextdefalults.title = storedetails.title;
      storetextdefalults.social = JSON.parse(storedetails?.social);
      storetextdefalults.mainpagebannerbgcolor = "#d6aa33";
      storetextdefalults.footercopyrighttext = `© Copyright ${new Date().getFullYear()} ThaiThingal | Legal Name : ThaiThingal`;
      storetextdefalults.mainpagebanner1text = "";
      storetextdefalults.mainpagebanner2text = "";
      storetextdefalults.mainpageheader1text = "";
      storetextdefalults.mainpageheader2text = "";
      setStoreText(storetextdefalults);
    }

    setCount({ ...count, count: count + 1 });

    // setAssetsUrl(await callStores("assets"));
    // setCategoryListData(await callCategoryList());
    // setSizeListData(await callSizeList());
    // setProductsListData(await callProductsList());
    // setProductsSizeListData(await callProductsSizeList());
    // setColorCodesListData(await callColorList());
    // setProductsColorCodesListData(await callProductsColorList());
    // setVersionManagerListData(await callVersionMangerList());
    // console.log(storeText.title)
    setUserData(getUserdata());
    setCount({ ...count, count: count + 1 });

  };

  if (!pageinit) {
    setPageInit(true);
    callpageInit();
    console.log("blog :",blogdata)
  }

  return (
    <>
    <Routes>
           
        <Route path="/" element={<BlogPage storeid={storeText.storeid} footercopyrighttext={storeText.footercopyrighttext}/>}>
          <Route path="/fashionblog" element={<FashionOverview />} />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/beauty" element={<BeautyOverview />} />
          <Route path="/bollywood" element={<GeneralOverview />} />
          <Route path="/general" element={<General />} />
        </Route>
      </Routes>
    <Routes>

    <Route path="/beauty2" element={<Beauty  categoryListData={categoryListData}  storeid={storeText.storeid} />} />
      <Route
        path="/"
        element={<Suspense fallback={<div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><img src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/2/logo.webp" alt="Tamiltshirts Logo"></img></div>}>
          <IndexPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}

            categoryListData={categoryListData}
            mainpagebannerbgcolor={storeText.mainpagebannerbgcolor}
            mainpageheader1text={storeText.mainpageheader1text}
            mainpageheader2text={storeText.mainpageheader2text}
            mainpagebanner1text={storeText.mainpagebanner1text}
            mainpagebanner2text={storeText.mainpagebanner2text}
            footercopyrighttext={storeText.footercopyrighttext}
            title={storeText.title}
            social={storeText.social}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
          <Route
        path="/blog-page"
        element={<BlogPage  store={storeinfo.store}  storeid={storeText.storeid}
        />}/>
      <Route
        path="/cart"
        element={<Suspense >
          <CartPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            social={storeinfo.social}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            setUserData={setUserData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            clearCartInfoData={clearCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/privacypolicy"
        element={<Suspense >
          <PrivacyPolicy
            store={storeinfo.store}
            shipping_config={storeinfo.shipping_config}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/checkboxpage"
        element={
          <CheckBoxPage

          store={storeinfo.store}
          description={storeinfo.description}
          assets={storeinfo.assets}
          storeid={storeText.storeid}
          footercopyrighttext={storeText.footercopyrighttext}
          hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
          productimage={
            checkerString(storeinfo.productimage)
              ? storeinfo.productimage
              : ""
          }
          productviewimage={
            checkerString(storeinfo.productviewimage)
              ? storeinfo.productviewimage
              : ""
          }
          thumbnailviewimage={
            checkerString(storeinfo.thumbnailviewimage)
              ? storeinfo.thumbnailviewimage
              : ""
          }
          count={count}
          setCount={setCount}
          assetsUrl={assetsUrl}
          categoryListData={categoryListData}
          productsListData={productsListData}
          userData={userData}
          setUserData={setUserData}
          sizeListData={sizeListData}
          productssizeListData={productssizeListData}
          productscolorcodesListData={productscolorcodesListData}
          colorcodesListData={colorcodesListData}
          versionmanagerListData={versionmanagerListData}
          cartinfoData={cartinfoData}
          setCartInfoData={setCartInfoData}
          clearCartInfoData={clearCartInfoData}
          pageRefresh={pageRefresh}
          showFooter={showFooter}
          setshowFooter={setshowFooter}
      
          />
        }
      />
      <Route
        path="/termsandconditions"
        element={<Suspense >
          <TermsAndCondtions
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/storelocation"
        element={<Suspense >
          <Storelocation
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/contactus"
        element={<Suspense >
          <Contactus
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/shippingandrefundpolicy"
        element={<Suspense >
          <ShippingAndRefundPolicy
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/checkout"
        element={<Suspense >
          <CheckOutPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            setUserData={setUserData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            clearCartInfoData={clearCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/orderhistory"
        element={<Suspense >
          <OrderHistoryPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            categoryListData={categoryListData}
            productsListData={productsListData}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/orderdetails"
        element={<Suspense >
          <OrderDetails
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            categoryListData={categoryListData}
            productsListData={productsListData}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/products/:id?"
        element={<Suspense >
          <ProductsPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/p/:id"
        element={<Suspense >
          <ProductViewPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/signup"
        element={<Suspense >
          <SignUpPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            setUserData={setUserData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            clearCartInfoData={clearCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route path="/myaccount"
        element={<Suspense >
          <Myaccount
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            cartinfoData={cartinfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter} /></Suspense>

        } />

      <Route path="/mywallet"
        element={<Suspense >
          <Mywallet
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            cartinfoData={cartinfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter} /></Suspense>} />
      <Route
        path="/signin"
        element={<Suspense >
          <SignInPage
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            count={count}
            setCount={setCount}
            assetsUrl={assetsUrl}
            categoryListData={categoryListData}
            productsListData={productsListData}
            userData={userData}
            setUserData={setUserData}
            sizeListData={sizeListData}
            productssizeListData={productssizeListData}
            productscolorcodesListData={productscolorcodesListData}
            colorcodesListData={colorcodesListData}
            versionmanagerListData={versionmanagerListData}
            cartinfoData={cartinfoData}
            setCartInfoData={setCartInfoData}
            clearCartInfoData={clearCartInfoData}
            pageRefresh={pageRefresh}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/customize"
        element={<Suspense >
          <UppyFileUpload
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/changepassword"
        element={<Suspense >
          <ChangePassword
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/myprofile"
        element={<Suspense >
          <MyProfile
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/navbarmain"
        element={<Suspense >
          <NavbarMain
            logoImageUrl={logoImageUrl}
            store={storeinfo.store}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
          /></Suspense>
        }
      />
      <Route
        path="/footer"
        element={<Suspense >
          <Footer
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />
      <Route
        path="/old"
        element={<Suspense >
          <Customize
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />

      <Route
        path="/sitemap"
        element={<Suspense >
          <SiteMap
            store={storeinfo.store}
            description={storeinfo.description}
            assets={storeinfo.assets}
            storeid={storeText.storeid}
            footercopyrighttext={storeText.footercopyrighttext}
            hdimage={checkerString(storeinfo.hdimage) ? storeinfo.hdimage : ""}
            productimage={
              checkerString(storeinfo.productimage)
                ? storeinfo.productimage
                : ""
            }
            productviewimage={
              checkerString(storeinfo.productviewimage)
                ? storeinfo.productviewimage
                : ""
            }
            thumbnailviewimage={
              checkerString(storeinfo.thumbnailviewimage)
                ? storeinfo.thumbnailviewimage
                : ""
            }
            showFooter={showFooter}
            setshowFooter={setshowFooter}
          /></Suspense>
        }
      />

    </Routes>
    </>
  );
}

export default App;
