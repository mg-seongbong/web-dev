"use strict";

import express from "express";
import { authController } from "../controllers/auth.js";
import { checkAPI } from "../validators/index.js";

const router = express.Router();

export default (app) => {
  app.use("/auth", router);

  router.post("/", checkAPI, authController);

  return router;
};
