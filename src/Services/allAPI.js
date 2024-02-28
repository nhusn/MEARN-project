import { commonAPI } from "./commonAPI";
import { server_URL } from "./serverURL";

const appenHeader = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    const headers = {
      authorization: `Bearer ${token}`,
    };
    return headers;
  } else {
    return "";
  }
};

export const registerAPI = async (user) => {
  return await commonAPI("POST", `${server_URL}/user/register`, user);
};

export const loginAPI = async (user) => {
  return await commonAPI("POST", `${server_URL}/user/login`, user);
};

export const emailVerifyAPI = async (id, token) => {
  return await commonAPI("GET", `${server_URL}/${id}/verify/${token}`, "", "");
};

export const RequestServiceAPI = async (body) => {
  return await commonAPI("POST", `${server_URL}/services/pending/add`, body, appenHeader());
};

export const allPendingServiceAPI = async () => {
  return await commonAPI("GET", `${server_URL}/services/pending/all`, "");
};

export const callRequestAPI = async (request) => {
  return await commonAPI("POST", `${server_URL}/services/call-request`, request);
};

export const getAllCallRequestAPI = async () => {
  return await commonAPI("GET", `${server_URL}/services/all-call-request`, "");
};

export const addOngoingAPI = async (details) => {
  return await commonAPI("POST", `${server_URL}/service/ongoing/add`, details);
};

export const removePendingServiceAPI = async (id) => {
  return await commonAPI("DELETE", `${server_URL}/services/pending/remove`, { id });
};

export const removeCallRequestAPI = async (id) => {
  return await commonAPI("DELETE", `${server_URL}/services/call/remove/${id}`, {});
};

export const getAllOngoingServiceAPI = async () => {
  return await commonAPI("GET", `${server_URL}/services/ongoing/all`, "");
};

export const updateOngoingServiceAPI = async (id, value) => {
  return await commonAPI("POST", `${server_URL}/services/ongoing/update`, { id, value });
};

export const updateComplaintDescriptionAPI = async (id, description) => {
  return await commonAPI("POST", `${server_URL}/ongoing/description`, { id, description });
};

export const addToHistoryAPI = async (customerDetails, allHistory, _id) => {
  return await commonAPI("POST", `${server_URL}/history/bill`, { customerDetails, allHistory, _id });
};

export const getAllHistoryAPI = async (email) => {
  return await commonAPI("POST", `${server_URL}/all-history`, { email }, appenHeader());
};

export const getOneHistoryAPI = async (id) => {
  return await commonAPI("POST", `${server_URL}/history`, { id }, appenHeader());
};

export const updateUserAPI = async (userDetails) => {
  return await commonAPI("POST", `${server_URL}/user/update`, userDetails, appenHeader());
};

export const forgotEmailVerifyAPI = async (id, token) => {
  return await commonAPI("GET", `${server_URL}/password/${id}/forgot/verify/${token}`);
};

export const forgotPassCheckAPI = async (email) => {
  return await commonAPI("POST",`${server_URL}/password/forgot`,{email})
}

export const updatePasswordAPI = async (token,newPassword) => {
  return await commonAPI("POST",`${server_URL}/password/update`,{token,newPassword})
}
