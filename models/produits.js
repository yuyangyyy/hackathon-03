const mysql = require("../config/mysql");

class Produits {
  static getOne = async (name) => {
    const sql = "SELECT * FROM HACKATHON.produits WHERE name = ? ";
    const result = await mysql.query(sql, name).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getAll = async () => {
    const sql = "SELECT * FROM HACKATHON.produits ";
    const result = await mysql.query(sql).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };
}

module.exports = Produits;
