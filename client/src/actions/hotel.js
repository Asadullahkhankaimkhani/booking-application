import axios from "../components/axios";

export const createHotel = async (token, data) =>
  await axios.post("/create-hotel", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allHotels = async () => await axios.get("/hotels");

export const diffDays = (from, to) => {
  const day = 24 * 60 * 60 * 1000;
  const start = new Date(from);
  const end = new Date(to);
  const difference = Math.round(Math.abs(start - end) / day);
  return difference;
};

export const sellerHotels = async (token) =>
  await axios.get("/seller-hotels", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteHotel = async (token, hotelId) =>
  await axios.delete(`/delete-hotel/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
