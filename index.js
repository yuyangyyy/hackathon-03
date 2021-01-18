const express = require("express");
const cors = require("cors");
require("dotenv").config();
const produits = require("./routes/produits");
const categories = require("./routes/categories");
const images = require("./routes/images");
const panier = require("./routes/panier");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/produits", produits);
app.use("/categories", categories);
app.use("/uploads", images);
app.use("/paniers", panier);

app.use("/", express.static(path.resolve(__dirname, "./public/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});

const server = app.listen(port, () => {
  console.log(`Server is listening on : ${port}`);
});
