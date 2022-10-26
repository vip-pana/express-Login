
function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard')
    } next()
}

function checkNoAuthenticated(req, res, next){
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

module.exports = {checkAuthenticated, checkNoAuthenticated}