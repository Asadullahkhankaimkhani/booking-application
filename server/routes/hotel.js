import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//controller
import { create } from "../controllers/hotel";

// Middleware
import { requireSignin } from "../middlewares";

router.post("/create-hotel", requireSignin, formidable(), create);

module.exports = router;
