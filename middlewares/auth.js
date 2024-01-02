
const jwt = require("jsonwebtoken");

const Auth = ( req , res , next)=>{
    let {token}  = req.cookies;
    if(token){
        let decoded = jwt.verify(token , "secret");
        req.body.userID = decoded.id;
        next();
    }
    else{
        res.redirect('/User/Login');
    }
}



module.exports = Auth;