"use strict"

import http from "http"
import Debug from "debug"
import express from "express"
import dotenv from "dotenv"
import { init } from "./loaders/index.js"

const app = express()
const debug = Debug("main:index.js")
const port = normalizePort(process.env.PORT || "3000")
const server = http.createServer(app)

function normalizePort(port) {
  let val = parseInt(port, 10)

  if (isNaN(val)) {
    return port
  }

  if (port >= 0) {
    return port
  }

  return false
}

async function startServer() {
  dotenv.config()

  await init(app)

  server.on("error", (err) => {
    if (err.syscall !== "listen") throw err
    debug(err.message)
    console.error(err.message)
    process.exit(1)
  })

  server.on("listening", () => {
    const address = server.address()
    const bind =
      typeof address === "string" ? `pipe ${address}` : `port ${address.port}`
    debug(` server started... on ${bind}`)
    console.log(` server started... on ${bind}`)
  })

  server.listen(port)
}

startServer()
