const {MongoClient} = require('mongodb');
require('dotenv').config();
const client = new MongoClient(process.env.DATABASE_ATLAS)
console.log("Database Connection Established!");

module.exports = {client};