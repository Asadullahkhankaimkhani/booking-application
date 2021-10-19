/** @format */

import express from "express";

//Middleware
import { requireSignin } from "../middlewares";

//controller
import { createConnectAccount } from "../controllers/stripe";

const router = express.Router();

// User Routes
router.post("/create-connect-account", requireSignin, createConnectAccount);

module.exports = router;
