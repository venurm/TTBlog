import { AK } from "../constants/AppKeys";
import axios from "axios";
import { validateToken } from "./sessionexpiry";

export const AxiosIPINFO = async () => {
  return axios.get(AK.IPINFOURL);
};

export const AxiosPost = async (apiname, payload, checktoken = true) => {
  let token = checktoken ? validateToken() : null;

  const headers = {
    accesskey: AK.ACCESSKEY,
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return axios.post(AK.APIURL + apiname, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};

export const AxiosDirectPost = async (apiurl, payload, checktoken = true) => {
  const headers = {
    accesskey: AK.ACCESSKEY,
    "Content-Type": "application/json",
  };

  return axios.post(apiurl, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};

export const AxiosInstamojoDirectPost = async (
  apiurl,
  payload,
  checktoken = true
) => {
  const headers = {
    "X-Api-Key": "test_a15356a96ae27ef4d454f525d56",
    "X-Auth-Token": "test_a3ea1ff9524f246b516b0a9ea36",
  };

  return axios.post(apiurl, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};

export const AxiosGET = async (
  apiname,
  payload,
  history,
  checktoken = true
) => {
  const headers = {
    accesskey: AK.ACCESSKEY,
    "Content-Type": "application/json",
  };

  return axios.get(AK.APIURL + apiname, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};

export const AxiosMockupGET = async (
  apiname,
  payload,
  history,
  checktoken = true
) => {
  const headers = {
    accesskey: AK.ACCESSKEY,
    "Content-Type": "application/json",
  };

  return axios.get(AK.MOCKUPSURL + apiname, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};

export const ReddisAxiosGET = async (
  apiname,
  payload,
  history,
  checktoken = true
) => {
  const headers = {
    accesskey: AK.ACCESSKEY,
    "Content-Type": "application/json",
  };

  return axios.get(AK.REDDISAPIURL + apiname, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};

export const AxiosFilePost = async (
  apiname,
  payload,
  history,
  checktoken = true
) => {
  let token = checktoken ? validateToken(history) : null;
  const headers = {
    accesskey: AK.ACCESSKEY,
    accesstoken: token,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  };

  return await axios.post(AK.APIURL + apiname, payload, {
    headers,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  // .then((res) => {
  //   if (res != typeof undefined && res.data != typeof undefined) {
  //     return res.data;
  //   }
  // })
  // .catch((error) => {
  //   return AxiosError(history, error);
  // });
};
