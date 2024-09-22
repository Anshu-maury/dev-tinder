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

//  middleware for converting the json object into js object
app.use(express.json());

// for creating a user
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

// get user by email
app.get("/user",async(req,res) => {
  const userEmail = req.body.emailId;
  // console.log(userEmail)
  try{
    const user = await User.find({emailId:userEmail})
    if(user.length === 0){
    res.status(400).send("Smoenthing went wrong")
  }else{
    res.send(user)
  }
  }
  catch(err){
    re.status(400).send("email not found")
  }
})

// get user by id
app.get("/user/id",async(req,res) => {
  const userId = req.body._id;
  try{
    const user = await User.findById({_id:userId});
    res.send(user)
  }
  catch(err){
    res.status(400).send("Id not Found")
  }
})

// send all the user /feed
app.get("/feed",async(req,res) => {
  try{
    const user = await User.find({});
    res.send(user)
  }
  catch(err){
    res.status(400).send("User not found")
  }
})

// delete the user
app.delete("/user/delete",async(req,res) => {
  const deleteUser = req.body._id;
  try{
    const user = await User.findByIdAndDelete({_id:deleteUser});
    res.send(user) 
  }
  catch(err){
    res.status(400).send(" not deleted user")
  }
})

// Update the user 

app.patch("/user/update",async(req,res) => {
  const userId = req.body._id;
  const data = req.body
  console.log(data)
  try{
    const ALLOWED_UPDATES = [
      "userId","gender","age","skills","about","lastNmae"
    ]
    const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k));
    if(!isUpdateAllowed){
      throw new Error("Update not Allowed")
    }
    const user = await User.findByIdAndUpdate({_id: userId},data,{runValidators:true});
    console.log(user);
    res.send("user updated successfully")
  }
  catch(err){
    res.status(400).send("UpdateFailed : "+ err.message) ;
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
