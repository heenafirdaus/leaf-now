require("dotenv").config();

const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const path = require('path');


const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/auth/authRoutes");
const userRoutes = require("./routes/user/userRoutes");
const discussionRoutes = require("./routes/discussion/discussionRoutes");

const connectDB = require("./config/db");



connectDB();

const app = express();
app.use(
  cookieSession({
    name: "leaf-now-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/discussions", discussionRoutes);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
