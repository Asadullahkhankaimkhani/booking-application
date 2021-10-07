/** @format */

import express from "express";

//controller
import { showMessage, register } from "../controllers/auth";

const router = express.Router();

// test router
router.get("/:message", showMessage);

// User Routes
router.post("/register", register);

module.exports = router;
