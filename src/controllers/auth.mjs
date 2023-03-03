"use strict";

import Debug from "debug";
const debug = Debug("main:auth/index.js");
import _ from "lodash";

export const authController = async (req, res, next) => {
  try {
    debug("auth api");
    res.sendStatus(201);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};
