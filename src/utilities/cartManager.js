import { AK } from "../constants/AppKeys";
import { SK } from "../constants/StorageKeys";
import axios from "axios";
import { AxiosGET, AxiosMockupGET } from "./axioscall";
import {
  handleSetCategoryInfoStorageItems,
  handleSetColorCodesInfoStorageItems,
  handleSetProductsColorCodesInfoStorageItems,
  handleSetProductsInfoStorageItems,
  handleSetProductsSizeInfoStorageItems,
  handleSetSizeInfoStorageItems,
  handleSetVersionManagerStorageItems,
} from "./storageManager";

export const handleFetchVersionManagerData = async (setVersionManagerData) => {
  return await AxiosGET(AK.VERSIONMANAGERJSONAPI)
    .then((res) => {
      console.log("res");
      console.log(res);
      if (res.data != typeof undefined && res.data != null) {
        setVersionManagerData(res.data);

        return res.data;
      }
    })
    .catch((error) => {
      return null;
    });
};

export const handleFetchCategoryData = async (
  setFormLoader,
  setCategoryListData
) => {
  setFormLoader(true);
  await AxiosGET(AK.CATEGORYJSONAPI)
    .then((res) => {
      if (res.data != typeof undefined && res.data != null) {
        setCategoryListData(res.data);
        handleSetCategoryInfoStorageItems(res.data);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleFetchColorCodesData = async (
  setFormLoader,
  setColorCodesListData
) => {
  setFormLoader(true);

  await AxiosGET(AK.COLORCODESJSONAPI)
    .then((res) => {
      console.log(res);
      if (res.data != typeof undefined && res.data != null) {
        setColorCodesListData(res.data);
        handleSetColorCodesInfoStorageItems(res.data);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleFetchSizeData = async (setFormLoader, setSizeListData) => {
  setFormLoader(true);

  await AxiosGET(AK.SIZEJSONAPI)
    .then((res) => {
      console.log(res);
      if (res.data != typeof undefined && res.data != null) {
        setSizeListData(res.data);
        handleSetSizeInfoStorageItems(res.data);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleFetchProductsSizeData = async (
  setFormLoader,
  setProductsSizeListData
) => {
  setFormLoader(true);

  await AxiosGET(AK.PRODUCTSSIZESJSONAPI)
    .then((res) => {
      console.log(res);
      if (res.data != typeof undefined && res.data != null) {
        setProductsSizeListData(res.data);
        handleSetProductsSizeInfoStorageItems(res.data);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleFetchProductsColorCodesData = async (
  setFormLoader,
  setProductsColorCodesListData
) => {
  setFormLoader(true);

  await AxiosGET(AK.PRODUCTSCOLORCODESJSONAPI)
    .then((res) => {
      console.log(res);
      if (res.data != typeof undefined && res.data != null) {
        setProductsColorCodesListData(res.data);
        handleSetProductsColorCodesInfoStorageItems(res.data);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleFetchProductsData = async (
  setFormLoader,
  setProductsListData
) => {
  setFormLoader(true);
  const productpayload = {};

  await AxiosGET(AK.PRODUCTSJSONAPI)
    .then((res) => {
      if (res.data != typeof undefined && res.data != null) {
        let products = res.data;
        const infodata = JSON.parse(localStorage.getItem(SK.CARTINFODATA));
        if (infodata !== null && infodata.products !== null) {
          infodata.products.map((infoprod) => {
            products.filter((prod) => {
              if (prod.id === infoprod.id) {
                prod["addtocart"] = true;
                prod["cartquantity"] = infoprod.cartquantity;
                return true;
              }
              return false;
            });
          });
        }
        setProductsListData(products);
        handleSetProductsInfoStorageItems(products);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleFetchProductsDataSliced = async (
  setFormLoader,
  setProductsListData,
  setProductsListDisplayData,
  productsListDisplayDataCount
) => {
  setFormLoader(true);
  const productpayload = {};

  await AxiosGET(AK.PRODUCTSJSONAPI)
    .then((res) => {
      if (res.data != typeof undefined && res.data != null) {
        let products = res.data;
        const infodata = JSON.parse(localStorage.getItem(SK.CARTINFODATA));
        if (infodata !== null && infodata.products !== null) {
          infodata.products.map((infoprod) => {
            products.filter((prod) => {
              if (prod.id === infoprod.id) {
                prod["addtocart"] = true;
                prod["cartquantity"] = infoprod.cartquantity;
                return true;
              }
              return false;
            });
          });
        }
        setProductsListData(products);
        setProductsListDisplayData(
          products.slice(0, productsListDisplayDataCount)
        );
        handleSetProductsInfoStorageItems(products);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const updateProductInfoData = async (
  setFormLoader,
  productinfo,
  setProductInfoData
) => {
  setFormLoader(true);
  const productpayload = {};
  if (productinfo != null) {
    const infodata = JSON.parse(localStorage.getItem(SK.CARTINFODATA));
    if (infodata !== null && infodata.products !== null) {
      infodata.products.map((infoprod) => {
        if (productinfo.id === infoprod.id) {
          productinfo["addtocart"] = true;
          productinfo["cartquantity"] = infoprod.cartquantity;
          return true;
        }
        return false;
      });
    }
    setProductInfoData(productinfo);
  }

  await AxiosGET(AK.PRODUCTSJSONAPI)
    .then((res) => {
      if (res.data != typeof undefined && res.data != null) {
        let products = res.data;
        const infodata = JSON.parse(localStorage.getItem(SK.CARTINFODATA));
        if (infodata !== null && infodata.products !== null) {
          infodata.products.map((infoprod) => {
            products.filter((prod) => {
              if (prod.id === infoprod.id) {
                prod["addtocart"] = true;
                prod["cartquantity"] = infoprod.cartquantity;
                return true;
              }
              return false;
            });
          });
        }
        setProductsListData(products);
        handleSetProductsInfoStorageItems(products);
        setFormLoader(false);
      }
    })
    .catch((error) => { });
};

export const handleSetCartInfoStorageItems = async (cartinfoData) => {
  //console.log(JSON.stringify(cartinfoData));
  await cartCalculation(cartinfoData);
  localStorage.setItem(SK.CARTINFODATA, JSON.stringify(cartinfoData));
};

export const handleGetCartInfoStorageItems = async (setCartInfoData) => {
  // localStorage.setItem(SK.CARTINFODATA, JSON.stringify(cartinfoData));
  const items = JSON.parse(localStorage.getItem(SK.CARTINFODATA));
  if (items === null) {
    setCartInfoData({
      cartcount: 0,
      cartquantitycount: 0,
      products: [],
      cartprice: 0,
      subtotal: 0,
      shipping: 0,
      ordertotal: 0,
    });
  } else {
    setCartInfoData(items);
  }
  return items;
  //console.log("setCartInfoData");
  //console.log(JSON.stringify(setCartInfoData));
};

export const handleCartPlus = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  product["cartquantity"] = product["cartquantity"] + 1;
  if (
    cartinfoData.products.filter((res) => {
      if (res.id === product.id) {
        res["cartquantity"] = product["cartquantity"];
        return true;
      }
      return false;
    }).length > 0
  ) {
  } else {
    product["cartquantity"] = 1;
    cartinfoData.products.push(product);
  }
  //console.log(JSON.stringify(cartinfoData));
  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });
};

export const handleCartMinus = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  product["cartquantity"] = product["cartquantity"] - 1;
  if (product["cartquantity"] <= 0) {
    product["addtocart"] = false;
    let cartinfoprod = cartinfoData.products.filter(
      (res) => res.id === product.id
    );
    var index = cartinfoData.products.indexOf(cartinfoprod);
    cartinfoData.products.splice(index, 1);
  } else {
    cartinfoData.products.filter((res) => {
      if (res.id === product.id) {
        res["cartquantity"] = res["cartquantity"] - 1;
        return true;
      }
      return false;
    });
  }
  //console.log(JSON.stringify(cartinfoData));
  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });
};

export const handleCartCartInfoPlus = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  cartinfoData.products.filter((res) => {
    if (res.id === product.id) {
      res["cartquantity"] = res["cartquantity"] + 1;
      return true;
    }
    return false;
  });
  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });
};

export const handleCartCartInfoMinus = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  cartinfoData.products.filter((res) => {
    if (res.id === product.id) {
      res["cartquantity"] = res["cartquantity"] - 1;
      if (res["cartquantity"] <= 0) {
        var index = cartinfoData.products.indexOf(product);
        cartinfoData.products.splice(index, 1);
      }
      return true;
    }
    return false;
  });

  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });
};

export const handleProductInfoPlus = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  //console.log(JSON.stringify(cartinfoData));
  if (product?.cartquantity == null || product?.cartquantity == undefined) {
    product["cartquantity"] = 1;
  } else {
    product["cartquantity"] = product["cartquantity"] + 1;
  }

  setCount({ ...count, count: count + 1 });
};

export const handleProductInfoMinus = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  //console.log(JSON.stringify(cartinfoData));
  if (product?.cartquantity == null || product?.cartquantity == undefined) {
    product["cartquantity"] = 0;
  } else {
    product["cartquantity"] = product["cartquantity"] - 1;
  }

  if (
    product?.cartquantity == null ||
    product?.cartquantity == undefined ||
    product["cartquantity"] <= 0
  ) {
    product["addtocart"] = false;
    let cartinfoprod = cartinfoData.products.filter(
      (res) => res.id === product.id
    );
    var index = cartinfoData.products.indexOf(cartinfoprod);
    cartinfoData.products.splice(index, 1);
  } else {
    cartinfoData.products.filter((res) => {
      if (res.id === product.id) {
        res["cartquantity"] = product["cartquantity"];
        return true;
      }
      return false;
    });
  }
  //console.log(JSON.stringify(cartinfoData));
  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });

  setCount({ ...count, count: count + 1 });
};

export const handleProductInfoAddtoCart = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  count
) => {
  if (product["cartquantity"] <= 0) {
    product["addtocart"] = false;
    let cartinfoprod = cartinfoData.products.filter(
      (res) => res.id === product.id
    );
    var index = cartinfoData.products.indexOf(cartinfoprod);
    cartinfoData.products.splice(index, 1);
  } else {
    if (
      cartinfoData.products.filter((res) => {
        if (res.id === product.id) {
          res["cartquantity"] = product["cartquantity"];
          return true;
        }
        return false;
      }).length === 0
    ) {
      if (product?.cartquantity === undefined || product["cartquantity"] === 0)
        product["cartquantity"] = 1;
      cartinfoData.products.push(product);
    }
  }
  //console.log(JSON.stringify(cartinfoData));
  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });
};

export const handleProductInfoUpdatetoCart = async (
  product,
  setCartInfoData,
  setCount,
  cartinfoData,
  cartquantity,
  count
) => {
  if (product["cartquantity"] <= 0) {
    product["addtocart"] = false;
    let cartinfoprod = cartinfoData.products.filter(
      (res) => res.id === product.id
    );
    var index = cartinfoData.products.indexOf(cartinfoprod);
    cartinfoData.products.splice(index, 1);
  } else {
    if (
      cartinfoData.products.filter((res) => {
        if (res.id === product.id) {
          res["cartquantity"] = product["cartquantity"];
          return true;
        }
        return false;
      }).length === 0
    ) {
      if (product?.cartquantity === undefined || product["cartquantity"] === 0)
        product["cartquantity"] = 1;
      cartinfoData.products.push(product);
    }
  }
  //console.log(JSON.stringify(cartinfoData));
  await cartCalculation(cartinfoData);
  await handleSetCartInfoStorageItems(cartinfoData);
  setCartInfoData(cartinfoData);
  setCount({ ...count, count: count + 1 });
};


export const cartCalculation = async (cartinfoData) => {
  let shipping = 0;
  let subtotal = 0;
  let total = 0;
  let totalcartquantity = 0;
  let mrptotal = 0;
  cartinfoData.products.map((product) => {
    totalcartquantity = Number(totalcartquantity) + Number(product.cartquantity);
    subtotal = subtotal + product.sp * product.cartquantity;
    total = total + product.sp * product.cartquantity;
    mrptotal = mrptotal + product.mrp * product.cartquantity;
  });
  cartinfoData.cartcount = totalcartquantity;
  cartinfoData.subtotal = subtotal;
  cartinfoData.mrptotal = mrptotal;
  cartinfoData.total = total;
};
