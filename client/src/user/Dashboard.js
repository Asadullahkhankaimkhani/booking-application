import React, { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { userHotelBookings } from "../actions/hotel";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  const { auth } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    userHotelBookings(auth.token).then(({ data }) => setBookings(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Bookings</h2>
            {JSON.stringify(bookings, null, 4)}
            <pre></pre>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary">Browers Hotels</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
