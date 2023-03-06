"use strict";

import Debug from "debug";
const debug = Debug("main:routes/index.js");
import { Router } from "express";
import auth from "./auth.js";

export default () => {
  try {
    const app = Router();

    auth(app);

    return app;
  } catch (err) {
    console.error(err);
  }
};
