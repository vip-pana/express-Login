db = require('../db')
sha1 = require('sha1')

/** works for login, ch.emaileck if a user exist, then check password  */
function checkUser(email, password){
    db.db_connection()
    db.pool.query(`SELECT * FROM taxysys.user 
                   WHERE email = '${email}';`,
    (err, res)=>{
        if (!err){
            if(email == res.rows[0].email){
                hashedPassword = sha1(password)
                if (hashedPassword == res.rows[0].password){
                    console.log('password corretta')
                    return true
                }
            } else {
                console.log('email sbagliata')
            }
        } else {
            console.log(err) 
        }
    })
}

module.exports = {checkUser}