const bikeController=require('../controller/bikecontrol')
const router=require('express').Router()

router.get('/api/bikes',bikeController.getAllBikes);
router.get('/api/bikes/:id', bikeController.getSingleBike);
router.post('/api/bike',bikeController.addNewBike);
router.put('/api/bike',bikeController.updateBike)
router.delete('/api/bike/:id',bikeController.deleteBike)

module.exports = router