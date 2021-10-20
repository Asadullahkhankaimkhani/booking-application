import User from "../model/User";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  // Find the User from Db
  const user = await User.findById(req.user._id).exec();
  console.log(user);
  // if User dont have stripe_account_seller_id yet, create now
  const account = await stripe.accounts.create({
    type: "express",
  });
  console.log(account);
  // create  account link based on account id ( for frontend to complete onboarding)
  // update payment schedule (optional default is 2 days)
};
