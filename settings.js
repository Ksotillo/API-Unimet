require('dotenv').config();

const APIServerPort = process.env.API_SERVER_PORT;

const database = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
}

module.exports = {
    database,
    APIServerPort
}