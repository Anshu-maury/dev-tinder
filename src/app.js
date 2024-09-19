const express = require("express");
const app = express();
app.use("/",(req,res) => {
    res.send("hello from the server")
})
app.use("/home",(req,res) => {
    res.send("home page")
})
app.use("/user",(req,res) => {
    res.send("user login")
})
app.listen(4000, () => {
    console.log("server is listening")
})