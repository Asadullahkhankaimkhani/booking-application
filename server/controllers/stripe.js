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

  res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
};
// update payment schedule (optional default is 2 days)
const updateDelayDays = async (accountId) => {
  const account = await stripe.accounts.update(accountId, {
    settings: {
      payouts: {
        schedule: {
          delay_days: 7,
        },
      },
    },
  });
  return account;
};

export const getAccountStatus = async (req, res) => {
  const user = await User.findById(req.user._id).exec();
  const account = await stripe.accounts.retrieve(user.stripe_account_id);
  const updatedAccount = await updateDelayDays(account.id);

  // if (updatedAccount.charges_enabled === false || payouts_enabled === false) {
  //   updatedAccount.charges_enabled = true;
  //   payouts_enabled = true;
  // }

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      stripe_seller: updatedAccount,
    },
    { new: true }
  )
    .select(`-password`)
    .exec();

  res.json(updatedUser);
};

export const getAccountBalance = async (req, res) => {
  const user = await User.findById(req.user._id).exec();

  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    });
    res.json(balance);
  } catch (err) {
    console.log(err);
  }
};

export const payoutSetting = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();

    const loginLink = await stripe.accounts.createLoginLink(
      user.stripe_account_id,
      { redirect_url: process.env.STRIPE_REDIRECT_LOGIN_LINK }
    );

    res.json(loginLink);
  } catch (err) {
    console.log("Payout Err", err);
  }
};

export const stripeSessionId = async (req, res) => {
  //console.log(req.body.hotelId);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: "Hotel booking",
        amount: 1000,
        currency: "usd",
        quantity: 1,
      },
    ],
    payment_intent_data: {
      application_fee_amount: 123,
      transfer_data: {
        destination: "acct_1Jt5jqPX8QgHT7nG",
      },
    },
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
  });

  console.log("SESSION ===>", session);
};
