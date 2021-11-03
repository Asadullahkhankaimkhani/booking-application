import Hotel from "../model/hotel";
import fs from "fs";

export const create = async (req, res) => {
  // console.log("Fields", req.fields);
  // console.log(req.files);

  try {
    let fields = req.fields;
    let files = req.files;

    let hotel = new Hotel(fields);
    if (files.image) {
      hotel.image.data = fs.readFileSync(files.image.path);
      hotel.image.contentType = files.image.type;
    }

    const result = await hotel.save();

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};
