var express = require('express');
var create = require('../crud/create')
var router = express.Router();

/** bcrypt is for encrypt password */
var bcrypt = require('bcrypt') 

/** GET homepage */
router.get('/signup', (req, res)=>{
    res.render('signup')
})

router.post('/signup/post', async(req,res)=>{
    try {
         hashedPassword = await bcrypt.hash(req.body.password, 10)
         create.saveUser(req.body.name, req.body.surname, req.body.email, hashedPassword, req.body.cf)
         console.log(req.body.email)
         console.log(req.body.password)
         console.log(hashedPassword)
         
         res.redirect('/dashboard')
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
})

module.exports = router