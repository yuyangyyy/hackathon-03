const mysql = require("../config/mysql");

class Categories {
  static getProductsFromCat = async (id) => {
    const sql = "SELECT * FROM HACKATHON.produits WHERE categories_id = ? ";
    const result = await mysql.query(sql, id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getOneId = async (name) => {
    const sql = "SELECT * FROM categories WHERE name = ?";
    const result = await mysql.query(sql, name).catch((err) => err.message);  
    return typeof result === "string" ? result : result[0];
  };
}

module.exports = Categories;
