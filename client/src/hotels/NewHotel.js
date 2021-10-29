import React, { useState } from "react";

const NewHotel = () => {
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

  const { title, content, location, image, price, from, to, bed } = values;

  const handleSubmit = (e) => {
    //
  };

  const handleImageChange = () => {};

  const showForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left">
          Image
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>
      </div>
    </form>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Hotels</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <br />
            {showForm()}
          </div>
          <div className="col-md-2">Image</div>
        </div>
      </div>
    </>
  );
};

export default NewHotel;
