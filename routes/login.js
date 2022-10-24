var express = require('express');
var router = express.Router();
var read = require('../crud/read')

/** GET homepage */
router.get('/login', (req, res)=>{
    res.render('login')
})

/* per ora entra a prescindere di tutto */
router.post('/login/post', (req, res)=>{
    read.checkUser(req.body.email, req.body.password)
    res.sendStatus(200)
})

module.exports = router