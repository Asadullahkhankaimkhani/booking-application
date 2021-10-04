/** @format */

import express from "express";

//controller
import { showMessage } from "../controllers/auth";

const router = express.Router();

router.get("/:message", showMessage);

module.exports = router;
