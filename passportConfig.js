const LocalStrategy = require('passport-local').Strategy
const { pool } = require('./db')
const bcrypt = require('bcrypt')
const passport = require('passport')

function initialize(passport){
    const authenticateUser = (email, password, done)=>{
        /** controllo se la mail è nel database */
        pool.query(
            `SELECT * FROM taxysys.user WHERE email = $1`,[email],
            (err, resDB) => {
                if(err){ throw err }

                if(resDB.rows.length > 0){
                    const user = resDB.rows[0]
                    /** controllo la password */
                    bcrypt.compare(password, user.password, (err, isMatch)=>{
                        if(err){ throw err }

                        if(isMatch){
                            return done(null, user)
                        } else {
                            return done(null, false, {message: 'Password errata'})
                        }
                    })
                } else {
                    return done(null, false, {message: 'Email is not registered'})
                }
            }
        )
    }

    passport.use(
        new LocalStrategy(
            {
                /** qui dico che i campi da leggere dal passport sono quelli chiamati come nelle stringhe */
                usernameField: "email",
                passwordField: "password"
            },
            authenticateUser
        )
    )


passport.serializeUser((user, done)=> done(null, user.id))

passport.deserializeUser((id, done)=>{
    pool.query(
        `SELECT * FROM taxysys.user WHERE id = $1`, [id],
        (err, resDB)=>{
            if(err){ throw err }
            return done(null, resDB.rows[0])
        }
    )
})
}

module.exports = initialize