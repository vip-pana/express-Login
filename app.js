/** START THE APP */
const express = require('express')
const session = require('express-session')
const flash = require('express-flash')

const { pool } = require('./db')
const bcrypt = require('bcrypt')
const passport = require('passport')
const initializePassport = require('./passportConfig')

initializePassport(passport)

const app = express()
const PORT = 3000

/* I USE EXPRESS FOR POST REQUEST*/
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/** set the view engine */
const expressLayouts = require("express-ejs-layouts")
app.use(expressLayouts)
app.set("view engine", "ejs")

/**this is for gestire le sessions */
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

/**get Routers */
var homeRouter = require("./routes/homepage")
var loginRouter = require("./routes/login")
var signupRouter = require('./routes/signup')
var dashboardRouter = require('./routes/dashboard')

/** home page */
app.use('/', homeRouter)

/**login page */
app.use('/', loginRouter)

/** signup page */
app.use('/', signupRouter)
 
/** dashboard page */
app.use('/', dashboardRouter)

/** 404 page */
app.use((req, res, next)=> {res.render('404')})

app.listen(PORT, () => {
    console.log(`taxy system listening on port ${PORT}!`)
})