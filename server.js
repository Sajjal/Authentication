const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

//Set view engine
app.set("view engine", "ejs");

//Import routes
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");

//Connect to DataBase
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//MiddleWares
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", authRouter);
app.use("/dashboard", postRouter);

app.get("*", (req, res) => {
  res.render("signup");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
