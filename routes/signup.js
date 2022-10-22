var express = require('express');
var db = require('../db')
var router = express.Router();

/** GET homepage */
router.get('/signup', (req, res)=>{
    res.render('signup')
})

router.post('/signup/post', (req,res)=>{
    console.log(req.body)
    db.saveUser(
        req.body.name, req.body.surname, req.body.email, req.body.password, req.body.cf
    )
    res.sendStatus(200)
})

module.exports = router