const express = require("express");
const router = express.Router();
const { getAllProducts, addNewProduct, getSingleProduct, addProductToCart, getProductsInCart, deleteProductFromCart } = require('../controllers/ProductsController.js')

router.route("/get-all-products").get(getAllProducts);
router.route('/get-single-product').post(getSingleProduct)
router.route('/add-product').post(addNewProduct)
router.route('/add-to-cart').post(addProductToCart)
router.route('/get-products-in-cart').get(getProductsInCart)
router.route('/delete-product-from-cart').post(deleteProductFromCart)
module.exports = router;

