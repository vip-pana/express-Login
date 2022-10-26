var express = require('express');
var router = express.Router();

// import middleware
const { checkNoAuthenticated } = require('../middlewares')

/** GET homepage */
router.get('/dashboard', checkNoAuthenticated ,(req, res)=>{
    res.render('dashboard')
})

module.exports = router