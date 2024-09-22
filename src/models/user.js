const mongoose = require("mongoose");
const validator = require("validator")
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:50
    },
    lastNmae:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email Address: " + value)
            }
        }
    },
    password:{
        type:String,
        required:true,
        unique:true,
        maxLength:20,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Invalid email Address: " + value)
            }
        }
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"] .includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
    age:{
        type:Number,
        required:true
    },
    about:{
        type:String,
        default:"this is all about me"
    },
    skills:{
        type:[String]
    }
    
},
       {
            timestamps:true
          }
)
const UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel;
