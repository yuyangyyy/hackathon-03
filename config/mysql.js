const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "kvbylv30m3zjlyw8",
  port:3306,
  database: "o5s3wix1ajp4230k",
  password: "af1wvqto7vwzeg6y",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
