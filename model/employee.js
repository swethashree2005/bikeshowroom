const mongoose = require('mongoose')

//employee entities and their datatypes declaration
const employeeSchema=
{
    employeeId:{type:String,required:true},
    name:{type:String,required:true},
    role:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    dateOfJoining:{type:String,required:true},
    salary:{type:Number,required:true}
    
}
module.exports=mongoose.model("Employee",employeeSchema)