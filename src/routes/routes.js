const { getItems, getItem, postItem } = require("../controllers/controllers");
const start = require("../database/database");

async function routes(fastify, options) {
  const dbCollection = await start();
  fastify.get("/students", getItems(dbCollection));
  fastify.get("/student/:id", getItem(dbCollection));
  fastify.post("/student", postItem(dbCollection));
}

module.exports = routes;
