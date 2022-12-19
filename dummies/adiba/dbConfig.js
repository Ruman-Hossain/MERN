const { MongoClient } = require("mongodb");

require('dotenv').config()

const client = new MongoClient(process.env.DATABASE_LOCAL);
console.log('Database Connected Successfully');

module.exports ={client}