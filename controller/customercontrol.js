const Customer = require('../model/customer');

//getting all  customer records using find
exports.getAllCustomers= async(req,res)=>
    {
        try{
            const customers= await Customer.find()
            res.json(customers)
        }
        catch(err)
        {
            res.status(500).json({msg : err.message})
        }
    }

 // getting particular customer info using findOne  
     exports.getSingleCustomer= async (req,res)=>
     {
        try{
             const customer = await Customer.findOne({customerId:req.params.id});
             if(!customer)
             {
                return res.status(404).json({msg: 'Customer not found'})
             }
             else{
                res.json(customer)
             
        }
    }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }

  //adding new customer record using create   
     exports.addNewCustomer = async(req,res)=>
     {
        try{
            const newCustomer =await Customer.findOne({customerId: req.body.customerId})
            if(!newCustomer)
            {
                const addedCustomer=await Customer.create(req.body)
                res.json(addedCustomer)
            }
            else
            {
                res.json({msg:'Customer already exists'})
            }
        }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }

     //updating the existing customer record using updateOne
     exports.updateCustomer= async(req,res)=>
        {
           try{
               const customer=req.body;
               const fetchedCustomer= await Customer.findOne({customerId: customer.customerId})
               if(fetchedCustomer)
               {
                   await Customer.updateOne({customerId: customer.customerId},{$set:customer})
                   res.json(await Customer.findOne({customerId: customer.customerId}))
               }
               else
               {
                   res.json({msg:'Customer not found'})
               }
           }
           catch(err)
           {
               res.status(500).json({msg:err.message})
           }
           
        }

   //deleting  a particular customer record using deleteOne     
        exports.deleteCustomer = async(req, res)=>
        {
            try{
                const customer = await Customer.findOne({customerId:req.params.id})
                if(customer)
                {
                    await Customer.deleteOne({customerId:customer.customerId})
                    res.json(customer)
                }
                else{
                    res.json({msg:'Customer not found'})
                }
            }
                catch(err)
                {
                    res.status(500).json({msg:err.message})
                }
            }
        