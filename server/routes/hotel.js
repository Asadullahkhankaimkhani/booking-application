import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//controller
import { create, hotels, image } from "../controllers/hotel";

// Middleware
import { requireSignin } from "../middlewares";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);

module.exports = router;
