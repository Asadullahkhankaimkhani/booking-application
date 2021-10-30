import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";

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
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const { title, content, location, price, from, to, bed } = values;

  const handleSubmit = (e) => {
    //
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
          type="text"
          onChange={handleChange}
          name="location"
          value={location}
          className="form-control mb-2"
          placeholder="Location"
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
      <DatePicker
        placeholder="From Date"
        className="form-control m-2"
        onChange={(date, dateString) =>
          setValues({ ...values, from: dateString })
        }
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
      />
      <DatePicker
        placeholder="To Date"
        className="form-control m-2"
        onChange={(date, dateString) =>
          setValues({ ...values, to: dateString })
        }
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
      />
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center ">
        <h2 className="white">Add Hotels</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <br />
            {showForm()}
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHotel;
