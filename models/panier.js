const mysql = require('../config/mysql');

class Panier {
  static findOne = async (id) => {
    const result = await mysql.query(
      'SELECT * FROM produits_has_panier where id=?',
      id
    );
    return result[0];
  };
  static addOne = async (body) => {
    const result = await mysql.query(
      'INSERT INTO produits_has_panier set ?',
      body
    );
    return result[0].insertId;
  };

  static getAllpanier = async () => {
    const result = await mysql.query(
      'SELECT * From produits join produits_has_panier on produits.id = produits_id where produits_has_panier.id =1'
    );
    return result[0];
  };
}

module.exports = Panier;
