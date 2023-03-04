const express = require("express");
const router = express.Router();

const {
    userSignUp,
    userSigIn,
    getUser,
    userUpdate
} = require("../controllers/UserController");
// ---user sign up----
router.route("/user-signup").post(userSignUp);
// ---user sign in----
router.route("/user-signin").post(userSigIn);
// ---fetch user info based on token availabe on local staorge----
router.route("/user-info").get(getUser);
// --- change user detail -----
router.route('/user-update').put(userUpdate)
module.exports = router;

