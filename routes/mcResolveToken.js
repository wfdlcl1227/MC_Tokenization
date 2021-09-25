const express = require('express');
const router  = express.Router();
const tokenController = require('../controllers/mcResolveToken');

router.get('/token', tokenController.resolveToken);
router.post('/token', tokenController.resolveToken);
/*
router.delete('/tea', teaController.deleteAllTea);
router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);
*/
module.exports = router;