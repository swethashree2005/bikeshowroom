const employeeController=require('../controller/employeecontrol')
const router=require('express').Router()

router.get('/api/employees',employeeController.getAllEmployees);
router.get('/api/employees/:id',employeeController .getSingleEmployee);
router.post('/api/employee',employeeController.addNewEmployee);
router.put('/api/employee',employeeController.updateEmployee);
router.delete('/api/employee/:id',employeeController.deleteEmployee);


module.exports = router