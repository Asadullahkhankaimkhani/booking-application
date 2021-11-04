import Hotel from "../model/hotel";
import fs from "fs";

export const create = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let hotel = new Hotel(fields);
    if (files.image) {
      hotel.image.data = fs.readFileSync(files.image.path);
      hotel.image.contentType = files.image.type;
    }
    try {
      const result = await hotel.save();
      res.json(result);
    } catch (err) {
      res.status(400).send("Error Saving");
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const hotels = async (req, res) => {
  const all = await Hotel.find({})
    .limit(24)
    .select("-image.data")
    .populate("postedBy", "_id name")
    .exec();

  res.json(all);
};
