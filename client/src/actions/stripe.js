import axios from "../components/axios";

export const createConnectAccount = async (token) =>
  await axios.post(
    "/create-connect-account",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAccountStatus = async (token) =>
  axios.post(
    "/get-account-status",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAccountBalance = async (token) =>
  axios.post(
    "/get-account-balance",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const currencyFromtter = (data) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  });
};
