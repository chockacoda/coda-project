const sql = require("./db.js");
const { NotFoundError } = require("../helpers/utility");

// constructor
const User = function(user) {
    if( typeof user.id != 'undefined' ) {
        this.id = user.id;
    }
    this.username = user.username;
    this.password = user.password;
    this.email=user.email;
    this.enabled=user.enabled;
    
};


User.login = async (value) => {
    let row = await sql.query(`SELECT * FROM users WHERE username = ?`, [value]);
    if( row.length ) {
        return row[0];
    }
    else {
        throw new NotFoundError("User does not exist");
    }
};

User.create = async (newUser) => {
    let insert = await sql.query("INSERT INTO users SET ?", newUser);
    if( insert.insertId) {
        return insert.insertId;
    }
    else {
        throw new NotFoundError("unable to insert");
    }
};

User.getMovieList = async (id) => {
    let row = await sql.query(`SELECT Movie.movie_id,Movie.movie_crew,Movie.movie_genre,Movie.movie_name,avg(Rating.star) AS average_rating,(SELECT star from Rating 
        WHERE Rating.movie_id = Movie.movie_id and Rating.user_id=?)AS individual_rating
            FROM Movie, Rating
            WHERE Rating.movie_id = Movie.movie_id
            GROUP BY Rating.movie_id
            ORDER BY avg(Rating.star) desc, Movie.movie_id`,[id]);
    if(row.length ) {
        return row;
    }
    else {
        throw new NotFoundError("No movie exist");
    }
};

User.getMovieById = async (value) => {
    let row = await sql.query(`SELECT * FROM movie WHERE movie_id = ?`, [value]);
    if( row.length ) {
        return row[0];
    }
    else {
        throw new NotFoundError("required Movie doesn't exist");
    }
};

User.usernameCheckUnique= async (value) => {
    let row = await sql.query(`SELECT * FROM users WHERE username = ?`, [value]);
    if( row.length ) {
        return false;
    }
    else {
       return true;
    }
};

User.averageRating = async (rating) => {

    let row = await sql.query(`SELECT * FROM rating where user_id=? AND movie_id=?`, [rating.user_id,rating.movie_id]);
    if( row.length ) {
       
        let update_row = await sql.query(`UPDATE rating SET star=? WHERE user_id=? AND movie_id=?`, [rating.individual_rating,rating.user_id,rating.movie_id]);
        if(update_row.affectedRows==1){
           return true; 
        }
        else{
            throw new NotFoundError("cannot insert");
        }
    }
    else {
        let new_row = await sql.query(`INSERT INTO rating(star,user_id,movie_id) VALUES (?,?,?)` ,[rating.individual_rating,rating.user_id,rating.movie_id]);
        if(new_row.affectedRows==1){
            return true; 
        }
        else{
            throw new NotFoundError("cannot update");
             }
        }
};

User.deleteMovie = async (value) => {
    let row = await sql.query(`DELETE FROM movie WHERE movie_id = ?`, [value]);
    if( row.affectedRows==1) {
        return true;
    }
    else {
        throw new NotFoundError("cannot delete");
    }
};

User.addMovie = async (movie) => {
    movie.movie_id=0;
    var procd = "SET @movie_id = ?;SET @movie_crew = ?;SET @movie_genre = ?;SET @movie_name = ?; \
    CALL MovieAddOrEdit(@movie_id,@movie_crew,@movie_genre,@movie_name);";
    let row = await sql.query(procd, [movie.movie_id, movie.movie_crew, movie.movie_genre, movie.movie_name]);
    if( row.length ) {
        return row;
    }
    else {
        throw new NotFoundError("error during the operation");
    }
};


User.getType = async (id) => {
    let row = await sql.query(`SELECT u.role_id FROM users_roles u LEFT JOIN users ut ON u.user_id = ut.user_id WHERE u.user_id = ?`, id);
    if( row.length ) {
        let role_type=await sql.query(`SELECT name FROM roles WHERE role_id = ?`, row[0].role_id);
        if( role_type.length ) {
        return role_type[0];
    }
    else{
        throw new NotFoundError("role does not exist");
    }
}
    else {
        throw new NotFoundError("User does not exist");
    }
};

module.exports = User;