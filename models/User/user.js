var mongoose = require("mongoose");

const jwt = require('jsonwebtoken')
const JWTSECRECT = 'KJNHJSDEGHJVFEBHJH'
const userSchema = new mongoose.Schema({
  username: {

    type: String,
    default: "Nan"
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    default: 000,
  },
  address: {
    type: String,
    default: "Nan"
  },
  landmark: {
    type: String,
    default: "Nan"
  },

  district: {
    type: String,
    default: "Nan"
  },
  state: {
    type: String,
    default: "Nan"
  },

  pin: {
    type: String,
    default: 00000
  },
  productsInCart: [
    {
      type: Object,
      default: {
        id: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          default: ""
        },
        description: { type: String, default: "" },
        price: {
          type: Number, default: 1
        },
        discountPercentage: {
          type: Number, default: 1
        },
        rating: {
          type: Number, default: 1
        },
        stock: {
          type: Number,
          default: 0
        },
        brand: {
          type: String, default: ""
        },
        category: {
          type: String, default: ""
        },
        thumbnail: {
          type: String, default: ""
        },
        images: [
          {}
        ],
        noOfProducts: {
          type: Number,
          default: 0
        }
      }
    }
  ],
  orders: [{

  }]

});

userSchema.statics.createNewUser = async function (userData) {
  try {
    let user = await this.create(userData)
    const token = jwt.sign({ userId: user._id }, JWTSECRECT)
    return { token, user }
  } catch (error) {
    console.log('Error creating new user', error)
    throw error
  }
}
const User = mongoose.model("user", userSchema);
module.exports = User;