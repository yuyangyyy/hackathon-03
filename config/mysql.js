const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "us-cdbr-east-03.cleardb.com",
  user: "bc6b13e3fb4097",
  database: "heroku_7ac7156427cb487",
  password: "b5965a15",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
