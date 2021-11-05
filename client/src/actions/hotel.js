import axios from "../components/axios";

export const createHotel = async (token, data) =>
  await axios.post("/create-hotel", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allHotels = async () => await axios.get("/hotels");
