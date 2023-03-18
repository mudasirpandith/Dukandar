var mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    productId: {
        type: String
    },
    userName: {
        type: String
    },
    review: {
        type: String
    },
    time: {
        type: String
    }

})

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;