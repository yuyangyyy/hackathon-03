const imgCtrl = require("../controllers/images");
const express = require("express");
const images = express.Router();

images.get("/:name", imgCtrl.sendOne);

module.exports = images;
