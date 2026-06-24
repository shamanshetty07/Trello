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


// {
// "organisation_id":"6a3bc07c4989e8ba3776fcef",
// "memberuserusername":"6a3c114f5b851d1c036000ba"
// }