var express = require('express');
var router = express.Router();

/** GET homepage */
router.get('/signup', (req, res)=>{
    res.render('signup')
})

router.post('/signup/post', (req,res)=>{
    console.log(req.body)
    res.sendStatus(200)
    
})

module.exports = router