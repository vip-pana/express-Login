/** require dot env package */
require('dotenv').config()

/**insert data for db */
const Pool = require('pg').Pool
const pool = new Pool({
    user:process.env.USERNAME_DB,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT,
})

/** db connection to db, end is insert into CRUD functions */
function db_connection(){
    pool.connect((err)=>{
        if (err){
            console.log(err)
        } else {
            console.log("db connected")
        }
})
}


function saveUser(name, surname, email, password, cf) {
    db_connection()
    pool.query(`INSERT INTO taxysys.user(name, surname, email, password, cf) 
    VALUES ('${name}','${surname}','${email}','${password}','${cf}');`,
    (err, res)=>{
        if(!err){
            console.log("query completed")
        }else{
            console.log(err.message)
        }
    })
    pool.end;
}


pool.query(`SELECT * FROM taxysys.user;`, (err, res)=>{
    if(!err){
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
}) 

module.exports = {pool, db_connection, saveUser} 