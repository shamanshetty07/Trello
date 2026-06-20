//username,password | users table
//organisation | organizations table
// boards | Boards TABLE
// issues | ISSUES TABLE
const express=require("express");

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
    boardid:1
},{
    id:2,
    title:"allow admins to create more courses",
    boardid:1

}];

const app=expess()
app.listen(3000,()=>{
  console.log("http://localhost:3000")
    
})