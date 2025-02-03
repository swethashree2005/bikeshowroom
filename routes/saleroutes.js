const saleController=require('../controller/salecontrol')
const router=require('express').Router()

router.get('/api/sales',saleController.getAllSales);
router.get('/api/sales/:id', saleController.getSingleSale);
router.post('/api/sale',saleController.addNewSale);
router.put('/api/sale',saleController.updateSale);
router.delete('/api/sale/:id',saleController.deleteSale);

module.exports = router