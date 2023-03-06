## Api server for DukanDar

Try the app [here](https://dukandar.vercel.app/)

React frontend repo [here](https://github.com/mudasirpandith/dukan-frontend)

## Things used

- Express as an api server

- MongoDB as database

- Mongoose as Mongo JavaScript driver, model/schema validation

- Jsonwebtoken for authentication

- Bcryptjs for hashed password storage and comparison

## This is the overview of what's contained in this repo.

### ⚡ Routes ⚡

Routes are divided into two parts `/appuser` (_routes/User.js_) and `/product` (_routes/Products.js_). As it is inferred /appuser contains authentication related sub routes, so user signup is done via `POST /appuser/signup` endpoint and login is done via `POST /appuser/signin`. There is also `GET /appuser/getuser` which returns `200` if user is logged in (has toke in localstorage) and is used by front-end code to check for logged-in status. Other routes fall under `/product` and these include `GET /product/get-all-products` to get all products for displaying products, `POST /product/add-product-to-cart` to add product in cart of a logged in user ,`POST /product/add-order` to confirm order and clear the cart of user and add a new order of logged in user, `POST /product/add-review ` to add review on a product by logged in user, etc

### ⚡ Database Models ⚡

There is bunch of mongoose models viz `User`, `Products`, `Cart`, `Order`, `Review`.

### ⚡ Authentication ⚡

Authentication is done with jsonwebtoken.
