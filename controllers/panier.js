const model = require('../models/panier');
const panier = require('../models/panier');

class Panier {
  static getOne = async (req, res) => {
    const data = await model.findOne(req.params.id);
    res.status(200).json(data);
  };

  static handlePost = async (req, res) => {
    const data = await model.addOne(req.body);

    res.status(201).json(data);
  };

  static handleAll = async (req, res) => {
    const data = await model.getAllpanier();
    res.status(200).json(data);
  };
}
module.exports = Panier;
