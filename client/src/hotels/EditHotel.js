/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { read } from "../actions/hotel";
import { useSelector } from "react-redux";
//import { toast } from "react-toastify";

const EditHotel = ({ match }) => {
  const [values, setValues] = useState({
    title: "",
    content: "",
    location: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const { auth } = useSelector((state) => ({ ...state }));

  const { token } = auth;

  const { title, content, image, location, price, from, to, bed } = values;

  useEffect(() => {
    loadSellerHotel();
  }, []);

  const loadSellerHotel = async () => {
    const { data } = await read(match.params.hotelId);
    setValues({ ...values, ...data });
    setPreview(`${process.env.REACT_APP_API}/hotel/image/${data._id}`);
  };

  const handleSubmit = async (e) => {
    //
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-fluid p-5 bg-secondary text-center h1">
        Edit Hotel
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">Show Form</div>
          <div className="col-md-2">
            <img src={preview} alt="IMG" className="img img-fluid m-2" />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHotel;
