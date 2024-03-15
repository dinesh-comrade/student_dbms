const {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} = require("../controllers/controllers");
const start = require("../database/database");

async function routes(fastify, options) {
  const dbCollection = await start();
  fastify.get("/students", getItems(dbCollection));
  fastify.get("/student/:id", getItem(dbCollection));
  fastify.post("/student", postItem(dbCollection));
  fastify.put("/student/:id", updateItem(dbCollection));
  fastify.delete("/student/:id", deleteItem(dbCollection));
}

module.exports = routes;
