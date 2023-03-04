const mongoose = require("mongoose");
// mongodb + srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/EMARTDB?retryWrites=true&w=majority
const connectDataBase = () => {
  mongoose
    .connect("mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/ECOMDB?retryWrites=true&w=majority", {
      // useNewUrlParser: true,
      // useUnifiedTopolgy: true,
      // useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with host : ${con.connection.host}`
      );
    });
};

module.exports = connectDataBase;
