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
    console.log(data);
  };

  return (
    <>
      <div className="container-fluid p-5 bg-secondary text-center ">
        <h1 className="white">Dummy Text</h1>
      </div>
    </>
  );
};

export default ViewHotel;
