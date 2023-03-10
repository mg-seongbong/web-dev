"use strict"

import express from "express"
import path from "path"
import { errors } from "celebrate"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import compression from "compression"

import router from "../routes/index.js"

import Debug from "debug"

const debug = Debug("main:express/express.js")
const __dirname = path.resolve()

export default (app) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(compression())
  app.use(express.static(path.join(__dirname, "src/views")))
  app.use("/", router())
  app.use(errors())
  app.use((req, res, next) => {
    res.sendStatus(404)
  })

  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error")
  })
}
