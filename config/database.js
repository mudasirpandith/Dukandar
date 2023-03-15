const mongoose = require("mongoose");
const redis = require('redis');
// const { promisify } = require('util');
// mongodb + srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/EMARTDB?retryWrites=true&w=majority
const connectDataBase = () => {
  mongoose
    .connect("mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/ECOMDB?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with host : ${con.connection.host}`
      );
    });
  mongoose.set('debug', true);
  mongoose.connect('mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/ECOMDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
    bufferMaxEntries: 0,
  });
  // const redisClient = redis.createClient();
  // const getAsync = promisify(redisClient.get).bind(redisClient);
  // const setAsync = promisify(redisClient.set).bind(redisClient);
};

module.exports = connectDataBase;
