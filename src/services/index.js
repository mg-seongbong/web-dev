"use strict";

export const throwError = (msg, status = 500) => {
  let error = new Error(msg);
  error.status = status;
  throw error;
};

export const sum = (a, b) => {
  return a + b;
};
