import React, { useEffect, useState } from "react";
import { read } from "../actions/hotel";

const ViewHotel = ({ match }) => {
  const [hotel, setHotel] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    loadHotel();
  }, []);

  const loadHotel = async () => {
    const { data } = await read(match.params.hotelId);
    setHotel(data);
    setImage(`${process.env.REACT_APP_API}/hotel/image/${data._id}`);
  };

  return (
    <>
      <div className="container-fluid p-5 bg-secondary text-center ">
        <h1 className="white">{hotel.title}</h1>
      </div>
    </>
  );
};

export default ViewHotel;
