const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(
  cors({
    origin: "https://trendz-vercel-api.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    server.listen(process.env.PORT_NO || 5000, () => {
      console.log("SERVER IS RUNNING");
    });
  })
  .catch((err) => {
    console.log(err);
  });
