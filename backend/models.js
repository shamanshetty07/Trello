const  mongoose =require("mongoose");
mongoose.connect("")
const userSchema=new mongoose.Schema({
    username:String,
    password:String
})

const oraganisationSchema= new mongoose.Schema({
    title:String,
    description:String,
    admin:mongoose.Types.ObjectId,
    members:[mongoose.Types.ObjectId]
})

const userModel=mongoose.model("users",userSchema)
const oraganisationModel=mongoose.model("oraganisations",oraganisationSchema)

module.exports={
    userModel:userModel,
    oraganisationModel:oraganisationModel
}

