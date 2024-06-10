const express=require("express");
const router=express.Router();
const crops = require('../controllers/crops'); 
const knowledgebase = require('../controllers/knowledgebase'); 

router.get('/showallcrops',crops.showallcrops);
router.get('/showallknowledgebase' ,knowledgebase.showallknowledgebase);
router.get('/search_knowledgebase_by_author/:id',knowledgebase.search_knowledgebase_by_author_id);
router.get('/search_knowledgebase_by_title/:title',knowledgebase.search_knowledgebase_by_title);

router.delete('/deleteIDcrop/:id',crops.deleteIDcrop);
router.delete('/deleteCropByUserId/:id',crops.deleteCropByUserId);
router.delete('/deleteCropBygardenId/:id',crops.deleteCropBygardenId);
router.delete('/delete_knowledgebase_by_guide_id/:id',knowledgebase.delete_knowledgebase_by_guide_id);
router.delete('/delete_knowledgebase_by_author_id/:id',knowledgebase.delete_knowledgebase_by_author_id);


router.post('/add_knowledgebase' ,knowledgebase.add_knowledgebase);


router.put('/update_knowledgebase_by_guide_id/:id',knowledgebase.update_knowledgebase_by_guide_id);
module.exports=router;