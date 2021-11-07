import React, { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined, LoadingOutlined } from "@ant-design/icons";
import { createConnectAccount } from "../actions/stripe";
import { toast } from "react-toastify";
import { sellerHotels } from "../actions/hotel";

const SellerDashboard = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllSellerHotels();
  }, []);

  const loadAllSellerHotels = async () => {
    const { data } = await sellerHotels(auth.token);
    setHotels(data);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const { data } = await createConnectAccount(auth.token);
      window.location.href = data;
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Stripe Onboarding Failed Please Try Again");
      setLoading(false);
    }
  };

  const connected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <h2>Your Hotels</h2>
          {JSON.stringify(hotels, null, 4)}
        </div>
        <div className="col-md-2">
          <Link to="/hotels/new">
            <button className="btn btn-primary">+ Add Hotel</button>
          </Link>
        </div>
      </div>
    </div>
  );

  const notConnected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <div className="p-5 pointer">
            <HomeOutlined className="h1" />
            <h4>Setup Payout to post Hotel Room</h4>
            <p className="lead">
              Booking partners with stripe to tranfer earnings to your account
            </p>
            <button
              disabled={loading}
              onClick={handleClick}
              className="btn btn-primary mb-3"
            >
              {loading ? <LoadingOutlined spin /> : "Setup Payment"}
            </button>
            <p className="text-muted">
              <small>
                You will be redirected to Stripe to complete the onboarding
                process
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      {auth &&
      auth.user &&
      auth.token &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()}
    </>
  );
};

export default SellerDashboard;
