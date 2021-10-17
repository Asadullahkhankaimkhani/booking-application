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
