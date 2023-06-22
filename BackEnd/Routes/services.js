const express = require('express')
const router = express.Router()
const serviceController = require('../Controllers/servicesController')
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
router.post("/image", upload.single("img"), serviceController.uploadImage);
router.get('', serviceController.getAll)
router.use(userController.authenticate)
router.get('/admin', serviceController.getAdminAll)
router.post('', serviceController.addService)
router.put('/:id', serviceController.editService)
router.delete('/:id', serviceController.deleteService)

module.exports = router