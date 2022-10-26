var express = require('express');
const bcrypt = require('bcrypt');
const { pool } = require('../db');
var router = express.Router();

// import middleware
const { checkAuthenticated } = require('../middlewares')


/** GET homepage */
router.get('/signup', checkAuthenticated,(req, res)=>{
    res.render('signup')
})

/**post request */
router.post('/signup', async(req,res)=>{
    let { nickname, email, password, password2 } = req.body

    let errors = []

    // cath user errors in insert data
    if(!nickname || !email || !password || !password2){
        errors.push({message: "Per favore, compila tutti i campi"})
    }

    if(password.length < 6){
        errors.push({message: "Password troppo corta, almeno 6 caratteri"})
    }

    if(password != password2){
        errors.push({message: "password errata nella conferma"})
    }

    // if there is error restart signup and show errors
    if(errors.length > 0) {
        res.render("signup", {errors})
    } else {
        // validation passed, then hashing password
        let hashedPassword = await bcrypt.hash(password, 10)

        pool.query(
            `INSERT INTO taxysys.user (nickname, email, password)
             VALUES ($1, $2, $3)
             RETURNING id, password`, [nickname, email, hashedPassword],
             (err, resDB) => {
                if (err){ throw err }
                req.flash('success_msg', "Ti sei registrato! Per favore, ora fai il login")
                res.redirect('/login')
             }
        )
    }
})

module.exports = router