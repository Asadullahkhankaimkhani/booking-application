import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Badge } from "antd";
import moment from "moment";
import { getAccountBalance, currencyFromtter } from "../actions/stripe";

const { Meta } = Card;
const { Ribbon } = Badge;

const ConnectNav = () => {
  const [balance, setBalance] = useState(0);
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;

  useEffect(() => {
    getAccountBalance(auth.token)
      .then(({ data }) => {
        setBalance(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
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
            <Ribbon text="Avaliable" color="geekblue">
              <Card className="bg-light pt-1 ">
                {balance &&
                  balance.pending &&
                  balance.pending.map((ba, i) => (
                    <span key={i}>{currencyFromtter(ba)}</span>
                  ))}
              </Card>
            </Ribbon>
            <div>Payout Setting</div>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
