/** @format */

import express from "express";

//controller
import { register } from "../controllers/auth";

const router = express.Router();

// User Routes
router.post("/register", register);

module.exports = router;
