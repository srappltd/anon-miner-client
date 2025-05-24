import { Axios } from "../context/MainContent";

const userApi = "/user";
const walletApi = "/wallet";

export async function getUserInfo() {
  const response = await Axios.get(`${userApi}/get-user`);
  return response?.data;
}
export async function getDirectUsers() {
  const response = await Axios.get(`${userApi}/get-direct-users`);
  return response?.data;
}
export async function getWithdrawalHistory() {
  const response = await Axios.get(`${userApi}/withdrawal-history`);
  return response?.data;
}
export async function getWalletBalance() {
  const response = await Axios.get(`${walletApi}/balance`);
  return response?.data;
}

export async function updateUserProfile(payload) {
  const response = await Axios.post(`${userApi}/update-profile`, payload);
  return response?.data;
}

  export async function getReferralIncomHistory() {
    const response = await Axios.get(`${userApi}/get-refer-income-history`);
    return response?.data;
  }
  export async function getMinersIncomHistory() {
    const response = await Axios.get(`${userApi}/get-miner-income-history`);
    return response?.data;
  }