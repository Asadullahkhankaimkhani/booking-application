import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//controller
import { create, hotels } from "../controllers/hotel";

// Middleware
import { requireSignin } from "../middlewares";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);

module.exports = router;
