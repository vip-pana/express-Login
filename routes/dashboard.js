var express = require('express');
var router = express.Router();

/** GET homepage */
router.get('/dashboard', (req, res)=>
{ res.render('dashboard')})


module.exports = router