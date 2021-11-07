import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//controller
import { create, hotels, image, sellerHotel } from "../controllers/hotel";

// Middleware
import { requireSignin } from "../middlewares";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignin, sellerHotel);

module.exports = router;
