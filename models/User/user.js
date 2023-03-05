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