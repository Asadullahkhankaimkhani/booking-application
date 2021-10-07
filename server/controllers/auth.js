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
