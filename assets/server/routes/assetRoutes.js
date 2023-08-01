const express = require('express');
const router = express.Router();
const assetControllers = require('../controllers/assetController');
const { verifyToken } = require('../middleware/auth');


router.post('/create', verifyToken, assetControllers.createAsset);
router.post('/update/:id', verifyToken, assetControllers.updateAssetByID);
router.post('/delete/:id', verifyToken, assetControllers.deleteAssetByID);
router.get('/assets', verifyToken, assetControllers.assetsQuery);
router.get('/asset/:id', verifyToken, assetControllers.assetsGetByID);

module.exports = router;