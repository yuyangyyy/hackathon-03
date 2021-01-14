const prodCtrl = require('../controllers/produits');
const express = require('express');
const produits = express.Router();

produits.get('/:name', prodCtrl.getOne);
produits.get('/', prodCtrl.getAll);

module.exports = produits;
