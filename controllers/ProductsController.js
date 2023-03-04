const Product = require('../models/Products/product')
const User = require('../models/User/user')
const jwt = require('jsonwebtoken')
const JWTSECRECT = 'KJNHJSDEGHJVFEBHJH'
const { ObjectId } = require('mongodb')
const Cart = require('../models/Products/cart')

// get all products for display
exports.getAllProducts = async (req, res, next) => {
    console.log('Get all products called')
    try {
        const products = await Product.find({});
        if (products) {
            res.status(200).json({ products })
        } else {
            res.status(404).json({ message: "NOTHING_FOUND" })
        }
    } catch (err) { console.log(err) }
}
// get single product which user clicked and want to buy

exports.getSingleProduct = async (req, res) => {
    console.log('Get single product got hit')
    try {
        const _id = req.body.id
        const singleProduct = await Product.findById({ _id })
        res.status(200).json({ singleProduct })

    } catch (error) {
        console.log(error)
    }
}



// add new product as admin
exports.addNewProduct = async (req, res) => {
    const body = req.body;
    try {
        const done = await Product.create(body);
        res.status(200).json(done)
    } catch (error) {
        console.log(error)
    }

}

//add product in cart
exports.addProductToCart = async (req, res) => {
    console.log('add product in cart got hit')
    const { authorization } = req.headers
    const { productId, productSize, productsInCart } = req.body
    if (!authorization) {
        return res.status(401).json({ error: "😡😡😡😡" })
    } else {
        try {
            const { userId } = await jwt.verify(authorization, JWTSECRECT);
            const alreadyInCart = await Cart.find({ productId, userId })
            if (alreadyInCart.length != 0) {
                res.status(301).json({ message: "Already in Cart" })
            } else {
                const product = await Product.findById({ _id: ObjectId(productId) })
                const prod = new Cart({
                    userId,
                    productId,
                    productName: product.name,
                    productPrice: product.price,
                    productsInCart,
                    productSize,
                    productImage: product.images[0].url
                })
                const saved = await prod.save()
                res.status(200).json({ message: "Product added to cart" })
            }
        } catch (error) {
            console.log(error)
            res.status(501).json({ message: "Please login to add in cart" })
        }
    }
}
// get product in cart for a user
exports.getProductsInCart = async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "😡😡😡😡" })
    } else {
        try {
            const { userId } = await jwt.verify(authorization, JWTSECRECT);
            const productsInCart = await Cart.find({ userId })
            if (productsInCart) {
                res.status(200).json({ productsInCart })
            } else {
                res.status(200).json({ message: "Nothing in carrt" })
            }

        } catch (error) {
            console.log(error)
        }
    }
}
exports.deleteProductFromCart = async (req, res) => {
    console.log('Delete from cart got hit')
    const _id = req.body.id;
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "😡😡😡😡" })
    } else {
        try {
            console.log("product:" + _id)
            const productsInCart = await Cart.findByIdAndDelete({ _id })
            if (productsInCart) {
                res.status(200).json({ message: "Deleted from cart" })
            } else {
                res.status(200).json({ message: "Nothing in carrt" })
            }

        } catch (error) {
            console.log(error)
        }
    }
}