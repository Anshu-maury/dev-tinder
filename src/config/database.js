
const mongoose = require("mongoose");
const ConnectDb = async() => {
await mongoose.connect("localhost:27017")
}
ConnectDb
.then (() => {
    console.log("COnnectDatabase")
}).catch(err => {
console.error("database not connected")
})