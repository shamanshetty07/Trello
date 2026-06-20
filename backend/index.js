//username,password | users table
//organisation | organizations table
// boards | Boards TABLE
// issues | ISSUES TABLE
const express=require("express");
const app=express()
app.use(express.json());
let users_id=1;
let organisation_id=1;
let board_id=1;
let issue_id=1;


const users=[{
    id:1,
    username:"shamn",
    password:"123456"
},{
      id:2,
    username:"shetty",
    password:"123456"
}];
const organisation=[{
  id:1,
  title:"100xdevs",
  description:"learning coding platform",
  admin:1,
  members:[2]
},{
    id:2,
    title:"shetty's personal projects",
    description:"experimenting",
    admin:1,
    members:[]
}];
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



app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExists=users.find(u=>u.username=== username);
    if(userExists){
        res.status(411).json({
            message:"User exists this username already exists"
        })
        return;
    }
    users.push[{
        username,
        password:password,
        id:users_id++
    }]
    res.json({
        message:"you have signed up succesfully"
    })

})
app.post("/signin",(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const userExists=users.find(u=>u.username===username && u.password===password);
    if(!userExists){
        res.status(403).json({
            message:"incorrect crendiatls"
        })
    }
   const token= jwt.sign({
        userId:userExists.id
    },"atlationspassword234uu38484858758hfvd")

res.json({
    token
})
})
app.post("/oraginisation",(req,res)=>{

})
app.post("/board",(req,res)=>{

})
app.post("/issue",(req,res)=>{

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
app.delete("/members",()=>{
    
})
app.listen(3000,()=>{
  console.log("http://localhost:3000")
    
})