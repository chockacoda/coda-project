const router = require('express').Router();
const {loggedIn, adminOnly} = require("../helpers/auth.middleware");
const userController = require('../controllers/user.controller');


router.post('/login', userController.login);

router.get('/usernameCheckUnique/:id',userController.usernameCheckUnique);

router.post('/register', userController.register);

router.get('/getMovieList/:id', loggedIn,userController.getMovieList);

router.get('/getMovieById/:id',loggedIn,userController.getMovieById);


router.post('/addMovie',loggedIn,adminOnly,userController.addMovie);


router.put('/updateMovie', loggedIn,adminOnly,userController.updateMovie);

router.delete('/deleteMovie/:id',loggedIn,adminOnly,userController.deleteMovie);


// router.post('/movies/rate/:id', (req, res) => {
//     const newRating = new Rating({
//       movie_id: req.params.id,
//       user_id: req.user.id,
//       rate: req.body.rate,
//     });

//     newRating.save((error, rating) => {
//       if (error) { console.log(error); }
//       res.send({
//         movie_id: rating.movie_id,
//         user_id: rating.user_id,
//         rate: rating.rate,
//       });
//     });
//   });

  router.post('/getAverageRating',loggedIn,userController.averageRating);
    
module.exports = router;