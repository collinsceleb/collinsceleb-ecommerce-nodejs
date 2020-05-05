const path = require("path");

const express = require("express");

const rootDirectory = require("../util/path");

const router = express.Router();

// /admin/add-product route => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(
    path.join(rootDirectory, "views", "add-product.html")
  );
});

// /admin/add-product route => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
