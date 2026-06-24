//username,password | users table
//organisation | organizations table
// boards | Boards TABLE
// issues | ISSUES TABLE
const express=require("express");
const mongoose=require("mongoose")
const app=express()
const {authmiddleware}=require("./middleware")
const jwt = require("jsonwebtoken");
app.use(express.json());
let users_id=1;
let organisation_id=1;
let board_id=1;
let issue_id=1;
const {userModel,oraganisationModel}=require("./models")


const boards=[{
    id:1,
    title:"100xschool website frontend",
    organisation:1
}

];
const issues=[{
    id:1,
    title:"add dark mode",
    boardid:1,
    state:"in progress"  //next_up | "in_progress" | "done" | "archived"
},{
    id:2,
    title:"allow admins to create more courses",
    boardid:1,
    state:"done"

}];



app.post("/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExists=await userModel.findOne({
        username:username,
        
    })
    
    if(userExists){
        res.status(411).json({
            message:"user with this username already exists"
        })
        return;
    }
    userModel.create({
        username:username,
        password:password
    })


    res.json({
        message:"you have signed up succesfully"
    })

})
app.post("/signin",(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    console.log(username);
    console.log(password)
    const userExists=userModel.findOne({
        username:username,
        password:password
    })
    if(!userExists){
        res.status(403).json({
            message:"incorrect crendiatls"
        })
        return
    }
   const token= jwt.sign({
        userId:userExists._id
    },"atlationspassword234uu38484858758hfvd")

res.json({
    token
})
})
app.post("/oraginisation",authmiddleware,(req,res)=>{
    const userid=req.user.id
    organisation.push({
        id:organisation_id++,
        title:req.body.title,
        description:req.body.description,
        admin:userid,
        members:[]
    })
    console.log(organisation)
    res.json({
        message:"org has been created",
        id:organisation_id -1
    })


})
app.post("/add-member-to-organisation",authmiddleware,(req,res)=>{
    const userid=req.userid;
    const organisationid=req.body.organisation_id;
    const memberuserusername=req.body.memberuserusername;

    const organisation= organisation.find(org=>org.id===organisationid);

    if(!organisation || oraganisation.admin!==userid ){
        res.status(411).json({
    message:"either this org doesnt exist or your not admin of this org"})
    return;}
    const memberuser= user.find(u=>u.username === memberuserusername);
    if(!memberuser){
        res.status(411).json({
            message:"No user with this username exists in our db"
        })

    }
    organisation.members.push(memberuser.id);
    res.json({
        message:'new member added!'
    })


})
app.post("/board",(req,res)=>{

})
app.post("/issue",(req,res)=>{

})

app.get('/organization',authmiddleware,(req,res)=>{
    const userid=req.userid
    const organisationid=req.query.oraganisation_id
    const organisation=organisation.find(org=>org.id===organisationid);
    if(!organisation || organisation.admin!=userid){
        res.status(411).json({
            message:"either this org doesnt exist or your not the admin"
        })
        return
    }
    res.json({
        organisation:{
            ...organisation,
            members:organisation.members.map(memberid=>{
                const  user=users.find(user=>user.id===memberid);
                return{
                    id:user.id,
                    username:user.username
                }
            })
        }
    })
    
})


app.get("/boards",(req,res)=>{

})
app.get("/issues",(req,res)=>{

})
app.get("/members",()=>{

})
//update
app.put("/issues",(req,res)=>{

})
app.delete("/members",authmiddleware,()=>{
      const userid=req.userid;
    const organisationid=req.body.organisation_id;
    const memberuserusername=req.body.memberuserusername;

    const organisation= organisation.find(org=>org.id===organisationid);

    if(!organisation || oraganisation.admin!==userid ){
        res.status(411).json({
    message:"either this org doesnt exist or your not admin of this org"})
    return;}
    const memberuser= user.find(u=>u.username === memberuserusername);
    if(!memberuser){
        res.status(411).json({
            message:"No user with this username exists in our db"
        })

    }
   organisation.members=organisation.members.filter(user=>user.id!==memberuser.id);
   res.json({
    message:"memeber has been removed"
   })
})
app.listen(3000,()=>{
  console.log("http://localhost:3000")
    
})