"use strict";

import express from "express";
import { authController } from "../controllers/auth.mjs";
import { checkAPI } from "../validators/index.mjs";

const router = express.Router();

export default (app) => {
  app.use("/auth", router);

  router.post("/", checkAPI, authController);

  return router;
};
