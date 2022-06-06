const express = require("express");

const userController = require("./controllers/user.control")

const app = express();

app.use("/users", userController)

module.exports = app;