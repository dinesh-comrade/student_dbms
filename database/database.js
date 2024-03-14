const fastify = require("fastify")({ logger: true });
const { MongoClient } = require("mongodb");

const PORT = 6000;
const uri =
  "mongodb+srv://dinesh:mongo@studentcluster0.bgwir52.mongodb.net/?retryWrites=true&w=majority&appName=StudentCluster0";

const client = new MongoClient(uri);
const dbName = "studentdb";
const collectionName = "studentcollection";
const dbCollection = client.db(dbName).collection(collectionName);

async function start() {
  try {
    await client.connect();
  } catch (err) {
    console.error(err);
  }
}

async function fastifyServer() {
  try {
    await start();
    // fastify.register(require("../routes/routes.js"), { dbCollection });
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

fastifyServer();

async function routes(fastify, options) {
  fastify.get("/students", async (request, reply) => {
    try {
      const students = await dbCollection.find({}).toArray();

      return reply.code(200).send(students);
    } catch (error) {
      console.error("Error fetching students:", error);
      return reply.code(500).send({ error: "Internal Server Error" });
    }
  });
}

routes(fastify, {});
