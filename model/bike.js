const mongoose = require('mongoose')

//bike entities and their datatypes declaration
const bikeSchema=
{


    bikeId:{type:String,required:true},
    name:{type:String,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    engineCapacity:{type:String,required:true},
    fuelType:{type:String,required:true},
    colorOptions:{type:Array,required:true},
    stockAvailable:{type:Number,required:true},
    features:{type:Array,required:true}
    
}
module.exports=mongoose.model("Bike",bikeSchema)
