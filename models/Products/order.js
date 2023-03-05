var mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    products: [],
    address: {},
    timeAndDate: {
        type: String,
    },
    status: {
        color: {
            type: String
        },
        text: {
            type: String
        },
    }

});

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;