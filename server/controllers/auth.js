/** @format */
import User from "../model/User";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.status(400).send("Name is Required");
  if (!password) return res.status(400).send("Password is Required");
  if (password.length < 6)
    return res.status(400).send("Password Should be Greater than 6 Character");

  const existedUser = await User.findOne({ email }).exec();

  if (existedUser) return res.status(400).send("Email Already Taken");

  const user = new User(req.body);

  try {
    await user.save();
    console.log("User is Registered");
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error Try Again");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Check that user with that email is exist or not
  try {
    let user = await User.findOne({ email }).exec();

    if (!user)
      res.status(400).send("No User Found on This Email Please Sign Up");

    user.camparePassowrd(password, (err, match) => {
      if (!match || err) return res.status(400).send("Wrong Password");
    });
  } catch (err) {
    console.log("ERR", err);
    res.status(400).send("Login Failed Try Again");
  }
};
