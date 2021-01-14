const mysql = require("../config/mysql");

class Panier {
  static getOne = async (id) => {
    const sql = "SELECT * FROM produits_has_panier where id = ?  ";
    const result = await mysql.query(sql, id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static addOne = async (body) => {
    const result = await mysql.query(
      "INSERT INTO produits_has_panier set ?",
      body
    );
    return typeof result === "string" ? result : result[0];
  };

  static checkPresence = async (id) => {
    const sql = "SELECT * FROM produits_has_panier where produits_id = ?  ";
    const result = await mysql.query(sql, id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static deleteOne = async (id) => {
    const sql =
      "DELETE FROM produits_has_panier WHERE produits_has_panier.id = ?";
    const result = await mysql.query(sql, id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static deleteAll = async (id) => {
    const sql = "DELETE FROM produits_has_panier WHERE produits_id = ? ";
    const result = await mysql.query(sql, id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static updateQuantity = async (id, value) => {
    const sql =
      "UPDATE produits_has_panier SET ? WHERE produits_has_panier.id = ? ";
    const result = await mysql
      .query(sql, [value, id])
      .catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getAllpanier = async () => {
    const result = await mysql.query(
      "SELECT produits.id,produits.name,produits.photo,produits.description,produits.price,produits.gradient,produits.categories_id,produits_has_panier.quantity FROM produits join produits_has_panier on produits_id = produits.id WHERE produits_has_panier.panier_id = 1 "
    );
    return result[0];
  };
}

module.exports = Panier;
