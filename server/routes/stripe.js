/** @format */

import express from "express";

//Middleware
import { requireSignin } from "../middlewares";

//controller
import {
  createConnectAccount,
  getAccountStatus,
  getAccountBalance,
} from "../controllers/stripe";

const router = express.Router();

// User Routes
router.post("/create-connect-account", requireSignin, createConnectAccount);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.post("/get-account-balance", requireSignin, getAccountBalance);

module.exports = router;
