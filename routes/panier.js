const panier = require('../controllers/panier');
const express = require('express');
const panierRouter = express.Router();

panierRouter.get('/:id', panier.getOne);
panierRouter.post('/', panier.handlePost);
panierRouter.get('/', panier.handleAll);

module.exports = panierRouter;
