const express=require("express");
const router=express.Router();


const crops = require('../controllers/crops'); 
router.get('/showallcrops',crops.showallcrops);
router.delete('/deleteIDcrop/:id',crops.deleteIDcrop);
router.delete('/deleteCropByUserId/:id',crops.deleteCropByUserId);
router.delete('/deleteCropBygardenId/:id',crops.deleteCropBygardenId);
router.post('/addcrop',crops.addcrop);
router.put('/updateCrop/:id',crops.updateCrop);
router.get('/searchcropByIdCrop/:id',crops.searchcropByIdCrop);
router.get('/searchcropByIdUser/:id',crops.searchcropByIdUser);
/////////////////////////////////////////////////////////////////////////////////////////
const localpartners = require('../controllers/localpartners'); 
router.get('/showalllocalpartners',localpartners.showalllocalpartners);
router.delete('/deleteBypartner_id/:id',localpartners.deleteBypartner_id);
router.delete('/deleteCropBypartner_name/:id',localpartners.deleteCropBypartner_name);
router.post('/addlocalpartners',localpartners.addlocalpartners);
router.put('/updatelocalpartners/:id',localpartners.updatelocalpartners);
router.get('/searchlocalByEmail/:contact_email',localpartners.searchlocalByEmail);
router.get('/searchlocalpartnersByIdpartner/:id',localpartners.searchlocalpartnersByIdpartner);


module.exports=router;