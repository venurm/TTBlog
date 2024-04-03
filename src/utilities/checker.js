export const checkerValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return false;
  } else {
    return true;
  }
};

export const lowercasenosp = (value) => {
  if (value === null || value === undefined || value === "") {
    return "";
  } else {
    return value.toString().replace(/\s/g, "").toLowerCase();
  }
};

export const defaulttextremove = (value) => {
  if (value === null || value === undefined || value === "") {
    return "";
  } else {
    return value.toString().replace(/\s/g, "").toLowerCase().replace("-tshirts-", "");
  }
};

export const removeDuplicates = (arr) => {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr))
      acc.push(curr);
    return acc;
  }, []);
  return unique;
}



export const checkerString = (value) => {
  if (value === null || value === undefined || value === "") {
    return false;
  } else {
    return true;
  }
};

export const checkerStringLen = (value, max) => {
  if (value === null || value === undefined || value === "") {
    return false;
  } else {
    if (value.length === max) return true;
    else return false;
  }
};

export const checkerArray = (value, gesize = 0) => {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    !Array.isArray(value)
  ) {
    return false;
  } else {
    if (Array.isArray(value)) {
      if (gesize === 0) return true;
      if (value.length >= gesize) return true;
    }
    return false;
  }
};

export const checkerObj = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    Object.keys(value).length === 0
  ) {
    return false;
  } else {
    if (Object.keys(userObj.user.userData).length > 0) return true;
    return false;
  }
};
