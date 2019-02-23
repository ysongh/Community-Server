const express = require("express");

const profileController = require("../controllers/profile");

const router = express.Router();

router.get('/:locationId/profiles', profileController.getProfiles);

router.post('/:locationId/profiles', profileController.addProfile);

module.exports = router; 