const express=require("express");
const router=express.Router();
 
const knowledgebase = require('../controllers/knowledgebase'); 


router.get('/showallknowledgebase' ,knowledgebase.showallknowledgebase);
router.get('/search_knowledgebase_by_author/:id',knowledgebase.search_knowledgebase_by_author_id);
router.get('/search_knowledgebase_by_title/:title',knowledgebase.search_knowledgebase_by_title);
router.delete('/delete_knowledgebase_by_guide_id/:id',knowledgebase.delete_knowledgebase_by_guide_id);
router.delete('/delete_knowledgebase_by_author_id/:id',knowledgebase.delete_knowledgebase_by_author_id);


router.post('/add_knowledgebase' ,knowledgebase.add_knowledgebase);


router.put('/update_knowledgebase_by_guide_id/:id',knowledgebase.update_knowledgebase_by_guide_id);


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
///////////////////////////////////////////////////
const signUp = require('../controllers/signup'); 
router.post('/signUp',signUp.signUp);
/////////////////////////////////////////////////
const login = require('../controllers/login'); 
router.put('/login',login.login);
router.post('/logout',login.logout);


const signUp = require('../controllers/signup'); 
router.post('/signUp',signUp.signUp);
/////////////////////////////////////////////////
const login = require('../controllers/login'); 
router.put('/login',login.login);
router.post('/logout',login.logout);


const resources = require('../controllers/Resources'); 
router.get('/showallresources',resources.showallresources);
router.delete('/deleteIDresources/:id',resources.deleteIDresources);
router.post('/addresources',resources.addresources);
router.put('/updateresources/:id',resources.updateresources);
router.get('/searchResourcesByIdResources/:id',resources.searchResourcesByIdResources);
router.get('/searchAvailableResources',resources.searchAvailableResources);
router.delete('/deletenotavailableresources',resources.deletenotavailableresources);
router.put('/buyResourceById/:id',resources.buyResourceById);

/////////////////////////////////////////////////////////////////////////////////////////

const volunteer = require('../controllers/volunteer_work'); 
router.get('/showallvolunteer',volunteer.showallvolunteer);
router.delete('/deleteIDvolunteer/:id',volunteer.deleteIDvolunteer);
router.post('/addvolunteer',volunteer.addvolunteer);
router.get('/searchvolunteerById/:id',volunteer.searchvolunteerById);
//router.get('/searchByVolunteer_work_name/:name', volunteer.searchByVolunteer_work_name);
router.put('/updatevolunteer/:id',volunteer.updatevolunteer);
module.exports=router;