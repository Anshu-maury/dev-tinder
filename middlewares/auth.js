const authLogin = (res,req,next) =>{
    const token = "xyz";
    const isAdminLoggedIn = token === "xyz";
    if(!isAdminLoggedIn){
        res.status(401).send("not authorized")
    }
    else{
        next();
    }
}
const userLogin = (res,req,next) =>{
    console.log("user auth get checked")
    const token = "xyzkjk";
    const isUserLoggedIn = token === "xyz";
    if(!isUserLoggedIn){
        res.status(401).send("not authorized")
    }
    
    else{
        next();
    }
}
module.exports = {
    authLogin,
    userLogin
};