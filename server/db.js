const Pool = require("pg").Pool;

const pool= new Pool({
    user : "postgres",
    password : "password",
    port : 5433,
    database : "TATAAIA"
});

module.exports = pool;