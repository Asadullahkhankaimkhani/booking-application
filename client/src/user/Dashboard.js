import React from "react";
import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">Show Hotels and Other Stuff</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
