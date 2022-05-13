var express = require('express')
let router = express.Router();

// popup Routes------------------
let popup = require('./api/popup.route');
router.use('/popup', popup);


module.exports = router;