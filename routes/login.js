var express = require('express');
const passport = require('passport');
var router = express.Router();

// import middleware
const { checkAuthenticated } = require('../middlewares')

/** GET homepage */
router.get('/login', checkAuthenticated, (req, res)=>{
    res.render('login')
})

/* utilizzato authenticate di passport */
router.post('/login', passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
}))

router.get('/logout', (req, res)=>{
    req.logout(function(err) {
        if (err) {return next(err)}
        req.flash('success_msg', "you have logged out")
        res.redirect('/login')
    })
})


module.exports = router