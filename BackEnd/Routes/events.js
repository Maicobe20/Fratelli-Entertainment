const express = require('express')
const router = express.Router()
const eventController = require('../Controllers/eventController')
const userController = require('../Controllers/userController')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  
const upload = multer({ storage });
router.post("/image", upload.single("img"), eventController.uploadImage);
router.get('', eventController.getEvents)
router.use(userController.authenticate)
router.get('/admin', eventController.getAdminEvents)
router.post('', eventController.addEvent)
router.delete('/:id', eventController.deleteEvent)

module.exports = router