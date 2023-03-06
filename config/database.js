const mongoose = require("mongoose");
// mongodb + srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/EMARTDB?retryWrites=true&w=majority
const connectDataBase = () => {
  const dbURI = "mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/ECOMDB?retryWrites=true&w=majority"
  const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10, // Number of connections in the pool
    bufferMaxEntries: 0 // Number of buffered commands to keep
  };
  const dbPool = mongoose.createConnection(dbURI, dbOptions);

  // Check for errors and log success
  dbPool.on('error', console.error.bind(console, 'Connection error:'));
  dbPool.once('open', () => console.log('Connected to MongoDB'));
  // mongoose
  //   .connect("mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/ECOMDB?retryWrites=true&w=majority", {
  //     // .connect("mongodb://localhost:27017/NewDb", {// useNewUrlParser: true,
  //     // useUnifiedTopolgy: true,
  //     // useCreateIndex: true,
  //     keepAlive: 3600000000
  //   })
  //   .then((con) => {
  //     console.log(
  //       `MongoDB Database connected with host : ${con.connection.host}`
  //     );
  //   });
};

module.exports = connectDataBase;
