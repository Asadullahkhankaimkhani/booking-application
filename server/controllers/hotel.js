import Hotel from "../model/hotel";
import fs from "fs";

export const create = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let hotel = new Hotel(fields);
    hotel.postedBy = req.user._id;

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

export const image = async (req, res) => {
  const hotel = await Hotel.findById(req.params.hotelId).exec();

  if (hotel && hotel.image && hotel.image.data !== null) {
    res.set("Content-Type", hotel.image.contentType);
    return res.send(hotel.image.data);
  }
};

export const sellerHotel = async (req, res) => {
  const all = await Hotel.find({ postedBy: req.user._id })
    .select("-image.data")
    .populate("postedBy", "_id name")
    .exec();

  res.send(all);
};

export const remove = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.hotelId).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.send("Server Err ===> ", err);
  }
};

export const read = async (req, res) => {
  const hotel = await Hotel.findById(req.params.hotelId)
    .select("-image.data")
    .exec();

  res.json(hotel);
};

export const update = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let data = { ...fields };

    if (files.image) {
      let image = {};
      image.data = fs.readFileSync(files.image.path);
      image.contentType = files.image.type;
      data.image = image;

      let updated = await Hotel.findOneAndUpdate(req.params.hotelId, data, {
        new: true,
      }).select("-image.data");

      res.json(updated);
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("Update Hotel is Failed Please Try Again");
  }
};
