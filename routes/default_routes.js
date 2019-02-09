const express = require("express");
const routes = express.Router();
const defaultController = require("../controllers/default_controller");

routes.route("/")
.get( defaultController.getIndex);

module.exports = routes;