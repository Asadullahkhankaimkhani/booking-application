import React from "react";
import DashboardNav from "../components/DashboardNav";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Hotels</h2>
          </div>
          <div className="col-md-2">
            <Link to="/hotels/new">
              <button className="btn btn-primary">+ Add Hotel</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
