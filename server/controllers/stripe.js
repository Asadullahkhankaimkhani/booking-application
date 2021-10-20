import User from "../model/User";
import Stripe from "stripe";
import queryString from "query-string";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  // Find the User from Db
  const user = await User.findById(req.user._id).exec();

  // if User dont have stripe_account_seller_id yet, create now
  if (!user.stripe_account_id);
  {
    const account = await stripe.accounts.create({
      type: "express",
    });
    user.stripe_account_id = account.id;
    user.save();
  }

  // create  account link based on account id ( for frontend to complete onboarding)
  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL,
    type: "account_onboarding",
  });

  // prefill any info such as email

  accountLink = Object.assign(accountLink, {
    "stripe_user[email]": user.email || undefined,
  });
  console.log(`${accountLink.url}?${queryString.stringify(accountLink)}`);

  res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);

  // update payment schedule (optional default is 2 days)
};
