const panier = require("../controllers/panier");
const express = require("express");
const panierRouter = express.Router();

panierRouter.post("/", panier.handlePost);
panierRouter.get("/", panier.handleAll);
panierRouter.delete("/button/:id", panier.deleteOne);
panierRouter.delete("/fulldelete/:id/", panier.deleteAll);

module.exports = panierRouter;
