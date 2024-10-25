// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fiel_escudeiro',
    password: '',
    port: 5432,
});

module.exports = pool;
