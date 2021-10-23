/** @format */

import express from "express";

//Middleware
import { requireSignin } from "../middlewares";

//controller
import { createConnectAccount, getAccountStatus } from "../controllers/stripe";

const router = express.Router();

// User Routes
router.post("/create-connect-account", requireSignin, createConnectAccount);
router.post("/get-account-status", requireSignin, getAccountStatus);

module.exports = router;
