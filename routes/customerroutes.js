const customerController  =require('../controller/customercontrol')
const router=require('express').Router()

router.get('/api/customers',customerController.getAllCustomers);
router.get('/api/customers/:id',customerController.getSingleCustomer);
router.post('/api/customer',customerController.addNewCustomer);
router.put('/api/customer',customerController.updateCustomer);
router.delete('/api/customer/:id',customerController.deleteCustomer);


module.exports = router