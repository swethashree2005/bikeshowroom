const Employee = require('../model/employee');

exports.getAllEmployees= async(req,res)=>
    {
        try{
            const employees= await Employee.find()
            res.json(employees)
        }
        catch(err)
        {
            res.status(500).json({msg : err.message})
        }
    }
     exports.getSingleEmployee = async (req,res)=>
     {
        try{
             const employee = await Employee.findOne({employeeId:req.params.id});
             if(!employee)
             {
                return res.status(404).json({msg: 'Employee not found'})
             }
             else{
                res.json(employee)
             
        }
    }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }
     exports.addNewEmployee = async(req,res)=>
     {
        try{
            const newEmployee =await Employee.findOne({employeeId: req.body.employeeId})
            if(!newEmployee)
            {
                const addedEmployee=await Employee.create(req.body)
                res.json(addedEmployee)
            }
            else
            {
                res.json({msg:'employee already exists'})
            }
        }
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
     }
     exports.updateEmployee= async(req,res)=>
        {
           try{
               const employee=req.body;
               const fetchedemployee= await Employee.findOne({employeeId: employee.employeeId})
               if(fetchedemployee)
               {
                   await Employee.updateOne({employeeId: employee.employeeId},{$set:employee})
                   res.json(await Employee.findOne({employeeId: employee.employeeId}))
               }
               else
               {
                   res.json({msg:'employee not found'})
               }
           }
           catch(err)
           {
               res.status(500).json({msg:err.message})
           }
           
        }
        exports.deleteEmployee = async(req, res)=>
        {
            try{
                const employee = await Employee.findOne({employeeId:req.params.id})
                if(employee)
                {
                    await Employee.deleteOne({employeeId:employee.employeeId})
                    res.json(employee)
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
        