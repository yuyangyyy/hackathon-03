const model = require("../models/panier");

class Panier {
  static handlePost = async (req, res) => {
    const checkQuantity = await model.checkPresence(req.body.produits_id);

    let newQuant = 0;
    let shopId = 0;
    if (checkQuantity.length > 0) {
      newQuant = checkQuantity[0].quantity + 1;
      shopId = checkQuantity[0].id;
    } else {
      const data = await model.addOne(req.body);
      shopId = data.insertId;
      const newBuy = await model.getOne(shopId);
      newQuant = newBuy[0].quantity + 1;
    }

    const updatedQuantity = await model.updateQuantity(shopId, {
      quantity: newQuant,
    });

    const updatedShopList = await model.getOne(shopId);

    res.status(200).json(...updatedShopList);
  };

  static deleteOne = async (req, res, next) => {
    const checkPresence = await model.checkPresence(req.params.id);

    if (checkPresence.length > 0) {
      if (checkPresence[0].quantity > 1) {
        checkPresence[0].quantity -= 1;
        const updatedQuantity = await model.updateQuantity(
          checkPresence[0].id,
          {
            quantity: checkPresence[0].quantity,
          }
        );
        const newQuantity = await model.getOne(checkPresence[0].id);
        res.status(200).json(newQuantity[0]);
      } else {
        const result = await model.deleteOne(checkPresence[0].id);
        res.sendStatus(209);
      }
    } else {
      res.sendStatus(200);
    }
  };

  static deleteAll = async (req, res, next) => {
    const deleteBuy = await model.deleteAll(req.params.id);
    res.sendStatus(209);
  };

  static handleAll = async (req, res) => {
    const data = await model.getAllpanier();
    res.status(200).json(data);
  };

  static getOneByItemId = async (req, res, next) => {
    const oneItem = await model.getOneByItemId(req.params.id);
    res.status(200).json(oneItem[0]);
  };
}
module.exports = Panier;
