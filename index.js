const express = require("express");
const cors = require("cors");
require("dotenv").config();
const produits = require("./routes/produits");
const categories = require("./routes/categories");
const images = require("./routes/images");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/produits", produits);
app.use("/categories", categories);
app.use("/uploads", images);

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is listening on : ${process.env.SERVER_PORT}`);
});
