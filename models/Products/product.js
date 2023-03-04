var mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    description: { type: String },
    price: {
        type: Number
    },
    brand: {
        type: String
    },

    in_stock: {
        type: Number,
        default: 0
    },
    brand: {
        type: String
    },
    occasion: {
        type: String
    },
    gender: {
        type: String
    },
    images: [
        {}
    ],
    sizes: [],
    material: {
        type: String
    },
    shipping: {},

    care_instructions: [],
    country_of_origin: { type: String },
    return_policy: { type: String },

    tags: []
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;