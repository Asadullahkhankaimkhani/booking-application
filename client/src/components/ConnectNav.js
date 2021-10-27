import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";
import { getAccountBalance } from "../actions/stripe";

const { Meta } = Card;

const ConnectNav = () => {
  const [balance, setBalance] = useState(0);
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;

  const { pending } = balance;

  useEffect(() => {
    getAccountBalance(auth.token).then(({ data }) => {
      setBalance(data);
      console.log(data);
    });
  }, [auth.token]);

  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={<Avatar>{user.name[0]}</Avatar>}
          title={user.name}
          description={`Joined ${moment(user.createdAt).fromNow()}`}
        />
      </Card>
      {auth &&
        auth.user &&
        auth.user.stripe_seller &&
        auth.user.stripe_seller.charges_enabled && (
          <>
            <div>
              Pending Balance
              {pending.map((p) => (
                <p>{p.amount}</p>
              ))}
            </div>
            <div>Payout Setting</div>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
