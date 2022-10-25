var express = require('express');
var router = express.Router();
var read = require('../crud/read')

/** GET homepage */
router.get('/login', (req, res)=>{
    res.render('login')
})

/* per ora entra a prescindere di tutto */
router.post('/login/post', (req, res)=>{
    let userExist = read.checkUser(req.body.email, req.body.password)
    console.log(read.checkUser(req.body.email, req.body.password).checkUser)
    

    res.sendStatus(200)
})

module.exports = router 