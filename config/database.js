const mongoose = require("mongoose");
// mongodb + srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/EMARTDB?retryWrites=true&w=majority
const connectDataBase = () => {
  mongoose
    .connect("mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/ECOMDB?retryWrites=true&w=majority", {
      // .connect("mongodb://localhost:27017/NewDb", {// useNewUrlParser: true,
      // useUnifiedTopolgy: true,
      // useCreateIndex: true,
      keepAlive: 9000 * 1000000000000 * 100000
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with host : ${con.connection.host}`
      );
    });
};

module.exports = connectDataBase;
