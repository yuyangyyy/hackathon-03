const model = require("../models/categories");

class Categories {
  static getProductsFromCat = async (req, res, next) => {
    if (req.params) {
      const catId = await model.getOneId(req.params.name);  
      if (catId[0]) {
        const productsFromId = await model.getProductsFromCat(catId[0].id);
        res.status(200).json(productsFromId);
      }
    }
  };
}

module.exports = Categories;
