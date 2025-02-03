const mongoose = require('mongoose')

//sale entities and their datatypes declaration
const saleSchema=
{
salesId:{type:String,required:true},
customerId:{type:String,required:true},
bikeId:{type:String,required:true},
saleDate:{type:String,required:true},
amount:{type:Number,required:true},
paymentMethod:{type:String,required:true},
salespersonId:{type:String,required:true},
warrantyDetails:{type:Object,required:true}
}
module.exports=mongoose.model("Sales",saleSchema)

