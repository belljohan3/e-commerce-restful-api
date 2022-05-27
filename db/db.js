const { Pool, Client } = require('pg');

const client = new Client({
    user: "postgres",
    password: "root",
    database: "ecomdb",
    host: "localhost",
    port: 5432
})

module.exports = client;