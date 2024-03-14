const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://dinesh:mongo@studentcluster0.bgwir52.mongodb.net/?retryWrites=true&w=majority&appName=StudentCluster0";

const client = new MongoClient(uri);

async function start() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas", err);
  }
}

start();
