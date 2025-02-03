const Bike = require('../model/bike');

//getting all bikes using find method
exports.getAllBikes= async(req,res)=>
    {
        try{
            const bikes = await Bike.find()
            res.json(bikes)
        }
        catch(err)
        {
            res.status(500).json({msg : err.message})
        }
    }

    //getting a particular bike 
     exports.getSingleBike= async (req,res)=>
     {
        try{
             const bike = await Bike.findOne({bikeId:req.params.id});
             if(!bike)
             {
                return res.status(404).json({msg: 'Bike Not found'})
             }
             else{
                res.json(bike)
             
        }
    }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }
     exports.addNewBike = async(req,res)=>
     {
        try{
            const newBike =await Bike.findOne({bikeId: req.body.bikeId})
            if(!newBike)
            {
                const addedBike=await Bike.create(req.body)
                res.json(addedBike)
            }
            else
            {
                res.json({msg:'Bike already exists'})
            }
        }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }
     exports.updateBike= async(req,res)=>
        {
           try{
               const bike=req.body;
               const fetchedBike= await Bike.findOne({bikeId: bike.bikeId})
               if(fetchedBike)
               {
                   await Bike.updateOne({bikeId: bike.bikeId},{$set:bike})
                   res.json(await Bike.findOne({bikeId: bike.bikeId}))
               }
               else
               {
                   res.json({msg:'bike does not exists'})
               }
           }
           catch(err)
           {
               res.status(500).json({msg:err.message})
           }
           
        }
        exports.deleteBike = async(req, res)=>
        {
            try{
                const bike = await Bike.findOne({bikeId:req.params.id})
                if(bike)
                {
                    await Bike.deleteOne({bikeId:bike.bikeId})
                    res.json(bike)
                }
                else{
                    res.json({msg:'Bike does not  exists'})
                }
            }
                catch(err)
                {
                    res.status(500).json({msg:err.message})
                }
            }
        