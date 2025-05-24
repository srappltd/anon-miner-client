import { Axios } from "../constants/contents/MainContent";

const adminApi = "/admin";
export async function getAdminInfo() {
  const response = await Axios.get(`${adminApi}/get-admin`);
  return response?.data;
}
export async function getIncomeHistory() {
  const response = await Axios.get(`${adminApi}/get-dashboard-data`);
  return response?.data;
}

export async function getAllUserList() {
  const response = await Axios.get(`${adminApi}/get-all-users`);
  return response?.data;
}
export async function userStatusToggle(id) {
  const response = await Axios.post(`${adminApi}/user-block/${id}`);
  return response?.data;
}

export async function getMinerPurchaseHistory() {
    const response = await Axios.get(`${adminApi}/get-purchased-miners-history`);
    return response?.data;
  }

export async function getAdminDepositFundHistory() {
  const response = await Axios.get(`${adminApi}/get-fund-deposit-history`);
  return response?.data;
}
export async function getAdminWithdrawalHistory() {
  const response = await Axios.get(`${adminApi}/get-withdrawal-history`);
  return response?.data;
}
export async function getAllUserIDNameList() {
  const response = await Axios.get(`${adminApi}/all-user-id-name`);
  return response?.data;
}
export async function getFilteredMinerByUserId(id) {
  const response = await Axios.get(`${adminApi}/get-user-purchased-miner/${id}`);
  return response?.data;
}
export async function getFilteredHoldingsByUserId(id) {
  const response = await Axios.get(`${adminApi}/get-user-holdings-trading/${id}`);
  return response?.data;
}


  export async function getReferralIncomHistory() {
    const response = await Axios.get(`${adminApi}/get-referral-income-history`);
    return response?.data;
  }
  export async function getMinersIncomHistory() {
    const response = await Axios.get(`${adminApi}/get-miner-income-history`);
    return response?.data;
  }