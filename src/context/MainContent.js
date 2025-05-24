// import appLogo from "../../assets/app/appLogo.jpg";
import appLogoTrans from "../assets/app/appLogo.png";
import appFavicon from "../assets/app/appFavicon.png";
import { getCurrentUser } from "../utils/additonalFunc";
import axios from "axios";
export const MainContent = {
  appName: "Prestorix",
  appLogo: appLogoTrans,
  appLogoTrans: appLogoTrans,
  appFavicon: appFavicon,
  appURL: "",
  contactNo: "+9876324862552",
  email: "info@example.com",
  address: "India",
};

export const backendConfig = {
  // base: "http://192.168.1.7:5121/api",
  // origin: "http://192.168.1.7:5121",
  base: "https://api.prestorix.com/api",
  origin: "https://api.prestorix.com",
  // base: "https://w8vq2gnr-5121.inc1.devtunnels.ms/api",
  // origin: "https://w8vq2gnr-5121.inc1.devtunnels.ms/",
};


const user = getCurrentUser();
const token = user?.token;

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const marketApi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
