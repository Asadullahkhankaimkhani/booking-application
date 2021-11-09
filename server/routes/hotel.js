import express, { Router } from "express";
import formidable from "express-formidable";

const router = express.Router();

//controller
import {
  create,
  hotels,
  image,
  sellerHotel,
  remove,
  read,
} from "../controllers/hotel";

// Middleware
import { requireSignin, hotelOwner } from "../middlewares";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignin, sellerHotel);
router.delete("/delete-hotel/:hotelId", requireSignin, hotelOwner, remove);
router.get("/hotel/:hotelId", read);

module.exports = router;
