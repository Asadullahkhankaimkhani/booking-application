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

  const handleChange = () => {};

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
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={title}
          className="form-control mb-2"
          placeholder="Title"
        />
        <textarea
          type="text"
          onChange={handleChange}
          name="content"
          value={content}
          className="form-control mb-2"
          placeholder="Content"
        />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          value={price}
          className="form-control mb-2"
          placeholder="Price"
        />
        <input
          type="number"
          onChange={handleChange}
          name="bed"
          value={bed}
          className="form-control mb-2"
          placeholder="Number of Bed"
        />
      </div>
      <button className="btn btn-outline-primary m-2">Save</button>
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
          <div className="col-md-2">
            Image
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHotel;
