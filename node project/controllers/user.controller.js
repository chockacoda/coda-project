const User = require("../models/user.model.js");
const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {NotFoundError} = require("../helpers/utility");

exports.login = async (req, res) => {
    try {
        const user = await User.login(req.body.username);
         const type = await User.getType(user.user_id);
        if (user && type) {
            const validPass = await bcrypt.compare(req.body.password, user.password);
            if (!validPass) return res.status(400).send("userName or Password is wrong");
            const token = jwt.sign({id: user.id, role_name: type.name}, config.TOKEN_SECRET);
            res.header("auth-token", token).send({"token": token,"role":type.name,"user_id":user.user_id});
            console.log("The jwt token is" + token+ "user is" + type.name) ;
        }
    }
    catch (err) {
        if( err instanceof NotFoundError ) {
            res.status(401).send(`userName or Password is wrong`);
        }
        else {
            let error_data = {
                entity: 'User',
                model_obj: {param: req.params, body: req.body},
                error_obj: err,
                error_msg: err.message
            };
            res.status(500).send("Error retrieving User");
        }
    }  
};

exports.register = async (req, res) => {
    
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        username: req.body.user_name,
        password: hasPassword,
        enabled:  1
    });
    try {
        const id = await User.create(user);
        user.id = id;
        delete user.password;
        res.send(user);
    }
    catch (err){
        res.status(500).send(err);
    }    
};

exports.usernameCheckUnique=async (req, res) => {
    
    try {
        const user = await User.usernameCheckUnique(req.params.id);
            res.send(user);
}
catch (err) {
            let error_data = {
                entity: 'User',
                model_obj: {param: req.params, body: req.body},
                error_obj: err,
                error_msg: err.message
            };
            res.status(500).send("Error");
    } 

};

exports.getMovieList = async (req, res) => {
    try {
        const user = await User.getMovieList(req.params.id);
        if (user) {
            res.send(user);
        }
    }
    catch (err) {
        if( err instanceof NotFoundError ) {
            res.status(401).send(`Movies not found`);
        }
        else {
            let error_data = {
                entity: 'User',
                model_obj: {param: req.params, body: req.body},
                error_obj: err,
                error_msg: err.message
            };
            res.status(500).send("error");
        }
    }  
}; 


exports.getMovieById = async (req, res) => {
    try {
            const user = await User.getMovieById(req.params.id);
            if (user) {
                res.send(user);
            }
    }
    catch (err) {
            if( err instanceof NotFoundError ) {
                res.status(401).send(`Movie not found`);
            }
            else {
                let error_data = {
                    entity: 'User',
                    model_obj: {param: req.params, body: req.body},
                    error_obj: err,
                    error_msg: err.message
                };
                res.status(500).send("Error");
        }
    }   
    
};

exports.averageRating = async (req, res) => {
    try {
            const user = await User.averageRating(req.body);
            if (user) {
                res.send(true);
            }
    }
    catch (err) {
            if( err instanceof NotFoundError ) {
                res.status(401).send(`rating not saved`);
            }
            else {
                let error_data = {
                    entity: 'User',
                    model_obj: {param: req.params, body: req.body},
                    error_obj: err,
                    error_msg: err.message
                };
                res.status(500).send("Error");
        }
    }   
    
};

exports.addMovie = async (req, res) => {
    try {
            const user = await User.addMovie(req.body);
            if (user) { 
                res.send(true);
            }
    }
    catch (err) {
                let error_data = {
                    entity: 'User',
                    model_obj: {param: req.params, body: req.body},
                    error_obj: err,
                    error_msg: err.message
                };
                res.status(500).send("Error wwhile adding movie");
        }
    } ;

exports.updateMovie = async (req, res) => {
        try {
                const user = await User.addMovie(req.body);
                if (user) { 
                    res.send('Updated successfully');
                    }
                }
        catch (err) {
                    let error_data = {
                        entity: 'User',
                        model_obj: {param: req.params, body: req.body},
                        error_obj: err,
                        error_msg: err.message
                    };
                    res.status(500).send("Error while updating movie");
            }
        } ;
exports.deleteMovie = async (req, res) => {
            try {
                    const user = await User.deleteMovie(req.params.id);
                    if (user) { 
                        res.send('deleted successfully');
                        }
                    }
            catch (err) {
                        let error_data = {
                            entity: 'User',
                            model_obj: {param: req.params, body: req.body},
                            error_obj: err,
                            error_msg: err.message
                        };
                        res.status(500).send("Error while deletion of the  movie");
                }
            } ;