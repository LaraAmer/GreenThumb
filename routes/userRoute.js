const express=require("express");
const router=express()//.Router();
const {authenticateJWT } = require('../midware/authenticateToken');



const knowledgebase = require('../controllers/knowledgebase'); 
router.get('/showallknowledgebase' ,knowledgebase.showallknowledgebase);
router.get('/search_knowledgebase_by_author/:id',knowledgebase.search_knowledgebase_by_author_id);
router.get('/search_knowledgebase_by_title/:title',knowledgebase.search_knowledgebase_by_title);
router.delete('/delete_knowledgebase_by_guide_id/:id',authenticateJWT,knowledgebase.delete_knowledgebase_by_guide_id);
router.delete('/delete_knowledgebase_by_author_id/:id',authenticateJWT,knowledgebase.delete_knowledgebase_by_author_id);
router.post('/add_knowledgebase' ,authenticateJWT,knowledgebase.add_knowledgebase);
router.put('/update_knowledgebase_by_guide_id/:id',authenticateJWT,knowledgebase.update_knowledgebase_by_guide_id);


const crops = require('../controllers/crops'); 
router.get('/showallcrops',crops.showallcrops);
router.delete('/deleteIDcrop/:id',authenticateJWT,crops.deleteIDcrop);///////////////////////////////////////////////////////////////////////*************************************//////////////////////////////// */
router.delete('/deleteCropByUserId/:id',authenticateJWT,crops.deleteCropByUserId);
router.delete('/deleteCropBygardenId/:id',authenticateJWT,crops.deleteCropBygardenId);
router.post('/addcrop',authenticateJWT,crops.addcrop);
router.put('/updateCrop/:id',authenticateJWT,crops.updateCrop);
router.get('/searchcropByIdCrop/:id',crops.searchcropByIdCrop);
router.get('/searchcropByIdUser/:id',crops.searchcropByIdUser);



const localpartners = require('../controllers/localpartners'); 
router.get('/showalllocalpartners',localpartners.showalllocalpartners);
router.delete('/deleteBypartner_id/:id',authenticateJWT,localpartners.deleteBypartner_id);
router.delete('/deleteBypartner_name/:id',authenticateJWT,localpartners.deleteBypartner_name);
router.post('/addlocalpartners',authenticateJWT,localpartners.addlocalpartners);
router.put('/updatelocalpartners/:id',authenticateJWT,localpartners.updatelocalpartners);
router.get('/searchlocalByEmail/:contact_email',localpartners.searchlocalByEmail);
router.get('/searchlocalpartnersByIdpartner/:id',localpartners.searchlocalpartnersByIdpartner);



const signUp = require('../controllers/signup'); 
router.post('/signUp',signUp.signUp);


const login = require('../controllers/login'); 
router.put('/login',login.login);
router.post('/logout',login.logout);


const resources = require('../controllers/Resources'); 
router.get('/showallresources',resources.showallresources);
router.delete('/deleteIDresources/:id',authenticateJWT,resources.deleteIDresources);
router.post('/addresources',authenticateJWT,resources.addresources);
router.put('/updateresources/:id',authenticateJWT,resources.updateresources);
router.get('/searchResourcesByIdResources/:id',resources.searchResourcesByIdResources);
router.get('/searchAvailableResources',resources.searchAvailableResources);
router.delete('/deletenotavailableresources',authenticateJWT,resources.deletenotavailableresources);
router.put('/buyResourceById/:id',resources.buyResourceById);




const volunteer = require('../controllers/volunteer_work'); 
router.get('/showallvolunteer',volunteer.showallvolunteer);
router.delete('/deleteIDvolunteer/:id',authenticateJWT,volunteer.deleteIDvolunteer);
router.post('/addvolunteer',authenticateJWT,volunteer.addvolunteer);
router.get('/searchvolunteerById/:id',volunteer.searchvolunteerById);
router.put('/updatevolunteer/:id',authenticateJWT,volunteer.updatevolunteer);
router.get('/searchByVolunteer_work_name/:id',volunteer.searchByVolunteer_work_name);



const garden = require('../controllers/garden'); 
router.get('/showallgarden',garden.showallgarden);
router.delete('/deleteIDgarden/:id',authenticateJWT,garden.deleteIDgarden);
router.post('/addGarden',authenticateJWT,garden.addGarden);
router.put('/updateGarden/:id',authenticateJWT,garden.updateGarden);
router.get('/searchGardenById/:id',garden.searchGardenById);
router.get('/searchgardenByname/:name',garden.searchgardenByname);
router.get('/searchgardenBylocation/:location',garden.searchgardenBylocation);

router.get('/showallPlots',garden.showallPlots);
router.delete('/deleteIDplots/:id',authenticateJWT,garden.deleteIDplots);
router.post('/addPlots',authenticateJWT,garden.addPlots);
router.put('/updatePlots/:id',authenticateJWT,garden.updatePlots);
router.get('/searchPoltById/:id',garden.searchPoltById);

module.exports=router;





