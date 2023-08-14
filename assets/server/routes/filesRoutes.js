const express = require('express');
const router = express.Router();
const filesControllers = require('../controllers/filesControllers');
const { verifyToken } = require('../middleware/auth');

const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const myupload = multer({ storage: storage });





router.delete('/delete/:id', verifyToken, filesControllers.delete);
router.get('/files-for-asset/:id', verifyToken, filesControllers.getFiles);
// router.post('/upload', verifyToken, filesControllers.upload);
router.post('/upload', verifyToken, myupload.single('myFile'), filesControllers.upload);


module.exports = router;