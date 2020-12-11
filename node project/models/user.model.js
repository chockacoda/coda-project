const sql = require("./db.js");
const { NotFoundError } = require("../helpers/utility");

// constructor
const User = function(user) {
    if( typeof user.id != 'undefined' ) {
        this.id = user.id;
    }
    this.name = user.name;
    this.password = user.password;
    
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

User.getMovieList = async () => {
    let row = await sql.query(`SELECT * FROM movie `);
    if( row.length ) {
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

User.averageRating = async (value) => {
    let row = await sql.query(`SELECT AVG(star) FROM rating WHERE movie_id = ?`, [value]);
    if( row.length ) {
        return row[0];
    }
    else {
        throw new NotFoundError("required avg of Movie doesn't exist");
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