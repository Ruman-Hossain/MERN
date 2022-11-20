const {MongoClient} = require('mongodb');
require('dotenv').config();
console.log(process.env.DATABASE_LOCAL) 

const client = new MongoClient(process.env.DATABASE_LOCAL);
console.log("Database connected");

module.exports = {client};