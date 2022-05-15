import Cookies from "js-cookie";

export const getCookies = (key) => {
  return Cookies.get(key);
};

export const setCookies = (key, value) => {
  return Cookies.set(key, value);
};

export const removeCookies = (key) => {
  Cookies.remove(key);
};
