const model = require("../models/categories");

class Categories {
  static getProductsFromCat = async (req, res, next) => {
    const catId = await model.getOneId(req.params.name);
    const productsFromId = await model.getProductsFromCat(catId[0].id);
    res.status(200).json(productsFromId);
  };
}

module.exports = Categories;
