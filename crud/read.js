db = require('../db')
var bcrypt = require('bcrypt') 

function checkUser(email, password){
    db.db_connection()
    db.pool.query(`SELECT * FROM taxysys.user WHERE email = '${email}';`,
    (err, res)=>{
        if (!err){
            console.log(res.rows[0])
        } else {
            console.log(err)
        }
    })
}

module.exports = {checkUser}