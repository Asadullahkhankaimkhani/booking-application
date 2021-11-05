import React from "react";
import { currencyFromtter } from "../../actions/stripe";

const SmallCard = ({ h }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={"http://via.placeholder.com/900x500.png?text=Booking"}
            alt="defaultimage"
            className="card-image img img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              {h.title}{" "}
              <span className="text-primary">
                {currencyFromtter({
                  amount: h.price,
                  currency: "usd",
                })}
              </span>
            </h3>
            <p className="alert alert-info">{h.location}</p>
            <p className="cart-text">{`${h.content.substring(0, 200)}...`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
