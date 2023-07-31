const express = require('express');
const router = express.Router();
const assetControllers = require('../controllers/assetControllers');
const { verifyToken } = require('../middleware/auth');


router.post('/create', verifyToken, assetControllers.registerUser);
router.post('/update', verifyToken, assetControllers.loginUser);
router.post('/delete', verifyToken, assetControllers.loginUser);
router.get('/assets', verifyToken, assetControllers.getAssets);
router.get('/asset/:id', verifyToken, assetControllers.getAssets);

module.exports = router;