const mongoose = require('mongoose')

//customer entities and their datatypes declaration
const customerSchema=
{

    customerId:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:Object,required:true},
    purchaseHistory:{type:Array,required:true},
    dateOfJoining:{type:String,required:true} 
}
module.exports=mongoose.model("Customer",customerSchema)