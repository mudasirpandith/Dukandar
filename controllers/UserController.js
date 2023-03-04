const User = require('../models/User/user')
const bcrypt = require('bcrypt')
const { ObjectId } = require("mongodb");
const jwt = require('jsonwebtoken')
const JWTSECRECT = 'KJNHJSDEGHJVFEBHJH'

exports.userSignUp = async (req, res, next) => {
    const { email, password, username, phoneNumber } = req.body;
    try {
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill all the fileds" })
        }
        const userfound = await User.findOne({ email })
        if (userfound) {
            return res.status(422).json({ error: "User Already Exists with that email" })

        }
        const hashedpassword = await bcrypt.hash(password, 12);

        const userData = {
            email, password: hashedpassword, username, phoneNumber
        }
        const { token, user } = await User.createNewUser(userData);
        return res.status(200).json({ token, user })

    } catch (err) { console.log(err) }
}
exports.userSigIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill all the fileds" })
        }
        const user = await User.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(404).json({ error: "Invalid Email or Pass" })

        }
        const doMatch = await bcrypt.compare(password, user.password)
        if (!doMatch) {
            return res.status(401).json({
                error: "Invalid Email or Pass"
            })
        } else {
            const token = jwt.sign({ userId: user._id }, JWTSECRECT)
            res.status(200).json({ token, user })

        }
    } catch (err) { console.log(err) }

}

exports.getUser = async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "😡😡😡😡" })
    } else {

        try {

            const { userId } = await jwt.verify(authorization, JWTSECRECT);
            const user = await User.findOne({ _id: ObjectId(userId) })
            res.status(200).json({ user })



        } catch (error) {
            console.log(error)
        }
    }

}
exports.userUpdate = async (req, res) => {
    const { authorization } = req.headers
    const { userId } = await jwt.verify(authorization, JWTSECRECT);
    const user = await User.findOne({ _id: ObjectId(userId) })
    const { name,
        phoneNumber,
        address,
        landmark,
        district,
        state,
        pin, } = req.body

    const email = user.email
    try {
        const updateUser = await User.updateOne({ email }, {
            name,
            email,
            phoneNumber,
            address,
            landmark,
            district,
            state,
            pin
        });
        if (updateUser) {
            const user = await User.findOne({ email })
            res.status(200).json({ user })
        } else {
            res.status(300).json({ message: "ERROR_IN_UPDATE" })
        }
    } catch (error) {
        console.log(error)
    }


}