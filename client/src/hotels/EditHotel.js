/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { read } from "../actions/hotel";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

const EditHotel = ({ match }) => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    loadSellerHotel();
  }, []);

  const loadSellerHotel = async () => {
    const { data } = await read(match.params.hotelId);
    setHotel(data);
  };

  return (
    <>
      <div className="container-fluid p-5 bg-secondary text-center h1">
        Edit Page
      </div>
      <pre>{JSON.stringify(hotel, null, 4)}</pre>
    </>
  );
};

export default EditHotel;
