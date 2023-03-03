"use strict";

import Debug from "debug";
const debug = Debug("main:routes/index.js");
import { Router } from "express";
import auth from "./auth.mjs";

export default () => {
  try {
    const app = Router();

    app.get("/", (req, res, next) => {
      debug("==> default api");
      res.sendStatus(200);
    });

    auth(app);

    return app;
  } catch (err) {
    console.error(err);
  }
};
