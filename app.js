const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
// import all routes
const AppUser = require("./routes/User");
const Product = require('./routes/Products')
app.use("/appuser", AppUser);
app.use("/product", Product)




module.exports = app;
