import { SK } from "../constants/StorageKeys";

export const handleGetInfoStorageItems = (keyvalue) => {
  const items = localStorage.getItem(keyvalue)
    ? JSON.parse(localStorage.getItem(keyvalue))
    : null;
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleSetInfoStorageItems = (keyvalue, infoData) => {
  localStorage.setItem(keyvalue, JSON.stringify(infoData));
};

export const handleSetCategoryInfoStorageItems = (categoryinfoData) => {
  localStorage.setItem(SK.CATEGORYINFODATA, JSON.stringify(categoryinfoData));
};

export const handleGetCategoryInfoStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.CATEGORYINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleSetProductsInfoStorageItems = (productsinfoData) => {
  localStorage.setItem(SK.PRODUCTSINFODATA, JSON.stringify(productsinfoData));
};

export const handleGetProductsInfoStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.PRODUCTSINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleSetColorCodesInfoStorageItems = (colorcodesinfoData) => {
  localStorage.setItem(
    SK.COLORCODESINFODATA,
    JSON.stringify(colorcodesinfoData)
  );
};

export const handleGetColorCodeStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.COLORCODESINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleSetSizeInfoStorageItems = (sizeinfoData) => {
  localStorage.setItem(SK.SIZEINFODATA, JSON.stringify(sizeinfoData));
};

export const handleSetProductsSizeInfoStorageItems = (productssizeinfoData) => {
  localStorage.setItem(
    SK.PRODUCTSSIZEINFODATA,
    JSON.stringify(productssizeinfoData)
  );
};

export const handleSetProductsColorCodesInfoStorageItems = (
  productscolorcodesinfoData
) => {
  localStorage.setItem(
    SK.PRODUCTSCOLORCODESINFODATA,
    JSON.stringify(productscolorcodesinfoData)
  );
};

export const handleGetProductsSizeStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.PRODUCTSSIZEINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleGetProductsColorCodesStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.PRODUCTSCOLORCODESINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleGetSizeStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.SIZEINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};

export const handleSetVersionManagerStorageItems = (versionmanagerinfoData) => {
  localStorage.setItem(
    SK.VERSIONMANAGERINFODATA,
    JSON.stringify(versionmanagerinfoData)
  );
};

export const handleGetVersionManagerStorageItems = () => {
  const items = JSON.parse(localStorage.getItem(SK.VERSIONMANAGERINFODATA));
  if (items === null) {
    return null;
  } else {
    return items;
  }
};
