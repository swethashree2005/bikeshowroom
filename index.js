
//importing express and mongoose
const express = require('express')
const app = express();
const mongoose = require('mongoose')

//importing routes
const bikeRouter = require('./routes/bikeroutes')
const customerRouter =  require('./routes/customerroutes')
const saleRouter = require('./routes/saleroutes')
const employeeRouter = require('./routes/employeeroutes')

//strings to json format
app.use(express.json())

//mounting at root path
app.use("",bikeRouter);
app.use("",customerRouter);
app.use("",saleRouter);
app.use("",employeeRouter);

//connecting to server via port 5000
app.listen('5000',()=> console.log('server running at port 5000'))

//connecting to database
mongoose.connect('mongodb://localhost:27017/vacproject')
  .then(()=>console.log('database connected..'))
  .catch((err)=>console.log(err))



