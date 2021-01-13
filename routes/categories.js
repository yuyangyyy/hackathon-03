const catCtrl = require("../controllers/categories");
const express = require("express");
const categories = express.Router();

categories.get("/:name", catCtrl.getProductsFromCat);

module.exports = categories;
