import axios from "axios";
import { AK } from "../constants/AppKeys";
import { SK } from "../constants/StorageKeys";
import { AxiosGET, AxiosMockupGET } from "./axioscall";
import { checkerArray } from "./checker";

import {
  handleGetInfoStorageItems,
  handleSetInfoStorageItems,
} from "./storageManager";

export const put = (storagename = "", storeinfo) => {
  handleSetInfoStorageItems(storagename, storeinfo);
  return true;
};
export const get = (storagename = "") => {
  let storeinfo = handleGetInfoStorageItems(storagename);
  return storeinfo;
};

export const callSync = async (
  addon = null,
  hardreset = false,
  storagename = "",
  apiname = "",
  singledata = false,
  mockapiname = "",
  mockdata = false
) => {
  try {
    let storeinfo = handleGetInfoStorageItems(storagename);
    //console.log(storeinfo);
    if (hardreset) storeinfo = null;
    if (mockdata) storeinfo = null;
    // console.log(
    //   "storagename : " +
    //     storagename +
    //     "hardreset : " +
    //     hardreset +
    //     " mockup : " +
    //     mockdata
    // );
    //console.log(storeinfo);
    if (storeinfo === null || storeinfo === undefined) {
      if (!hardreset) {
        storeinfo = await AxiosMockupGET(mockapiname)
          .then((res) => {
            if (res != null && res.data.length > 0)
              if (singledata) return res.data[0];
              else return res.data;
            else return null;
          })
          .catch((error) => { });
      } else {
        storeinfo = await AxiosGET(apiname)
          .then((res) => {
            if (res != null && res.data.length > 0)
              if (singledata) return res.data[0];
              else return res.data;
            else return null;
          })
          .catch((error) => { });
      }

      if (checkerArray(storeinfo, 2000)) {
        handleSetInfoStorageItems(storagename, storeinfo.slice(0, 2000));
      } else handleSetInfoStorageItems(storagename, storeinfo);
    }
    if (addon != null && storeinfo != null) {
      return storeinfo[addon];
    }
    return storeinfo;
  } catch (err) {
    //console.log(err);
    return null;
  }
};

export const callStores = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.STORESMANAGERINFODATA,
      AK.STORESJSONAPI,
      true,
      AK.MOCKUP_STORESJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};

export const callProductsList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.PRODUCTSINFODATA,
      AK.PRODUCTSJSONAPI,
      false,
      AK.MOCKUP_PRODUCTSJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};

export const callCategoryList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.CATEGORYINFODATA,
      AK.CATEGORYJSONAPI,
      false,
      AK.MOCKUP_CATEGORYJSONAPI,
      mockup
    );
  } catch (err) {
    //console.log(err);
    return null;
  }
};

export const callSizeList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.SIZEINFODATA,
      AK.SIZEJSONAPI,
      false,
      AK.MOCKUP_SIZEJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};

export const callProductsSizeList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.PRODUCTSSIZEINFODATA,
      AK.PRODUCTSSIZESJSONAPI,
      false,
      AK.MOCKUP_PRODUCTSSIZESJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};
export const callBlogDataList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append('storeid', '2');
    bodyFormData.append('catid1', '32');
    console.log(bodyFormData)
    return axios.post("https://earth-api.vilvabusiness.com/api/blog", {
      data: bodyFormData,
      headers,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    })
    .then((res) => {
      console.log(res.data)
      if (res != typeof undefined && res.data != typeof undefined) {
        return res.data;
      }
    })
    .catch((error) => {
      return AxiosError(history, error);
    });
  
    // return await callSync(
    //   addon,
    //   hardreset,
    //   SK.BLOGPAGEAPI,
    //   AK.BLOGPAGEAPI,
    //   false,
    //   AK.BLOGPAGEAPI,
    //   mockup
    // );
  } catch (err) {
    return null;
  }
};

export const callColorList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.COLORCODESINFODATA,
      AK.COLORCODESJSONAPI,
      false,
      AK.MOCKUP_COLORCODESJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};

export const callProductsColorList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.PRODUCTSCOLORCODESINFODATA,
      AK.PRODUCTSCOLORCODESJSONAPI,
      false,
      AK.MOCKUP_PRODUCTSCOLORCODESJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};

export const callVersionMangerList = async (
  addon = null,
  hardreset = false,
  mockup = false
) => {
  try {
    return await callSync(
      addon,
      hardreset,
      SK.VERSIONMANAGERINFODATA,
      AK.VERSIONMANAGERJSONAPI,
      false,
      AK.MOCKUP_VERSIONMANAGERJSONAPI,
      mockup
    );
  } catch (err) {
    return null;
  }
};
