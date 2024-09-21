const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastNmae:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    age:{
        type:Number
    }
    
})
const UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel;
