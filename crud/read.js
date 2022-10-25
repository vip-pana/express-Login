db = require('../db')
var bcrypt = require('bcrypt') 

function checkUser(email, password){
    db.db_connection()
    db.pool.query(`SELECT * FROM taxysys.user WHERE email = '${email}';`,
    (err, res)=>{
        if (!err){
            if(email == res.rows[0].email){
                console.log('email corretta')
                
                console.log(res.rows[0].password)
            } else {
                console.log('email sbagliata')
            }
        } else {
            console.log(err) 
        }
    })
}

async function hashPassword(password) {
hashedPassword = await bcrypt.hash(password, 10)
}

module.exports = {checkUser}