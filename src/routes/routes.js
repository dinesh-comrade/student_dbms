const {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} = require("../controllers/controllers");
const {
  getItemsOpt,
  getItemOpt,
  postItemOpt,
  updateItemOpt,
  deleteItemOpt,
} = require("./schema");
const start = require("../database/database");

async function routes(fastify, options) {
  const dbCollection = await start();

  fastify.route({
    method: "GET",
    url: "/students",
    schema: getItemsOpt,
    handler: getItems(dbCollection),
  });

  fastify.route({
    method: "GET",
    url: "/student/:id",
    schema: getItemOpt,
    handler: getItem(dbCollection),
  });

  fastify.route({
    method: "POST",
    url: "/student",
    schema: postItemOpt,
    handler: postItem(dbCollection),
  });

  fastify.route({
    method: "PUT",
    url: "/student/:id",
    schema: updateItemOpt,
    handler: updateItem(dbCollection),
  });

  fastify.route({
    method: "DELETE",
    url: "/student/:id",
    schema: deleteItemOpt,
    handler: deleteItem(dbCollection),
  });
}

module.exports = routes;
