const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://dinesh:mongo@studentcluster0.bgwir52.mongodb.net/?retryWrites=true&w=majority&appName=StudentCluster0";

const client = new MongoClient(uri);
const dbName = "studentdb";
const collectionName = "studentcollection";

async function start() {
  try {
    await client.connect();
    const dbCollection = client.db(dbName).collection(collectionName);
    return dbCollection;
  } catch (err) {
    console.error(err);
  }
}

module.exports = start;
