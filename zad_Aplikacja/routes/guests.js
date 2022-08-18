const express = require('express');
const router = express.Router();

const guestController = require('../controllers/guestController.js');



router.get("/guests/add",guestController.guest_redirect);
router.get("/",guestController.guest_list);
router.get("/add",guestController.guest_add);
router.post("/Submit_add",guestController.guest_submit);




module.exports = router;