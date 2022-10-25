var express = require('express');
var create = require('../crud/create')
var router = express.Router();

/** sha1 is for encrypt password */
sha1 = require('sha1')

/** GET homepage */
router.get('/signup', (req, res)=>{
    res.render('signup')
})

/**post request with password hashed */
router.post('/signup/post', (req,res)=>{
    hashedPassword = sha1(req.body.password)
    create.saveUser(req.body.name, req.body.surname, req.body.email, hashedPassword, req.body.cf)
    res.redirect('/dashboard')
})

module.exports = router