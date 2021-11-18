import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { stripeSuccessRequest } from "../actions/stripe";

const StripeSuccess = ({ match, history }) => {
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    stripeSuccessRequest(token, match.params.hotelId).then(({ data }) => {
      if (data.success) {
        history.push("/dashboard");
      } else {
        history.push("/stripe/cancel");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.hotelId]);

  return (
    <div className="container">
      <div className="col">
        <h1 className="text-center p-5">
          Payment Successfully{match.params.hotelId}
        </h1>
      </div>
    </div>
  );
};

export default StripeSuccess;
