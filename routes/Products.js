const express = require("express");
const router = express.Router();
const { getAllProducts, getSingleProduct, addProductToCart, getProductsInCart, deleteProductFromCart, addOrder, getOrders, addReview, } = require('../controllers/ProductsController.js')

router.route("/get-all-products").get(getAllProducts);
router.route('/get-single-product').post(getSingleProduct)
router.route('/add-to-cart').post(addProductToCart)
router.route('/get-products-in-cart').get(getProductsInCart)
router.route('/delete-product-from-cart').post(deleteProductFromCart)
router.route('/add-order').post(addOrder)
router.route('/get-orders').get(getOrders)
router.route('/add-review').post(addReview)
module.exports = router;

