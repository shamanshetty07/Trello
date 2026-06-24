const jwt=require("jsonwebtoken")

function authmiddleware(req,res,next){
    const token=req.headers.token

    console.log(token);
    const decoded=jwt.verify(token,"atlationspassword234uu38484858758hfvd");

    const userid = decoded.userId;

    if (userid) {
        req.userid = userid;
    
        next();
    } else {
        res.status(401).json({
            message:"token was incorrect"
        })
    }
 
}

module.exports={
    authmiddleware:authmiddleware
}



// {
// "organisation_id":"6a3bc07c4989e8ba3776fcef",
// "memberuserusername":"6a3b7f1caed50c70068cee3b"
// }


// {
//   "username":"shaman",
//   "password":"123456"
// }
