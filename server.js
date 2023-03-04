const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });
//connecting to db
connectDataBase();
app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server started at ${process.env.PORT} in ${process.env.NODE_DEV} mode`
  );
});
