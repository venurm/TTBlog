const STOREID = process.env.REACT_APP_STORE_ID;
export const AK = Object.freeze({
  ACCESSKEY: "VilvaKart2023",
  STOREID: STOREID,

  IPINFOURL: process.env.REACT_APP_IPINFOURL,
  APIURL: process.env.REACT_APP_APIURL, //"https://earth.haodapay.com/",//https://earth.mypayhaoda.com/
  REDDISAPIURL: process.env.REACT_APP_REDDISAPIURL,
  MOCKUPSURL: process.env.REACT_APP_MOCKUPSURL,
  IMAGEURL: process.env.REACT_APP_IMAGEURL,
  HDIMAGEURL: process.env.REACT_APP_HDIMAGEURL,
  PRODUCTPAGEIMAGEURL: process.env.REACT_APP_PRODUCTPAGEIMAGEURL,
  PRODUCTVIEWIMAGEURL: process.env.REACT_APP_PRODUCTVIEWIMAGEURL,
  THUMBNAILSIMAGEURL: process.env.REACT_APP_THUMBNAILSIMAGEURL,

  LOGINAPI: "api/login",
  REQUESTOTPAPI: "api/requestotp",
  VERIFYOTPAPI: "api/verifyotp",
  INSTAMOJOAPI: "api/instamojo",
  HAODAPAYUPI: "api/haodapayupi",
  RAZORPAYAPI: "api/razorpay",

  REGISTERAPI: "api/register",
  TWOFACTORLOGINAPI: "api/twofactor/login",
  LOGOUTAPI: "api/logout",
  PRODUCTSAPI: "api/products",
  CATEGORYAPI: "api/category",
  SUBMITDELIVERYADDRESSAPI: "api/deliveryaddress",
  FETCHDELIVERYADDRESSAPI: "api/fetchdeliveryaddress",
  CALCULATESHIPPINGCHARGEAPI: "api/calculate/shippingcharge",

  VIEWORDERAPI: "api/vieworder",
  VIEWORDERBYIDAPI: "api/vieworderbyid",

  VIEWORDERDETAILSAPI: "api/vieworderdetails",

  PRODUCTSJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=products`,
  MOCKUP_PRODUCTSJSONAPI: `products.json`,
  CATEGORYJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=category`,
  MOCKUP_CATEGORYJSONAPI: `category.json`,
  SIZEJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=size`,
  MOCKUP_SIZEJSONAPI: `size.json`,
  VERSIONMANAGERJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=versionmanager`,
  MOCKUP_VERSIONMANAGERJSONAPI: `versionmanager.json`,
  COLORCODESJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=colorcodes`,
  MOCKUP_COLORCODESJSONAPI: `colorcodes.json`,
  PRODUCTSCOLORCODESJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=productscolorcodes`,
  MOCKUP_PRODUCTSCOLORCODESJSONAPI: `productscolorcodes.json`,
  PRODUCTSSIZESJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=productssizes`,
  MOCKUP_PRODUCTSSIZESJSONAPI: `productssizes.json`,
  STORESJSONAPI: `redisapi/readData.php?storeid=${STOREID}&jsonname=stores`,
  MOCKUP_STORESJSONAPI: `stores.json`,

  DASHBOARDAPI: "api/dashboard",
  COLLECTIONS_PAYINFORMATIONAPI: "api/collections/payin",
  BBPSCONSENTDOCSAPI: "api/bbpsconsentdocs",
  BBPSCONSENTDOCS_SUBMITAPI: "api/bbpsconsentdocs/submit",
  SETTLEMENTSAPI: "api/settlements",
  CHARGEBACKSAPI: "api/chargebacks",
  CHARGEBACKSACCEPTEDAPI: "api/chargebacks/accepted",
  INVOICESAPI: "api/invoices",
  PAYOUTSAPI: "api/payouts",
  VIEWBENEFICIARIESAPI: "api/payout/view/beneficiaries",
  MYACCOUNTAPI: "api/myaccount",
  UPDATETWOFACTORAUTHAPI: "api/update/twofactorauth",
  RAISEDISPUTESAPI: "api/payout/raise/disputes",
  ADDBENEFICIARIESAPI: "api/payout/add/beneficiaries",
  INTIATEPAYOUTREQUESTAPI: "api/payout/initiate/request",
  INTIATEPAYOUTVALIDATEDOTPAPI: "api/payout/initiate/validateOTP",
  INTIATEPAYOUTQUERYAPI: "api/payout/initiate/page",
  KYCINDEXAPI: "api/kycs",
  KYCSUBMITAPI: "api/kycs/submit",
  WALLETSUBMITAPI: "api/walletpayment",

  SITEMAPXMLAPI: "product-feed/2",

  BLOGPAGEAPI:"api/blog/categories"



});
