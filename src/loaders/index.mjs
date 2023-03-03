"use strict";

import Debug from "debug";
const debug = Debug("main:loader/index.mjs");
// import { connect } from "./database.js";
import setExpress from "./express.mjs";

export const init = async (app) => {
  //   await connect();
  //   debug("DataBase loaded and connected");

  setExpress(app);
  debug("express loaded");
};
