const Sale = require('../model/sale');

exports.getAllSales= async(req,res)=>
    {
        try{
            const sales= await Sale.find()
            res.json(sales)
        }
        catch(err)
        {
            res.status(500).json({msg : err.message})
        }
    }
     exports.getSingleSale= async (req,res)=>
     {
        try{
             const sale = await Sale.findOne({salesId:req.params.id});
             if(!sale)
             {
                return res.status(404).json({msg: 'sales entry not found'})
             }
             else{
                res.json(sale)
             
        }
    }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }
     exports.addNewSale = async(req,res)=>
     {
        try{
            const newSale =await Sale.findOne({salesId: req.body.salesId})
            if(!newSale)
            {
                const addedSale=await Sale.create(req.body)
                res.json(addedSale)
            }
            else
            {
                res.json({msg:'Entry already exists'})
            }
        }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }
     exports.updateSale= async(req,res)=>
        {
           try{
               const sale=req.body;
               const fetchedsale= await Sale.findOne({salesId: sale.salesId})
               if(fetchedsale)
               {
                   await Sale.updateOne({salesId: sale.salesId},{$set:sale})
                   res.json(await Sale.findOne({salesId: sale.salesId}))
               }
               else
               {
                   res.json({msg:'sales entry not found'})
               }
           }
           catch(err)
           {
               res.status(500).json({msg:err.message})
           }
           
        }
        exports.deleteSale = async(req, res)=>
        {
            try{
                const sale = await Sale.findOne({salesId:req.params.id})
                if(sale)
                {
                    await Sale.deleteOne({salesId:sale.salesId})
                    res.json(sale)
                }
                else{
                    res.json({msg:'sales entry not found'})
                }
            }
                catch(err)
                {
                    res.status(500).json({msg:err.message})
                }
            }
        