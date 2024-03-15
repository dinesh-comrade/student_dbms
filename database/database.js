const { getItems } = require("../controllers/controllers");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://dinesh:mongo@studentcluster0.bgwir52.mongodb.net/?retryWrites=true&w=majority&appName=StudentCluster0";

const client = new MongoClient(uri);

async function start() {
  try {
    await client.connect();
  } catch (err) {
    console.error(err);
  }
}

start();

const dbName = "studentdb";
const collectionName = "studentcollection";
const dbCollection = client.db(dbName).collection(collectionName);

async function routes(fastify, options) {
  fastify.get("/students", getItems(dbCollection));
}

module.exports = routes;
