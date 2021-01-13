const model = require("../models/produits");

class Produits {
  static getOne = async (req, res, next) => {
    const oneProduct = await model.getOne(req.params.name);
    res.status(200).send(oneProduct);
  };

  static getAll = async (req, res, next) => {
    const allProducts = await model.getAll();
    res.status(200).json(allProducts);
  };
}

module.exports = Produits;
