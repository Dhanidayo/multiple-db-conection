const controller = require("../controller/userController");
const express = require('express');
const router = express.Router();

router.use('/', controller);

module.exports = router;