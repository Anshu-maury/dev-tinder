const express = require("express");

const app = express();
const {authLogin,userLogin} = require("../middlewares/auth") 

app.get("/admin/login",(req,res) => {
  res.send("all data sent")
})
app.get("/admin", authLogin,(req,res) =>{
  res.send("admin logged in")
});
// app.use("/admin/login",(req,res) => {
//   res.send("all data sent")
// })
app.get("/user",userLogin,(req,res) =>{
  res.send("user logged in")
});
app.get("/home" ,(req,res) =>{
  res.send('home page')
})
app.get("/user/login",userLogin,(req,res) => {
  res.send("user data sent")
})
// app.use((err,req,res,next) =>{
//   if(err){
//     res.status(500).send("something went wrong")
//   }
// })
app.listen(4000)