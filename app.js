/** START THE APP */
const express = require('express')
const app = express()
const port = 3000

/** set body-parser for use post */
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/** set the view engine */
const expressLayouts = require("express-ejs-layouts")
app.use(expressLayouts)
app.set("view engine", "ejs")


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

app.listen(port, () => {
    console.log(`taxy system listening on port ${port}!`)
})