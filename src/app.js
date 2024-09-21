const express = require("express");
const {connectDB} = require("./config/database");
const User = require("./models/user")
const app = express();
const {authLogin,userLogin} = require("../middlewares/auth") 

// app.get("/admin/login",(req,res) => {
//   res.send("all data sent")
// })
// app.get("/admin", authLogin,(req,res) =>{
//   res.send("admin logged in")
// });
// // app.use("/admin/login",(req,res) => {
// //   res.send("all data sent")
// // })
// app.get("/user",userLogin,(req,res) =>{
//   res.send("user logged in")
// });
// app.get("/home" ,(req,res) =>{
//   res.send('home page')
// })
// app.get("/user/login",userLogin,(req,res) => {
//   res.send("user data sent")
// })
// app.use((err,req,res,next) =>{
//   if(err){
//     res.status(500).send("something went wrong")
//   }
// })
app.use(express.json());
app.post("/signup",async(req,res) => {
  console.log(req.body)
  // creating a new instance of a User model
const user = new User(req.body)
try{
  await user.save();
res.send("user added sucessfully")
}
catch(err) {
  res.status(400).send("Error saving the user");
}
})
connectDB()
.then(() => {
    console.log("Dtabase connected")
    app.listen(4000, () => {
      console.log("server listening on 4000")
    })
})
.catch((err) => {
    console.err("not Connected")
})
