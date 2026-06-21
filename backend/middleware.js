const jwt=require("jsonwebtoken")

function authmiddleware(req,res,next){
    const token=req.headers.token
    const decoded=jwt.verify(token,"atlationspassword234uu38484858758hfvd");
    const userid=decoded.userid
    if(userid){
        req.userid;   //return it like this because it will availablein the request;
        next()
    }else{
        res.status(401).json({
            message:"token was incorrect"
        })
    }
 
}

module.exports={
    authmiddleware:authmiddleware
}