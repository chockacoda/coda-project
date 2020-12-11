const config = require("../config/config");
const jwt = require("jsonwebtoken");

exports.loggedIn = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) return res.status(401).send("Access Denied");

    try {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, config.TOKEN_SECRET); 
        if( verified.role_name === "USER" || verified.role_name === "ADMIN"){ 
            let req_url = req.baseUrl+req.route.path;
            if(req_url.includes("users/:id") && parseInt(req.params.id) !== verified.id){
                return res.status(401).send("Unauthorized!");
            }
        }
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
}

exports.adminOnly = async function (req, res, next) {
    if( req.user.name === "ADMIN"){
        return res.status(401).send("Unauthorized!");
    }  
    next();
}