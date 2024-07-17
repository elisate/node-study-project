const express = require("express");
const router = express.Router();
const Product=require("../models/ProductModal")

router.get("/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(contact);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post("/add_product", async (req, res) => {
  try {
    const product =Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports=router;