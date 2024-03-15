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
  fastify.route({
    method: "GET",
    url: "/students",
    handler: getItems(dbCollection),
  });

  fastify.route({
    method: "GET",
    url: "/student/:id",
    handler: getItem(dbCollection),
  });

  fastify.route({
    method: "POST",
    url: "/student",
    handler: postItem(dbCollection),
  });

  fastify.route({
    method: "PUT",
    url: "/student/:id",
    handler: updateItem(dbCollection),
  });

  fastify.route({
    method: "DELETE",
    url: "/student/:id",
    handler: deleteItem(dbCollection),
  });
}

module.exports = routes;
