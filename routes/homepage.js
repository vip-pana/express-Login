var express = require('express');
var router = express.Router();

/** GET homepage */
router.get('/', (req, res)=>
{ res.render('homepage')})


module.exports = router