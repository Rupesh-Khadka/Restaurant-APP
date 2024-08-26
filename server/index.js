const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());

//Router
const authRouter = require("./modules/auth/router");
const categoryRouter = require("./modules/category/router");
const contactRouter = require("./modules/contact/router");
const favouriteRouter = require("./modules/favourite/router");
const menuRouter = require("./modules/menu/router");
const userRouter = require("./modules/user/router");
const adminRouter = require("./modules/admin/router");


//   Implementing the router in port
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/favourite", favouriteRouter);
app.use("/category", categoryRouter);
app.use("/contact", contactRouter);
app.use("/menu", menuRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Backend is Running");
});

app.listen(3002, () => {
    console.log("Background is running on 3002");

    try {
        mongoose.connect("mongodb://localhost:27017/MernRestro");
        console.log("Database is connected");
    } catch (error) {
        console.log("Error found", error);
    }
});