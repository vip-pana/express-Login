var express = require('express');
var router = express.Router();

/** GET homepage */
router.get('/login', (req, res)=>
{ res.render('login')})

/* per ora entra a prescindere di tutto */
router.post('login/post', (req, res)=>{
    res.render('dashboard')
})

module.exports = router